import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { notFound } from "next/navigation";

import { AppShell } from "@/src/components/layout";
import type { SiteSettingsResponse } from "@/src/lib/api-types";
import { createAPI } from "@/src/lib/api";
import {
  isSupportedLocale,
  type SupportedLocale,
} from "@/src/lib/locale";
import { getOfflineSiteSettings } from "@/src/lib/site-settings-fallback";
export function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}


type LocaleParams = Promise<{
  locale: string;
}>;

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  await params;

  const google =
    process.env.GOOGLE_SITE_VERIFICATION?.trim();

  return google
    ? {
        verification: {
          google,
        },
      }
    : {};
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: LocaleParams;
};

async function loadSiteSettings(
  locale: SupportedLocale,
): Promise<SiteSettingsResponse> {
  try {
    const { data } =
      await createAPI(locale).get<SiteSettingsResponse>(
        "core/settings/",
      );

    return data;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[locale layout] core/settings/ failed, using offline shell",
        error,
      );
    }

    return getOfflineSiteSettings();
  }
}

const FONT_VAR_MAP: Record<string, string> = {
  dm_sans: "--font-dm-sans",
  inter: "--font-inter",
  manrope: "--font-manrope",
  red_hat_display: "--font-red-hat-display",
  krub: "--font-krub",
};

const ALL_FONT_VARS = [
  "--font-dm-sans",
  "--font-inter",
  "--font-manrope",
  "--font-red-hat-display",
  "--font-krub",
  "--font-poppins",
  "--font-montserrat",
];

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const siteSettings = await loadSiteSettings(locale);

  const gaId =
    process.env.NEXT_PUBLIC_GA_ID?.trim();

  const fontVar =
    FONT_VAR_MAP[siteSettings.font_family] ??
    "--font-dm-sans";

  const overrideRules = ALL_FONT_VARS
    .filter((variable) => variable !== fontVar)
    .map(
      (variable) =>
        `${variable}: var(${fontVar}) !important;`,
    )
    .join(" ");

  return (
    <>
      <style>
        {`body { --font-active: var(${fontVar}); ${overrideRules} }`}
      </style>

      <AppShell
        locale={locale}
        siteSettings={siteSettings}
      >
        {children}
      </AppShell>

      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </>
  );
}