import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SuwProductsGridSection } from "@/src/components/organisms/suw-products-grid-section";
import { SuwProductDetail } from "@/src/components/organisms/suw-product-detail";
import type { SupportedLocale } from "@/src/lib/locale";
import { getProduct, getProductCategories, getProductGroups, getProducts } from "@/src/lib/products";
import { absoluteUrl, createLocalizedPageMetadata } from "@/src/lib/metadata";
import { ProductsHero } from "../products-hero";

export async function generateStaticParams() {
  const locales = ["tr", "en"] as SupportedLocale[];
  const params = await Promise.all(locales.map(async (locale) => {
    const [groups, products] = await Promise.all([
      getProductGroups(locale),
      getProducts(locale),
    ]);
    return [...groups.map((group) => group.slug), ...products.map((product) => product.slug)]
      .filter((slug, index, values) => values.indexOf(slug) === index)
      .map((slug) => ({ locale, slug }));
  }));
  return params.flat();
}

export async function generateMetadata({ params }: { params: Promise<{ locale: SupportedLocale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const groups = await getProductGroups(locale);
  const group = groups.find((item) => item.slug === slug);
  if (group) {
    return createLocalizedPageMetadata(locale, {
      title: group.seo_title || group.name,
      description: group.seo_description || group.short_description,
      path: `/products/${group.slug}`,
      image: group.hero_image || group.image || undefined,
    });
  }

  const product = await getProduct(locale, slug);
  if (!product) return {};
  return createLocalizedPageMetadata(locale, {
    title: product.seo_title || product.name,
    description: product.seo_description || product.short_description,
    path: `/products/${product.slug}`,
    image: product.main_image || undefined,
  });
}

export default async function ProductRoute({ params }: { params: Promise<{ locale: SupportedLocale; slug: string }> }) {
  const { locale, slug } = await params;
  const groups = await getProductGroups(locale);
  const group = groups.find((item) => item.slug === slug);

  if (group) {
    const categories = await getProductCategories(locale, slug);
    return <main>
      <ProductsHero content={{ eyebrow: group.hero_eyebrow, title: group.name, description: group.hero_description, hero_image: group.hero_image, hero_image_mobile: group.hero_image_mobile }} />
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
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.seo_description || product.short_description || product.description || undefined,
          image: product.main_image ? [absoluteUrl(product.main_image)] : undefined,
          sku: product.product_code || undefined,
          url: absoluteUrl(`/${locale}/products/${product.slug}`),
          brand: { "@type": "Brand", name: "SUW" },
        }).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />
      <SuwProductDetail locale={locale} product={product} />
      {similarProducts.length > 0 ? <SuwProductsGridSection groups={groups} locale={locale} products={similarProducts} sectionTitle={locale === "tr" ? "BENZER ÜRÜNLER" : "SIMILAR PRODUCTS"} showToolbar={false} /> : null}
    </main>
  );
}
