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

export async function generateMetadata({
  params,
}: SolutionsPageProps): Promise<Metadata> {
  const { locale } = await params;

  return createLocalizedPageMetadata(locale, {
    title: "Solutions",
    description:
      "Explore SUW workwear solutions including ready-made collections, customization and bespoke development.",
    path: "/solutions",
  });
}

export default async function SolutionsPage({
  params,
}: SolutionsPageProps) {
  const { locale } = await params;

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
          <p>SOLUTIONS</p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(64px, 8vw, 138px)",
              lineHeight: 0.85,
              letterSpacing: "-0.07em",
            }}
          >
            BUILT AROUND
            <br />
            YOUR TEAM.
          </h1>
        </div>
      </section>
      <SuwSolutionsModelsSection />
      <SuwBrandingCustomizationSection />
      <SuwSolutionsProcessSection />

      <SuwFinalCtaSection
        href={withLocalePath(locale, "/contact")}
        />
    </main>
  );
}