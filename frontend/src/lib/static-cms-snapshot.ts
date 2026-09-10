import type {
  ContactPageResponse,
  CorporatePageResponse,
  HomePageResponse,
  ProjectsPageResponse,
  SiteSettingsResponse,
} from "@/src/lib/api-types";
import type { SupportedLocale } from "@/src/lib/locale";
import { resolvePublicAssetPath } from "@/src/lib/assets";

const asset = (path: string) => resolvePublicAssetPath(`/images/cms-snapshot/${path}`);

const homeItems = [
  { id: 1, image: asset("home/work-essentials/3118d6c43be04783a95cf6aeed1fc787.jpeg"), alt: "", link: "", sort_order: 0 },
  { id: 3, image: asset("home/work-essentials/a403030b0be749248a081c7c7b49f6cb.png"), alt: "", link: "", sort_order: 0 },
];

export const staticHomeSnapshot: Record<SupportedLocale, Partial<HomePageResponse>> = {
  tr: {
    hero_title: "GEÇMİŞİN İZLERİ İLE ZAMANIN İÇİNDEN GELECEĞE...", hero_subtitle: "", hero_description: "", hero_image: null, hero_image_mobile: null,
    product_categories_eyebrow: "", product_categories_title: "HER SEKTÖR İÇİN TASARLANDI", product_categories_description: "",
    work_essentials_eyebrow: "", work_essentials_title: "ÜRÜNLERİMİZİ YAKINDAN KEŞFEDİN", work_essentials_description: "", work_essentials_cta_text: "ÜRÜNLERİ KEŞFET", work_essentials_cta_link: "/products", work_essentials_items: homeItems,
    corporate_workwear_eyebrow: "", corporate_workwear_title: "MARKANIZ,  KİMLİĞİNİZ", corporate_workwear_description: "", corporate_workwear_personnel_title: "", corporate_workwear_personnel_description: "", corporate_workwear_personnel_image: asset("home/corporate-workwear/0ff365bf30d6400cbe404a3a2dc8a673.jpg"), corporate_workwear_promo_title: "", corporate_workwear_promo_description: "", corporate_workwear_promo_image: null, corporate_workwear_cta_text: "", corporate_workwear_cta_link: "",
    production_insights_eyebrow: "", production_insights_title: "SUW İLE FİKİRDEN TESLİMATA", production_insights_description: "", production_insight_items: [{ id: 1, image: asset("home/production-insights/55a09e0514cb4b5b85dd48d629bbfd63.png"), title: "KUMAŞ SEÇİMİ", short_description: "", detail_text: "", sort_order: 0 }],
    final_cta: { title: "PROJENİZİ BİRLİKTE GELİŞTİRELİM", description: "Personelinizle ilgili projelerinizi, bayi ya da müşterilerinize yöönelik promosyon tekstil projelerinizi ekibimizle birlikte oluşturalım.", text: "PROJE BAŞLAT", bottom_label: "", link: "/contact" }, meta_title: "", meta_description: "",
  },
  en: {
    hero_title: "From within time, carrying the traces of the past into the future...", hero_subtitle: "PROFESSIONAL WORKWEAR", hero_description: "", hero_image: null, hero_image_mobile: null,
    product_categories_eyebrow: "", product_categories_title: "BUILT FOR EVERY JOB.", product_categories_description: "",
    work_essentials_eyebrow: "", work_essentials_title: "EXPLORE WORKWEAR IN DETAIL.", work_essentials_description: "", work_essentials_cta_text: "EXPLORE PRODUCTS", work_essentials_cta_link: "/products", work_essentials_items: homeItems,
    corporate_workwear_eyebrow: "", corporate_workwear_title: "YOUR WORKWEAR, YOUR IDENTITY.", corporate_workwear_description: "", corporate_workwear_personnel_title: "", corporate_workwear_personnel_description: "", corporate_workwear_personnel_image: asset("home/corporate-workwear/0ff365bf30d6400cbe404a3a2dc8a673.jpg"), corporate_workwear_promo_title: "", corporate_workwear_promo_description: "", corporate_workwear_promo_image: null, corporate_workwear_cta_text: "", corporate_workwear_cta_link: "",
    production_insights_eyebrow: "", production_insights_title: "GREAT WORKWEAR STARTS WITH THE DETAILS.", production_insights_description: "", production_insight_items: [{ id: 1, image: asset("home/production-insights/55a09e0514cb4b5b85dd48d629bbfd63.png"), title: "FABRIC SELECTION", short_description: "", detail_text: "", sort_order: 0 }],
    final_cta: { title: "LET'S BUILD YOUR PROJECT", description: "Let us collaborate with your team to develop projects involving your staff, as well as promotional textile projects aimed at your dealers or customers.", text: "START A PROJECT", bottom_label: "", link: "/contact" }, meta_title: "", meta_description: "",
  },
};

