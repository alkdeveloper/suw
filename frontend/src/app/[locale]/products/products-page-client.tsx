"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { SuwFinalCtaSection } from "@/src/components/organisms/suw-final-cta-section";
import { SuwProductsGridSection } from "@/src/components/organisms/suw-products-grid-section";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { getProducts } from "@/src/lib/products";
import type { ProductCategory, ProductGroup, ProductPageSettings, ProductSummary } from "@/src/lib/products";

import { ProductsHero } from "./products-hero";

type ProductsPageClientProps = {
  locale: SupportedLocale;
  content: ProductPageSettings;
  groups: ProductGroup[];
  categories: ProductCategory[];
};

export function ProductsPageClient({ locale, content, groups, categories }: ProductsPageClientProps) {
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
