import type { MetadataRoute } from "next";

import type { SupportedLocale } from "@/src/lib/locale";
import { absoluteUrl } from "@/src/lib/metadata";
import { getProductGroups, getProducts } from "@/src/lib/products";

const locales = ["tr", "en"] as SupportedLocale[];
const pagePaths = ["", "/products", "/projects", "/about", "/contact"];

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = locales.flatMap((locale) =>
    pagePaths.map((path) => ({ url: absoluteUrl(`/${locale}${path}`) })),
  );
  const productPages = await Promise.all(locales.map(async (locale) => {
    const [groups, products] = await Promise.all([getProductGroups(locale), getProducts(locale)]);
    return [
      ...groups.map((group) => ({ url: absoluteUrl(`/${locale}/products/${group.slug}`) })),
      ...products.map((product) => ({ url: absoluteUrl(`/${locale}/products/${product.slug}`) })),
    ];
  }));

  return [...staticPages, ...productPages.flat()];
}
