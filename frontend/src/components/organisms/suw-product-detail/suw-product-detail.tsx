"use client";

import Link from "next/link";
import { useState } from "react";

import { resolveAssetUrl } from "@/src/lib/assets";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import type { ProductDetail } from "@/src/lib/products";

import styles from "./suw-product-detail.module.scss";

function splitMultiline(value: string) {
  return value
    .split(/\\n|\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function SuwProductDetail({ locale, product }: { locale: SupportedLocale; product: ProductDetail }) {
  const images = [...(product.main_image ? [{ image: product.main_image, alt: product.name }] : []), ...product.images.filter((item) => item.image && item.image !== product.main_image)];
  const [selectedImage, setSelectedImage] = useState(images[0]?.image ?? null);
  const copy = locale === "tr"
    ? { products: "ÜRÜNLER", productCode: "ÜRÜN KODU", sizes: "BEDENLER", materials: "MALZEMELER", features: "ÖZELLİKLER", cta: "PROJENİZ İÇİN BİLGİ ALIN", description: "DETAYLI AÇIKLAMA", technical: "TEKNİK ÖZELLİKLER", gallery: "GALERİ", image: "Ürün görseli" }
    : { products: "PRODUCTS", productCode: "PRODUCT CODE", sizes: "SIZES", materials: "MATERIALS", features: "FEATURES", cta: "REQUEST PROJECT INFORMATION", description: "DETAILED DESCRIPTION", technical: "TECHNICAL FEATURES", gallery: "GALLERY", image: "Product image" };
  const primaryGroup = product.groups[0];
  const materials = splitMultiline(product.materials);
  const features = splitMultiline(product.features);
  const sizes = splitMultiline(product.sizes);

  return <div className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.media}>
        <div className={styles.mainImage}>{selectedImage ? <img alt={images.find((item) => item.image === selectedImage)?.alt || product.name} src={resolveAssetUrl(selectedImage)} /> : <span aria-label={copy.image} className={styles.placeholder} role="img" />}</div>
        {images.length > 1 ? <div aria-label={copy.gallery} className={styles.thumbs}>{images.map((item, index) => <button aria-label={`${copy.image} ${index + 1}`} aria-pressed={selectedImage === item.image} className={`${styles.thumb} ${selectedImage === item.image ? styles.thumbActive : ""}`} key={`${item.image}-${index}`} onClick={() => setSelectedImage(item.image)} type="button"><img alt="" src={resolveAssetUrl(item.image)} /></button>)}</div> : null}
      </div>
      <div className={styles.info}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href={withLocalePath(locale, "/products")}>{copy.products}</Link>
          {primaryGroup ? <Link href={withLocalePath(locale, `/products/${primaryGroup.slug}`)}>{primaryGroup.name}</Link> : null}
          <Link href={withLocalePath(locale, `/products?category=${product.category.slug}`)}>{product.category.name}</Link>
        </nav>
        <h1 className={styles.name}>{product.name}</h1>
        <div className={styles.code}><span>{copy.productCode}</span><strong>{product.product_code}</strong></div>
        {product.short_description ? <p className={styles.short}>{product.short_description}</p> : null}
        {(sizes.length || materials.length || features.length) ? <dl className={styles.facts}>
          {materials.length ? <div className={styles.fact}><dt>{copy.materials}</dt><dd>{materials.join(" ")}</dd></div> : null}
          {features.length ? <div className={styles.fact}><dt>{copy.features}</dt><dd><ul className={styles.featureList}>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul></dd></div> : null}
          {sizes.length ? <div className={styles.fact}><dt>{copy.sizes}</dt><dd className={styles.sizeChips}>{sizes.map((size) => <span className={styles.sizeChip} key={size}>{size}</span>)}</dd></div> : null}
        </dl> : null}
        <Link className={styles.cta} href={withLocalePath(locale, "/contact")}>{copy.cta}<span aria-hidden="true">↗</span></Link>
      </div>
    </section>
    {(product.description || product.features || product.images.length > 0) ? <section className={styles.details}>
      <div className={styles.detailsInner}>
        {product.description ? <article className={styles.detailBlock}><h2>{copy.description}</h2><p>{product.description}</p></article> : null}
        {features.length ? <article className={styles.detailBlock}><h2>{copy.technical}</h2><ul className={styles.featureList}>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul></article> : null}
        {product.images.length > 0 ? <div className={styles.gallery}><h2>{copy.gallery}</h2><div className={styles.galleryGrid}>{product.images.map((item, index) => <img alt={item.alt || `${product.name} ${index + 1}`} key={`${item.image}-${index}`} src={resolveAssetUrl(item.image)} />)}</div></div> : null}
      </div>
    </section> : null}
  </div>;
}
