import Script from "next/script";

import { GOOGLE_ADS_ID } from "@/src/lib/google-ads";

export function GoogleTag({ googleAnalyticsId }: { googleAnalyticsId?: string }) {
  const configIds = Array.from(
    new Set([googleAnalyticsId?.trim(), GOOGLE_ADS_ID].filter(Boolean)),
  ) as string[];
  const bootstrap = [
    "window.dataLayer = window.dataLayer || [];",
    "window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};",
    "window.gtag('js', new Date());",
    ...configIds.map((id) => `window.gtag('config', ${JSON.stringify(id)});`),
  ].join("\n");

  return (
    <>
      <Script
        id="google-tag-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(configIds[0])}`}
        strategy="afterInteractive"
      />
      <Script
        dangerouslySetInnerHTML={{ __html: bootstrap }}
        id="google-tag-bootstrap"
        strategy="afterInteractive"
      />
    </>
  );
}
