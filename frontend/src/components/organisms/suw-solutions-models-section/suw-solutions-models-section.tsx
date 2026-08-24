const solutions = [
  {
    id: "01",
    title: "READY",
    subtitle: "READY-MADE COLLECTION",
    description:
      "Select from the existing SUW collection and build a practical workwear program around your team's daily needs.",
    points: [
      "Existing SUW product range",
      "Fast product selection",
      "Flexible quantities",
      "Consistent product standards",
    ],
  },
  {
    id: "02",
    title: "CUSTOMIZED",
    subtitle: "BRAND CUSTOMIZATION",
    description:
      "Adapt selected products to your corporate identity with branding, colors, labels and visual applications.",
    points: [
      "Logo applications",
      "Embroidery and printing",
      "Custom labels and patches",
      "Color and detail adaptation",
    ],
  },
  {
    id: "03",
    title: "BESPOKE",
    subtitle: "CUSTOM DEVELOPMENT",
    description:
      "Develop products from the ground up around your working environment, brand identity and operational requirements.",
    points: [
      "Product development",
      "Custom materials and details",
      "Sampling and approval",
      "Dedicated production program",
    ],
  },
];

export function SuwSolutionsModelsSection() {
  return (
    <section className="suw-solutions-models">
      <div className="suw-solutions-models__inner">
        <header className="suw-solutions-models__heading">
          <p className="suw-solutions-models__eyebrow">
            WORKWEAR SOLUTIONS
          </p>

          <div className="suw-solutions-models__heading-grid">
            <h2 className="suw-solutions-models__title">
              ONE TEAM.
              <br />
              THREE WAYS TO BUILD.
            </h2>

            <p className="suw-solutions-models__intro">
              Choose the level of development that fits your project. From
              ready-made products to fully custom collections, SUW adapts the
              process around your needs.
            </p>
          </div>
        </header>

        <div className="suw-solutions-models__grid">
          {solutions.map((solution) => (
            <article
              className="suw-solutions-models__card"
              key={solution.id}
            >
              <div className="suw-solutions-models__card-top">
                <span className="suw-solutions-models__number">
                  {solution.id}
                </span>

                <span className="suw-solutions-models__subtitle">
                  {solution.subtitle}
                </span>
              </div>

              <div className="suw-solutions-models__card-main">
                <h3>{solution.title}</h3>

                <p>{solution.description}</p>
              </div>

              <ul className="suw-solutions-models__list">
                {solution.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <span
                aria-hidden="true"
                className="suw-solutions-models__arrow"
              >
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}