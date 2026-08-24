import type { Metadata } from "next";

import type { SupportedLocale } from "@/src/lib/locale";

import { generateLegalPageMetadata, getLegalPage, LegalPageView } from "../legal-page.shared";
export function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}
type LegalPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const { locale } = await params;

  return generateLegalPageMetadata(locale, "candidatePrivacyNotice");
}

export default async function CandidatePrivacyNoticePage({ params }: LegalPageProps) {
  const { locale } = await params;
  const page = await getLegalPage(locale, "candidatePrivacyNotice");

  return <LegalPageView page={page} />;
}
