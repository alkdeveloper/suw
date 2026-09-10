"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";
import { resolvePublicAssetPath } from "@/src/lib/assets";
import { DEFAULT_LOCALE } from "@/src/lib/locale";

import type { SiteFooterProps } from "./site-footer.types";

function BackToTopIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 26 24"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6012 4.94531L12.0352 5.46094L2.19141 14.8359L3.32344 15.9141L12.6012 7.07812L21.8789 15.9141L23.0109 14.8359L13.1672 5.46094L12.6012 4.94531Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <rect height="17" rx="4.5" stroke="currentColor" strokeWidth="1.7" width="17" x="3.5" y="3.5" />
      <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.7" fill="currentColor" r="1" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.2 8.1H3.3V20h2.9V8.1ZM4.75 3.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20.7 13.2c0-3.6-1.9-5.3-4.5-5.3-2.1 0-3 1.1-3.5 1.9V8.1H9.8V20h2.9v-5.9c0-1.6.3-3.1 2.3-3.1 2 0 2 1.8 2 3.2V20h2.9l.8-6.8Z" />
    </svg>
  );
}

const footerContent = {
  tr: {
    contactLink: "BİZE ULAŞIN",
    copyright: "© SUW. Tüm hakları saklıdır.",
    backToTop: "Yukarı dön",
    infoLabels: {
      address: "ADRES",
      email: "E-POSTA",
      phone: "TELEFON",
    },
  },

  en: {
    contactLink: "GET IN TOUCH",
    copyright: "© SUW. All rights reserved.",
    backToTop: "Back to top",
    infoLabels: {
      address: "ADDRESS",
      email: "EMAIL",
      phone: "PHONE",
    },
  },
};

export function SiteFooter({
  className,
  locale = DEFAULT_LOCALE,
  localePrefix = "",
  logoSrc,
  backToTopAriaLabel,
  compactContact,
  socialLinks = [],
}: SiteFooterProps) {
  const activeLocale = locale === "en" ? "en" : "tr";
  const content = footerContent[activeLocale];
  const resolvedLogoSrc = logoSrc || resolvePublicAssetPath("/images/suw-logo-hero.png");
  const encodedAddress = compactContact?.address
    ? encodeURIComponent(compactContact.address)
    : "";
  const coordinates = compactContact?.latitude && compactContact?.longitude
    ? `${compactContact.latitude},${compactContact.longitude}`
    : "";
  const desktopMapUrl = compactContact?.address
    ? `https://www.google.com/maps/search/?api=1&query=${coordinates || encodedAddress}`
    : undefined;
  const visibleSocialLinks = socialLinks.filter(
    (item) => item.platform === "instagram" || item.platform === "linkedin",
  );

  const handleAddressClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!compactContact?.address) {
      return;
    }

    const userAgent = navigator.userAgent;
    let nativeUrl: string | undefined;

    if (/Android/i.test(userAgent)) {
      nativeUrl = coordinates
        ? `geo:${coordinates}?q=${coordinates}(${encodedAddress})`
        : `geo:0,0?q=${encodedAddress}`;
    } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
      nativeUrl = coordinates
        ? `maps://?q=${encodedAddress}&ll=${coordinates}`
        : `maps://?q=${encodedAddress}`;
    }

    if (nativeUrl) {
      event.preventDefault();
      window.location.href = nativeUrl;
    }
  };

  const withLocale = (path: string) => {
    if (path === "/") {
      return `${localePrefix}/`;
    }

    return `${localePrefix}${path}`;
  };

  return (
    <footer className={cn("site-footer", className)}>
      <Container>
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link
              aria-label="SUW"
              className="site-footer__brand-logo"
              href={withLocale("/")}
            >
              <Image
                alt="SUW"
                className="site-footer__brand-logo-image"
                height={1168}
                src={resolvedLogoSrc}
                width={2481}
              />
            </Link>

            <Link
              className="site-footer__contact-link"
              href={withLocale("/contact")}
            >
              <span>{content.contactLink}</span>
              <span aria-hidden="true">↗</span>
            </Link>

            {visibleSocialLinks.length > 0 ? (
              <div className="site-footer__social-links">
                {visibleSocialLinks.map((item) => (
                  <a
                    aria-label={item.label}
                    className="site-footer__social-link"
                    href={item.href}
                    key={item.label}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.platform === "instagram" ? <InstagramIcon /> : null}
                    {item.platform === "linkedin" ? <LinkedInIcon /> : null}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className="site-footer__info-row">
            {compactContact?.address ? (
              <div className="site-footer__info-item site-footer__info-item--address">
                <p className="site-footer__info-label">{content.infoLabels.address}</p>
                <p className="site-footer__info-value">
                  {desktopMapUrl ? (
                    <a className="site-footer__info-value-link" href={desktopMapUrl} onClick={handleAddressClick} rel="noopener noreferrer" target="_blank">
                      {compactContact.address}
                    </a>
                  ) : compactContact.address}
                </p>
              </div>
            ) : null}

            {compactContact?.phone ? (
              <div className="site-footer__info-item">
                <p className="site-footer__info-label">{content.infoLabels.phone}</p>
                <a className="site-footer__info-value" href={`tel:${compactContact.phone.replace(/[^+\d]/g, "")}`}>{compactContact.phone}</a>
              </div>
            ) : null}

            {compactContact?.email ? (
              <div className="site-footer__info-item">
                <p className="site-footer__info-label">{content.infoLabels.email}</p>
                <a className="site-footer__info-value" href={`mailto:${compactContact.email}`}>{compactContact.email}</a>
              </div>
            ) : null}
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            {content.copyright}
          </p>

          <p className="site-footer__bottom-label">
            SUW / WORKWEAR
          </p>

          <button
            aria-label={
              backToTopAriaLabel || content.backToTop
            }
            className="site-footer__back-to-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            type="button"
          >
            <BackToTopIcon />
          </button>
        </div>
      </Container>
    </footer>
  );
}
