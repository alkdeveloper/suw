"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

type SuwFinalCtaSectionProps = {
  href?: string;
  showEyebrow?: boolean;
  title?: string;
  description?: string;
  buttonLabel?: string;
  bottomLabel?: string;
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
  showEyebrow = true,
  title,
  description,
  buttonLabel,
  bottomLabel,
}: SuwFinalCtaSectionProps) {
  const params = useParams();
  const locale = params?.locale === "en" ? "en" : "tr";
  const content = sectionContent[locale];

  return (
    <section className="suw-final-cta">
      <div className="suw-final-cta__inner">
        {showEyebrow ? (
          <p className="suw-final-cta__eyebrow">
            {content.eyebrow}
          </p>
        ) : null}

        <div className="suw-final-cta__content">
          <h2 className="suw-final-cta__title">{(title || `${content.titleLine1}\n${content.titleLine2}`).split(/\r?\n/).map((line, index) => <span key={`${line}-${index}`}>{line}{index === 0 ? <br /> : null}</span>)}</h2>

          <div className="suw-final-cta__side">
            <p className="suw-final-cta__description">
              {description || content.description}
            </p>

            <Link className="suw-final-cta__button" href={href}>
              <span>{buttonLabel || content.buttonLabel}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="suw-final-cta__bottom">
          <span>SUW</span>
          <span>{bottomLabel || content.bottomLabel}</span>
        </div>
      </div>
    </section>
  );
}
