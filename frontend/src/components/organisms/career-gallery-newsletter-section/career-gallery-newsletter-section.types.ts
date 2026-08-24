import type { SupportedLocale } from "@/src/lib/locale";

export type CareerGalleryNewsletterSectionProps = {
  className?: string;
  locale?: SupportedLocale;
  title?: string;
  placeholder?: string;
  images?: string[];
  submitAriaLabel?: string;
  successMessage?: string;
  errorMessage?: string;
};
