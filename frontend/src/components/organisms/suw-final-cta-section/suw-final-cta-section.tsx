"use client";

import Link from "next/link";

type SuwFinalCtaSectionProps = {
  href?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  bottomLabel?: string;
  stacked?: boolean;
};

export function SuwFinalCtaSection({
  href,
  title,
  description,
  buttonLabel,
  bottomLabel,
  stacked = false,
}: SuwFinalCtaSectionProps) {
  return (
    <section className={`suw-final-cta${stacked ? " suw-final-cta--stacked" : ""}`}>
      <div className="suw-final-cta__inner">
        <div className="suw-final-cta__content">
          {title ? <h2 className="suw-final-cta__title">{title.split(/\r?\n/).map((line, index) => <span key={`${line}-${index}`}>{line}{index === 0 ? <br /> : null}</span>)}</h2> : null}

          {description || (buttonLabel && href) ? <div className="suw-final-cta__side">
            {description ? <p className="suw-final-cta__description">{description}</p> : null}

            {buttonLabel && href ? <Link className="suw-final-cta__button" href={href}>
              <span>{buttonLabel}</span>
              <span aria-hidden="true">↗</span>
            </Link> : null}
          </div> : null}
        </div>

        {bottomLabel ? <div className="suw-final-cta__bottom">
          <span>SUW</span>
          <span>{bottomLabel}</span>
        </div> : null}
      </div>
    </section>
  );
}
