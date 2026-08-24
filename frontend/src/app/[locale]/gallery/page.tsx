import type { Metadata } from "next";

import { GalleryBrandStrip } from "@/src/components/organisms/gallery-brand-strip";
import { GalleryFeatureSection } from "@/src/components/organisms/gallery-feature-section";
import { GalleryJoinCtaSection } from "@/src/components/organisms/gallery-join-cta-section";
import { GalleryShowcaseSection } from "@/src/components/organisms/gallery-showcase-section";
import { MiniHero } from "@/src/components/organisms/mini-hero";
import type { GalleryImageResponse, GalleryPageResponse, PaginatedResponse } from "@/src/lib/api-types";
import { createAPI } from "@/src/lib/api";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { createLocalizedPageMetadata, resolveMetadataValue } from "@/src/lib/metadata";

const galleryHeroGlow = "/images/figma-assets/soft-glow.svg";

type GalleryPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

async function getGalleryPage(locale: SupportedLocale) {
  const response = await createAPI(locale).get<GalleryPageResponse>("gallery/");

  return response.data;
}

async function getGalleryImages(locale: SupportedLocale) {
  const response = await createAPI(locale).get<PaginatedResponse<GalleryImageResponse>>("gallery/images/");

  return response.data;
}

const showcaseClasses = [
  "gallery-showcase__tile--a",
  "gallery-showcase__tile--b",
  "gallery-showcase__tile--c",
  "gallery-showcase__tile--d",
  "gallery-showcase__tile--e",
  "gallery-showcase__tile--f",
  "gallery-showcase__tile--g",
  "gallery-showcase__tile--h",
  "gallery-showcase__tile--i",
  "gallery-showcase__tile--j",
];

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
  const { locale } = await params;
  const page = await getGalleryPage(locale);

  return createLocalizedPageMetadata(locale, {
    title: resolveMetadataValue(page.meta_title, "Galeri"),
    description: resolveMetadataValue(
      page.meta_description,
      "ALK Group’un üretim, marka ve operasyon dünyasından seçilmiş galeri içeriklerini inceleyin.",
    ),
    path: "/gallery",
    image: page.hero_image ?? undefined,
  });
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { locale } = await params;
  const [page, images] = await Promise.all([getGalleryPage(locale), getGalleryImages(locale)]);
  const galleryImageResults = images?.results ?? [];

  return (
    <main>
      <MiniHero
        backgroundImageSrc={page.hero_image ?? undefined}
        glowImageSrc={galleryHeroGlow}
        title={page.hero_title}
      />
      <GalleryShowcaseSection
        intro={page.intro_text}
        lightboxCloseAriaLabel={page.lightbox_close_aria_label}
        lightboxNextAriaLabel={page.lightbox_next_aria_label}
        lightboxPreviousAriaLabel={page.lightbox_previous_aria_label}
        showMoreLabel={page.show_more_text}
        tiles={galleryImageResults.map((image, index) => ({
          alt: image.title || image.category?.name || "",
          className: showcaseClasses[index % showcaseClasses.length],
          id: String(image.id),
          src: image.image ?? undefined,
        }))}
      />
      <GalleryBrandStrip
        logos={page.brands.map((brand) => ({
          alt: brand.name,
          id: String(brand.id),
          src: brand.image ?? undefined,
        }))}
      />
      <GalleryFeatureSection
        description={page.video_description}
        title={page.video_title}
        videoPosterSrc={page.video_image ?? undefined}
        videoSrc={((page.video_file ?? page.video_url) ?? "").trim() || undefined}
      />
      <GalleryJoinCtaSection
        ctaHref={page.join_button_url ? withLocalePath(locale, page.join_button_url) : undefined}
        ctaLabel={page.join_button_text || undefined}
        description={page.join_description}
        eyebrow={page.join_label}
        title={page.join_title}
      />
    </main>
  );
}
