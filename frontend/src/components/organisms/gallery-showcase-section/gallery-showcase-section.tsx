"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Container } from "@/src/components/atoms/container";
import { ImageLightbox } from "@/src/components/molecules/image-lightbox/image-lightbox";
import { cn } from "@/src/lib/cn";

import type { GalleryShowcaseSectionProps } from "./gallery-showcase-section.types";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="gallery-showcase__button-icon" fill="none" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.45199 6.57999L3.51299 5.51999L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.51299 18.49L2.45299 17.43L7.87699 12.005L2.45199 6.57999Z"
        fill="#223035"
      />
    </svg>
  );
}

export function GalleryShowcaseSection({
  className,
  intro,
  tiles = [],
  showMoreLabel,
  lightboxPreviousAriaLabel,
  lightboxNextAriaLabel,
  lightboxCloseAriaLabel,
}: GalleryShowcaseSectionProps) {
  const visibleTiles = tiles.filter((tile): tile is typeof tile & { src: string } => Boolean(tile.src));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    visibleTiles.forEach((tile) => {
      const image = new window.Image();
      image.src = tile.src;
    });
  }, [visibleTiles]);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((currentIndex) => (currentIndex === null ? 0 : (currentIndex + 1) % visibleTiles.length));
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((currentIndex) =>
          currentIndex === null ? visibleTiles.length - 1 : (currentIndex - 1 + visibleTiles.length) % visibleTiles.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, visibleTiles]);

  const activeTile = activeIndex === null ? null : visibleTiles[activeIndex];

  return (
    <section className={cn("gallery-showcase", className)}>
      <Container className="gallery-showcase__container">
        {intro ? <p className="gallery-showcase__intro">{intro}</p> : null}

        <div className="gallery-showcase__grid">
          {visibleTiles.map((tile) => (
            <button
              key={tile.id}
              className={cn("gallery-showcase__tile", tile.className)}
              onClick={() => setActiveIndex(visibleTiles.findIndex((item) => item.id === tile.id))}
              type="button"
            >
              <Image
                alt={tile.alt}
                className="gallery-showcase__image"
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                src={tile.src}
                unoptimized
              />
            </button>
          ))}
        </div>

        {visibleTiles.length > 0 ? (
          <div className="gallery-showcase__actions">
            <button className="gallery-showcase__button" onClick={() => setActiveIndex(0)} type="button">
              <span>{showMoreLabel}</span>
              <ArrowIcon />
            </button>
          </div>
        ) : null}
      </Container>

      <ImageLightbox
        closeAriaLabel={lightboxCloseAriaLabel}
        image={activeTile ? { alt: activeTile.alt, src: activeTile.src } : null}
        nextAriaLabel={lightboxNextAriaLabel}
        onClose={() => setActiveIndex(null)}
        onNext={() => setActiveIndex((currentIndex) => (currentIndex === null ? 0 : (currentIndex + 1) % visibleTiles.length))}
        onPrevious={() =>
          setActiveIndex((currentIndex) =>
            currentIndex === null ? visibleTiles.length - 1 : (currentIndex - 1 + visibleTiles.length) % visibleTiles.length,
          )
        }
        previousAriaLabel={lightboxPreviousAriaLabel}
      />
    </section>
  );
}
