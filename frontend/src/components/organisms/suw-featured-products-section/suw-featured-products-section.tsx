"use client";

import { useParams } from "next/navigation";

import { resolveAssetUrl } from "@/src/lib/assets";

type FeaturedProduct = {
  id: string;
  name: string;
  code: string;
  imageSrc: string;
  colors: string[];
};

const mockProducts: FeaturedProduct[] = [
  {
    id: "1",
    name: "Motion Stretch Pant",
    code: "SWP-241",
    imageSrc: "/images/mock/product-1.jpg",
    colors: ["#111111", "#4f565c", "#c7c3b8"],
  },
  {
    id: "2",
    name: "Core Work Jacket",
    code: "SWJ-118",
    imageSrc: "/images/mock/product-2.jpg",
    colors: ["#111111", "#263544", "#c2b89f"],
  },
  {
    id: "3",
    name: "Essential Polo",
    code: "SWT-084",
    imageSrc: "/images/mock/product-3.jpg",
    colors: ["#111111", "#ffffff", "#21384f"],
  },
  {
    id: "4",
    name: "Pro Softshell Vest",
    code: "SWV-062",
    imageSrc: "/images/mock/product-4.jpg",
    colors: ["#101010", "#40464a", "#7c7f72"],
  },
];

const sectionContent = {
  tr: {
    eyebrow: "İŞİN TEMEL PARÇALARI",
    title: "PERFORMANS İÇİN GELİŞTİRİLDİ.",
    description:
      "Günlük çalışma temposunda hareket, dayanıklılık ve işlevsellik için geliştirilen temel iş giyim ürünleri.",
    viewProduct: "ÜRÜNÜ GÖR",
    colorsLabel: "Mevcut renkler",
  },
  en: {
    eyebrow: "WORK ESSENTIALS",
    title: "BUILT TO PERFORM.",
    description:
      "Essential workwear developed for daily performance, movement and durability.",
    viewProduct: "VIEW PRODUCT",
    colorsLabel: "Available colors",
  },
};

export function SuwFeaturedProductsSection() {
  const params = useParams();
  const locale = params?.locale === "en" ? "en" : "tr";

  const content = sectionContent[locale];

  return (
    <section className="suw-featured-products">
      <div className="suw-featured-products__inner">
        <header className="suw-featured-products__heading">
          <div>
            <p className="suw-featured-products__eyebrow">
              {content.eyebrow}
            </p>

            <h2 className="suw-featured-products__title">
              {content.title}
            </h2>
          </div>

          <p className="suw-featured-products__intro">
            {content.description}
          </p>
        </header>

        <div className="suw-featured-products__grid">
          {mockProducts.map((product) => (
            <article
              className="suw-featured-products__card"
              key={product.id}
            >
              <div className="suw-featured-products__image-wrap">
                <img
                  alt={product.name}
                  className="suw-featured-products__image"
                  src={resolveAssetUrl(product.imageSrc)}
                />

                <span className="suw-featured-products__view">
                  {content.viewProduct} ↗
                </span>
              </div>

              <div className="suw-featured-products__meta">
                <div>
                  <h3 className="suw-featured-products__name">
                    {product.name}
                  </h3>

                  <p className="suw-featured-products__code">
                    {product.code}
                  </p>
                </div>

                <div
                  aria-label={content.colorsLabel}
                  className="suw-featured-products__colors"
                >
                  {product.colors.map((color) => (
                    <span
                      className="suw-featured-products__color"
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
