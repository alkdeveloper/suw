import type { SiteSettingsResponse } from "@/src/lib/api-types";

/**
 * API (core/settings/) erişilemediğinde layout’un çökmemesi için minimal cevap.
 * Boş nav ile sayfa açılır; backend ayağa kalkınca gerçek ayarlar gelir.
 */
export function getOfflineSiteSettings(): SiteSettingsResponse {
  return {
    font_family: "dm_sans",
    logo: null,
    phone: "",
    fax: "",
    email: "",
    address: "",
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
    header_nav: [],
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
