const pillars = [
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
];

export function SuwAboutIntroSection() {
  return (
    <section className="suw-about-intro">
      <div className="suw-about-intro__inner">
        <header className="suw-about-intro__heading">
          <p className="suw-about-intro__eyebrow">WHO WE ARE</p>

          <div className="suw-about-intro__heading-grid">
            <h2 className="suw-about-intro__title">
              WORKWEAR
              <br />
              WITH PURPOSE.
            </h2>

            <div className="suw-about-intro__copy">
              <p>
                SUW develops professional workwear for companies and teams that
                require performance, durability and a consistent identity.
              </p>

              <p>
                From existing product solutions to fully customized
                developments, every project is built around the realities of
                the working environment.
              </p>
            </div>
          </div>
        </header>

        <div className="suw-about-intro__grid">
          {pillars.map((pillar) => (
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