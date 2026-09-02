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

const footerContent = {
  tr: {
    tagline: "PROFESYONEL İŞ GİYİMİ",
    description:
      "Performans, dayanıklılık ve güçlü kurumsal kimlik gerektiren ekipler için profesyonel iş giyimi çözümleri.",
    navigationTitle: "KEŞFET",
    contactTitle: "İLETİŞİM",
    contactText:
      "Ekibiniz ve projeniz için doğru iş giyimi çözümünü birlikte geliştirelim.",
    contactLink: "BİZE ULAŞIN",
    copyright: "© SUW. Tüm hakları saklıdır.",
    backToTop: "Yukarı dön",
    infoLabels: {
      address: "ADRES",
      email: "E-POSTA",
      phone: "TELEFON",
    },
    navigation: [
      { label: "ANA SAYFA", href: "/" },
      { label: "ÜRÜNLER", href: "/products" },
      { label: "PROJELER", href: "/projects" },
      { label: "HAKKIMIZDA", href: "/about" },
      { label: "İLETİŞİM", href: "/contact" },
    ],
  },

  en: {
    tagline: "PROFESSIONAL WORKWEAR",
    description:
      "Professional workwear solutions for teams that demand performance, durability and a strong corporate identity.",
    navigationTitle: "EXPLORE",
    contactTitle: "CONTACT",
    contactText:
      "Let’s develop the right workwear solution for your team and project.",
    contactLink: "GET IN TOUCH",
    copyright: "© SUW. All rights reserved.",
    backToTop: "Back to top",
    infoLabels: {
      address: "ADDRESS",
      email: "EMAIL",
      phone: "PHONE",
    },
    navigation: [
      { label: "HOME", href: "/" },
      { label: "PRODUCTS", href: "/products" },
      { label: "PROJECTS", href: "/projects" },
      { label: "ABOUT", href: "/about" },
      { label: "CONTACT", href: "/contact" },
    ],
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

            <p className="site-footer__tagline">
              {content.tagline}
            </p>

            <p className="site-footer__description">
              {content.description}
            </p>
          </div>

          <div className="site-footer__navigation">
            <p className="site-footer__column-title">
              {content.navigationTitle}
            </p>

            <nav className="site-footer__links">
              {content.navigation.map((item) => (
                <Link
                  className="site-footer__link"
                  href={withLocale(item.href)}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer__contact">
            <p className="site-footer__column-title">
              {content.contactTitle}
            </p>

            <p className="site-footer__contact-text">
              {content.contactText}
            </p>

            <Link
              className="site-footer__contact-link"
              href={withLocale("/contact")}
            >
              <span>{content.contactLink}</span>
              <span aria-hidden="true">↗</span>
            </Link>

            {socialLinks.length > 0 ? (
              <div className="site-footer__social-links">
                {socialLinks.map((item) => (
                  <Link
                    className="site-footer__social-link"
                    href={item.href}
                    key={item.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="site-footer__info-row">
          {compactContact?.address ? (
            <div className="site-footer__info-item">
              <p className="site-footer__info-label">{content.infoLabels.address}</p>
              <p className="site-footer__info-value">
                {desktopMapUrl ? (
                  <a
                    className="site-footer__info-value-link"
                    href={desktopMapUrl}
                    onClick={handleAddressClick}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {compactContact.address}
                  </a>
                ) : compactContact.address}
              </p>
            </div>
          ) : null}

          {compactContact?.phone ? (
            <div className="site-footer__info-item">
              <p className="site-footer__info-label">{content.infoLabels.phone}</p>
              <a className="site-footer__info-value" href={`tel:${compactContact.phone.replace(/[^+\d]/g, "")}`}>
                {compactContact.phone}
              </a>
            </div>
          ) : null}

          {compactContact?.email ? (
            <div className="site-footer__info-item">
              <p className="site-footer__info-label">{content.infoLabels.email}</p>
              <a className="site-footer__info-value" href={`mailto:${compactContact.email}`}>
                {compactContact.email}
              </a>
            </div>
          ) : null}

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
