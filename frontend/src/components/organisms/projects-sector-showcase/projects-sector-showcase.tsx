import Link from "next/link";

import type { ProjectsPageResponse } from "@/src/lib/api-types";
import type { SupportedLocale } from "@/src/lib/locale";

export function ProjectsSectorShowcase({ content, locale }: { content: ProjectsPageResponse; locale: SupportedLocale }) {
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
            {project.product_groups.length ? <div className="projects-sectors__tags">
              {project.product_groups.map((group) => <span key={group}>{group}</span>)}
            </div> : null}
          </div>
        </article>)}
      </div>
    </section>
    <section className="projects-sectors-cta">
      <div className="projects-sectors-cta__inner">
        <p className="projects-sectors-cta__eyebrow">{content.cta_eyebrow}</p>
        <div className="projects-sectors-cta__grid">
          <h2>{content.cta_title}</h2>
          <div><p>{content.cta_description}</p><Link href={`/${locale}/contact`}><span>{content.cta_text}</span><span aria-hidden="true">↗</span></Link></div>
        </div>
      </div>
    </section>
  </>;
}
