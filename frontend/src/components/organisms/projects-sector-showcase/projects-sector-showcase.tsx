import type { ProjectsPageResponse } from "@/src/lib/api-types";
export function ProjectsSectorShowcase({ content }: { content: ProjectsPageResponse }) {
  return <>
    <section className="projects-sectors">
      <div className="projects-sectors__inner">
        {content.sectors.map((project, index) => <article className="projects-sectors__item" key={project.id}>
          <div className="projects-sectors__media">
            {project.image ? <picture>
              {project.image_mobile ? <source media="(max-width: 767px)" srcSet={project.image_mobile} /> : null}
              <img alt={project.title} src={project.image} />
            </picture> : <div aria-hidden="true" className="projects-sectors__placeholder">SUW</div>}
          </div>
          <div className="projects-sectors__content">
            <div className="projects-sectors__meta"><span>{String(index + 1).padStart(2, "0")}</span><p>{project.title}</p></div>
            <h2>{project.headline}</h2>
            <p className="projects-sectors__description">{project.description}</p>
          </div>
        </article>)}
      </div>
    </section>
  </>;
}
