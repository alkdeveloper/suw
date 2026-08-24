"use client";

import { useParams } from "next/navigation";

type IndustryItem = {
  id: string;
  title: string;
  imageSrc: string;
};

const sectionContent = {
  tr: {
    eyebrow: "SEKTÖRÜNÜZ İÇİN GELİŞTİRİLDİ",
    titleLine1: "HER ÇALIŞMA",
    titleLine2: "ORTAMINA UYGUN.",
    intro:
      "Her sektör farklı koruma, hareket ve işlevsellik ihtiyaçları taşır. SUW, iş giyim çözümlerini her çalışma ortamının gerçek ihtiyaçlarına göre geliştirir.",
    industries: [
      {
        id: "01",
        title: "İNŞAAT",
        imageSrc: "/images/mock/industry-construction.jpg",
      },
      {
        id: "02",
        title: "LOJİSTİK",
        imageSrc: "/images/mock/industry-logistics.jpg",
      },
      {
        id: "03",
        title: "ÜRETİM",
        imageSrc: "/images/mock/industry-manufacturing.jpg",
      },
      {
        id: "04",
        title: "OTOMOTİV",
        imageSrc: "/images/mock/industry-automotive.jpg",
      },
      {
        id: "05",
        title: "HİZMET",
        imageSrc: "/images/mock/industry-hospitality.jpg",
      },
      {
        id: "06",
        title: "KURUMSAL",
        imageSrc: "/images/mock/industry-corporate.jpg",
      },
    ] as IndustryItem[],
  },

  en: {
    eyebrow: "MADE FOR YOUR INDUSTRY",
    titleLine1: "WORKWEAR FOR",
    titleLine2: "EVERY ENVIRONMENT.",
    intro:
      "Different industries demand different levels of protection, movement and functionality. SUW develops workwear around the realities of each working environment.",
    industries: [
      {
        id: "01",
        title: "CONSTRUCTION",
        imageSrc: "/images/mock/industry-construction.jpg",
      },
      {
        id: "02",
        title: "LOGISTICS",
        imageSrc: "/images/mock/industry-logistics.jpg",
      },
      {
        id: "03",
        title: "MANUFACTURING",
        imageSrc: "/images/mock/industry-manufacturing.jpg",
      },
      {
        id: "04",
        title: "AUTOMOTIVE",
        imageSrc: "/images/mock/industry-automotive.jpg",
      },
      {
        id: "05",
        title: "HOSPITALITY",
        imageSrc: "/images/mock/industry-hospitality.jpg",
      },
      {
        id: "06",
        title: "CORPORATE",
        imageSrc: "/images/mock/industry-corporate.jpg",
      },
    ] as IndustryItem[],
  },
};

export function SuwIndustriesSection() {
  const params = useParams();
  const locale = params?.locale === "en" ? "en" : "tr";

  const content = sectionContent[locale];

  return (
    <section className="suw-industries">
      <div className="suw-industries__inner">
        <header className="suw-industries__heading">
          <div>
            <p className="suw-industries__eyebrow">
              {content.eyebrow}
            </p>

            <h2 className="suw-industries__title">
              {content.titleLine1}
              <br />
              {content.titleLine2}
            </h2>
          </div>

          <p className="suw-industries__intro">
            {content.intro}
          </p>
        </header>

        <div className="suw-industries__grid">
          {content.industries.map((industry) => (
            <article
              className="suw-industries__card"
              key={industry.id}
            >
              <img
                alt={industry.title}
                className="suw-industries__image"
                src={industry.imageSrc}
              />

              <div
                aria-hidden="true"
                className="suw-industries__overlay"
              />

              <div className="suw-industries__content">
                <span className="suw-industries__number">
                  {industry.id}
                </span>

                <div className="suw-industries__bottom">
                  <h3>{industry.title}</h3>

                  <span
                    aria-hidden="true"
                    className="suw-industries__arrow"
                  >
                    ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}