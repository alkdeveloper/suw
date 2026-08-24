from modeltranslation.translator import TranslationOptions, register
from .models import NavigationItem, SiteSettings


@register(SiteSettings)
class SiteSettingsTranslationOptions(TranslationOptions):
    fields = (
        # Görünür footer / genel metinler
        "footer_title",
        "footer_newsletter_title",
        "footer_newsletter_placeholder",
        "footer_newsletter_consent_text",
        "footer_newsletter_consent_link_text",
        "footer_contact_title",
        "footer_navigation_title",
        "footer_social_title",
        "footer_address_label",
        "copyright_text",
        "address",
        # Header copy
        "header_home_aria_label",
        "header_desktop_nav_aria_label",
        "header_mobile_nav_aria_label",
        "header_locale_button_aria_label_prefix",
        "header_mobile_menu_aria_label",
        # Footer copy
        "footer_home_aria_label",
        "footer_back_to_top_aria_label",
        "footer_newsletter_submit_aria_label",
        "footer_newsletter_success_message",
        "footer_newsletter_error_message",
        "footer_contact_label_phone",
        "footer_contact_label_fax",
        "footer_contact_label_email",
        "footer_contact_label_whatsapp",
        "footer_social_label_instagram",
        "footer_social_label_linkedin",
        "footer_social_label_facebook",
        "footer_social_label_x",
        "footer_social_label_youtube",
        # Not found copy
        "not_found_title",
        "not_found_description",
        "not_found_primary_button_text",
        "not_found_secondary_button_text",
        # SEO
        "meta_title",
        "meta_description",
    )


@register(NavigationItem)
class NavigationItemTranslationOptions(TranslationOptions):
    fields = ("label",)
