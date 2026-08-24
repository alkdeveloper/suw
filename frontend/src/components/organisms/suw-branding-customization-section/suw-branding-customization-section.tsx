type CustomizationItem = {
  id: string;
  title: string;
  description: string;
};

const customizationItems: CustomizationItem[] = [
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
];

export function SuwBrandingCustomizationSection() {
  return (
    <section className="suw-branding-customization">
      <div className="suw-branding-customization__inner">
        <header className="suw-branding-customization__heading">
          <p className="suw-branding-customization__eyebrow">
            BRANDING & CUSTOMIZATION
          </p>

          <div className="suw-branding-customization__heading-grid">
            <h2 className="suw-branding-customization__title">
              MAKE IT
              <br />
              YOURS.
            </h2>

            <p className="suw-branding-customization__intro">
              Build a consistent workwear identity through carefully selected
              branding, color and finishing applications.
            </p>
          </div>
        </header>

        <div className="suw-branding-customization__grid">
          {customizationItems.map((item) => (
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