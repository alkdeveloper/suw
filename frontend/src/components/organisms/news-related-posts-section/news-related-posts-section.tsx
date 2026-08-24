import Link from "next/link";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { NewsRelatedPostsSectionProps } from "./news-related-posts-section.types";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="news-related-posts__button-icon" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3L9 7L5 11" stroke="#000100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
    </svg>
  );
}

export function NewsRelatedPostsSection({
  className,
  title,
  items = [],
  viewAllLabel,
  viewAllHref,
}: NewsRelatedPostsSectionProps) {
  return (
    <section className={cn("news-related-posts", className)}>
      <Container className="max-w-[1368px] px-5 md:px-[30px]">
        <div className="news-related-posts__header">
          {title ? <h2 className="news-related-posts__title">{title}</h2> : null}

          <Link className="news-related-posts__button" href={viewAllHref ?? "/news"}>
            <span>{viewAllLabel}</span>
            <ArrowIcon />
          </Link>
        </div>

        <div className="news-related-posts__grid">
          {items.map((post) => (
            <article className="news-related-posts__item" key={post.id}>
              <p className="news-related-posts__meta">
                <span>{post.category}</span>
                <span>/</span>
                <span>{post.date}</span>
              </p>

              <Link className="news-related-posts__link" href={post.href}>
                {post.title}
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
