export type CorporateTimelineItem = {
  year: string;
  text: string;
};

export type CorporateTimelineVariant = "corporate" | "brands";

export type CorporateTimelineSectionProps = {
  className?: string;
  eyebrow?: string;
  title?: string;
  items?: CorporateTimelineItem[];
  variant?: CorporateTimelineVariant;
};
