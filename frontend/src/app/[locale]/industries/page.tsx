import type { Metadata } from "next";

import { SuwFinalCtaSection } from "@/src/components/organisms/suw-final-cta-section";
import { SuwIndustriesGridSection } from "@/src/components/organisms/suw-industries-grid-section";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { createLocalizedPageMetadata } from "@/src/lib/metadata";

type IndustriesPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

const pageContent = {
  tr: {
    metaTitle: "Sektörler",
    metaDescription:
      "Farklı sektörler ve çalışma ortamları için geliştirilen SUW profesyonel iş giyimi çözümlerini keşfedin.",
    eyebrow: "SEKTÖRLER",
    title: "HER ORTAM İÇİN TASARLANDI.",
  },
  en: {
    metaTitle: "Industries",
    metaDescription:
      "Explore SUW professional workwear solutions developed for different industries and working environments.",
    eyebrow: "INDUSTRIES",
    title: "BUILT FOR EVERY ENVIRONMENT.",
  },
};

export async function generateMetadata({
  params,
}: IndustriesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = pageContent[locale];

  return createLocalizedPageMetadata(locale, {
    title: content.metaTitle,
    description: content.metaDescription,
    path: "/industries",
  });
}

export default async function IndustriesPage({
  params,
}: IndustriesPageProps) {
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
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "18px",
      marginBottom: "22px",
      color: "rgba(255,255,255,0.72)",
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
        background: "currentColor",
      }}
    />

    <span>{content.eyebrow}</span>
  </div>

  <h1
    style={{
      margin: 0,
      fontFamily: "var(--font-active), sans-serif",
      fontSize: "clamp(70px, 7vw, 122px)",
      fontWeight: 700,
      lineHeight: 0.88,
      letterSpacing: "-0.045em",
      whiteSpace: "nowrap",
      textTransform: "uppercase",
    }}
  >
    {content.title}
  </h1>
</div>
      </section>

      <SuwIndustriesGridSection />

      <SuwFinalCtaSection
        href={withLocalePath(locale, "/contact")}
      />
    </main>
  );
}