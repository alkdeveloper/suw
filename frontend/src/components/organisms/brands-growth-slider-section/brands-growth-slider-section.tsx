"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/src/lib/cn";

import type { BrandsGrowthSliderSectionProps } from "./brands-growth-slider-section.types";

function ArrowLeftIcon() {
  return (
    <svg aria-hidden="true" className="brands-growth-slider__arrow brands-growth-slider__arrow--left" fill="none" viewBox="0 0 21 41" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 9L3.5 20.5L14.5 32" stroke="#2E3446" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" className="brands-growth-slider__arrow" fill="none" viewBox="0 0 21 41" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 9L17.5 20.5L6.5 32" stroke="#2E3446" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export function BrandsGrowthSliderSection({
  className,
  texts = [],
  locale = "tr",
}: BrandsGrowthSliderSectionProps) {
  const sliderTexts = texts.map((text) => text.trim()).filter(Boolean);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [viewportHeight, setViewportHeight] = useState<number>(0);
  const textRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const previousLabel = locale === "en" ? "Previous text" : "Önceki metin";
  const nextLabel = locale === "en" ? "Next text" : "Sonraki metin";

  useEffect(() => {
    if (sliderTexts.length === 0) {
      return;
    }

    setActiveIndex((current) => (current >= sliderTexts.length ? 0 : current));
  }, [sliderTexts.length]);

  useEffect(() => {
    if (sliderTexts.length < 2) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % sliderTexts.length);
    }, 2800);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, sliderTexts.length]);

  useEffect(() => {
    const activeText = textRefs.current[activeIndex];

    if (!activeText) {
      setViewportHeight(0);
      return;
    }

    const updateViewportHeight = () => {
      setViewportHeight(activeText.offsetHeight);
    };

    updateViewportHeight();

    const observer = new ResizeObserver(updateViewportHeight);
    observer.observe(activeText);

    return () => observer.disconnect();
  }, [activeIndex, sliderTexts]);

  if (sliderTexts.length === 0) {
    return null;
  }

  function goToPrevious() {
    setActiveIndex((current) => (current - 1 + sliderTexts.length) % sliderTexts.length);
  }

  function goToNext() {
    setActiveIndex((current) => (current + 1) % sliderTexts.length);
  }

  return (
    <section className={cn("brands-growth-slider", className)}>
      <div className="brands-growth-slider__inner">
        <button
          aria-label={previousLabel}
          className="brands-growth-slider__nav brands-growth-slider__nav--left"
          type="button"
          onClick={goToPrevious}
        >
          <ArrowLeftIcon />
        </button>

        <div aria-live="polite" className="brands-growth-slider__viewport" style={{ height: viewportHeight || undefined }}>
          {sliderTexts.map((text, index) => (
            <p
              className={cn(
                "brands-growth-slider__text",
                index === activeIndex && "brands-growth-slider__text--active",
              )}
              key={`${index}-${text}`}
              ref={(element) => {
                textRefs.current[index] = element;
              }}
            >
              {text}
            </p>
          ))}
        </div>

        <button
          aria-label={nextLabel}
          className="brands-growth-slider__nav brands-growth-slider__nav--right"
          type="button"
          onClick={goToNext}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
}
