import type { Metadata } from "next";

import { GalleryBrandStrip } from "@/src/components/organisms/gallery-brand-strip";
import { GalleryJoinCtaSection } from "@/src/components/organisms/gallery-join-cta-section";
import { MiniHero } from "@/src/components/organisms/mini-hero";
import { NewsDetailArticleSection } from "@/src/components/organisms/news-detail-article-section";
import { NewsGallerySliderSection } from "@/src/components/organisms/news-gallery-slider-section";
import { NewsRelatedPostsSection } from "@/src/components/organisms/news-related-posts-section";
import type { NewsDetailResponse } from "@/src/lib/api-types";
import { createAPI } from "@/src/lib/api";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { createLocalizedPageMetadata, resolveMetadataValue } from "@/src/lib/metadata";

const newsDetailHeroGlow = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1' fill='none'%3E%3C/svg%3E";

export function generateStaticParams() {
  return [
    { locale: "tr", slug: "preview" },
    { locale: "en", slug: "preview" },
  ];
}
type NewsDetailPageProps = {
  params: Promise<{
    locale: SupportedLocale;
    slug: string;
  }>;
};

async function getNewsDetail(locale: SupportedLocale, slug: string) {
  const response = await createAPI(locale).get<NewsDetailResponse>(`news/${slug}/`);

  return response.data;
}

function splitContent(content: string) {
  return content
    .split(/\n+/u)
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = await getNewsDetail(locale, slug);

  return createLocalizedPageMetadata(locale, {
    title: resolveMetadataValue(article.meta_title, article.title),
    description: resolveMetadataValue(article.meta_description, article.summary),
    image: article.image ?? undefined,
    path: `/news/${article.slug}`,
    type: "article",
  });
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { locale, slug } = await params;
  const article = await getNewsDetail(locale, slug);

  return (
    <main>
      <MiniHero
        backgroundImageSrc={article.page_hero_image ?? undefined}
        contentAlignment="left-center"
        glowImageSrc={newsDetailHeroGlow}
        title={article.page_hero_title}
      />
      <NewsDetailArticleSection
        date={article.date}
        imageAlt={article.title}
        imageSrc={article.image ?? undefined}
        nextItem={
          article.next_news
            ? {
                href: withLocalePath(locale, `/news/${article.next_news.slug}`),
                label: article.next_label,
                text: article.next_news.title,
              }
            : null
        }
        paragraphs={splitContent(article.content || article.summary)}
        previousItem={
          article.previous_news
            ? {
                href: withLocalePath(locale, `/news/${article.previous_news.slug}`),
                label: article.previous_label,
                text: article.previous_news.title,
              }
            : null
        }
        shareTitle={article.share_title}
        title={article.title}
      />
      {article.gallery_images.some((image) => Boolean(image.image)) ? (
        <NewsGallerySliderSection
          hideTitle={!article.gallery_title?.trim()}
          images={article.gallery_images.map((image) => ({
            alt: image.title || image.category?.name || "",
            src: image.image ?? undefined,
          }))}
          title={article.gallery_title}
        />
      ) : null}
      <NewsRelatedPostsSection
        items={article.related_news.map((item) => ({
          category: item.category?.name ?? "",
          date: item.date,
          href: withLocalePath(locale, `/news/${item.slug}`),
          id: String(item.id),
          title: item.title,
        }))}
        title={article.related_title}
        viewAllHref={withLocalePath(locale, "/news")}
        viewAllLabel={article.related_view_all_text}
      />
      <GalleryBrandStrip
        logos={article.brands.map((brand) => ({
          alt: brand.name,
          id: String(brand.id),
          src: brand.image ?? undefined,
        }))}
      />
      <GalleryJoinCtaSection
        ctaHref={article.join_button_url ? withLocalePath(locale, article.join_button_url) : undefined}
        ctaLabel={article.join_button_text || undefined}
        description={article.join_description}
        eyebrow={article.join_label}
        title={article.join_title}
      />
    </main>
  );
}
