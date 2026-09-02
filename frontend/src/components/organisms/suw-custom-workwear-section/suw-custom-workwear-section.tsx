"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

import { resolvePublicAssetPath } from "@/src/lib/assets";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";

type SolutionItem = {
  id: string;
  title: string;
  description: string;
};

const sectionContent = {
  tr: {
    eyebrow: "KURUMSAL İŞ GİYİMİ",
    titleLine1: "EKİBİNİZ.",
    titleLine2: "KİMLİĞİNİZ.",
    description:
      "İş giyimi, şirketinizin nasıl göründüğünün bir parçasıdır. SUW; ürün, işlevsellik ve marka kimliğini bir araya getirerek ekibiniz için tutarlı bir görünüm oluşturur.",
    imageAlt: "Özel kurumsal iş giyimi",
    visualLabel: "ÖZEL İŞ GİYİMİ",
    solutions: [
      {
        id: "01",
        title: "HAZIR",
        description:
          "Mevcut SUW koleksiyonundan seçim yapın ve kanıtlanmış ürünlerle güvenilir bir iş giyim programı oluşturun.",
      },
      {
        id: "02",
        title: "ÖZELLEŞTİRİLMİŞ",
        description:
          "Seçili ürünleri nakış, baskı, etiket ve renk uygulamalarıyla marka kimliğinize uyarlayın.",
      },
      {
        id: "03",
        title: "ÖZEL TASARIM",
        description:
          "Ekibinizin ihtiyaçları, marka dili ve çalışma ortamına göre tamamen size özel bir iş giyim koleksiyonu geliştirin.",
      },
    ] as SolutionItem[],
  },

  en: {
    eyebrow: "CORPORATE WORKWEAR",
    titleLine1: "YOUR TEAM.",
    titleLine2: "YOUR IDENTITY.",
    description:
      "Workwear is part of how your company is seen. SUW combines product, functionality and brand identity to create a consistent look across your team.",
    imageAlt: "Custom corporate workwear",
    visualLabel: "CUSTOM WORKWEAR",
    solutions: [
      {
        id: "01",
        title: "READY",
        description:
          "Choose from the existing SUW collection and build a reliable workwear program around proven products.",
      },
      {
        id: "02",
        title: "CUSTOMIZED",
        description:
          "Adapt selected products with your brand identity through embroidery, print, labels and color applications.",
      },
      {
        id: "03",
        title: "BESPOKE",
        description:
          "Develop a fully customized workwear collection around your team's needs, brand language and working environment.",
      },
    ] as SolutionItem[],
  },
};

type CorporateWorkwearCard = SolutionItem & { imageSrc?: string };

type SuwCustomWorkwearSectionProps = {
  ctaHref?: string;
  ctaLabel?: string;
  description: string;
  eyebrow: string;
  items: CorporateWorkwearCard[];
  locale: SupportedLocale;
  title: string;
};

const fallbackImages = ["/images/mock/custom-workwear.jpg", "/images/mock/workwear.jpg"];

export function SuwCustomWorkwearSection({ ctaHref, ctaLabel, description, eyebrow, items, locale, title }: SuwCustomWorkwearSectionProps) {
  const resolvedCtaHref = ctaHref ? (/^(?:https?:)?\/\//.test(ctaHref) ? ctaHref : withLocalePath(locale, ctaHref)) : "";
  return (
    <section className="suw-custom-workwear">
      <div className="suw-custom-workwear__inner">
        <header className="suw-custom-workwear__intro">
          <p className="suw-custom-workwear__eyebrow">{eyebrow}</p>
          <h2 className="suw-custom-workwear__title">{title}</h2>
          <p className="suw-custom-workwear__description">{description}</p>
        </header>
        <div className="suw-custom-workwear__cards">
          {items.map((item, index) => (
            <article className="suw-custom-workwear__card" key={item.id}>
              <div className="suw-custom-workwear__card-visual"><img alt={item.title} className="suw-custom-workwear__image" src={item.imageSrc || resolvePublicAssetPath(fallbackImages[index] || fallbackImages[0])} /></div>
              <div className="suw-custom-workwear__card-content"><span className="suw-custom-workwear__number">{item.id}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div>
            </article>
          ))}
        </div>
        {ctaLabel && resolvedCtaHref ? <Link className="suw-custom-workwear__cta" href={resolvedCtaHref}><span>{ctaLabel}</span><span aria-hidden="true">↗</span></Link> : null}
      </div>
    </section>
  );
}

function LegacySuwCustomWorkwearSection() {
  const params = useParams();
  const locale = params?.locale === "en" ? "en" : "tr";
  const content = sectionContent[locale];

  return (
    <section className="suw-custom-workwear">
      <div className="suw-custom-workwear__inner">
        <div className="suw-custom-workwear__intro">
          <p className="suw-custom-workwear__eyebrow">
            {content.eyebrow}
          </p>

          <h2 className="suw-custom-workwear__title">
            {content.titleLine1}
            <br />
            {content.titleLine2}
          </h2>

          <p className="suw-custom-workwear__description">
            {content.description}
          </p>
        </div>

        <div className="suw-custom-workwear__visual">
          <img
            alt={content.imageAlt}
            className="suw-custom-workwear__image"
            src={resolvePublicAssetPath("/images/mock/custom-workwear.jpg")}
          />

          <div className="suw-custom-workwear__visual-label">
            <span>SUW</span>
            <span>{content.visualLabel}</span>
          </div>
        </div>

        <div className="suw-custom-workwear__solutions">
          {content.solutions.map((solution) => (
            <article
              className="suw-custom-workwear__solution"
              key={solution.id}
            >
              <span className="suw-custom-workwear__number">
                {solution.id}
              </span>

              <div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>

              <span
                aria-hidden="true"
                className="suw-custom-workwear__arrow"
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
