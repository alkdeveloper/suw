from modeltranslation.translator import translator, TranslationOptions

from .models import ContactPage, ContactMessage


class ContactPageTranslation(TranslationOptions):
    fields = (
        "info_title",
        "info_description",
        "address",
        "form_title",
        "kvkk_text",
        # Form copy
        "form_submit_label",
        "form_submitting_label",
        "form_privacy_link_label",
        "form_feedback_success_message",
        "form_feedback_error_message",
        "form_field_first_name",
        "form_field_last_name",
        "form_field_email",
        "form_field_phone",
        "form_field_subject",
        "form_field_message",
        "form_placeholder_first_name",
        "form_placeholder_last_name",
        "form_placeholder_email",
        "form_placeholder_phone",
        "form_placeholder_subject",
        "form_placeholder_message",
        # Bülten
        "newsletter_title",
        "newsletter_placeholder",
        "newsletter_submit_aria_label",
        "newsletter_success_message",
        "newsletter_error_message",
        # CTA
        "join_label",
        "join_title",
        "join_description",
        "join_button_text",
        # SEOModel
        "meta_title",
        "meta_description",
    )


class ContactMessageTranslation(TranslationOptions):
    """ContactMessage çeviriye ihtiyaç duymaz ama modeltranslation registry gerektirir."""
    fields = ()


translator.register(ContactPage, ContactPageTranslation)
translator.register(ContactMessage, ContactMessageTranslation)
