import type { CSSProperties } from "react";
import Image from "next/image";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { BrandDetailIntroSectionProps } from "./brand-detail-intro-section.types";

export function BrandDetailIntroSection({
  logoSrc,
  logoAlt,
  logoWidth,
  logoHeight,
  logos,
  tagline,
  description,
  className,
}: BrandDetailIntroSectionProps) {
  const logoItems =
    logos && logos.length > 0
      ? logos
      : logoSrc && logoAlt && logoWidth && logoHeight
        ? [{ src: logoSrc, alt: logoAlt, width: logoWidth, height: logoHeight }]
        : [];

  return (
    <section className={cn("brand-detail-intro", className)}>
      <Container className="brand-detail-intro__container">
        <div
          className={cn(
            "brand-detail-intro__logos",
            logoItems.length > 1 && "brand-detail-intro__logos--multiple",
          )}
        >
          {logoItems.map((logo) => (
            <div
              className="brand-detail-intro__logo-frame"
              key={`${logo.src}-${logo.alt}`}
              style={
                {
                  "--brand-detail-intro-logo-width": `${logo.width}px`,
                } as CSSProperties
              }
            >
              <Image
                alt={logo.alt}
                className="brand-detail-intro__logo"
                height={logo.height}
                src={logo.src}
                unoptimized
                width={logo.width}
              />
            </div>
          ))}
        </div>

        {tagline ? <p className="brand-detail-intro__tagline">{tagline}</p> : null}
        {description ? <p className="brand-detail-intro__description">{description}</p> : null}
      </Container>
    </section>
  );
}
