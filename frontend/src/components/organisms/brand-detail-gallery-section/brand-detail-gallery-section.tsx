import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { BrandDetailGallerySectionProps } from "./brand-detail-gallery-section.types";

export function BrandDetailGallerySection({
  buttonHref,
  buttonLabel,
  className,
  images,
}: BrandDetailGallerySectionProps) {
  const visibleImages = images.filter((image): image is typeof image & { src: string } => Boolean(image.src));

  return (
    <section className={cn("brand-detail-gallery", className)}>
      <Container className="brand-detail-gallery__container">
        <div className="brand-detail-gallery__grid">
          {visibleImages.map((image) => (
            <div
              className="brand-detail-gallery__item"
              key={`${image.src}-${image.alt}`}
              style={
                image.objectPosition
                  ? ({ "--brand-detail-gallery-object-position": image.objectPosition } as CSSProperties)
                  : undefined
              }
            >
              <Image
                alt={image.alt}
                className="brand-detail-gallery__image"
                height={image.height}
                src={image.src}
                unoptimized
                width={image.width}
              />
            </div>
          ))}
        </div>

        {buttonHref && buttonLabel ? (
          <div className="brand-detail-gallery__button-wrap">
            <Link className="brand-detail-gallery__button" href={buttonHref}>
              <span>{buttonLabel}</span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 2L9.5 12L1.5 22" stroke="#223035" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
              </svg>
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
