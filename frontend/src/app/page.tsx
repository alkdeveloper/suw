import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { LOCALE_COOKIE_NAME, normalizeLocale } from "@/src/lib/locale";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function RootPage() {
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get(LOCALE_COOKIE_NAME)?.value);

  redirect(`/${locale}`);
}
