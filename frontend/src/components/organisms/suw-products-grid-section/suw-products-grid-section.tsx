import Link from "next/link";
import { Fragment } from "react";

import { resolveAssetUrl } from "@/src/lib/assets";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import type { ProductCategory, ProductGroup, ProductSummary } from "@/src/lib/products";

type Props = {
  locale: SupportedLocale;
  groups: ProductGroup[];
  products?: ProductSummary[];
  categories?: ProductCategory[];
  activeGroup?: string;
  selectedCategory?: ProductCategory;
  mode?: "categories" | "products";
  sectionTitle?: string;
  showToolbar?: boolean;
};

export function SuwProductsGridSection({ locale, groups, products = [], categories = [], activeGroup, selectedCategory, mode = "products", sectionTitle, showToolbar = true }: Props) {
  const copy = locale === "tr"
    ? { collection: "ÜRÜN KOLEKSİYONU", all: "TÜM ÜRÜNLER", products: "ÜRÜN", categories: "KATEGORİ", view: "İNCELE", empty: "Bu kategoride henüz ürün bulunmuyor." }
    : { collection: "PRODUCT COLLECTION", all: "ALL PRODUCTS", products: "PRODUCTS", categories: "CATEGORIES", view: "VIEW", empty: "No products are available in this category yet." };
  const isCategoryMode = mode === "categories";
  const cards = isCategoryMode ? categories : products;

  return (
    <section className="suw-products-grid">
      <div className="suw-products-grid__inner">
        {showToolbar ? <div className="suw-products-grid__toolbar">
          <p className="suw-products-grid__label">{copy.collection}</p>
          <nav className="suw-products-grid__filters">
            <Link className={!activeGroup && !selectedCategory ? "suw-products-grid__filter suw-products-grid__filter--active" : "suw-products-grid__filter"} href={withLocalePath(locale, "/products")}>{copy.all}</Link>
            {groups.map((group) => <Link className={activeGroup === group.slug ? "suw-products-grid__filter suw-products-grid__filter--active" : "suw-products-grid__filter"} href={withLocalePath(locale, `/products/${group.slug}`)} key={group.slug}>{group.name}</Link>)}
          </nav>
          {cards.length > 0 ? (
            <span className="suw-products-grid__count">
              {String(cards.length).padStart(2, "0")} {isCategoryMode ? copy.categories : copy.products}
            </span>
          ) : null}
        </div> : null}

        {sectionTitle ? <h2 className="suw-products-grid__section-title">{sectionTitle}</h2> : null}

        {selectedCategory ? (
          <header className="suw-products-grid__category-header">
            <div className="suw-products-grid__category-copy">
              <nav aria-label={locale === "tr" ? "Kategori yolu" : "Category breadcrumb"} className="suw-products-grid__breadcrumb">
                <Link href={withLocalePath(locale, "/products")}>{locale === "tr" ? "ÜRÜNLER" : "PRODUCTS"}</Link>
                {selectedCategory.groups.slice(0, 1).map((slug) => {
                  const group = groups.find((item) => item.slug === slug);
                  return group ? <Fragment key={slug}>
                    <span aria-hidden="true" className="suw-products-grid__breadcrumb-separator">/</span>
                    <Link href={withLocalePath(locale, `/products/${slug}`)}>{group.name}</Link>
                  </Fragment> : null;
                })}
                <span aria-hidden="true" className="suw-products-grid__breadcrumb-separator">/</span>
                <span>{selectedCategory.name}</span>
              </nav>
              <h2>{selectedCategory.name}</h2>
              {selectedCategory.description ? <p>{selectedCategory.description}</p> : null}
            </div>
            {selectedCategory.header_image ? <img alt="" className="suw-products-grid__category-image" src={resolveAssetUrl(selectedCategory.header_image)} /> : null}
          </header>
        ) : null}

        {cards.length > 0 ? <div className="suw-products-grid__grid">
          {cards.map((card, index) => {
            const isCategory = !("product_code" in card);
            const image = isCategory ? card.image : card.main_image;
            const href = isCategory
              ? withLocalePath(locale, `/products?category=${card.slug}`)
              : withLocalePath(locale, `/products/${card.slug}`);
            return (
              <article className="suw-products-grid__card" key={card.slug}>
                <Link className="suw-products-grid__card-link" href={href}>
                  <div className="suw-products-grid__image-wrap">
                    {image
                      ? <img alt={card.name} className="suw-products-grid__image" src={resolveAssetUrl(image)} />
                      : <span aria-hidden="true" className="suw-products-grid__image-placeholder" />}
                    <span className="suw-products-grid__product-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="suw-products-grid__view">{copy.view} ↗</span>
                  </div>
                  <div className="suw-products-grid__meta">
                    <div>
                      <h2>{card.name}</h2>
                      {isCategory && card.description ? <p>{card.description}</p> : null}
                      {!isCategory ? <p className="suw-products-grid__code">{card.product_code}</p> : null}
                      {!isCategory && card.short_description ? <p className="suw-products-grid__description">{card.short_description}</p> : null}
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div> : (
          <div className="suw-products-grid__empty-state">
            <p>{copy.empty}</p>
          </div>
        )}
      </div>
    </section>
  );
}
