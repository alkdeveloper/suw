import type { CSSProperties } from "react";

import { resolveAssetUrl } from "@/src/lib/assets";
import type { ProductHeroContent } from "@/src/lib/products";

import styles from "./products-hero.module.scss";

type HeroStyle = CSSProperties & { "--hero-image"?: string; "--hero-image-mobile"?: string };

export function ProductsHero({ content }: { content: ProductHeroContent }) {
  const style: HeroStyle = {};
  if (content.hero_image) style["--hero-image"] = `url("${resolveAssetUrl(content.hero_image)}")`;
  if (content.hero_image_mobile) style["--hero-image-mobile"] = `url("${resolveAssetUrl(content.hero_image_mobile)}")`;

  return <section className={styles.hero} style={style}>
    <div className={styles.content}>
      <p className={styles.eyebrow}><span aria-hidden="true" className={styles.line} />{content.eyebrow}</p>
      <h1 className={`suw-page-hero__title ${styles.title}`}>{content.title}</h1>
      {content.description ? <p className={styles.description}>{content.description}</p> : null}
    </div>
  </section>;
}
