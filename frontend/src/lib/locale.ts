export const SUPPORTED_LOCALES = ["tr", "en"] as const;
export const DEFAULT_LOCALE = "tr";
export const LOCALE_COOKIE_NAME = "preferred-locale";

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export function normalizeLocale(locale?: string | null): SupportedLocale {
  if (locale && isSupportedLocale(locale)) {
    return locale;
  }

  return DEFAULT_LOCALE;
}

export function getAlternateLocale(locale: SupportedLocale): SupportedLocale {
  return locale === "tr" ? "en" : "tr";
}

function splitHrefParts(href: string) {
  const hashIndex = href.indexOf("#");
  const queryIndex = href.indexOf("?");
  const splitIndex =
    hashIndex === -1 ? queryIndex : queryIndex === -1 ? hashIndex : Math.min(hashIndex, queryIndex);

  if (splitIndex === -1) {
    return { pathname: href, suffix: "" };
  }

  return {
    pathname: href.slice(0, splitIndex),
    suffix: href.slice(splitIndex),
  };
}

export function normalizeInternalPath(href: string): string {
  const { pathname, suffix } = splitHrefParts(href);
  let normalizedPath = pathname === "/" ? "/" : pathname.startsWith("/") ? pathname : `/${pathname}`;

  normalizedPath = normalizedPath.replace(/\/+/g, "/");
  normalizedPath = normalizedPath.replace(/^\/\d+\/(?=(tr|en)(\/|$))/u, "/");
  normalizedPath = normalizedPath.replace(/^\/(tr|en)(?=\/|$)/u, "") || "/";

  return `${normalizedPath}${suffix}`;
}

export function withLocalePath(locale: SupportedLocale, href: string): string {
  if (!href || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("#")) {
    return href;
  }

  const normalizedHref = normalizeInternalPath(href);
  const localizedHref = normalizedHref === "/" ? "" : normalizedHref;

  return `/${locale}${localizedHref}`;
}
