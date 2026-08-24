import Link from "next/link";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { BrandsRoadmapSectionProps } from "./brands-roadmap-section.types";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="brands-roadmap__button-icon" fill="none" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.452 6.58L3.513 5.52L9.292 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.513 18.49L2.453 17.43L7.877 12.005L2.452 6.58Z"
        fill="#223035"
      />
    </svg>
  );
}

export function BrandsRoadmapSection({
  className,
  items = [],
  ctaHref,
  ctaLabel,
  yearSuffix,
}: BrandsRoadmapSectionProps) {
  return (
    <section className={cn("brands-roadmap", className)}>
      <Container className="max-w-[1260px] px-5 md:px-[30px]">
        <div className="brands-roadmap__list">
          {items.map((item, index) => (
            <div className="brands-roadmap__row" key={item.year}>
              <div className="brands-roadmap__year-column">
                <div className="brands-roadmap__year-wrap">
                  <p className="brands-roadmap__year">{item.year}</p>
                  <p className="brands-roadmap__year-suffix">{yearSuffix}</p>
                </div>
                {index < items.length - 1 ? <div className="brands-roadmap__line" /> : null}
              </div>

              <p className="brands-roadmap__description">{item.description}</p>
            </div>
          ))}
        </div>

        {ctaHref && ctaLabel ? (
          <div className="brands-roadmap__footer">
            <Link className="brands-roadmap__button" href={ctaHref}>
              <span>{ctaLabel}</span>
              <ArrowIcon />
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
