import { access, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const frontendRoot = path.join(repositoryRoot, "frontend");
const mediaRoot = path.join(repositoryRoot, "backend", "media");
const outputPath = path.join(frontendRoot, "src", "lib", "static-cms-snapshot.ts");
const apiBase = (process.env.SUW_SNAPSHOT_API_URL ?? "http://127.0.0.1:8001/api/").replace(/\/?$/, "/");
const locales = ["tr", "en"];
const mediaFiles = new Set();

async function fetchJson(locale, endpoint) {
  const response = await fetch(new URL(endpoint, apiBase), {
    headers: { "Accept-Language": locale },
  });
  if (!response.ok) {
    throw new Error(`${endpoint} (${locale}) returned ${response.status}`);
  }
  return response.json();
}

function localizeMedia(value) {
  if (Array.isArray(value)) return value.map(localizeMedia);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, localizeMedia(item)]));
  }
  if (typeof value !== "string") return value;
  try {
    const url = new URL(value);
    if (!url.pathname.startsWith("/media/")) return value;
    const relativePath = decodeURIComponent(url.pathname.slice("/media/".length)).replaceAll("\\", "/");
    mediaFiles.add(relativePath);
    return `__CMS_MEDIA__${relativePath}`;
  } catch {
    return value;
  }
}

function serialize(value) {
  return JSON.stringify(value, null, 2).replace(
    /"__CMS_MEDIA__([^"\\]+)"/g,
    (_, relativePath) => `mediaAsset(${JSON.stringify(relativePath)})`,
  );
}

const snapshot = {};
for (const locale of locales) {
  const [home, productPage, groups, homeGroups, categories, products, projects, corporate, contact, siteSettings] = await Promise.all([
    fetchJson(locale, "home/"),
    fetchJson(locale, "products/page/"),
    fetchJson(locale, "products/groups/"),
    fetchJson(locale, "products/groups/?home=true"),
    fetchJson(locale, "products/categories/"),
    fetchJson(locale, "products/products/"),
    fetchJson(locale, "projects/"),
    fetchJson(locale, "corporate/"),
    fetchJson(locale, "contact/"),
    fetchJson(locale, "core/settings/"),
  ]);

  snapshot[locale] = localizeMedia({
    home,
    productPage,
    groups,
    homeGroups,
    categories,
    products,
    projects,
    corporate,
    contact,
    siteSettings,
  });
}

for (const relativePath of mediaFiles) {
  const source = path.resolve(mediaRoot, relativePath);
  if (!source.startsWith(`${mediaRoot}${path.sep}`)) {
    throw new Error(`Unsafe media path: ${relativePath}`);
  }
  await access(source);
}

const byLocale = (key) => Object.fromEntries(locales.map((locale) => [locale, snapshot[locale][key]]));
const corporatePages = Object.fromEntries(locales.map((locale) => [locale, snapshot[locale].corporate.page]));
const corporateMetadata = Object.fromEntries(locales.map((locale) => [locale, {
  meta_title: snapshot[locale].corporate.meta_title ?? "",
  meta_description: snapshot[locale].corporate.meta_description ?? "",
}]));

const source = `import type {
  ContactPageResponse,
  CorporatePageResponse,
  HomePageResponse,
  ProjectsPageResponse,
  SiteSettingsResponse,
} from "@/src/lib/api-types";
import type { SupportedLocale } from "@/src/lib/locale";
const mediaBaseUrl = (process.env.NEXT_PUBLIC_MEDIA_URL ?? "https://d2yobq6ugd5avs.cloudfront.net").replace(/\\\/$/, "");
const mediaAsset = (path: string) => \`\${mediaBaseUrl}/media/\${path}\`;

export const staticHomeSnapshot = ${serialize(byLocale("home"))} as Record<SupportedLocale, Partial<HomePageResponse>>;

export const staticProductPageSnapshot = ${serialize(byLocale("productPage"))};
export const staticProductGroupsSnapshot = ${serialize(byLocale("groups"))} as unknown as Record<SupportedLocale, Array<Record<string, unknown>>>;
export const staticHomeProductGroupsSnapshot = ${serialize(byLocale("homeGroups"))} as unknown as Record<SupportedLocale, Array<Record<string, unknown>>>;
export const staticProductCategoriesSnapshot = ${serialize(byLocale("categories"))} as unknown as Record<SupportedLocale, Array<Record<string, unknown>>>;
export const staticProductsSnapshot = ${serialize(byLocale("products"))} as unknown as Record<SupportedLocale, Array<Record<string, unknown>>>;

export const staticCorporateSnapshot = ${serialize(corporatePages)} as Record<SupportedLocale, CorporatePageResponse["page"]>;
export const staticCorporateMetadata = ${serialize(corporateMetadata)} as Record<SupportedLocale, { meta_title: string; meta_description: string }>;
export const staticProjectsSnapshot = ${serialize(byLocale("projects"))} as Record<SupportedLocale, ProjectsPageResponse>;
export const staticContactSnapshot = ${serialize(byLocale("contact"))} as Record<SupportedLocale, ContactPageResponse>;

const staticSiteSettingsSnapshot = ${serialize(byLocale("siteSettings"))} as Record<SupportedLocale, SiteSettingsResponse>;

export function applyStaticSiteSettings(locale: SupportedLocale, base: SiteSettingsResponse): SiteSettingsResponse {
  const snapshot = staticSiteSettingsSnapshot[locale];
  return {
    ...base,
    ...snapshot,
    header_copy: { ...base.header_copy, ...snapshot.header_copy },
    footer_copy: {
      ...base.footer_copy,
      ...snapshot.footer_copy,
      contact_labels: { ...base.footer_copy.contact_labels, ...snapshot.footer_copy.contact_labels },
      social_labels: { ...base.footer_copy.social_labels, ...snapshot.footer_copy.social_labels },
    },
    not_found_copy: { ...base.not_found_copy, ...snapshot.not_found_copy },
  };
}
`;

await writeFile(outputPath, source, "utf8");
console.log(`Snapshot written to ${outputPath}`);
console.log(`${mediaFiles.size} referenced media files validated in ${mediaRoot}`);
