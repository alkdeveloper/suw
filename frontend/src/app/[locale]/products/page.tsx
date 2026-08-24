import type { Metadata } from "next";

import { SuwFinalCtaSection } from "@/src/components/organisms/suw-final-cta-section";
import { SuwProductsGridSection } from "@/src/components/organisms/suw-products-grid-section";
import { SuwProductsTechnicalSection } from "@/src/components/organisms/suw-products-technical-section";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { createLocalizedPageMetadata } from "@/src/lib/metadata";
export function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}
type ProductsPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

const pageContent = {
  tr: {
    metaTitle: "Ürünler",
    metaDescription:
      "SUW profesyonel iş giyimi ürünlerini keşfedin. Performans, dayanıklılık ve günlük kullanım için geliştirilen çözümler.",
    eyebrow: "ÜRÜNLER",
    titleLine1: "İŞ İÇİN",
    titleLine2: "GELİŞTİRİLDİ.",
  },
  en: {
    metaTitle: "Products",
    metaDescription:
      "Explore SUW professional workwear developed for performance, durability and everyday use.",
    eyebrow: "PRODUCTS",
    titleLine1: "BUILT FOR",
    titleLine2: "THE JOB.",
  },
};

export async function generateMetadata({
  params,
}: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = pageContent[locale];

  return createLocalizedPageMetadata(locale, {
    title: content.metaTitle,
    description: content.metaDescription,
    path: "/products",
  });
}

export default async function ProductsPage({
  params,
}: ProductsPageProps) {
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
    }}
  >
    {content.titleLine1} {content.titleLine2}
  </h1>
</div>
        </section>

      <SuwProductsGridSection />

      <SuwProductsTechnicalSection />

      <SuwFinalCtaSection href={withLocalePath(locale, "/contact")} />
    </main>
  );
}