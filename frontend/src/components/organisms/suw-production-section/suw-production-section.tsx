"use client";

import { useParams } from "next/navigation";

import { resolvePublicAssetPath } from "@/src/lib/assets";

const sectionContent = {
  tr: {
    eyebrow: "ÜRETİM",
    titleLine1: "TASARIMDAN",
    titleLine2: "TESLİMATA.",
    description:
      "Ürün geliştirme, numune, üretim ve kalite kontrol süreçleri tek ve entegre bir üretim yapısı içinde yönetilir.",
    imageAlt: "SUW üretim",
    steps: [
      "AR-GE",
      "NUMUNE",
      "KESİM",
      "DİKİM",
      "BASKI & NAKIŞ",
      "KALİTE KONTROL",
      "PAKETLEME",
    ],
  },

  en: {
    eyebrow: "PRODUCTION",
    titleLine1: "FROM DESIGN.",
    titleLine2: "TO DELIVERY.",
    description:
      "Product development, sampling, manufacturing and quality control are managed as one integrated production process.",
    imageAlt: "SUW production",
    steps: [
      "R&D",
      "SAMPLING",
      "CUTTING",
      "SEWING",
      "PRINTING & EMBROIDERY",
      "QUALITY CONTROL",
      "PACKING",
    ],
  },
};

export function SuwProductionSection() {
  const params = useParams();
  const locale = params?.locale === "en" ? "en" : "tr";
  const content = sectionContent[locale];

  return (
    <section className="suw-production">
      <div className="suw-production__visual">
        <img
          alt={content.imageAlt}
          className="suw-production__image"
          src={resolvePublicAssetPath("/images/mock/production.jpg")}
        />

        <div
          aria-hidden="true"
          className="suw-production__overlay"
        />

        <div className="suw-production__visual-content">
          <p className="suw-production__eyebrow">
            {content.eyebrow}
          </p>

          <h2 className="suw-production__title">
            {content.titleLine1}
            <br />
            {content.titleLine2}
          </h2>

          <p className="suw-production__description">
            {content.description}
          </p>
        </div>
      </div>

      <div className="suw-production__process">
        <div className="suw-production__process-inner">
          {content.steps.map((step, index) => (
            <div
              className="suw-production__step"
              key={step}
            >
              <span className="suw-production__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="suw-production__step-title">
                {step}
              </span>

              {index < content.steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="suw-production__connector"
                >
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
