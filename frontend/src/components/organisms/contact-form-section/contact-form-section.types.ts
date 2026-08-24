import type { SupportedLocale } from "@/src/lib/locale";

export type ContactFormSectionProps = {
  className?: string;
  locale?: SupportedLocale;
  infoTitle?: string;
  infoDescription?: string;
  infoImageSrc?: string;
  phone?: string;
  email?: string;
  address?: string;
  formTitle?: string;
  kvkkText?: string;
  kvkkHref?: string;
  copy?: {
    submitLabel?: string;
    submittingLabel?: string;
    privacyLinkLabel?: string;
    feedbackSuccessMessage?: string;
    feedbackErrorMessage?: string;
    fields?: {
      first_name?: string;
      last_name?: string;
      email?: string;
      phone?: string;
      subject?: string;
      message?: string;
    };
    placeholders?: {
      first_name?: string;
      last_name?: string;
      email?: string;
      phone?: string;
      subject?: string;
      message?: string;
    };
  };
};
