import type { Metadata } from "next";

import { BrandDetailContentSection } from "@/src/components/organisms/brand-detail-content-section";
import { BrandDetailIntroSection } from "@/src/components/organisms/brand-detail-intro-section";
import { BrandsCompaniesSection } from "@/src/components/organisms/brands-companies-section";
import { BrandsGlobalOperationsSection } from "@/src/components/organisms/brands-global-operations-section";
import { BrandsGrowthSliderSection } from "@/src/components/organisms/brands-growth-slider-section";
import { CareerMarqueeSection } from "@/src/components/organisms/career-marquee-section";
import { MiniHero } from "@/src/components/organisms/mini-hero";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { createLocalizedPageMetadata, resolveMetadataValue } from "@/src/lib/metadata";
import { getStaticBrandDetail } from "@/src/lib/static-brand-details";

export function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}

const akalHeroMask = "/images/figma-assets/brands-hero-mask.svg";
const akalHeroGlow = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1' fill='none'%3E%3C/svg%3E";
const WEB_MERCATOR_MAX_LATITUDE = 85.05112878;

type AkalBrandDetailPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

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

export async function generateMetadata({ params }: AkalBrandDetailPageProps): Promise<Metadata> {
  const { locale } = await params;
  const page = await getStaticBrandDetail(locale, "akal");

  return createLocalizedPageMetadata(locale, {
    title: resolveMetadataValue(page.meta_title, "AKAL"),
    description: resolveMetadataValue(
      page.meta_description,
      "AKAL Tekstil’in üretim gücünü, markalarını ve global operasyon ağını keşfedin.",
    ),
    path: "/brands/akal",
    image: page.page_hero_image ?? undefined,
  });
}

export default async function AkalBrandDetailPage({ params }: AkalBrandDetailPageProps) {
  const { locale } = await params;
  const page = await getStaticBrandDetail(locale, "akal");
  const midpoint = Math.ceil(page.ticker_words.length / 2);
  const detailLogo = page.secondary_logo
    ? { alt: `${page.name} secondary logo`, height: 277, src: page.secondary_logo, width: 392 }
    : page.logo
      ? { alt: page.name, height: 145, src: page.logo, width: 472 }
      : undefined;

  return (
    <main>
      <MiniHero
        backgroundImageSrc={page.page_hero_image || undefined}
        backgroundMaskSrc={akalHeroMask}
        fillViewport
        glowImageSrc={akalHeroGlow}
        showScrollIndicator
        title={page.page_hero_title}
        variant="brands"
        videoSrc={page.page_video_file || undefined}
      />
      <BrandDetailIntroSection
        description={page.description}
        logoAlt={detailLogo?.alt}
        logoHeight={detailLogo?.height}
        logoSrc={detailLogo?.src}
        logoWidth={detailLogo?.width}
        tagline={page.subtitle}
      />
      <CareerMarqueeSection
        className="career-marquee--transparent"
        bottomRowItems={page.ticker_words.slice(midpoint).map((item) => item.text)}
        topRowItems={page.ticker_words.slice(0, midpoint).map((item) => item.text)}
      />
      <BrandDetailContentSection
        bottomDescription={page.content}
        cards={page.brands.map((brand) => ({
          ctaLabel: brand.cta_label,
          href: brand.url || undefined,
          id: String(brand.id),
          imageAlt: brand.name,
          imageSrc: brand.card_image || undefined,
          title: brand.name,
          logoAlt: `${brand.name} logo`,
          logoHeight: 70,
          logoSrc: brand.logo || undefined,
          logoWidth: 180,
          showCtaByDefault: true,
        }))}
        topDescription={page.description}
      />
      {page.has_global_block ? (
        <BrandsGlobalOperationsSection
          className="brands-global-operations--brand-detail"
          description={page.countries_text ?? page.global_block_text}
          locations={(page.locations ?? []).map((location) => ({
            id: String(location.id),
            label: location.country_name,
            ...mapLocationToPercent(location.latitude, location.longitude),
          }))}
          mapImageSrc={page.global_map_image || undefined}
          subtitle={page.global_block_text}
          title={page.global_block_title}
        />
      ) : null}
      <BrandsGrowthSliderSection texts={[page.brand_detail_cta_text, page.global_block_text, page.content].filter(Boolean)} />
      <BrandsCompaniesSection
        items={page.companies.map((company) => ({
          description: company.description,
          href: company.detail_page_active && company.slug ? withLocalePath(locale, `/companies/${company.slug}`) : undefined,
          id: String(company.id),
          logoAlt: company.name,
          logoHeight: 80,
          logoSrc: company.logo || undefined,
          logoWidth: 240,
          title: company.name,
        }))}
      />
    </main>
  );
}
