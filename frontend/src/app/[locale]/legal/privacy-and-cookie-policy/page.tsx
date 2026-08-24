import type { Metadata } from "next";

import type { SupportedLocale } from "@/src/lib/locale";

import { generateLegalPageMetadata, getLegalPage, LegalPageView } from "../legal-page.shared";

type LegalPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const { locale } = await params;

  return generateLegalPageMetadata(locale, "privacyAndCookiePolicy");
}

export default async function PrivacyAndCookiePolicyPage({ params }: LegalPageProps) {
  const { locale } = await params;
  const page = await getLegalPage(locale, "privacyAndCookiePolicy");

  return <LegalPageView page={page} />;
}
