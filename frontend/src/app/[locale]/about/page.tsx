import type { Metadata } from "next";

import type { SupportedLocale } from "@/src/lib/locale";
import { createLocalizedPageMetadata } from "@/src/lib/metadata";
import { SuwAboutIntroSection } from "@/src/components/organisms/suw-about-intro-section";
import { SuwAboutProductionSection } from "@/src/components/organisms/suw-about-production-section";
import { SuwAboutQualitySection } from "@/src/components/organisms/suw-about-quality-section";
import { SuwFinalCtaSection } from "@/src/components/organisms/suw-final-cta-section";
import { withLocalePath } from "@/src/lib/locale";


type AboutPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  return createLocalizedPageMetadata(locale, {
    title: "About",
    description:
      "Discover SUW's approach to professional workwear, production, quality and long-term project development.",
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: AboutPageProps) {
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
          <p>ABOUT SUW</p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(64px, 8vw, 138px)",
              lineHeight: 0.85,
              letterSpacing: "-0.07em",
            }}
          >
            BUILT ON
            <br />
            EXPERIENCE.
          </h1>
        </div>
      </section>
      <SuwAboutIntroSection />

<SuwAboutProductionSection />

<SuwAboutQualitySection />

<SuwFinalCtaSection
  href={withLocalePath(locale, "/contact")}
/>
    </main>
  );
}