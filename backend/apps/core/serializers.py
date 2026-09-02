from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import SiteSettings, NavigationItem, NewsletterSubscriber


class MetadataSerializer(serializers.Serializer):
    path = serializers.CharField()
    meta_title = serializers.CharField()
    meta_description = serializers.CharField()


class NewsletterSubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscriber
        fields = ["email"]
        extra_kwargs = {
            "email": {
                "validators": [
                    UniqueValidator(
                        queryset=NewsletterSubscriber.objects.all(),
                        message="Bu e-posta adresi zaten kayıtlı.",
                    )
                ]
            }
        }


class NavigationItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = NavigationItem
        fields = ["id", "location", "label", "url", "is_external"]


# ── Nested copy serializers ──────────────────────────────────────────────────

class HeaderCopySerializer(serializers.Serializer):
    home_aria_label = serializers.CharField(source="header_home_aria_label")
    desktop_nav_aria_label = serializers.CharField(source="header_desktop_nav_aria_label")
    mobile_nav_aria_label = serializers.CharField(source="header_mobile_nav_aria_label")
    locale_button_aria_label_prefix = serializers.CharField(source="header_locale_button_aria_label_prefix")
    mobile_menu_aria_label = serializers.CharField(source="header_mobile_menu_aria_label")


class FooterContactLabelsSerializer(serializers.Serializer):
    phone = serializers.CharField(source="footer_contact_label_phone")
    fax = serializers.CharField(source="footer_contact_label_fax")
    email = serializers.CharField(source="footer_contact_label_email")
    whatsapp = serializers.CharField(source="footer_contact_label_whatsapp")


class FooterSocialLabelsSerializer(serializers.Serializer):
    instagram = serializers.CharField(source="footer_social_label_instagram")
    linkedin = serializers.CharField(source="footer_social_label_linkedin")
    facebook = serializers.CharField(source="footer_social_label_facebook")
    x = serializers.CharField(source="footer_social_label_x")
    youtube = serializers.CharField(source="footer_social_label_youtube")


class FooterCopySerializer(serializers.Serializer):
    home_aria_label = serializers.CharField(source="footer_home_aria_label")
    back_to_top_aria_label = serializers.CharField(source="footer_back_to_top_aria_label")
    newsletter_submit_aria_label = serializers.CharField(source="footer_newsletter_submit_aria_label")
    newsletter_success_message = serializers.CharField(source="footer_newsletter_success_message")
    newsletter_error_message = serializers.CharField(source="footer_newsletter_error_message")
    contact_labels = FooterContactLabelsSerializer(source="*")
    social_labels = FooterSocialLabelsSerializer(source="*")


class NotFoundCopySerializer(serializers.Serializer):
    title = serializers.CharField(source="not_found_title")
    description = serializers.CharField(source="not_found_description")
    primary_button_text = serializers.CharField(source="not_found_primary_button_text")
    secondary_button_text = serializers.CharField(source="not_found_secondary_button_text")


# ── Main serializer ──────────────────────────────────────────────────────────

class SiteSettingsSerializer(serializers.ModelSerializer):
    header_nav = NavigationItemSerializer(many=True, read_only=True)
    footer_nav = NavigationItemSerializer(many=True, read_only=True)
    header_copy = HeaderCopySerializer(source="*", read_only=True)
    footer_copy = FooterCopySerializer(source="*", read_only=True)
    not_found_copy = NotFoundCopySerializer(source="*", read_only=True)

    class Meta:
        model = SiteSettings
        fields = [
            "font_family",
            "logo",
            "phone",
            "fax",
            "email",
            "address",
            "latitude",
            "longitude",
            "contact_section_eyebrow",
            "contact_section_title",
            "contact_section_description",
            "google_maps_url",
            "apple_maps_url",
            "yandex_maps_url",
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
            "instagram",
            "linkedin",
            "facebook",
            "twitter",
            "youtube",
            "whatsapp",
            "header_nav",
            "footer_nav",
            # Copy blocks
            "header_copy",
            "footer_copy",
            "not_found_copy",
        ]
