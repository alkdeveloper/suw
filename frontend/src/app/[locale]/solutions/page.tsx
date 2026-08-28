import type { Metadata } from "next";

import type { SupportedLocale } from "@/src/lib/locale";
import { createLocalizedPageMetadata } from "@/src/lib/metadata";
import { SuwSolutionsModelsSection } from "@/src/components/organisms/suw-solutions-models-section";
import { SuwBrandingCustomizationSection } from "@/src/components/organisms/suw-branding-customization-section";
import { SuwSolutionsProcessSection } from "@/src/components/organisms/suw-solutions-process-section";
import { SuwFinalCtaSection } from "@/src/components/organisms/suw-final-cta-section";
import { withLocalePath } from "@/src/lib/locale";

export function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}

type SolutionsPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

const pageContent = {
  tr: {
    metaTitle: "Çözümler",
    metaDescription:
      "Hazır koleksiyonlardan özelleştirilmiş ve projeye özel geliştirme süreçlerine kadar SUW iş giyimi çözümlerini keşfedin.",
    eyebrow: "ÇÖZÜMLER",
    titleLine1: "EKİBİNİZ İÇİN",
    titleLine2: "GELİŞTİRİLDİ.",
  },
  en: {
    metaTitle: "Solutions",
    metaDescription:
      "Explore SUW workwear solutions including ready-made collections, customization and bespoke development.",
    eyebrow: "SOLUTIONS",
    titleLine1: "BUILT AROUND",
    titleLine2: "YOUR TEAM.",
  },
};

export async function generateMetadata({
  params,
}: SolutionsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = pageContent[locale];

  return createLocalizedPageMetadata(locale, {
    title: content.metaTitle,
    description: content.metaDescription,
    path: "/solutions",
  });
}

export default async function SolutionsPage({
  params,
}: SolutionsPageProps) {
  const { locale } = await params;
  const content = pageContent[locale];

  return (
    <main>
      <section
        style={{
          minHeight: "64vh",
          background: "var(--color-dark-surface)",
          color: "var(--color-brand-primary)",
          display: "flex",
          alignItems: "center",
          padding: "150px 5vw 70px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              marginBottom: "22px",
              color: "var(--color-brand-primary)",
              fontFamily: "var(--font-active), sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: "40px",
                height: "1px",
                flex: "0 0 auto",
                background: "var(--color-brand-primary)",
              }}
            />

            <span>{content.eyebrow}</span>
          </div>

          <h1
            className="suw-page-hero__title"
            style={{
              margin: 0,
              fontFamily: "var(--font-active), sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.045em",
              textTransform: "uppercase",
            }}
          >
            {content.titleLine1} {content.titleLine2}
          </h1>
        </div>
      </section>

      <SuwSolutionsModelsSection locale={locale} />
      <SuwBrandingCustomizationSection locale={locale} />
      <SuwSolutionsProcessSection locale={locale} />

      <SuwFinalCtaSection
        href={withLocalePath(locale, "/contact")}
      />
    </main>
  );
}