const timelineTr = [
  [1, "1978", "Eminönü'nde küçük bir şapka mağazasıyla başlayan yolculuk, ALK Group'un tekstil alanındaki ilk adımını oluşturdu."],
  [7, "2000", "ALKAN Tekstil Promosyonu ile promosyon tekstili alanına giriş yapıldı. Kurumsal firmalar, organizasyonlar ve farklı sektörlerin tekstil ihtiyaçlarına yönelik üretim ve tedarik yapısı geliştirildi."],
  [8, "2010", "Tedarik yapısını güçlendirmek ve Asya pazarındaki gelişmeleri yakından takip etmek amacıyla Çin'de tedarik ofisi açıldı."],
  [9, "2012", "ALK bünyesinde Nordbron markası hayata geçirildi ve grubun kendi markalarıyla uluslararası pazarlardaki büyümesi güçlendirildi."],
  [10, "2015", "Almanya merkezli yapılanma ile ALK Group'un Avrupa operasyonları, lojistik ve uluslararası ticaret altyapısı güçlendirildi."],
  [11, "2021", "Personel kıyafetleri ve profesyonel iş giyimi alanındaki deneyim SUW markası altında yeni bir yapıya dönüştürüldü. Kalite, işlevsellik ve zamanında teslimat yaklaşımı SUW'un temelini oluşturdu."],
] as const;
const timelineEn = [
  [1, "1978", "The journey began with a small hat shop in Eminönü, marking ALK Group's first step into the textile industry."],
  [7, "2000", "ALKAN Tekstil Promosyonu marked the group's entry into promotional textiles, establishing a production and sourcing structure for corporate clients, organizations and diverse industries."],
  [8, "2010", "A sourcing office was opened in China to strengthen the supply network and stay closely connected to developments across Asian markets."],
  [9, "2012", "Nordbron was launched within ALK, accelerating the group's international growth through its own brands."],
  [10, "2015", "A Germany-based organization strengthened ALK Group's European operations, logistics capabilities and international trade infrastructure."],
  [11, "2021", "Expertise in staff uniforms and professional workwear evolved into a new structure under the SUW brand, founded on quality, functionality and reliable on-time delivery."],
] as const;
const whyTr = [
  ["KALİTE VE MARKA", "SUW markamız ile, mevcut değerlerinize yenilerini ekleyerek markanızı daha da güçlendiririz."],
  ["TASARIM VE KONFOR", "Çalışanlarınızın konforunu ön planda tutarak, işlevsel ve şık kıyafetlerle kurumunuzun imajını zirveye taşırız."],
  ["GÜVENİLİR DESTEK", "İş ahlakına sadık kalarak, satış öncesi ve sonrasında güvenilir iletişim ve üstün destek hizmetiyle yanınızda oluruz."],
  ["GENİŞ ÜRÜN AĞI", "Geniş ürün yelpazesi ve ulusal-uluslararası tedarik ağıyla, ihtiyaçlarınıza en uygun çözümleri sunarız."],
  ["TESLİMAT VE HİZMET", "Zamanında teslimat, yüksek kaliteli ürünler ve rekabetçi fiyatlarla mükemmel hizmet alırsınız."],
] as const;
const whyEn = [
  ["QUALITY AND BRAND", "With SUW, we strengthen your brand further by adding new value to what you already stand for."],
  ["DESIGN AND COMFORT", "By putting your employees’ comfort first, we elevate your corporate image with functional and stylish clothing."],
  ["RELIABLE SUPPORT", "Staying true to sound business ethics, we stand by you with reliable communication and outstanding support before and after every sale."],
  ["BROAD PRODUCT NETWORK", "With a broad product range and a national and international supply network, we provide the solutions best suited to your needs."],
  ["DELIVERY AND SERVICE", "You receive excellent service through on-time delivery, high-quality products and competitive pricing."],
] as const;

