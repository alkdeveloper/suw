import type { Metadata } from "next";

import type { SupportedLocale } from "@/src/lib/locale";
import { createLocalizedPageMetadata } from "@/src/lib/metadata";
import { ProjectsSectorShowcase } from "@/src/components/organisms/projects-sector-showcase";
import { createAPI } from "@/src/lib/api";
import type { ProjectsPageResponse } from "@/src/lib/api-types";
import { SuwFinalCtaSection } from "@/src/components/organisms/suw-final-cta-section";
import { getFinalCta, resolveFinalCtaHref } from "@/src/lib/final-cta";
import { staticProjectsSnapshot } from "@/src/lib/static-cms-snapshot";

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
    heroDescription: "",
  },
  en: {
    metaTitle: "Projects",
    metaDescription:
      "Explore selected SUW workwear projects developed for corporate teams, field operations and custom requirements.",
    eyebrow: "PROJECTS",
    heroTitle: "WORKWEAR\nIN ACTION.",
    heroDescription: "",
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
    hero_title: "",
    hero_description: "",
    sectors: sectorFallback.map((item, index) => ({ id: index + 1, title: item[tr ? 0 : 1], headline: item[tr ? 2 : 3], description: tr ? "Çalışma koşullarına, ekip ihtiyaçlarına ve kurumsal kimliğe göre geliştirilen profesyonel iş giyimi çözümleri." : "Professional workwear solutions developed around working conditions, team requirements and corporate identity.", product_groups: [], image: null, image_mobile: null })),
  };
}

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = pageContent[locale];
  let projects = process.env.NEXT_PUBLIC_FORCE_LOCAL_FALLBACK === "true" ? staticProjectsSnapshot[locale] : getFallback(locale);
  try {
    projects = (await createAPI(locale).get<ProjectsPageResponse>("projects/")).data;
  } catch {}
  return createLocalizedPageMetadata(locale, {
    title: projects.seo_title || content.metaTitle,
    description: projects.seo_description || content.metaDescription,
    path: "/projects",
  });
}

export default async function ProjectsPage({
  params,
}: ProjectsPageProps) {
  const { locale } = await params;
  const content = pageContent[locale];
  let projects = process.env.NEXT_PUBLIC_FORCE_LOCAL_FALLBACK === "true" ? staticProjectsSnapshot[locale] : getFallback(locale);
  try {
    const response = await createAPI(locale).get<ProjectsPageResponse>("projects/");
    projects = response.data;
  } catch {}
  const finalCta = await getFinalCta(locale);

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>
            {projects.hero_title.split(/\r?\n/).map((line) => <span className={styles.titleLine} key={line}>{line}</span>)}
          </h1>
          {projects.hero_description ? <p className={styles.description}>{projects.hero_description}</p> : null}
        </div>
      </section>
        <ProjectsSectorShowcase content={projects} />
      <SuwFinalCtaSection bottomLabel={finalCta.bottom_label} buttonLabel={finalCta.text} description={finalCta.description} href={resolveFinalCtaHref(locale, finalCta.link)} title={finalCta.title} />

    </main>
  );
}
