import type { Metadata } from "next";

import { CareerApplicationFormSection } from "@/src/components/organisms/career-application-form-section";
import { CareerContactCtaSection } from "@/src/components/organisms/career-contact-cta-section";
import { CareerGalleryNewsletterSection } from "@/src/components/organisms/career-gallery-newsletter-section";
import { CareerMarqueeSection } from "@/src/components/organisms/career-marquee-section";
import { MiniHero } from "@/src/components/organisms/mini-hero";
import { OpenPositionsSection } from "@/src/components/organisms/open-positions-section";
import type { CareerPageResponse, JobPositionDetailResponse } from "@/src/lib/api-types";
import { createAPI } from "@/src/lib/api";
import { LEGAL_PAGE_PATHS } from "@/src/lib/legal";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { createPageMetadata } from "@/src/lib/metadata";

const careerApplicationGlow = "/images/figma-assets/career-application-glow.svg";
const generalApplicationTitleByLocale: Record<SupportedLocale, string> = {
  tr: "Genel Başvuru",
  en: "General Application",
};

type CareerApplicationPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
  searchParams: Promise<{
    position?: string | string[];
  }>;
};

async function getCareerPage(locale: SupportedLocale) {
  const response = await createAPI(locale).get<CareerPageResponse>("careers/");

  return response.data;
}

async function getJobPositionDetail(locale: SupportedLocale, slug: string) {
  const response = await createAPI(locale).get<JobPositionDetailResponse>(`careers/positions/${slug}/`);

  return response.data;
}

export const metadata: Metadata = createPageMetadata({
  title: "Kariyer Başvuru",
  description: "ALK Group açık pozisyonlarına başvurun ve kariyer yolculuğunuza yön verin.",
  path: "/career/application",
});

export default async function CareerApplicationPage({ params, searchParams }: CareerApplicationPageProps) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  const positionSlug = Array.isArray(resolvedSearchParams.position)
    ? resolvedSearchParams.position[0]
    : resolvedSearchParams.position;
  const page = await getCareerPage(locale);
  const selectedPosition = positionSlug ? await getJobPositionDetail(locale, positionSlug) : null;
  const midpoint = Math.ceil(page.ticker_words.length / 2);
  const summaryTags = [
    { label: selectedPosition?.experience_level ?? "" },
    { label: selectedPosition?.employment_type_display ?? "" },
    { label: selectedPosition?.location ?? "" },
  ].filter((item) => item.label);
  const summaryTitle = selectedPosition?.title || generalApplicationTitleByLocale[locale];

  return (
    <main>
      <MiniHero
        backgroundImageSrc={page.hero_image ?? undefined}
        contentAlignment="bottom-left"
        glowImageSrc={careerApplicationGlow}
        title={page.hero_title}
      />
      <CareerApplicationFormSection
        copy={
          page.application_form_copy
            ? {
                feedbackErrorMessage: page.application_form_copy.feedback_error_message,
                feedbackMissingCvMessage: page.application_form_copy.feedback_missing_cv_message,
                feedbackSuccessMessage: page.application_form_copy.feedback_success_message,
                fields: page.application_form_copy.fields,
                formTitle: page.application_form_copy.form_title,
                placeholders: page.application_form_copy.placeholders,
                positionSummaryLabel: page.application_form_copy.position_summary_label,
                privacyConsentText: page.application_form_copy.privacy_consent_text,
                privacyLinkLabel: page.application_form_copy.privacy_link_label,
                submitLabel: page.application_form_copy.submit_label,
                submittingLabel: page.application_form_copy.submitting_label,
                uploadLabel: page.application_form_copy.upload_label,
              }
            : undefined
        }
        kvkkHref={withLocalePath(locale, LEGAL_PAGE_PATHS.candidatePrivacyNotice)}
        locale={locale}
        positionId={selectedPosition?.id ?? null}
        summaryTags={summaryTags}
        summaryText={selectedPosition?.description ?? ""}
        summaryTitle={summaryTitle}
      />
      <OpenPositionsSection
        positions={page.departments.map((department) => ({
          countLabel: `${department.position_count} ${page.open_positions_copy?.count_label_suffix ?? ""}`.trim(),
          iconSrc: department.icon ?? "",
          title: department.name,
        }))}
        nextAriaLabel={page.open_positions_copy?.next_aria_label}
        previousAriaLabel={page.open_positions_copy?.previous_aria_label}
        title={page.positions_title}
      />
      <CareerContactCtaSection
        description={page.contact_description}
        eyebrow={page.contact_label}
        primaryHref={page.contact_button_url ? withLocalePath(locale, page.contact_button_url) : undefined}
        primaryLabel={page.contact_button_text || undefined}
        secondaryHref={page.apply_button_url ? withLocalePath(locale, page.apply_button_url) : undefined}
        secondaryLabel={page.apply_button_text || undefined}
        title={page.contact_title}
      />
      <CareerMarqueeSection
        bottomRowItems={page.ticker_words.slice(midpoint).map((item) => item.text)}
        topRowItems={page.ticker_words.slice(0, midpoint).map((item) => item.text)}
      />
      <CareerGalleryNewsletterSection
        errorMessage={page.newsletter_error_message}
        images={page.activities.map((activity) => activity.image ?? "").filter(Boolean)}
        locale={locale}
        placeholder={page.newsletter_placeholder}
        submitAriaLabel={page.newsletter_submit_aria_label}
        successMessage={page.newsletter_success_message}
        title={page.newsletter_title}
      />
    </main>
  );
}
