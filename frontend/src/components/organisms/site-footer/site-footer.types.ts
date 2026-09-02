import type { SupportedLocale } from "@/src/lib/locale";

export type FooterLinkItem = {
  label: string;
  href: string;
  isExternal?: boolean;
};

export type FooterContactItem = {
  href?: string;
  isExternal?: boolean;
  label: string;
  value: string;
};

export type FooterSocialLink = {
  href: string;
  label: string;
};

export type FooterCompactContact = {
  address?: string;
  email?: string;
  latitude?: string | null;
  longitude?: string | null;
  phone?: string;
};

export type SiteFooterProps = {
  address?: string;
  addressLabel?: string;
  backToTopAriaLabel?: string;
  className?: string;
  compactContact?: FooterCompactContact;
  contactItems?: FooterContactItem[];
  contactTitle?: string;
  copyrightText?: string;
  homeAriaLabel?: string;
  links?: FooterLinkItem[];
  linksTitle?: string;
  locale?: SupportedLocale;
  localePrefix?: string;
  logoSrc?: string;
  newsletterConsentLinkLabel?: string;
  newsletterConsentText?: string;
  newsletterErrorMessage?: string;
  newsletterHeadline?: string;
  newsletterLabel?: string;
  newsletterPlaceholder?: string;
  newsletterSubmitAriaLabel?: string;
  newsletterSuccessMessage?: string;
  socialTitle?: string;
  socialLinks?: FooterSocialLink[];
};
