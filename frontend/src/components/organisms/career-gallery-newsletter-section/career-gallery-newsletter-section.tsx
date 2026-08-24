"use client";

import Image from "next/image";
import { useState } from "react";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { createAPI, getApiErrorMessage } from "@/src/lib/api";
import { cn } from "@/src/lib/cn";
import { DEFAULT_LOCALE } from "@/src/lib/locale";

import type { CareerGalleryNewsletterSectionProps } from "./career-gallery-newsletter-section.types";

import "swiper/css";

function PlaneIcon() {
  return (
    <svg aria-hidden="true" className="career-gallery-newsletter__submit-icon" fill="none" viewBox="0 0 23 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0L0.382812 1.75781L2.07812 9.99023L0.382812 18.2227L0 19.9805L1.55859 19.3066L20.8086 10.8691L22.8047 9.99023L20.8086 9.11133L1.55859 0.673828L0 0ZM2.43359 3.10547L16.0234 9.05273H3.66406L2.43359 3.10547ZM3.66406 10.9277H16.0234L2.43359 16.875L3.66406 10.9277Z"
        fill="#007AFF"
      />
    </svg>
  );
}

export function CareerGalleryNewsletterSection({
  className,
  errorMessage,
  successMessage,
  locale = DEFAULT_LOCALE,
  title,
  placeholder,
  images = [],
  submitAriaLabel,
}: CareerGalleryNewsletterSectionProps) {
  const visibleImages = images.filter(Boolean);
  const sliderImages = visibleImages.length >= 6
    ? visibleImages
    : visibleImages.length > 0
      ? Array.from({ length: Math.ceil(6 / visibleImages.length) }, () => visibleImages).flat().slice(0, 6)
      : [];
  const desktopSlidesPerView = sliderImages.length <= 3 ? 2.15 : 3.35;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedbackMessage("");

    try {
      await createAPI(locale).post("core/newsletter/", { email });
      setStatus("success");
      setFeedbackMessage(successMessage ?? "");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setFeedbackMessage(getApiErrorMessage(error, errorMessage ?? ""));
    }
  }

  return (
    <section className={cn("career-gallery-newsletter", className)}>
      <div className="career-gallery-newsletter__slider-wrap">
        {sliderImages.length > 0 ? (
          <Swiper
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1.15, spaceBetween: 16 },
              640: { slidesPerView: 2.1, spaceBetween: 18 },
              1024: { slidesPerView: desktopSlidesPerView, spaceBetween: 18 },
            }}
            className="career-gallery-newsletter__swiper"
            loop={sliderImages.length > 1}
            loopAdditionalSlides={sliderImages.length}
            modules={[Autoplay]}
            speed={4200}
          >
            {sliderImages.map((imageSrc, index) => (
              <SwiperSlide key={`${imageSrc}-${index}`} className="career-gallery-newsletter__slide">
                <article className="career-gallery-newsletter__image-card">
                  <Image
                    alt=""
                    className="career-gallery-newsletter__image"
                    height={428}
                    src={imageSrc}
                    unoptimized
                    width={388}
                  />
                  <div className="career-gallery-newsletter__overlay" />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}

        <div className="career-gallery-newsletter__newsletter">
          <div className="career-gallery-newsletter__newsletter-inner">
            {title ? <h2 className="career-gallery-newsletter__title">{title}</h2> : null}

            <form className="career-gallery-newsletter__form" onSubmit={handleSubmit}>
              <div className="career-gallery-newsletter__input-wrap">
                <input
                  className="career-gallery-newsletter__input"
                  placeholder={placeholder ?? ""}
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <button
                  aria-label={submitAriaLabel}
                  className="career-gallery-newsletter__submit"
                  disabled={status === "submitting"}
                  type="submit"
                >
                  <PlaneIcon />
                </button>
              </div>
              {feedbackMessage ? (
                <p
                  aria-live="polite"
                  className={cn(
                    "career-gallery-newsletter__feedback",
                    status === "error" && "career-gallery-newsletter__feedback--error",
                    status === "success" && "career-gallery-newsletter__feedback--success",
                  )}
                >
                  {feedbackMessage}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
