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
import { SuwProductionInsightsSection } from "@/src/components/organisms/suw-production-insights-section";
import { SuwCustomWorkwearSection } from "@/src/components/organisms/suw-custom-workwear-section";
import { SuwProcessSection } from "@/src/components/organisms/suw-process-section";
import { SuwFinalCtaSection } from "@/src/components/organisms/suw-final-cta-section";
import { getProductGroups } from "@/src/lib/products";

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
    hero_description: locale === "tr" ? "Performans, dayanıklılık ve işlevsellik için geliştirilen profesyonel iş giyimi çözümleri." : "Professional workwear solutions developed for performance, durability and functionality.",
    hero_image: null,
    hero_image_mobile: null,
    product_categories_eyebrow: locale === "tr" ? "ÜRÜN KATEGORİLERİ" : "PRODUCT CATEGORIES",
    product_categories_title: locale === "tr" ? "HER İŞ İÇİN TASARLANDI." : "BUILT FOR EVERY JOB.",
    product_categories_description: locale === "tr" ? "Performans, koruma ve günlük kullanım ihtiyaçları için geliştirilen profesyonel iş giyimi çözümlerini keşfedin." : "Explore professional workwear developed around performance, protection and everyday usability.",
    work_essentials_eyebrow: locale === "tr" ? "KATALOGDAN SEÇKİLER" : "FROM THE CATALOGUE",
    work_essentials_title: locale === "tr" ? "İŞ GİYİMİNİ YAKINDAN KEŞFEDİN." : "EXPLORE WORKWEAR IN DETAIL.",
    work_essentials_description: locale === "tr" ? "Farklı çalışma alanları için geliştirdiğimiz iş giyimi ve tamamlayıcı ürünlerden seçilmiş uygulamaları keşfedin." : "Discover selected workwear and complementary products developed for different working environments.",
    work_essentials_cta_text: locale === "tr" ? "ÜRÜNLERİ KEŞFET" : "EXPLORE PRODUCTS",
    work_essentials_cta_link: "/products",
    work_essentials_items: [],
    technical_performance_eyebrow: locale === "tr" ? "TEKNİK PERFORMANS" : "TECHNICAL PERFORMANCE",
    technical_performance_title: locale === "tr" ? "PERFORMANS İÇİN\nGELİŞTİRİLDİ." : "ENGINEERED\nTO PERFORM.",
    technical_performance_description: locale === "tr" ? "Her detay, zorlu çalışma ortamlarında hareket, koruma ve dayanıklılık ihtiyaçlarına göre geliştirildi." : "Every detail is developed around movement, protection and durability for demanding working environments.",
    technical_performance_image: null,
    technical_performance_cta_text: "",
    technical_performance_cta_link: "",
    technical_performance_items: [],
    corporate_workwear_eyebrow: locale === "tr" ? "KURUMSAL İŞ GİYİMİ" : "CORPORATE WORKWEAR",
    corporate_workwear_title: locale === "tr" ? "KIYAFETLERİNİZ, KİMLİĞİNİZ." : "YOUR WORKWEAR, YOUR IDENTITY.",
    corporate_workwear_description: locale === "tr" ? "Kurumsal kimliği sahaya taşıyan, ekiplerin kullanım ihtiyaçlarına göre geliştirilen personel kıyafetleri ve promosyon tekstil çözümleri sunuyoruz." : "We provide staff apparel and promotional textile solutions that bring corporate identity into the workplace and respond to the practical needs of teams.",
    corporate_workwear_personnel_title: locale === "tr" ? "PERSONEL KIYAFETLERİ" : "STAFF WORKWEAR",
    corporate_workwear_personnel_description: locale === "tr" ? "Çalışma ortamı, kullanım sıklığı ve kurumsal kimliğe göre geliştirilen personel kıyafetleri. Model, kumaş, renk, ölçü ve uygulama detayları ekiplerin ihtiyaçlarına göre planlanır." : "Staff workwear developed around the working environment, frequency of use and corporate identity. Styles, fabrics, colors, sizing and application details are planned around each team's needs.",
    corporate_workwear_personnel_image: null,
    corporate_workwear_promo_title: locale === "tr" ? "PROMOSYON TEKSTİL ÜRÜNLERİ" : "PROMOTIONAL TEXTILE PRODUCTS",
    corporate_workwear_promo_description: locale === "tr" ? "Marka görünürlüğünü destekleyen tekstil ürünleri; logo, baskı, nakış, renk ve paketleme seçenekleriyle kurumsal kullanım, etkinlik ve promosyon projelerine özel hazırlanır." : "Textile products that support brand visibility, prepared for corporate use, events and promotional projects with tailored logo, print, embroidery, color and packaging options.",
    corporate_workwear_promo_image: null,
    corporate_workwear_cta_text: "",
    corporate_workwear_cta_link: "",
    process_eyebrow: locale === "tr" ? "SÜREÇ" : "PROCESS",
    process_title: locale === "tr" ? "FİKİRDEN TESLİMATA." : "FROM IDEA TO DELIVERY.",
    process_description: locale === "tr" ? "Ürün seçiminden teslimata kadar tüm süreci tek bir yapı içinde planlıyor, geliştiriyor ve takip ediyoruz." : "We plan, develop and manage the entire process within one coordinated structure, from product selection through to delivery.",
    process_steps: locale === "tr" ? [
      { id: 1, title: "ÜRÜN SEÇİMİ", description: "İhtiyaca, kullanım alanına ve çalışma koşullarına uygun ürün grubu belirlenir.", sort_order: 1 },
      { id: 2, title: "TASARIM", description: "Model, renk, kumaş, logo uygulamaları ve kurumsal detaylar proje ihtiyaçlarına göre şekillendirilir.", sort_order: 2 },
      { id: 3, title: "TEKLİF & SİPARİŞ", description: "Ürün özellikleri, adetler ve uygulamalar netleştirilerek teklif hazırlanır ve sipariş onaylanır.", sort_order: 3 },
      { id: 4, title: "ÜRETİM", description: "Onaylanan ürünler planlanan teknik detaylara ve üretim programına göre hazırlanır.", sort_order: 4 },
      { id: 5, title: "KALİTE KONTROL", description: "Ürünler ölçü, dikiş, uygulama ve genel kalite kriterlerine göre kontrol edilir.", sort_order: 5 },
      { id: 6, title: "TESLİMAT", description: "Kontrolleri tamamlanan ürünler paketlenir ve belirlenen teslimat planına göre sevk edilir.", sort_order: 6 },
    ] : [
      { id: 1, title: "PRODUCT SELECTION", description: "The appropriate product range is defined according to requirements, area of use and working conditions.", sort_order: 1 },
      { id: 2, title: "DESIGN", description: "Styles, colors, fabrics, logo applications and corporate details are shaped around the needs of the project.", sort_order: 2 },
      { id: 3, title: "QUOTATION & ORDER", description: "Product specifications, quantities and applications are finalized before the quotation is prepared and the order approved.", sort_order: 3 },
      { id: 4, title: "PRODUCTION", description: "Approved products are prepared according to the agreed technical details and production schedule.", sort_order: 4 },
      { id: 5, title: "QUALITY CONTROL", description: "Products are inspected against sizing, stitching, application and overall quality criteria.", sort_order: 5 },
      { id: 6, title: "DELIVERY", description: "Once inspections are complete, products are packed and dispatched according to the agreed delivery plan.", sort_order: 6 },
    ],
    production_insights_eyebrow: locale === "tr" ? "ÜRETİM BİLGİSİ" : "PRODUCTION INSIGHTS",
    production_insights_title: locale === "tr" ? "İYİ İŞ GİYİMİ DETAYLARDA BAŞLAR." : "GREAT WORKWEAR STARTS WITH THE DETAILS.",
    production_insights_description: locale === "tr" ? "Doğru kumaştan uygulama tekniğine, kalite kontrolden sevkiyata kadar her aşama ürünün performansını belirler. SUW üretim sürecinin temel bileşenlerini keşfedin." : "From fabric selection and application techniques to quality control and delivery, every stage influences product performance. Explore the key components of the SUW production process.",
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
      hero_description: response.data.hero_description || fallback.hero_description,
      hero_image: response.data.hero_image || fallback.hero_image,
      hero_image_mobile: response.data.hero_image_mobile || response.data.hero_image || fallback.hero_image_mobile,
      product_categories_eyebrow: response.data.product_categories_eyebrow || fallback.product_categories_eyebrow,
      product_categories_title: response.data.product_categories_title || fallback.product_categories_title,
      product_categories_description: response.data.product_categories_description || fallback.product_categories_description,
      work_essentials_eyebrow: response.data.work_essentials_eyebrow || fallback.work_essentials_eyebrow,
      work_essentials_title: response.data.work_essentials_title || fallback.work_essentials_title,
      work_essentials_description: response.data.work_essentials_description || fallback.work_essentials_description,
      work_essentials_cta_text: response.data.work_essentials_cta_text || fallback.work_essentials_cta_text,
      work_essentials_cta_link: response.data.work_essentials_cta_link || fallback.work_essentials_cta_link,
      work_essentials_items: response.data.work_essentials_items || fallback.work_essentials_items,
      technical_performance_eyebrow: response.data.technical_performance_eyebrow || fallback.technical_performance_eyebrow,
      technical_performance_title: response.data.technical_performance_title || fallback.technical_performance_title,
      technical_performance_description: response.data.technical_performance_description || fallback.technical_performance_description,
      technical_performance_image: response.data.technical_performance_image || fallback.technical_performance_image,
      technical_performance_cta_text: response.data.technical_performance_cta_text || fallback.technical_performance_cta_text,
      technical_performance_cta_link: response.data.technical_performance_cta_link || fallback.technical_performance_cta_link,
      technical_performance_items: response.data.technical_performance_items || fallback.technical_performance_items,
      corporate_workwear_eyebrow: response.data.corporate_workwear_eyebrow || fallback.corporate_workwear_eyebrow,
      corporate_workwear_title: response.data.corporate_workwear_title || fallback.corporate_workwear_title,
      corporate_workwear_description: response.data.corporate_workwear_description || fallback.corporate_workwear_description,
      corporate_workwear_personnel_title: response.data.corporate_workwear_personnel_title || fallback.corporate_workwear_personnel_title,
      corporate_workwear_personnel_description: response.data.corporate_workwear_personnel_description || fallback.corporate_workwear_personnel_description,
      corporate_workwear_personnel_image: response.data.corporate_workwear_personnel_image || fallback.corporate_workwear_personnel_image,
      corporate_workwear_promo_title: response.data.corporate_workwear_promo_title || fallback.corporate_workwear_promo_title,
      corporate_workwear_promo_description: response.data.corporate_workwear_promo_description || fallback.corporate_workwear_promo_description,
      corporate_workwear_promo_image: response.data.corporate_workwear_promo_image || fallback.corporate_workwear_promo_image,
      corporate_workwear_cta_text: response.data.corporate_workwear_cta_text || fallback.corporate_workwear_cta_text,
      corporate_workwear_cta_link: response.data.corporate_workwear_cta_link || fallback.corporate_workwear_cta_link,
      process_eyebrow: response.data.process_eyebrow || fallback.process_eyebrow,
      process_title: response.data.process_title || fallback.process_title,
      process_description: response.data.process_description || fallback.process_description,
      process_steps: response.data.process_steps?.length ? response.data.process_steps : fallback.process_steps,
      production_insights_eyebrow: response.data.production_insights_eyebrow || fallback.production_insights_eyebrow,
      production_insights_title: response.data.production_insights_title || fallback.production_insights_title,
      production_insights_description: response.data.production_insights_description || fallback.production_insights_description,
      production_insight_items: response.data.production_insight_items || fallback.production_insight_items,
    };
  } catch {
    return {
      ...fallback,

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
      <SuwTechnicalFeatureSection
        ctaHref={page.technical_performance_cta_link}
        ctaLabel={page.technical_performance_cta_text}
        description={page.technical_performance_description}
        eyebrow={page.technical_performance_eyebrow}
        features={page.technical_performance_items.map((item, index) => ({ id: String(index + 1).padStart(2, "0"), label: item.title, value: item.description }))}
        imageSrc={page.technical_performance_image ?? undefined}
        locale={locale}
        title={page.technical_performance_title}
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
      <SuwProcessSection eyebrow={page.process_eyebrow} intro={page.process_description} locale={locale} steps={page.process_steps.map((step, index) => ({ id: String(index + 1).padStart(2, "0"), title: step.title, description: step.description }))} title={page.process_title} />
      <SuwFinalCtaSection href={withLocalePath(locale, "/contact")} />
    </main>
  );
}
