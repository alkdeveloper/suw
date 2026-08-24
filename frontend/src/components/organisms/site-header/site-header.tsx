"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";
import { LOCALE_COOKIE_NAME } from "@/src/lib/locale";

import type {
  HeaderLinkProps,
  HeaderLocaleProps,
  SiteHeaderProps,
} from "./site-header.types";

function HeaderLocale({
  localeLabel,
  localeHref,
  ariaLabelPrefix,
}: HeaderLocaleProps) {
  const ariaLabel = ariaLabelPrefix
    ? `${ariaLabelPrefix} ${localeLabel}`
    : localeLabel;

  if (localeHref) {
    return (
      <Link
        aria-label={ariaLabel}
        className="site-header__locale-button"
        href={localeHref}
        onClick={() => {
          document.cookie = `${LOCALE_COOKIE_NAME}=${localeLabel.toLowerCase()}; path=/; max-age=31536000; samesite=lax`;
        }}
      >
        {localeLabel}
      </Link>
    );
  }

  return (
    <button
      aria-label={ariaLabel}
      className="site-header__locale-button"
      type="button"
    >
      {localeLabel}
    </button>
  );
}

function HeaderLink({
  href,
  isExternal,
  label,
  isActive,
}: HeaderLinkProps) {
  return (
    <Link
      className={cn(
        "site-header__link",
        isActive && "site-header__link--active",
      )}
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {label}
    </Link>
  );
}

export function SiteHeader({
  items,
  homeHref = "/",
  localeLabel = "EN",
  localeHref,
  logoSrc,
  homeAriaLabel,
  desktopNavAriaLabel,
  mobileNavAriaLabel,
  localeButtonAriaLabelPrefix,
  mobileMenuAriaLabel,
  scrolledBackgroundClassName = "site-header--scrolled-background",
  scrollThreshold = 100,
}: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [resolvedLogoSrc, setResolvedLogoSrc] = useState<
    string | undefined
  >(logoSrc);

  useEffect(() => {
    setResolvedLogoSrc(logoSrc);
  }, [logoSrc]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= scrollThreshold);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "site-header",
        isScrolled && "site-header--scrolled-border",
        isScrolled && scrolledBackgroundClassName,
        isMobileMenuOpen && "site-header--menu-open",
      )}
    >
      <Container className="site-header__container">
        <div className="site-header__desktop-navigation">
          <div className="site-header__desktop-brand">
            <Link
              aria-label={homeAriaLabel}
              className="site-header__logo-link-desktop"
              href={homeHref}
            >
              {resolvedLogoSrc ? (
                <Image
                  alt="SUW"
                  className="site-header__logo-image-desktop"
                  height={60}
                  priority
                  src={resolvedLogoSrc}
                  width={140}
                  onError={() => setResolvedLogoSrc(undefined)}
                />
              ) : (
                <span className="site-header__wordmark">SUW</span>
              )}
            </Link>
          </div>

          <nav
            aria-label={desktopNavAriaLabel}
            className="site-header__desktop-links"
          >
            {items.map((item) => (
              <HeaderLink
                key={`${item.href}-${item.label}`}
                href={item.href}
                isActive={item.isActive}
                isExternal={item.isExternal}
                label={item.label}
              />
            ))}
          </nav>

          <div className="site-header__desktop-actions">
            <HeaderLocale
              ariaLabelPrefix={localeButtonAriaLabelPrefix}
              localeHref={localeHref}
              localeLabel={localeLabel}
            />
          </div>
        </div>

        <div className="site-header__mobile-brand">
          <Link
            aria-label={homeAriaLabel}
            className="site-header__mobile-logo-link"
            href={homeHref}
          >
            {resolvedLogoSrc ? (
              <Image
                alt="SUW"
                className="site-header__mobile-logo-image"
                height={48}
                priority
                src={resolvedLogoSrc}
                width={110}
                onError={() => setResolvedLogoSrc(undefined)}
              />
            ) : (
              <span className="site-header__wordmark">SUW</span>
            )}
          </Link>
        </div>

        <div className="site-header__mobile-actions">
          <HeaderLocale
            ariaLabelPrefix={localeButtonAriaLabelPrefix}
            localeHref={localeHref}
            localeLabel={localeLabel}
          />

          <button
            aria-expanded={isMobileMenuOpen}
            aria-label={mobileMenuAriaLabel}
            className="site-header__menu-button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            type="button"
          >
            <span className="site-header__menu-bars">
              <span
                className={cn(
                  "site-header__menu-bar",
                  "site-header__menu-bar--top",
                  isMobileMenuOpen && "site-header__menu-bar--top-open",
                )}
              />

              <span
                className={cn(
                  "site-header__menu-bar",
                  "site-header__menu-bar--middle",
                  isMobileMenuOpen && "site-header__menu-bar--middle-open",
                )}
              />

              <span
                className={cn(
                  "site-header__menu-bar",
                  "site-header__menu-bar--bottom",
                  isMobileMenuOpen && "site-header__menu-bar--bottom-open",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "site-header__mobile-panel",
          isMobileMenuOpen && "site-header__mobile-panel--open",
        )}
      >
        <Container>
          <nav
            aria-label={mobileNavAriaLabel}
            className="site-header__mobile-nav"
          >
            {items.map((item, index) => (
              <Link
                key={`${item.href}-${item.label}-mobile`}
                className={cn(
                  "site-header__mobile-link",
                  item.isActive && "site-header__mobile-link--active",
                )}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                rel={item.isExternal ? "noreferrer" : undefined}
                target={item.isExternal ? "_blank" : undefined}
              >
                <span className="site-header__mobile-link-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}