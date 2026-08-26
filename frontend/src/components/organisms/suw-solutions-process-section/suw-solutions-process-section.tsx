import type { SupportedLocale } from "@/src/lib/locale";

const sectionContent = {
  tr: {
    eyebrow: "NASIL ÇALIŞIYORUZ",
    titleLine1: "İHTİYAÇTAN",
    titleLine2: "TESLİMATA.",
    intro:
      "Net bir geliştirme süreci, ilk gereksinimden nihai teslimata kadar her aşamanın uyumlu ilerlemesini sağlar.",
    steps: [
      { id: "01", title: "İHTİYAÇ ANALİZİ", description: "Ekibinizi, çalışma ortamını, ürün ihtiyaçlarını ve proje gereksinimlerini birlikte tanımlarız." },
      { id: "02", title: "GELİŞTİRME", description: "Ürünler, malzemeler, renkler ve markalama detayları projeye göre geliştirilir." },
      { id: "03", title: "NUMUNE", description: "Üretim öncesinde kalıp, malzeme, renk ve markalama detaylarını onaylamak için numuneler hazırlanır." },
      { id: "04", title: "ÜRETİM", description: "Onaylanan ürünler, belirlenen teknik özellikler ve kalite standartlarıyla üretime alınır." },
      { id: "05", title: "TESLİMAT", description: "Tamamlanan siparişler kontrol edilir, paketlenir ve kararlaştırılan teslimat planına göre hazırlanır." },
    ],
  },
  en: {
    eyebrow: "HOW WE WORK",
    titleLine1: "FROM BRIEF",
    titleLine2: "TO DELIVERY.",
    intro:
      "A clear development process keeps every stage aligned from the first requirement to the final delivery.",
    steps: [
  {
    id: "01",
    title: "BRIEF",
    description:
      "We define your team, working environment, product needs and project requirements.",
  },
  {
    id: "02",
    title: "DEVELOPMENT",
    description:
      "Products, materials, colors and branding details are developed around the project.",
  },
  {
    id: "03",
    title: "SAMPLING",
    description:
      "Samples are prepared to confirm fit, materials, colors and branding before production.",
  },
  {
    id: "04",
    title: "PRODUCTION",
    description:
      "Approved products move into production with defined specifications and quality standards.",
  },
  {
    id: "05",
    title: "DELIVERY",
    description:
      "Finished orders are checked, packed and prepared according to the agreed delivery plan.",
  },
    ],
  },
};

export function SuwSolutionsProcessSection({ locale }: { locale: SupportedLocale }) {
  const content = sectionContent[locale];

  return (
    <section className="suw-solutions-process" data-locale={locale}>
      <div className="suw-solutions-process__inner">
        <header className="suw-solutions-process__heading">
          <p className="suw-solutions-process__eyebrow">
            {content.eyebrow}
          </p>

          <div className="suw-solutions-process__heading-grid">
            <h2 className="suw-solutions-process__title">
              {content.titleLine1}
              <br />
              {content.titleLine2}
            </h2>

            <p className="suw-solutions-process__intro">
              {content.intro}
            </p>
          </div>
        </header>

        <div className="suw-solutions-process__grid">
          {content.steps.map((step) => (
            <article
              className="suw-solutions-process__card"
              key={step.id}
            >
              <div className="suw-solutions-process__card-top">
                <span>{step.id}</span>
                <span aria-hidden="true">↗</span>
              </div>

              <div className="suw-solutions-process__card-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
