"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";
import { LOCALE_COOKIE_NAME } from "@/src/lib/locale";
import { resolvePublicAssetPath } from "@/src/lib/assets";

import type {
  HeaderLinkProps,
  HeaderLocaleProps,
  SiteHeaderProps,
} from "./site-header.types";

const HEADER_LOGO_FALLBACK = resolvePublicAssetPath("/images/suw-logo-hero.png");

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
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelId = useId();
  const pathname = usePathname();
  const [resolvedLogoSrc, setResolvedLogoSrc] = useState(
    logoSrc || HEADER_LOGO_FALLBACK,
  );

  useEffect(() => {
    setResolvedLogoSrc(logoSrc || HEADER_LOGO_FALLBACK);
  }, [logoSrc]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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

    const body = document.body;
    const root = document.documentElement;
    const previousRootOverflow = root.style.overflowY;
    const scrollY = window.scrollY;
    const previous = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
      if (event.key === "Tab") {
        const links = Array.from(headerRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? [])
          .filter((element) => element.getClientRects().length > 0);
        const first = links[0];
        const last = links[links.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMobileMenuOpen(false);
    };

    if (scrollbarWidth > 0) root.style.overflowY = "scroll";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    window.addEventListener("keydown", handleEscape);
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      Object.assign(body.style, previous);
      root.style.overflowY = previousRootOverflow;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      root.style.scrollBehavior = previousScrollBehavior;
      menuButtonRef.current?.focus({ preventScroll: true });
      window.removeEventListener("keydown", handleEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
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
              <Image
                alt="SUW"
                className="site-header__logo-image-desktop"
                height={1168}
                priority
                src={resolvedLogoSrc}
                width={2481}
                onError={() => setResolvedLogoSrc(HEADER_LOGO_FALLBACK)}
              />
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
            <Image
              alt="SUW"
              className="site-header__mobile-logo-image"
              height={1168}
              priority
              src={resolvedLogoSrc}
              width={2481}
              onError={() => setResolvedLogoSrc(HEADER_LOGO_FALLBACK)}
            />
          </Link>
        </div>

        <div className="site-header__mobile-actions">
          <HeaderLocale
            ariaLabelPrefix={localeButtonAriaLabelPrefix}
            localeHref={localeHref}
            localeLabel={localeLabel}
          />

          <button
            ref={menuButtonRef}
            aria-controls={mobilePanelId}
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
        id={mobilePanelId}
        inert={!isMobileMenuOpen}
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
