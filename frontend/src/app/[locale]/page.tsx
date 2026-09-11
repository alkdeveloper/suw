import type { Metadata } from "next";

import { SuwFeaturedProductsSection } from "@/src/components/organisms/suw-featured-products-section";
import { HomeActivitySliderSection } from "@/src/components/organisms/home-activity-slider-section";
import { HomeHeroSection } from "@/src/components/organisms/home-hero-section";
import type { HomePageResponse } from "@/src/lib/api-types";
import { createAPI } from "@/src/lib/api";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { createLocalizedPageMetadata, resolveMetadataValue } from "@/src/lib/metadata";
import { SuwProductionInsightsSection } from "@/src/components/organisms/suw-production-insights-section";
import { SuwCustomWorkwearSection } from "@/src/components/organisms/suw-custom-workwear-section";
import { SuwFinalCtaSection } from "@/src/components/organisms/suw-final-cta-section";
import { getProductGroups } from "@/src/lib/products";
import { resolveFinalCtaHref } from "@/src/lib/final-cta";
import { staticHomeSnapshot } from "@/src/lib/static-cms-snapshot";

export function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}
type HomePageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

async function getHomePage(
  locale: SupportedLocale,
): Promise<HomePageResponse> {
  const fallback = {
    meta_title: locale === "tr" ? "Anasayfa" : "Home",
    meta_description: locale === "tr" ? "SUW profesyonel iş giyimi çözümleri." : "SUW professional workwear solutions.",
    hero_title: locale === "tr" ? "İŞ İÇİN TASARLANDI." : "BUILT FOR WORK.",
    hero_subtitle: locale === "tr" ? "PROFESYONEL İŞ GİYİMİ" : "PROFESSIONAL WORKWEAR",
    hero_description: "",
    hero_image: null,
    hero_image_mobile: null,
    product_categories_eyebrow: locale === "tr" ? "ÜRÜN KATEGORİLERİ" : "PRODUCT CATEGORIES",
    product_categories_title: locale === "tr" ? "HER İŞ İÇİN TASARLANDI." : "BUILT FOR EVERY JOB.",
    product_categories_description: "",
    work_essentials_eyebrow: locale === "tr" ? "KATALOGDAN SEÇKİLER" : "FROM THE CATALOGUE",
    work_essentials_title: "",
    work_essentials_description: "",
    work_essentials_cta_text: "",
    work_essentials_cta_link: "",
    work_essentials_items: [],
    corporate_workwear_eyebrow: locale === "tr" ? "KURUMSAL İŞ GİYİMİ" : "CORPORATE WORKWEAR",
    corporate_workwear_title: "",
    corporate_workwear_description: "",
    corporate_workwear_personnel_title: "",
    corporate_workwear_personnel_description: "",
    corporate_workwear_personnel_image: null,
    corporate_workwear_promo_title: "",
    corporate_workwear_promo_description: "",
    corporate_workwear_promo_image: null,
    corporate_workwear_cta_text: "",
    corporate_workwear_cta_link: "",
    production_insights_eyebrow: locale === "tr" ? "ÜRETİM BİLGİSİ" : "PRODUCTION INSIGHTS",
    production_insights_title: "",
    production_insights_description: "",
    production_insight_items: [],
  };
  try {
    const response =
      await createAPI(locale).get<HomePageResponse>("home/");

    return {
      ...response.data,
      meta_title: response.data.meta_title || fallback.meta_title,
      meta_description: response.data.meta_description || fallback.meta_description,
      hero_title: response.data.hero_title || fallback.hero_title,
      hero_subtitle: response.data.hero_subtitle || fallback.hero_subtitle,
      hero_description: response.data.hero_description ?? "",
      hero_image: response.data.hero_image || fallback.hero_image,
      hero_image_mobile: response.data.hero_image_mobile || response.data.hero_image || fallback.hero_image_mobile,
      product_categories_eyebrow: response.data.product_categories_eyebrow || fallback.product_categories_eyebrow,
      product_categories_title: response.data.product_categories_title || fallback.product_categories_title,
      product_categories_description: response.data.product_categories_description ?? "",
      work_essentials_eyebrow: response.data.work_essentials_eyebrow || fallback.work_essentials_eyebrow,
      work_essentials_title: response.data.work_essentials_title ?? "",
      work_essentials_description: response.data.work_essentials_description ?? "",
      work_essentials_cta_text: response.data.work_essentials_cta_text ?? "",
      work_essentials_cta_link: response.data.work_essentials_cta_link ?? "",
      work_essentials_items: response.data.work_essentials_items || fallback.work_essentials_items,
      corporate_workwear_eyebrow: response.data.corporate_workwear_eyebrow || fallback.corporate_workwear_eyebrow,
      corporate_workwear_title: response.data.corporate_workwear_title ?? "",
      corporate_workwear_description: response.data.corporate_workwear_description ?? "",
      corporate_workwear_personnel_title: response.data.corporate_workwear_personnel_title ?? "",
      corporate_workwear_personnel_description: response.data.corporate_workwear_personnel_description ?? "",
      corporate_workwear_personnel_image: response.data.corporate_workwear_personnel_image ?? null,
      corporate_workwear_promo_title: response.data.corporate_workwear_promo_title ?? "",
      corporate_workwear_promo_description: response.data.corporate_workwear_promo_description ?? "",
      corporate_workwear_promo_image: response.data.corporate_workwear_promo_image ?? null,
      corporate_workwear_cta_text: response.data.corporate_workwear_cta_text ?? "",
      corporate_workwear_cta_link: response.data.corporate_workwear_cta_link ?? "",
      production_insights_eyebrow: response.data.production_insights_eyebrow || fallback.production_insights_eyebrow,
      production_insights_title: response.data.production_insights_title ?? "",
      production_insights_description: response.data.production_insights_description ?? "",
      production_insight_items: response.data.production_insight_items || fallback.production_insight_items,
    };
  } catch {
    return {
      ...fallback,
      ...staticHomeSnapshot[locale],

      activities_label:
        locale === "tr"
          ? "ÜRÜN KATEGORİLERİ"
          : "PRODUCT CATEGORIES",

      activities_title:
        locale === "tr"
          ? "HER İŞ İÇİN TASARLANDI."
          : "BUILT FOR EVERY JOB.",

      activities: [],
    } as unknown as HomePageResponse;
  }
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const page = await getHomePage(locale);

  return createLocalizedPageMetadata(locale, {
    title: resolveMetadataValue(page.meta_title, "Anasayfa"),
    description: resolveMetadataValue(
      page.meta_description,
      "SUW profesyonel iş giyimi çözümlerini keşfedin.",
    ),
    path: "/",
    image: page.hero_image ?? undefined,
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const page = await getHomePage(locale);
  const productGroups = await getProductGroups(locale, true);

  return (
    <main>
      <HomeHeroSection
        description={page.hero_description}
        eyebrow={page.hero_subtitle}
        imageSrc={page.hero_image ?? undefined}
        mobileImageSrc={page.hero_image_mobile ?? undefined}
        locale={locale}
        title={page.hero_title}
      />
      
      <HomeActivitySliderSection
          locale={locale}
          eyebrow={page.product_categories_eyebrow}
          description={page.product_categories_description}
          items={productGroups.map((group) => ({
            id: String(group.id),
            imageAlt: group.name,
            imageSrc: group.image ?? undefined,
            mobileImageSrc: group.image_mobile ?? undefined,
            label: group.name,
            description: group.short_description,
            href: withLocalePath(locale, `/products/${group.slug}`),
          }))}
          title={page.product_categories_title}
        />
      <SuwFeaturedProductsSection
        ctaHref={page.work_essentials_cta_link}
        ctaLabel={page.work_essentials_cta_text}
        description={page.work_essentials_description}
        eyebrow={page.work_essentials_eyebrow}
        items={page.work_essentials_items}
        locale={locale}
        title={page.work_essentials_title}
      />
      <SuwProductionInsightsSection
        description={page.production_insights_description}
        eyebrow={page.production_insights_eyebrow}
        items={page.production_insight_items}
        locale={locale}
        title={page.production_insights_title}
      />
      <SuwCustomWorkwearSection
        ctaHref={page.corporate_workwear_cta_link}
        ctaLabel={page.corporate_workwear_cta_text}
        description={page.corporate_workwear_description}
        eyebrow={page.corporate_workwear_eyebrow}
        items={[
          { id: "01", title: page.corporate_workwear_personnel_title, description: page.corporate_workwear_personnel_description, imageSrc: page.corporate_workwear_personnel_image ?? undefined },
          { id: "02", title: page.corporate_workwear_promo_title, description: page.corporate_workwear_promo_description, imageSrc: page.corporate_workwear_promo_image ?? undefined },
        ]}
        locale={locale}
        title={page.corporate_workwear_title}
      />
      <SuwFinalCtaSection
        bottomLabel={page.final_cta?.bottom_label}
        buttonLabel={page.final_cta?.text}
        description={page.final_cta?.description}
        href={resolveFinalCtaHref(locale, page.final_cta?.link || "")}
        title={page.final_cta?.title}
      />
    </main>
  );
}
