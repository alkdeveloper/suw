"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import type { CareerApplicationFormSectionProps } from "./career-application-form-section.types";
import { Container } from "@/src/components/atoms/container";
import { createAPI, getApiErrorMessage } from "@/src/lib/api";
import { cn } from "@/src/lib/cn";
import { LEGAL_PAGE_PATHS } from "@/src/lib/legal";
import { DEFAULT_LOCALE } from "@/src/lib/locale";

const applicationSuccessMessageByLocale = {
  tr: "Başvurunuz alınmıştır.",
  en: "Your application has been received.",
} as const;

const invalidFileMessageByLocale = {
  tr: "Lütfen yalnızca PDF dosyası yükleyiniz.",
  en: "Please upload a PDF file only.",
} as const;

function UploadIcon() {
  return (
    <svg aria-hidden="true" className="career-application-form__upload-icon" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#career-application-form-upload-clip)">
        <mask
          height="24"
          id="career-application-form-upload-mask"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
          width="24"
          x="0"
          y="0"
        >
          <path d="M24 0H0V24H24V0Z" fill="white" />
        </mask>
        <g mask="url(#career-application-form-upload-mask)">
          <path
            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM11.53 13.53C11.38 13.68 11.19 13.75 11 13.75C10.81 13.75 10.62 13.68 10.47 13.53L9.75 12.81V17C9.75 17.41 9.41 17.75 9 17.75C8.59 17.75 8.25 17.41 8.25 17V12.81L7.53 13.53C7.24 13.82 6.76 13.82 6.47 13.53C6.18 13.24 6.18 12.76 6.47 12.47L8.47 10.47C8.54 10.41 8.61 10.36 8.69 10.32C8.71 10.31 8.74 10.3 8.76 10.29C8.82 10.27 8.88 10.26 8.95 10.25C8.98 10.25 9 10.25 9.03 10.25C9.11 10.25 9.19 10.27 9.27 10.3C9.28 10.3 9.28 10.3 9.29 10.3C9.37 10.33 9.45 10.39 9.51 10.45C9.52 10.46 9.53 10.46 9.53 10.47L11.53 12.47C11.82 12.76 11.82 13.24 11.53 13.53Z"
            fill="#223035"
          />
          <path
            d="M17.4297 8.81048C18.3797 8.82048 19.6997 8.82048 20.8297 8.82048C21.3997 8.82048 21.6997 8.15048 21.2997 7.75048C19.8597 6.30048 17.2797 3.69048 15.7997 2.21048C15.3897 1.80048 14.6797 2.08048 14.6797 2.65048V6.14048C14.6797 7.60048 15.9197 8.81048 17.4297 8.81048Z"
            fill="#223035"
          />
        </g>
      </g>
      <defs>
        <clipPath id="career-application-form-upload-clip">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="career-application-form__submit-icon" fill="none" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.45199 6.57999L3.51299 5.51999L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.51299 18.49L2.45299 17.43L7.87699 12.005L2.45199 6.57999Z"
        fill="#223035"
      />
    </svg>
  );
}

