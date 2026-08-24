"use client";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

type ImageLightboxProps = {
  image: {
    alt: string;
    src: string;
  } | null;
  closeAriaLabel?: string;
  previousAriaLabel?: string;
  nextAriaLabel?: string;
  imageFit?: "cover" | "contain";
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
};

function ModalArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("image-lightbox__arrow-icon", direction === "left" && "image-lightbox__arrow-icon--left")}
      fill="none"
      height="35"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" className="image-lightbox__close-icon" fill="none" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7L17 17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M17 7L7 17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export function ImageLightbox({
  image,
  closeAriaLabel = "Close image",
  previousAriaLabel = "Previous image",
  nextAriaLabel = "Next image",
  imageFit = "cover",
  onClose,
  onPrevious,
  onNext,
}: ImageLightboxProps) {
  if (!image) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      className="image-lightbox"
      onClick={onClose}
      role="dialog"
    >
      <Container className="image-lightbox__shell">
        <div className="image-lightbox__panel" onClick={(event) => event.stopPropagation()}>
          {onPrevious ? (
            <button
              aria-label={previousAriaLabel}
              className="image-lightbox__nav image-lightbox__nav--left"
              onClick={onPrevious}
              type="button"
            >
              <ModalArrowIcon direction="left" />
            </button>
          ) : null}

          <button
            aria-label={closeAriaLabel}
            className="image-lightbox__close"
            onClick={onClose}
            type="button"
          >
            <CloseIcon />
          </button>

          <div className="image-lightbox__image-wrap">
            <img
              alt={image.alt}
              className={cn("image-lightbox__image", imageFit === "contain" && "image-lightbox__image--contain")}
              decoding="async"
              loading="eager"
              src={image.src}
            />
          </div>

          {onNext ? (
            <button
              aria-label={nextAriaLabel}
              className="image-lightbox__nav image-lightbox__nav--right"
              onClick={onNext}
              type="button"
            >
              <ModalArrowIcon />
            </button>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
