"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";

type ProductCategory =
  | "all"
  | "workwear"
  | "outerwear"
  | "topwear"
  | "accessories";

type ProductItem = {
  id: string;
  name: string;
  code: string;
  category: Exclude<ProductCategory, "all">;
  imageSrc: string;
  colors: string[];
};

const products: ProductItem[] = [
  {
    id: "01",
    name: "Motion Stretch Pant",
    code: "SWP-241",
    category: "workwear",
    imageSrc: "/images/mock/product-1.jpg",
    colors: ["#111111", "#555b60", "#c9c4b8"],
  },
  {
    id: "02",
    name: "Core Work Jacket",
    code: "SWJ-118",
    category: "outerwear",
    imageSrc: "/images/mock/product-2.jpg",
    colors: ["#111111", "#26384a", "#b9b29f"],
  },
  {
    id: "03",
    name: "Essential Polo",
    code: "SWT-084",
    category: "topwear",
    imageSrc: "/images/mock/product-3.jpg",
    colors: ["#111111", "#ffffff", "#243e57"],
  },
  {
    id: "04",
    name: "Pro Softshell Vest",
    code: "SWV-062",
    category: "outerwear",
    imageSrc: "/images/mock/product-4.jpg",
    colors: ["#111111", "#4b4f52", "#8a8d83"],
  },
  {
    id: "05",
    name: "Utility Work Pant",
    code: "SWP-312",
    category: "workwear",
    imageSrc: "/images/mock/product-1.jpg",
    colors: ["#111111", "#39434b", "#a89f90"],
  },
  {
    id: "06",
    name: "Performance Sweatshirt",
    code: "SWT-126",
    category: "topwear",
    imageSrc: "/images/mock/product-3.jpg",
    colors: ["#111111", "#36485b", "#d6d4cc"],
  },
  {
    id: "07",
    name: "Technical Shell Jacket",
    code: "SWJ-204",
    category: "outerwear",
    imageSrc: "/images/mock/product-4.jpg",
    colors: ["#111111", "#263238", "#7a7d77"],
  },
  {
    id: "08",
    name: "Work Cap",
    code: "SWA-018",
    category: "accessories",
    imageSrc: "/images/mock/product-2.jpg",
    colors: ["#111111", "#2e3f50", "#c3bba9"],
  },
];

const sectionContent = {
  tr: {
    collectionLabel: "ÜRÜN KOLEKSİYONU",
    productsLabel: "ÜRÜN",
    viewProduct: "ÜRÜNÜ GÖR",
    categoriesAriaLabel: "Ürün kategorileri",
    categories: [
      { id: "all", label: "TÜM ÜRÜNLER" },
      { id: "workwear", label: "İŞ GİYİMİ" },
      { id: "outerwear", label: "DIŞ GİYİM" },
      { id: "topwear", label: "ÜST GİYİM" },
      { id: "accessories", label: "AKSESUAR" },
    ] as Array<{
      id: ProductCategory;
      label: string;
    }>,
  },

  en: {
    collectionLabel: "PRODUCT COLLECTION",
    productsLabel: "PRODUCTS",
    viewProduct: "VIEW PRODUCT",
    categoriesAriaLabel: "Product categories",
    categories: [
      { id: "all", label: "ALL PRODUCTS" },
      { id: "workwear", label: "WORKWEAR" },
      { id: "outerwear", label: "OUTERWEAR" },
      { id: "topwear", label: "TOPWEAR" },
      { id: "accessories", label: "ACCESSORIES" },
    ] as Array<{
      id: ProductCategory;
      label: string;
    }>,
  },
};

export function SuwProductsGridSection() {
  const params = useParams();
  const locale = params?.locale === "en" ? "en" : "tr";
  const content = sectionContent[locale];

  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("all");

  const visibleProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }

    return products.filter(
      (product) => product.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <section className="suw-products-grid">
      <div className="suw-products-grid__inner">
        <div className="suw-products-grid__toolbar">
          <p className="suw-products-grid__label">
            {content.collectionLabel}
          </p>

          <div
            aria-label={content.categoriesAriaLabel}
            className="suw-products-grid__filters"
          >
            {content.categories.map((category) => (
              <button
                className={
                  activeCategory === category.id
                    ? "suw-products-grid__filter suw-products-grid__filter--active"
                    : "suw-products-grid__filter"
                }
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                type="button"
              >
                {category.label}
              </button>
            ))}
          </div>

          <span className="suw-products-grid__count">
            {String(visibleProducts.length).padStart(2, "0")}{" "}
            {content.productsLabel}
          </span>
        </div>

        <div className="suw-products-grid__grid">
          {visibleProducts.map((product) => (
            <article
              className="suw-products-grid__card"
              key={product.id}
            >
              <div className="suw-products-grid__image-wrap">
                <img
                  alt={product.name}
                  className="suw-products-grid__image"
                  src={product.imageSrc}
                />

                <span className="suw-products-grid__product-number">
                  {product.id}
                </span>

                <span className="suw-products-grid__view">
                  {content.viewProduct} ↗
                </span>
              </div>

              <div className="suw-products-grid__meta">
                <div>
                  <h2>{product.name}</h2>
                  <p>{product.code}</p>
                </div>

                <div className="suw-products-grid__colors">
                  {product.colors.map((color) => (
                    <span
                      className="suw-products-grid__color"
                      key={color}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}