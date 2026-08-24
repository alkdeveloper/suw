import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { LegalContentSectionProps } from "./legal-content-section.types";

export function LegalContentSection({ className, intro, items, lastUpdated, lastUpdatedLabel, title }: LegalContentSectionProps) {
  return (
    <section className={cn("legal-content", className)}>
      <Container>
        <div className="legal-content__shell">
          <div className="legal-content__header">
            <p className="legal-content__label">{lastUpdatedLabel}</p>
            <p className="legal-content__updated-at">{lastUpdated}</p>
          </div>

          <div className="legal-content__body">
            <h1 className="legal-content__title">{title}</h1>

            {intro ? <p className="legal-content__intro">{intro}</p> : null}

            <div className="legal-content__sections">
              {items.map((item) => (
                <section className="legal-content__section" key={item.heading}>
                  <h2 className="legal-content__section-title">{item.heading}</h2>

                  <div className="legal-content__section-copy">
                    {item.body.map((paragraph, index) => (
                      <p key={`${item.heading}-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
