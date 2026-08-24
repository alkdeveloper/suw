import Link from "next/link";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { GalleryJoinCtaSectionProps } from "./gallery-join-cta-section.types";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="gallery-join-cta__button-icon" fill="none" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.45199 6.57999L3.51299 5.51999L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.51299 18.49L2.45299 17.43L7.87699 12.005L2.45199 6.57999Z"
        fill="#223035"
      />
    </svg>
  );
}

export function GalleryJoinCtaSection({
  className,
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel,
}: GalleryJoinCtaSectionProps) {
  return (
    <section className={cn("gallery-join-cta", className)}>
      <Container>
        <div className="gallery-join-cta__layout">
          <div>
            {eyebrow ? <p className="gallery-join-cta__eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="gallery-join-cta__title">{title}</h2> : null}
          </div>

          <div className="gallery-join-cta__content">
            {description ? <p className="gallery-join-cta__description">{description}</p> : null}

            {ctaHref && ctaLabel ? (
              <Link className="gallery-join-cta__button" href={ctaHref}>
                <span>{ctaLabel}</span>
                <ArrowIcon />
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
