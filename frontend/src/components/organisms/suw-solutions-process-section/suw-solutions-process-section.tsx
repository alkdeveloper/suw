const processSteps = [
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
];

export function SuwSolutionsProcessSection() {
  return (
    <section className="suw-solutions-process">
      <div className="suw-solutions-process__inner">
        <header className="suw-solutions-process__heading">
          <p className="suw-solutions-process__eyebrow">
            HOW WE WORK
          </p>

          <div className="suw-solutions-process__heading-grid">
            <h2 className="suw-solutions-process__title">
              FROM BRIEF
              <br />
              TO DELIVERY.
            </h2>

            <p className="suw-solutions-process__intro">
              A clear development process keeps every stage aligned from the
              first requirement to the final delivery.
            </p>
          </div>
        </header>

        <div className="suw-solutions-process__grid">
          {processSteps.map((step) => (
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