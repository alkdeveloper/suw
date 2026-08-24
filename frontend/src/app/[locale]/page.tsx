import type { Metadata } from "next";

import { SuwFeaturedProductsSection } from "@/src/components/organisms/suw-featured-products-section";
import { HomeActivitySliderSection } from "@/src/components/organisms/home-activity-slider-section";
import { HomeHeroSection } from "@/src/components/organisms/home-hero-section";
import type { HomePageResponse } from "@/src/lib/api-types";
import { createAPI } from "@/src/lib/api";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { createLocalizedPageMetadata, resolveMetadataValue } from "@/src/lib/metadata";
import { SuwTechnicalFeatureSection } from "@/src/components/organisms/suw-technical-feature-section";
import { SuwIndustriesSection } from "@/src/components/organisms/suw-industries-section";
import { SuwCustomWorkwearSection } from "@/src/components/organisms/suw-custom-workwear-section";
import { SuwProcessSection } from "@/src/components/organisms/suw-process-section";
import { SuwProjectsSection } from "@/src/components/organisms/suw-projects-section";
import { SuwProductionSection } from "@/src/components/organisms/suw-production-section";
import { SuwFinalCtaSection } from "@/src/components/organisms/suw-final-cta-section";


type HomePageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

async function getHomePage(locale: SupportedLocale) {
  const response = await createAPI(locale).get<HomePageResponse>("home/");

  return response.data;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const page = await getHomePage(locale);

  return createLocalizedPageMetadata(locale, {
    title: resolveMetadataValue(page.meta_title, "Anasayfa"),
    description: resolveMetadataValue(
      page.meta_description,
      "1978’den bu yana üretim, promosyon, lojistik ve çok markalı operasyon yapısıyla büyüyen ALK Group dünyasını keşfedin.",
    ),
    path: "/",
    image: page.hero_image ?? undefined,
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const page = await getHomePage(locale);

  return (
    <main>
      <HomeHeroSection
        description={page.hero_description}
        eyebrow={page.hero_subtitle}
        imageSrc={page.hero_image ?? undefined}
        title={page.hero_title}
      />
      
      <HomeActivitySliderSection
          locale={locale}
          eyebrow={page.activities_label}
          items={page.activities.map((activity) => ({
            id: String(activity.id),
            imageAlt: activity.title,
            imageSrc: activity.image ?? undefined,
            label: activity.title,
          }))}
          title={page.activities_title}
        />
      <SuwFeaturedProductsSection />
      <SuwTechnicalFeatureSection />
      <SuwIndustriesSection />  
      <SuwCustomWorkwearSection />
      <SuwProcessSection />
      <SuwProjectsSection />
      <SuwProductionSection />
      <SuwFinalCtaSection href={withLocalePath(locale, "/contact")} />
    </main>
  );
}
