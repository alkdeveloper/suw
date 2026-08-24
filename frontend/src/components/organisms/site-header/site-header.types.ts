export type HeaderNavItem = {
  href: string;
  isExternal?: boolean;
  label: string;
  isActive?: boolean;
};

export type HeaderLocaleProps = {
  localeLabel: string;
  localeHref?: string;
  ariaLabelPrefix?: string;
};

export type HeaderLinkProps = {
  href: string;
  isExternal?: boolean;
  label: string;
  isActive?: boolean;
};

export type SiteHeaderProps = {
  items: HeaderNavItem[];
  homeHref?: string;
  localeLabel?: string;
  localeHref?: string;
  logoSrc?: string;
  homeAriaLabel?: string;
  desktopNavAriaLabel?: string;
  mobileNavAriaLabel?: string;
  localeButtonAriaLabelPrefix?: string;
  mobileMenuAriaLabel?: string;
  scrolledBackgroundClassName?: string;
  scrollThreshold?: number;
};
