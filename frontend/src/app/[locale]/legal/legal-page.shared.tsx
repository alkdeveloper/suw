import type { Metadata } from "next";

import { LegalContentSection } from "@/src/components/organisms/legal-content-section";
import { MiniHero } from "@/src/components/organisms/mini-hero";
import type { LegalPageResponse } from "@/src/lib/api-types";
import { createAPI } from "@/src/lib/api";
import { getLegalPageSlug, LEGAL_PAGE_PATHS, type LegalPageKey } from "@/src/lib/legal";
import type { SupportedLocale } from "@/src/lib/locale";
import { createLocalizedPageMetadata, resolveMetadataValue } from "@/src/lib/metadata";
export function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}
export async function getLegalPage(
  locale: SupportedLocale,
  key: LegalPageKey,
): Promise<LegalPageResponse> {
  try {
    const response = await createAPI(locale).get<LegalPageResponse>(
      `legal/${getLegalPageSlug(key)}/`,
    );

    return response.data;
  } catch {
    const titles = {
      privacyAndCookiePolicy: {
        tr: "Gizlilik ve Çerez Politikası",
        en: "Privacy and Cookie Policy",
      },
      candidatePrivacyNotice: {
        tr: "Aday Aydınlatma Metni",
        en: "Candidate Privacy Notice",
      },
      disclosureAndConsent: {
        tr: "Aydınlatma ve Açık Rıza",
        en: "Disclosure and Consent",
      },
    };

    const title = titles[key][locale];

    return {
      meta_title: title,
      meta_description: title,
      title,
      subtitle: "",
      hero_image: null,
      hero_glow_image: null,
      intro: "",
      sections: [],
      last_updated: "",
      last_updated_label:
        locale === "tr" ? "Son Güncelleme" : "Last Updated",
    } as unknown as LegalPageResponse;
  }
}

export async function generateLegalPageMetadata(locale: SupportedLocale, key: LegalPageKey): Promise<Metadata> {
  const page = await getLegalPage(locale, key);

  return createLocalizedPageMetadata(locale, {
    title: resolveMetadataValue(page.meta_title, page.title),
    description: resolveMetadataValue(page.meta_description, page.subtitle),
    image: page.hero_image ?? undefined,
    path: LEGAL_PAGE_PATHS[key],
  });
}

export function LegalPageView({ page }: { page: LegalPageResponse }) {
  return (
    <main>
      <MiniHero
        backgroundImageSrc={page.hero_image ?? undefined}
        glowImageSrc={page.hero_glow_image ?? undefined}
        subtitle={page.subtitle}
        title={page.title}
      />
      <LegalContentSection
        intro={page.intro}
        items={page.sections.map((section) => ({
          body: section.body,
          heading: section.heading,
        }))}
        lastUpdated={page.last_updated}
        lastUpdatedLabel={page.last_updated_label}
        title={page.title}
      />
    </main>
  );
}
