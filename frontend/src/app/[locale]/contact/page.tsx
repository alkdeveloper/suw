import type { Metadata } from "next";

import { SuwContactFormSection } from "@/src/components/organisms/suw-contact-form-section";
import { ContactMapHero } from "@/src/components/organisms/contact-map-hero";
import type { ContactPageResponse } from "@/src/lib/api-types";
import { createAPI } from "@/src/lib/api";
import { LEGAL_PAGE_PATHS } from "@/src/lib/legal";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import {
  createLocalizedPageMetadata,
  resolveMetadataValue,
} from "@/src/lib/metadata";

export function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}
type ContactPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

async function getContactPage(locale: SupportedLocale) {
  const response =
    await createAPI(locale).get<ContactPageResponse>("contact/");

  return response.data;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const page = await getContactPage(locale);

  return createLocalizedPageMetadata(locale, {
    title: resolveMetadataValue(page.meta_title, "Contact"),
    description: resolveMetadataValue(
      page.meta_description,
      "Contact SUW for professional workwear, custom development and corporate workwear projects.",
    ),
    path: "/contact",
    image: page.info_image ?? undefined,
  });
}

export default async function ContactPage({
  params,
}: ContactPageProps) {
  const { locale } = await params;
  const page = await getContactPage(locale);

  return (
    <main>
      <section
        style={{
          minHeight: "64vh",
          background: "#111",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          padding: "150px 5vw 70px",
        }}
      >
        <div>
          <p>CONTACT</p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(64px, 8vw, 138px)",
              lineHeight: 0.85,
              letterSpacing: "-0.07em",
            }}
          >
            LET&apos;S TALK
            <br />
            WORKWEAR.
          </h1>
        </div>
      </section>

      <SuwContactFormSection
          address={page.address}
          copy={
            page.form_copy
              ? {
                  eyebrow: locale === "tr" ? "İLETİŞİM" : "GET IN TOUCH",

                    title:
                      locale === "tr"
                        ? "BİR PROJE BAŞLATALIM."
                        : "START A PROJECT.",

                    projectInquiryLabel:
                      locale === "tr"
                        ? "PROJE TALEBİ"
                        : "PROJECT INQUIRY",

                    projectTitle:
                      locale === "tr"
                        ? "İHTİYACINIZI BİZE ANLATIN."
                        : "TELL US WHAT YOU NEED.",

                  feedbackErrorMessage: page.form_copy.feedback_error_message,
                  feedbackSuccessMessage: page.form_copy.feedback_success_message,
                  fields: page.form_copy.fields,
                  placeholders: page.form_copy.placeholders,
                  privacyLinkLabel: page.form_copy.privacy_link_label,
                  submitLabel: page.form_copy.submit_label,
                  submittingLabel: page.form_copy.submitting_label,
                }
              : undefined
          }
                email={page.email}
        formTitle={page.form_title}
        infoDescription={page.info_description}
        infoTitle={page.info_title}
        kvkkHref={withLocalePath(
          locale,
          LEGAL_PAGE_PATHS.candidatePrivacyNotice,
        )}
        kvkkText={page.kvkk_text}
        locale={locale}
        phone={page.phone}
        
      />

      <ContactMapHero
        src={page.map_embed_url || undefined}
        title={page.info_title}
      />
    </main>
  );
}