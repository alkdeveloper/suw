import type { SiteSettingsResponse } from "@/src/lib/api-types";
import { resolvePublicAssetPath } from "@/src/lib/assets";

/**
 * API (core/settings/) erişilemediğinde layout’un çökmemesi için minimal cevap.
 * Boş nav ile sayfa açılır; backend ayağa kalkınca gerçek ayarlar gelir.
 */
export function getOfflineSiteSettings(
  locale: "tr" | "en" = "tr",
): SiteSettingsResponse {
  return {
    font_family: "krub",
    logo: resolvePublicAssetPath("/images/suw-logo-hero.png"),
    phone: "",
    fax: "",
    email: "",
    address: "",
    latitude: null,
    longitude: null,
    contact_section_eyebrow: locale === "tr" ? "İLETİŞİM" : "CONTACT",
    contact_section_title: locale === "tr" ? "BİZE ULAŞIN." : "GET IN TOUCH.",
    contact_section_description: "",
    google_maps_url: "",
    apple_maps_url: "",
    yandex_maps_url: "",
    footer_title: "",
    footer_newsletter_title: "",
    footer_newsletter_placeholder: "",  
    footer_newsletter_consent_text: "",
    footer_newsletter_consent_link_text: "",
    footer_contact_title: "",
    footer_navigation_title: "",
    footer_social_title: "",
    footer_address_label: "",
    copyright_text: "",
    instagram: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    youtube: "",
    whatsapp: "",
    header_nav:
  locale === "tr"
    ? [
        { id: 1, location: "header", label: "ANA SAYFA", url: "/", is_external: false },
        { id: 2, location: "header", label: "ÜRÜNLER", url: "/products", is_external: false },
        { id: 4, location: "header", label: "ÇÖZÜMLER", url: "/solutions", is_external: false },
        { id: 5, location: "header", label: "PROJELER", url: "/projects", is_external: false },
        { id: 6, location: "header", label: "HAKKIMIZDA", url: "/about", is_external: false },
        { id: 7, location: "header", label: "İLETİŞİM", url: "/contact", is_external: false },
      ]
    : [
        { id: 1, location: "header", label: "HOME", url: "/", is_external: false },
        { id: 2, location: "header", label: "PRODUCTS", url: "/products", is_external: false },
        { id: 4, location: "header", label: "SOLUTIONS", url: "/solutions", is_external: false },
        { id: 5, location: "header", label: "PROJECTS", url: "/projects", is_external: false },
        { id: 6, location: "header", label: "ABOUT", url: "/about", is_external: false },
        { id: 7, location: "header", label: "CONTACT", url: "/contact", is_external: false },
      ],
footer_nav: [],
    header_copy: {
      home_aria_label: "",
      desktop_nav_aria_label: "",
      mobile_nav_aria_label: "",
      locale_button_aria_label_prefix: "",
      mobile_menu_aria_label: "",
    },
    footer_copy: {
      back_to_top_aria_label: "",
      home_aria_label: "",
      newsletter_error_message: "",
      newsletter_submit_aria_label: "",
      newsletter_success_message: "",
      contact_labels: {
        phone: "",
        fax: "",
        email: "",
        whatsapp: "",
      },
      social_labels: {
        instagram: "",
        linkedin: "",
        facebook: "",
        x: "",
        youtube: "",
      },
    },
    not_found_copy: {
      title: "",
      description: "",
      primary_button_text: "",
      secondary_button_text: "",
    },
  };
}
