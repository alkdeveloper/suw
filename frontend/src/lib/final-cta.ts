import type { HomePageResponse } from "@/src/lib/api-types";
import { createAPI, enforceRemoteApi } from "@/src/lib/api";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { staticHomeSnapshot } from "@/src/lib/static-cms-snapshot";

export type FinalCtaContent = NonNullable<HomePageResponse["final_cta"]>;

const emptyFinalCta: FinalCtaContent = {
  title: "",
  description: "",
  text: "",
  bottom_label: "",
  link: "",
};

export async function getFinalCta(locale: SupportedLocale): Promise<FinalCtaContent> {
  if (process.env.NEXT_PUBLIC_FORCE_LOCAL_FALLBACK === "true") {
    return staticHomeSnapshot[locale].final_cta ?? emptyFinalCta;
  }
  try {
    const response = await createAPI(locale).get<HomePageResponse>("home/");
    return response.data.final_cta ?? emptyFinalCta;
  } catch (error) {
    enforceRemoteApi(error);
    return emptyFinalCta;
  }
}

export function resolveFinalCtaHref(locale: SupportedLocale, href: string) {
  if (!href) return undefined;
  return /^(?:https?:)?\/\//.test(href) ? href : withLocalePath(locale, href);
}
