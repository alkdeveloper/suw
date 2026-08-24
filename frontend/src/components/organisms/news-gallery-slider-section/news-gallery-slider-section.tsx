"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "@/src/components/atoms/container";
import { ImageLightbox } from "@/src/components/molecules/image-lightbox/image-lightbox";
import { cn } from "@/src/lib/cn";

import type { NewsGallerySliderSectionProps } from "./news-gallery-slider-section.types";

import "swiper/css";

export function NewsGallerySliderSection({
  className,
  hideTitle = false,
  title,
  images = [],
}: NewsGallerySliderSectionProps) {
  const visibleImages = images.filter((image): image is typeof image & { src: string } => Boolean(image.src));
  const repeatedImages = [...visibleImages, ...visibleImages, ...visibleImages, ...visibleImages, ...visibleImages, ...visibleImages];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
        setActiveIndex((currentIndex) => (currentIndex === null ? 0 : (currentIndex + 1) % visibleImages.length));
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((currentIndex) =>
          currentIndex === null ? visibleImages.length - 1 : (currentIndex - 1 + visibleImages.length) % visibleImages.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, visibleImages.length]);

  const activeImage = activeIndex === null ? null : visibleImages[activeIndex];

  return (
    <>
      <section className={cn("news-gallery-slider", className)}>
        <Container>
          {!hideTitle ? <h2 className="news-gallery-slider__title">{title}</h2> : null}
          <div className="news-gallery-slider__container">
            <Swiper
              autoplay={{
                delay: 3200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              centeredSlides
              className="news-gallery-slider__swiper"
              grabCursor
              loop={true}
              loopAdditionalSlides={6}
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={-36}
              speed={650}
              breakpoints={{
                480: { slidesPerView: 3, spaceBetween: -40 },
                768: { slidesPerView: 3, spaceBetween: -44 },
                1024: { slidesPerView: 3, spaceBetween: -48 },
                1280: { slidesPerView: 3, spaceBetween: -52 },
              }}
            >
              {repeatedImages.map((item, index) => (
                <SwiperSlide className="news-gallery-slider__slide" key={`${item.src}-${index}`}>
                  <button
                    aria-label={item.alt ? `${item.alt} image` : "Open gallery image"}
                    className="news-gallery-slider__card"
                    onClick={() => setActiveIndex(index % visibleImages.length)}
                    type="button"
                  >
                    <Image
                      alt={item.alt}
                      className="news-gallery-slider__image"
                      height={412}
                      sizes="(max-width: 767px) 42vw, 480px"
                      src={item.src}
                      unoptimized
                      width={632}
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </section>

      <ImageLightbox
        closeAriaLabel="Close image"
        image={activeImage ? { alt: activeImage.alt, src: activeImage.src } : null}
        nextAriaLabel="Next image"
        onClose={() => setActiveIndex(null)}
        onNext={() => setActiveIndex((currentIndex) => (currentIndex === null ? 0 : (currentIndex + 1) % visibleImages.length))}
        onPrevious={() =>
          setActiveIndex((currentIndex) =>
            currentIndex === null ? visibleImages.length - 1 : (currentIndex - 1 + visibleImages.length) % visibleImages.length,
          )
        }
        previousAriaLabel="Previous image"
      />
    </>
  );
}
