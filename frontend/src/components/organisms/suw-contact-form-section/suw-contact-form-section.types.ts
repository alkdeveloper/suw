export type ContactFormSectionProps = {
  className?: string;
  locale?: "tr" | "en";

  infoTitle?: string;
  infoDescription?: string;

  phone?: string;
  email?: string;
  address?: string;

  formTitle?: string;

  kvkkText?: string;
  kvkkHref?: string;

  copy?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    projectInquiryLabel?: string;
    projectTitle?: string;

    submitLabel?: string;
    submittingLabel?: string;

    feedbackSuccessMessage?: string;
    feedbackErrorMessage?: string;

    privacyLinkLabel?: string;

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