import type { BrandDetailResponse } from "@/src/lib/api-types";
import { createAPI } from "@/src/lib/api";
import type { SupportedLocale } from "@/src/lib/locale";

export const STATIC_BRAND_PAGE_KEYS = ["akal", "alkan-promosyon", "akal-gmbh", "suw"] as const;

export type StaticBrandPageKey = (typeof STATIC_BRAND_PAGE_KEYS)[number];

const STATIC_BRAND_PAGE_CONFIG: Record<
  StaticBrandPageKey,
  {
    apiPath: string;
    href: string;
  }
> = {
  akal: {
    apiPath: "brands/companies/akal/",
    href: "/brands/akal",
  },
  "alkan-promosyon": {
    apiPath: "brands/companies/alkan-promosyon/",
    href: "/brands/alkan-promosyon",
  },
  "akal-gmbh": {
    apiPath: "brands/companies/akal-gmbh/",
    href: "/brands/akal-gmbh",
  },
  suw: {
    apiPath: "brands/companies/suw/",
    href: "/brands/suw",
  },
};

export function getStaticBrandPageHref(key: StaticBrandPageKey) {
  return STATIC_BRAND_PAGE_CONFIG[key].href;
}

export async function getStaticBrandDetail(locale: SupportedLocale, key: StaticBrandPageKey): Promise<BrandDetailResponse> {
  const response = await createAPI(locale).get<BrandDetailResponse>(STATIC_BRAND_PAGE_CONFIG[key].apiPath);
  return response.data;
}

export async function getStaticBrandDetails(locale: SupportedLocale) {
  return Promise.all(
    STATIC_BRAND_PAGE_KEYS.map(async (key) => ({
      key,
      href: getStaticBrandPageHref(key),
      page: await getStaticBrandDetail(locale, key),
    })),
  );
}
