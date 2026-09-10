import type { Metadata } from "next";

import type { SupportedLocale } from "@/src/lib/locale";
import { createLocalizedPageMetadata } from "@/src/lib/metadata";
import { AboutEditorialSections } from "@/src/components/organisms/about-editorial-sections";
import { createAPI } from "@/src/lib/api";
import type { AboutPageContent, CorporatePageResponse } from "@/src/lib/api-types";

import styles from "./about.module.scss";
import { SuwFinalCtaSection } from "@/src/components/organisms/suw-final-cta-section";
import { resolveFinalCtaHref } from "@/src/lib/final-cta";

type AboutPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

function fallback(locale: SupportedLocale): AboutPageContent {
  const tr = locale === "tr";
  const items = (titles: string[], descriptions: string[]) => titles.map((title, id) => ({ id: id + 1, title, description: descriptions[id] }));
  const whyTitles = tr
    ? ["KALİTE VE MARKA", "TASARIM VE KONFOR", "GÜVENİLİR DESTEK", "GENİŞ ÜRÜN AĞI", "TESLİMAT VE HİZMET"]
    : ["QUALITY AND BRAND", "DESIGN AND COMFORT", "RELIABLE SUPPORT", "BROAD PRODUCT NETWORK", "DELIVERY AND SERVICE"];
  const whyDescriptions = tr
    ? [
        "SUW markamız ile, mevcut değerlerinize yenilerini ekleyerek markanızı daha da güçlendiririz.",
        "Çalışanlarınızın konforunu ön planda tutarak, işlevsel ve şık kıyafetlerle kurumunuzun imajını zirveye taşırız.",
        "İş ahlakına sadık kalarak, satış öncesi ve sonrasında güvenilir iletişim ve üstün destek hizmetiyle yanınızda oluruz.",
        "Geniş ürün yelpazesi ve ulusal-uluslararası tedarik ağıyla, ihtiyaçlarınıza en uygun çözümleri sunarız.",
        "Zamanında teslimat, yüksek kaliteli ürünler ve rekabetçi fiyatlarla mükemmel hizmet alırsınız.",
      ]
    : [
        "With SUW, we strengthen your brand further by adding new value to what you already stand for.",
        "By putting your employees’ comfort first, we elevate your corporate image with functional and stylish clothing.",
        "Staying true to sound business ethics, we stand by you with reliable communication and outstanding support before and after every sale.",
        "With a broad product range and a national and international supply network, we provide the solutions best suited to your needs.",
        "You receive excellent service through on-time delivery, high-quality products and competitive pricing.",
      ];

  return {
    hero: {
      eyebrow: tr ? "SUW HAKKINDA" : "ABOUT SUW",
      title: tr ? "DENEYİM ÜZERİNE\nKURULU." : "BUILT ON\nEXPERIENCE.",
      description: tr ? "SUW, ALK Group'un tekstil ve üretim alanındaki köklü deneyimi üzerine kurulan profesyonel iş giyimi markasıdır." : "SUW is a professional workwear brand built on ALK Group's established textile and manufacturing expertise.",
    },
    history_hero: { title: "", description: "", image: null, image_mobile: null },
    group: {
      eyebrow: tr ? "ALK GROUP BÜNYESİNDE" : "PART OF ALK GROUP",
      title: "",
      description: "",
      supporting_label: tr ? "ALK GROUP BÜNYESİNDE BİR MARKA" : "A BRAND WITHIN ALK GROUP",
      image: null,
      image_mobile: null,
      image_position: "center",
      collage_image: null,
      collage_image_mobile: null,
    },
    video: {
      title: tr ? "ÜRETİMİN ARKASINDAKİ DENEYİM." : "THE EXPERIENCE BEHIND PRODUCTION.",
      description: tr
        ? "SUW, 1978'den gelen ALK Group üretim deneyiminden güç alır. Ürün geliştirme, üretim, kalite kontrol ve tedarik süreçlerini aynı yapı içerisinde yöneterek kurumsal müşterilere uçtan uca çözümler sunar."
        : "SUW draws strength from ALK Group's manufacturing experience dating back to 1978. By managing product development, production, quality control and supply processes within a single structure, we provide corporate clients with end-to-end solutions.",
      video: null,
      poster: null,
      is_active: true,
    },
    timeline: {
      title: "",
      description: "",
      items: (tr
        ? [
            ["1978", "Eminönü'nde küçük bir şapka mağazasıyla başlayan yolculuk, ALK Group'un tekstil alanındaki ilk adımını oluşturdu."],
            ["1993", "Büyük ölçekli üretim yatırımlarıyla tekstil ve giyim aksesuarları alanındaki üretim kapasitesi önemli ölçüde büyüdü."],
            ["2000", "ALKAN Tekstil Promosyonu ile promosyon tekstili alanına giriş yapıldı. Kurumsal firmalar, organizasyonlar ve farklı sektörlerin tekstil ihtiyaçlarına yönelik üretim ve tedarik yapısı geliştirildi."],
            ["2010", "Tedarik yapısını güçlendirmek ve Asya pazarındaki gelişmeleri yakından takip etmek amacıyla Çin'de tedarik ofisi açıldı."],
            ["2012", "ALK bünyesinde Nordbron markası hayata geçirildi ve grubun kendi markalarıyla uluslararası pazarlardaki büyümesi güçlendirildi."],
            ["2015", "Almanya merkezli yapılanma ile ALK Group'un Avrupa operasyonları, lojistik ve uluslararası ticaret altyapısı güçlendirildi."],
            ["2021", "Personel kıyafetleri ve profesyonel iş giyimi alanındaki deneyim SUW markası altında yeni bir yapıya dönüştürüldü. Kalite, işlevsellik ve zamanında teslimat yaklaşımı SUW'un temelini oluşturdu."],
          ]
        : [
            ["1978", "The journey began with a small hat shop in Eminönü, marking ALK Group's first step into the textile industry."],
            ["1993", "Major manufacturing investments significantly expanded production capacity in textiles and apparel accessories."],
            ["2000", "ALKAN Tekstil Promosyonu marked the group's entry into promotional textiles, establishing a production and sourcing structure for corporate clients, organizations and diverse industries."],
            ["2010", "A sourcing office was opened in China to strengthen the supply network and stay closely connected to developments across Asian markets."],
            ["2012", "Nordbron was launched within ALK, accelerating the group's international growth through its own brands."],
            ["2015", "A Germany-based organization strengthened ALK Group's European operations, logistics capabilities and international trade infrastructure."],
            ["2021", "Expertise in staff uniforms and professional workwear evolved into a new structure under the SUW brand, founded on quality, functionality and reliable on-time delivery."],
          ]).map(([year, description], index) => ({ id: index + 1, year, description })),
    },
    why: { eyebrow: tr ? "NEDEN SUW?" : "WHY SUW?", title: tr ? "NEDEN SUW?" : "WHY SUW?", description: "", items: items(whyTitles, whyDescriptions) },
    cta: { eyebrow: "", title: "", description: "", text: "", link: "" },
  };
}

