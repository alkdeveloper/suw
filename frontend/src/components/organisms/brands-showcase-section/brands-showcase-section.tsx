import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/src/lib/cn";

import type { BrandsShowcaseSectionProps } from "./brands-showcase-section.types";

export function BrandsShowcaseSection({
  className,
  cards = [],
}: BrandsShowcaseSectionProps) {
  return (
    <section className={cn("brands-showcase", className)}>
      <div className="brands-showcase__grid">
        {cards.map((card) => (
          <article
            className={cn("brands-showcase__card", !card.imageSrc && "brands-showcase__card--no-image")}
            key={card.id}
            style={
              {
                "--brands-showcase-logo-width": `${card.logoWidth}px`,
              } as CSSProperties
            }
          >
            {card.href ? (
              <Link
                aria-label={card.ctaLabel?.trim() || card.title || card.imageAlt}
                className="brands-showcase__media-link"
                href={card.href}
                rel={card.isExternal !== false ? "noreferrer" : undefined}
                target={card.isExternal !== false ? "_blank" : undefined}
              >
                {card.imageSrc ? (
                  <Image
                    alt={card.imageAlt}
                    className="brands-showcase__image"
                    height={739}
                    src={card.imageSrc}
                    unoptimized
                    width={302}
                  />
                ) : null}
              </Link>
            ) : card.imageSrc ? (
              <Image
                alt={card.imageAlt}
                className="brands-showcase__image"
                height={739}
                src={card.imageSrc}
                unoptimized
                width={302}
              />
            ) : null}

            <div className="brands-showcase__overlay" />

            <div className="brands-showcase__content">
              {card.logoSrc ? (
                card.href ? (
                  <Link
                    aria-label={card.logoAlt}
                    className="brands-showcase__logo-link"
                    href={card.href}
                    rel={card.isExternal !== false ? "noreferrer" : undefined}
                    target={card.isExternal !== false ? "_blank" : undefined}
                  >
                    <Image
                      alt={card.logoAlt}
                      className="brands-showcase__logo"
                      height={card.logoHeight}
                      src={card.logoSrc}
                      unoptimized
                      width={card.logoWidth}
                    />
                  </Link>
                ) : (
                  <Image
                    alt={card.logoAlt}
                    className="brands-showcase__logo"
                    height={card.logoHeight}
                    src={card.logoSrc}
                    unoptimized
                    width={card.logoWidth}
                  />
                )
              ) : (
                <h3 className="brands-showcase__title">{card.title || card.imageAlt}</h3>
              )}
              {card.href && card.ctaLabel?.trim() ? (
                <Link className="brands-showcase__cta" href={card.href} rel={card.isExternal !== false ? "noreferrer" : undefined} target={card.isExternal !== false ? "_blank" : undefined}>
                  {card.ctaLabel.trim()}
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
