"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Grid, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { OpenPositionCard, OpenPositionsSectionProps } from "./open-positions-section.types";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

function SliderArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("open-positions__nav-icon", direction === "right" && "open-positions__nav-icon--right")}
      fill="none"
      viewBox="0 0 32 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.4614 46.4534L22.632 49.28L7.22137 33.8747C6.97295 33.6278 6.77581 33.3343 6.64128 33.011C6.50676 32.6876 6.4375 32.3409 6.4375 31.9907C6.4375 31.6405 6.50676 31.2937 6.64128 30.9704C6.77581 30.6471 6.97295 30.3535 7.22137 30.1067L22.632 14.6934L25.4587 17.52L10.9947 31.9867L25.4614 46.4534Z"
        fill="white"
        fillOpacity="0.22"
      />
    </svg>
  );
}

function PositionCard({ iconSrc, title, countLabel }: OpenPositionCard) {
  const iconStyle = {
    "--icon-mask": `url(${iconSrc})`,
  } as CSSProperties;

  return (
    <article className="open-positions__card">
      <div className="open-positions__card-icon-wrap">
        <div aria-hidden="true" className="open-positions__card-icon-mask" style={iconStyle} />
      </div>

      <div className="open-positions__card-content">
        <h3 className="open-positions__card-title">{title}</h3>
        <p className="open-positions__card-count">{countLabel}</p>
      </div>
    </article>
  );
}

export function OpenPositionsSection({
  title,
  ctaHref,
  ctaLabel,
  positions,
  className,
  previousAriaLabel,
  nextAriaLabel,
}: OpenPositionsSectionProps) {
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (!swiperInstance) {
      return;
    }

    if (typeof swiperInstance.params.navigation === "boolean" || !swiperInstance.params.navigation) {
      return;
    }

    swiperInstance.params.navigation.prevEl = prevButtonRef.current;
    swiperInstance.params.navigation.nextEl = nextButtonRef.current;

    swiperInstance.navigation.destroy();
    swiperInstance.navigation.init();
    swiperInstance.navigation.update();
  }, [swiperInstance]);

  return (
    <section className={cn("open-positions", className)}>
      <Container>
        <div className="open-positions__title-wrap">
          {title ? <h2 className="open-positions__title">{title}</h2> : null}
        </div>

        <div className="open-positions__slider-row">
          <button
            aria-label={previousAriaLabel}
            className={cn("open-positions-nav", "open-positions__nav-button")}
            ref={prevButtonRef}
            type="button"
          >
            <SliderArrowIcon direction="left" />
          </button>

          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
                grid: { rows: 1, fill: "row" },
              },
              640: {
                slidesPerView: 1.35,
                spaceBetween: 18,
                grid: { rows: 1, fill: "row" },
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 20,
                grid: { rows: 1, fill: "row" },
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
                grid: { rows: 2, fill: "row" },
              },
            }}
            className="open-positions__swiper"
            modules={[Navigation, Grid]}
            onSwiper={setSwiperInstance}
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            onBeforeInit={(swiper: SwiperType) => {
              if (typeof swiper.params.navigation === "boolean" || !swiper.params.navigation) {
                return;
              }

              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
            }}
          >
            {positions.map((position) => (
              <SwiperSlide key={`${position.title}-${position.iconSrc}`} className="open-positions__slide">
                <PositionCard {...position} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            aria-label={nextAriaLabel}
            className={cn("open-positions-nav", "open-positions__nav-button")}
            ref={nextButtonRef}
            type="button"
          >
            <SliderArrowIcon direction="right" />
          </button>
        </div>

        {ctaHref && ctaLabel ? (
          <div className="open-positions__cta-wrap">
            <Link className="open-positions__cta-button" href={ctaHref}>
              <span>{ctaLabel}</span>
              <Image alt="" className="open-positions__cta-icon" height={13} src={resolvePublicAssetPath("/images/open-positions/cta-arrow-dark.svg")} width={8} />
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
import { resolvePublicAssetPath } from "@/src/lib/assets";
