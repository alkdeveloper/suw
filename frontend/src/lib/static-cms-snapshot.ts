import type {
  ContactPageResponse,
  CorporatePageResponse,
  HomePageResponse,
  ProjectsPageResponse,
  SiteSettingsResponse,
} from "@/src/lib/api-types";
import type { SupportedLocale } from "@/src/lib/locale";
const mediaBaseUrl = (process.env.NEXT_PUBLIC_MEDIA_URL ?? "https://d2yobq6ugd5avs.cloudfront.net").replace(/\/$/, "");
const mediaAsset = (path: string) => `${mediaBaseUrl}/media/${path}`;

export const staticHomeSnapshot = {
  "tr": {
    "hero_title": "GEÇMİŞİN İZLERİ İLE ZAMANIN İÇİNDEN GELECEĞE...",
    "hero_subtitle": "",
    "hero_description": "",
    "hero_image": null,
    "hero_image_mobile": null,
    "product_categories_eyebrow": "",
    "product_categories_title": "HER SEKTÖR İÇİN TASARLANDI",
    "product_categories_description": "",
    "work_essentials_eyebrow": "",
    "work_essentials_title": "ÜRÜNLERİMİZİ YAKINDAN KEŞFEDİN",
    "work_essentials_description": "",
    "work_essentials_cta_text": "ÜRÜNLERİ KEŞFET",
    "work_essentials_cta_link": "/products",
    "work_essentials_items": [
      {
        "id": 1,
        "image": mediaAsset("home/work-essentials/989fa04edeab47ac994e328ce0951588.jpg"),
        "alt": "",
        "link": "",
        "sort_order": 0
      },
      {
        "id": 3,
        "image": mediaAsset("home/work-essentials/e480b2c3ad4d4a20b24ee79dade03340.jpg"),
        "alt": "",
        "link": "",
        "sort_order": 0
      },
      {
        "id": 4,
        "image": mediaAsset("home/work-essentials/637952b050e146feaba602acbc2476e1.jpg"),
        "alt": "",
        "link": "",
        "sort_order": 0
      },
      {
        "id": 5,
        "image": mediaAsset("home/work-essentials/3782d4e1c42649119ef35faa810513e4.jpg"),
        "alt": "",
        "link": "",
        "sort_order": 0
      },
      {
        "id": 6,
        "image": mediaAsset("home/work-essentials/ef857f0618d043aa8fad3e736fd7d5b3.jpg"),
        "alt": "",
        "link": "",
        "sort_order": 0
      }
    ],
    "corporate_workwear_eyebrow": "",
    "corporate_workwear_title": "MARKANIZ,  KİMLİĞİNİZ",
    "corporate_workwear_description": "",
    "corporate_workwear_personnel_title": "PERSONEL KIYAFETLERİ",
    "corporate_workwear_personnel_description": "Çalışma ortamı, kullanım sıklığı ve kurumsal kimliğe göre geliştirilen personel kıyafetleri. Model, kumaş, renk, ölçü ve uygulama detayları ekiplerin ihtiyaçlarına göre planlanır.",
    "corporate_workwear_personnel_image": mediaAsset("home/corporate-workwear/bde91c5b185e4afebc69a7cf3078693f.png"),
    "corporate_workwear_promo_title": "PROMOSYON TEKSTİL ÜRÜNLERİ",
    "corporate_workwear_promo_description": "Marka görünürlüğünü destekleyen tekstil ürünleri; logo, baskı, nakış, renk ve paketleme seçenekleriyle kurumsal kullanım, etkinlik ve promosyon projelerine özel hazırlanır.",
    "corporate_workwear_promo_image": mediaAsset("home/corporate-workwear/c43f8c0213c44b53b0feafc06b37c70d.png"),
    "corporate_workwear_cta_text": "",
    "corporate_workwear_cta_link": "",
    "production_insights_eyebrow": "",
    "production_insights_title": "SUW İLE FİKİRDEN TESLİMATA",
    "production_insights_description": "",
    "production_insight_items": [
      {
        "id": 1,
        "image": mediaAsset("home/production-insights/2bf7757888444580a890234277610530.png"),
        "title": "KUMAŞ SEÇİMİ",
        "short_description": "İşe uygun doğru kumaş seçimi",
        "detail_text": "Projenin kullanım alanına, mevsim koşullarına ve performans beklentisine göre en uygun kumaş seçenekleri belirlenir.",
        "sort_order": 0
      },
      {
        "id": 2,
        "image": mediaAsset("home/production-insights/c024b9f6d04440a0acf2d065c95c3c79.png"),
        "title": "TASARIM & GELİŞTİRME",
        "short_description": "İhtiyaca özel tasarım çözümleri",
        "detail_text": "Model, renk, aksesuar, logo uygulamaları ve ürün detayları markanıza ve kullanım amacına uygun şekilde geliştirilir.",
        "sort_order": 0
      },
      {
        "id": 3,
        "image": mediaAsset("home/production-insights/906466cd5b194be5b6b6f39632b8e729.png"),
        "title": "TEKLİF & SİPARİŞ",
        "short_description": "Net teklif, planlı sipariş süreci",
        "detail_text": "Ürün detayları, adetler ve uygulamalar doğrultusunda teklif hazırlanır, onay sonrasında sipariş süreci planlanır.",
        "sort_order": 0
      },
      {
        "id": 4,
        "image": mediaAsset("home/production-insights/bf70fab12133448abbfb3ff7e42df992.png"),
        "title": "ÜRETİM",
        "short_description": "Kontrollü ve planlı üretim",
        "detail_text": "Onaylanan ürünler, belirlenen teknik kriterler ve üretim planı çerçevesinde titizlikle üretilir.",
        "sort_order": 0
      },
      {
        "id": 5,
        "image": mediaAsset("home/production-insights/3e1d8ab58ac947a3a062711937679776.png"),
        "title": "KALİTE KONTROL",
        "short_description": "Her aşamada kalite takibi",
        "detail_text": "Ürünler üretim sürecinin farklı aşamalarında ölçü, işçilik, uygulama ve genel kalite standartlarına göre kontrol edilir.",
        "sort_order": 0
      },
      {
        "id": 6,
        "image": mediaAsset("home/production-insights/4531e4ebf9864d9cb7fd0da35ac43490.png"),
        "title": "SEVKİYAT & TESLİMAT",
        "short_description": "Zamanında sevkiyat, düzenli teslimat",
        "detail_text": "Üretimi tamamlanan ürünler uygun paketleme süreçlerinden geçirilir ve planlanan teslimat takvimine göre sevk edilir.",
        "sort_order": 0
      }
    ],
    "final_cta": {
      "title": "PROJENİZİ BİRLİKTE GELİŞTİRELİM",
      "description": "Personelinizle ilgili projelerinizi, bayi ya da müşterilerinize yöönelik promosyon tekstil projelerinizi ekibimizle birlikte oluşturalım.",
      "text": "PROJE BAŞLAT",
      "bottom_label": "",
      "link": "/contact"
    },
    "ticker_words": [],
    "brands_title": "",
    "brands_description": "",
    "brands": [],
    "activities_label": "",
    "activities_title": "",
    "activities_description": "",
    "activities": [],
    "about": {
      "label": "",
      "title": "",
      "subtitle": "",
      "short_description": "",
      "long_description": "",
      "background_image": null,
      "cta_button_text": "",
      "cta_path": "/corporate",
      "features": []
    },
    "operational": {
      "label": "",
      "title": "",
      "description": "",
      "image": null,
      "items": []
    },
    "video_title": "",
    "video_description": "",
    "video_file": null,
    "video_image": null,
    "news_section_title": "",
    "news_section_button_text": "",
    "news": [],
    "meta_title": "İş Giyimi ve Kurumsal İş Kıyafetleri | SUW",
    "meta_description": "SUW, kurumsal iş giyimi, personel kıyafetleri ve özel üretim tekstil çözümleri sunar. Üretimden teslimata profesyonel iş giyimi çözümlerini keşfedin."
  },
  "en": {
    "hero_title": "From within time, carrying the traces of the past into the future...",
    "hero_subtitle": "PROFESSIONAL WORKWEAR",
    "hero_description": "",
    "hero_image": null,
    "hero_image_mobile": null,
    "product_categories_eyebrow": "",
    "product_categories_title": "BUILT FOR EVERY JOB.",
    "product_categories_description": "",
    "work_essentials_eyebrow": "",
    "work_essentials_title": "EXPLORE WORKWEAR IN DETAIL.",
    "work_essentials_description": "",
    "work_essentials_cta_text": "EXPLORE PRODUCTS",
    "work_essentials_cta_link": "/products",
    "work_essentials_items": [
      {
        "id": 1,
        "image": mediaAsset("home/work-essentials/989fa04edeab47ac994e328ce0951588.jpg"),
        "alt": "",
        "link": "",
        "sort_order": 0
      },
      {
        "id": 3,
        "image": mediaAsset("home/work-essentials/e480b2c3ad4d4a20b24ee79dade03340.jpg"),
        "alt": "",
        "link": "",
        "sort_order": 0
      },
      {
        "id": 4,
        "image": mediaAsset("home/work-essentials/637952b050e146feaba602acbc2476e1.jpg"),
        "alt": "",
        "link": "",
        "sort_order": 0
      },
      {
        "id": 5,
        "image": mediaAsset("home/work-essentials/3782d4e1c42649119ef35faa810513e4.jpg"),
        "alt": "",
        "link": "",
        "sort_order": 0
      },
      {
        "id": 6,
        "image": mediaAsset("home/work-essentials/ef857f0618d043aa8fad3e736fd7d5b3.jpg"),
        "alt": "",
        "link": "",
        "sort_order": 0
      }
    ],
    "corporate_workwear_eyebrow": "",
    "corporate_workwear_title": "YOUR BRAND, YOUR IDENTITY",
    "corporate_workwear_description": "",
    "corporate_workwear_personnel_title": "STAFF UNIFORMS",
    "corporate_workwear_personnel_description": "Staff uniforms developed based on the work environment, frequency of use, and corporate identity. Styles, fabrics, colors, sizing, and application details are planned according to the teams' needs.",
    "corporate_workwear_personnel_image": mediaAsset("home/corporate-workwear/bde91c5b185e4afebc69a7cf3078693f.png"),
    "corporate_workwear_promo_title": "PROMOTIONAL TEXTILE PRODUCTS",
    "corporate_workwear_promo_description": "Textile products designed to enhance brand visibility, tailored for corporate use, events, and promotional projects with customizable logo, print, embroidery, color, and packaging options.",
    "corporate_workwear_promo_image": mediaAsset("home/corporate-workwear/c43f8c0213c44b53b0feafc06b37c70d.png"),
    "corporate_workwear_cta_text": "",
    "corporate_workwear_cta_link": "",
    "production_insights_eyebrow": "",
    "production_insights_title": "GREAT WORKWEAR STARTS WITH THE DETAILS.",
    "production_insights_description": "",
    "production_insight_items": [
      {
        "id": 1,
        "image": mediaAsset("home/production-insights/2bf7757888444580a890234277610530.png"),
        "title": "FABRIC SELECTION",
        "short_description": "Choosing the right fabric for the job",
        "detail_text": "We select the most suitable fabric options based on the intended use, seasonal conditions, and performance requirements of your project.",
        "sort_order": 0
      },
      {
        "id": 2,
        "image": mediaAsset("home/production-insights/c024b9f6d04440a0acf2d065c95c3c79.png"),
        "title": "DESIGN & DEVELOPMENT",
        "short_description": "Tailored design solutions for every need",
        "detail_text": "Styles, colors, accessories, logo applications, and product details are developed in line with your brand identity and intended use.",
        "sort_order": 0
      },
      {
        "id": 3,
        "image": mediaAsset("home/production-insights/906466cd5b194be5b6b6f39632b8e729.png"),
        "title": "QUOTATION & ORDER",
        "short_description": "Clear quotations, well-planned orders",
        "detail_text": "A quotation is prepared based on product details, quantities, and applications. Once approved, the order process is planned accordingly.",
        "sort_order": 0
      },
      {
        "id": 4,
        "image": mediaAsset("home/production-insights/bf70fab12133448abbfb3ff7e42df992.png"),
        "title": "PRODUCTION",
        "short_description": "Controlled and well-planned production",
        "detail_text": "Approved products are manufactured in line with the defined technical requirements and production schedule.",
        "sort_order": 0
      },
      {
        "id": 5,
        "image": mediaAsset("home/production-insights/3e1d8ab58ac947a3a062711937679776.png"),
        "title": "QUALITY CONTROL",
        "short_description": "Quality checks at every stage",
        "detail_text": "Products are inspected throughout the production process for measurements, workmanship, applications, and overall quality standards.",
        "sort_order": 0
      },
      {
        "id": 6,
        "image": mediaAsset("home/production-insights/4531e4ebf9864d9cb7fd0da35ac43490.png"),
        "title": "SHIPPING & DELIVERY",
        "short_description": "On-time shipping, reliable delivery",
        "detail_text": "Completed products are packed according to project requirements and shipped in line with the planned delivery schedule.",
        "sort_order": 0
      }
    ],
    "final_cta": {
      "title": "LET'S BUILD YOUR PROJECT",
      "description": "Let us collaborate with your team to develop projects involving your staff, as well as promotional textile projects aimed at your dealers or customers.",
      "text": "START A PROJECT",
      "bottom_label": "",
      "link": "/contact"
    },
    "ticker_words": [],
    "brands_title": "",
    "brands_description": "",
    "brands": [],
    "activities_label": "",
    "activities_title": "",
    "activities_description": "",
    "activities": [],
    "about": {
      "label": "",
      "title": "",
      "subtitle": "",
      "short_description": "",
      "long_description": "",
      "background_image": null,
      "cta_button_text": "",
      "cta_path": "/corporate",
      "features": []
    },
    "operational": {
      "label": "",
      "title": "",
      "description": "",
      "image": null,
      "items": []
    },
    "video_title": "",
    "video_description": "",
    "video_file": null,
    "video_image": null,
    "news_section_title": "",
    "news_section_button_text": "",
    "news": [],
    "meta_title": "Corporate Workwear & Staff Uniforms | SUW",
    "meta_description": "SUW provides corporate workwear, staff uniforms and custom textile solutions backed by textile manufacturing and product development experience since 1978."
  }
} as Record<SupportedLocale, Partial<HomePageResponse>>;

