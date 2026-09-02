"use client";

import Link from "next/link";

import { resolvePublicAssetPath } from "@/src/lib/assets";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";

type TechnicalFeature = {
  id: string;
  label: string;
  value: string;
};

const sectionContent = {
  tr: {
    eyebrow: "TEKNİK PERFORMANS",
    titleLine1: "PERFORMANS İÇİN",
    titleLine2: "GELİŞTİRİLDİ.",
    description:
      "Her detay, zorlu çalışma ortamlarında hareket, koruma ve dayanıklılık ihtiyaçlarına göre geliştirildi.",
    imageAlt: "Teknik iş giyimi",
    features: [
      {
        id: "01",
        label: "4 YÖNLÜ ESNEKLİK",
        value: "Hareket özgürlüğü",
      },
      {
        id: "02",
        label: "SU İTİCİ",
        value: "Değişken koşullarda koruma",
      },
      {
        id: "03",
        label: "GÜÇLENDİRİLMİŞ",
        value: "Yoğun kullanıma uygun yapı",
      },
      {
        id: "04",
        label: "NEFES ALABİLİR",
        value: "Gün boyu konfor",
      },
    ] as TechnicalFeature[],
  },
  en: {
    eyebrow: "TECHNICAL PERFORMANCE",
    titleLine1: "ENGINEERED",
    titleLine2: "TO PERFORM.",
    description:
      "Every detail is developed around movement, protection and durability for demanding working environments.",
    imageAlt: "Technical workwear",
    features: [
      {
        id: "01",
        label: "4-WAY STRETCH",
        value: "Freedom of movement",
      },
      {
        id: "02",
        label: "WATER REPELLENT",
        value: "Protection in changing conditions",
      },
      {
        id: "03",
        label: "REINFORCED",
        value: "Built for demanding use",
      },
      {
        id: "04",
        label: "BREATHABLE",
        value: "Comfort throughout the day",
      },
    ] as TechnicalFeature[],
  },
};

type SuwTechnicalFeatureSectionProps = {
  ctaHref?: string;
  ctaLabel?: string;
  description?: string;
  eyebrow?: string;
  features?: TechnicalFeature[];
  imageSrc?: string;
  locale: SupportedLocale;
  title?: string;
};

export function SuwTechnicalFeatureSection({ ctaHref, ctaLabel, description, eyebrow, features, imageSrc, locale, title }: SuwTechnicalFeatureSectionProps) {
  const content = sectionContent[locale];
  const resolvedFeatures = features?.length ? features : content.features;
  const resolvedTitle = title || `${content.titleLine1}\n${content.titleLine2}`;
  const titleLines = resolvedTitle.split(/\r?\n/).filter(Boolean);
  const resolvedCtaHref = ctaHref
    ? (/^(?:https?:)?\/\//.test(ctaHref) ? ctaHref : withLocalePath(locale, ctaHref))
    : "";

  return (
    <section className="suw-technical-feature">
      <div className="suw-technical-feature__inner">
        <div className="suw-technical-feature__visual">
          <img
            alt={title || content.imageAlt}
            className="suw-technical-feature__image"
            src={imageSrc || resolvePublicAssetPath("/images/mock/technical-feature.jpg")}
          />

          <div className="suw-technical-feature__marker suw-technical-feature__marker--one">
            <span />
          </div>

          <div className="suw-technical-feature__marker suw-technical-feature__marker--two">
            <span />
          </div>
        </div>

        <div className="suw-technical-feature__content">
          <p className="suw-technical-feature__eyebrow">
            {eyebrow || content.eyebrow}
          </p>

          <h2 className="suw-technical-feature__title">
            {titleLines.map((line, index) => <span key={`${line}-${index}`}>{index ? <br /> : null}{line}</span>)}
          </h2>

          <p className="suw-technical-feature__description">
            {description || content.description}
          </p>

          <div className="suw-technical-feature__features">
            {resolvedFeatures.map((feature) => (
              <div
                className="suw-technical-feature__feature"
                key={feature.id}
              >
                <span className="suw-technical-feature__number">
                  {feature.id}
                </span>

                <div>
                  <h3>{feature.label}</h3>
                  <p>{feature.value}</p>
                </div>

                <span
                  aria-hidden="true"
                  className="suw-technical-feature__arrow"
                >
                  ↗
                </span>
              </div>
            ))}
            {ctaLabel && resolvedCtaHref ? (
              <Link className="suw-technical-feature__feature" href={resolvedCtaHref}>
                <span className="suw-technical-feature__number" />
                <div><h3>{ctaLabel}</h3></div>
                <span aria-hidden="true" className="suw-technical-feature__arrow">↗</span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
