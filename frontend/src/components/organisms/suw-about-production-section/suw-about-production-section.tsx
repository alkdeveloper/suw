import type { CSSProperties } from "react";

import { resolvePublicAssetPath } from "@/src/lib/assets";
import type { SupportedLocale } from "@/src/lib/locale";

const sectionContent = {
  tr: {
    eyebrow: "ÜRETİM VE OPERASYON",
    titleLine1: "TESLİMAT İÇİN",
    titleLine2: "GELİŞTİRİLDİ.",
    intro: "Geliştirme, numune, üretim ve kalite kontrol; ilk ürün kararından nihai teslimata kadar tek ve koordineli bir süreç olarak ilerler.",
    visualLabel: "SUW / ÜRETİM",
    visualCopy: "Konsept geliştirmeden tamamlanmış iş giyimine kadar her aşama; tutarlılık, işlevsellik ve proje gereksinimleri odağında yönetilir.",
    items: [
      { id: "01", title: "ÜRÜN GELİŞTİRME", description: "Ürünler; işlev, kalıp, malzeme performansı ve her çalışma ortamının gereksinimleri doğrultusunda geliştirilir." },
      { id: "02", title: "NUMUNE", description: "Üretim öncesinde yapı, detay, markalama ve kalıbı doğrulamak için numuneler hazırlanır ve geliştirilir." },
      { id: "03", title: "ÜRETİM", description: "Onaylanan ürünler, belirlenen teknik özellikler ve proje gereksinimleriyle koordineli üretime alınır." },
      { id: "04", title: "KALİTE KONTROL", description: "Tutarlılık, işçilik ve nihai ürün standartlarını korumak için kalite süreç boyunca izlenir." },
    ],
  },
  en: {
    eyebrow: "PRODUCTION & OPERATIONS",
    titleLine1: "BUILT TO",
    titleLine2: "DELIVER.",
    intro: "Development, sampling, manufacturing and quality control operate as one coordinated process from the first product decision to final delivery.",
    visualLabel: "SUW / PRODUCTION",
    visualCopy: "From concept development to finished workwear, every stage is managed around consistency, functionality and project requirements.",
    items: [
  {
    id: "01",
    title: "PRODUCT DEVELOPMENT",
    description:
      "Products are developed around function, fit, material performance and the requirements of each working environment.",
  },
  {
    id: "02",
    title: "SAMPLING",
    description:
      "Samples are prepared and refined before production to confirm construction, details, branding and fit.",
  },
  {
    id: "03",
    title: "PRODUCTION",
    description:
      "Approved products move into coordinated production with defined specifications and project requirements.",
  },
  {
    id: "04",
    title: "QUALITY CONTROL",
    description:
      "Quality is monitored throughout the process to maintain consistency, workmanship and final product standards.",
  },
    ],
  },
};

export function SuwAboutProductionSection({ locale }: { locale: SupportedLocale }) {
  const content = sectionContent[locale];

  return (
    <section className="suw-about-production" data-locale={locale}>
      <div className="suw-about-production__inner">
        <header className="suw-about-production__heading">
          <p className="suw-about-production__eyebrow">
            {content.eyebrow}
          </p>

          <div className="suw-about-production__heading-grid">
            <h2 className="suw-about-production__title">
              {content.titleLine1}
              <br />
              {content.titleLine2}
            </h2>

            <p className="suw-about-production__intro">
              {content.intro}
            </p>
          </div>
        </header>

        <div className="suw-about-production__layout">
          <div
            className="suw-about-production__visual"
            style={{
              "--suw-about-production-image": `url("${resolvePublicAssetPath("/images/mock/production.jpg")}")`,
            } as CSSProperties}
          >
            <div className="suw-about-production__visual-copy">
              <span>{content.visualLabel}</span>

              <p>{content.visualCopy}</p>
            </div>
          </div>

          <div className="suw-about-production__items">
            {content.items.map((item) => (
              <article
                className="suw-about-production__item"
                key={item.id}
              >
                <span className="suw-about-production__number">
                  {item.id}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span
                  aria-hidden="true"
                  className="suw-about-production__arrow"
                >
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