export const staticCorporateSnapshot: Record<SupportedLocale, CorporatePageResponse["page"]> = Object.fromEntries((["tr", "en"] as SupportedLocale[]).map((locale) => {
  const tr = locale === "tr";
  return [locale, {
    hero: { eyebrow: tr ? "" : "ABOUT SUW", title: tr ? "ELLİ YILLIK TECRÜBE" : "BUILT ONEXPERIENCE.", description: tr ? "" : "SUW is a professional workwear brand built on ALK Group's established expertise in textiles and manufacturing, creating solutions that unite corporate identity, employee comfort and working conditions." },
    history_hero: { title: tr ? "50 YILLIK TECRÜBE" : "SINCE 1978", description: tr ? "Şapka, bere, atkı ve eldiven üretimiyle temellerini attığımız tekstil yolculuğumuzu, bugün çok markalı ve uluslararası ölçekte faaliyet gösteren güçlü bir grup yapısıyla sürdürüyoruz." : "What began with the production of hats, beanies, scarves and gloves has grown into a strong, multi-brand group operating on an international scale.", image: asset("corporate/history-hero/00d03bd2027c41be8661f2c865a944d9.jpg"), image_mobile: asset("corporate/history-hero/00d03bd2027c41be8661f2c865a944d9.jpg") },
    group: { eyebrow: "", title: tr ? "78'DEN GELEN ÜRETİM TECRÜBESİ" : "MANUFACTURING EXPERIENCE SINCE 1978.", description: "", supporting_label: "", image: asset("corporate/group/28f59a267b564423b70dd60af0769cfb.jpg"), image_mobile: null, image_position: "center", collage_image: asset("corporate/archive/779e0408b9b14da69431959fd4ba1571.jpg"), collage_image_mobile: asset("corporate/archive/779e0408b9b14da69431959fd4ba1571.jpg") },
    video: { title: tr ? "ÜRETİMİN ARKASINDAKİ DENEYİM." : "THE EXPERIENCE BEHIND PRODUCTION.", description: tr ? "SUW, 1978'den gelen ALK Group üretim deneyiminden güç alır. Ürün geliştirme, üretim, kalite kontrol ve tedarik süreçlerini aynı yapı içerisinde yöneterek kurumsal müşterilere uçtan uca çözümler sunar." : "SUW draws strength from ALK Group's manufacturing experience dating back to 1978. By managing product development, production, quality control and supply processes within a single structure, we provide corporate clients with end-to-end solutions.", video: asset("corporate/video/2ad8b6ec97d44ec9bb2b3807c282d009.mp4"), poster: asset("corporate/video/poster/b32573e97b4943af8eff742c28611209.jpeg"), is_active: true },
    timeline: { title: tr ? "HİKAYEMİZ" : "OUR STORY", description: "", items: (tr ? timelineTr : timelineEn).map(([id, year, description]) => ({ id, year, description })) },
    why: { eyebrow: tr ? "NEDEN SUW?" : "WHY SUW?", title: tr ? "NEDEN SUW?" : "WHY SUW?", description: "", items: (tr ? whyTr : whyEn).map(([title, description], index) => ({ id: index + 1, title, description })) },
    cta: { eyebrow: "", title: tr ? "TECRÜBEYİ SAHAYA TAŞIYORUZ" : "", description: "", text: "", link: "" },
  }];
})) as Record<SupportedLocale, CorporatePageResponse["page"]>;

