import type { SupportedLocale } from "@/src/lib/locale";

export type ApplicationSummaryTag = {
  label: string;
};

export type CareerApplicationFormSectionProps = {
  className?: string;
  /** Sayfa içi anchor (ör. ilan detayından #career-application). */
  id?: string;
  locale?: SupportedLocale;
  kvkkHref?: string;
  positionId?: number | null;
  summaryTags?: ApplicationSummaryTag[];
  summaryText?: string;
  summaryTitle?: string;
  copy?: {
    positionSummaryLabel?: string;
    formTitle?: string;
    submitLabel?: string;
    submittingLabel?: string;
    uploadLabel?: string;
    privacyLinkLabel?: string;
    privacyConsentText?: string;
    feedbackSuccessMessage?: string;
    feedbackErrorMessage?: string;
    feedbackMissingCvMessage?: string;
    fields?: {
      first_name?: string;
      last_name?: string;
      email?: string;
      phone?: string;
      cv?: string;
      cover_letter?: string;
    };
    placeholders?: {
      first_name?: string;
      last_name?: string;
      email?: string;
      phone?: string;
      cv?: string;
      cover_letter?: string;
    };
  };
};
