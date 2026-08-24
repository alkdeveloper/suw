import Image from "next/image";
import Link from "next/link";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { NewsFeaturedArticleSectionProps } from "./news-featured-article-section.types";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="news-featured-article__button-icon" fill="none" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.452 6.58L3.513 5.52L9.292 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.513 18.49L2.453 17.43L7.877 12.005L2.452 6.58Z"
        fill="#223035"
      />
    </svg>
  );
}

export function NewsFeaturedArticleSection({ article, className, ctaLabel }: NewsFeaturedArticleSectionProps) {
  return (
    <section className={cn("news-featured-article", className)}>
      <Container className="max-w-[1200px] px-5 md:px-8">
        <div className="news-featured-article__layout">
          {article.imageSrc ? (
            <div className="news-featured-article__media">
              <Image
                alt={article.imageAlt}
                className="news-featured-article__image"
                height={399}
                priority
                src={article.imageSrc}
                width={610}
              />
            </div>
          ) : null}

          <div className="news-featured-article__content">
            <p className="news-featured-article__meta">
              <span className="news-featured-article__meta-category">{article.category}</span>
              <span>/</span>
              <span className="news-featured-article__meta-date">{article.date}</span>
            </p>

            <h2 className="news-featured-article__title">{article.title}</h2>

            <p className="news-featured-article__description">{article.description}</p>

            <Link className="news-featured-article__button" href={article.href}>
              <span>{ctaLabel}</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