const projectRows = {
  tr: [
    ["TARIM, HAYVANCILIK & TARIM TEKNOLOJİLERİ", "HER MEVSİMDE HER KOŞULDA YANINIZDA", "Sektörde kullanılan promosyon odaklı ya da personel kıyafeti projelerinize kalıcı çözümler üretiyoruz."],
    ["GIDA & SAĞLIK", "HER İŞTE HİJYEN HER ADIMDA KONFOR", "Konforu, kullanım kolaylığını ve sektörün ihtiyaçlarını göz önünde bulundurarak hazırlanan ürünlerimizle tekstil çözümleri sunuyoruz."],
    ["İNŞAAT & HIRDAVAT", "ZORLU KOŞULLARA, DOĞRU KORUMA.", "Değişken hava, yoğun hareket ve teknik saha ihtiyaçları için katmanlı ve işlevsel iş kıyafetleri çözümleri."],
    ["OTOMOTİV & SERVİS", "ÜRETİM VE OPERASYONLAR İÇİN TASARLIYORUZ", "Üretim, depolama, sevkiyat ve pazarlamanın yoğun temposuna uyum sağlayan, yüksek görünürlüklü ve dayanıklı ürünler üretiyoruz."],
    ["STK, SAVUNMA SANAYİ & KAMU KURUMLARI", "HİZMETİN GÜCÜNE UYGUN", "Kurumsal düzeni bozmadan, hizmetteki konforunuzu sağlıyoruz."],
    ["AJANS & PROMOSYON", "MARKANIZ SİZDEN BİR İZ TAŞIR", "Kurumsal etkinlikler ve promosyon projeleri için marka kimliğine göre özelleştirilen tekstil ürünleri."],
  ],
  en: [
    ["AGRICULTURE, LIVESTOCK & AGRITECH", "BY YOUR SIDE IN EVERY SEASON, IN EVERY CONDITION", "We deliver lasting solutions for your promotional and staff apparel projects across the industry."],
    ["FOOD & HEALTH", "HYGIENE IN EVERY TASK, COMFORT IN EVERY STEP", "We provide textile solutions with products designed around comfort, ease of use, and the specific needs of the industry."],
    ["CONSTRUCTION & HARDWARE", "THE RIGHT PROTECTIONFOR DEMANDING CONDITIONS.", "Layered and functional workwear solutions designed for changing weather conditions, intensive movement, and technical field requirements."],
    ["AUTOMOTIVE & SERVICE", "DESIGNED FOR PRODUCTION AND OPERATIONS", "We produce high-visibility and durable products designed to keep up with the fast pace of production, warehousing, shipping, and marketing."],
    ["NGOs, DEFENSE INDUSTRY & PUBLIC INSTITUTIONS", "MATCHING THE STRENGTH OF SERVICE", "We ensure your comfort at work without compromising corporate standards."],
    ["AGENCY & PROMOTIONAL PRODUCTS", "YOUR BRAND CARRIES A PART OF YOU", "Textile products customized to your brand identity for corporate events and promotional projects."],
  ],
} as const;

export const staticProjectsSnapshot: Record<SupportedLocale, ProjectsPageResponse> = Object.fromEntries((["tr", "en"] as SupportedLocale[]).map((locale) => [locale, {
  hero_eyebrow: "", hero_title: locale === "tr" ? "SUW SAHADA" : "SUW IN THE FIELD", hero_description: "", seo_title: locale === "tr" ? "Projeler" : "Projects", seo_description: locale === "tr" ? "Kurumsal ekipler, saha operasyonları ve özel ihtiyaçlar için geliştirilen seçili SUW iş giyimi projelerini keşfedin." : "Explore selected SUW workwear projects developed for corporate teams, field operations and custom requirements.",
  sectors: projectRows[locale].map(([title, headline, description], index) => ({ id: index + 1, title, headline, description, product_groups: [], image: null, image_mobile: null })),
}])) as unknown as Record<SupportedLocale, ProjectsPageResponse>;

