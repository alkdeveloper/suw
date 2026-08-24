export type NewsDetailNavItem = {
  label: string;
  text: string;
  href: string;
};

export type NewsDetailShareLink = {
  href: string;
  label: string;
  type: "instagram" | "x" | "facebook" | "linkedin" | "youtube";
};

export type NewsDetailArticleSectionProps = {
  className?: string;
  date?: string;
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  paragraphs?: string[];
  previousItem?: NewsDetailNavItem | null;
  nextItem?: NewsDetailNavItem | null;
  shareTitle?: string;
};
