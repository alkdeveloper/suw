import type { Metadata } from "next";

import type { SupportedLocale } from "@/src/lib/locale";
import { createLocalizedPageMetadata } from "@/src/lib/metadata";
import { ProjectsSectorShowcase } from "@/src/components/organisms/projects-sector-showcase";
import { createAPI } from "@/src/lib/api";
import type { ProjectsPageResponse } from "@/src/lib/api-types";

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
    heroTitle: "İŞ GİYİMİ\nSAHADA.",
    heroDescription: "Farklı sektörlerin çalışma koşullarına, kurumsal kimliğine ve kullanım ihtiyaçlarına göre geliştirilen iş giyimi projeleri.",
  },
  en: {
    metaTitle: "Projects",
    metaDescription:
      "Explore selected SUW workwear projects developed for corporate teams, field operations and custom requirements.",
    eyebrow: "PROJECTS",
    heroTitle: "WORKWEAR\nIN ACTION.",
    heroDescription: "Workwear projects developed around the working conditions, corporate identity and practical needs of different industries.",
  },
};

const sectorFallback = [
  ["ENDÜSTRİ & ÜRETİM", "INDUSTRY & MANUFACTURING", "SAHADA DAYANIKLILIK,\nEKİPTE BÜTÜNLÜK.", "DURABILITY ON SITE,\nUNITY ACROSS THE TEAM."],
  ["LOJİSTİK & OPERASYON", "LOGISTICS & OPERATIONS", "HAREKET İÇİN TASARLANDI,\nOPERASYONA HAZIR.", "DESIGNED FOR MOVEMENT,\nREADY FOR OPERATIONS."],
  ["İNŞAAT & TEKNİK EKİPLER", "CONSTRUCTION & TECHNICAL TEAMS", "ZORLU KOŞULLARA,\nDOĞRU KORUMA.", "THE RIGHT PROTECTION\nFOR DEMANDING CONDITIONS."],
  ["OTOMOTİV & SERVİS", "AUTOMOTIVE & SERVICE", "TEKNİK DETAY,\nTUTARLI GÖRÜNÜM.", "TECHNICAL DETAIL,\nCONSISTENT PRESENTATION."],
  ["PERAKENDE & HİZMET", "RETAIL & SERVICE", "MÜŞTERİYE YAKIN,\nMARKAYA UYUMLU.", "CLOSE TO THE CUSTOMER,\nTRUE TO THE BRAND."],
  ["KURUMSAL & PROMOSYON", "CORPORATE & PROMOTIONAL", "MARKANIZI TAŞIYAN\nTUTARLI ÜRÜNLER.", "CONSISTENT PRODUCTS\nTHAT CARRY YOUR BRAND."],
];

function getFallback(locale: SupportedLocale): ProjectsPageResponse {
  const tr = locale === "tr";
  return {
    hero_eyebrow: tr ? "PROJELER" : "PROJECTS",
    hero_title: tr ? "İŞ GİYİMİ\nSAHADA." : "WORKWEAR\nIN ACTION.",
    hero_description: tr ? pageContent.tr.heroDescription : pageContent.en.heroDescription,
    cta_eyebrow: tr ? "PROJENİZ" : "YOUR PROJECT",
    cta_title: tr ? "PROJENİZ İÇİN\nBİRLİKTE GELİŞTİRELİM." : "LET'S DEVELOP\nYOUR PROJECT TOGETHER.",
    cta_description: tr ? "Ekibinizin çalışma koşullarını, ürün ihtiyaçlarını ve kurumsal kimliğini birlikte değerlendirerek size özel bir iş giyimi çözümü geliştirelim." : "Let us evaluate your team's working conditions, product needs and corporate identity to develop a workwear solution tailored to you.",
    cta_text: tr ? "BİZE ULAŞIN" : "CONTACT US",
    sectors: sectorFallback.map((item, index) => ({ id: index + 1, title: item[tr ? 0 : 1], headline: item[tr ? 2 : 3], description: tr ? "Çalışma koşullarına, ekip ihtiyaçlarına ve kurumsal kimliğe göre geliştirilen profesyonel iş giyimi çözümleri." : "Professional workwear solutions developed around working conditions, team requirements and corporate identity.", product_groups: [], image: null, image_mobile: null })),
  };
}

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
  let projects = getFallback(locale);
  try {
    const response = await createAPI(locale).get<ProjectsPageResponse>("projects/");
    projects = response.data;
  } catch {}

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>{projects.hero_eyebrow || content.eyebrow}</p>

          <h1 className={styles.title}>
            {(projects.hero_title || content.heroTitle).split(/\r?\n/).map((line) => <span className={styles.titleLine} key={line}>{line}</span>)}
          </h1>
          <p className={styles.description}>{projects.hero_description || content.heroDescription}</p>
        </div>
      </section>
        <ProjectsSectorShowcase content={projects} locale={locale} />

    </main>
  );
}