function compactFallback(locale: SupportedLocale): AboutPageContent {
  const content = fallback(locale);
  const tr = locale === "tr";

  content.group.description = tr
    ? "SUW, temelleri 1978'de İstanbul'da atılan ALK Group'un tekstil üretimi, ürün geliştirme ve uluslararası operasyon deneyiminden güç alır."
    : "SUW draws strength from ALK Group's textile manufacturing, product development and international operations experience, established in Istanbul in 1978.";
  return content;
}

const pageContent = {
  tr: {
    metaTitle: "Hakkımızda",
    metaDescription:
      "SUW'un profesyonel iş giyimi, üretim, kalite ve uzun vadeli proje geliştirme yaklaşımını keşfedin.",
    eyebrow: "SUW HAKKINDA",
    titleLine1: "DENEYİM ÜZERİNE",
    titleLine2: "KURULU.",
  },
  en: {
    metaTitle: "About",
    metaDescription:
      "Discover SUW's approach to professional workwear, production, quality and long-term project development.",
    eyebrow: "ABOUT SUW",
    titleLine1: "BUILT ON",
    titleLine2: "EXPERIENCE.",
  },
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = pageContent[locale];

  return createLocalizedPageMetadata(locale, {
    title: content.metaTitle,
    description: content.metaDescription,
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: AboutPageProps) {
  const { locale } = await params;
  const content = pageContent[locale];
  let about=compactFallback(locale);
  try {
    const response=await createAPI(locale).get<CorporatePageResponse>("corporate/");
    if(response.data.page) about={...response.data.page,video:response.data.page.video??about.video,timeline:response.data.page.timeline??about.timeline};
  } catch {}

  return (
    <main>
      <section className={styles.hero} data-locale={locale}>
        {about.history_hero.image ? (
          <picture className={styles.heroMedia}>
            {about.history_hero.image_mobile ? <source media="(max-width: 640px)" srcSet={about.history_hero.image_mobile} /> : null}
            <img src={about.history_hero.image} alt="" />
          </picture>
        ) : null}
        {about.history_hero.image ? <div className={styles.heroOverlay} /> : null}
        <div className={styles.heroInner}>
          {about.history_hero.title ? <h1 className={styles.title}>{about.history_hero.title}</h1> : null}
          {about.history_hero.description ? <p className={styles.description}>{about.history_hero.description}</p> : null}
        </div>
      </section>
      <AboutEditorialSections content={about} locale={locale}/>
      <SuwFinalCtaSection buttonLabel={locale === "tr" ? "PROJE BAŞLAT" : "START A PROJECT"} description={about.cta.description} href={resolveFinalCtaHref(locale, "/contact")} stacked title={about.cta.title} />
    </main>
  );
}
