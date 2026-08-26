import type { SupportedLocale } from "@/src/lib/locale";

const sectionContent = {
  tr: {
    eyebrow: "YAKLAŞIMIMIZ",
    titleLine1: "DAHA İYİ ÇALIŞMAK",
    titleLine2: "İÇİN.",
    intro: "İyi iş giyimi görünümden fazlasıdır. Her karar; performans, dayanıklılık, tutarlılık ve günlük çalışma gerçekleri doğrultusunda şekillenir.",
    items: [
      { id: "01", title: "İŞLEVSELLİK", description: "Ürünler hareket, kullanılabilirlik ve çalışma ortamının gerçek ihtiyaçları doğrultusunda geliştirilir." },
      { id: "02", title: "DAYANIKLILIK", description: "Malzeme, yapı ve bitiş detayları güvenilir ve tekrarlanan günlük kullanım için seçilir." },
      { id: "03", title: "TUTARLILIK", description: "Tanımlı teknik özellikler ve kalite kontrolleri üretim süreci boyunca tutarlılığın korunmasını sağlar." },
      { id: "04", title: "PROJE ODAĞI", description: "Her proje ekip, çalışma koşulları, kimlik ve operasyonel gereksinimler doğrultusunda değerlendirilir." },
    ],
  },
  en: {
    eyebrow: "OUR APPROACH",
    titleLine1: "MADE TO",
    titleLine2: "WORK BETTER.",
    intro: "Good workwear is more than appearance. Every decision is shaped around performance, durability, consistency and the realities of daily work.",
    items: [
  {
    id: "01",
    title: "FUNCTIONALITY",
    description:
      "Products are developed around movement, usability and the real requirements of the working environment.",
  },
  {
    id: "02",
    title: "DURABILITY",
    description:
      "Materials, construction and finishing details are selected for reliable and repeated everyday use.",
  },
  {
    id: "03",
    title: "CONSISTENCY",
    description:
      "Defined specifications and quality checks help maintain consistency throughout the production process.",
  },
  {
    id: "04",
    title: "PROJECT FOCUS",
    description:
      "Every project is evaluated around the team, working conditions, identity and operational requirements.",
  },
    ],
  },
};

export function SuwAboutQualitySection({ locale }: { locale: SupportedLocale }) {
  const content = sectionContent[locale];

  return (
    <section className="suw-about-quality">
      <div className="suw-about-quality__inner">
        <header className="suw-about-quality__heading">
          <p className="suw-about-quality__eyebrow">
            {content.eyebrow}
          </p>

          <div className="suw-about-quality__heading-grid">
            <h2 className="suw-about-quality__title">
              {content.titleLine1}
              <br />
              {content.titleLine2}
            </h2>

            <p className="suw-about-quality__intro">
              {content.intro}
            </p>
          </div>
        </header>

        <div className="suw-about-quality__grid">
          {content.items.map((item) => (
            <article
              className="suw-about-quality__card"
              key={item.id}
            >
              <div className="suw-about-quality__card-top">
                <span>{item.id}</span>
                <span aria-hidden="true">↗</span>
              </div>

              <div className="suw-about-quality__card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
