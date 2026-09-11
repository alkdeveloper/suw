import { createAPI } from "@/src/lib/api";
import type { SupportedLocale } from "@/src/lib/locale";
import {
  staticProductCategoriesSnapshot,
  staticProductGroupsSnapshot,
  staticProductPageSnapshot,
  staticProductsSnapshot,
} from "@/src/lib/static-cms-snapshot";

export type ProductHeroContent = { eyebrow: string; title: string; description: string; hero_image: string | null; hero_image_mobile: string | null };
export type ProductPageSettings = ProductHeroContent & { seo_title: string; seo_description: string };
export type ProductGroup = { id: number; name: string; slug: string; image: string | null; image_mobile: string | null; short_description: string; url: string; hero_eyebrow: string; hero_title: string; hero_description: string; hero_image: string | null; hero_image_mobile: string | null; seo_title: string; seo_description: string };
export type ProductCategory = { id: number; name: string; slug: string; image: string | null; description: string; header_image: string | null; seo_title: string; seo_description: string; groups: string[] };
export type ProductSummary = { id: number; name: string; slug: string; product_code: string; main_image: string | null; short_description: string; category: ProductCategory; groups: ProductGroup[]; is_featured: boolean; seo_title: string; seo_description: string };
export type ProductDetail = ProductSummary & { description: string; materials: string; features: string; colors: string; sizes: string; images: Array<{ image: string; alt: string; sort_order: number }> };

export const fallbackProductPage = staticProductPageSnapshot as Record<SupportedLocale, ProductPageSettings>;

export function fallbackGroups(locale: SupportedLocale): ProductGroup[] {
  return staticProductGroupsSnapshot[locale] as ProductGroup[];
}

export function fallbackCategories(locale: SupportedLocale, group?: string): ProductCategory[] {
  const categories = staticProductCategoriesSnapshot[locale] as ProductCategory[];
  return group ? categories.filter((category) => category.groups.includes(group)) : categories;
}

export async function getProductGroups(locale: SupportedLocale, home = false) {
  const fallback = fallbackGroups(locale);
  try {
    const groups = (await createAPI(locale).get<ProductGroup[]>(`products/groups/${home ? "?home=true" : ""}`)).data;
    return groups.map((group) => {
      const local = fallback.find((item) => item.slug === group.slug);
      return {
        ...group,
        image: group.image || local?.image || null,
        short_description: group.short_description ?? "",
        hero_eyebrow: group.hero_eyebrow ?? "",
        hero_title: group.hero_title ?? "",
        hero_description: group.hero_description ?? "",
        hero_image: group.hero_image || null,
        hero_image_mobile: group.hero_image_mobile || null,
      };
    });
  } catch {
    return fallback;
  }
}

export async function getProductPageSettings(locale: SupportedLocale) {
  const fallback = fallbackProductPage[locale];
  try {
    const value = (await createAPI(locale).get<ProductPageSettings>("products/page/")).data;
    return Object.fromEntries(Object.entries(fallback).map(([key, defaultValue]) => [key, value[key as keyof ProductPageSettings] ?? defaultValue])) as ProductPageSettings;
  } catch {
    return fallback;
  }
}

export async function getProductCategories(locale: SupportedLocale, group?: string) {
  try { return (await createAPI(locale).get<ProductCategory[]>(`products/categories/${group ? `?group=${group}` : ""}`)).data; } catch { return fallbackCategories(locale, group); }
}

export async function getProducts(locale: SupportedLocale, query = "") {
  try { return (await createAPI(locale).get<ProductSummary[]>(`products/products/${query ? `?${query}` : ""}`)).data; } catch {
    const products = staticProductsSnapshot[locale] as ProductSummary[];
    const category = new URLSearchParams(query).get("category");
    const group = new URLSearchParams(query).get("group");
    return products.filter((product) => (!category || product.category.slug === category) && (!group || product.category.groups.includes(group)));
  }
}

export async function getProduct(locale: SupportedLocale, slug: string) {
  try { return (await createAPI(locale).get<ProductDetail>(`products/products/${slug}/`)).data; } catch { return null; }
}
