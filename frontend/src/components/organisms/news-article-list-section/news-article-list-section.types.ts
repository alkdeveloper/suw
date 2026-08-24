export type NewsArticleListItem = {
  id: string;
  category: string;
  date: string;
  title: string;
  href: string;
};

export type NewsArticleListSectionProps = {
  items: NewsArticleListItem[];
  className?: string;
  loadMoreLabel?: string;
};
