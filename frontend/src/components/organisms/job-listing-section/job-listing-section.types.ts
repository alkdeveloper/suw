export type JobListTag = {
  label: string;
};

export type JobListMeta = {
  label: string;
  value: string;
};

export type JobListItem = {
  id: string;
  slug: string;
  ctaHref?: string;
  title: string;
  summary: string;
  tags: JobListTag[];
  responsibilities: string[];
  expectations: string[];
  meta: JobListMeta[];
  muted?: boolean;
};

export type JobListingSectionProps = {
  intro?: string;
  ctaHref?: string;
  ctaLabel?: string;
  applicationHref?: string;
  jobs: JobListItem[];
  className?: string;
  responsibilitiesLabel?: string;
  expectationsLabel?: string;
  /** İlan seçimini üst bileşenle eşlemek için (ör. başvuru formu). */
  activeJobId?: string;
  onActiveJobIdChange?: (jobId: string) => void;
};

export type JobCardProps = {
  item: JobListItem;
  isActive: boolean;
  onSelect: () => void;
};

export type JobDetailPanelProps = {
  item: JobListItem;
  ctaHref?: string;
  ctaLabel?: string;
  applicationHref?: string;
  responsibilitiesLabel?: string;
  expectationsLabel?: string;
};
