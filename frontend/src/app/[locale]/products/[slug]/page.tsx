import { notFound } from "next/navigation";

import { SuwProductsGridSection } from "@/src/components/organisms/suw-products-grid-section";
import { SuwProductDetail } from "@/src/components/organisms/suw-product-detail";
import type { SupportedLocale } from "@/src/lib/locale";
import { getProduct, getProductCategories, getProductGroups, getProducts } from "@/src/lib/products";
import { ProductsHero } from "../products-hero";

const groupSlugs = ["summer", "winter", "bags", "accessories"];

export function generateStaticParams() {
  return ["tr", "en"].flatMap((locale) => groupSlugs.map((slug) => ({ locale, slug })));
}

export default async function ProductRoute({ params }: { params: Promise<{ locale: SupportedLocale; slug: string }> }) {
  const { locale, slug } = await params;
  const groups = await getProductGroups(locale);
  const group = groups.find((item) => item.slug === slug);

  if (group) {
    const categories = await getProductCategories(locale, slug);
    return <main>
      <ProductsHero content={{ eyebrow: group.hero_eyebrow, title: group.hero_title, description: group.hero_description, hero_image: group.hero_image, hero_image_mobile: group.hero_image_mobile }} />
      <SuwProductsGridSection activeGroup={slug} categories={categories} groups={groups} locale={locale} mode="categories" />
    </main>;
  }

  const product = await getProduct(locale, slug);
  if (!product) notFound();
  const similarProducts = (await getProducts(locale, `category=${encodeURIComponent(product.category.slug)}`))
    .filter((item) => item.slug !== product.slug)
    .slice(0, 4);
  return (
    <main>
      <SuwProductDetail locale={locale} product={product} />
      {similarProducts.length > 0 ? <SuwProductsGridSection groups={groups} locale={locale} products={similarProducts} sectionTitle={locale === "tr" ? "BENZER ÜRÜNLER" : "SIMILAR PRODUCTS"} showToolbar={false} /> : null}
    </main>
  );
}
