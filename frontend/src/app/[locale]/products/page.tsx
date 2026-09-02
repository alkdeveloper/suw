import type { Metadata } from "next";

import { SuwFinalCtaSection } from "@/src/components/organisms/suw-final-cta-section";
import { SuwProductsGridSection } from "@/src/components/organisms/suw-products-grid-section";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { createLocalizedPageMetadata } from "@/src/lib/metadata";
import { getProductCategories, getProductGroups, getProductPageSettings, getProducts } from "@/src/lib/products";
import { ProductsHero } from "./products-hero";
export function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}
type ProductsPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
  searchParams?: Promise<{ category?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const { category } = (await searchParams) ?? {};
  const content = await getProductPageSettings(locale);
  const selectedCategory = category
    ? (await getProductCategories(locale)).find((item) => item.slug === category)
    : undefined;

  return createLocalizedPageMetadata(locale, {
    title: selectedCategory?.seo_title || selectedCategory?.name || content.seo_title,
    description: selectedCategory?.seo_description || selectedCategory?.description || content.seo_description,
    path: category ? `/products?category=${encodeURIComponent(category)}` : "/products",
  });
}

export default async function ProductsPage({
  params,
  searchParams,
}: ProductsPageProps) {
  const { locale } = await params;
  const { category } = (await searchParams) ?? {};
  const [content, groups, categories, products] = await Promise.all([
    getProductPageSettings(locale),
    getProductGroups(locale),
    getProductCategories(locale),
    category
      ? getProducts(locale, `category=${encodeURIComponent(category)}`)
      : Promise.resolve([]),
  ]);
  const selectedCategory = category
    ? categories.find((item) => item.slug === category)
    : undefined;

  return (
    <main>
      {!category ? <ProductsHero content={content} /> : null}

      <SuwProductsGridSection
        categories={categories}
        groups={groups}
        locale={locale}
        mode={category ? "products" : "categories"}
        products={products}
        selectedCategory={selectedCategory}
      />

      <SuwFinalCtaSection href={withLocalePath(locale, "/contact")} />
    </main>
  );
}
