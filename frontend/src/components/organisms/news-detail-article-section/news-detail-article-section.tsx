"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/src/components/atoms/container";
import { ImageLightbox } from "@/src/components/molecules/image-lightbox/image-lightbox";
import { cn } from "@/src/lib/cn";

import type { NewsDetailArticleSectionProps } from "./news-detail-article-section.types";

function CalendarIcon() {
  return (
    <svg aria-hidden="true" className="news-detail-article__date-icon" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.25" y="3.75" width="13.5" height="12" rx="2.25" stroke="#000100" strokeWidth="1.5" />
      <path d="M5.25 2.25V5.25" stroke="#000100" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M12.75 2.25V5.25" stroke="#000100" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M2.25 7.5H15.75" stroke="#000100" strokeWidth="1.5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.25" cy="6.75" r="1" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5L19 19" stroke="currentColor" strokeWidth="1.8" />
      <path d="M19 5L5 19" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 20V12.75H16L16.375 9.75H13.5V7.875C13.5 7.0225 13.7325 6.375 14.955 6.375H16.5V3.69C16.23 3.6525 15.3075 3.5625 14.2425 3.5625C12.015 3.5625 10.5 4.92 10.5 7.4175V9.75H8V12.75H10.5V20H13.5Z" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 8.5C7.32843 8.5 8 7.82843 8 7C8 6.17157 7.32843 5.5 6.5 5.5C5.67157 5.5 5 6.17157 5 7C5 7.82843 5.67157 8.5 6.5 8.5Z" fill="currentColor" />
      <path d="M5.25 9.75H7.75V18.75H5.25V9.75Z" fill="currentColor" />
      <path d="M10 9.75H12.4V11.025H12.435C12.77 10.3875 13.5925 9.715 14.815 9.715C17.3575 9.715 17.825 11.3875 17.825 13.56V18.75H15.325V14.1525C15.325 13.0575 15.3075 11.6475 13.81 11.6475C12.2925 11.6475 12.06 12.8325 12.06 14.07V18.75H9.56V9.75H10Z" fill="currentColor" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6.25" width="18" height="11.5" rx="3" fill="currentColor" />
      <path d="M10 9.75V14.25L14.25 12L10 9.75Z" fill="#F5F5F5" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 8L11.5 16L19.5 24" stroke="#33A6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 8L20.5 16L12.5 24" stroke="#33A6FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export function NewsDetailArticleSection({
  className,
  date,
  title,
  imageSrc,
  imageAlt = "Nordbron bag collection",
  paragraphs = [],
  previousItem,
  nextItem,
  shareTitle,
}: NewsDetailArticleSectionProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (!isLightboxOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <>
      <section className={cn("news-detail-article", className)}>
        <Container className="max-w-[1260px] px-5 md:px-[30px]">
          <div className="news-detail-article__layout">
            <aside className="news-detail-article__aside">
              <div className="news-detail-article__image-wrap">
                {imageSrc ? (
                  <button
                    aria-label={imageAlt ? `${imageAlt} image` : "Open image"}
                    className="news-detail-article__image-button"
                    onClick={() => setIsLightboxOpen(true)}
                    type="button"
                  >
                    <Image
                      alt={imageAlt}
                      className="news-detail-article__image"
                      height={579}
                      priority
                      src={imageSrc}
                      width={446}
                    />
                    <div className="news-detail-article__image-overlay" />
                  </button>
                ) : null}

                {!imageSrc ? <div className="news-detail-article__image-overlay" /> : null}
              </div>

              <div className="news-detail-article__share">
                <p className="news-detail-article__share-title">{shareTitle}</p>

                <div className="news-detail-article__share-links">
                  <a aria-label="Instagram" className="news-detail-article__share-link" href="#">
                    <InstagramIcon />
                  </a>
                  <a aria-label="X" className="news-detail-article__share-link" href="#">
                    <XIcon />
                  </a>
                  <a aria-label="Facebook" className="news-detail-article__share-link" href="#">
                    <FacebookIcon />
                  </a>
                  <a aria-label="LinkedIn" className="news-detail-article__share-link" href="#">
                    <LinkedinIcon />
                  </a>
                  <a aria-label="YouTube" className="news-detail-article__share-link" href="#">
                    <YoutubeIcon />
                  </a>
                </div>
              </div>
            </aside>

            <div className="news-detail-article__content">
              <div className="news-detail-article__date">
                <CalendarIcon />
                <span>{date}</span>
              </div>

              <h1 className="news-detail-article__title">{title}</h1>

              <div className="news-detail-article__body">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="news-detail-article__pagination">
            {previousItem ? (
              <Link className="news-detail-article__pagination-item news-detail-article__pagination-item--prev" href={previousItem.href}>
                <ArrowLeftIcon />
                <div>
                  <p className="news-detail-article__pagination-label">{previousItem.label}</p>
                  <p className="news-detail-article__pagination-text">{previousItem.text}</p>
                </div>
              </Link>
            ) : <div />}

            <div className="news-detail-article__pagination-divider" />

            {nextItem ? (
              <Link className="news-detail-article__pagination-item news-detail-article__pagination-item--next" href={nextItem.href}>
                <div>
                  <p className="news-detail-article__pagination-label">{nextItem.label}</p>
                  <p className="news-detail-article__pagination-text">{nextItem.text}</p>
                </div>
                <ArrowRightIcon />
              </Link>
            ) : <div />}
          </div>
        </Container>
      </section>

      {isLightboxOpen && imageSrc ? (
        <ImageLightbox
          closeAriaLabel="Close image"
          image={{ alt: imageAlt, src: imageSrc }}
          imageFit="contain"
          onClose={() => setIsLightboxOpen(false)}
        />
      ) : null}
    </>
  );
}
