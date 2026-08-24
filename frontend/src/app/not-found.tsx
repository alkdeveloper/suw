import type { Metadata } from "next";

import { NotFoundSection } from "@/src/components/organisms/not-found-section";
import type { SiteSettingsResponse } from "@/src/lib/api-types";
import { createAPI } from "@/src/lib/api";
import { DEFAULT_LOCALE } from "@/src/lib/locale";
import { createPageMetadata } from "@/src/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "404",
  description: "Aradığınız sayfa bulunamadı.",
  path: "/404",
  noIndex: true,
});

async function getSiteSettings() {
  try {
    const response = await createAPI(DEFAULT_LOCALE).get<SiteSettingsResponse>("core/settings/");

    return response.data;
  } catch {
    return null;
  }
}

export default async function NotFound() {
  const siteSettings = await getSiteSettings();

  return (
    <main>
      <NotFoundSection
        description={siteSettings?.not_found_copy?.description}
        primaryButtonText={siteSettings?.not_found_copy?.primary_button_text}
        secondaryButtonText={siteSettings?.not_found_copy?.secondary_button_text}
        title={siteSettings?.not_found_copy?.title}
      />
    </main>
  );
}
