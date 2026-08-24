"use client";

import { useMemo, useState } from "react";

import { CareerApplicationFormSection } from "@/src/components/organisms/career-application-form-section";
import { JobListingSection } from "@/src/components/organisms/job-listing-section";
import type { JobListItem } from "@/src/components/organisms/job-listing-section/job-listing-section.types";
import type { CareerApplicationFormCopyResponse, JobPositionDetailResponse } from "@/src/lib/api-types";
import type { SupportedLocale } from "@/src/lib/locale";

export type CareerPositionsAndApplicationProps = {
  locale: SupportedLocale;
  kvkkHref: string;
  applyFormTitle: string;
  positions: JobPositionDetailResponse[];
  listingIntro?: string;
  listingJobs: JobListItem[];
  listingCtaHref?: string;
  listingCtaLabel?: string;
  responsibilitiesLabel?: string;
  expectationsLabel?: string;
  applicationFormCopy: CareerApplicationFormCopyResponse;
};

export function CareerPositionsAndApplication({
  locale,
  kvkkHref,
  applyFormTitle,
  positions,
  listingIntro,
  listingJobs,
  listingCtaHref,
  listingCtaLabel,
  responsibilitiesLabel,
  expectationsLabel,
  applicationFormCopy,
}: CareerPositionsAndApplicationProps) {
  const [activeJobId, setActiveJobId] = useState(() => listingJobs[0]?.id ?? "");

  const activePosition = useMemo(() => {
    const byId = positions.find((p) => String(p.id) === activeJobId);
    return byId ?? positions[0];
  }, [activeJobId, positions]);

  const summaryTags = useMemo(() => {
    if (!activePosition) {
      return [];
    }

    return [
      { label: activePosition.experience_level ?? "" },
      { label: activePosition.employment_type_display ?? "" },
      { label: activePosition.location ?? "" },
    ].filter((item) => item.label);
  }, [activePosition]);

  const formCopy = {
    feedbackErrorMessage: applicationFormCopy.feedback_error_message,
    feedbackMissingCvMessage: applicationFormCopy.feedback_missing_cv_message,
    feedbackSuccessMessage: applicationFormCopy.feedback_success_message,
    fields: applicationFormCopy.fields,
    formTitle: applicationFormCopy.form_title,
    placeholders: applicationFormCopy.placeholders,
    positionSummaryLabel: applicationFormCopy.position_summary_label,
    privacyConsentText: applicationFormCopy.privacy_consent_text,
    privacyLinkLabel: applicationFormCopy.privacy_link_label,
    submitLabel: applicationFormCopy.submit_label,
    submittingLabel: applicationFormCopy.submitting_label,
    uploadLabel: applicationFormCopy.upload_label,
  };

  const applicationForm = (
    <CareerApplicationFormSection
      key={activePosition?.id ?? "no-position"}
      className={listingJobs.length ? "career-positions-and-application__form" : undefined}
      copy={formCopy}
      id="career-application"
      kvkkHref={kvkkHref}
      locale={locale}
      positionId={activePosition?.id ?? null}
      summaryTags={summaryTags}
      summaryText={activePosition?.description ?? ""}
      summaryTitle={activePosition?.title || applyFormTitle}
    />
  );

  if (!listingJobs.length) {
    return <div className="career-positions-and-application">{applicationForm}</div>;
  }

  return (
    <div className="career-positions-and-application">
      <JobListingSection
        activeJobId={activeJobId}
        className="career-positions-and-application__listing"
        ctaHref={listingCtaHref}
        ctaLabel={listingCtaLabel}
        expectationsLabel={expectationsLabel}
        intro={listingIntro}
        jobs={listingJobs}
        onActiveJobIdChange={setActiveJobId}
        responsibilitiesLabel={responsibilitiesLabel}
      />
      {applicationForm}
    </div>
  );
}
