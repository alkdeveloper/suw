export type BrandsRoadmapItem = {
  year: string;
  description: string;
};

export type BrandsRoadmapSectionProps = {
  className?: string;
  items?: BrandsRoadmapItem[];
  ctaHref?: string;
  ctaLabel?: string;
  yearSuffix?: string;
};
