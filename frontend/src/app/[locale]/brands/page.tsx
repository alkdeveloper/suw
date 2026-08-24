import type { Metadata } from "next";

import { BrandsCompaniesSection } from "@/src/components/organisms/brands-companies-section";
import { BrandsGlobalOperationsSection } from "@/src/components/organisms/brands-global-operations-section";
import { BrandsGrowthSliderSection } from "@/src/components/organisms/brands-growth-slider-section";
import { BrandsIntroSection } from "@/src/components/organisms/brands-intro-section";
import { BrandsQuoteSection } from "@/src/components/organisms/brands-quote-section";
import { BrandsShowcaseSection } from "@/src/components/organisms/brands-showcase-section";
import { CorporateTimelineSection } from "@/src/components/organisms/corporate-timeline-section";
import { BrandsStorySection } from "@/src/components/organisms/brands-story-section";
import { CareerMarqueeSection } from "@/src/components/organisms/career-marquee-section";
import { MiniHero } from "@/src/components/organisms/mini-hero";
import type { BrandsPageResponse } from "@/src/lib/api-types";
import { createAPI } from "@/src/lib/api";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { createLocalizedPageMetadata, resolveMetadataValue } from "@/src/lib/metadata";

export function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}
const brandsHeroMask = "/images/figma-assets/brands-hero-mask.svg";
const brandsHeroGlow = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1' fill='none'%3E%3C/svg%3E";

type BrandsPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

async function getBrandsPage(locale: SupportedLocale) {
  const response = await createAPI(locale).get<BrandsPageResponse>("brands/");

  return response.data;
}

const WEB_MERCATOR_MAX_LATITUDE = 85.05112878;

function mapLocationToPercent(latitude: number | string, longitude: number | string) {
  const parsedLatitude = typeof latitude === "string" ? Number.parseFloat(latitude) : latitude;
  const parsedLongitude = typeof longitude === "string" ? Number.parseFloat(longitude) : longitude;

  if (!Number.isFinite(parsedLatitude) || !Number.isFinite(parsedLongitude)) {
    return {
      left: "50%",
      top: "50%",
    };
  }

  const clampedLatitude = Math.max(-WEB_MERCATOR_MAX_LATITUDE, Math.min(WEB_MERCATOR_MAX_LATITUDE, parsedLatitude));
  const latitudeRadians = (clampedLatitude * Math.PI) / 180;
  const mercatorY = Math.log(Math.tan(Math.PI / 4 + latitudeRadians / 2));
  const normalizedY = (1 - mercatorY / Math.PI) / 2;
  const normalizedX = (parsedLongitude + 180) / 360;

  return {
    left: `${(normalizedX * 100).toFixed(1)}%`,
    top: `${(normalizedY * 100).toFixed(1)}%`,
  };
}

export async function generateMetadata({ params }: BrandsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const page = await getBrandsPage(locale);

  return createLocalizedPageMetadata(locale, {
    title: resolveMetadataValue(page.meta_title, "Şirketlerimiz"),
    description: resolveMetadataValue(
      page.meta_description,
      "ALK Group bünyesindeki markaları, şirket yapısını ve global operasyon ağını inceleyin.",
    ),
    path: "/brands",
    image: page.hero_image ?? undefined,
  });
}

function resolveShowcaseCtaLabel(label: string | undefined, locale: SupportedLocale): string {
  const fromApi = label?.trim();
  if (fromApi) {
    return fromApi;
  }

  return locale === "en" ? "Discover >" : "Markayı İncele >";
}

function resolveCompanyDetailHref(locale: SupportedLocale, detailKey?: string) {
  if (!detailKey) {
    return undefined;
  }

  return withLocalePath(locale, `/brands/${detailKey}`);
}

export default async function BrandsPage({ params }: BrandsPageProps) {
  const { locale } = await params;
  const page = await getBrandsPage(locale);
  const midpoint = Math.ceil(page.ticker_words.length / 2);

  return (
    <main>
      <MiniHero
        backgroundImageSrc={page.hero_image ?? page.video_image ?? undefined}
        backgroundMaskSrc={brandsHeroMask}
        contentAlignment="bottom-left"
        fillViewport
        glowImageSrc={brandsHeroGlow}
        showScrollIndicator
        title={page.hero_title}
        variant="brands"
        videoSrc={page.video_file ?? undefined}
      />
      <BrandsIntroSection text={page.intro_label} />
      <BrandsStorySection eyebrow={page.intro_label} text={page.intro_text} />
      <BrandsShowcaseSection
        cards={page.brands.map((brand) => ({
          ctaLabel: resolveShowcaseCtaLabel(brand.cta_label, locale),
          href: brand.url || undefined,
          id: String(brand.id),
          imageAlt: brand.name,
          imageSrc: brand.card_image ?? undefined,
          logoAlt: `${brand.name} logo`,
          logoHeight: 82,
          logoSrc: brand.logo ?? undefined,
          logoWidth: 186,
          title: brand.name,
        }))}
      />
      <BrandsQuoteSection text={page.ticker_description} />
      <CareerMarqueeSection
        className="career-marquee--transparent"
        bottomRowItems={page.ticker_words.slice(midpoint).map((item) => item.text)}
        topRowItems={page.ticker_words.slice(0, midpoint).map((item) => item.text)}
      />
      <CorporateTimelineSection
        eyebrow={page.milestones_title}
        items={page.milestones.map((item) => ({
          text: item.description,
          year: item.year,
        }))}
        variant="brands"
      />
      <BrandsGrowthSliderSection
        locale={locale}
        texts={[page.ticker_description, page.global_description, page.countries_text].filter(Boolean)}
      />
      <BrandsCompaniesSection
        items={page.brands.map((brand) => ({
          description: brand.description,
          id: String(brand.id),
          logoAlt: brand.name,
          logoHeight: 80,
          logoSrc: brand.logo ?? undefined,
          logoWidth: 240,
          title: brand.name,
        }))}
      />
      <BrandsGlobalOperationsSection
        description={page.countries_text}
        locations={page.locations.map((location) => ({
          id: String(location.id),
          label: location.country_name,
          ...mapLocationToPercent(location.latitude, location.longitude),
        }))}
        mapImageSrc={page.global_map_image ?? undefined}
        subtitle={page.global_description}
        title={page.global_title}
      />
    </main>
  );
}
