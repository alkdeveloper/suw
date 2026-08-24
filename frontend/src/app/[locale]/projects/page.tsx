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

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;

  return createLocalizedPageMetadata(locale, {
    title: "Projects",
    description:
      "Explore selected SUW workwear projects developed for corporate teams, field operations and custom requirements.",
    path: "/projects",
  });
}

export default async function ProjectsPage({
  params,
}: ProjectsPageProps) {
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
          <p>PROJECTS</p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(64px, 8vw, 138px)",
              lineHeight: 0.85,
              letterSpacing: "-0.07em",
            }}
          >
            WORKWEAR
            <br />
            IN PRACTICE.
          </h1>
        </div>
      </section>
        <SuwProjectsShowcaseSection />

        <SuwFinalCtaSection
        href={withLocalePath(locale, "/contact")}
        />

    </main>
  );
}