import type { Metadata } from "next";
import { Suspense } from "react";

import type { SupportedLocale } from "@/src/lib/locale";
import { createLocalizedPageMetadata } from "@/src/lib/metadata";
import { getProductCategories, getProductGroups, getProductPageSettings } from "@/src/lib/products";
import { getFinalCta } from "@/src/lib/final-cta";
import { ProductsPageClient } from "./products-page-client";
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
};

export async function generateMetadata({
  params,
}: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = await getProductPageSettings(locale);

  return createLocalizedPageMetadata(locale, {
    title: content.seo_title,
    description: content.seo_description,
    path: "/products",
    image: content.hero_image || undefined,
  });
}

export default async function ProductsPage({
  params,
}: ProductsPageProps) {
  const { locale } = await params;
  const [content, groups, categories, finalCta] = await Promise.all([
    getProductPageSettings(locale),
    getProductGroups(locale),
    getProductCategories(locale),
    getFinalCta(locale),
  ]);

  return (
    <Suspense fallback={null}>
      <ProductsPageClient categories={categories} content={content} finalCta={finalCta} groups={groups} locale={locale} />
    </Suspense>
  );
}
