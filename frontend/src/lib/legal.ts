export const LEGAL_PAGE_SLUGS = {
  disclosureAndConsent: "disclosure-and-consent",
  candidatePrivacyNotice: "candidate-privacy-notice",
  privacyAndCookiePolicy: "privacy-and-cookie-policy",
} as const;

export const LEGAL_PAGE_PATHS = {
  disclosureAndConsent: `/legal/${LEGAL_PAGE_SLUGS.disclosureAndConsent}`,
  candidatePrivacyNotice: `/legal/${LEGAL_PAGE_SLUGS.candidatePrivacyNotice}`,
  privacyAndCookiePolicy: `/legal/${LEGAL_PAGE_SLUGS.privacyAndCookiePolicy}`,
} as const;

export type LegalPageKey = keyof typeof LEGAL_PAGE_PATHS;

export function getLegalPageSlug(key: LegalPageKey) {
  return LEGAL_PAGE_SLUGS[key];
}
