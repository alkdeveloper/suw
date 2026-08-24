export type BrandsShowcaseCard = {
  id: string;
  title?: string;
  imageSrc?: string;
  imageAlt: string;
  logoSrc?: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  href?: string;
  ctaLabel?: string;
  isExternal?: boolean;
};

export type BrandsShowcaseSectionProps = {
  className?: string;
  cards?: BrandsShowcaseCard[];
};
