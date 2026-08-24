import type { Metadata } from "next";

import { GalleryBrandStrip } from "@/src/components/organisms/gallery-brand-strip";
import { GalleryJoinCtaSection } from "@/src/components/organisms/gallery-join-cta-section";
import { MiniHero } from "@/src/components/organisms/mini-hero";
import {
  NewsArticleListSection,
  type NewsArticleListItem,
} from "@/src/components/organisms/news-article-list-section";
import {
  NewsFeaturedArticleSection,
  type NewsFeaturedArticle,
} from "@/src/components/organisms/news-featured-article-section";
import { NewsGallerySliderSection } from "@/src/components/organisms/news-gallery-slider-section";
import type { NewsListItemResponse, NewsPageResponse, PaginatedResponse } from "@/src/lib/api-types";
import { createAPI } from "@/src/lib/api";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { createLocalizedPageMetadata, resolveMetadataValue } from "@/src/lib/metadata";

const newsHeroGlow = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1' fill='none'%3E%3C/svg%3E";

type NewsPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

async function getNewsPage(locale: SupportedLocale) {
  const response = await createAPI(locale).get<NewsPageResponse>("news/");

  return response.data;
}

async function getNewsList(locale: SupportedLocale) {
  const response = await createAPI(locale).get<PaginatedResponse<NewsListItemResponse>>("news/list/", {
    params: { page: 1 },
  });

  return response.data;
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const page = await getNewsPage(locale);

  return createLocalizedPageMetadata(locale, {
    title: resolveMetadataValue(page.meta_title, "Bizden Haberler"),
    description: resolveMetadataValue(
      page.meta_description,
      "ALK Group’tan fuar, marka ve kurumsal gelişmelere dair güncel haberleri inceleyin.",
    ),
    path: "/news",
    image: page.hero_image ?? undefined,
  });
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  const [page, list] = await Promise.all([getNewsPage(locale), getNewsList(locale)]);

  const featuredArticle: NewsFeaturedArticle | null = page.featured
    ? {
        category: page.featured.category?.name ?? "",
        date: page.featured.date,
        description: page.featured.summary,
        href: withLocalePath(locale, `/news/${page.featured.slug}`),
        imageAlt: page.featured.title,
        imageSrc: page.featured.image ?? undefined,
        title: page.featured.title,
      }
    : null;

  const newsListItems: NewsArticleListItem[] = list.results.map((item) => ({
    category: item.category?.name ?? "",
    date: item.date,
    href: withLocalePath(locale, `/news/${item.slug}`),
    id: String(item.id),
    title: item.title,
  }));

  return (
    <main>
      <MiniHero
        backgroundImageSrc={page.hero_image ?? undefined}
        contentAlignment="left-center"
        glowImageSrc={newsHeroGlow}
        title={page.hero_title}
      />
      {featuredArticle ? <NewsFeaturedArticleSection article={featuredArticle} ctaLabel={page.featured_button_text} /> : null}
      <NewsArticleListSection items={newsListItems} loadMoreLabel={page.list_load_more_text} />
      {page.gallery_images.some((image) => Boolean(image.image)) ? (
        <NewsGallerySliderSection
          hideTitle={!page.gallery_title?.trim()}
          images={page.gallery_images.map((image) => ({
            alt: image.title || image.category?.name || "",
            src: image.image ?? undefined,
          }))}
          title={page.gallery_title}
        />
      ) : null}
      <GalleryBrandStrip
        logos={page.brands.map((brand) => ({
          alt: brand.name,
          id: String(brand.id),
          src: brand.image ?? undefined,
        }))}
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
