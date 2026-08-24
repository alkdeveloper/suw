import Link from "next/link";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

type CorporateJoinSectionProps = {
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function CorporateJoinSection({
  className,
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel,
}: CorporateJoinSectionProps) {
  return (
    <section className={cn("corporate-join", className)}>
      <Container className="corporate-join__container">
        <div>
          {eyebrow ? <p className="corporate-join__eyebrow">{eyebrow}</p> : null}
          {title ? <h2 className="corporate-join__title">{title}</h2> : null}
        </div>

        <div className="corporate-join__content">
          {description ? <p className="corporate-join__text">{description}</p> : null}

          {ctaHref && ctaLabel ? (
            <Link className="corporate-join__button" href={ctaHref}>
              <span>{ctaLabel}</span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 2L9.5 12L1.5 22" stroke="#223035" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
              </svg>
            </Link>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
