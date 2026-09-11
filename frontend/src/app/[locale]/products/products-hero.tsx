import type { CSSProperties } from "react";

import { resolveAssetUrl } from "@/src/lib/assets";
import type { ProductHeroContent } from "@/src/lib/products";

import styles from "./products-hero.module.scss";

type HeroStyle = CSSProperties & { "--hero-image"?: string; "--hero-image-mobile"?: string };

export function ProductsHero({ content }: { content: ProductHeroContent }) {
  const style: HeroStyle = {};
  const titleLines = content.title === "İŞ İÇİN GELİŞTİRİLDİ."
    ? ["İŞ İÇİN", "GELİŞTİRİLDİ."]
    : content.title.split(/\r?\n/);

  if (content.hero_image) style["--hero-image"] = `url("${resolveAssetUrl(content.hero_image)}")`;
  if (content.hero_image_mobile) style["--hero-image-mobile"] = `url("${resolveAssetUrl(content.hero_image_mobile)}")`;

  return <section className={styles.hero} style={style}>
    <div className={styles.content}>
      {content.title ? <h1 className={`suw-page-hero__title ${styles.title}`}>
        {titleLines.map((line) => <span className={styles.titleLine} key={line}>{line}</span>)}
      </h1> : null}
      {content.description ? <p className={styles.description}>{content.description}</p> : null}
    </div>
  </section>;
}
