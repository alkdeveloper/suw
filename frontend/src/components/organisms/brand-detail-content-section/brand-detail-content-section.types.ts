export type BrandDetailContentCard = {
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
  showCtaByDefault?: boolean;
};

export type BrandDetailContentSectionProps = {
  topDescription?: string;
  bottomDescription?: string;
  cards: BrandDetailContentCard[];
  className?: string;
};
