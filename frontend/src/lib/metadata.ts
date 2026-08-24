import type { Metadata } from "next";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";

export const SITE_NAME = "SUW";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.suw.com.tr";
export const DEFAULT_OG_IMAGE = "/images/suw-logo-white.svg";

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
};

export function formatPageTitle(title: string) {
  return title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`;
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
    title: fullTitle,
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
  return createPageMetadata({
    ...options,
    path: withLocalePath(locale, options.path),
  });
}

export function resolveMetadataValue(value: string | null | undefined, fallback: string) {
  return value && value.trim().length > 0 ? value : fallback;
}
