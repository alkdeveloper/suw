import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { CorporateTimelineSectionProps } from "./corporate-timeline-section.types";

export function CorporateTimelineSection({
  className,
  eyebrow,
  title,
  items = [],
  variant = "corporate",
}: CorporateTimelineSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className={cn("corporate-timeline", `corporate-timeline--${variant}`, className)}>
      <Container className="corporate-timeline__container">
        {eyebrow ? <p className="corporate-timeline__eyebrow">{eyebrow}</p> : null}
        {title ? <h2 className="corporate-timeline__title">{title}</h2> : null}

        <ol className="corporate-timeline__list">
          {items.map((item, index) => (
            <li
              className={cn(
                "corporate-timeline__item",
                index % 2 === 0
                  ? "corporate-timeline__item--left"
                  : "corporate-timeline__item--right",
              )}
              key={`${item.year}-${index}`}
            >
              <span aria-hidden="true" className="corporate-timeline__marker" />
              <article className="corporate-timeline__card">
                <p className="corporate-timeline__year">{item.year}</p>
                <span aria-hidden="true" className="corporate-timeline__divider" />
                <p className="corporate-timeline__text">{item.text}</p>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
