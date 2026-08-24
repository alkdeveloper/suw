"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/src/components/atoms/container";
import { createAPI, getApiErrorMessage } from "@/src/lib/api";
import { cn } from "@/src/lib/cn";
import { LEGAL_PAGE_PATHS } from "@/src/lib/legal";
import { DEFAULT_LOCALE } from "@/src/lib/locale";

import type { ContactFormSectionProps } from "./contact-form-section.types";
const phoneIconSrc = "/images/figma-assets/contact-phone-icon.svg";
const mailIconSrc = "/images/figma-assets/contact-mail-icon.svg";
const locationIconSrc = "/images/figma-assets/contact-location-icon.svg";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="contact-form__button-icon" fill="none" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.45199 6.57999L3.51299 5.51999L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.51299 18.49L2.45299 17.43L7.87699 12.005L2.45199 6.57999Z"
        fill="#172227"
      />
    </svg>
  );
}

export function ContactFormSection({
  className,
  copy,
  locale = DEFAULT_LOCALE,
  infoTitle,
  infoDescription,
  infoImageSrc,
  phone,
  email,
  address,
  formTitle,
  kvkkText,
  kvkkHref = LEGAL_PAGE_PATHS.candidatePrivacyNotice,
}: ContactFormSectionProps) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    kvkkAccepted: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedbackMessage("");

    try {
      await createAPI(locale).post("contact/message/", {
        first_name: formState.firstName,
        last_name: formState.lastName,
        email: formState.email,
        phone: formState.phone || undefined,
        subject: formState.subject,
        message: formState.message,
        kvkk_accepted: formState.kvkkAccepted,
      });

      setStatus("success");
      setFeedbackMessage(copy?.feedbackSuccessMessage ?? "");
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        kvkkAccepted: false,
      });
    } catch (error) {
      setStatus("error");
      setFeedbackMessage(getApiErrorMessage(error, copy?.feedbackErrorMessage ?? ""));
    }
  }

  return (
    <section className={cn("contact-form", className)}>
      <Container>
        <div className="contact-form__layout">
          <aside className="contact-form__card">
            {infoTitle ? <h2 className="contact-form__card-title">{infoTitle}</h2> : null}
            {infoDescription ? <p className="contact-form__card-description">{infoDescription}</p> : null}

            <div className="contact-form__info-list">
              {phone ? (
                <div className="contact-form__info-row">
                  <Image alt="" className="contact-form__icon-image" height={27} src={phoneIconSrc} unoptimized width={27} />
                  <p>{phone}</p>
                </div>
              ) : null}

              {email ? (
                <div className="contact-form__info-row">
                  <Image alt="" className="contact-form__icon-image" height={27} src={mailIconSrc} unoptimized width={27} />
                  <p>{email}</p>
                </div>
              ) : null}

              {address ? (
                <div className="contact-form__info-row contact-form__info-row--address">
                  <Image alt="" className="contact-form__icon-image" height={27} src={locationIconSrc} unoptimized width={27} />
                  <p>{address}</p>
                </div>
              ) : null}
            </div>

            {infoImageSrc ? (
              <div className="contact-form__card-image">
                <Image alt="" fill sizes="491px" src={infoImageSrc} unoptimized />
              </div>
            ) : null}
          </aside>

          <div className="contact-form__content">
            {formTitle ? <p className="contact-form__eyebrow">{formTitle}</p> : null}

            <form className="contact-form__form" onSubmit={handleSubmit}>
              <label className="contact-form__field">
                <span>{copy?.fields?.first_name}</span>
                <input
                  placeholder={copy?.placeholders?.first_name}
                  required
                  type="text"
                  value={formState.firstName}
                  onChange={(event) => setFormState((current) => ({ ...current, firstName: event.target.value }))}
                />
              </label>

              <label className="contact-form__field">
                <span>{copy?.fields?.last_name}</span>
                <input
                  placeholder={copy?.placeholders?.last_name}
                  required
                  type="text"
                  value={formState.lastName}
                  onChange={(event) => setFormState((current) => ({ ...current, lastName: event.target.value }))}
                />
              </label>

              <label className="contact-form__field">
                <span>{copy?.fields?.email}</span>
                <input
                  placeholder={copy?.placeholders?.email}
                  required
                  type="email"
                  value={formState.email}
                  onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                />
              </label>

              <label className="contact-form__field">
                <span>{copy?.fields?.phone}</span>
                <input
                  placeholder={copy?.placeholders?.phone}
                  type="tel"
                  value={formState.phone}
                  onChange={(event) => setFormState((current) => ({ ...current, phone: event.target.value }))}
                />
              </label>

              <label className="contact-form__field contact-form__field--full">
                <span>{copy?.fields?.subject}</span>
                <input
                  placeholder={copy?.placeholders?.subject}
                  required
                  type="text"
                  value={formState.subject}
                  onChange={(event) => setFormState((current) => ({ ...current, subject: event.target.value }))}
                />
              </label>

              <label className="contact-form__field contact-form__field--full">
                <span>{copy?.fields?.message}</span>
                <textarea
                  placeholder={copy?.placeholders?.message}
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
                />
              </label>

              <div className="contact-form__footer">
                <label className="contact-form__checkbox">
                  <input
                    checked={formState.kvkkAccepted}
                    type="checkbox"
                    onChange={(event) => setFormState((current) => ({ ...current, kvkkAccepted: event.target.checked }))}
                  />
                  <span>
                    <Link href={kvkkHref}>{copy?.privacyLinkLabel}</Link>
                    {" "}
                    {kvkkText}
                  </span>
                </label>

                <button className="contact-form__submit" disabled={status === "submitting"} type="submit">
                  <span>{status === "submitting" ? copy?.submittingLabel : copy?.submitLabel}</span>
                  <ArrowIcon />
                </button>
              </div>

              {feedbackMessage ? (
                <p
                  aria-live="polite"
                  className={cn(
                    "contact-form__feedback",
                    status === "error" && "contact-form__feedback--error",
                    status === "success" && "contact-form__feedback--success",
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
