const productionItems = [
  {
    id: "01",
    title: "PRODUCT DEVELOPMENT",
    description:
      "Products are developed around function, fit, material performance and the requirements of each working environment.",
  },
  {
    id: "02",
    title: "SAMPLING",
    description:
      "Samples are prepared and refined before production to confirm construction, details, branding and fit.",
  },
  {
    id: "03",
    title: "PRODUCTION",
    description:
      "Approved products move into coordinated production with defined specifications and project requirements.",
  },
  {
    id: "04",
    title: "QUALITY CONTROL",
    description:
      "Quality is monitored throughout the process to maintain consistency, workmanship and final product standards.",
  },
];

export function SuwAboutProductionSection() {
  return (
    <section className="suw-about-production">
      <div className="suw-about-production__inner">
        <header className="suw-about-production__heading">
          <p className="suw-about-production__eyebrow">
            PRODUCTION & OPERATIONS
          </p>

          <div className="suw-about-production__heading-grid">
            <h2 className="suw-about-production__title">
              BUILT TO
              <br />
              DELIVER.
            </h2>

            <p className="suw-about-production__intro">
              Development, sampling, manufacturing and quality control operate
              as one coordinated process from the first product decision to
              final delivery.
            </p>
          </div>
        </header>

        <div className="suw-about-production__layout">
          <div className="suw-about-production__visual">
            <div className="suw-about-production__visual-copy">
              <span>SUW / PRODUCTION</span>

              <p>
                From concept development to finished workwear, every stage is
                managed around consistency, functionality and project
                requirements.
              </p>
            </div>
          </div>

          <div className="suw-about-production__items">
            {productionItems.map((item) => (
              <article
                className="suw-about-production__item"
                key={item.id}
              >
                <span className="suw-about-production__number">
                  {item.id}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span
                  aria-hidden="true"
                  className="suw-about-production__arrow"
                >
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}