export function CareerApplicationFormSection({
  className,
  id,
  copy,
  kvkkHref = LEGAL_PAGE_PATHS.candidatePrivacyNotice,
  locale = DEFAULT_LOCALE,
  positionId = null,
  summaryTags = [],
  summaryText = "",
  summaryTitle = "",
}: CareerApplicationFormSectionProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coverLetter: "",
    kvkkAccepted: false,
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const successMessage = copy?.feedbackSuccessMessage?.trim() || applicationSuccessMessageByLocale[locale];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!cvFile) {
      setStatus("error");
      setFeedbackMessage(copy?.feedbackMissingCvMessage ?? "");
      return;
    }

    setStatus("submitting");
    setFeedbackMessage("");

    try {
      const formData = new FormData();

      if (positionId) {
        formData.append("position", String(positionId));
      }

      formData.append("first_name", formState.firstName);
      formData.append("last_name", formState.lastName);
      formData.append("email", formState.email);

      if (formState.phone) {
        formData.append("phone", formState.phone);
      }

      if (formState.coverLetter) {
        formData.append("cover_letter", formState.coverLetter);
      }

      formData.append("kvkk_accepted", String(formState.kvkkAccepted));
      formData.append("cv_file", cvFile);

      await createAPI(locale).post("careers/apply/", formData);

      setStatus("success");
      setFeedbackMessage(successMessage);
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        coverLetter: "",
        kvkkAccepted: false,
      });
      setCvFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      setStatus("error");
      setFeedbackMessage(getApiErrorMessage(error, copy?.feedbackErrorMessage ?? ""));
    }
  }

  return (
    <section className={cn("career-application-form", className)} id={id}>
      <Container>
        <div className="career-application-form__layout">
          <div>
            <p className="career-application-form__summary-label">{copy?.positionSummaryLabel}</p>

            <article className="career-application-form__summary-card">
              <h2 className="career-application-form__summary-title">{summaryTitle}</h2>

              {summaryTags.length > 0 ? (
                <div className="career-application-form__summary-tags">
                  {summaryTags.map((tag) => (
                    <span key={tag.label} className="career-application-form__summary-tag">
                      {tag.label}
                    </span>
                  ))}
                </div>
              ) : null}

              {summaryText ? <p className="career-application-form__summary-text">{summaryText}</p> : null}
            </article>
          </div>

          <div>
            <p className="career-application-form__title">{copy?.formTitle}</p>

            <form className="career-application-form__form-shell" onSubmit={handleSubmit}>
            <div className="career-application-form__grid">
              <label>
                <p className="career-application-form__field-label">{copy?.fields?.first_name}</p>
                <input
                  className="career-application-form__field-input"
                  placeholder={copy?.placeholders?.first_name}
                  required
                  type="text"
                  value={formState.firstName}
                  onChange={(event) => setFormState((current) => ({ ...current, firstName: event.target.value }))}
                />
              </label>

              <label>
                <p className="career-application-form__field-label">{copy?.fields?.last_name}</p>
                <input
                  className="career-application-form__field-input"
                  placeholder={copy?.placeholders?.last_name}
                  required
                  type="text"
                  value={formState.lastName}
                  onChange={(event) => setFormState((current) => ({ ...current, lastName: event.target.value }))}
                />
              </label>

              <label>
                <p className="career-application-form__field-label">{copy?.fields?.email}</p>
                <input
                  className="career-application-form__field-input"
                  placeholder={copy?.placeholders?.email}
                  required
                  type="email"
                  value={formState.email}
                  onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                />
              </label>

              <label>
                <p className="career-application-form__field-label">{copy?.fields?.phone}</p>
                <input
                  className="career-application-form__field-input"
                  placeholder={copy?.placeholders?.phone}
                  type="tel"
                  value={formState.phone}
                  onChange={(event) => setFormState((current) => ({ ...current, phone: event.target.value }))}
                />
              </label>

              <div className="career-application-form__field--full career-application-form__upload-row">
                <label className="career-application-form__upload-field">
                  <p className="career-application-form__field-label">{copy?.fields?.cv}</p>
                  <input
                    className="career-application-form__field-input"
                    placeholder={copy?.placeholders?.cv}
                    readOnly
                    type="text"
                    value={cvFile?.name ?? ""}
                  />
                  <input
                    ref={fileInputRef}
                    accept=".pdf,application/pdf"
                    className="career-application-form__file-input"
                    required
                    type="file"
                    onChange={(event) => {
                      const file = event.target.files?.[0] ?? null;
                      const isPdf =
                        file != null &&
                        (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf"));

                      if (file && !isPdf) {
                        event.target.value = "";
                        setCvFile(null);
                        setStatus("error");
                        setFeedbackMessage(invalidFileMessageByLocale[locale]);
                        return;
                      }

                      setCvFile(file);

                      if (status === "error") {
                        setStatus("idle");
                        setFeedbackMessage("");
                      }
                    }}
                  />
                </label>

                <button
                  className="career-application-form__upload-button"
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <span>{copy?.uploadLabel}</span>
                  <UploadIcon />
                </button>
              </div>

              <label className="career-application-form__field--full">
                <p className="career-application-form__field-label">{copy?.fields?.cover_letter}</p>
                <textarea
                  className="career-application-form__field-textarea"
                  placeholder={copy?.placeholders?.cover_letter}
                  value={formState.coverLetter}
                  onChange={(event) => setFormState((current) => ({ ...current, coverLetter: event.target.value }))}
                />
              </label>
            </div>

            <div className="career-application-form__bottom">
              <label className="career-application-form__consent">
                <input
                  checked={formState.kvkkAccepted}
                  className="career-application-form__checkbox"
                  type="checkbox"
                  onChange={(event) => setFormState((current) => ({ ...current, kvkkAccepted: event.target.checked }))}
                />
                <p className="career-application-form__consent-text">
                  <Link className="career-application-form__consent-link" href={kvkkHref}>
                    {copy?.privacyLinkLabel}
                  </Link>
                  {" "}
                  {copy?.privacyConsentText}
                </p>
              </label>

              <button className="career-application-form__submit" disabled={status === "submitting"} type="submit">
                <span>{status === "submitting" ? copy?.submittingLabel : copy?.submitLabel}</span>
                <ArrowIcon />
              </button>
            </div>
            {feedbackMessage ? (
              <p
                aria-live="polite"
                className={cn(
                  "career-application-form__feedback",
                  status === "error" && "career-application-form__feedback--error",
                  status === "success" && "career-application-form__feedback--success",
                )}
              >
                {feedbackMessage}
              </p>
            ) : null}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
