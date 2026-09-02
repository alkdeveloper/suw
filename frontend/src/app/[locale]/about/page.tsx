import type { Metadata } from "next";

import type { SupportedLocale } from "@/src/lib/locale";
import { createLocalizedPageMetadata } from "@/src/lib/metadata";
import { AboutEditorialSections } from "@/src/components/organisms/about-editorial-sections";
import { createAPI } from "@/src/lib/api";
import type { AboutPageContent, CorporatePageResponse } from "@/src/lib/api-types";

import styles from "./about.module.scss";

type AboutPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

function fallback(locale: SupportedLocale): AboutPageContent {
  const tr=locale==="tr";
  const items=(titles:string[],descriptions:string[])=>titles.map((title,id)=>({id:id+1,title,description:descriptions[id]}));
  return {hero:{eyebrow:tr?"SUW HAKKINDA":"ABOUT SUW",title:tr?"DENEYİM ÜZERİNE\nKURULU.":"BUILT ON\nEXPERIENCE.",description:tr?"SUW, ALK Group'un tekstil ve üretim alanındaki köklü deneyimi üzerine kurulan profesyonel iş giyimi markasıdır.":"SUW is a professional workwear brand built on ALK Group's established textile and manufacturing expertise."},group:{eyebrow:tr?"ALK GROUP BÜNYESİNDE":"PART OF ALK GROUP",title:tr?"1978'DEN GELEN\nÜRETİM DENEYİMİ.":"MANUFACTURING EXPERIENCE\nSINCE 1978.",description:tr?"ALK Group'un tekstil üretimi, ürün geliştirme ve uluslararası operasyon deneyimi bugün SUW'ın kurumsal iş giyimi çözümlerinin temelini oluşturuyor.":"ALK Group's textile manufacturing, product development and international operations experience forms the foundation of SUW today.",supporting_label:tr?"ALK GROUP BÜNYESİNDE BİR MARKA":"A BRAND WITHIN ALK GROUP",image:null,image_mobile:null},why:{eyebrow:tr?"NEDEN SUW?":"WHY SUW?",title:tr?"İŞ GİYİMİNİ\nSADECE ÜRÜN OLARAK GÖRMÜYORUZ.":"WE SEE WORKWEAR AS\nMORE THAN A PRODUCT.",description:tr?"Tüm ihtiyaçları birlikte değerlendirerek uzun süreli kullanım için çözümler geliştiriyoruz.":"We consider every need together to develop solutions for long-term use.",items:items(tr?["KURUMSAL KİMLİK","KULLANIM ODAKLI TASARIM","ÜRETİM & KALİTE","SÜREKLİ DESTEK"]:["CORPORATE IDENTITY","USE-FOCUSED DESIGN","MANUFACTURING & QUALITY","CONTINUOUS SUPPORT"],Array(4).fill(tr?"Kurumsal ihtiyaçları bütüncül bir yaklaşımla değerlendiririz.":"We address corporate needs through an integrated approach."))},experience:{eyebrow:tr?"ALK GROUP DENEYİMİ":"ALK GROUP EXPERIENCE",title:tr?"BİR MARKADAN\nDAHA FAZLASI.":"MORE THAN\nA BRAND.",description:tr?"SUW, ALK Group'un tekstil alanındaki deneyiminden güç alır.":"SUW draws strength from ALK Group's textile expertise.",items:items(tr?["ÜRETİM & ÜRÜN GELİŞTİRME","ÖZEL ÜRETİM","TEDARİK & OPERASYON","ULUSLARARASI DENEYİM"]:["MANUFACTURING & PRODUCT DEVELOPMENT","CUSTOM MANUFACTURING","SUPPLY & OPERATIONS","INTERNATIONAL EXPERIENCE"],Array(4).fill(tr?"Üretim ve operasyon bilgisini projelere taşırız.":"We bring manufacturing and operations expertise to every project."))},timeline:{eyebrow:tr?"KISA TARİHÇE":"A BRIEF HISTORY",title:tr?"DENEYİMDEN\nUZMANLIĞA.":"FROM EXPERIENCE\nTO EXPERTISE.",items:["1978",tr?"2000'LER":"2000s",tr?"2010'LAR":"2010s","SUW"].map((year,id)=>({id:id+1,year_or_period:year,title:"",description:tr?["Tekstil üretim yolculuğunun başlangıcı.","Promosyon tekstili ve özel üretimde genişleme.","Uluslararası operasyon yapısının güçlenmesi.","Kurumsal iş giyimi deneyiminin ayrı bir marka altında yapılandırılması."][id]:["The textile manufacturing journey begins.","Expansion into promotional textiles and custom manufacturing.","International operations are strengthened.","Corporate workwear expertise is structured under a dedicated brand."][id]}))},cta:{eyebrow:"SUW",title:tr?"DENEYİMİ\nSAHAYA TAŞIYORUZ.":"BRINGING EXPERIENCE\nTO THE FIELD.",description:tr?"Üretim bilgisini, kurumsal kimliği ve günlük kullanım ihtiyaçlarını aynı ürün üzerinde buluşturuyoruz.":"We bring manufacturing knowledge, corporate identity and everyday needs together in each product.",text:tr?"PROJELERİ İNCELE":"VIEW PROJECTS",link:"/projects"}};
}

