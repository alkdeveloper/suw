const qualityItems = [
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
];

export function SuwAboutQualitySection() {
  return (
    <section className="suw-about-quality">
      <div className="suw-about-quality__inner">
        <header className="suw-about-quality__heading">
          <p className="suw-about-quality__eyebrow">
            OUR APPROACH
          </p>

          <div className="suw-about-quality__heading-grid">
            <h2 className="suw-about-quality__title">
              MADE TO
              <br />
              WORK BETTER.
            </h2>

            <p className="suw-about-quality__intro">
              Good workwear is more than appearance. Every decision is shaped
              around performance, durability, consistency and the realities of
              daily work.
            </p>
          </div>
        </header>

        <div className="suw-about-quality__grid">
          {qualityItems.map((item) => (
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