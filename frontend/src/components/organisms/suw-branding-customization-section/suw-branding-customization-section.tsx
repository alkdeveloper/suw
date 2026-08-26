import type { SupportedLocale } from "@/src/lib/locale";

type CustomizationItem = {
  id: string;
  title: string;
  description: string;
};

const sectionContent: Record<
  SupportedLocale,
  {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
    items: CustomizationItem[];
  }
> = {
  tr: {
    eyebrow: "MARKALAMA VE ÖZELLEŞTİRME",
    titleLine1: "SİZE ÖZEL",
    titleLine2: "HALE GETİRİN.",
    intro:
      "Özenle seçilmiş markalama, renk ve bitiş uygulamalarıyla tutarlı bir iş giyimi kimliği oluşturun.",
    items: [
      { id: "01", title: "NAKIŞ", description: "Dayanıklı günlük kullanım için geliştirilen logo ve kurumsal kimlik uygulamaları." },
      { id: "02", title: "BASKI", description: "Ürün tipine, uygulama alanına ve görsel kimliğe uyarlanan baskı çözümleri." },
      { id: "03", title: "ARMALAR", description: "Seçili ürün grupları için özel armalar ve markalı uygulamalar." },
      { id: "04", title: "ETİKETLER", description: "Özel dokuma etiketler, bakım etiketleri ve iç markalama detayları." },
      { id: "05", title: "RENK ÖZELLEŞTİRME", description: "Kurumsal kimlik gereksinimlerine göre uyarlanan ürün renkleri ve detayları." },
      { id: "06", title: "PAKETLEME", description: "Sunum, dağıtım ve teslimat için geliştirilen özel paketleme çözümleri." },
    ],
  },
  en: {
    eyebrow: "BRANDING & CUSTOMIZATION",
    titleLine1: "MAKE IT",
    titleLine2: "YOURS.",
    intro:
      "Build a consistent workwear identity through carefully selected branding, color and finishing applications.",
    items: [
  {
    id: "01",
    title: "EMBROIDERY",
    description:
      "Logo and identity applications developed for durable everyday use.",
  },
  {
    id: "02",
    title: "PRINTING",
    description:
      "Print applications adapted to product type, placement and visual identity.",
  },
  {
    id: "03",
    title: "PATCHES",
    description:
      "Custom patches and branded applications for selected product groups.",
  },
  {
    id: "04",
    title: "LABELS",
    description:
      "Custom woven labels, care labels and internal branding details.",
  },
  {
    id: "05",
    title: "COLOR CUSTOMIZATION",
    description:
      "Product colors and details adapted around corporate identity requirements.",
  },
  {
    id: "06",
    title: "PACKAGING",
    description:
      "Custom packaging solutions developed for presentation, distribution and delivery.",
  },
    ],
  },
};

export function SuwBrandingCustomizationSection({ locale }: { locale: SupportedLocale }) {
  const content = sectionContent[locale];

  return (
    <section className="suw-branding-customization">
      <div className="suw-branding-customization__inner">
        <header className="suw-branding-customization__heading">
          <p className="suw-branding-customization__eyebrow">
            {content.eyebrow}
          </p>

          <div className="suw-branding-customization__heading-grid">
            <h2 className="suw-branding-customization__title">
              {content.titleLine1}
              <br />
              {content.titleLine2}
            </h2>

            <p className="suw-branding-customization__intro">
              {content.intro}
            </p>
          </div>
        </header>

        <div className="suw-branding-customization__grid">
          {content.items.map((item) => (
            <article
              className="suw-branding-customization__card"
              key={item.id}
            >
              <div className="suw-branding-customization__card-top">
                <span>{item.id}</span>
                <span aria-hidden="true">↗</span>
              </div>

              <div className="suw-branding-customization__card-content">
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
