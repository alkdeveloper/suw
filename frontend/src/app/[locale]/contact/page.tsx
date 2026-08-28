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

import styles from "./contact.module.scss";

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

const heroContent = {
  tr: {
    eyebrow: "İLETİŞİM",
    titleLine1: "İŞ GİYİMİNİ",
    titleLine2: "KONUŞALIM.",
  },
  en: {
    eyebrow: "CONTACT",
    titleLine1: "LET'S TALK",
    titleLine2: "WORKWEAR.",
  },
};

async function getContactPage(
  locale: SupportedLocale,
): Promise<ContactPageResponse> {
  try {
    const response =
      await createAPI(locale).get<ContactPageResponse>("contact/");

    return response.data;
  } catch {
    return {
      meta_title: locale === "tr" ? "İletişim" : "Contact",
      meta_description:
        locale === "tr"
          ? "SUW profesyonel iş giyimi projeleri için bizimle iletişime geçin."
          : "Contact SUW for professional workwear projects.",

      address: "",
      email: "",
      phone: "",

      form_title:
        locale === "tr"
          ? "Bir proje başlatalım."
          : "Start a project.",

      info_title:
        locale === "tr"
          ? "İletişim"
          : "Contact",

      info_description: "",
      kvkk_text: "",

      map_embed_url: "",

      form_copy: null,
      info_image: null,
    } as unknown as ContactPageResponse;
  }
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
  const hero = heroContent[locale];

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>

          <h1 className={styles.title}>
            <span>{hero.titleLine1}</span>
            <span>{hero.titleLine2}</span>
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
