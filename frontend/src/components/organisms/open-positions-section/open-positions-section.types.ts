export type OpenPositionCard = {
  iconSrc: string;
  title: string;
  countLabel: string;
};

export type OpenPositionsSectionProps = {
  title?: string;
  ctaHref?: string;
  ctaLabel?: string;
  positions: OpenPositionCard[];
  className?: string;
  previousAriaLabel?: string;
  nextAriaLabel?: string;
};
