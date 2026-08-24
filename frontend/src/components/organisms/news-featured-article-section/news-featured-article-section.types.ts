export type NewsFeaturedArticle = {
  category: string;
  date: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt: string;
  href: string;
};

export type NewsFeaturedArticleSectionProps = {
  article: NewsFeaturedArticle;
  className?: string;
  ctaLabel?: string;
};
