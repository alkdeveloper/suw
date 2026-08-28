import type { Metadata } from "next";

import type { SupportedLocale } from "@/src/lib/locale";
import { createLocalizedPageMetadata } from "@/src/lib/metadata";
import { SuwProjectsShowcaseSection } from "@/src/components/organisms/suw-projects-showcase-section";
import { SuwFinalCtaSection } from "@/src/components/organisms/suw-final-cta-section";
import { withLocalePath } from "@/src/lib/locale";

import styles from "./projects.module.scss";
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
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>{content.titleLine1}{" "}</span>
            <span className={styles.titleLine}>{content.titleLine2}</span>
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
