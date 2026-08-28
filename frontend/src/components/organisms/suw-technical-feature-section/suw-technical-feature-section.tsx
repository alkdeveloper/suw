"use client";

import { useParams } from "next/navigation";

import { resolvePublicAssetPath } from "@/src/lib/assets";

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

export function SuwTechnicalFeatureSection() {
  const params = useParams();
  const locale = params?.locale === "en" ? "en" : "tr";
  const content = sectionContent[locale];

  return (
    <section className="suw-technical-feature">
      <div className="suw-technical-feature__inner">
        <div className="suw-technical-feature__visual">
          <img
            alt={content.imageAlt}
            className="suw-technical-feature__image"
            src={resolvePublicAssetPath("/images/mock/technical-feature.jpg")}
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
            {content.eyebrow}
          </p>

          <h2 className="suw-technical-feature__title">
            {content.titleLine1}
            <br />
            {content.titleLine2}
          </h2>

          <p className="suw-technical-feature__description">
            {content.description}
          </p>

          <div className="suw-technical-feature__features">
            {content.features.map((feature) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}
