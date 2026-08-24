export type LegalContentSectionItem = {
  heading: string;
  body: string[];
};

export type LegalContentSectionProps = {
  className?: string;
  intro?: string;
  items: LegalContentSectionItem[];
  lastUpdated: string;
  lastUpdatedLabel?: string;
  title: string;
};
