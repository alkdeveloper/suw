"use client";
import Link from "next/link";
import { useState } from "react";

import { createAPI, getApiErrorMessage } from "@/src/lib/api";
import { cn } from "@/src/lib/cn";
import { LEGAL_PAGE_PATHS } from "@/src/lib/legal";
import { DEFAULT_LOCALE } from "@/src/lib/locale";

import type { ContactFormSectionProps } from "./suw-contact-form-section.types";

export function SuwContactFormSection({
  className,
  copy,
  locale = DEFAULT_LOCALE,
  infoTitle,
  infoDescription,
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

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [feedbackMessage, setFeedbackMessage] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
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

      setFeedbackMessage(
        copy?.feedbackSuccessMessage ??
          "Your message has been received.",
      );

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

      setFeedbackMessage(
        getApiErrorMessage(
          error,
          copy?.feedbackErrorMessage ??
            "Something went wrong. Please try again.",
        ),
      );
    }
  }

  return (
    <section
      className={cn("suw-contact-form", className)}
    >
      <div className="suw-contact-form__inner">
        <div className="suw-contact-form__layout">
          <aside className="suw-contact-form__information">
                  <p className="suw-contact-form__eyebrow">
                        {copy?.eyebrow || "GET IN TOUCH"}
                      </p>

                      <h2 className="suw-contact-form__title">
                        {copy?.title || "START A PROJECT."}
                      </h2>

                  {infoDescription || copy?.description ? (
                   <p className="suw-contact-form__description">
                   {infoDescription || copy?.description}
                  </p>
                    ) : null}

            <div className="suw-contact-form__details">
              {phone ? (
                <div className="suw-contact-form__detail">
                  <span>PHONE</span>
                  <p>{phone}</p>
                </div>
              ) : null}

              {email ? (
                <div className="suw-contact-form__detail">
                  <span>EMAIL</span>
                  <p>{email}</p>
                </div>
              ) : null}

              {address ? (
                <div className="suw-contact-form__detail">
                  <span>ADDRESS</span>
                  <p>{address}</p>
                </div>
              ) : null}
            </div>
          </aside>

          <div className="suw-contact-form__content">
            <div className="suw-contact-form__form-heading">
             <span>
                {copy?.projectInquiryLabel || "PROJECT INQUIRY"}
              </span>

              <h3>
                {copy?.projectTitle || "TELL US WHAT YOU NEED."}
              </h3>
            </div>

            <form
              className="suw-contact-form__form"
              onSubmit={handleSubmit}
            >
              <label className="suw-contact-form__field">
                <span>
                  {copy?.fields?.first_name || "FIRST NAME"}
                </span>

                <input
                  placeholder={
                    copy?.placeholders?.first_name || ""
                  }
                  required
                  type="text"
                  value={formState.firstName}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      firstName: event.target.value,
                    }))
                  }
                />
              </label>

              <label className="suw-contact-form__field">
                <span>
                  {copy?.fields?.last_name || "LAST NAME"}
                </span>

                <input
                  placeholder={
                    copy?.placeholders?.last_name || ""
                  }
                  required
                  type="text"
                  value={formState.lastName}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      lastName: event.target.value,
                    }))
                  }
                />
              </label>

              <label className="suw-contact-form__field">
                <span>
                  {copy?.fields?.email || "EMAIL"}
                </span>

                <input
                  placeholder={
                    copy?.placeholders?.email || ""
                  }
                  required
                  type="email"
                  value={formState.email}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                />
              </label>

              <label className="suw-contact-form__field">
                <span>
                  {copy?.fields?.phone || "PHONE"}
                </span>

                <input
                  placeholder={
                    copy?.placeholders?.phone || ""
                  }
                  type="tel"
                  value={formState.phone}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      phone: event.target.value,
                    }))
                  }
                />
              </label>

              <label className="suw-contact-form__field suw-contact-form__field--full">
                <span>
                  {copy?.fields?.subject || "SUBJECT"}
                </span>

                <input
                  placeholder={
                    copy?.placeholders?.subject || ""
                  }
                  required
                  type="text"
                  value={formState.subject}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      subject: event.target.value,
                    }))
                  }
                />
              </label>

              <label className="suw-contact-form__field suw-contact-form__field--full">
                <span>
                  {copy?.fields?.message || "MESSAGE"}
                </span>

                <textarea
                  placeholder={
                    copy?.placeholders?.message || ""
                  }
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                />
              </label>

              <div className="suw-contact-form__footer">
                <label className="suw-contact-form__checkbox">
                  <input
                    checked={formState.kvkkAccepted}
                    required
                    type="checkbox"
                    onChange={(event) =>
                      setFormState((current) => ({
                        ...current,
                        kvkkAccepted:
                          event.target.checked,
                      }))
                    }
                  />

                  <span>
                    <Link href={kvkkHref}>
                      {copy?.privacyLinkLabel ||
                        "Privacy Notice"}
                    </Link>

                    {kvkkText ? ` ${kvkkText}` : ""}
                  </span>
                </label>

                <button
                  className="suw-contact-form__submit"
                  disabled={status === "submitting"}
                  type="submit"
                >
                  <span>
                    {status === "submitting"
                      ? copy?.submittingLabel ||
                        "SENDING..."
                      : copy?.submitLabel ||
                        "SEND MESSAGE"}
                  </span>

                  <span aria-hidden="true">↗</span>
                </button>
              </div>

              {feedbackMessage ? (
                <p
                  aria-live="polite"
                  className={cn(
                    "suw-contact-form__feedback",
                    status === "error" &&
                      "suw-contact-form__feedback--error",
                    status === "success" &&
                      "suw-contact-form__feedback--success",
                  )}
                >
                  {feedbackMessage}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}