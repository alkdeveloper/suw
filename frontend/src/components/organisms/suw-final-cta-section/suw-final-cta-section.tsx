"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

type SuwFinalCtaSectionProps = {
  href?: string;
};

const sectionContent = {
  tr: {
    eyebrow: "BİR PROJE BAŞLATALIM",
    titleLine1: "İŞ GİYİMİNİZİ",
    titleLine2: "BİRLİKTE GELİŞTİRELİM.",
    description:
      "Ekibinizi, çalışma ortamınızı ve ihtiyaçlarınızı bize anlatın. İşletmenize uygun doğru iş giyim çözümünü birlikte oluşturalım.",
    buttonLabel: "PROJE BAŞLAT",
    bottomLabel: "PROFESYONEL İŞ GİYİMİ",
  },

  en: {
    eyebrow: "START A PROJECT",
    titleLine1: "LET'S BUILD",
    titleLine2: "YOUR WORKWEAR.",
    description:
      "Tell us about your team, working environment and requirements. We'll help build the right workwear solution around your business.",
    buttonLabel: "START A PROJECT",
    bottomLabel: "PROFESSIONAL WORKWEAR",
  },
};

export function SuwFinalCtaSection({
  href = "/contact",
}: SuwFinalCtaSectionProps) {
  const params = useParams();
  const locale = params?.locale === "en" ? "en" : "tr";
  const content = sectionContent[locale];

  return (
    <section className="suw-final-cta">
      <div className="suw-final-cta__inner">
        <p className="suw-final-cta__eyebrow">
          {content.eyebrow}
        </p>

        <div className="suw-final-cta__content">
          <h2 className="suw-final-cta__title">
            {content.titleLine1}
            <br />
            {content.titleLine2}
          </h2>

          <div className="suw-final-cta__side">
            <p className="suw-final-cta__description">
              {content.description}
            </p>

            <Link className="suw-final-cta__button" href={href}>
              <span>{content.buttonLabel}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="suw-final-cta__bottom">
          <span>SUW</span>
          <span>{content.bottomLabel}</span>
        </div>
      </div>
    </section>
  );
}