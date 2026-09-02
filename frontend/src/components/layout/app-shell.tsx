"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { SiteFooter } from "@/src/components/organisms/site-footer";
import { SiteHeader } from "@/src/components/organisms/site-header";
import type { SiteSettingsResponse } from "@/src/lib/api-types";
import { resolveCmsMediaUrl, resolvePublicAssetPath } from "@/src/lib/assets";
import type { SupportedLocale } from "@/src/lib/locale";
import {
  getAlternateLocale,
  normalizeInternalPath,
  withLocalePath,
} from "@/src/lib/locale";

const LOCALE_PREFIXES = new Set(["tr", "en"]);

function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return "/";
  }
  if (LOCALE_PREFIXES.has(segments[0])) {
    const rest = segments.slice(1);
    return rest.length > 0 ? `/${rest.join("/")}` : "/";
  }
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

function isExternalHref(href: string, isExternal?: boolean) {
  return (
    isExternal ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  );
}

function normalizeNavPath(href: string) {
  const pathname = normalizeInternalPath(href).split(/[?#]/, 1)[0];
  return pathname === "/" ? pathname : pathname.replace(/\/+$/, "");
}

function isVisibleSiteNavItem(href: string, isExternal?: boolean) {
  return isExternalHref(href, isExternal) || normalizeNavPath(href) !== "/industries";
}

function getActiveNavHref(
  normalizedPath: string,
  headerNav: SiteSettingsResponse["header_nav"],
): string | null {
  const internalNavPaths = headerNav
    .filter((item) => !isExternalHref(item.url, item.is_external))
    .map((item) => normalizeNavPath(item.url));

  if (normalizedPath === "/") {
    return internalNavPaths.includes("/") ? "/" : null;
  }

  return (
    internalNavPaths
      .filter(
        (href) =>
          href !== "/" &&
          (normalizedPath === href || normalizedPath.startsWith(`${href}/`)),
      )
      .sort((first, second) => second.length - first.length)[0] ?? null
  );
}

function resolveAppHref(locale: SupportedLocale, href: string, isExternal?: boolean) {
  if (isExternalHref(href, isExternal)) {
    return href;
  }

  return withLocalePath(locale, href);
}

function createPhoneHref(value: string) {
  const normalized = value.replace(/[^\d+]/g, "");
  return normalized ? `tel:${normalized}` : undefined;
}

function createMailHref(value: string) {
  const normalized = value.trim();
  return normalized ? `mailto:${normalized}` : undefined;
}

function createWhatsAppHref(value: string) {
  const normalized = value.trim();

  if (!normalized) {
    return undefined;
  }

  if (normalized.startsWith("http://") || normalized.startsWith("https://")) {
    return normalized;
  }

  const digits = normalized.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : undefined;
}

export function AppShell({
  children,
  locale,
  siteSettings,
}: {
  children: ReactNode;
  locale: SupportedLocale;
  siteSettings: SiteSettingsResponse;
}) {
  const pathname = usePathname() ?? "/";
  const normalized = stripLocalePrefix(pathname);
  const visibleHeaderNav = siteSettings.header_nav.filter((item) =>
    isVisibleSiteNavItem(item.url, item.is_external),
  );
  const activeHref = getActiveNavHref(normalized, visibleHeaderNav);
  const headerSource = visibleHeaderNav.map((item) => ({
    href: item.url,
    isExternal: item.is_external,
    label: item.label,
  }));
  const items = headerSource.map((item) => ({
    ...item,
    href: resolveAppHref(locale, item.href, item.isExternal),
    isActive:
      !isExternalHref(item.href, item.isExternal) &&
      activeHref !== null &&
      normalizeNavPath(item.href) === activeHref,
  }));
  const alternateLocale = getAlternateLocale(locale);
  const localeHref = withLocalePath(alternateLocale, normalized);
  const footerLinks = siteSettings.footer_nav
    .filter((item) => isVisibleSiteNavItem(item.url, item.is_external))
    .map((item) => ({
      href: resolveAppHref(locale, item.url, item.is_external),
      isExternal: item.is_external,
      label: item.label,
    }));
  const footerContactItems = [
    {
      href: createPhoneHref(siteSettings.phone),
      label: siteSettings.footer_copy?.contact_labels.phone,
      value: siteSettings.phone,
    },
    {
      href: createPhoneHref(siteSettings.fax),
      label: siteSettings.footer_copy?.contact_labels.fax,
      value: siteSettings.fax,
    },
    {
      href: createMailHref(siteSettings.email),
      label: siteSettings.footer_copy?.contact_labels.email,
      value: siteSettings.email,
    },
    {
      href: createWhatsAppHref(siteSettings.whatsapp),
      isExternal: true,
      label: siteSettings.footer_copy?.contact_labels.whatsapp,
      value: siteSettings.whatsapp,
    },
  ].filter((item) => Boolean(item.label && item.value)) as Array<{
    href?: string;
    isExternal?: boolean;
    label: string;
    value: string;
  }>;
  const socialLinks = [
    { href: siteSettings.instagram, label: siteSettings.footer_copy?.social_labels.instagram },
    { href: siteSettings.linkedin, label: siteSettings.footer_copy?.social_labels.linkedin },
    { href: siteSettings.facebook, label: siteSettings.footer_copy?.social_labels.facebook },
    { href: siteSettings.twitter, label: siteSettings.footer_copy?.social_labels.x },
    { href: siteSettings.youtube, label: siteSettings.footer_copy?.social_labels.youtube },
  ].filter((item): item is { href: string; label: string } => Boolean(item.href && item.label));
  const logoSrc =
    resolveCmsMediaUrl(siteSettings.logo) ??
    resolvePublicAssetPath("/images/suw-logo-hero.png");
  const galleryHeaderChrome =
    normalized === "/gallery" ||
    normalized.startsWith("/gallery/") ||
    normalized === "/contact" ||
    normalized.startsWith("/contact/");

  return (
    <>
      <SiteHeader
        desktopNavAriaLabel={siteSettings.header_copy?.desktop_nav_aria_label || undefined}
        homeHref={`/${locale}`}
        homeAriaLabel={siteSettings.header_copy?.home_aria_label || undefined}
        items={items}
        localeButtonAriaLabelPrefix={siteSettings.header_copy?.locale_button_aria_label_prefix || undefined}
        localeHref={localeHref}
        localeLabel={alternateLocale.toUpperCase()}
        logoSrc={logoSrc}
        mobileMenuAriaLabel={siteSettings.header_copy?.mobile_menu_aria_label || undefined}
        mobileNavAriaLabel={siteSettings.header_copy?.mobile_nav_aria_label || undefined}
        scrollThreshold={100}
        scrolledBackgroundClassName={
          galleryHeaderChrome ? "site-header--gallery-scrolled-background" : "site-header--scrolled-background"
        }
      />
      {children}
      <SiteFooter
        address={siteSettings.address || undefined}
        addressLabel={siteSettings.footer_address_label || undefined}
        backToTopAriaLabel={siteSettings.footer_copy?.back_to_top_aria_label || undefined}
        contactItems={footerContactItems}
        contactTitle={siteSettings.footer_contact_title || undefined}
        copyrightText={siteSettings.copyright_text || undefined}
        homeAriaLabel={siteSettings.footer_copy?.home_aria_label || undefined}
        links={footerLinks}
        linksTitle={siteSettings.footer_navigation_title || undefined}
        locale={locale}
        localePrefix={`/${locale}`}
        logoSrc={logoSrc}
        compactContact={{
          address: siteSettings.address,
          email: siteSettings.email,
          latitude: siteSettings.latitude,
          longitude: siteSettings.longitude,
          phone: siteSettings.phone,
        }}
        newsletterConsentLinkLabel={siteSettings.footer_newsletter_consent_link_text || undefined}
        newsletterConsentText={siteSettings.footer_newsletter_consent_text || undefined}
        newsletterErrorMessage={siteSettings.footer_copy?.newsletter_error_message || undefined}
        newsletterHeadline={siteSettings.footer_title || undefined}
        newsletterLabel={siteSettings.footer_newsletter_title || undefined}
        newsletterPlaceholder={siteSettings.footer_newsletter_placeholder || undefined}
        newsletterSubmitAriaLabel={siteSettings.footer_copy?.newsletter_submit_aria_label || undefined}
        newsletterSuccessMessage={siteSettings.footer_copy?.newsletter_success_message || undefined}
        socialTitle={siteSettings.footer_social_title || undefined}
        socialLinks={socialLinks}
      />
    </>
  );
}
