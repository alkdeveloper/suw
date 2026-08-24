"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

import { cn } from "@/src/lib/cn";

function ScrollIndicator() {
  return (
    <button
      aria-label="Go to next section"
      className="home-hero__scroll-indicator"
      type="button"
      onClick={(event) => {
        const currentSection = event.currentTarget.closest("section");
        const nextSection = currentSection?.nextElementSibling;

        if (nextSection instanceof HTMLElement) {
          nextSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }}
    >
      <span>SCROLL</span>

      <svg
        fill="none"
        viewBox="0 0 18 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 0V29"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M1 21L9 29L17 21"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    </button>
  );
}

type HomeHeroSectionProps = {
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export function HomeHeroSection({
  className,
  eyebrow,
  title,
  description,
  imageSrc,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: HomeHeroSectionProps) {
  const resolvedEyebrow =
    eyebrow || "PROFESSIONAL WORKWEAR";

  const resolvedTitle =
    title || "BUILT FOR WORK.";

  const resolvedDescription =
    description ||
    "Professional workwear designed for teams that demand performance, durability and a strong identity.";

  return (
    <section
      className={cn("home-hero", className)}
      style={
        {
          "--home-hero-bg": imageSrc
            ? `url("${imageSrc}")`
            : "none",
        } as CSSProperties
      }
    >
      <div
        aria-hidden="true"
        className="home-hero__background"
      />

      <div
        aria-hidden="true"
        className="home-hero__overlay"
      />

      <div className="home-hero__inner">
        <div className="home-hero__content">
          <div className="home-hero__eyebrow">
            <span
              aria-hidden="true"
              className="home-hero__eyebrow-line"
            />

            <span>
              {resolvedEyebrow}
            </span>
          </div>

          <h1 className="home-hero__title">
            {resolvedTitle}
          </h1>

          <p className="home-hero__description">
            {resolvedDescription}
          </p>

          {(primaryCtaLabel || secondaryCtaLabel) && (
            <div className="home-hero__actions">
              {primaryCtaLabel && primaryCtaHref ? (
                <Link
                  className="home-hero__cta home-hero__cta--primary"
                  href={primaryCtaHref}
                >
                  <span>
                    {primaryCtaLabel}
                  </span>

                  <span aria-hidden="true">
                    ↗
                  </span>
                </Link>
              ) : null}

              {secondaryCtaLabel && secondaryCtaHref ? (
                <Link
                  className="home-hero__cta home-hero__cta--secondary"
                  href={secondaryCtaHref}
                >
                  <span>
                    {secondaryCtaLabel}
                  </span>

                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              ) : null}
            </div>
          )}
        </div>

        <div className="home-hero__index">
          <span>01</span>
          <span>SUW / WORKWEAR</span>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}