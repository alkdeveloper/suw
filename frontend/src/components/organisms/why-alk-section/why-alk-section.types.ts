export type WhyAlkStat = {
  label: string;
  value: number;
  suffix?: string;
  trailingText?: string;
};

export type WhyAlkSectionProps = {
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
  stats: WhyAlkStat[];
  className?: string;
};

export type WhyAlkStatisticCardProps = {
  stat: WhyAlkStat;
  isActive: boolean;
};
