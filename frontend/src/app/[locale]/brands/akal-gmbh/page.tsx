import type { Metadata } from "next";

import { BrandDetailGallerySection } from "@/src/components/organisms/brand-detail-gallery-section";
import { BrandDetailIntroSection } from "@/src/components/organisms/brand-detail-intro-section";
import { BrandsCompaniesSection } from "@/src/components/organisms/brands-companies-section";
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

const akalGmbhHeroMask = "/images/figma-assets/brands-hero-mask.svg";
const akalGmbhHeroGlow = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1' fill='none'%3E%3C/svg%3E";

function getBrandDetailButtonLabel(locale: SupportedLocale) {
  return locale === "en" ? "Discover Brand" : "Markayı Keşfet";
}

function resolveButtonHref(locale: SupportedLocale, ctaUrl?: string, fallbackUrl?: string) {
  const href = ctaUrl || fallbackUrl;
  if (!href) {
    return undefined;
  }

  return withLocalePath(locale, href) || undefined;
}

type AkalGmbhBrandDetailPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

export async function generateMetadata({ params }: AkalGmbhBrandDetailPageProps): Promise<Metadata> {
  const { locale } = await params;
  const page = await getStaticBrandDetail(locale, "akal-gmbh");

  return createLocalizedPageMetadata(locale, {
    title: resolveMetadataValue(page.meta_title, "AKAL GmbH"),
    description: resolveMetadataValue(
      page.meta_description,
      "AKAL GmbH ve Nordbron odağındaki Avrupa operasyon, finans ve lojistik yapılanmasını inceleyin.",
    ),
    path: "/brands/akal-gmbh",
    image: page.page_hero_image ?? undefined,
  });
}

export default async function AkalGmbhBrandDetailPage({ params }: AkalGmbhBrandDetailPageProps) {
  const { locale } = await params;
  const page = await getStaticBrandDetail(locale, "akal-gmbh");
  const midpoint = Math.ceil(page.ticker_words.length / 2);
  const detailButtonLabel = page.cta_label?.trim() || getBrandDetailButtonLabel(locale);
  const detailButtonHref = resolveButtonHref(locale, page.cta_url, page.url);
  const detailLogos = [
    page.logo ? { alt: `${page.name} logo`, height: 157, src: page.logo, width: 306 } : null,
    page.secondary_logo ? { alt: `${page.name} secondary logo`, height: 277, src: page.secondary_logo, width: 392 } : null,
  ].filter((logo): logo is { alt: string; height: number; src: string; width: number } => Boolean(logo));

  return (
    <main>
      <MiniHero
        backgroundImageSrc={page.page_hero_image || undefined}
        backgroundMaskSrc={akalGmbhHeroMask}
        fillViewport
        glowImageSrc={akalGmbhHeroGlow}
        showScrollIndicator
        title={page.page_hero_title}
        variant="brands"
        videoSrc={page.page_video_file || undefined}
      />
      {detailLogos.length > 0 ? (
        <BrandDetailIntroSection
          description={page.description}
          logos={detailLogos}
          tagline={page.subtitle}
        />
      ) : null}
      <CareerMarqueeSection
        className="career-marquee--transparent"
        bottomRowItems={page.ticker_words.slice(midpoint).map((item) => item.text)}
        topRowItems={page.ticker_words.slice(0, midpoint).map((item) => item.text)}
      />
      <BrandDetailGallerySection
        buttonHref={detailButtonHref}
        buttonLabel={detailButtonLabel}
        images={page.gallery_images.map((image) => ({
          alt: image.title || page.name,
          height: 732,
          src: image.image || undefined,
          width: 526,
        }))}
      />
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
