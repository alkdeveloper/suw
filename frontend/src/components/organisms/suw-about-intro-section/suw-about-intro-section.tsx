import type { SupportedLocale } from "@/src/lib/locale";

const sectionContent = {
  tr: {
    eyebrow: "BİZ KİMİZ",
    titleLine1: "AMAÇ ODAKLI",
    titleLine2: "İŞ GİYİMİ.",
    copy: [
      "SUW; performans, dayanıklılık ve tutarlı bir kimlik arayan şirketler ve ekipler için profesyonel iş giyimi geliştirir.",
      "Hazır ürün çözümlerinden tamamen özelleştirilmiş geliştirmelere kadar her proje, çalışma ortamının gerçek ihtiyaçları doğrultusunda şekillenir.",
    ],
    pillars: [
      { id: "01", title: "PROFESYONEL İŞ GİYİMİ", description: "Gerçek çalışma ortamları, hareket ve günlük operasyonel ihtiyaçlar doğrultusunda geliştirilen işlevsel iş giyimi." },
      { id: "02", title: "ÖZEL GELİŞTİRME", description: "Kurumsal kimliğe, teknik gereksinimlere ve projeye özel ihtiyaçlara uyarlanan ürün ve koleksiyonlar." },
      { id: "03", title: "ÜRETİM VE KALİTE", description: "Geliştirme, numune, üretim, kalite kontrol ve teslimatı kapsayan koordineli süreç." },
    ],
  },
  en: {
    eyebrow: "WHO WE ARE",
    titleLine1: "WORKWEAR",
    titleLine2: "WITH PURPOSE.",
    copy: [
      "SUW develops professional workwear for companies and teams that require performance, durability and a consistent identity.",
      "From existing product solutions to fully customized developments, every project is built around the realities of the working environment.",
    ],
    pillars: [
  {
    id: "01",
    title: "PROFESSIONAL WORKWEAR",
    description:
      "Functional workwear developed around real working environments, movement and daily operational needs.",
  },
  {
    id: "02",
    title: "CUSTOM DEVELOPMENT",
    description:
      "Products and collections adapted to corporate identity, technical requirements and project-specific needs.",
  },
  {
    id: "03",
    title: "PRODUCTION & QUALITY",
    description:
      "A coordinated process covering development, sampling, production, quality control and final delivery.",
  },
    ],
  },
};

export function SuwAboutIntroSection({ locale }: { locale: SupportedLocale }) {
  const content = sectionContent[locale];

  return (
    <section className="suw-about-intro" data-locale={locale}>
      <div className="suw-about-intro__inner">
        <header className="suw-about-intro__heading">
          <p className="suw-about-intro__eyebrow">{content.eyebrow}</p>

          <div className="suw-about-intro__heading-grid">
            <h2 className="suw-about-intro__title">
              {content.titleLine1}
              <br />
              {content.titleLine2}
            </h2>

            <div className="suw-about-intro__copy">
              {content.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </header>

        <div className="suw-about-intro__grid">
          {content.pillars.map((pillar) => (
            <article className="suw-about-intro__card" key={pillar.id}>
              <span className="suw-about-intro__number">{pillar.id}</span>

              <div className="suw-about-intro__card-content">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
