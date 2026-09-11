import type { Metadata } from "next";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";

export const SITE_NAME = "SUW";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://suw.com.tr").replace(/\/$/, "");
export const DEFAULT_OG_IMAGE = "/images/suw-logo-hero.png";

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
};

export function formatPageTitle(title: string) {
  const value = title.trim();
  return !value || value === SITE_NAME ? SITE_NAME : `${value} | ${SITE_NAME}`;
}

export function absoluteUrl(pathOrUrl: string) {
  return new URL(pathOrUrl, SITE_URL).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
  type = "website",
}: CreatePageMetadataOptions): Metadata {
  const fullTitle = formatPageTitle(title);
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "tr_TR",
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
          },
        },
  };
}

export function createLocalizedPageMetadata(
  locale: SupportedLocale,
  options: CreatePageMetadataOptions,
): Metadata {
  const metadata = createPageMetadata({
    ...options,
    path: withLocalePath(locale, options.path),
  });
  const tr = absoluteUrl(withLocalePath("tr", options.path));
  const en = absoluteUrl(withLocalePath("en", options.path));

  metadata.alternates = {
    canonical: absoluteUrl(withLocalePath(locale, options.path)),
    languages: { tr, en, "x-default": tr },
  };
  if (metadata.openGraph) {
    metadata.openGraph.locale = locale === "tr" ? "tr_TR" : "en_US";
    metadata.openGraph.alternateLocale = [locale === "tr" ? "en_US" : "tr_TR"];
  }
  return metadata;
}

export function resolveMetadataValue(value: string | null | undefined, fallback: string) {
  return value && value.trim().length > 0 ? value : fallback;
}
