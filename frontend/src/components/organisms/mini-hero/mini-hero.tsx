import type { CSSProperties } from "react";

import { cn } from "@/src/lib/cn";

import type { MiniHeroProps } from "./mini-hero.types";

export function MiniHero({
  title,
  subtitle,
  variant = "default",
  className,
  fillViewport = false,
  backgroundImageSrc,
  videoSrc,
  backgroundMaskSrc,
  glowImageSrc,
  contentAlignment = "center",
  showScrollIndicator = false,
}: MiniHeroProps) {
  const customProperties = {
    "--mini-hero-bg": backgroundImageSrc ? `url(${backgroundImageSrc})` : "none",
    "--mini-hero-glow": glowImageSrc ? `url(${glowImageSrc})` : "none",
    ...(backgroundMaskSrc ? { "--mini-hero-mask": `url(${backgroundMaskSrc})` } : {}),
  } as CSSProperties;

  return (
    <section
      className={cn(
        "mini-hero",
        variant === "brands" && "mini-hero--brands",
        fillViewport && "mini-hero--viewport",
        className,
      )}
      style={customProperties}
    >
      <div aria-hidden="true" className="mini-hero__background" />
      {videoSrc ? (
        <video
          aria-hidden
          autoPlay
          className="mini-hero__video"
          loop
          muted
          playsInline
          poster={backgroundImageSrc}
          preload="auto"
          src={videoSrc}
        />
      ) : null}
      <div aria-hidden="true" className="mini-hero__glow" />
      <div aria-hidden="true" className="mini-hero__overlay" />

      <div
        className={cn(
          "mini-hero__inner",
          contentAlignment === "bottom-left" && "mini-hero__inner--bottom-left",
          contentAlignment === "bottom-right" && "mini-hero__inner--bottom-right",
          contentAlignment === "left-center" && "mini-hero__inner--left-center",
        )}
      >
        <div className={cn("mini-hero__copy", variant === "brands" && "mini-hero__copy--brands")}>
          {title ? (
            <h1
              className={cn(
                "mini-hero__title",
                contentAlignment === "bottom-left" && "mini-hero__title--bottom-left",
                contentAlignment === "bottom-right" && "mini-hero__title--bottom-right",
                contentAlignment === "left-center" && "mini-hero__title--left-center",
              )}
            >
              {title}
            </h1>
          ) : null}

          {subtitle && variant === "brands" ? (
            <p className="mini-hero__subtitle mini-hero__subtitle--brands">{subtitle}</p>
          ) : null}
        </div>
      </div>

      {subtitle && variant !== "brands" ? <p className="mini-hero__subtitle">{subtitle}</p> : null}

      {showScrollIndicator ? (
        <div aria-hidden="true" className="mini-hero__scroll-indicator">
          <span className="mini-hero__scroll-line" />
          <svg className="mini-hero__scroll-icon" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          </svg>
        </div>
      ) : null}
    </section>
  );
}
