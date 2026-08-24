type IndustryItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};

const industries: IndustryItem[] = [
  {
    id: "01",
    title: "CONSTRUCTION",
    description:
      "Durable workwear developed for demanding construction environments, outdoor conditions and high-mobility tasks.",
    imageSrc: "/images/mock/industry-1.jpg",
  },
  {
    id: "02",
    title: "LOGISTICS",
    description:
      "Functional workwear for warehouse, transport and logistics teams that require comfort and freedom of movement.",
    imageSrc: "/images/mock/industry-2.jpg",
  },
  {
    id: "03",
    title: "MANUFACTURING",
    description:
      "Reliable workwear designed around production environments, repeated movement and daily operational use.",
    imageSrc: "/images/mock/industry-3.jpg",
  },
  {
    id: "04",
    title: "AUTOMOTIVE",
    description:
      "Technical and durable garments developed for automotive production, service and maintenance teams.",
    imageSrc: "/images/mock/industry-4.jpg",
  },
  {
    id: "05",
    title: "HOSPITALITY",
    description:
      "Professional uniforms created for hospitality teams with a focus on comfort, presentation and consistency.",
    imageSrc: "/images/mock/industry-5.jpg",
  },
  {
    id: "06",
    title: "CORPORATE",
    description:
      "Corporate workwear programs built around brand identity, team consistency and everyday professional use.",
    imageSrc: "/images/mock/industry-6.jpg",
  },
];

export function SuwIndustriesGridSection() {
  return (
    <section className="suw-industries-grid">
      <div className="suw-industries-grid__inner">
        <header className="suw-industries-grid__heading">
          <p className="suw-industries-grid__eyebrow">
            MADE FOR YOUR INDUSTRY
          </p>

          <div className="suw-industries-grid__heading-grid">
            <h2 className="suw-industries-grid__title">
              DIFFERENT JOBS.
              <br />
              DIFFERENT NEEDS.
            </h2>

            <p className="suw-industries-grid__intro">
              Every working environment has its own demands. SUW develops
              workwear around movement, protection, durability and the
              operational realities of each industry.
            </p>
          </div>
        </header>

        <div className="suw-industries-grid__grid">
          {industries.map((industry) => (
            <article className="suw-industries-grid__card" key={industry.id}>
              <div className="suw-industries-grid__image-wrap">
                <img
                  alt={industry.title}
                  className="suw-industries-grid__image"
                  src={industry.imageSrc}
                />

                <div
                  aria-hidden="true"
                  className="suw-industries-grid__overlay"
                />

                <span className="suw-industries-grid__number">
                  {industry.id}
                </span>

                <span className="suw-industries-grid__arrow">↗</span>
              </div>

              <div className="suw-industries-grid__content">
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}