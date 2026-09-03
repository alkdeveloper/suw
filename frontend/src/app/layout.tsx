import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import { resolvePublicAssetPath } from "@/src/lib/assets";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/src/lib/metadata";

import "./components.scss";
import "./globals.css";

const krub = localFont({
  src: [
    {
      path: "../../public/fonts/krub/Krub-ExtraLight.ttf",
      weight: "275",
      style: "normal",
    },
    {
      path: "../../public/fonts/krub/Krub-ExtraLightItalic.ttf",
      weight: "275",
      style: "italic",
    },
    {
      path: "../../public/fonts/krub/Krub-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/krub/Krub-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/krub/Krub-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/krub/Krub-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/krub/Krub-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/krub/Krub-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/krub/Krub-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/krub/Krub-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/krub/Krub-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/krub/Krub-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-krub",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: SITE_NAME,

  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "SUW, iş hayatının ihtiyaçlarına yönelik fonksiyonel, dayanıklı ve çağdaş iş giyim çözümleri sunar.",

  keywords: [
    "SUW",
    "iş giyim",
    "iş kıyafetleri",
    "workwear",
    "kurumsal giyim",
    "iş elbiseleri",
    "profesyonel giyim",
    "tekstil",
  ],

  icons: {
    icon: resolvePublicAssetPath("/suw_favicon.png"),
    shortcut: resolvePublicAssetPath("/suw_favicon.png"),
    apple: resolvePublicAssetPath("/suw_favicon.png"),
  },

  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "tr_TR",
    title: SITE_NAME,
    description:
      "SUW, iş hayatının ihtiyaçlarına yönelik fonksiyonel, dayanıklı ve çağdaş iş giyim çözümleri sunar.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "SUW, iş hayatının ihtiyaçlarına yönelik fonksiyonel, dayanıklı ve çağdaş iş giyim çözümleri sunar.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html suppressHydrationWarning>
      <body
        className={krub.variable}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
