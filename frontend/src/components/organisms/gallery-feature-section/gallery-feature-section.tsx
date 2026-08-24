import Image from "next/image";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { GalleryFeatureSectionProps } from "./gallery-feature-section.types";

const ellipseGlowSrc = "/images/figma-assets/gallery-feature-ellipse-glow.svg";
const bottomGlowSrc = "/images/figma-assets/gallery-feature-bottom-glow.svg";

export function GalleryFeatureSection({
  className,
  title,
  description,
  videoSrc,
  videoPosterSrc,
}: GalleryFeatureSectionProps) {
  const trimmedVideoSrc = videoSrc?.trim();
  const hasVideo = Boolean(trimmedVideoSrc);
  const posterSrc = videoPosterSrc?.trim();
  const hasPoster = Boolean(posterSrc);

  return (
    <section className={cn("gallery-feature", className)}>
      <div className="gallery-feature__band">
        <Container className="gallery-feature__container">
          <div className="gallery-feature__bg-glow gallery-feature__bg-glow--right" aria-hidden="true">
            <Image alt="" fill sizes="810px" src={ellipseGlowSrc} unoptimized />
          </div>
          <div className="gallery-feature__bg-glow gallery-feature__bg-glow--bottom" aria-hidden="true">
            <Image alt="" fill sizes="367px" src={bottomGlowSrc} unoptimized />
          </div>

          <div className="gallery-feature__panel">
            <div className="gallery-feature__content">
              {title ? (
                <h2 className="gallery-feature__title">
                  {title}
                </h2>
              ) : null}
              {description ? <p className="gallery-feature__description">{description}</p> : null}
            </div>

            {hasVideo || hasPoster ? (
              <div className="gallery-feature__media">
                {hasVideo ? (
                  <video
                    autoPlay
                    className="gallery-feature__video"
                    loop
                    muted
                    playsInline
                    poster={posterSrc}
                    preload="auto"
                  >
                    <source src={trimmedVideoSrc} type="video/mp4" />
                  </video>
                ) : posterSrc ? (
                  <Image
                    alt=""
                    className="gallery-feature__poster"
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    src={posterSrc}
                    unoptimized
                  />
                ) : null}
              </div>
            ) : null}
          </div>
        </Container>
      </div>
    </section>
  );
}
