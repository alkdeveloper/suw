import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { BrandDetailContentSectionProps } from "./brand-detail-content-section.types";

export function BrandDetailContentSection({
  topDescription,
  bottomDescription,
  cards,
  className,
}: BrandDetailContentSectionProps) {
  return (
    <section className={cn("brand-detail-content", className)}>
      <Container className="brand-detail-content__container">
        {topDescription ? <p className="brand-detail-content__description">{topDescription}</p> : null}

        <div className="brand-detail-content__grid">
          {cards.map((card) => (
            <article
              className={cn("brand-detail-content__card", !card.imageSrc && "brand-detail-content__card--no-image")}
              key={card.id}
              style={
                {
                  "--brand-detail-content-logo-width": `${card.logoWidth}px`,
                } as CSSProperties
              }
            >
              {card.imageSrc ? (
                <Image
                  alt={card.imageAlt}
                  className="brand-detail-content__image"
                  height={739}
                  src={card.imageSrc}
                  unoptimized
                  width={302}
                />
              ) : null}

              <div className="brand-detail-content__overlay" />

              <div className="brand-detail-content__card-content">
                {card.logoSrc ? (
                  <Image
                    alt={card.logoAlt}
                    className="brand-detail-content__logo"
                    height={card.logoHeight}
                    src={card.logoSrc}
                    unoptimized
                    width={card.logoWidth}
                  />
                ) : (
                  <h3 className="brand-detail-content__title">{card.title || card.imageAlt}</h3>
                )}

                {card.href && card.ctaLabel ? (
                  <Link
                    className={cn(
                      "brand-detail-content__cta",
                      card.showCtaByDefault && "brand-detail-content__cta--visible",
                    )}
                    href={card.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {card.ctaLabel}
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {bottomDescription ? (
          <p className="brand-detail-content__description brand-detail-content__description--bottom">
            {bottomDescription}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
