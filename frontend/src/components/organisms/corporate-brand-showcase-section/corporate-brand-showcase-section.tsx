"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import "swiper/css";
import "swiper/css/navigation";

type CorporateBrandShowcaseLogo = {
  alt: string;
  src?: string;
  width: number;
  height: number;
};

function SliderArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" className="corporate-brand-showcase__arrow-icon" fill="none" viewBox="0 0 20 32" xmlns="http://www.w3.org/2000/svg">
      <path
        d={
          direction === "left"
            ? "M19.0234 2.55268L16.1941 -0.00014247L0.783362 13.9128C0.53494 14.1357 0.337804 14.4008 0.203277 14.6928C0.0687504 14.9848 -0.000511169 15.298 -0.000511169 15.6142C-0.000511169 15.9305 0.0687504 16.2437 0.203277 16.5357C0.337804 16.8277 0.53494 17.0928 0.783362 17.3157L16.1941 31.2358L19.0207 28.683L4.5567 15.6178L19.0234 2.55268Z"
            : "M-0.000428655 2.55268L2.8289 -0.00014247L18.2396 13.9128C18.488 14.1357 18.6851 14.4008 18.8197 14.6928C18.9542 14.9848 19.0234 15.298 19.0234 15.6142C19.0234 15.9305 18.9542 16.2437 18.8197 16.5357C18.6851 16.8277 18.488 17.0928 18.2396 17.3157L2.8289 31.2358L0.00223782 28.683L14.4662 15.6178L-0.000428655 2.55268Z"
        }
        fill="#D9D9D9"
      />
    </svg>
  );
}

type CorporateBrandShowcaseSectionProps = {
  className?: string;
  title?: string;
  logos?: CorporateBrandShowcaseLogo[];
};

export function CorporateBrandShowcaseSection({
  className,
  title,
  logos: sectionLogos = [],
}: CorporateBrandShowcaseSectionProps) {
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const visibleLogos = sectionLogos.filter(
    (logo): logo is typeof logo & { src: string } => Boolean(logo.src),
  );
  const sliderLogos = [...visibleLogos, ...visibleLogos];

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
    <section className={cn("corporate-brand-showcase", className)}>
      <Container>
        {title ? <h2 className="corporate-brand-showcase__title">{title}</h2> : null}

        {visibleLogos.length > 0 ? (
          <div className="corporate-brand-showcase__slider-row">
            <button
              aria-label="Previous brand"
              className={cn("corporate-brand-showcase__arrow", "corporate-brand-showcase__arrow--left")}
              ref={prevButtonRef}
              type="button"
            >
              <SliderArrowIcon direction="left" />
            </button>

            <Swiper
              breakpoints={{
                0: {
                  centeredSlides: true,
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2.8,
                  spaceBetween: 28,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 120,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="corporate-brand-showcase__logos"
              loop={sliderLogos.length > 1}
              loopAdditionalSlides={visibleLogos.length}
              modules={[Autoplay, Navigation]}
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
              onSwiper={setSwiperInstance}
              speed={550}
              watchOverflow={false}
            >
              {sliderLogos.map((logo, index) => (
                <SwiperSlide className="corporate-brand-showcase__logo-slide" key={`${logo.alt}-${index}`}>
                  <div className="corporate-brand-showcase__logo-wrap">
                    <div className="corporate-brand-showcase__logo-box">
                      <Image
                        alt={logo.alt}
                        className="corporate-brand-showcase__logo"
                        fill
                        sizes="(max-width: 767px) 152px, (max-width: 1023px) 152px, 180px"
                        src={logo.src}
                        unoptimized
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              aria-label="Next brand"
              className="corporate-brand-showcase__arrow"
              ref={nextButtonRef}
              type="button"
            >
              <SliderArrowIcon direction="right" />
            </button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
