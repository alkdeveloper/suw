import type { Metadata } from "next";

import { CorporateBrandGallerySection } from "@/src/components/organisms/corporate-brand-gallery-section";
import { CorporateBrandShowcaseSection } from "@/src/components/organisms/corporate-brand-showcase-section";
import { CorporateIntroSection } from "@/src/components/organisms/corporate-intro-section";
import { CorporateJoinSection } from "@/src/components/organisms/corporate-join-section";
import { CorporateTimelineSection } from "@/src/components/organisms/corporate-timeline-section";
import { CorporateVisionMissionSection } from "@/src/components/organisms/corporate-vision-mission-section";
import { MiniHero } from "@/src/components/organisms/mini-hero";
import type { CorporatePageResponse } from "@/src/lib/api-types";
import { createAPI } from "@/src/lib/api";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { createLocalizedPageMetadata, resolveMetadataValue } from "@/src/lib/metadata";

const corporateHeroGlow = "/images/figma-assets/corporate-hero-glow.svg";

type CorporatePageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

async function getCorporatePage(locale: SupportedLocale) {
  const response = await createAPI(locale).get<CorporatePageResponse>("corporate/");

  return response.data;
}

export async function generateMetadata({ params }: CorporatePageProps): Promise<Metadata> {
  const { locale } = await params;
  const page = await getCorporatePage(locale);

  return createLocalizedPageMetadata(locale, {
    title: resolveMetadataValue(page.meta_title, "Kurumsal"),
    description: resolveMetadataValue(
      page.meta_description,
      "ALK Group’un hikayesi, vizyonu, misyonu ve üretimden dağıtıma uzanan kurumsal yapısını inceleyin.",
    ),
    path: "/corporate",
    image: page.hero_image ?? undefined,
  });
}

export default async function CorporatePage({ params }: CorporatePageProps) {
  const { locale } = await params;
  const page = await getCorporatePage(locale);

  return (
    <main>
      <MiniHero
        backgroundImageSrc={page.hero_image ?? undefined}
        contentAlignment="bottom-right"
        glowImageSrc={corporateHeroGlow}
        title={page.hero_text}
      />
      <CorporateIntroSection
        eyebrow={page.about_label}
        imageSrc={page.about_image ?? undefined}
        text={page.about_description}
      />
      <CorporateTimelineSection
        eyebrow={page.history_label}
        items={page.history_items.map((item) => ({
          text: item.description,
          year: item.year,
        }))}
        title={page.history_title}
      />
      <CorporateVisionMissionSection
        items={[
          {
            text: page.vision_description,
            title: page.vision_title,
          },
          {
            text: page.mission_description,
            title: page.mission_title,
          },
        ].filter((item) => item.title || item.text)}
      />
      <CorporateBrandShowcaseSection
        logos={page.brands.map((brand) => ({
          alt: brand.name,
          height: 86,
          src: brand.image ?? undefined,
          width: 173,
        }))}
        title={page.brands_title}
      />
      <CorporateBrandGallerySection
        eyebrow={page.activities_label}
        items={page.activities.map((activity) => ({
          id: String(activity.id),
          imageAlt: activity.title,
          imageSrc: activity.image ?? undefined,
          label: activity.title,
        }))}
        title={page.activities_title || "Faaliyet Alanlarımız"}
      />
      <CorporateJoinSection
        ctaHref={page.join_button_url ? withLocalePath(locale, page.join_button_url) : undefined}
        ctaLabel={page.join_button_text || undefined}
        description={page.join_description}
        eyebrow={page.join_label}
        title={page.join_title}
      />
    </main>
  );
}