function compactFallback(locale: SupportedLocale): AboutPageContent {
  const content = fallback(locale);
  const tr = locale === "tr";

  content.group.description = tr
    ? "SUW, temelleri 1978'de İstanbul'da atılan ALK Group'un tekstil üretimi, ürün geliştirme ve uluslararası operasyon deneyiminden güç alır."
    : "SUW draws strength from ALK Group's textile manufacturing, product development and international operations experience, established in Istanbul in 1978.";
  content.why.description = "";
  content.why.items = content.why.items.map((item, index) => ({
    ...item,
    description: (tr
      ? [
          "Marka kimliğini ekiplerin kullandığı ürünlere taşırız.",
          "Çalışma ortamına ve günlük kullanım koşullarına göre çözümler geliştiririz.",
          "Üretimden kalite kontrole tüm süreci birlikte yönetiriz.",
          "Devam eden kurumsal ihtiyaçlara uzun vadeli çözümler sunarız.",
        ]
      : [
          "We carry brand identity into the products teams use.",
          "We develop solutions around working environments and daily use.",
          "We manage the full process from manufacturing to quality control.",
          "We provide long-term solutions for ongoing corporate needs.",
        ])[index],
  }));
  content.experience.items = content.experience.items.map((item, index) => ({
    ...item,
    description: (tr
      ? [
          "Tekstil üretimi ve teknik ürün bilgisi.",
          "Projeye göre özelleştirilebilir çözümler.",
          "Entegre tedarik ve operasyon yönetimi.",
          "Farklı pazarlardaki üretim ve lojistik tecrübesi.",
        ]
      : [
          "Textile manufacturing and technical product expertise.",
          "Solutions tailored to each project.",
          "Integrated supply and operations management.",
          "Manufacturing and logistics experience across different markets.",
        ])[index],
  }));

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
  try { const response=await createAPI(locale).get<CorporatePageResponse>("corporate/"); if(response.data.page) about=response.data.page; } catch {}

  return (
    <main>
      <section className={styles.hero} data-locale={locale}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>{about.hero.eyebrow||content.eyebrow}</p>

          <h1 className={styles.title}>
            {(about.hero.title||`${content.titleLine1}\n${content.titleLine2}`).split(/\r?\n/).map(line=><span key={line}>{line}</span>)}
          </h1>
          <p className={styles.description}>{about.hero.description}</p>
        </div>
      </section>
      <AboutEditorialSections content={about} locale={locale}/>
    </main>
  );
}