export const staticContactSnapshot: Record<SupportedLocale, ContactPageResponse> = Object.fromEntries((["tr", "en"] as SupportedLocale[]).map((locale) => {
  const tr = locale === "tr";
  return [locale, {
    hero_title: tr ? "PROJENİZİ KONUŞALIM" : "LET'S TALKWORKWEAR.", map_embed_url: "", info_title: "SUW", info_description: tr ? "Profesyonel iş giyim çözümleri, özel ürün geliştirme ve kurumsal projeleriniz için bizimle iletişime geçin." : "Contact us for professional workwear solutions, custom product development and corporate projects.", info_image: null, phone: "444 10 47", email: "info@suw.com.tr", address: "Yenidoğan, Merve Mahallesi Akabe Cad. No:16/1  Sancaktepe - İstanbul\n34791", form_title: "Bize Anlatın", form_left_title: "BİR PROJE BAŞLATALIM", form_left_description: "Profesyonel iş kıyafeti, özel ürün geliştirme, promosyon tekstil projeleri ve kurumsal projeleriniz için bizimle iletişime geçin", kvkk_text: "",
    form_copy: { submit_label: tr ? "MESAJI GÖNDER" : "SEND MESSAGE", submitting_label: tr ? "GÖNDERİLİYOR..." : "SENDING...", privacy_link_label: tr ? "Gizlilik Bildirimi" : "Privacy Notice", feedback_success_message: tr ? "Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz." : "Your message has been received. We'll get back to you as soon as possible.", feedback_error_message: tr ? "Bir sorun oluştu. Lütfen tekrar deneyin." : "Something went wrong. Please try again.", fields: tr ? { first_name: "Ad", last_name: "Soyad", email: "E-posta", phone: "Telefon", subject: "Konu", message: "Mesaj" } : { first_name: "FIRST NAME", last_name: "LAST NAME", email: "EMAIL", phone: "PHONE", subject: "SUBJECT", message: "MESSAGE" }, placeholders: { first_name: "", last_name: "", email: "", phone: "", subject: "", message: "" } },
    newsletter_title: "", newsletter_placeholder: "", newsletter_submit_aria_label: "", newsletter_success_message: "", newsletter_error_message: "", gallery_images: [], activities: [], join_label: tr ? "KARİYER" : "CAREER", join_title: tr ? "EKİBİMİZE KATILIN." : "JOIN OUR TEAM.", join_description: tr ? "Profesyonel çalışma ortamımızda bizimle birlikte gelişmek ve kariyer fırsatlarını keşfetmek için başvurun." : "Explore career opportunities and become part of our professional workwear team.", join_button_text: tr ? "AÇIK POZİSYONLAR" : "VIEW OPEN POSITIONS", join_button_url: "", meta_title: "", meta_description: "",
  }];
})) as unknown as Record<SupportedLocale, ContactPageResponse>;

export function applyStaticSiteSettings(locale: SupportedLocale, base: SiteSettingsResponse): SiteSettingsResponse {
  const tr = locale === "tr";
  return {
    ...base,
    phone: "444 10 47", fax: "0216 422 35 49", email: "info@suw.com.tr", address: tr ? "Yenidoğan, Merve Mahallesi Akabe Cad. No:16 Sancaktepe - İstanbul" : "Yenidoğan, Merve District Akabe Ave. No:16 Sancaktepe - Istanbul",
    instagram: "https://www.instagram.com/suwworkwear/", linkedin: "https://tr.linkedin.com/company/alk-group",
    copyright_text: tr ? "© ALK Group. Tüm hakları saklıdır." : "© ALK Group. All rights reserved.",
    header_nav: (tr ? [["Ana Sayfa", "/"], ["Ürünler", "/products"], ["Projeler", "/projects"], ["Hakkımızda", "/about"], ["İletişim", "/contact"]] : [["Home", "/"], ["Products", "/products"], ["Projects", "/projects"], ["About", "/about"], ["Contact", "/contact"]]).map(([label, url], index) => ({ id: index + 1, location: "header", label, url, is_external: false })),
    footer_nav: [],
    footer_address_label: tr ? "Adres" : "Address",
    footer_copy: { ...base.footer_copy, contact_labels: { phone: tr ? "Telefon" : "Phone", fax: tr ? "Faks" : "Fax", email: tr ? "E-posta" : "E-mail", whatsapp: "WhatsApp" }, social_labels: { ...base.footer_copy.social_labels, instagram: "Instagram", linkedin: "LinkedIn" } },
  };
}
