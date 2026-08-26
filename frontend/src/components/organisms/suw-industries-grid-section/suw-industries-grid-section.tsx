"use client";

import { useParams } from "next/navigation";

type IndustryItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};

const sectionContent = {
  tr: {
    eyebrow: "SEKTÖRÜNÜZ İÇİN GELİŞTİRİLDİ",
    titleLine1: "FARKLI İŞLER.",
    titleLine2: "FARKLI İHTİYAÇLAR.",
    intro:
      "Her çalışma ortamının kendine özgü ihtiyaçları vardır. SUW, iş giyimini hareket, koruma, dayanıklılık ve her sektörün operasyonel gereksinimleri doğrultusunda geliştirir.",
    industries: [
      {
        id: "01",
        title: "İNŞAAT",
        description:
          "Zorlu şantiye koşulları, açık alan kullanımı ve yüksek hareket gerektiren işler için geliştirilen dayanıklı iş giyimi çözümleri.",
        imageSrc: "/images/mock/industry-1.jpg",
      },
      {
        id: "02",
        title: "LOJİSTİK",
        description:
          "Depo, taşımacılık ve lojistik ekipleri için konfor, hareket özgürlüğü ve işlevselliği bir araya getiren iş giyimi.",
        imageSrc: "/images/mock/industry-2.jpg",
      },
      {
        id: "03",
        title: "ÜRETİM",
        description:
          "Üretim ortamları, tekrarlayan hareketler ve günlük operasyonel kullanım için geliştirilen güvenilir iş giyimi çözümleri.",
        imageSrc: "/images/mock/industry-3.jpg",
      },
      {
        id: "04",
        title: "OTOMOTİV",
        description:
          "Otomotiv üretim, servis ve bakım ekiplerinin ihtiyaçlarına göre geliştirilen teknik ve dayanıklı iş giyimi.",
        imageSrc: "/images/mock/industry-4.jpg",
      },
      {
        id: "05",
        title: "HİZMET",
        description:
          "Hizmet ekipleri için konfor, kurumsal görünüm ve ekip bütünlüğünü destekleyen profesyonel iş giyimi çözümleri.",
        imageSrc: "/images/mock/industry-5.jpg",
      },
      {
        id: "06",
        title: "KURUMSAL",
        description:
          "Marka kimliği, ekip bütünlüğü ve günlük profesyonel kullanım odağında geliştirilen kurumsal iş giyimi programları.",
        imageSrc: "/images/mock/industry-6.jpg",
      },
    ] as IndustryItem[],
  },

  en: {
    eyebrow: "MADE FOR YOUR INDUSTRY",
    titleLine1: "DIFFERENT JOBS.",
    titleLine2: "DIFFERENT NEEDS.",
    intro:
      "Every working environment has its own demands. SUW develops workwear around movement, protection, durability and the operational realities of each industry.",
    industries: [
      {
        id: "01",
        title: "CONSTRUCTION",
        description:
          "Durable workwear developed for demanding construction environments, outdoor conditions and high-mobility tasks.",
        imageSrc: "/images/mock/industry-1.jpg",
      },
      {
        id: "02",
        title: "LOGISTICS",
        description:
          "Functional workwear for warehouse, transport and logistics teams that require comfort and freedom of movement.",
        imageSrc: "/images/mock/industry-2.jpg",
      },
      {
        id: "03",
        title: "MANUFACTURING",
        description:
          "Reliable workwear designed around production environments, repeated movement and daily operational use.",
        imageSrc: "/images/mock/industry-3.jpg",
      },
      {
        id: "04",
        title: "AUTOMOTIVE",
        description:
          "Technical and durable garments developed for automotive production, service and maintenance teams.",
        imageSrc: "/images/mock/industry-4.jpg",
      },
      {
        id: "05",
        title: "HOSPITALITY",
        description:
          "Professional uniforms created for hospitality teams with a focus on comfort, presentation and consistency.",
        imageSrc: "/images/mock/industry-5.jpg",
      },
      {
        id: "06",
        title: "CORPORATE",
        description:
          "Corporate workwear programs built around brand identity, team consistency and everyday professional use.",
        imageSrc: "/images/mock/industry-6.jpg",
      },
    ] as IndustryItem[],
  },
};

export function SuwIndustriesGridSection() {
  const params = useParams();
  const locale = params?.locale === "en" ? "en" : "tr";
  const content = sectionContent[locale];

  return (
    <section className="suw-industries-grid">
      <div className="suw-industries-grid__inner">
        <header className="suw-industries-grid__heading">
          <p className="suw-industries-grid__eyebrow">
            {content.eyebrow}
          </p>

          <div className="suw-industries-grid__heading-grid">
            <h2 className="suw-industries-grid__title">
              {content.titleLine1}
              <br />
              {content.titleLine2}
            </h2>

            <p className="suw-industries-grid__intro">
              {content.intro}
            </p>
          </div>
        </header>

        <div className="suw-industries-grid__grid">
          {content.industries.map((industry) => (
            <article
              className="suw-industries-grid__card"
              key={industry.id}
            >
              <div className="suw-industries-grid__image-wrap">
                <img
                  alt={industry.title}
                  className="suw-industries-grid__image"
                  src={industry.imageSrc}
                />

                <div
                  aria-hidden="true"
                  className="suw-industries-grid__overlay"
                />

                <span className="suw-industries-grid__number">
                  {industry.id}
                </span>

                <span className="suw-industries-grid__arrow">
                  ↗
                </span>
              </div>

              <div className="suw-industries-grid__content">
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}