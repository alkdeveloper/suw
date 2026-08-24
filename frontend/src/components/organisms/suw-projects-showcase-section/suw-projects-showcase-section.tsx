const projects = [
  {
    id: "01",
    category: "CORPORATE UNIFORM PROGRAM",
    title: "CORPORATE WORKWEAR",
    description:
      "A coordinated workwear program developed around team identity, daily use and consistent brand presentation.",
    imageSrc: "/images/mock/project-1.jpg",
    size: "large",
  },
  {
    id: "02",
    category: "FIELD OPERATIONS",
    title: "FIELD WORKWEAR",
    description:
      "Functional garments developed for mobility, protection and demanding operational environments.",
    imageSrc: "/images/mock/project-2.jpg",
    size: "small",
  },
  {
    id: "03",
    category: "INDUSTRIAL TEAMWEAR",
    title: "INDUSTRIAL PROGRAM",
    description:
      "Durable workwear built for production teams and repeated everyday use.",
    imageSrc: "/images/mock/project-3.jpg",
    size: "small",
  },
  {
    id: "04",
    category: "CUSTOM DESIGN & PRODUCTION",
    title: "CUSTOM COLLECTION",
    description:
      "A fully developed collection built around specific product, branding and operational requirements.",
    imageSrc: "/images/mock/project-4.jpg",
    size: "large",
  },
];

export function SuwProjectsShowcaseSection() {
  return (
    <section className="suw-projects-showcase">
      <div className="suw-projects-showcase__inner">
        <header className="suw-projects-showcase__heading">
          <p className="suw-projects-showcase__eyebrow">
            SELECTED PROJECTS
          </p>

          <div className="suw-projects-showcase__heading-grid">
            <h2 className="suw-projects-showcase__title">
              BUILT FOR
              <br />
              REAL TEAMS.
            </h2>

            <p className="suw-projects-showcase__intro">
              From corporate uniforms to technical field programs, every
              project is developed around the identity, environment and
              operational needs of the team.
            </p>
          </div>
        </header>

        <div className="suw-projects-showcase__grid">
          {projects.map((project) => (
            <article
              className={`suw-projects-showcase__card suw-projects-showcase__card--${project.size}`}
              key={project.id}
            >
              <div className="suw-projects-showcase__image-wrap">
                <img
                  alt={project.title}
                  className="suw-projects-showcase__image"
                  src={project.imageSrc}
                />

                <div className="suw-projects-showcase__overlay" />

                <span className="suw-projects-showcase__number">
                  {project.id}
                </span>

                <div className="suw-projects-showcase__content">
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <span>↗</span>
                </div>
              </div>

              <p className="suw-projects-showcase__description">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}