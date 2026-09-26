import type { Metadata } from "next";

import { SuwContactFormSection } from "@/src/components/organisms/suw-contact-form-section";
import type { ContactPageResponse, SiteSettingsResponse } from "@/src/lib/api-types";
import { createAPI } from "@/src/lib/api";
import { LEGAL_PAGE_PATHS } from "@/src/lib/legal";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import {
  createLocalizedPageMetadata,
} from "@/src/lib/metadata";
import { getOfflineSiteSettings } from "@/src/lib/site-settings-fallback";

import styles from "./contact.module.scss";
import { applyStaticSiteSettings, staticContactSnapshot } from "@/src/lib/static-cms-snapshot";

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

async function getContactPage(
  locale: SupportedLocale,
): Promise<ContactPageResponse> {
  try {
    const response =
      await createAPI(locale).get<ContactPageResponse>("contact/");

    return response.data;
  } catch {
    return process.env.NEXT_PUBLIC_FORCE_LOCAL_FALLBACK === "true" ? staticContactSnapshot[locale] : {
      hero_title: "",
      meta_title: "",
      meta_description: "",

      address: "",
      email: "",
      phone: "",

      form_title:
        locale === "tr"
          ? "Bir proje başlatalım."
          : "Start a project.",
      form_left_title: "",
      form_left_description: "",

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
    title: page.meta_title || "",
    description: page.meta_description || "",
    path: "/contact",
    image: page.info_image ?? undefined,
  });
}

export default async function ContactPage({
  params,
}: ContactPageProps) {
  const { locale } = await params;
  const [page, siteLocation] = await Promise.all([
    getContactPage(locale),
    getSiteLocation(locale),
  ]);
  const mapSrc = createMapEmbedUrl(siteLocation);
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          {page.hero_title ? <h1 className={styles.title}>
            {page.hero_title.split(/\r?\n/).map((line) => <span key={line}>{line}</span>)}
          </h1> : null}
        </div>
      </section>

      <SuwContactFormSection
          address={page.address}
          copy={
            page.form_copy
              ? {
                  title: page.form_left_title,
                  description: page.form_left_description,
                  projectInquiryLabel: "",
                  projectTitle: page.form_title,

                  feedbackErrorMessage: page.form_copy.feedback_error_message,
                  feedbackSuccessMessage: page.form_copy.feedback_success_message,
                  fields: page.form_copy.fields,
                  privacyLinkLabel: page.form_copy.privacy_link_label,
                  submitLabel: page.form_copy.submit_label,
                  submittingLabel: page.form_copy.submitting_label,
                }
              : undefined
          }
                email={page.email}
        formTitle={page.form_title}
        infoDescription={page.form_left_description}
        infoTitle={page.info_title}
        kvkkHref={withLocalePath(
          locale,
          LEGAL_PAGE_PATHS.candidatePrivacyNotice,
        )}
        kvkkText={page.kvkk_text}
        locale={locale}
        mapSrc={mapSrc}
        mapTitle={locale === "tr" ? "KONUMUMUZ" : "OUR LOCATION"}
        phone={page.phone}
        
      />

    </main>
  );
}

async function getSiteLocation(locale: SupportedLocale) {
  try {
    const { data } = await createAPI(locale).get<SiteSettingsResponse>(
      "core/settings/",
    );

    return {
      address: data.address,
      latitude: data.latitude,
      longitude: data.longitude,
    };
  } catch {
    return process.env.NEXT_PUBLIC_FORCE_LOCAL_FALLBACK === "true"
      ? applyStaticSiteSettings(locale, getOfflineSiteSettings(locale))
      : null;
  }
}

function createMapEmbedUrl(
  location: Awaited<ReturnType<typeof getSiteLocation>>,
) {
  if (!location) {
    return undefined;
  }

  const query =
    location.latitude && location.longitude
      ? `${location.latitude},${location.longitude}`
      : location.address?.trim();

  return query
    ? `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
    : undefined;
}
