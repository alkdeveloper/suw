"use client";

import { useParams } from "next/navigation";

type TechnicalFeatureItem = {
  id: string;
  title: string;
  description: string;
};

const sectionContent = {
  tr: {
    eyebrow: "TEKNİK PERFORMANS",
    titleLine1: "PERFORMANS",
    titleLine2: "DETAYLARDA.",
    intro:
      "Malzeme, yapı ve işlevsel detaylar; hareket, dayanıklılık ve koruma ihtiyaçlarına göre geliştirilir.",
    features: [
      {
        id: "01",
        title: "ESNEKLİK",
        description:
          "Aktif çalışma ortamları için hareket özgürlüğü.",
      },
      {
        id: "02",
        title: "SU İTİCİ",
        description:
          "Değişken hava koşullarına karşı geliştirilmiş koruma.",
      },
      {
        id: "03",
        title: "GÜÇLENDİRİLMİŞ",
        description:
          "Yoğun günlük kullanım için dayanıklı yapı.",
      },
      {
        id: "04",
        title: "NEFES ALABİLİR",
        description:
          "Çalışma günü boyunca konfor ve hava akışı.",
      },
    ] as TechnicalFeatureItem[],
  },

  en: {
    eyebrow: "TECHNICAL PERFORMANCE",
    titleLine1: "PERFORMANCE",
    titleLine2: "IS IN THE DETAILS.",
    intro:
      "Materials, construction and functional details are developed around movement, durability and protection.",
    features: [
      {
        id: "01",
        title: "STRETCH",
        description:
          "Freedom of movement for active working environments.",
      },
      {
        id: "02",
        title: "WATER REPELLENT",
        description:
          "Protection designed for changing weather conditions.",
      },
      {
        id: "03",
        title: "REINFORCED",
        description:
          "Durable construction for demanding daily use.",
      },
      {
        id: "04",
        title: "BREATHABLE",
        description:
          "Comfort and airflow throughout the working day.",
      },
    ] as TechnicalFeatureItem[],
  },
};

export function SuwProductsTechnicalSection() {
  const params = useParams();
  const locale = params?.locale === "en" ? "en" : "tr";
  const content = sectionContent[locale];

  return (
    <section className="suw-products-technical">
      <div className="suw-products-technical__inner">
        <header className="suw-products-technical__heading">
          <p className="suw-products-technical__eyebrow">
            {content.eyebrow}
          </p>

          <div className="suw-products-technical__heading-grid">
            <h2 className="suw-products-technical__title">
              {content.titleLine1}
              <br />
              {content.titleLine2}
            </h2>

            <p className="suw-products-technical__intro">
              {content.intro}
            </p>
          </div>
        </header>

        <div className="suw-products-technical__features">
          {content.features.map((feature) => (
            <article
              className="suw-products-technical__feature"
              key={feature.id}
            >
              <span className="suw-products-technical__number">
                {feature.id}
              </span>

              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

              <span
                aria-hidden="true"
                className="suw-products-technical__arrow"
              >
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}