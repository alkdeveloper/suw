import type { Metadata } from "next";

import type { SupportedLocale } from "@/src/lib/locale";
import { createLocalizedPageMetadata } from "@/src/lib/metadata";
import { SuwAboutIntroSection } from "@/src/components/organisms/suw-about-intro-section";
import { SuwAboutProductionSection } from "@/src/components/organisms/suw-about-production-section";
import { SuwAboutQualitySection } from "@/src/components/organisms/suw-about-quality-section";
import { SuwFinalCtaSection } from "@/src/components/organisms/suw-final-cta-section";
import { withLocalePath } from "@/src/lib/locale";

import styles from "./about.module.scss";

type AboutPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

const pageContent = {
  tr: {
    metaTitle: "Hakkımızda",
    metaDescription:
      "SUW'un profesyonel iş giyimi, üretim, kalite ve uzun vadeli proje geliştirme yaklaşımını keşfedin.",
    eyebrow: "SUW HAKKINDA",
    titleLine1: "DENEYİM ÜZERİNE",
    titleLine2: "KURULU.",
  },
  en: {
    metaTitle: "About",
    metaDescription:
      "Discover SUW's approach to professional workwear, production, quality and long-term project development.",
    eyebrow: "ABOUT SUW",
    titleLine1: "BUILT ON",
    titleLine2: "EXPERIENCE.",
  },
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = pageContent[locale];

  return createLocalizedPageMetadata(locale, {
    title: content.metaTitle,
    description: content.metaDescription,
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: AboutPageProps) {
  const { locale } = await params;
  const content = pageContent[locale];

  return (
    <main>
      <section className={styles.hero} data-locale={locale}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>

          <h1 className={styles.title}>
            <span>{content.titleLine1}</span>
            <span>{content.titleLine2}</span>
          </h1>
        </div>
      </section>
      <SuwAboutIntroSection locale={locale} />

<SuwAboutProductionSection locale={locale} />

<SuwAboutQualitySection locale={locale} />

<SuwFinalCtaSection
  href={withLocalePath(locale, "/contact")}
/>
    </main>
  );
}
