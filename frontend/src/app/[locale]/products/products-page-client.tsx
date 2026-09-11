"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { SuwFinalCtaSection } from "@/src/components/organisms/suw-final-cta-section";
import { SuwProductsGridSection } from "@/src/components/organisms/suw-products-grid-section";
import type { SupportedLocale } from "@/src/lib/locale";
import { getProducts } from "@/src/lib/products";
import type { ProductCategory, ProductGroup, ProductPageSettings, ProductSummary } from "@/src/lib/products";
import type { FinalCtaContent } from "@/src/lib/final-cta";
import { resolveFinalCtaHref } from "@/src/lib/final-cta";
import { formatPageTitle, SITE_URL } from "@/src/lib/metadata";
import { resolveAssetUrl } from "@/src/lib/assets";

import { ProductsHero } from "./products-hero";

type ProductsPageClientProps = {
  locale: SupportedLocale;
  content: ProductPageSettings;
  groups: ProductGroup[];
  categories: ProductCategory[];
  finalCta: FinalCtaContent;
};

export function ProductsPageClient({ locale, content, groups, categories, finalCta }: ProductsPageClientProps) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "";
  const [products, setProducts] = useState<ProductSummary[]>([]);

  useEffect(() => {
    let active = true;

    if (!category) {
      setProducts([]);
      return () => {
        active = false;
      };
    }

    getProducts(locale, `category=${encodeURIComponent(category)}`).then((items) => {
      if (active) {
        setProducts(items);
      }
    });

    return () => {
      active = false;
    };
  }, [category, locale]);

  const selectedCategory = category
    ? categories.find((item) => item.slug === category)
    : undefined;

  useEffect(() => {
    if (!selectedCategory) return;
    const title = formatPageTitle(selectedCategory.seo_title || selectedCategory.name);
    const description = selectedCategory.seo_description || selectedCategory.description;
    const path = `/products?category=${encodeURIComponent(selectedCategory.slug)}`;
    const canonical = `${SITE_URL}/${locale}${path}`;
    const image = selectedCategory.header_image || selectedCategory.image;
    const upsertMeta = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    };
    const upsertLink = (selector: string, rel: string, href: string, hrefLang?: string) => {
      let element = document.head.querySelector<HTMLLinkElement>(selector);
      if (!element) {
        element = document.createElement("link");
        element.rel = rel;
        document.head.appendChild(element);
      }
      element.href = href;
      if (hrefLang) element.hreflang = hrefLang;
    };

    document.title = title;
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: locale === "tr" ? "tr_TR" : "en_US" });
    if (image) upsertMeta('meta[property="og:image"]', { property: "og:image", content: resolveAssetUrl(image) });
    upsertLink('link[rel="canonical"]', "canonical", canonical);
    upsertLink('link[rel="alternate"][hreflang="tr"]', "alternate", `${SITE_URL}/tr${path}`, "tr");
    upsertLink('link[rel="alternate"][hreflang="en"]', "alternate", `${SITE_URL}/en${path}`, "en");
    upsertLink('link[rel="alternate"][hreflang="x-default"]', "alternate", `${SITE_URL}/tr${path}`, "x-default");
  }, [locale, selectedCategory]);

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

      <SuwFinalCtaSection bottomLabel={finalCta.bottom_label} buttonLabel={finalCta.text} description={finalCta.description} href={resolveFinalCtaHref(locale, finalCta.link)} title={finalCta.title} />
    </main>
  );
}
