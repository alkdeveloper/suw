import { createAPI } from "@/src/lib/api";
import type { SupportedLocale } from "@/src/lib/locale";

export type ProductHeroContent = { eyebrow: string; title: string; description: string; hero_image: string | null; hero_image_mobile: string | null };
export type ProductPageSettings = ProductHeroContent & { seo_title: string; seo_description: string };
export type ProductGroup = { id: number; name: string; slug: string; image: string | null; short_description: string; url: string; hero_eyebrow: string; hero_title: string; hero_description: string; hero_image: string | null; hero_image_mobile: string | null };
export type ProductCategory = { id: number; name: string; slug: string; image: string | null; description: string; header_image: string | null; seo_title: string; seo_description: string; groups: string[] };
export type ProductSummary = { id: number; name: string; slug: string; product_code: string; main_image: string | null; short_description: string; category: ProductCategory; groups: ProductGroup[]; is_featured: boolean };
export type ProductDetail = ProductSummary & { description: string; materials: string; features: string; colors: string; sizes: string; images: Array<{ image: string; alt: string; sort_order: number }> };

export const fallbackProductPage: Record<SupportedLocale, ProductPageSettings> = {
  tr: { eyebrow: "ÜRÜNLER", title: "İŞ İÇİN GELİŞTİRİLDİ.", description: "", hero_image: null, hero_image_mobile: null, seo_title: "Ürünler", seo_description: "SUW profesyonel iş giyimi ürünlerini keşfedin. Performans, dayanıklılık ve günlük kullanım için geliştirilen çözümler." },
  en: { eyebrow: "PRODUCTS", title: "BUILT FOR THE JOB.", description: "", hero_image: null, hero_image_mobile: null, seo_title: "Products", seo_description: "Explore SUW professional workwear developed for performance, durability and everyday use." },
};

const groupCopy = {
  tr: [
    ["summer", "YAZLIK", "Hafif ve nefes alan çalışma katmanları.", "/images/mock/topwear.jpg"],
    ["winter", "KIŞLIK", "Soğuk ve zorlu koşullar için koruyucu katmanlar.", "/images/mock/outerwear.jpg"],
    ["bags", "ÇANTA", "Ekipman ve günlük operasyon için dayanıklı taşıma çözümleri.", "/images/mock/workwear.jpg"],
    ["accessories", "AKSESUAR", "İş giyimini tamamlayan işlevsel parçalar.", "/images/mock/accessories.jpg"],
  ],
  en: [
    ["summer", "SUMMER", "Lightweight, breathable layers for work.", "/images/mock/topwear.jpg"],
    ["winter", "WINTER", "Protective layers for cold and demanding conditions.", "/images/mock/outerwear.jpg"],
    ["bags", "BAGS", "Durable carry solutions for equipment and daily operations.", "/images/mock/workwear.jpg"],
    ["accessories", "ACCESSORIES", "Functional pieces that complete professional workwear.", "/images/mock/accessories.jpg"],
  ],
} as const;

export function fallbackGroups(locale: SupportedLocale): ProductGroup[] {
  return groupCopy[locale].map(([slug, name, short_description, image], index) => ({ id: index + 1, slug, name, short_description, image, url: `/products/${slug}/`, hero_eyebrow: locale === "tr" ? "ÜRÜN GRUBU" : "PRODUCT GROUP", hero_title: name, hero_description: short_description, hero_image: null, hero_image_mobile: null }));
}

const categoryDefinitions = [
  ["t-shirt", "T-Shirt", "T-Shirt", ["summer"]], ["sweatshirt", "Sweatshirt", "Sweatshirt", ["summer", "winter"]],
  ["ceket", "Ceket", "Jacket", ["winter"]], ["pantolon", "Pantolon", "Trousers", ["summer", "winter"]],
  ["tulum", "Tulum", "Coveralls", []], ["onluk", "Önlük", "Apron", []], ["polar", "Polar", "Fleece", ["winter"]],
  ["yelek", "Yelek", "Vest", ["summer", "winter"]], ["mont-kaban", "Mont & Kaban", "Coats & Jackets", ["winter"]],
  ["softshell", "Softshell", "Softshell", ["winter"]], ["yagmurluk", "Yağmurluk", "Rainwear", ["winter"]],
  ["gomlek", "Gömlek", "Shirt", ["summer"]], ["sapka", "Şapka", "Cap", ["accessories"]], ["bere", "Bere", "Beanie", ["accessories"]],
  ["eldiven", "Eldiven", "Gloves", ["accessories"]], ["promosyon-canta", "Promosyon Çanta", "Promotional Bag", ["bags"]],
  ["takim-cantasi", "Takım Çantası", "Tool Bag", ["bags"]], ["sportswear", "Sportswear", "Sportswear", ["summer"]],
] as const;

export function fallbackCategories(locale: SupportedLocale, group?: string): ProductCategory[] {
  return categoryDefinitions
    .filter(([, , , groups]) => !group || (groups as readonly string[]).includes(group))
    .map(([slug, tr, en, groups], index) => ({ id: index + 1, slug, name: locale === "tr" ? tr : en, image: `/images/mock/${group === "bags" ? "accessories" : group === "winter" ? "outerwear" : "topwear"}.jpg`, description: "", header_image: null, seo_title: "", seo_description: "", groups: [...groups] }));
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
        short_description: group.short_description || local?.short_description || "",
        hero_eyebrow: group.hero_eyebrow || local?.hero_eyebrow || "",
        hero_title: group.hero_title || local?.hero_title || group.name,
        hero_description: group.hero_description || local?.hero_description || group.short_description,
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
    return Object.fromEntries(Object.entries(fallback).map(([key, defaultValue]) => [key, value[key as keyof ProductPageSettings] || defaultValue])) as ProductPageSettings;
  } catch {
    return fallback;
  }
}

export async function getProductCategories(locale: SupportedLocale, group?: string) {
  try { return (await createAPI(locale).get<ProductCategory[]>(`products/categories/${group ? `?group=${group}` : ""}`)).data; } catch { return fallbackCategories(locale, group); }
}

export async function getProducts(locale: SupportedLocale, query = "") {
  try { return (await createAPI(locale).get<ProductSummary[]>(`products/products/${query ? `?${query}` : ""}`)).data; } catch { return []; }
}

export async function getProduct(locale: SupportedLocale, slug: string) {
  try { return (await createAPI(locale).get<ProductDetail>(`products/products/${slug}/`)).data; } catch { return null; }
}
