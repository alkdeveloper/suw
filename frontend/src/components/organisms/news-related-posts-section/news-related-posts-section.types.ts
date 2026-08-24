export type NewsRelatedPostItem = {
  id: string;
  category: string;
  date: string;
  title: string;
  href: string;
};

export type NewsRelatedPostsSectionProps = {
  className?: string;
  title?: string;
  items?: NewsRelatedPostItem[];
  viewAllLabel?: string;
  viewAllHref?: string;
};
