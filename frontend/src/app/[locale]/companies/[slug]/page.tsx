import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BrandDetailFeatureSection } from "@/src/components/organisms/brand-detail-feature-section";
import type { BrandDetailFeatureContactItem } from "@/src/components/organisms/brand-detail-feature-section";
import { BrandDetailIntroSection } from "@/src/components/organisms/brand-detail-intro-section";
import { BrandsCompaniesSection } from "@/src/components/organisms/brands-companies-section";
import { BrandsGlobalOperationsSection } from "@/src/components/organisms/brands-global-operations-section";
import { BrandsGrowthSliderSection } from "@/src/components/organisms/brands-growth-slider-section";
import { CareerMarqueeSection } from "@/src/components/organisms/career-marquee-section";
import { MiniHero } from "@/src/components/organisms/mini-hero";
import { createAPI } from "@/src/lib/api";
import type { BrandDetailResponse } from "@/src/lib/api-types";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { createLocalizedPageMetadata, resolveMetadataValue } from "@/src/lib/metadata";
export function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}
const companyDetailHeroMask = "/images/figma-assets/brands-hero-mask.svg";
const companyDetailHeroGlow = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1' fill='none'%3E%3C/svg%3E";
const WEB_MERCATOR_MAX_LATITUDE = 85.05112878;

type CompanyDetailPageProps = {
  params: Promise<{
    locale: SupportedLocale;
    slug: string;
  }>;
};

function getBrandDetailButtonLabel(locale: SupportedLocale) {
  return locale === "en" ? "Discover Brand" : "Markayı Keşfet";
}

function resolveButtonHref(locale: SupportedLocale, ctaUrl?: string, fallbackUrl?: string) {
  const href = ctaUrl || fallbackUrl;
  if (!href) return undefined;
  return withLocalePath(locale, href) || undefined;
}

function mapLocationToPercent(latitude: number | string, longitude: number | string) {
  const parsedLatitude = typeof latitude === "string" ? Number.parseFloat(latitude) : latitude;
  const parsedLongitude = typeof longitude === "string" ? Number.parseFloat(longitude) : longitude;

  if (!Number.isFinite(parsedLatitude) || !Number.isFinite(parsedLongitude)) {
    return { left: "50%", top: "50%" };
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

async function getCompanyDetail(locale: SupportedLocale, slug: string) {
  try {
    const response = await createAPI(locale).get<BrandDetailResponse>(`companies/${slug}/`);
    return response.data;
  } catch {
    notFound();
  }
}

export async function generateMetadata({ params }: CompanyDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = await getCompanyDetail(locale, slug);

  return createLocalizedPageMetadata(locale, {
    title: resolveMetadataValue(page.meta_title, page.name),
    description: resolveMetadataValue(page.meta_description, page.description),
    path: `/companies/${slug}`,
    image: page.page_hero_image ?? undefined,
  });
}

export default async function CompanyDetailPage({ params }: CompanyDetailPageProps) {
  const { locale, slug } = await params;
  const page = await getCompanyDetail(locale, slug);
  const midpoint = Math.ceil(page.ticker_words.length / 2);
  const detailButtonLabel = page.cta_label?.trim() || getBrandDetailButtonLabel(locale);
  const detailButtonHref = resolveButtonHref(locale, page.cta_url, page.url);
  const featureImageSrc = page.card_image || page.gallery_images[0]?.image || undefined;
  const detailLogo = page.secondary_logo
    ? { alt: `${page.name} secondary logo`, height: 277, src: page.secondary_logo, width: 392 }
    : page.logo
      ? { alt: page.name, height: 237, src: page.logo, width: 498 }
      : undefined;
  const contacts = [
    { href: undefined, icon: "person", id: "person", label: page.contact_name },
    { href: page.contact_email ? `mailto:${page.contact_email}` : undefined, icon: "email", id: "email", label: page.contact_email },
    { href: page.url || undefined, icon: "website", id: "website", label: page.url },
  ].filter((item) => item.label) as BrandDetailFeatureContactItem[];

  return (
    <main>
      <MiniHero
        backgroundImageSrc={page.page_hero_image || undefined}
        backgroundMaskSrc={companyDetailHeroMask}
        fillViewport
        glowImageSrc={companyDetailHeroGlow}
        showScrollIndicator
        title={page.page_hero_title || page.name}
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
      <BrandDetailFeatureSection
        bottomDescription={page.content}
        buttonHref={detailButtonHref}
        buttonLabel={detailButtonLabel}
        contacts={contacts}
        imageAlt={page.name}
        imageHeight={527}
        imageSrc={featureImageSrc}
        imageWidth={1166}
        topDescription={page.description}
      />
      {page.has_global_block ? (
        <BrandsGlobalOperationsSection
          description={page.countries_text || ""}
          locations={(page.locations || []).map((location) => ({
            id: String(location.id),
            label: location.country_name,
            ...mapLocationToPercent(location.latitude, location.longitude),
          }))}
          mapImageSrc={page.global_map_image ?? undefined}
          subtitle={page.global_block_text}
          title={page.global_block_title}
        />
      ) : null}
      <BrandsGrowthSliderSection texts={[page.brand_detail_cta_text, page.content, page.description].filter(Boolean)} />
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