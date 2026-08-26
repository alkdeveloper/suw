import type { Metadata } from "next";

import type { SupportedLocale } from "@/src/lib/locale";
import { createLocalizedPageMetadata } from "@/src/lib/metadata";
import { SuwProjectsShowcaseSection } from "@/src/components/organisms/suw-projects-showcase-section";
import { SuwFinalCtaSection } from "@/src/components/organisms/suw-final-cta-section";
import { withLocalePath } from "@/src/lib/locale";
export function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}
type ProjectsPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

const pageContent = {
  tr: {
    metaTitle: "Projeler",
    metaDescription:
      "Kurumsal ekipler, saha operasyonları ve özel ihtiyaçlar için geliştirilen seçili SUW iş giyimi projelerini keşfedin.",
    eyebrow: "PROJELER",
    titleLine1: "İŞ GİYİMİ",
    titleLine2: "SAHADA.",
  },
  en: {
    metaTitle: "Projects",
    metaDescription:
      "Explore selected SUW workwear projects developed for corporate teams, field operations and custom requirements.",
    eyebrow: "PROJECTS",
    titleLine1: "WORKWEAR",
    titleLine2: "IN PRACTICE.",
  },
};

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = pageContent[locale];

  return createLocalizedPageMetadata(locale, {
    title: content.metaTitle,
    description: content.metaDescription,
    path: "/projects",
  });
}

export default async function ProjectsPage({
  params,
}: ProjectsPageProps) {
  const { locale } = await params;
  const content = pageContent[locale];

  return (
    <main>
      <section
        style={{
          minHeight: "64vh",
          background: "#111",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          padding: "150px 5vw 70px",
        }}
      >
        <div>
          <p>{content.eyebrow}</p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(64px, 8vw, 138px)",
              lineHeight: 0.85,
              letterSpacing: "-0.07em",
            }}
          >
            {content.titleLine1}
            <br />
            {content.titleLine2}
          </h1>
        </div>
      </section>
        <SuwProjectsShowcaseSection locale={locale} />

        <SuwFinalCtaSection
        href={withLocalePath(locale, "/contact")}
        />

    </main>
  );
}