export const staticProductPageSnapshot = {
  "tr": {
    "eyebrow": "",
    "title": "ÜRÜNLERİMİZ",
    "description": "",
    "hero_image": mediaAsset("products/page/62474c228829465e82c132fff1ae894f.png"),
    "hero_image_mobile": null,
    "seo_title": "İş Kıyafetleri ve Profesyonel Workwear Ürünleri | SUW",
    "seo_description": "SUW iş kıyafetleri koleksiyonunda tişört, sweatshirt, yelek, mont, softshell, pantolon ve farklı sektörlere yönelik profesyonel workwear çözümlerini keşfedin."
  },
  "en": {
    "eyebrow": "",
    "title": "OUR PRODUCTS",
    "description": "",
    "hero_image": mediaAsset("products/page/62474c228829465e82c132fff1ae894f.png"),
    "hero_image_mobile": null,
    "seo_title": "Professional Workwear Products | SUW",
    "seo_description": "Explore SUW professional workwear including T-shirts, sweatshirts, vests, jackets, softshells, trousers and clothing solutions developed for different industries."
  }
};
export const staticProductGroupsSnapshot = {
  "tr": [
    {
      "id": 35,
      "name": "Spor Giyimi",
      "slug": "spor-giyimi",
      "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/spor-giyimi/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 1,
      "name": "Yazlık",
      "slug": "summer",
      "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/summer/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 2,
      "name": "Kışlık",
      "slug": "winter",
      "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/winter/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 3,
      "name": "Çanta",
      "slug": "bags",
      "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/bags/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 4,
      "name": "Aksesuar",
      "slug": "accessories",
      "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/accessories/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    }
  ],
  "en": [
    {
      "id": 35,
      "name": "Sportswear",
      "slug": "spor-giyimi",
      "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/spor-giyimi/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 1,
      "name": "Summer",
      "slug": "summer",
      "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/summer/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 2,
      "name": "Winter",
      "slug": "winter",
      "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/winter/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 3,
      "name": "Bags",
      "slug": "bags",
      "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/bags/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 4,
      "name": "Accessories",
      "slug": "accessories",
      "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/accessories/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    }
  ]
} as unknown as Record<SupportedLocale, Array<Record<string, unknown>>>;
export const staticHomeProductGroupsSnapshot = {
  "tr": [
    {
      "id": 35,
      "name": "Spor Giyimi",
      "slug": "spor-giyimi",
      "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/spor-giyimi/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 1,
      "name": "Yazlık",
      "slug": "summer",
      "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/summer/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 2,
      "name": "Kışlık",
      "slug": "winter",
      "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/winter/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 3,
      "name": "Çanta",
      "slug": "bags",
      "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/bags/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 4,
      "name": "Aksesuar",
      "slug": "accessories",
      "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/accessories/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    }
  ],
  "en": [
    {
      "id": 35,
      "name": "Sportswear",
      "slug": "spor-giyimi",
      "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/spor-giyimi/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 1,
      "name": "Summer",
      "slug": "summer",
      "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/summer/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 2,
      "name": "Winter",
      "slug": "winter",
      "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/winter/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 3,
      "name": "Bags",
      "slug": "bags",
      "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/bags/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 4,
      "name": "Accessories",
      "slug": "accessories",
      "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
      "image_mobile": null,
      "short_description": "",
      "url": "/products/accessories/",
      "hero_eyebrow": "",
      "hero_title": "",
      "hero_description": "",
      "hero_image": null,
      "hero_image_mobile": null,
      "seo_title": "",
      "seo_description": ""
    }
  ]
} as unknown as Record<SupportedLocale, Array<Record<string, unknown>>>;
export const staticProductCategoriesSnapshot = {
  "tr": [
    {
      "id": 1,
      "name": "T-Shirt",
      "slug": "t-shirt",
      "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "summer"
      ]
    },
    {
      "id": 2,
      "name": "Sweatshirt",
      "slug": "sweatshirt",
      "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "summer",
        "winter"
      ]
    },
    {
      "id": 3,
      "name": "Ceket",
      "slug": "ceket",
      "image": mediaAsset("products/categories/900f1774989c46428e709bcc6ce4742a.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "winter"
      ]
    },
    {
      "id": 4,
      "name": "Pantolon",
      "slug": "pantolon",
      "image": mediaAsset("products/categories/1415888192554d98a78f7d386c6fb7c8.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "summer",
        "winter"
      ]
    },
    {
      "id": 5,
      "name": "Tulum",
      "slug": "tulum",
      "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": []
    },
    {
      "id": 6,
      "name": "Önlük",
      "slug": "onluk",
      "image": mediaAsset("products/categories/1bdb1eaa2cec4aab9de4b5dc86a7bdd8.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": []
    },
    {
      "id": 7,
      "name": "Polar",
      "slug": "polar",
      "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "winter"
      ]
    },
    {
      "id": 8,
      "name": "Yelek",
      "slug": "yelek",
      "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "summer",
        "winter"
      ]
    },
    {
      "id": 9,
      "name": "Mont & Kaban",
      "slug": "mont-kaban",
      "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "winter"
      ]
    },
    {
      "id": 10,
      "name": "Softshell",
      "slug": "softshell",
      "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "winter"
      ]
    },
    {
      "id": 11,
      "name": "Yağmurluk",
      "slug": "yagmurluk",
      "image": mediaAsset("products/categories/afc1abfd76404735a98922ee753993f0.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "winter"
      ]
    },
    {
      "id": 12,
      "name": "Gömlek",
      "slug": "gomlek",
      "image": mediaAsset("products/categories/be38fa60c1d4460295df9b30ada22bec.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "summer"
      ]
    },
    {
      "id": 13,
      "name": "Şapka",
      "slug": "sapka",
      "image": null,
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "accessories"
      ]
    },
    {
      "id": 14,
      "name": "Bere",
      "slug": "bere",
      "image": mediaAsset("products/categories/eb9bcc8eaedc4ae1a401806111c30a56.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "accessories"
      ]
    },
    {
      "id": 15,
      "name": "Eldiven",
      "slug": "eldiven",
      "image": null,
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "accessories"
      ]
    },
    {
      "id": 16,
      "name": "Promosyon Çanta",
      "slug": "promosyon-canta",
      "image": mediaAsset("products/categories/c2f91340e02f4b3e81b1d3f0babfb530.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "bags"
      ]
    },
    {
      "id": 17,
      "name": "Takım Çantası",
      "slug": "takim-cantasi",
      "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "bags"
      ]
    },
    {
      "id": 18,
      "name": "Sportswear",
      "slug": "sportswear",
      "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "spor-giyimi"
      ]
    }
  ],
  "en": [
    {
      "id": 1,
      "name": "T-Shirt",
      "slug": "t-shirt",
      "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "summer"
      ]
    },
    {
      "id": 2,
      "name": "Sweatshirt",
      "slug": "sweatshirt",
      "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "summer",
        "winter"
      ]
    },
    {
      "id": 3,
      "name": "Jacket",
      "slug": "ceket",
      "image": mediaAsset("products/categories/900f1774989c46428e709bcc6ce4742a.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "winter"
      ]
    },
    {
      "id": 4,
      "name": "Trousers",
      "slug": "pantolon",
      "image": mediaAsset("products/categories/1415888192554d98a78f7d386c6fb7c8.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "summer",
        "winter"
      ]
    },
    {
      "id": 5,
      "name": "Coveralls",
      "slug": "tulum",
      "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": []
    },
    {
      "id": 6,
      "name": "Apron",
      "slug": "onluk",
      "image": mediaAsset("products/categories/1bdb1eaa2cec4aab9de4b5dc86a7bdd8.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": []
    },
    {
      "id": 7,
      "name": "Fleece",
      "slug": "polar",
      "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "winter"
      ]
    },
    {
      "id": 8,
      "name": "Vest",
      "slug": "yelek",
      "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "summer",
        "winter"
      ]
    },
    {
      "id": 9,
      "name": "Coats & Jackets",
      "slug": "mont-kaban",
      "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "winter"
      ]
    },
    {
      "id": 10,
      "name": "Softshell",
      "slug": "softshell",
      "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "winter"
      ]
    },
    {
      "id": 11,
      "name": "Rainwear",
      "slug": "yagmurluk",
      "image": mediaAsset("products/categories/afc1abfd76404735a98922ee753993f0.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "winter"
      ]
    },
    {
      "id": 12,
      "name": "Shirt",
      "slug": "gomlek",
      "image": mediaAsset("products/categories/be38fa60c1d4460295df9b30ada22bec.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "summer"
      ]
    },
    {
      "id": 13,
      "name": "Cap",
      "slug": "sapka",
      "image": null,
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "accessories"
      ]
    },
    {
      "id": 14,
      "name": "Beanie",
      "slug": "bere",
      "image": mediaAsset("products/categories/eb9bcc8eaedc4ae1a401806111c30a56.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "accessories"
      ]
    },
    {
      "id": 15,
      "name": "Gloves",
      "slug": "eldiven",
      "image": null,
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "accessories"
      ]
    },
    {
      "id": 16,
      "name": "Promotional Bag",
      "slug": "promosyon-canta",
      "image": mediaAsset("products/categories/c2f91340e02f4b3e81b1d3f0babfb530.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "bags"
      ]
    },
    {
      "id": 17,
      "name": "Tool Bag",
      "slug": "takim-cantasi",
      "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "bags"
      ]
    },
    {
      "id": 18,
      "name": "Sportswear",
      "slug": "sportswear",
      "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
      "description": "",
      "header_image": null,
      "seo_title": "",
      "seo_description": "",
      "groups": [
        "spor-giyimi"
      ]
    }
  ]
} as unknown as Record<SupportedLocale, Array<Record<string, unknown>>>;
export const staticProductsSnapshot = {
  "tr": [
    {
      "id": 1,
      "name": "CEK_01",
      "slug": "CEK_01",
      "product_code": "CEK_01",
      "category": {
        "id": 3,
        "name": "Ceket",
        "slug": "ceket",
        "image": mediaAsset("products/categories/900f1774989c46428e709bcc6ce4742a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardin\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/38b259b4c2aa4ea682809336cbbe017f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 2,
      "name": "CEK_02",
      "slug": "CEK_02",
      "product_code": "CEK_02",
      "category": {
        "id": 3,
        "name": "Ceket",
        "slug": "ceket",
        "image": mediaAsset("products/categories/900f1774989c46428e709bcc6ce4742a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Harman Karışım\r\n%65 Pamuk-%35 Poly",
      "description": "",
      "main_image": mediaAsset("products/items/040960b0b55b4c8193759f92c2e14a3d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 3,
      "name": "CEK_03",
      "slug": "CEK_03",
      "product_code": "CEK_03",
      "category": {
        "id": 3,
        "name": "Ceket",
        "slug": "ceket",
        "image": mediaAsset("products/categories/900f1774989c46428e709bcc6ce4742a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Harman Karışım\r\n%65 Pamuk-%35 Poly",
      "description": "",
      "main_image": mediaAsset("products/items/1f51af1e6d234a11975e203c1e21f9c6.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 4,
      "name": "BRE_01",
      "slug": "BRE_01",
      "product_code": "BRE_01",
      "category": {
        "id": 14,
        "name": "Bere",
        "slug": "bere",
        "image": mediaAsset("products/categories/eb9bcc8eaedc4ae1a401806111c30a56.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Akrilik\r\nBantlı model \r\nFitilli",
      "description": "",
      "main_image": mediaAsset("products/items/fa40c296a5e84ec18a647e8717953a24.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 5,
      "name": "BRE_02",
      "slug": "BRE_02",
      "product_code": "BRE_02",
      "category": {
        "id": 14,
        "name": "Bere",
        "slug": "bere",
        "image": mediaAsset("products/categories/eb9bcc8eaedc4ae1a401806111c30a56.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Akrilik\r\nBantlı model\r\nSade",
      "description": "",
      "main_image": mediaAsset("products/items/f91ee67e1564402399e8458c84e4d9d5.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 6,
      "name": "BRE_03",
      "slug": "Bre_03",
      "product_code": "BRE_03",
      "category": {
        "id": 14,
        "name": "Bere",
        "slug": "bere",
        "image": mediaAsset("products/categories/eb9bcc8eaedc4ae1a401806111c30a56.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Akrilik\r\nBantlı Model \r\nBantsız",
      "description": "",
      "main_image": mediaAsset("products/items/55d6787721fe42cd895f42115047300d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 7,
      "name": "BRE_04",
      "slug": "BRE_04",
      "product_code": "BRE_04",
      "category": {
        "id": 14,
        "name": "Bere",
        "slug": "bere",
        "image": mediaAsset("products/categories/eb9bcc8eaedc4ae1a401806111c30a56.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polar\r\nKayakçı model\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/55b1a08278484f6a913b65fb9647d2a8.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 8,
      "name": "BRE_05",
      "slug": "BRE_05",
      "product_code": "BRE_05",
      "category": {
        "id": 14,
        "name": "Bere",
        "slug": "bere",
        "image": mediaAsset("products/categories/eb9bcc8eaedc4ae1a401806111c30a56.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polar\r\nKulaklıklı model\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/f853a762c7d94d10a14f07ecf9c9f962.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 9,
      "name": "BRE_06",
      "slug": "BRE_06",
      "product_code": "BRE_06",
      "category": {
        "id": 14,
        "name": "Bere",
        "slug": "bere",
        "image": mediaAsset("products/categories/eb9bcc8eaedc4ae1a401806111c30a56.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polar\r\nBantsız model\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/cb7e0c7a8a484a51875d244f6e3acd96.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 10,
      "name": "ELD_01",
      "slug": "ELD_01",
      "product_code": "ELD_01",
      "category": {
        "id": 15,
        "name": "Eldiven",
        "slug": "eldiven",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Akrilik",
      "description": "",
      "main_image": mediaAsset("products/items/5349c48e534e4d84907061836bedc43d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 11,
      "name": "CNT_01",
      "slug": "CNT_01",
      "product_code": "CNT_01",
      "category": {
        "id": 16,
        "name": "Promosyon Çanta",
        "slug": "promosyon-canta",
        "image": mediaAsset("products/categories/c2f91340e02f4b3e81b1d3f0babfb530.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Rips\r\nHambez\r\nKulplu",
      "description": "",
      "main_image": mediaAsset("products/items/68c91afd202146bd9ea0242d068aea97.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 12,
      "name": "CNT_02",
      "slug": "CNT_02",
      "product_code": "CNT_02",
      "category": {
        "id": 16,
        "name": "Promosyon Çanta",
        "slug": "promosyon-canta",
        "image": mediaAsset("products/categories/c2f91340e02f4b3e81b1d3f0babfb530.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Rips\r\nHambez\r\nKulplu",
      "description": "",
      "main_image": mediaAsset("products/items/88c9f3fa486547c8baec6c1498928e78.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 13,
      "name": "CNT_03",
      "slug": "CNT_03",
      "product_code": "CNT_03",
      "category": {
        "id": 16,
        "name": "Promosyon Çanta",
        "slug": "promosyon-canta",
        "image": mediaAsset("products/categories/c2f91340e02f4b3e81b1d3f0babfb530.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Nonwoven\r\nElyaf\r\nKulplu",
      "description": "",
      "main_image": mediaAsset("products/items/01d5a908386c49a59ba793e45b216540.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 14,
      "name": "CNT_04",
      "slug": "CNT_04",
      "product_code": "CNT_04",
      "category": {
        "id": 16,
        "name": "Promosyon Çanta",
        "slug": "promosyon-canta",
        "image": mediaAsset("products/categories/c2f91340e02f4b3e81b1d3f0babfb530.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Nonwoven\r\nElyaf\r\nKulplu",
      "description": "",
      "main_image": mediaAsset("products/items/a829ada1b18643b9aa0fdba394a4d047.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 15,
      "name": "CNT_05",
      "slug": "CNT_05",
      "product_code": "CNT_05",
      "category": {
        "id": 16,
        "name": "Promosyon Çanta",
        "slug": "promosyon-canta",
        "image": mediaAsset("products/categories/c2f91340e02f4b3e81b1d3f0babfb530.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nBüzgülü\r\nSırt çanta",
      "description": "",
      "main_image": mediaAsset("products/items/cc981d2ca8784781a95f5e3b9c8150a6.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 16,
      "name": "CNT_06",
      "slug": "CNT_06",
      "product_code": "CNT_06",
      "category": {
        "id": 16,
        "name": "Promosyon Çanta",
        "slug": "promosyon-canta",
        "image": mediaAsset("products/categories/c2f91340e02f4b3e81b1d3f0babfb530.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nBüzgülü\r\nSpor çanta",
      "description": "",
      "main_image": mediaAsset("products/items/3432464c84e747e087ddc2a6873faab7.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 17,
      "name": "GML_01",
      "slug": "GML_01",
      "product_code": "GML_01",
      "category": {
        "id": 12,
        "name": "Gömlek",
        "slug": "gomlek",
        "image": mediaAsset("products/categories/be38fa60c1d4460295df9b30ada22bec.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Şamre\r\nUzun Kollu",
      "description": "",
      "main_image": mediaAsset("products/items/b0b0a15fce1c419891d0ca532a8ffe1f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 18,
      "name": "GML_02",
      "slug": "GML_02",
      "product_code": "GML_02",
      "category": {
        "id": 12,
        "name": "Gömlek",
        "slug": "gomlek",
        "image": mediaAsset("products/categories/be38fa60c1d4460295df9b30ada22bec.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Poplin\r\nUzun Kollu",
      "description": "",
      "main_image": mediaAsset("products/items/03162236867744e79879a2dd15e9e87c.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 19,
      "name": "GML_03",
      "slug": "GML_03",
      "product_code": "GML_03",
      "category": {
        "id": 12,
        "name": "Gömlek",
        "slug": "gomlek",
        "image": mediaAsset("products/categories/be38fa60c1d4460295df9b30ada22bec.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Oxford\r\nUzun Kollu",
      "description": "",
      "main_image": mediaAsset("products/items/e85cfeadc0af4b7694d29d14cf5056c2.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 20,
      "name": "GML_04",
      "slug": "GML_04",
      "product_code": "GML_04",
      "category": {
        "id": 12,
        "name": "Gömlek",
        "slug": "gomlek",
        "image": mediaAsset("products/categories/be38fa60c1d4460295df9b30ada22bec.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Uzun Kollu",
      "description": "",
      "main_image": mediaAsset("products/items/a2188ee58ae9490680b9b624d455122b.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 21,
      "name": "MON_01",
      "slug": "MON_01",
      "product_code": "MON_01",
      "category": {
        "id": 9,
        "name": "Mont & Kaban",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Bondit\r\nKaban",
      "description": "",
      "main_image": mediaAsset("products/items/b01892b7a0014a5ca58f868c2a2c7241.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 22,
      "name": "MON_02",
      "slug": "MON_02",
      "product_code": "MON_02",
      "category": {
        "id": 9,
        "name": "Mont & Kaban",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Bondit\r\nKapitoneli model",
      "description": "",
      "main_image": mediaAsset("products/items/522cc9734a1948919e9fa91d719cdd95.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 23,
      "name": "MON_03",
      "slug": "MON_03",
      "product_code": "MON_03",
      "category": {
        "id": 9,
        "name": "Mont & Kaban",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Bondit\r\nRibanalı model",
      "description": "",
      "main_image": mediaAsset("products/items/4fb783c9abce41c2a69175cbff6cab29.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 24,
      "name": "MON_04",
      "slug": "MON_04",
      "product_code": "MON_04",
      "category": {
        "id": 9,
        "name": "Mont & Kaban",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Bondit\r\nKaban",
      "description": "",
      "main_image": mediaAsset("products/items/28b6e28ceb4c417f8d4ad1fbc5757f7a.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 25,
      "name": "MON_05",
      "slug": "MON_05",
      "product_code": "MON_05",
      "category": {
        "id": 9,
        "name": "Mont & Kaban",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Ripsbond\r\nYüksek Görünümlü",
      "description": "",
      "main_image": mediaAsset("products/items/b92f9dab8e344db18811e074b46af252.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 26,
      "name": "MON_06",
      "slug": "MON_06",
      "product_code": "MON_06",
      "category": {
        "id": 9,
        "name": "Mont & Kaban",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "3 İplik\r\nOkul Kıyafeti",
      "description": "",
      "main_image": mediaAsset("products/items/6a97a29dd3b34d19bbe3a0ba69b1d798.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 27,
      "name": "ONL_1",
      "slug": "ONL_1",
      "product_code": "ONL_1",
      "category": {
        "id": 6,
        "name": "Önlük",
        "slug": "onluk",
        "image": mediaAsset("products/categories/1bdb1eaa2cec4aab9de4b5dc86a7bdd8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardin - İş Önlüğü\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/51608686ab134d21b8dc793a7be849c6.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 28,
      "name": "ONL_2",
      "slug": "ONL_2",
      "product_code": "ONL_2",
      "category": {
        "id": 6,
        "name": "Önlük",
        "slug": "onluk",
        "image": mediaAsset("products/categories/1bdb1eaa2cec4aab9de4b5dc86a7bdd8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardin - İş Önlüğü\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/1de62f4ba6084fd7987e5ac96d923729.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 29,
      "name": "ONL_3",
      "slug": "ONL_3",
      "product_code": "ONL_3",
      "category": {
        "id": 6,
        "name": "Önlük",
        "slug": "onluk",
        "image": mediaAsset("products/categories/1bdb1eaa2cec4aab9de4b5dc86a7bdd8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardin - Mutfak Önlüğü\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/0c497dfeb0c14870865a2a28ae8b7780.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 30,
      "name": "ONL_4",
      "slug": "ONL_4",
      "product_code": "ONL_4",
      "category": {
        "id": 6,
        "name": "Önlük",
        "slug": "onluk",
        "image": mediaAsset("products/categories/1bdb1eaa2cec4aab9de4b5dc86a7bdd8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardin - Mutfak Önlüğü\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/11d41d427a7e498eaf77dc14c0838329.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 31,
      "name": "ONL_5",
      "slug": "ONL_5",
      "product_code": "ONL_5",
      "category": {
        "id": 6,
        "name": "Önlük",
        "slug": "onluk",
        "image": mediaAsset("products/categories/1bdb1eaa2cec4aab9de4b5dc86a7bdd8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardin - Mutfak Önlüğü\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/e31342db998840ac853b0a317e3efcc1.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 32,
      "name": "PNT_01",
      "slug": "PNT_01",
      "product_code": "PNT_01",
      "category": {
        "id": 4,
        "name": "Pantolon",
        "slug": "pantolon",
        "image": mediaAsset("products/categories/1415888192554d98a78f7d386c6fb7c8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardin\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/4b1de9a047e14c329e6f56ec5864b3a5.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 33,
      "name": "PNT_02",
      "slug": "PNT_02",
      "product_code": "PNT_02",
      "category": {
        "id": 4,
        "name": "Pantolon",
        "slug": "pantolon",
        "image": mediaAsset("products/categories/1415888192554d98a78f7d386c6fb7c8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Harman Karışım\r\n%65 Pamuk %35 Polyester",
      "description": "",
      "main_image": mediaAsset("products/items/e8b0fbe616ed4276a295efe22d7d48f4.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 34,
      "name": "PNT_03",
      "slug": "PNT_03",
      "product_code": "PNT_03",
      "category": {
        "id": 4,
        "name": "Pantolon",
        "slug": "pantolon",
        "image": mediaAsset("products/categories/1415888192554d98a78f7d386c6fb7c8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Harman Karışım\r\n%65 Pamuk %35 Polyester",
      "description": "",
      "main_image": mediaAsset("products/items/17b2781828744b2ba1b948c60c87450b.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 35,
      "name": "PNT_04",
      "slug": "PNT_04",
      "product_code": "PNT_04",
      "category": {
        "id": 4,
        "name": "Pantolon",
        "slug": "pantolon",
        "image": mediaAsset("products/categories/1415888192554d98a78f7d386c6fb7c8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardin\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/29a6837e0f5a4d7694bc7ace6039060c.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 36,
      "name": "PNT_05",
      "slug": "PNT_05",
      "product_code": "PNT_05",
      "category": {
        "id": 4,
        "name": "Pantolon",
        "slug": "pantolon",
        "image": mediaAsset("products/categories/1415888192554d98a78f7d386c6fb7c8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Harman Karışım\r\n%65 Pamuk %35 Polyester",
      "description": "",
      "main_image": mediaAsset("products/items/7a73f841ecc2414698ad180656f6e018.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 37,
      "name": "PNT_06",
      "slug": "PNT_06",
      "product_code": "PNT_06",
      "category": {
        "id": 4,
        "name": "Pantolon",
        "slug": "pantolon",
        "image": mediaAsset("products/categories/1415888192554d98a78f7d386c6fb7c8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sotina\r\n%100 Polyester",
      "description": "",
      "main_image": mediaAsset("products/items/523878daf58c4151a36f0307dba99f86.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 38,
      "name": "POL_01",
      "slug": "POL_01",
      "product_code": "POL_01",
      "category": {
        "id": 7,
        "name": "Polar",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polar Mont\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/2eb16bea7452412a99b6cc789b78caf2.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 39,
      "name": "POL_02",
      "slug": "POL_02",
      "product_code": "POL_02",
      "category": {
        "id": 7,
        "name": "Polar",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polar Mont\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/35afb5b89c0f4f5fb8875819488d6c6e.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 40,
      "name": "POL_03",
      "slug": "POL_03",
      "product_code": "POL_03",
      "category": {
        "id": 7,
        "name": "Polar",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polar Mont\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/09f1bd1f3c3e4da2aac8fa747ae8117d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 41,
      "name": "POL_04",
      "slug": "POL_04",
      "product_code": "POL_04",
      "category": {
        "id": 7,
        "name": "Polar",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polar Sweat\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/a1144cc8e45a40dab32031124c7c2194.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 42,
      "name": "POL_05",
      "slug": "POL_05",
      "product_code": "POL_05",
      "category": {
        "id": 7,
        "name": "Polar",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polar Mont\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/80e01beeacb145b8a1fda3e2b9699364.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 43,
      "name": "POL_06",
      "slug": "POL_06",
      "product_code": "POL_06",
      "category": {
        "id": 7,
        "name": "Polar",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polar Mont\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/acad21dff55f44318d4dcab34728b6d4.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 44,
      "name": "POL_07",
      "slug": "POL_07",
      "product_code": "POL_07",
      "category": {
        "id": 7,
        "name": "Polar",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Fleece Sweatshirt\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/3f4d699a1271428fb126984244f5bffd.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 45,
      "name": "POL_08",
      "slug": "POL_08",
      "product_code": "POL_08",
      "category": {
        "id": 7,
        "name": "Polar",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polar Mont\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/4ed6940ac0b94f2486a99ab0436ad4af.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 46,
      "name": "CEK_04",
      "slug": "CEK_04",
      "product_code": "CEK_04",
      "category": {
        "id": 3,
        "name": "Ceket",
        "slug": "ceket",
        "image": mediaAsset("products/categories/900f1774989c46428e709bcc6ce4742a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardin\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/d7fe7a64863e4bda9cb761eec45be7fb.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 47,
      "name": "ELD_02",
      "slug": "ELD_02",
      "product_code": "ELD_02",
      "category": {
        "id": 15,
        "name": "Eldiven",
        "slug": "eldiven",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Akrilik\r\nKesik model",
      "description": "",
      "main_image": mediaAsset("products/items/0b6aadd4a2674ad3897730d8ab7d4a7e.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 48,
      "name": "ELD_03",
      "slug": "ELD_03",
      "product_code": "ELD_03",
      "category": {
        "id": 15,
        "name": "Eldiven",
        "slug": "eldiven",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polar\r\nSade model\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/d4abcb9946844cafa5f541cc44cc027e.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 49,
      "name": "ELD_04",
      "slug": "ELD_04",
      "product_code": "ELD_04",
      "category": {
        "id": 15,
        "name": "Eldiven",
        "slug": "eldiven",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polar\r\nKamuflaj model\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/562ea661b46443d1b64dd05594c9c5f5.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 50,
      "name": "MON_07",
      "slug": "MON_07",
      "product_code": "MON_07",
      "category": {
        "id": 9,
        "name": "Mont & Kaban",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Bondit\r\nReflektörlü",
      "description": "",
      "main_image": mediaAsset("products/items/170615e33b8540a9b86a310bd9101e63.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 51,
      "name": "MON_08",
      "slug": "MON_08",
      "product_code": "MON_08",
      "category": {
        "id": 9,
        "name": "Mont & Kaban",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sotina",
      "description": "",
      "main_image": mediaAsset("products/items/c62f67116bbe43e1b0fe245752412c26.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 52,
      "name": "SOF_01",
      "slug": "SOF_01",
      "product_code": "SOF_01",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nSade model",
      "description": "",
      "main_image": mediaAsset("products/items/79acfb884590425ea686d4844a345641.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 53,
      "name": "SOF_02",
      "slug": "SOF_02",
      "product_code": "SOF_02",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nNakışlı model",
      "description": "",
      "main_image": mediaAsset("products/items/a173a4294118479aba9c15da5b58dabd.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 54,
      "name": "SOF_03",
      "slug": "SOF_03",
      "product_code": "SOF_03",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nÖzel üretim",
      "description": "",
      "main_image": mediaAsset("products/items/30b15fd7b25645e2812d13e9e8b5c8bc.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 55,
      "name": "SOF_04",
      "slug": "SOF_04",
      "product_code": "SOF_04",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nNakışlı model",
      "description": "",
      "main_image": mediaAsset("products/items/4547e92d384140519ef4bbf52a3d2585.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 56,
      "name": "SOF_05",
      "slug": "SOF_05",
      "product_code": "SOF_05",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nYüksek Görünümlü",
      "description": "",
      "main_image": mediaAsset("products/items/4ff7264b5e7947cd96a37a30e3e2b919.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 57,
      "name": "SOF_06",
      "slug": "SOF_06",
      "product_code": "SOF_06",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nBiyeli model",
      "description": "",
      "main_image": mediaAsset("products/items/cd8772be002c47cea53f0353a064dbb9.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 58,
      "name": "SOF_07",
      "slug": "SOF_07",
      "product_code": "SOF_07",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nSade model",
      "description": "",
      "main_image": mediaAsset("products/items/5d9b3dfdc4a248dda21a5e49014a9ef1.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 59,
      "name": "SOF_08",
      "slug": "SOF_08",
      "product_code": "SOF_08",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nYüksek Görünümlü",
      "description": "",
      "main_image": mediaAsset("products/items/86d183f773b94839bd9c19aa16e281b6.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 60,
      "name": "SWE_01",
      "slug": "SWE_01",
      "product_code": "SWE_01",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sıfır Yaka - 2 İplik\r\nŞardonlu",
      "description": "",
      "main_image": mediaAsset("products/items/82a2b8e7c2e94337be0ee39424647d5f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 61,
      "name": "SWE_02",
      "slug": "SWE_02",
      "product_code": "SWE_02",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "V Yaka - Süprem\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/8869ec822a1e4b408288d45ad1233306.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 62,
      "name": "SWE_03",
      "slug": "SWE_03",
      "product_code": "SWE_03",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Yaka - Lacoste\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/628a3ce1973043a99c1426d0f4167ba4.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 63,
      "name": "SWE_04",
      "slug": "SWE_04",
      "product_code": "SWE_04",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Yaka - Lacoste\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/1d9645eb4bda41998910cc3a2fc5556a.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 64,
      "name": "SWE_05",
      "slug": "SWE_05",
      "product_code": "SWE_05",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Yaka - 3 İplik\r\nŞardonlu",
      "description": "",
      "main_image": mediaAsset("products/items/0074275792f64e48b866a5e683abf92e.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 65,
      "name": "SWE_06",
      "slug": "SWE_06",
      "product_code": "SWE_06",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Kapüşonlu - 3 İplik\r\nŞardonlu",
      "description": "",
      "main_image": mediaAsset("products/items/bc8e22463e014b30a34a13432e1e8af8.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 66,
      "name": "SWE_07",
      "slug": "SWE_07",
      "product_code": "SWE_07",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Kapüşonlu - 2 İplik\r\nŞardonlu",
      "description": "",
      "main_image": mediaAsset("products/items/de92595d86594251a64f952e7f09b7b1.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 67,
      "name": "SWE_08",
      "slug": "SWE_08",
      "product_code": "SWE_08",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sıfır Yaka - 2 İplik\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/00f41df103a74f1c837e94c5bfacfa72.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 68,
      "name": "SPK_01",
      "slug": "SPK_01",
      "product_code": "SPK_01",
      "category": {
        "id": 13,
        "name": "Şapka",
        "slug": "sapka",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardin\r\n%100 Pamuk\r\nBaskılı",
      "description": "",
      "main_image": mediaAsset("products/items/0ba556b21ac14cf09b07a78ba036cc1f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 69,
      "name": "SPK_02",
      "slug": "SPK_02",
      "product_code": "SPK_02",
      "category": {
        "id": 13,
        "name": "Şapka",
        "slug": "sapka",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardin\r\n%100 Pamuk\r\nNakışlı",
      "description": "",
      "main_image": mediaAsset("products/items/4abb1940eda045a0ad1efe61c8eb1754.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 70,
      "name": "SPK_03",
      "slug": "SPK_03",
      "product_code": "SPK_03",
      "category": {
        "id": 13,
        "name": "Şapka",
        "slug": "sapka",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardin\r\n%100 Pamuk\r\nBiyeli",
      "description": "",
      "main_image": mediaAsset("products/items/d6faf67e819f462eb57d9d6019f856bb.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 71,
      "name": "SPK_04",
      "slug": "SPK_04",
      "product_code": "SPK_04",
      "category": {
        "id": 13,
        "name": "Şapka",
        "slug": "sapka",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardin\r\n%100 Pamuk\r\nSade",
      "description": "",
      "main_image": mediaAsset("products/items/3a5a5921fd63427ab8ab808520d87182.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 72,
      "name": "SPK_05",
      "slug": "SPK_05",
      "product_code": "SPK_05",
      "category": {
        "id": 13,
        "name": "Şapka",
        "slug": "sapka",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardin\r\n%100 Pamuk\r\nSandviç",
      "description": "",
      "main_image": mediaAsset("products/items/0d37cfd2df62413086227c2d7a8c0ade.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 73,
      "name": "SPK_06",
      "slug": "SPK_06",
      "product_code": "SPK_06",
      "category": {
        "id": 13,
        "name": "Şapka",
        "slug": "sapka",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Aksesuar",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardin\r\n%100 Pamuk\r\nFileli",
      "description": "",
      "main_image": mediaAsset("products/items/b8eb47df82dd4dc0bb511e95ae8900f1.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 74,
      "name": "TSH_01",
      "slug": "TSH_01",
      "product_code": "TSH_01",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sıfır Yaka - Süprem\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/84593888026b452d90bba2890d0007c0.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 75,
      "name": "TSH_02",
      "slug": "TSH_02",
      "product_code": "TSH_02",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sıfır Yaka - Süprem\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/15de5bb280524ef28eb73a413e561e8a.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 76,
      "name": "TSH_03",
      "slug": "TSH_03",
      "product_code": "TSH_03",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sıfır Yaka - Süprem\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/759bbab865124720a915695a798291e4.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 77,
      "name": "TSH_04",
      "slug": "TSH_04",
      "product_code": "TSH_04",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sıfır Yaka - Süprem\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/2ff6d1834b474114a0016ded25a59f4b.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 78,
      "name": "TSH_05",
      "slug": "TSH_05",
      "product_code": "TSH_05",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sıfır Yaka - Süprem\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/4d7618ba41494341adf04feafdb02f91.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 79,
      "name": "TSH_06",
      "slug": "TSH_06",
      "product_code": "TSH_06",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sıfır Yaka - Süprem\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/548429d6cd7f407994c58bc3c7e77151.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 80,
      "name": "TSH_07",
      "slug": "TSH_07",
      "product_code": "TSH_07",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sıfır Yaka - Süprem\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/238e9adbe2484ba8b37fde0a55c1796e.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 81,
      "name": "TSH_08",
      "slug": "TSH_08",
      "product_code": "TSH_08",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sıfır Yaka - Süprem\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/149b160cf7184feab9e0079833620547.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 82,
      "name": "TSH_09",
      "slug": "TSH_09",
      "product_code": "TSH_09",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sıfır Yaka - Süprem\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/eb3d49e79ad74b2b9b1fb246448a04e4.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 83,
      "name": "TSH_10",
      "slug": "TSH_10",
      "product_code": "TSH_10",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "V Yaka - Süprem\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/052a9629d7924988875eb261a904bd95.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 84,
      "name": "TSH_11",
      "slug": "TSH_11",
      "product_code": "TSH_11",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "",
      "description": "",
      "main_image": mediaAsset("products/items/0f34b5fe082c45a6957804c148bee565.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 85,
      "name": "TSH_12",
      "slug": "TSH_12",
      "product_code": "TSH_12",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Yaka - Lacoste\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/997fbcf188804d25b639779ae011b6fd.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 86,
      "name": "TSH_13",
      "slug": "TSH_13",
      "product_code": "TSH_13",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Yaka - Lacoste\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/80be9810259e4783a6022386812a86f2.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 87,
      "name": "TSH_14",
      "slug": "TSH_14",
      "product_code": "TSH_14",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Yaka - Lacoste\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/6c6e4b9f5a2b4b1485b8f758f784cc2d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 88,
      "name": "TSH_15",
      "slug": "TSH_15",
      "product_code": "TSH_15",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Yaka - Lacoste\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/ca1a3f409e14483c950eaec22b9c7321.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 89,
      "name": "TSH_16",
      "slug": "TSH_16",
      "product_code": "TSH_16",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Yaka - Lacoste\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/dec080376f8e483cbf4bc70edcdc8af8.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 90,
      "name": "TLM_01",
      "slug": "TLM_01",
      "product_code": "TLM_01",
      "category": {
        "id": 5,
        "name": "Tulum",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Harman Karışım - Boy Tulum\r\n%65 Pamuk - %35 Poly",
      "description": "",
      "main_image": mediaAsset("products/items/c27dc9c10feb4d979d70fb9cbc267f37.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 91,
      "name": "TLM_02",
      "slug": "TLM_02",
      "product_code": "TLM_02",
      "category": {
        "id": 5,
        "name": "Tulum",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardin - Boy Tulum\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/5927a0ac88a64c1bb67a822b40b9a9c2.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 92,
      "name": "TLM_03",
      "slug": "TLM_03",
      "product_code": "TLM_03",
      "category": {
        "id": 5,
        "name": "Tulum",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardin - Boy Tulum\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/552974ff3d1e409ca6d473bdc2968a9d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 93,
      "name": "TLM_04",
      "slug": "TLM_04",
      "product_code": "TLM_04",
      "category": {
        "id": 5,
        "name": "Tulum",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Polyester - Boy Tulum\r\n%65 Poly - %35 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/12f06d30792e4bc1825690e6c053640e.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 94,
      "name": "TLM_05",
      "slug": "TLM_05",
      "product_code": "TLM_05",
      "category": {
        "id": 5,
        "name": "Tulum",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardin - Bahçıvan Tulum\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/4c1fb13894244aa6a7461aa3123efc50.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 95,
      "name": "TLM_06",
      "slug": "tlm_06",
      "product_code": "TLM_06",
      "category": {
        "id": 5,
        "name": "Tulum",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardin - Bahçıvan Tulum\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/ddfc8592aa5b48f5bb46fd61a08c919b.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 96,
      "name": "TLM_07",
      "slug": "tlm_07",
      "product_code": "TLM_07",
      "category": {
        "id": 5,
        "name": "Tulum",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardin - Bahçıvan Tulum\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/447de0ef20e94db49a313dbf855d62d8.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 97,
      "name": "TLM_08",
      "slug": "tlm_08",
      "product_code": "TLM_08",
      "category": {
        "id": 5,
        "name": "Tulum",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardin - Bahçıvan Tulum\r\n%100 Pamuk",
      "description": "",
      "main_image": mediaAsset("products/items/29ecaad8fc9749849ebe327987011e8f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 98,
      "name": "YAG_01",
      "slug": "yag_01",
      "product_code": "YAG_01",
      "category": {
        "id": 11,
        "name": "Yağmurluk",
        "slug": "yagmurluk",
        "image": mediaAsset("products/categories/afc1abfd76404735a98922ee753993f0.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "PVC Kaplama\r\nUzun model",
      "description": "",
      "main_image": mediaAsset("products/items/b739ba78967943169811fe45ba45c091.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 99,
      "name": "YAG_02",
      "slug": "yag_02",
      "product_code": "YAG_02",
      "category": {
        "id": 11,
        "name": "Yağmurluk",
        "slug": "yagmurluk",
        "image": mediaAsset("products/categories/afc1abfd76404735a98922ee753993f0.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta\r\nSade model",
      "description": "",
      "main_image": mediaAsset("products/items/e43ce44eaa52440eb89a6702e08c59ee.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 100,
      "name": "YAG_03",
      "slug": "yag_03",
      "product_code": "YAG_03",
      "category": {
        "id": 11,
        "name": "Yağmurluk",
        "slug": "yagmurluk",
        "image": mediaAsset("products/categories/afc1abfd76404735a98922ee753993f0.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sotina\r\nİçi fileli model",
      "description": "",
      "main_image": mediaAsset("products/items/9e9461894ecf4749a0acb5cdab9e823a.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 101,
      "name": "YAG_04",
      "slug": "yag_04",
      "product_code": "YAG_04",
      "category": {
        "id": 11,
        "name": "Yağmurluk",
        "slug": "yagmurluk",
        "image": mediaAsset("products/categories/afc1abfd76404735a98922ee753993f0.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Mikro\r\nUzun model",
      "description": "",
      "main_image": mediaAsset("products/items/a754da2f07ba41d69291ada94913428c.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 102,
      "name": "YEL_01",
      "slug": "yel_01",
      "product_code": "YEL_01",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/b1cbfec6de8a4fcdb51ec2e45ec80e31.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 103,
      "name": "YEL_02",
      "slug": "yel_02",
      "product_code": "YEL_02",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/e34e48d161514e2fbe3a03714d0210e6.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 104,
      "name": "YEL_03",
      "slug": "yel_03",
      "product_code": "YEL_03",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Mikro\r\nÇok dikişli",
      "description": "",
      "main_image": mediaAsset("products/items/a6fc5c49b07546bc85e12eb8760b0b26.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 105,
      "name": "YEL_04",
      "slug": "yel_04",
      "product_code": "YEL_04",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/13ce5e049fc64335854b1cabf4745c68.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 106,
      "name": "YEL_05",
      "slug": "yel_05",
      "product_code": "YEL_05",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafettta",
      "description": "",
      "main_image": mediaAsset("products/items/61515116626a4b59b3a4d20d13d52946.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 107,
      "name": "YEL_06",
      "slug": "yel_06",
      "product_code": "YEL_06",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Mikro\r\nÇok dikişli",
      "description": "",
      "main_image": mediaAsset("products/items/7d8a7c4f33e448c18e777b1a83712d29.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 108,
      "name": "YEL_07",
      "slug": "yel_07",
      "product_code": "YEL_07",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/77b1830162904cbeb883b6de7c70027b.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 109,
      "name": "YEL_08",
      "slug": "yel_08",
      "product_code": "YEL_08",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/e5b93ecb870a4cb5b725851f8ea2317d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 110,
      "name": "YEL_09",
      "slug": "yel_09",
      "product_code": "YEL_09",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/08ba05f0ca0c4c04a651dcd1df611591.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 111,
      "name": "YEL_10",
      "slug": "yel_10",
      "product_code": "YEL_10",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/28d68857136b408499a25bfd870788ca.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 112,
      "name": "YEL_11",
      "slug": "yel_11",
      "product_code": "YEL_11",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/e4a0c2dbe54e49f0989c00111e3b40b8.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 113,
      "name": "YEL_12",
      "slug": "yel_12",
      "product_code": "YEL_12",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Ripstap",
      "description": "",
      "main_image": mediaAsset("products/items/7e5281ad5bb34886a68b2a9119c34fdf.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 114,
      "name": "YEL_13",
      "slug": "yel_13",
      "product_code": "YEL_13",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardin\r\nAvcı model",
      "description": "",
      "main_image": mediaAsset("products/items/d440ec2e49154be6bf0768e9c76f2970.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 115,
      "name": "YEL_14",
      "slug": "yel_14",
      "product_code": "YEL_14",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardin\r\nÇok cepli",
      "description": "",
      "main_image": mediaAsset("products/items/16e4f3ddcbf34909837765e62844ec98.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 116,
      "name": "YEL_15",
      "slug": "yel_15",
      "product_code": "YEL_15",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Raşel - Reflektörlü\r\nMühendis model",
      "description": "",
      "main_image": mediaAsset("products/items/3237678bf09145819ae3e55085a5b319.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 117,
      "name": "YEL_16",
      "slug": "yel_16",
      "product_code": "YEL_16",
      "category": {
        "id": 8,
        "name": "Yelek",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Yazlık",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Kışlık",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Raşel - Reflektörlü\r\nSade model",
      "description": "",
      "main_image": mediaAsset("products/items/9405ed66e0ad45b8adef6f010a116d66.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 118,
      "name": "TKM_01",
      "slug": "tkm_01",
      "product_code": "TKM_01",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nİnşaat Bel Çantası",
      "description": "",
      "main_image": mediaAsset("products/items/dfae9032b8ab4f2588c16ea3229a55ec.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 119,
      "name": "FUT_01",
      "slug": "fut_01",
      "product_code": "FUT_01",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nDüz Desen\r\nFutbol",
      "description": "",
      "main_image": mediaAsset("products/items/1d35d75f70c44e60ab28e6fafe72052c.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 120,
      "name": "FUT_02",
      "slug": "fut_02",
      "product_code": "FUT_02",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nDüz Desen\r\nFutbol",
      "description": "",
      "main_image": mediaAsset("products/items/349171397195479ebebb641d6f52a407.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 121,
      "name": "FUT_03",
      "slug": "fut_03",
      "product_code": "FUT_03",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nYağmur Desen\r\nFutbol",
      "description": "",
      "main_image": mediaAsset("products/items/6d8eaa499aee4beeba8086ada9797da0.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 122,
      "name": "FUT_04",
      "slug": "fut_04",
      "product_code": "FUT_04",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nYağmur Desen\r\nFutbol",
      "description": "",
      "main_image": mediaAsset("products/items/47a1e699bf2a418fb35adf897b5dac52.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 123,
      "name": "FUT_05",
      "slug": "fut_05",
      "product_code": "FUT_05",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPetek Desen\r\nFutbol",
      "description": "",
      "main_image": mediaAsset("products/items/77afccb2a29e448e9c785a26bbc1e2c7.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 124,
      "name": "FUT_06",
      "slug": "fut_06",
      "product_code": "FUT_06",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPetek Desen\r\nFutbol",
      "description": "",
      "main_image": mediaAsset("products/items/f3e68a94be394ccbb6d69d9f3f8edd82.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 125,
      "name": "FUT_07",
      "slug": "fut_07",
      "product_code": "FUT_07",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nDüz Desen\r\nFutbol",
      "description": "",
      "main_image": mediaAsset("products/items/654ae4fc4f5346faa8840ce7c7468854.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 126,
      "name": "FUT_08",
      "slug": "fut_08",
      "product_code": "FUT_08",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nYağmur Desen\r\nFutbol",
      "description": "",
      "main_image": mediaAsset("products/items/4b2d6b9fb2f74b6db3e507e44b95bedd.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 127,
      "name": "BAS_01",
      "slug": "bas_01",
      "product_code": "BAS_01",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nDüz Desen\r\nBasketbol",
      "description": "",
      "main_image": mediaAsset("products/items/4d63aa83c000463f995493049bbf46ba.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 128,
      "name": "BAS_02",
      "slug": "bas_02",
      "product_code": "BAS_02",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nYağmur Desen\r\nBasketbol",
      "description": "",
      "main_image": mediaAsset("products/items/fc90e8ad0dbd4485bbba696c290b4d37.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 129,
      "name": "BAS_03",
      "slug": "bas_03",
      "product_code": "BAS_03",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPetek Desen\r\nBasketbol",
      "description": "",
      "main_image": mediaAsset("products/items/07b66f5e8e5d4f82ac2d43608b2bb946.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 130,
      "name": "BAS_04",
      "slug": "bas_04",
      "product_code": "BAS_04",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nYağmur Desen\r\nBasketbol",
      "description": "",
      "main_image": mediaAsset("products/items/b7595baf63b141ac96d4c1410ebfffb9.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 131,
      "name": "KOS_01",
      "slug": "kos_01",
      "product_code": "KOS_01",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nDüz Desen\r\nKoşu",
      "description": "",
      "main_image": mediaAsset("products/items/54aae485bd574670b01a8be92915fe3f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 132,
      "name": "KOS_02",
      "slug": "kos_02",
      "product_code": "KOS_02",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nYağmur Desen\r\nKoşu",
      "description": "",
      "main_image": mediaAsset("products/items/16b53a34e2e24afcbc5a33de6a6470a4.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 133,
      "name": "KOS_03",
      "slug": "kos_03",
      "product_code": "KOS_03",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPetek Desen\r\nKoşu",
      "description": "",
      "main_image": mediaAsset("products/items/9027dfefe531416db7e1ce750823df6f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 134,
      "name": "KOS_04",
      "slug": "kos_04",
      "product_code": "KOS_04",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nYağmur Desen\r\nKoşu",
      "description": "",
      "main_image": mediaAsset("products/items/d65cc345470948b691251a09343c7001.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 135,
      "name": "ESF_01",
      "slug": "esf_01",
      "product_code": "ESF_01",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nLikralı\r\nEşofman",
      "description": "",
      "main_image": mediaAsset("products/items/7d95435cf7124117b1878d4e9c6313a5.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 136,
      "name": "ESF_02",
      "slug": "esf_02",
      "product_code": "ESF_02",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nLikralı\r\nEşofman",
      "description": "",
      "main_image": mediaAsset("products/items/ee7f4489cbe34d229baa2f20ab2b1a27.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 137,
      "name": "ESF_03",
      "slug": "esf_03",
      "product_code": "ESF_03",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nLikralı\r\nEşofman",
      "description": "",
      "main_image": mediaAsset("products/items/311696e6fa134986a9439b8447f26582.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 138,
      "name": "ESF_04",
      "slug": "esf_04",
      "product_code": "ESF_04",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nLikralı\r\nEşofman",
      "description": "",
      "main_image": mediaAsset("products/items/f95485ab47554f598fa3faa8a6d6921f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 139,
      "name": "PRE_01",
      "slug": "pre_01",
      "product_code": "PRE_01",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nDüz Desen\r\nSıfır Yaka",
      "description": "",
      "main_image": mediaAsset("products/items/d4ae972dcd324d788f59c7b433664c8d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 140,
      "name": "PRE_02",
      "slug": "pre_02",
      "product_code": "PRE_02",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nYağmur Desen\r\nSıfır Yaka",
      "description": "",
      "main_image": mediaAsset("products/items/4ccdad1085aa4236a178a2fd466ed212.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 141,
      "name": "PRE_03",
      "slug": "pre_03",
      "product_code": "PRE_03",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPetek Desen\r\nPolo Yaka",
      "description": "",
      "main_image": mediaAsset("products/items/cdbd67deb8d748bc8fda9be2f4876df5.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 142,
      "name": "PRE_04",
      "slug": "pre_04",
      "product_code": "PRE_04",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nDüz Desen\r\nPolo Yaka",
      "description": "",
      "main_image": mediaAsset("products/items/214a2b71e1da4f3ab1b93773fb983e82.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 143,
      "name": "PRO_01",
      "slug": "pro_01",
      "product_code": "PRO_01",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nYağmur Desen\r\nSıfır Yaka",
      "description": "",
      "main_image": mediaAsset("products/items/da5a131deb7446ec9a5051ec93e7e25a.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 144,
      "name": "PRO_02",
      "slug": "pro_02",
      "product_code": "PRO_02",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPetek Desen\r\nSıfır Yaka",
      "description": "",
      "main_image": mediaAsset("products/items/bb937074e1f94f7ea48f9475c3735668.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 145,
      "name": "PRO_03",
      "slug": "pro_03",
      "product_code": "PRO_03",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nDüz Desen\r\nSıfır Yaka",
      "description": "",
      "main_image": mediaAsset("products/items/a5d191ec3b3d41b1a655d5f828d20b23.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 146,
      "name": "PRO_04",
      "slug": "pro_04",
      "product_code": "PRO_04",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nYağmur Desen\r\nSıfır Yaka",
      "description": "",
      "main_image": mediaAsset("products/items/bf5c65ce394849ef8645b1d0d9463c6d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 147,
      "name": "PRO_05",
      "slug": "pro_05",
      "product_code": "PRO_05",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPetek Desen\r\nSıfır Yaka",
      "description": "",
      "main_image": mediaAsset("products/items/4ddd0dab437a4810b05c7ab14c8c4e26.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 148,
      "name": "PRO_06",
      "slug": "pro_06",
      "product_code": "PRO_06",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nDüz Desen\r\nPolo Yaka",
      "description": "",
      "main_image": mediaAsset("products/items/44152f7d25f5419b8e0dfed43ad34f4b.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 149,
      "name": "PRO_07",
      "slug": "pro_07",
      "product_code": "PRO_07",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Spor Giyimi",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nYağmur Desen\r\nPolo Yaka",
      "description": "",
      "main_image": mediaAsset("products/items/0f33582c5ba64278915dfc8bb83bf188.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 150,
      "name": "TKM_02",
      "slug": "tkm_02",
      "product_code": "TKM_02",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nİnşaat\r\nBel çantası",
      "description": "",
      "main_image": mediaAsset("products/items/10fd34b650b54801a882b46e026a599a.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 151,
      "name": "TKM_03",
      "slug": "tkm_03",
      "product_code": "TKM_03",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nİnşaat\r\nOmuz çantası",
      "description": "",
      "main_image": mediaAsset("products/items/2a6feaa8afef4e4984689e08bbddabef.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 152,
      "name": "TKM_04",
      "slug": "tkm_04",
      "product_code": "TKM_04",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nİnşaat\r\nBel çantası",
      "description": "",
      "main_image": mediaAsset("products/items/2f2cc08d8ae94a8ebff742ba08845a7c.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 153,
      "name": "TKM_05",
      "slug": "tkm_05",
      "product_code": "TKM_05",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nİnşaat\r\nBel çantası",
      "description": "",
      "main_image": mediaAsset("products/items/8cfdfdd7f43d4c1fa61366e4b7bc1182.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 154,
      "name": "TKM_06",
      "slug": "tkm_06",
      "product_code": "TKM_06",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nİnşaat\r\nBel çantası",
      "description": "",
      "main_image": mediaAsset("products/items/c7e357e8cee540db9799c2c40f9fe9ed.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 155,
      "name": "TKM_07",
      "slug": "tkm_07",
      "product_code": "TKM_07",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nİnşaat\r\nBel çantası",
      "description": "",
      "main_image": mediaAsset("products/items/db24ad1baed943f3b4603c370e32e511.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 156,
      "name": "TKM_08",
      "slug": "tkm_08",
      "product_code": "TKM_08",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nİnşaat\r\nBel çantası",
      "description": "",
      "main_image": mediaAsset("products/items/f46cdff05b6040df89268a970f4cc2f2.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 157,
      "name": "TKM_09",
      "slug": "tkm_09",
      "product_code": "TKM_09",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nMühendis\r\nBel çantası",
      "description": "",
      "main_image": mediaAsset("products/items/1de59e0ab11247ebabe5b809d60f61ed.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 158,
      "name": "TKM_10",
      "slug": "tkm_10",
      "product_code": "TKM_10",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nMühendis\r\nBel çantası",
      "description": "",
      "main_image": mediaAsset("products/items/5827ae49954f42308866a93b647b4f80.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 159,
      "name": "TKM_11",
      "slug": "tkm_11",
      "product_code": "TKM_11",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nMühendis\r\nSırt çantası",
      "description": "",
      "main_image": mediaAsset("products/items/b73282440506421485e260daf76964df.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 160,
      "name": "TKM_12",
      "slug": "tkm_12",
      "product_code": "TKM_12",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nMühendis\r\nSırt çantası",
      "description": "",
      "main_image": mediaAsset("products/items/83b16596398040fe936dcc810d4a178c.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 161,
      "name": "TKM_13",
      "slug": "tkm_13",
      "product_code": "TKM_13",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nMühendis\r\nSırt çantası",
      "description": "",
      "main_image": mediaAsset("products/items/f7009f30662d4a8c97c4b8c65197237a.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 162,
      "name": "TKM_14",
      "slug": "tkm_14",
      "product_code": "TKM_14",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nMühendis\r\nSırt çantası",
      "description": "",
      "main_image": mediaAsset("products/items/76e654bba64545f2b5a50d219e5aea9b.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 163,
      "name": "TKM_15",
      "slug": "tkm_15",
      "product_code": "TKM_15",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nHafif Sanayi\r\nOmuz çantası",
      "description": "",
      "main_image": mediaAsset("products/items/1529062300c646b0b653486cccf8a56e.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 164,
      "name": "TKM_16",
      "slug": "tkm_16",
      "product_code": "TKM_16",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nHafif Sanayi\r\nOmuz çantası",
      "description": "",
      "main_image": mediaAsset("products/items/27a896fa4e094fb0b0f8e910e0d425da.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 165,
      "name": "TKM_17",
      "slug": "tkm_17",
      "product_code": "TKM_17",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nHafif Sanayi\r\nOmuz çantası",
      "description": "",
      "main_image": mediaAsset("products/items/e2362f8801e446f895c0f07293e5a82c.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 166,
      "name": "TKM_18",
      "slug": "tkm_18",
      "product_code": "TKM_18",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nHafif Sanayi\r\nOmuz çantası",
      "description": "",
      "main_image": mediaAsset("products/items/815799cdb076405a8d0c289925d3f8bd.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 167,
      "name": "TKM_19",
      "slug": "tkm_19",
      "product_code": "TKM_19",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nHafif Sanayi\r\nOmuz çantası",
      "description": "",
      "main_image": mediaAsset("products/items/0670298b117943fa9b6b7b19d1904a96.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 168,
      "name": "TKM_20",
      "slug": "tkm_20",
      "product_code": "TKM_20",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nEndüstriyel\r\nOmuz çantası",
      "description": "",
      "main_image": mediaAsset("products/items/55b1b646adf64f79afefc67ee2670c52.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 169,
      "name": "TKM_21",
      "slug": "tkm_21",
      "product_code": "TKM_21",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nEndüstriyel\r\nOmuz çantası",
      "description": "",
      "main_image": mediaAsset("products/items/2687bc198331402fb013a91b686f0120.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 170,
      "name": "TKM_22",
      "slug": "tkm_22",
      "product_code": "TKM_22",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nEndüstriyel\r\nOmuz çantası",
      "description": "",
      "main_image": mediaAsset("products/items/766d9e3dc5c54bef8e588779726fca2d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 171,
      "name": "TKM_23",
      "slug": "tkm_23",
      "product_code": "TKM_23",
      "category": {
        "id": 17,
        "name": "Takım Çantası",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Çanta",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nEndüstriyel\r\nOmuz çantası",
      "description": "",
      "main_image": mediaAsset("products/items/35f5ca0d8f6b4619ab7038375e7bff5f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    }
  ],
  "en": [
    {
      "id": 1,
      "name": "CEK_01",
      "slug": "CEK_01",
      "product_code": "CEK_01",
      "category": {
        "id": 3,
        "name": "Jacket",
        "slug": "ceket",
        "image": mediaAsset("products/categories/900f1774989c46428e709bcc6ce4742a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardin\r\n%100 cotton",
      "description": "",
      "main_image": mediaAsset("products/items/38b259b4c2aa4ea682809336cbbe017f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 2,
      "name": "CEK_02",
      "slug": "CEK_02",
      "product_code": "CEK_02",
      "category": {
        "id": 3,
        "name": "Jacket",
        "slug": "ceket",
        "image": mediaAsset("products/categories/900f1774989c46428e709bcc6ce4742a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Blend\r\n65% Cotton-35% Polyester",
      "description": "",
      "main_image": mediaAsset("products/items/040960b0b55b4c8193759f92c2e14a3d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 3,
      "name": "CEK_03",
      "slug": "CEK_03",
      "product_code": "CEK_03",
      "category": {
        "id": 3,
        "name": "Jacket",
        "slug": "ceket",
        "image": mediaAsset("products/categories/900f1774989c46428e709bcc6ce4742a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Blend\r\n65% Cotton, 35% Polyester",
      "description": "",
      "main_image": mediaAsset("products/items/1f51af1e6d234a11975e203c1e21f9c6.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 4,
      "name": "BRE_01",
      "slug": "BRE_01",
      "product_code": "BRE_01",
      "category": {
        "id": 14,
        "name": "Beanie",
        "slug": "bere",
        "image": mediaAsset("products/categories/eb9bcc8eaedc4ae1a401806111c30a56.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Acrylic\r\nCuffed Model\r\nRibbed",
      "description": "",
      "main_image": mediaAsset("products/items/fa40c296a5e84ec18a647e8717953a24.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 5,
      "name": "BRE_02",
      "slug": "BRE_02",
      "product_code": "BRE_02",
      "category": {
        "id": 14,
        "name": "Beanie",
        "slug": "bere",
        "image": mediaAsset("products/categories/eb9bcc8eaedc4ae1a401806111c30a56.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Acrylic\r\nCuffed Model\r\nPlain",
      "description": "",
      "main_image": mediaAsset("products/items/f91ee67e1564402399e8458c84e4d9d5.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 6,
      "name": "BRE_03",
      "slug": "Bre_03",
      "product_code": "BRE_03",
      "category": {
        "id": 14,
        "name": "Beanie",
        "slug": "bere",
        "image": mediaAsset("products/categories/eb9bcc8eaedc4ae1a401806111c30a56.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Acrylic\r\nCuffed Model\r\nUncuffed",
      "description": "",
      "main_image": mediaAsset("products/items/55d6787721fe42cd895f42115047300d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 7,
      "name": "BRE_04",
      "slug": "BRE_04",
      "product_code": "BRE_04",
      "category": {
        "id": 14,
        "name": "Beanie",
        "slug": "bere",
        "image": mediaAsset("products/categories/eb9bcc8eaedc4ae1a401806111c30a56.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Fleece\r\nSki Style\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/55b1a08278484f6a913b65fb9647d2a8.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 8,
      "name": "BRE_05",
      "slug": "BRE_05",
      "product_code": "BRE_05",
      "category": {
        "id": 14,
        "name": "Beanie",
        "slug": "bere",
        "image": mediaAsset("products/categories/eb9bcc8eaedc4ae1a401806111c30a56.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Fleece\r\nEarflap Style\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/f853a762c7d94d10a14f07ecf9c9f962.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 9,
      "name": "BRE_06",
      "slug": "BRE_06",
      "product_code": "BRE_06",
      "category": {
        "id": 14,
        "name": "Beanie",
        "slug": "bere",
        "image": mediaAsset("products/categories/eb9bcc8eaedc4ae1a401806111c30a56.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Fleece\r\nUncuffed Style\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/cb7e0c7a8a484a51875d244f6e3acd96.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 10,
      "name": "ELD_01",
      "slug": "ELD_01",
      "product_code": "ELD_01",
      "category": {
        "id": 15,
        "name": "Gloves",
        "slug": "eldiven",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Acrylic",
      "description": "",
      "main_image": mediaAsset("products/items/5349c48e534e4d84907061836bedc43d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 11,
      "name": "CNT_01",
      "slug": "CNT_01",
      "product_code": "CNT_01",
      "category": {
        "id": 16,
        "name": "Promotional Bag",
        "slug": "promosyon-canta",
        "image": mediaAsset("products/categories/c2f91340e02f4b3e81b1d3f0babfb530.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Grosgrain\r\nCotton Canvas\r\nWith Handles",
      "description": "",
      "main_image": mediaAsset("products/items/68c91afd202146bd9ea0242d068aea97.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 12,
      "name": "CNT_02",
      "slug": "CNT_02",
      "product_code": "CNT_02",
      "category": {
        "id": 16,
        "name": "Promotional Bag",
        "slug": "promosyon-canta",
        "image": mediaAsset("products/categories/c2f91340e02f4b3e81b1d3f0babfb530.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Grosgrain\r\nCotton Canvas\r\nWith Handles",
      "description": "",
      "main_image": mediaAsset("products/items/88c9f3fa486547c8baec6c1498928e78.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 13,
      "name": "CNT_03",
      "slug": "CNT_03",
      "product_code": "CNT_03",
      "category": {
        "id": 16,
        "name": "Promotional Bag",
        "slug": "promosyon-canta",
        "image": mediaAsset("products/categories/c2f91340e02f4b3e81b1d3f0babfb530.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "",
      "description": "Nonwoven\r\nFiber\r\nWith Handles",
      "main_image": mediaAsset("products/items/01d5a908386c49a59ba793e45b216540.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 14,
      "name": "CNT_04",
      "slug": "CNT_04",
      "product_code": "CNT_04",
      "category": {
        "id": 16,
        "name": "Promotional Bag",
        "slug": "promosyon-canta",
        "image": mediaAsset("products/categories/c2f91340e02f4b3e81b1d3f0babfb530.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Nonwoven\r\nFiber\r\nWith Handles",
      "description": "",
      "main_image": mediaAsset("products/items/a829ada1b18643b9aa0fdba394a4d047.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 15,
      "name": "CNT_05",
      "slug": "CNT_05",
      "product_code": "CNT_05",
      "category": {
        "id": 16,
        "name": "Promotional Bag",
        "slug": "promosyon-canta",
        "image": mediaAsset("products/categories/c2f91340e02f4b3e81b1d3f0babfb530.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denye\r\nBüzgülü\r\nSırt çanta",
      "description": "",
      "main_image": mediaAsset("products/items/cc981d2ca8784781a95f5e3b9c8150a6.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 16,
      "name": "CNT_06",
      "slug": "CNT_06",
      "product_code": "CNT_06",
      "category": {
        "id": 16,
        "name": "Promotional Bag",
        "slug": "promosyon-canta",
        "image": mediaAsset("products/categories/c2f91340e02f4b3e81b1d3f0babfb530.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nDrawstring\r\nSports Bag",
      "description": "",
      "main_image": mediaAsset("products/items/3432464c84e747e087ddc2a6873faab7.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 17,
      "name": "GML_01",
      "slug": "GML_01",
      "product_code": "GML_01",
      "category": {
        "id": 12,
        "name": "Shirt",
        "slug": "gomlek",
        "image": mediaAsset("products/categories/be38fa60c1d4460295df9b30ada22bec.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "",
      "description": "Chambray\r\nLong Sleeve",
      "main_image": mediaAsset("products/items/b0b0a15fce1c419891d0ca532a8ffe1f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 18,
      "name": "GML_02",
      "slug": "GML_02",
      "product_code": "GML_02",
      "category": {
        "id": 12,
        "name": "Shirt",
        "slug": "gomlek",
        "image": mediaAsset("products/categories/be38fa60c1d4460295df9b30ada22bec.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Poplin\r\nLong Sleeve",
      "description": "",
      "main_image": mediaAsset("products/items/03162236867744e79879a2dd15e9e87c.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 19,
      "name": "GML_03",
      "slug": "GML_03",
      "product_code": "GML_03",
      "category": {
        "id": 12,
        "name": "Shirt",
        "slug": "gomlek",
        "image": mediaAsset("products/categories/be38fa60c1d4460295df9b30ada22bec.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Oxford\r\nLong Sleeve",
      "description": "",
      "main_image": mediaAsset("products/items/e85cfeadc0af4b7694d29d14cf5056c2.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 20,
      "name": "GML_04",
      "slug": "GML_04",
      "product_code": "GML_04",
      "category": {
        "id": 12,
        "name": "Shirt",
        "slug": "gomlek",
        "image": mediaAsset("products/categories/be38fa60c1d4460295df9b30ada22bec.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Long Sleeve",
      "description": "",
      "main_image": mediaAsset("products/items/a2188ee58ae9490680b9b624d455122b.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 21,
      "name": "MON_01",
      "slug": "MON_01",
      "product_code": "MON_01",
      "category": {
        "id": 9,
        "name": "Coats & Jackets",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Bonded\r\nCoat",
      "description": "",
      "main_image": mediaAsset("products/items/b01892b7a0014a5ca58f868c2a2c7241.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 22,
      "name": "MON_02",
      "slug": "MON_02",
      "product_code": "MON_02",
      "category": {
        "id": 9,
        "name": "Coats & Jackets",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Bonded\r\nQuilted Style",
      "description": "",
      "main_image": mediaAsset("products/items/522cc9734a1948919e9fa91d719cdd95.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 23,
      "name": "MON_03",
      "slug": "MON_03",
      "product_code": "MON_03",
      "category": {
        "id": 9,
        "name": "Coats & Jackets",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Bonded\r\nRibbed Style",
      "description": "",
      "main_image": mediaAsset("products/items/4fb783c9abce41c2a69175cbff6cab29.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 24,
      "name": "MON_04",
      "slug": "MON_04",
      "product_code": "MON_04",
      "category": {
        "id": 9,
        "name": "Coats & Jackets",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Bonded\r\nCoat",
      "description": "",
      "main_image": mediaAsset("products/items/28b6e28ceb4c417f8d4ad1fbc5757f7a.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 25,
      "name": "MON_05",
      "slug": "MON_05",
      "product_code": "MON_05",
      "category": {
        "id": 9,
        "name": "Coats & Jackets",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Ripsbond\r\nHigh-Visibility Style",
      "description": "",
      "main_image": mediaAsset("products/items/b92f9dab8e344db18811e074b46af252.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 26,
      "name": "MON_06",
      "slug": "MON_06",
      "product_code": "MON_06",
      "category": {
        "id": 9,
        "name": "Coats & Jackets",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "3-Thread\r\nSchool Uniform",
      "description": "",
      "main_image": mediaAsset("products/items/6a97a29dd3b34d19bbe3a0ba69b1d798.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 27,
      "name": "ONL_1",
      "slug": "ONL_1",
      "product_code": "ONL_1",
      "category": {
        "id": 6,
        "name": "Apron",
        "slug": "onluk",
        "image": mediaAsset("products/categories/1bdb1eaa2cec4aab9de4b5dc86a7bdd8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardine Work Coat\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/51608686ab134d21b8dc793a7be849c6.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 28,
      "name": "ONL_2",
      "slug": "ONL_2",
      "product_code": "ONL_2",
      "category": {
        "id": 6,
        "name": "Apron",
        "slug": "onluk",
        "image": mediaAsset("products/categories/1bdb1eaa2cec4aab9de4b5dc86a7bdd8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardine Work Coat\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/1de62f4ba6084fd7987e5ac96d923729.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 29,
      "name": "ONL_3",
      "slug": "ONL_3",
      "product_code": "ONL_3",
      "category": {
        "id": 6,
        "name": "Apron",
        "slug": "onluk",
        "image": mediaAsset("products/categories/1bdb1eaa2cec4aab9de4b5dc86a7bdd8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardine Kitchen Apron\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/0c497dfeb0c14870865a2a28ae8b7780.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 30,
      "name": "ONL_4",
      "slug": "ONL_4",
      "product_code": "ONL_4",
      "category": {
        "id": 6,
        "name": "Apron",
        "slug": "onluk",
        "image": mediaAsset("products/categories/1bdb1eaa2cec4aab9de4b5dc86a7bdd8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardine Kitchen Apron\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/11d41d427a7e498eaf77dc14c0838329.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 31,
      "name": "ONL_5",
      "slug": "ONL_5",
      "product_code": "ONL_5",
      "category": {
        "id": 6,
        "name": "Apron",
        "slug": "onluk",
        "image": mediaAsset("products/categories/1bdb1eaa2cec4aab9de4b5dc86a7bdd8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardine Kitchen Apron\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/e31342db998840ac853b0a317e3efcc1.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 32,
      "name": "PNT_01",
      "slug": "PNT_01",
      "product_code": "PNT_01",
      "category": {
        "id": 4,
        "name": "Trousers",
        "slug": "pantolon",
        "image": mediaAsset("products/categories/1415888192554d98a78f7d386c6fb7c8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardine\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/4b1de9a047e14c329e6f56ec5864b3a5.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 33,
      "name": "PNT_02",
      "slug": "PNT_02",
      "product_code": "PNT_02",
      "category": {
        "id": 4,
        "name": "Trousers",
        "slug": "pantolon",
        "image": mediaAsset("products/categories/1415888192554d98a78f7d386c6fb7c8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Blend\r\n65% Cotton 35% Polyester",
      "description": "",
      "main_image": mediaAsset("products/items/e8b0fbe616ed4276a295efe22d7d48f4.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 34,
      "name": "PNT_03",
      "slug": "PNT_03",
      "product_code": "PNT_03",
      "category": {
        "id": 4,
        "name": "Trousers",
        "slug": "pantolon",
        "image": mediaAsset("products/categories/1415888192554d98a78f7d386c6fb7c8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Blend\r\n65% Cotton 35% Polyester",
      "description": "",
      "main_image": mediaAsset("products/items/17b2781828744b2ba1b948c60c87450b.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 35,
      "name": "PNT_04",
      "slug": "PNT_04",
      "product_code": "PNT_04",
      "category": {
        "id": 4,
        "name": "Trousers",
        "slug": "pantolon",
        "image": mediaAsset("products/categories/1415888192554d98a78f7d386c6fb7c8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardin\r\n%100 Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/29a6837e0f5a4d7694bc7ace6039060c.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 36,
      "name": "PNT_05",
      "slug": "PNT_05",
      "product_code": "PNT_05",
      "category": {
        "id": 4,
        "name": "Trousers",
        "slug": "pantolon",
        "image": mediaAsset("products/categories/1415888192554d98a78f7d386c6fb7c8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Blend\r\n65% Cotton 35% Polyester",
      "description": "",
      "main_image": mediaAsset("products/items/7a73f841ecc2414698ad180656f6e018.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 37,
      "name": "PNT_06",
      "slug": "PNT_06",
      "product_code": "PNT_06",
      "category": {
        "id": 4,
        "name": "Trousers",
        "slug": "pantolon",
        "image": mediaAsset("products/categories/1415888192554d98a78f7d386c6fb7c8.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sotina\r\n100% Polyester",
      "description": "",
      "main_image": mediaAsset("products/items/523878daf58c4151a36f0307dba99f86.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 38,
      "name": "POL_01",
      "slug": "POL_01",
      "product_code": "POL_01",
      "category": {
        "id": 7,
        "name": "Fleece",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Fleece Jacket\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/2eb16bea7452412a99b6cc789b78caf2.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 39,
      "name": "POL_02",
      "slug": "POL_02",
      "product_code": "POL_02",
      "category": {
        "id": 7,
        "name": "Fleece",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Fleece Jacket\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/35afb5b89c0f4f5fb8875819488d6c6e.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 40,
      "name": "POL_03",
      "slug": "POL_03",
      "product_code": "POL_03",
      "category": {
        "id": 7,
        "name": "Fleece",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Fleece Jacket\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/09f1bd1f3c3e4da2aac8fa747ae8117d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 41,
      "name": "POL_04",
      "slug": "POL_04",
      "product_code": "POL_04",
      "category": {
        "id": 7,
        "name": "Fleece",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Fleece Sweatshirt\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/a1144cc8e45a40dab32031124c7c2194.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 42,
      "name": "POL_05",
      "slug": "POL_05",
      "product_code": "POL_05",
      "category": {
        "id": 7,
        "name": "Fleece",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Fleece Jacket\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/80e01beeacb145b8a1fda3e2b9699364.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 43,
      "name": "POL_06",
      "slug": "POL_06",
      "product_code": "POL_06",
      "category": {
        "id": 7,
        "name": "Fleece",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Fleece Jacket\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/acad21dff55f44318d4dcab34728b6d4.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 44,
      "name": "POL_07",
      "slug": "POL_07",
      "product_code": "POL_07",
      "category": {
        "id": 7,
        "name": "Fleece",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Fleece Sweatshirt\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/3f4d699a1271428fb126984244f5bffd.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 45,
      "name": "POL_08",
      "slug": "POL_08",
      "product_code": "POL_08",
      "category": {
        "id": 7,
        "name": "Fleece",
        "slug": "polar",
        "image": mediaAsset("products/categories/dff34c20c1884244bcfc23b7504f50a5.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polar Mont\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/4ed6940ac0b94f2486a99ab0436ad4af.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 46,
      "name": "CEK_04",
      "slug": "CEK_04",
      "product_code": "CEK_04",
      "category": {
        "id": 3,
        "name": "Jacket",
        "slug": "ceket",
        "image": mediaAsset("products/categories/900f1774989c46428e709bcc6ce4742a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardin\r\n%100 Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/d7fe7a64863e4bda9cb761eec45be7fb.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 47,
      "name": "ELD_02",
      "slug": "ELD_02",
      "product_code": "ELD_02",
      "category": {
        "id": 15,
        "name": "Gloves",
        "slug": "eldiven",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Acrylic\r\nCut Style",
      "description": "",
      "main_image": mediaAsset("products/items/0b6aadd4a2674ad3897730d8ab7d4a7e.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 48,
      "name": "ELD_03",
      "slug": "ELD_03",
      "product_code": "ELD_03",
      "category": {
        "id": 15,
        "name": "Gloves",
        "slug": "eldiven",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Fleece\r\nPlain Style\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/d4abcb9946844cafa5f541cc44cc027e.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 49,
      "name": "ELD_04",
      "slug": "ELD_04",
      "product_code": "ELD_04",
      "category": {
        "id": 15,
        "name": "Gloves",
        "slug": "eldiven",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Fleece\r\nCamouflage Style\r\nAnti-Pilling",
      "description": "",
      "main_image": mediaAsset("products/items/562ea661b46443d1b64dd05594c9c5f5.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 50,
      "name": "MON_07",
      "slug": "MON_07",
      "product_code": "MON_07",
      "category": {
        "id": 9,
        "name": "Coats & Jackets",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Bonded\r\nReflective",
      "description": "",
      "main_image": mediaAsset("products/items/170615e33b8540a9b86a310bd9101e63.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 51,
      "name": "MON_08",
      "slug": "MON_08",
      "product_code": "MON_08",
      "category": {
        "id": 9,
        "name": "Coats & Jackets",
        "slug": "mont-kaban",
        "image": mediaAsset("products/categories/b5277c5497904f2aa3936799c4cce874.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sotina",
      "description": "",
      "main_image": mediaAsset("products/items/c62f67116bbe43e1b0fe245752412c26.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 52,
      "name": "SOF_01",
      "slug": "SOF_01",
      "product_code": "SOF_01",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nPlain Style",
      "description": "",
      "main_image": mediaAsset("products/items/79acfb884590425ea686d4844a345641.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 53,
      "name": "SOF_02",
      "slug": "SOF_02",
      "product_code": "SOF_02",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nEmbroidered Style",
      "description": "",
      "main_image": mediaAsset("products/items/a173a4294118479aba9c15da5b58dabd.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 54,
      "name": "SOF_03",
      "slug": "SOF_03",
      "product_code": "SOF_03",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nCustom Made",
      "description": "",
      "main_image": mediaAsset("products/items/30b15fd7b25645e2812d13e9e8b5c8bc.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 55,
      "name": "SOF_04",
      "slug": "SOF_04",
      "product_code": "SOF_04",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nEmbroidered Style",
      "description": "",
      "main_image": mediaAsset("products/items/4547e92d384140519ef4bbf52a3d2585.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 56,
      "name": "SOF_05",
      "slug": "SOF_05",
      "product_code": "SOF_05",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nHigh-Visibility",
      "description": "",
      "main_image": mediaAsset("products/items/4ff7264b5e7947cd96a37a30e3e2b919.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 57,
      "name": "SOF_06",
      "slug": "SOF_06",
      "product_code": "SOF_06",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nPiped Style",
      "description": "",
      "main_image": mediaAsset("products/items/cd8772be002c47cea53f0353a064dbb9.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 58,
      "name": "SOF_07",
      "slug": "SOF_07",
      "product_code": "SOF_07",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nPlain Style",
      "description": "",
      "main_image": mediaAsset("products/items/5d9b3dfdc4a248dda21a5e49014a9ef1.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 59,
      "name": "SOF_08",
      "slug": "SOF_08",
      "product_code": "SOF_08",
      "category": {
        "id": 10,
        "name": "Softshell",
        "slug": "softshell",
        "image": mediaAsset("products/categories/1cd6b877c52844baa2d7182b56c062c6.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Softshell\r\nHigh-Visibility",
      "description": "",
      "main_image": mediaAsset("products/items/86d183f773b94839bd9c19aa16e281b6.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 60,
      "name": "SWE_01",
      "slug": "SWE_01",
      "product_code": "SWE_01",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Crew Neck - 2 Thread\r\nBrushed",
      "description": "",
      "main_image": mediaAsset("products/items/82a2b8e7c2e94337be0ee39424647d5f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 61,
      "name": "SWE_02",
      "slug": "SWE_02",
      "product_code": "SWE_02",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "V Neck - Single Jersey\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/8869ec822a1e4b408288d45ad1233306.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 62,
      "name": "SWE_03",
      "slug": "SWE_03",
      "product_code": "SWE_03",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Collar - Lacoste Piqué\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/628a3ce1973043a99c1426d0f4167ba4.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 63,
      "name": "SWE_04",
      "slug": "SWE_04",
      "product_code": "SWE_04",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Collar - Lacoste Piqué\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/1d9645eb4bda41998910cc3a2fc5556a.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 64,
      "name": "SWE_05",
      "slug": "SWE_05",
      "product_code": "SWE_05",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Collar - 3 Thread\r\nBrushed",
      "description": "",
      "main_image": mediaAsset("products/items/0074275792f64e48b866a5e683abf92e.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 65,
      "name": "SWE_06",
      "slug": "SWE_06",
      "product_code": "SWE_06",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Hooded - 3 Thread\r\nBrushed",
      "description": "",
      "main_image": mediaAsset("products/items/bc8e22463e014b30a34a13432e1e8af8.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 66,
      "name": "SWE_07",
      "slug": "SWE_07",
      "product_code": "SWE_07",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Hooded - 2 Thread\r\nBrushed",
      "description": "",
      "main_image": mediaAsset("products/items/de92595d86594251a64f952e7f09b7b1.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 67,
      "name": "SWE_08",
      "slug": "SWE_08",
      "product_code": "SWE_08",
      "category": {
        "id": 2,
        "name": "Sweatshirt",
        "slug": "sweatshirt",
        "image": mediaAsset("products/categories/619b1f9893c34621ba286eb609114d86.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Crew Neck - 2 Thread\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/00f41df103a74f1c837e94c5bfacfa72.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 68,
      "name": "SPK_01",
      "slug": "SPK_01",
      "product_code": "SPK_01",
      "category": {
        "id": 13,
        "name": "Cap",
        "slug": "sapka",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardine\r\n100% Cotton\r\nPrinted",
      "description": "",
      "main_image": mediaAsset("products/items/0ba556b21ac14cf09b07a78ba036cc1f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 69,
      "name": "SPK_02",
      "slug": "SPK_02",
      "product_code": "SPK_02",
      "category": {
        "id": 13,
        "name": "Cap",
        "slug": "sapka",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardine\r\n100% Cotton\r\nEmbroidered",
      "description": "",
      "main_image": mediaAsset("products/items/4abb1940eda045a0ad1efe61c8eb1754.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 70,
      "name": "SPK_03",
      "slug": "SPK_03",
      "product_code": "SPK_03",
      "category": {
        "id": 13,
        "name": "Cap",
        "slug": "sapka",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardine\r\n100% Cotton\r\nPiped",
      "description": "",
      "main_image": mediaAsset("products/items/d6faf67e819f462eb57d9d6019f856bb.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 71,
      "name": "SPK_04",
      "slug": "SPK_04",
      "product_code": "SPK_04",
      "category": {
        "id": 13,
        "name": "Cap",
        "slug": "sapka",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardine\r\n100% Cotton\r\nPlain",
      "description": "",
      "main_image": mediaAsset("products/items/3a5a5921fd63427ab8ab808520d87182.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 72,
      "name": "SPK_05",
      "slug": "SPK_05",
      "product_code": "SPK_05",
      "category": {
        "id": 13,
        "name": "Cap",
        "slug": "sapka",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardine\r\n100% Cotton\r\nSandwich Style",
      "description": "",
      "main_image": mediaAsset("products/items/0d37cfd2df62413086227c2d7a8c0ade.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 73,
      "name": "SPK_06",
      "slug": "SPK_06",
      "product_code": "SPK_06",
      "category": {
        "id": 13,
        "name": "Cap",
        "slug": "sapka",
        "image": null,
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "accessories"
        ]
      },
      "groups": [
        {
          "id": 4,
          "name": "Accessories",
          "slug": "accessories",
          "image": mediaAsset("products/groups/27e66f147bec458a9e8ec86aabf1515e.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/accessories/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardine\r\n100% Cotton\r\nMesh-Lined",
      "description": "",
      "main_image": mediaAsset("products/items/b8eb47df82dd4dc0bb511e95ae8900f1.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 74,
      "name": "TSH_01",
      "slug": "TSH_01",
      "product_code": "TSH_01",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Crew Neck - Single Jersey\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/84593888026b452d90bba2890d0007c0.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 75,
      "name": "TSH_02",
      "slug": "TSH_02",
      "product_code": "TSH_02",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Crew Neck - Single Jersey\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/15de5bb280524ef28eb73a413e561e8a.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 76,
      "name": "TSH_03",
      "slug": "TSH_03",
      "product_code": "TSH_03",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Crew Neck - Single Jersey\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/759bbab865124720a915695a798291e4.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 77,
      "name": "TSH_04",
      "slug": "TSH_04",
      "product_code": "TSH_04",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Crew Neck - Single Jersey\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/2ff6d1834b474114a0016ded25a59f4b.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 78,
      "name": "TSH_05",
      "slug": "TSH_05",
      "product_code": "TSH_05",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Crew Neck - Single Jersey\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/4d7618ba41494341adf04feafdb02f91.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 79,
      "name": "TSH_06",
      "slug": "TSH_06",
      "product_code": "TSH_06",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Crew Neck - Single Jersey\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/548429d6cd7f407994c58bc3c7e77151.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 80,
      "name": "TSH_07",
      "slug": "TSH_07",
      "product_code": "TSH_07",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Crew Neck - Single Jersey\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/238e9adbe2484ba8b37fde0a55c1796e.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 81,
      "name": "TSH_08",
      "slug": "TSH_08",
      "product_code": "TSH_08",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Crew Neck - Single Jersey\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/149b160cf7184feab9e0079833620547.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 82,
      "name": "TSH_09",
      "slug": "TSH_09",
      "product_code": "TSH_09",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Crew Neck - Single Jersey\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/eb3d49e79ad74b2b9b1fb246448a04e4.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 83,
      "name": "TSH_10",
      "slug": "TSH_10",
      "product_code": "TSH_10",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "V Neck - Single Jersey\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/052a9629d7924988875eb261a904bd95.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 84,
      "name": "TSH_11",
      "slug": "TSH_11",
      "product_code": "TSH_11",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Collar - Lacoste Piqué\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/0f34b5fe082c45a6957804c148bee565.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 85,
      "name": "TSH_12",
      "slug": "TSH_12",
      "product_code": "TSH_12",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Collar  - Lacoste Piqué\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/997fbcf188804d25b639779ae011b6fd.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 86,
      "name": "TSH_13",
      "slug": "TSH_13",
      "product_code": "TSH_13",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Collar - Lacoste Piqué\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/80be9810259e4783a6022386812a86f2.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 87,
      "name": "TSH_14",
      "slug": "TSH_14",
      "product_code": "TSH_14",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Collar - Lacoste Piqué\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/6c6e4b9f5a2b4b1485b8f758f784cc2d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 88,
      "name": "TSH_15",
      "slug": "TSH_15",
      "product_code": "TSH_15",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Collar - Lacoste Piqué\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/ca1a3f409e14483c950eaec22b9c7321.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 89,
      "name": "TSH_16",
      "slug": "TSH_16",
      "product_code": "TSH_16",
      "category": {
        "id": 1,
        "name": "T-Shirt",
        "slug": "t-shirt",
        "image": mediaAsset("products/categories/a7c368c16d934d73aa02be83c437d12a.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Polo Collar - Lacoste Piqué\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/dec080376f8e483cbf4bc70edcdc8af8.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 90,
      "name": "TLM_01",
      "slug": "TLM_01",
      "product_code": "TLM_01",
      "category": {
        "id": 5,
        "name": "Coveralls",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Blend - Coverall\r\n65% Cotton 35% Polyester",
      "description": "",
      "main_image": mediaAsset("products/items/c27dc9c10feb4d979d70fb9cbc267f37.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 91,
      "name": "TLM_02",
      "slug": "TLM_02",
      "product_code": "TLM_02",
      "category": {
        "id": 5,
        "name": "Coveralls",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardine - Coverall\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/5927a0ac88a64c1bb67a822b40b9a9c2.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 92,
      "name": "TLM_03",
      "slug": "TLM_03",
      "product_code": "TLM_03",
      "category": {
        "id": 5,
        "name": "Coveralls",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardine - Coverall\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/552974ff3d1e409ca6d473bdc2968a9d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 93,
      "name": "TLM_04",
      "slug": "TLM_04",
      "product_code": "TLM_04",
      "category": {
        "id": 5,
        "name": "Coveralls",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Polyester - Coverall\r\n65% Polyester 35% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/12f06d30792e4bc1825690e6c053640e.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 94,
      "name": "TLM_05",
      "slug": "TLM_05",
      "product_code": "TLM_05",
      "category": {
        "id": 5,
        "name": "Coveralls",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardine - Bib Overalls\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/4c1fb13894244aa6a7461aa3123efc50.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 95,
      "name": "TLM_06",
      "slug": "tlm_06",
      "product_code": "TLM_06",
      "category": {
        "id": 5,
        "name": "Coveralls",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardine - Bib Overalls\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/ddfc8592aa5b48f5bb46fd61a08c919b.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 96,
      "name": "TLM_07",
      "slug": "tlm_07",
      "product_code": "TLM_07",
      "category": {
        "id": 5,
        "name": "Coveralls",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardine - Bib Overalls\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/447de0ef20e94db49a313dbf855d62d8.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 97,
      "name": "TLM_08",
      "slug": "tlm_08",
      "product_code": "TLM_08",
      "category": {
        "id": 5,
        "name": "Coveralls",
        "slug": "tulum",
        "image": mediaAsset("products/categories/18b10189d3a24bf3ab6fe91212ed8ad3.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": []
      },
      "groups": [],
      "short_description": "Gabardine - Bib Overalls\r\n100% Cotton",
      "description": "",
      "main_image": mediaAsset("products/items/29ecaad8fc9749849ebe327987011e8f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 98,
      "name": "YAG_01",
      "slug": "yag_01",
      "product_code": "YAG_01",
      "category": {
        "id": 11,
        "name": "Rainwear",
        "slug": "yagmurluk",
        "image": mediaAsset("products/categories/afc1abfd76404735a98922ee753993f0.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "PVC Coated\r\nLong Style",
      "description": "",
      "main_image": mediaAsset("products/items/b739ba78967943169811fe45ba45c091.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 99,
      "name": "YAG_02",
      "slug": "yag_02",
      "product_code": "YAG_02",
      "category": {
        "id": 11,
        "name": "Rainwear",
        "slug": "yagmurluk",
        "image": mediaAsset("products/categories/afc1abfd76404735a98922ee753993f0.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Taffeta\r\nPlain Style",
      "description": "",
      "main_image": mediaAsset("products/items/e43ce44eaa52440eb89a6702e08c59ee.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 100,
      "name": "YAG_03",
      "slug": "yag_03",
      "product_code": "YAG_03",
      "category": {
        "id": 11,
        "name": "Rainwear",
        "slug": "yagmurluk",
        "image": mediaAsset("products/categories/afc1abfd76404735a98922ee753993f0.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Sotina\r\nMesh-Lined Style",
      "description": "",
      "main_image": mediaAsset("products/items/9e9461894ecf4749a0acb5cdab9e823a.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 101,
      "name": "YAG_04",
      "slug": "yag_04",
      "product_code": "YAG_04",
      "category": {
        "id": 11,
        "name": "Rainwear",
        "slug": "yagmurluk",
        "image": mediaAsset("products/categories/afc1abfd76404735a98922ee753993f0.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "winter"
        ]
      },
      "groups": [
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Microfiber\r\nLong Style",
      "description": "",
      "main_image": mediaAsset("products/items/a754da2f07ba41d69291ada94913428c.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 102,
      "name": "YEL_01",
      "slug": "yel_01",
      "product_code": "YEL_01",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/b1cbfec6de8a4fcdb51ec2e45ec80e31.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 103,
      "name": "YEL_02",
      "slug": "yel_02",
      "product_code": "YEL_02",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/e34e48d161514e2fbe3a03714d0210e6.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 104,
      "name": "YEL_03",
      "slug": "yel_03",
      "product_code": "YEL_03",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Microfiber\r\nMulti-Stitched",
      "description": "",
      "main_image": mediaAsset("products/items/a6fc5c49b07546bc85e12eb8760b0b26.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 105,
      "name": "YEL_04",
      "slug": "yel_04",
      "product_code": "YEL_04",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/13ce5e049fc64335854b1cabf4745c68.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 106,
      "name": "YEL_05",
      "slug": "yel_05",
      "product_code": "YEL_05",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/61515116626a4b59b3a4d20d13d52946.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 107,
      "name": "YEL_06",
      "slug": "yel_06",
      "product_code": "YEL_06",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Microfiber\r\nMulti-Stitched",
      "description": "",
      "main_image": mediaAsset("products/items/7d8a7c4f33e448c18e777b1a83712d29.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 108,
      "name": "YEL_07",
      "slug": "yel_07",
      "product_code": "YEL_07",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/77b1830162904cbeb883b6de7c70027b.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 109,
      "name": "YEL_08",
      "slug": "yel_08",
      "product_code": "YEL_08",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/e5b93ecb870a4cb5b725851f8ea2317d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 110,
      "name": "YEL_09",
      "slug": "yel_09",
      "product_code": "YEL_09",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/08ba05f0ca0c4c04a651dcd1df611591.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 111,
      "name": "YEL_10",
      "slug": "yel_10",
      "product_code": "YEL_10",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/28d68857136b408499a25bfd870788ca.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 112,
      "name": "YEL_11",
      "slug": "yel_11",
      "product_code": "YEL_11",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Tafetta",
      "description": "",
      "main_image": mediaAsset("products/items/e4a0c2dbe54e49f0989c00111e3b40b8.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 113,
      "name": "YEL_12",
      "slug": "yel_12",
      "product_code": "YEL_12",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Ripstap",
      "description": "",
      "main_image": mediaAsset("products/items/7e5281ad5bb34886a68b2a9119c34fdf.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 114,
      "name": "YEL_13",
      "slug": "yel_13",
      "product_code": "YEL_13",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardine\r\nHunter Style",
      "description": "",
      "main_image": mediaAsset("products/items/d440ec2e49154be6bf0768e9c76f2970.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 115,
      "name": "YEL_14",
      "slug": "yel_14",
      "product_code": "YEL_14",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Gabardine\r\nMulti-Pocket",
      "description": "",
      "main_image": mediaAsset("products/items/16e4f3ddcbf34909837765e62844ec98.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 116,
      "name": "YEL_15",
      "slug": "yel_15",
      "product_code": "YEL_15",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Raschel - Reflective\r\nEngineer Style",
      "description": "",
      "main_image": mediaAsset("products/items/3237678bf09145819ae3e55085a5b319.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 117,
      "name": "YEL_16",
      "slug": "yel_16",
      "product_code": "YEL_16",
      "category": {
        "id": 8,
        "name": "Vest",
        "slug": "yelek",
        "image": mediaAsset("products/categories/1d21e91d7c5b44ff9a0cfd8afcf331d9.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "summer",
          "winter"
        ]
      },
      "groups": [
        {
          "id": 1,
          "name": "Summer",
          "slug": "summer",
          "image": mediaAsset("products/groups/183b6d6c21bc4f609d6890dbfa88e09c.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/summer/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        },
        {
          "id": 2,
          "name": "Winter",
          "slug": "winter",
          "image": mediaAsset("products/groups/17b2bf77032d4fe1a00051e62b6c3b84.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/winter/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Raschel - Reflective\r\nPlain Style",
      "description": "",
      "main_image": mediaAsset("products/items/9405ed66e0ad45b8adef6f010a116d66.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "S\nM\nL\nXL\nXXL\n3XL",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 118,
      "name": "TKM_01",
      "slug": "tkm_01",
      "product_code": "TKM_01",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nConstruction Waist Bag",
      "description": "",
      "main_image": mediaAsset("products/items/dfae9032b8ab4f2588c16ea3229a55ec.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 119,
      "name": "FUT_01",
      "slug": "fut_01",
      "product_code": "FUT_01",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPlain Pattern\r\nFootball",
      "description": "",
      "main_image": mediaAsset("products/items/1d35d75f70c44e60ab28e6fafe72052c.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 120,
      "name": "FUT_02",
      "slug": "fut_02",
      "product_code": "FUT_02",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPlain Pattern\r\nFootball",
      "description": "",
      "main_image": mediaAsset("products/items/349171397195479ebebb641d6f52a407.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 121,
      "name": "FUT_03",
      "slug": "fut_03",
      "product_code": "FUT_03",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nRain Pattern\r\nFootball",
      "description": "",
      "main_image": mediaAsset("products/items/6d8eaa499aee4beeba8086ada9797da0.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 122,
      "name": "FUT_04",
      "slug": "fut_04",
      "product_code": "FUT_04",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nRain Pattern\r\nFootball",
      "description": "",
      "main_image": mediaAsset("products/items/47a1e699bf2a418fb35adf897b5dac52.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 123,
      "name": "FUT_05",
      "slug": "fut_05",
      "product_code": "FUT_05",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nHoneycomb Pattern\r\nFootball",
      "description": "",
      "main_image": mediaAsset("products/items/77afccb2a29e448e9c785a26bbc1e2c7.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 124,
      "name": "FUT_06",
      "slug": "fut_06",
      "product_code": "FUT_06",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nHoneycomb Pattern\r\nFootball",
      "description": "",
      "main_image": mediaAsset("products/items/f3e68a94be394ccbb6d69d9f3f8edd82.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 125,
      "name": "FUT_07",
      "slug": "fut_07",
      "product_code": "FUT_07",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPlain Pattern\r\nFootball",
      "description": "",
      "main_image": mediaAsset("products/items/654ae4fc4f5346faa8840ce7c7468854.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 126,
      "name": "FUT_08",
      "slug": "fut_08",
      "product_code": "FUT_08",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nRain Pattern\r\nFootball",
      "description": "",
      "main_image": mediaAsset("products/items/4b2d6b9fb2f74b6db3e507e44b95bedd.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 127,
      "name": "BAS_01",
      "slug": "bas_01",
      "product_code": "BAS_01",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPlain Pattern\r\nBasketball",
      "description": "",
      "main_image": mediaAsset("products/items/4d63aa83c000463f995493049bbf46ba.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 128,
      "name": "BAS_02",
      "slug": "bas_02",
      "product_code": "BAS_02",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nRain Pattern\r\nBasketball",
      "description": "",
      "main_image": mediaAsset("products/items/fc90e8ad0dbd4485bbba696c290b4d37.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 129,
      "name": "BAS_03",
      "slug": "bas_03",
      "product_code": "BAS_03",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nHoneycomb Pattern\r\nBasketball",
      "description": "",
      "main_image": mediaAsset("products/items/07b66f5e8e5d4f82ac2d43608b2bb946.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 130,
      "name": "BAS_04",
      "slug": "bas_04",
      "product_code": "BAS_04",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nRain Pattern\r\nBasketball",
      "description": "",
      "main_image": mediaAsset("products/items/b7595baf63b141ac96d4c1410ebfffb9.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 131,
      "name": "KOS_01",
      "slug": "kos_01",
      "product_code": "KOS_01",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPlain Pattern\r\nRunning",
      "description": "",
      "main_image": mediaAsset("products/items/54aae485bd574670b01a8be92915fe3f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 132,
      "name": "KOS_02",
      "slug": "kos_02",
      "product_code": "KOS_02",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nRain Pattern\r\nRunning",
      "description": "",
      "main_image": mediaAsset("products/items/16b53a34e2e24afcbc5a33de6a6470a4.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 133,
      "name": "KOS_03",
      "slug": "kos_03",
      "product_code": "KOS_03",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nHoneycomb Pattern\r\nRunning",
      "description": "",
      "main_image": mediaAsset("products/items/9027dfefe531416db7e1ce750823df6f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 134,
      "name": "KOS_04",
      "slug": "kos_04",
      "product_code": "KOS_04",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nRain Pattern\r\nRunning",
      "description": "",
      "main_image": mediaAsset("products/items/d65cc345470948b691251a09343c7001.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 135,
      "name": "ESF_01",
      "slug": "esf_01",
      "product_code": "ESF_01",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nStretch\r\nTracksuit",
      "description": "",
      "main_image": mediaAsset("products/items/7d95435cf7124117b1878d4e9c6313a5.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 136,
      "name": "ESF_02",
      "slug": "esf_02",
      "product_code": "ESF_02",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nStretch\r\nTracksuit",
      "description": "",
      "main_image": mediaAsset("products/items/ee7f4489cbe34d229baa2f20ab2b1a27.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 137,
      "name": "ESF_03",
      "slug": "esf_03",
      "product_code": "ESF_03",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nStretch\r\nTracksuit",
      "description": "",
      "main_image": mediaAsset("products/items/311696e6fa134986a9439b8447f26582.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 138,
      "name": "ESF_04",
      "slug": "esf_04",
      "product_code": "ESF_04",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nStretch\r\nTracksuit",
      "description": "",
      "main_image": mediaAsset("products/items/f95485ab47554f598fa3faa8a6d6921f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 139,
      "name": "PRE_01",
      "slug": "pre_01",
      "product_code": "PRE_01",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPlain Pattern\r\nCrew Neck",
      "description": "",
      "main_image": mediaAsset("products/items/d4ae972dcd324d788f59c7b433664c8d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 140,
      "name": "PRE_02",
      "slug": "pre_02",
      "product_code": "PRE_02",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nRain Pattern\r\nCrew Neck",
      "description": "",
      "main_image": mediaAsset("products/items/4ccdad1085aa4236a178a2fd466ed212.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 141,
      "name": "PRE_03",
      "slug": "pre_03",
      "product_code": "PRE_03",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nHoneycomb Pattern\r\nPolo Collar",
      "description": "",
      "main_image": mediaAsset("products/items/cdbd67deb8d748bc8fda9be2f4876df5.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 142,
      "name": "PRE_04",
      "slug": "pre_04",
      "product_code": "PRE_04",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPlain Pattern\r\nPolo Collar",
      "description": "",
      "main_image": mediaAsset("products/items/214a2b71e1da4f3ab1b93773fb983e82.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 143,
      "name": "PRO_01",
      "slug": "pro_01",
      "product_code": "PRO_01",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nRain Pattern\r\nCrew Neck",
      "description": "",
      "main_image": mediaAsset("products/items/da5a131deb7446ec9a5051ec93e7e25a.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 144,
      "name": "PRO_02",
      "slug": "pro_02",
      "product_code": "PRO_02",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nHoneycomb Pattern\r\nCrew Neck",
      "description": "",
      "main_image": mediaAsset("products/items/bb937074e1f94f7ea48f9475c3735668.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 145,
      "name": "PRO_03",
      "slug": "pro_03",
      "product_code": "PRO_03",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPlain Pattern\r\nCrew Neck",
      "description": "",
      "main_image": mediaAsset("products/items/a5d191ec3b3d41b1a655d5f828d20b23.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 146,
      "name": "PRO_04",
      "slug": "pro_04",
      "product_code": "PRO_04",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nRain Pattern\r\nCrew Neck",
      "description": "",
      "main_image": mediaAsset("products/items/bf5c65ce394849ef8645b1d0d9463c6d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 147,
      "name": "PRO_05",
      "slug": "pro_05",
      "product_code": "PRO_05",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nHoneycomb Pattern\r\nCrew Neck",
      "description": "",
      "main_image": mediaAsset("products/items/4ddd0dab437a4810b05c7ab14c8c4e26.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 148,
      "name": "PRO_06",
      "slug": "pro_06",
      "product_code": "PRO_06",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nPlain Pattern\r\nPolo Collar",
      "description": "",
      "main_image": mediaAsset("products/items/44152f7d25f5419b8e0dfed43ad34f4b.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 149,
      "name": "PRO_07",
      "slug": "pro_07",
      "product_code": "PRO_07",
      "category": {
        "id": 18,
        "name": "Sportswear",
        "slug": "sportswear",
        "image": mediaAsset("products/categories/84310ce560504ec0bd643fddbc87e4bd.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "spor-giyimi"
        ]
      },
      "groups": [
        {
          "id": 35,
          "name": "Sportswear",
          "slug": "spor-giyimi",
          "image": mediaAsset("products/groups/b0964047aeb3473696b21bc005532c58.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/spor-giyimi/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Micro-Poly\r\nRain Pattern\r\nPolo Collar",
      "description": "",
      "main_image": mediaAsset("products/items/0f33582c5ba64278915dfc8bb83bf188.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 150,
      "name": "TKM_02",
      "slug": "tkm_02",
      "product_code": "TKM_02",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nConstruction \r\nWaist Bag",
      "description": "",
      "main_image": mediaAsset("products/items/10fd34b650b54801a882b46e026a599a.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 151,
      "name": "TKM_03",
      "slug": "tkm_03",
      "product_code": "TKM_03",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nConstruction \r\nShoulder Bag",
      "description": "",
      "main_image": mediaAsset("products/items/2a6feaa8afef4e4984689e08bbddabef.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 152,
      "name": "TKM_04",
      "slug": "tkm_04",
      "product_code": "TKM_04",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nConstruction \r\nWaist Bag",
      "description": "",
      "main_image": mediaAsset("products/items/2f2cc08d8ae94a8ebff742ba08845a7c.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 153,
      "name": "TKM_05",
      "slug": "tkm_05",
      "product_code": "TKM_05",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nConstruction \r\nWaist Bag",
      "description": "",
      "main_image": mediaAsset("products/items/8cfdfdd7f43d4c1fa61366e4b7bc1182.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 154,
      "name": "TKM_06",
      "slug": "tkm_06",
      "product_code": "TKM_06",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nConstruction \r\nWaist Bag",
      "description": "",
      "main_image": mediaAsset("products/items/c7e357e8cee540db9799c2c40f9fe9ed.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 155,
      "name": "TKM_07",
      "slug": "tkm_07",
      "product_code": "TKM_07",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nConstruction \r\nWaist Bag",
      "description": "",
      "main_image": mediaAsset("products/items/db24ad1baed943f3b4603c370e32e511.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 156,
      "name": "TKM_08",
      "slug": "tkm_08",
      "product_code": "TKM_08",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nConstruction \r\nWaist Bag",
      "description": "",
      "main_image": mediaAsset("products/items/f46cdff05b6040df89268a970f4cc2f2.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 157,
      "name": "TKM_09",
      "slug": "tkm_09",
      "product_code": "TKM_09",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nEngineer \r\nWaist Bag",
      "description": "",
      "main_image": mediaAsset("products/items/1de59e0ab11247ebabe5b809d60f61ed.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 158,
      "name": "TKM_10",
      "slug": "tkm_10",
      "product_code": "TKM_10",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nEngineer \r\nWaist Bag",
      "description": "",
      "main_image": mediaAsset("products/items/5827ae49954f42308866a93b647b4f80.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 159,
      "name": "TKM_11",
      "slug": "tkm_11",
      "product_code": "TKM_11",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nEngineer \r\nBackpack",
      "description": "",
      "main_image": mediaAsset("products/items/b73282440506421485e260daf76964df.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 160,
      "name": "TKM_12",
      "slug": "tkm_12",
      "product_code": "TKM_12",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nEngineer \r\nBackpack",
      "description": "",
      "main_image": mediaAsset("products/items/83b16596398040fe936dcc810d4a178c.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 161,
      "name": "TKM_13",
      "slug": "tkm_13",
      "product_code": "TKM_13",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nEngineer \r\nBackpack",
      "description": "",
      "main_image": mediaAsset("products/items/f7009f30662d4a8c97c4b8c65197237a.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 162,
      "name": "TKM_14",
      "slug": "tkm_14",
      "product_code": "TKM_14",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nEngineer \r\nBackpack",
      "description": "",
      "main_image": mediaAsset("products/items/76e654bba64545f2b5a50d219e5aea9b.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 163,
      "name": "TKM_15",
      "slug": "tkm_15",
      "product_code": "TKM_15",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nLight Industrial \r\nShoulder Bag",
      "description": "",
      "main_image": mediaAsset("products/items/1529062300c646b0b653486cccf8a56e.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 164,
      "name": "TKM_16",
      "slug": "tkm_16",
      "product_code": "TKM_16",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nLight Industrial \r\nShoulder Bag",
      "description": "",
      "main_image": mediaAsset("products/items/27a896fa4e094fb0b0f8e910e0d425da.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 165,
      "name": "TKM_17",
      "slug": "tkm_17",
      "product_code": "TKM_17",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nLight Industrial \r\nShoulder Bag",
      "description": "",
      "main_image": mediaAsset("products/items/e2362f8801e446f895c0f07293e5a82c.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 166,
      "name": "TKM_18",
      "slug": "tkm_18",
      "product_code": "TKM_18",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nLight Industrial \r\nShoulder Bag",
      "description": "",
      "main_image": mediaAsset("products/items/815799cdb076405a8d0c289925d3f8bd.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 167,
      "name": "TKM_19",
      "slug": "tkm_19",
      "product_code": "TKM_19",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nLight Industrial \r\nShoulder Bag",
      "description": "",
      "main_image": mediaAsset("products/items/0670298b117943fa9b6b7b19d1904a96.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 168,
      "name": "TKM_20",
      "slug": "tkm_20",
      "product_code": "TKM_20",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nIndustrial \r\nShoulder Bag",
      "description": "",
      "main_image": mediaAsset("products/items/55b1b646adf64f79afefc67ee2670c52.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 169,
      "name": "TKM_21",
      "slug": "tkm_21",
      "product_code": "TKM_21",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nIndustrial \r\nShoulder Bag",
      "description": "",
      "main_image": mediaAsset("products/items/2687bc198331402fb013a91b686f0120.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 170,
      "name": "TKM_22",
      "slug": "tkm_22",
      "product_code": "TKM_22",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nIndustrial \r\nShoulder Bag",
      "description": "",
      "main_image": mediaAsset("products/items/766d9e3dc5c54bef8e588779726fca2d.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    },
    {
      "id": 171,
      "name": "TKM_23",
      "slug": "tkm_23",
      "product_code": "TKM_23",
      "category": {
        "id": 17,
        "name": "Tool Bag",
        "slug": "takim-cantasi",
        "image": mediaAsset("products/categories/3eeaa05f25a149a79c392d7e52383e4c.png"),
        "description": "",
        "header_image": null,
        "seo_title": "",
        "seo_description": "",
        "groups": [
          "bags"
        ]
      },
      "groups": [
        {
          "id": 3,
          "name": "Bags",
          "slug": "bags",
          "image": mediaAsset("products/groups/8932ebf6ff884f02a6190a68d2f2e3fa.png"),
          "image_mobile": null,
          "short_description": "",
          "url": "/products/bags/",
          "hero_eyebrow": "",
          "hero_title": "",
          "hero_description": "",
          "hero_image": null,
          "hero_image_mobile": null,
          "seo_title": "",
          "seo_description": ""
        }
      ],
      "short_description": "Denier\r\nIndustrial Shoulder Bag",
      "description": "",
      "main_image": mediaAsset("products/items/35f5ca0d8f6b4619ab7038375e7bff5f.png"),
      "materials": "",
      "features": "",
      "colors": "",
      "sizes": "",
      "images": [],
      "is_featured": false,
      "seo_title": "",
      "seo_description": ""
    }
  ]
} as unknown as Record<SupportedLocale, Array<Record<string, unknown>>>;

export const staticCorporateSnapshot = {
  "tr": {
    "hero": {
      "eyebrow": "",
      "title": "ELLİ YILLIK TECRÜBE",
      "description": ""
    },
    "history_hero": {
      "title": "50 YILLIK TECRÜBE",
      "description": "Şapka, bere, atkı ve eldiven üretimiyle temellerini attığımız tekstil yolculuğumuzu, bugün çok markalı ve uluslararası ölçekte faaliyet gösteren güçlü bir grup yapısıyla sürdürüyoruz.",
      "image": mediaAsset("corporate/history-hero/00d03bd2027c41be8661f2c865a944d9.jpg"),
      "image_mobile": mediaAsset("corporate/history-hero/00d03bd2027c41be8661f2c865a944d9.jpg")
    },
    "group": {
      "eyebrow": "",
      "title": "78'DEN GELEN ÜRETİM TECRÜBESİ",
      "description": "",
      "supporting_label": "",
      "image": mediaAsset("corporate/group/28f59a267b564423b70dd60af0769cfb.jpg"),
      "image_mobile": null,
      "image_position": "center",
      "collage_image": mediaAsset("corporate/archive/779e0408b9b14da69431959fd4ba1571.jpg"),
      "collage_image_mobile": mediaAsset("corporate/archive/779e0408b9b14da69431959fd4ba1571.jpg")
    },
    "video": {
      "title": "ÜRETİMİN ARKASINDAKİ DENEYİM.",
      "description": "SUW, 1978'den gelen ALK Group üretim deneyiminden güç alır. Ürün geliştirme, üretim, kalite kontrol ve tedarik süreçlerini aynı yapı içerisinde yöneterek kurumsal müşterilere uçtan uca çözümler sunar.",
      "video": null,
      "poster": null,
      "is_active": false
    },
    "timeline": {
      "title": "HİKAYEMİZ",
      "description": "",
      "items": [
        {
          "id": 1,
          "year": "1978",
          "description": "Eminönü'nde küçük bir şapka mağazasıyla başlayan yolculuk, ALK Group'un tekstil alanındaki ilk adımını oluşturdu."
        },
        {
          "id": 7,
          "year": "2000",
          "description": "ALKAN Tekstil Promosyonu ile promosyon tekstili alanına giriş yapıldı. Kurumsal firmalar, organizasyonlar ve farklı sektörlerin tekstil ihtiyaçlarına yönelik üretim ve tedarik yapısı geliştirildi."
        },
        {
          "id": 8,
          "year": "2010",
          "description": "Tedarik yapısını güçlendirmek ve Asya pazarındaki gelişmeleri yakından takip etmek amacıyla Çin'de tedarik ofisi açıldı."
        },
        {
          "id": 9,
          "year": "2012",
          "description": "ALK bünyesinde Nordbron markası hayata geçirildi ve grubun kendi markalarıyla uluslararası pazarlardaki büyümesi güçlendirildi."
        },
        {
          "id": 10,
          "year": "2015",
          "description": "Almanya merkezli yapılanma ile ALK Group'un Avrupa operasyonları, lojistik ve uluslararası ticaret altyapısı güçlendirildi."
        },
        {
          "id": 11,
          "year": "2021",
          "description": "Personel kıyafetleri ve profesyonel iş giyimi alanındaki deneyim SUW markası altında yeni bir yapıya dönüştürüldü. Kalite, işlevsellik ve zamanında teslimat yaklaşımı SUW'un temelini oluşturdu."
        }
      ]
    },
    "why": {
      "eyebrow": "NEDEN SUW?",
      "title": "NEDEN SUW?",
      "description": "",
      "items": [
        {
          "id": 1,
          "title": "KALİTE VE MARKA",
          "description": "SUW markamız ile, mevcut değerlerinize yenilerini ekleyerek markanızı daha da güçlendiririz."
        },
        {
          "id": 2,
          "title": "TASARIM VE KONFOR",
          "description": "Çalışanlarınızın konforunu ön planda tutarak, işlevsel ve şık kıyafetlerle kurumunuzun imajını zirveye taşırız."
        },
        {
          "id": 3,
          "title": "GÜVENİLİR DESTEK",
          "description": "İş ahlakına sadık kalarak, satış öncesi ve sonrasında güvenilir iletişim ve üstün destek hizmetiyle yanınızda oluruz."
        },
        {
          "id": 4,
          "title": "GENİŞ ÜRÜN AĞI",
          "description": "Geniş ürün yelpazesi ve ulusal-uluslararası tedarik ağıyla, ihtiyaçlarınıza en uygun çözümleri sunarız."
        },
        {
          "id": 5,
          "title": "TESLİMAT VE HİZMET",
          "description": "Zamanında teslimat, yüksek kaliteli ürünler ve rekabetçi fiyatlarla mükemmel hizmet alırsınız."
        }
      ]
    },
    "cta": {
      "eyebrow": "",
      "title": "TECRÜBEYİ SAHAYA TAŞIYORUZ",
      "description": "",
      "text": "",
      "link": ""
    }
  },
  "en": {
    "hero": {
      "eyebrow": "ABOUT SUW",
      "title": "BUILT ONEXPERIENCE.",
      "description": "SUW is a professional workwear brand built on ALK Group's established expertise in textiles and manufacturing, creating solutions that unite corporate identity, employee comfort and working conditions."
    },
    "history_hero": {
      "title": "SINCE 1978",
      "description": "What began with the production of hats, beanies, scarves and gloves has grown into a strong, multi-brand group operating on an international scale.",
      "image": mediaAsset("corporate/history-hero/00d03bd2027c41be8661f2c865a944d9.jpg"),
      "image_mobile": mediaAsset("corporate/history-hero/00d03bd2027c41be8661f2c865a944d9.jpg")
    },
    "group": {
      "eyebrow": "",
      "title": "MANUFACTURING EXPERTISE SINCE 1978.",
      "description": "",
      "supporting_label": "",
      "image": mediaAsset("corporate/group/28f59a267b564423b70dd60af0769cfb.jpg"),
      "image_mobile": null,
      "image_position": "center",
      "collage_image": mediaAsset("corporate/archive/779e0408b9b14da69431959fd4ba1571.jpg"),
      "collage_image_mobile": mediaAsset("corporate/archive/779e0408b9b14da69431959fd4ba1571.jpg")
    },
    "video": {
      "title": "THE EXPERIENCE BEHIND PRODUCTION.",
      "description": "SUW draws strength from ALK Group's manufacturing experience dating back to 1978. By managing product development, production, quality control and supply processes within a single structure, we provide corporate clients with end-to-end solutions.",
      "video": null,
      "poster": null,
      "is_active": false
    },
    "timeline": {
      "title": "OUR STORY",
      "description": "",
      "items": [
        {
          "id": 1,
          "year": "1978",
          "description": "The journey began with a small hat shop in Eminönü, marking ALK Group's first step into the textile industry."
        },
        {
          "id": 7,
          "year": "2000",
          "description": "ALKAN Tekstil Promosyonu marked the group's entry into promotional textiles, establishing a production and sourcing structure for corporate clients, organizations and diverse industries."
        },
        {
          "id": 8,
          "year": "2010",
          "description": "A sourcing office was opened in China to strengthen the supply network and stay closely connected to developments across Asian markets."
        },
        {
          "id": 9,
          "year": "2012",
          "description": "Nordbron was launched within ALK, accelerating the group's international growth through its own brands."
        },
        {
          "id": 10,
          "year": "2015",
          "description": "A Germany-based organization strengthened ALK Group's European operations, logistics capabilities and international trade infrastructure."
        },
        {
          "id": 11,
          "year": "2021",
          "description": "Expertise in staff uniforms and professional workwear evolved into a new structure under the SUW brand, founded on quality, functionality and reliable on-time delivery."
        }
      ]
    },
    "why": {
      "eyebrow": "WHY SUW?",
      "title": "WHY SUW?",
      "description": "",
      "items": [
        {
          "id": 1,
          "title": "QUALITY AND BRAND",
          "description": "With SUW, we strengthen your brand further by adding new value to what you already stand for."
        },
        {
          "id": 2,
          "title": "DESIGN AND COMFORT",
          "description": "By putting your employees’ comfort first, we elevate your corporate image with functional and stylish clothing."
        },
        {
          "id": 3,
          "title": "RELIABLE SUPPORT",
          "description": "Staying true to sound business ethics, we stand by you with reliable communication and outstanding support before and after every sale."
        },
        {
          "id": 4,
          "title": "BROAD PRODUCT NETWORK",
          "description": "With a broad product range and a national and international supply network, we provide the solutions best suited to your needs."
        },
        {
          "id": 5,
          "title": "DELIVERY AND SERVICE",
          "description": "You receive excellent service through on-time delivery, high-quality products and competitive pricing."
        }
      ]
    },
    "cta": {
      "eyebrow": "",
      "title": "BRINGING EXPERIENCE TO THE FIELD",
      "description": "",
      "text": "",
      "link": ""
    }
  }
} as Record<SupportedLocale, CorporatePageResponse["page"]>;
export const staticCorporateMetadata = {
  "tr": {
    "meta_title": "SUW Hakkında | 1978'den Gelen Tekstil Deneyimi",
    "meta_description": "SUW, 1978'den gelen tekstil üretimi, ürün geliştirme ve uluslararası operasyon deneyimini profesyonel iş giyimi çözümlerine taşır."
  },
  "en": {
    "meta_title": "About SUW | Textile Experience Since 1978",
    "meta_description": "SUW brings textile manufacturing, product development and international operations experience dating back to 1978 into professional workwear solutions."
  }
} as Record<SupportedLocale, { meta_title: string; meta_description: string }>;
export const staticProjectsSnapshot = {
  "tr": {
    "hero_eyebrow": "",
    "hero_title": "SUW SAHADA",
    "hero_description": "",
    "seo_title": "Sektörlere Özel İş Giyimi Projeleri | SUW",
    "seo_description": "Endüstri, lojistik, inşaat, otomotiv, perakende ve kurumsal ekipler için geliştirilen SUW profesyonel iş giyimi projelerini inceleyin.Kurumsal ekipler, saha operasyonları ve özel ihtiyaçlar için geliştirilen seçili SUW iş giyimi projelerini keşfedin.",
    "sectors": [
      {
        "id": 1,
        "title": "TARIM, HAYVANCILIK & TARIM TEKNOLOJİLERİ",
        "headline": "HER MEVSİMDE HER KOŞULDA YANINIZDA",
        "description": "Sektörde kullanılan promosyon odaklı ya da personel kıyafeti projelerinize kalıcı çözümler üretiyoruz.",
        "product_groups": [
          "Mont",
          "Yelek",
          "Pantolon",
          "T-Shirt",
          "Sweatshirt"
        ],
        "image": mediaAsset("projects/sectors/841a6e4c6fc04bda982a83f26cf29d24.png"),
        "image_mobile": null
      },
      {
        "id": 2,
        "title": "GIDA & SAĞLIK",
        "headline": "HER İŞTE HİJYEN HER ADIMDA KONFOR",
        "description": "Konforu, kullanım kolaylığını ve sektörün ihtiyaçlarını göz önünde bulundurarak hazırlanan ürünlerimizle tekstil çözümleri sunuyoruz.",
        "product_groups": [
          "Yelek",
          "Softshell",
          "Pantolon",
          "Polar",
          "Yağmurluk"
        ],
        "image": mediaAsset("projects/sectors/da0c4979d30b4956886d14ddb17441fa.png"),
        "image_mobile": null
      },
      {
        "id": 3,
        "title": "İNŞAAT & HIRDAVAT",
        "headline": "ZORLU KOŞULLARA, DOĞRU KORUMA.",
        "description": "Değişken hava, yoğun hareket ve teknik saha ihtiyaçları için katmanlı ve işlevsel iş kıyafetleri çözümleri.",
        "product_groups": [
          "Mont",
          "Softshell",
          "Tulum",
          "Pantolon",
          "Yağmurluk"
        ],
        "image": mediaAsset("projects/sectors/16a06b11735e4f9699493f27a90418df.png"),
        "image_mobile": null
      },
      {
        "id": 4,
        "title": "OTOMOTİV & SERVİS",
        "headline": "ÜRETİM VE OPERASYONLAR İÇİN TASARLIYORUZ",
        "description": "Üretim, depolama, sevkiyat ve pazarlamanın yoğun temposuna uyum sağlayan, yüksek görünürlüklü ve dayanıklı ürünler üretiyoruz.",
        "product_groups": [
          "Tulum",
          "Ceket",
          "Pantolon",
          "T-Shirt",
          "Sweatshirt"
        ],
        "image": mediaAsset("projects/sectors/a3a3e49a73d84eb28a8f2ba4ee3d5a66.png"),
        "image_mobile": null
      },
      {
        "id": 5,
        "title": "STK, SAVUNMA SANAYİ & KAMU KURUMLARI",
        "headline": "HİZMETİN GÜCÜNE UYGUN",
        "description": "Kurumsal düzeni bozmadan, hizmetteki konforunuzu sağlıyoruz.",
        "product_groups": [
          "Gömlek",
          "T-Shirt",
          "Sweatshirt",
          "Önlük",
          "Yelek"
        ],
        "image": mediaAsset("projects/sectors/9066f8a4313a40cb960f42f88b88d7ee.png"),
        "image_mobile": null
      },
      {
        "id": 6,
        "title": "AJANS & PROMOSYON",
        "headline": "MARKANIZ SİZDEN BİR İZ TAŞIR",
        "description": "Kurumsal etkinlikler ve promosyon projeleri için marka kimliğine göre özelleştirilen tekstil ürünleri.",
        "product_groups": [
          "T-Shirt",
          "Sweatshirt",
          "Şapka",
          "Çanta",
          "Aksesuar"
        ],
        "image": mediaAsset("projects/sectors/e3b2a7ee633f4371989e4dcb491129c9.png"),
        "image_mobile": null
      }
    ]
  },
  "en": {
    "hero_eyebrow": "",
    "hero_title": "SUW IN THE FIELD",
    "hero_description": "",
    "seo_title": "Workwear Projects for Different Industries | SUW",
    "seo_description": "Explore SUW professional workwear projects developed for industry, logistics, construction, automotive, retail and corporate teams.",
    "sectors": [
      {
        "id": 1,
        "title": "AGRICULTURE, LIVESTOCK & AGRITECH",
        "headline": "BY YOUR SIDE IN EVERY SEASON, IN EVERY CONDITION",
        "description": "We deliver lasting solutions for your promotional and staff apparel projects across the industry.",
        "product_groups": [
          "Jackets",
          "Vests",
          "Trousers",
          "T-Shirts",
          "Sweatshirts"
        ],
        "image": mediaAsset("projects/sectors/841a6e4c6fc04bda982a83f26cf29d24.png"),
        "image_mobile": null
      },
      {
        "id": 2,
        "title": "FOOD & HEALTH",
        "headline": "HYGIENE IN EVERY TASK, COMFORT IN EVERY STEP",
        "description": "We provide textile solutions with products designed around comfort, ease of use, and the specific needs of the industry.",
        "product_groups": [
          "Vests",
          "Softshell",
          "Trousers",
          "Fleece",
          "Rainwear"
        ],
        "image": mediaAsset("projects/sectors/da0c4979d30b4956886d14ddb17441fa.png"),
        "image_mobile": null
      },
      {
        "id": 3,
        "title": "CONSTRUCTION & HARDWARE",
        "headline": "THE RIGHT PROTECTIONFOR DEMANDING CONDITIONS.",
        "description": "Layered and functional workwear solutions designed for changing weather conditions, intensive movement, and technical field requirements.",
        "product_groups": [
          "Jackets",
          "Softshell",
          "Coveralls",
          "Trousers",
          "Rainwear"
        ],
        "image": mediaAsset("projects/sectors/16a06b11735e4f9699493f27a90418df.png"),
        "image_mobile": null
      },
      {
        "id": 4,
        "title": "AUTOMOTIVE & SERVICE",
        "headline": "DESIGNED FOR PRODUCTION AND OPERATIONS",
        "description": "We produce high-visibility and durable products designed to keep up with the fast pace of production, warehousing, shipping, and marketing.",
        "product_groups": [
          "Coveralls",
          "Jackets",
          "Trousers",
          "T-Shirts",
          "Sweatshirts"
        ],
        "image": mediaAsset("projects/sectors/a3a3e49a73d84eb28a8f2ba4ee3d5a66.png"),
        "image_mobile": null
      },
      {
        "id": 5,
        "title": "NGOs, DEFENSE INDUSTRY & PUBLIC INSTITUTIONS",
        "headline": "MATCHING THE STRENGTH OF SERVICE",
        "description": "We ensure your comfort at work without compromising corporate standards.",
        "product_groups": [
          "Shirts",
          "T-Shirts",
          "Sweatshirts",
          "Aprons",
          "Vests"
        ],
        "image": mediaAsset("projects/sectors/9066f8a4313a40cb960f42f88b88d7ee.png"),
        "image_mobile": null
      },
      {
        "id": 6,
        "title": "AGENCY & PROMOTIONAL PRODUCTS",
        "headline": "YOUR BRAND CARRIES A PART OF YOU",
        "description": "Textile products customized to your brand identity for corporate events and promotional projects.",
        "product_groups": [
          "T-Shirts",
          "Sweatshirts",
          "Caps",
          "Bags",
          "Accessories"
        ],
        "image": mediaAsset("projects/sectors/e3b2a7ee633f4371989e4dcb491129c9.png"),
        "image_mobile": null
      }
    ]
  }
} as Record<SupportedLocale, ProjectsPageResponse>;
export const staticContactSnapshot = {
  "tr": {
    "hero_title": "PROJENİZİ KONUŞALIM",
    "map_embed_url": "",
    "info_title": "SUW",
    "info_description": "Profesyonel iş giyim çözümleri, özel ürün geliştirme ve kurumsal projeleriniz için bizimle iletişime geçin.",
    "info_image": null,
    "phone": "444 10 47",
    "email": "info@suw.com.tr",
    "address": "Yenidoğan, Merve Mahallesi Akabe Cad. No:16/1  Sancaktepe - İstanbul\r\n34791",
    "form_title": "Bize Anlatın",
    "kvkk_text": "",
    "form_eyebrow": "",
    "form_left_title": "BİR PROJE BAŞLATALIM",
    "form_left_description": "Profesyonel iş kıyafeti, özel ürün geliştirme, promosyon tekstil projeleri ve kurumsal projeleriniz için bizimle iletişime geçin",
    "form_right_eyebrow": "",
    "form_right_title": "",
    "form_copy": {
      "submit_label": "MESAJI GÖNDER",
      "submitting_label": "GÖNDERİLİYOR...",
      "privacy_link_label": "Gizlilik Bildirimi",
      "feedback_success_message": "Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.",
      "feedback_error_message": "Bir sorun oluştu. Lütfen tekrar deneyin.",
      "fields": {
        "first_name": "Ad",
        "last_name": "Soyad",
        "email": "E-posta",
        "phone": "Telefon",
        "subject": "Konu",
        "message": "Mesaj"
      },
      "placeholders": {
        "first_name": "Adınızı giriniz",
        "last_name": "Soyadınızı giriniz",
        "email": "E-posta adresiniz",
        "phone": "Telefon Numaranız",
        "subject": "Proje konusu",
        "message": "Projeniz hakkında bize bilgi verin"
      }
    },
    "newsletter_title": "",
    "newsletter_placeholder": "",
    "newsletter_submit_aria_label": "",
    "newsletter_success_message": "",
    "newsletter_error_message": "",
    "gallery_images": [],
    "activities": [],
    "join_label": "KARİYER",
    "join_title": "EKİBİMİZE KATILIN.",
    "join_description": "Profesyonel çalışma ortamımızda bizimle birlikte gelişmek ve kariyer fırsatlarımızı keşfetmek için başvurun.",
    "join_button_text": "AÇIK POZİSYONLAR",
    "join_button_url": "",
    "meta_title": "",
    "meta_description": ""
  },
  "en": {
    "hero_title": "LET’S TALK ABOUT YOUR PROJECT",
    "map_embed_url": "",
    "info_title": "SUW",
    "info_description": "Contact us for professional workwear solutions, custom product development and corporate projects.",
    "info_image": null,
    "phone": "444 10 47",
    "email": "info@suw.com.tr",
    "address": "Yenidoğan, Merve Mahallesi Akabe Cad. No:16/1  Sancaktepe - İstanbul\r\n34791",
    "form_title": "Tell Us About Your Project",
    "kvkk_text": "",
    "form_eyebrow": "",
    "form_left_title": "LET’S START A PROJECT",
    "form_left_description": "Contact us for professional workwear, custom product development, promotional textile projects, and tailored corporate solutions.",
    "form_right_eyebrow": "",
    "form_right_title": "",
    "form_copy": {
      "submit_label": "SEND MESSAGE",
      "submitting_label": "SENDING...",
      "privacy_link_label": "Privacy Notice",
      "feedback_success_message": "Your message has been received. We'll get back to you as soon as possible.",
      "feedback_error_message": "Something went wrong. Please try again.",
      "fields": {
        "first_name": "FIRST NAME",
        "last_name": "LAST NAME",
        "email": "EMAIL",
        "phone": "PHONE",
        "subject": "SUBJECT",
        "message": "MESSAGE"
      },
      "placeholders": {
        "first_name": "Your First Name",
        "last_name": "Your Last Name",
        "email": "Your email address",
        "phone": "Your phone number",
        "subject": "Project subject",
        "message": "Tell us about your project"
      }
    },
    "newsletter_title": "",
    "newsletter_placeholder": "",
    "newsletter_submit_aria_label": "",
    "newsletter_success_message": "",
    "newsletter_error_message": "",
    "gallery_images": [],
    "activities": [],
    "join_label": "CAREER",
    "join_title": "JOIN OUR TEAM.",
    "join_description": "Explore career opportunities and become part of our professional workwear team.",
    "join_button_text": "VIEW OPEN POSITIONS",
    "join_button_url": "",
    "meta_title": "",
    "meta_description": ""
  }
} as Record<SupportedLocale, ContactPageResponse>;

const staticSiteSettingsSnapshot = {
  "tr": {
    "font_family": "krub",
    "logo": null,
    "phone": "444 10 47",
    "fax": "0216 422 35 49",
    "email": "info@suw.com.tr",
    "address": "Yenidoğan, Merve Mahallesi Akabe Cad. No:16 Sancaktepe - İstanbul",
    "latitude": null,
    "longitude": null,
    "contact_section_eyebrow": "",
    "contact_section_title": "",
    "contact_section_description": "",
    "google_maps_url": "",
    "apple_maps_url": "",
    "yandex_maps_url": "",
    "footer_title": "ALK dünyasından haberdar olun",
    "footer_newsletter_title": "E-bülten",
    "footer_newsletter_placeholder": "E-posta adresiniz",
    "footer_newsletter_consent_text": "E-posta adresimin ALK Group tarafından tanıtım ve bilgilendirme amaçlı kullanılmasını kabul ediyorum.",
    "footer_newsletter_consent_link_text": "Kişisel verilerin korunması",
    "footer_contact_title": "İletişim",
    "footer_navigation_title": "Keşfet",
    "footer_social_title": "Bizi takip edin",
    "footer_address_label": "Adres",
    "copyright_text": "© ALK Group. Tüm hakları saklıdır.",
    "instagram": "https://www.instagram.com/suwworkwear/",
    "linkedin": "https://tr.linkedin.com/company/alk-group",
    "facebook": "",
    "twitter": "",
    "youtube": "",
    "whatsapp": "",
    "header_nav": [
      {
        "id": 1,
        "location": "header",
        "label": "Ana Sayfa",
        "url": "/",
        "is_external": false
      },
      {
        "id": 2,
        "location": "header",
        "label": "Ürünler",
        "url": "/products",
        "is_external": false
      },
      {
        "id": 3,
        "location": "header",
        "label": "Sektörler",
        "url": "/industries",
        "is_external": false
      },
      {
        "id": 4,
        "location": "header",
        "label": "Çözümler",
        "url": "/solutions",
        "is_external": false
      },
      {
        "id": 5,
        "location": "header",
        "label": "Projeler",
        "url": "/projects",
        "is_external": false
      },
      {
        "id": 6,
        "location": "header",
        "label": "Hakkımızda",
        "url": "/about",
        "is_external": false
      },
      {
        "id": 7,
        "location": "header",
        "label": "İletişim",
        "url": "/contact",
        "is_external": false
      }
    ],
    "footer_nav": [
      {
        "id": 8,
        "location": "footer",
        "label": "Kurumsal",
        "url": "/corporate",
        "is_external": false
      },
      {
        "id": 9,
        "location": "footer",
        "label": "Markalar",
        "url": "/brands",
        "is_external": false
      },
      {
        "id": 10,
        "location": "footer",
        "label": "Haberler",
        "url": "/news",
        "is_external": false
      },
      {
        "id": 11,
        "location": "footer",
        "label": "İletişim",
        "url": "/contact",
        "is_external": false
      },
      {
        "id": 12,
        "location": "footer",
        "label": "Gizlilik ve Çerez",
        "url": "/legal/privacy-and-cookie-policy",
        "is_external": false
      },
      {
        "id": 13,
        "location": "footer",
        "label": "Aydınlatma ve Rıza",
        "url": "/legal/disclosure-and-consent",
        "is_external": false
      },
      {
        "id": 14,
        "location": "footer",
        "label": "Çalışan Adayı Aydınlatma Metni",
        "url": "/legal/candidate-privacy-notice",
        "is_external": false
      }
    ],
    "header_copy": {
      "home_aria_label": "Ana sayfaya git",
      "desktop_nav_aria_label": "Ana navigasyon",
      "mobile_nav_aria_label": "Mobil navigasyon",
      "locale_button_aria_label_prefix": "Site dilini seçin:",
      "mobile_menu_aria_label": "Menüyü aç veya kapat"
    },
    "footer_copy": {
      "home_aria_label": "Ana sayfaya git",
      "back_to_top_aria_label": "Sayfanın başına dön",
      "newsletter_submit_aria_label": "Bültene kaydol",
      "newsletter_success_message": "Kaydınız alındı.",
      "newsletter_error_message": "Bir sorun oluştu. Lütfen tekrar deneyin.",
      "contact_labels": {
        "phone": "Telefon",
        "fax": "Faks",
        "email": "E-posta",
        "whatsapp": "WhatsApp"
      },
      "social_labels": {
        "instagram": "Instagram",
        "linkedin": "LinkedIn",
        "facebook": "Facebook",
        "x": "X",
        "youtube": "YouTube"
      }
    },
    "not_found_copy": {
      "title": "Sayfa bulunamadı",
      "description": "Aradığınız sayfa taşınmış veya kaldırılmış olabilir.",
      "primary_button_text": "Ana sayfa",
      "secondary_button_text": "İletişim"
    }
  },
  "en": {
    "font_family": "krub",
    "logo": null,
    "phone": "444 10 47",
    "fax": "0216 422 35 49",
    "email": "info@suw.com.tr",
    "address": "Yenidoğan, Merve District Akabe Ave. No:16 Sancaktepe - Istanbul",
    "latitude": null,
    "longitude": null,
    "contact_section_eyebrow": "",
    "contact_section_title": "",
    "contact_section_description": "",
    "google_maps_url": "",
    "apple_maps_url": "",
    "yandex_maps_url": "",
    "footer_title": "Stay in touch with ALK",
    "footer_newsletter_title": "Newsletter",
    "footer_newsletter_placeholder": "Your email address",
    "footer_newsletter_consent_text": "I agree that my email address may be used by ALK Group for promotional and informational purposes.",
    "footer_newsletter_consent_link_text": "Personal data protection",
    "footer_contact_title": "Contact",
    "footer_navigation_title": "Explore",
    "footer_social_title": "Follow us",
    "footer_address_label": "Address",
    "copyright_text": "© ALK Group. All rights reserved.",
    "instagram": "https://www.instagram.com/suwworkwear/",
    "linkedin": "https://tr.linkedin.com/company/alk-group",
    "facebook": "",
    "twitter": "",
    "youtube": "",
    "whatsapp": "",
    "header_nav": [
      {
        "id": 1,
        "location": "header",
        "label": "Home",
        "url": "/",
        "is_external": false
      },
      {
        "id": 2,
        "location": "header",
        "label": "Products",
        "url": "/products",
        "is_external": false
      },
      {
        "id": 3,
        "location": "header",
        "label": "Industries",
        "url": "/industries",
        "is_external": false
      },
      {
        "id": 4,
        "location": "header",
        "label": "Solutions",
        "url": "/solutions",
        "is_external": false
      },
      {
        "id": 5,
        "location": "header",
        "label": "Projects",
        "url": "/projects",
        "is_external": false
      },
      {
        "id": 6,
        "location": "header",
        "label": "About",
        "url": "/about",
        "is_external": false
      },
      {
        "id": 7,
        "location": "header",
        "label": "Contact",
        "url": "/contact",
        "is_external": false
      }
    ],
    "footer_nav": [
      {
        "id": 8,
        "location": "footer",
        "label": "Corporate",
        "url": "/corporate",
        "is_external": false
      },
      {
        "id": 9,
        "location": "footer",
        "label": "Brands",
        "url": "/brands",
        "is_external": false
      },
      {
        "id": 10,
        "location": "footer",
        "label": "News",
        "url": "/news",
        "is_external": false
      },
      {
        "id": 11,
        "location": "footer",
        "label": "Contact",
        "url": "/contact",
        "is_external": false
      },
      {
        "id": 12,
        "location": "footer",
        "label": "Privacy & Cookies",
        "url": "/legal/privacy-and-cookie-policy",
        "is_external": false
      },
      {
        "id": 13,
        "location": "footer",
        "label": "Disclosure and Consent",
        "url": "/legal/disclosure-and-consent",
        "is_external": false
      },
      {
        "id": 14,
        "location": "footer",
        "label": "Candidate Privacy Notice",
        "url": "/legal/candidate-privacy-notice",
        "is_external": false
      }
    ],
    "header_copy": {
      "home_aria_label": "Go to home page",
      "desktop_nav_aria_label": "Main navigation",
      "mobile_nav_aria_label": "Mobile navigation",
      "locale_button_aria_label_prefix": "Choose site language:",
      "mobile_menu_aria_label": "Open or close menu"
    },
    "footer_copy": {
      "home_aria_label": "Go to home page",
      "back_to_top_aria_label": "Back to top",
      "newsletter_submit_aria_label": "Subscribe to newsletter",
      "newsletter_success_message": "You have been subscribed.",
      "newsletter_error_message": "Something went wrong. Please try again.",
      "contact_labels": {
        "phone": "Phone",
        "fax": "Fax",
        "email": "E-mail",
        "whatsapp": "WhatsApp"
      },
      "social_labels": {
        "instagram": "Instagram",
        "linkedin": "LinkedIn",
        "facebook": "Facebook",
        "x": "X",
        "youtube": "YouTube"
      }
    },
    "not_found_copy": {
      "title": "Page not found",
      "description": "The page you are looking for may have been moved or removed.",
      "primary_button_text": "Home",
      "secondary_button_text": "Contact"
    }
  }
} as Record<SupportedLocale, SiteSettingsResponse>;

export function applyStaticSiteSettings(locale: SupportedLocale, base: SiteSettingsResponse): SiteSettingsResponse {
  const snapshot = staticSiteSettingsSnapshot[locale];
  return {
    ...base,
    ...snapshot,
    header_copy: { ...base.header_copy, ...snapshot.header_copy },
    footer_copy: {
      ...base.footer_copy,
      ...snapshot.footer_copy,
      contact_labels: { ...base.footer_copy.contact_labels, ...snapshot.footer_copy.contact_labels },
      social_labels: { ...base.footer_copy.social_labels, ...snapshot.footer_copy.social_labels },
    },
    not_found_copy: { ...base.not_found_copy, ...snapshot.not_found_copy },
  };
}
