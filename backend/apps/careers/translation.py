from modeltranslation.translator import translator, TranslationOptions
from .models import CareerSettings, Department, JobPosition, JobApplication


class CareerSettingsTranslation(TranslationOptions):
    fields = (
        "hero_title",
        "intro_label", "intro_title", "intro_description", "intro_button_text",
        "positions_title", "positions_button_text",
        # Open positions copy
        "positions_count_label_suffix",
        "positions_previous_aria_label",
        "positions_next_aria_label",
        # Why section
        "why_title", "why_description", "why_button_text",
        # Job listing copy
        "job_responsibilities_label",
        "job_expectations_label",
        "job_meta_department",
        "job_meta_location",
        "job_meta_work_type",
        "job_meta_employment",
        "job_meta_experience",
        # Apply form
        "apply_form_title", "kvkk_text",
        # Application form copy
        "app_position_summary_label",
        "app_form_title",
        "app_submit_label",
        "app_submitting_label",
        "app_upload_label",
        "app_privacy_link_label",
        "app_privacy_consent_text",
        "app_feedback_success_message",
        "app_feedback_error_message",
        "app_feedback_missing_cv_message",
        "app_field_first_name", "app_field_last_name", "app_field_email",
        "app_field_phone", "app_field_cv", "app_field_cover_letter",
        "app_placeholder_first_name", "app_placeholder_last_name",
        "app_placeholder_email", "app_placeholder_phone",
        "app_placeholder_cv", "app_placeholder_cover_letter",
        # Newsletter
        "newsletter_title", "newsletter_placeholder",
        "newsletter_submit_aria_label",
        "newsletter_success_message",
        "newsletter_error_message",
        # Contact CTA
        "contact_label", "contact_title", "contact_description",
        "contact_button_text",
        "apply_button_text",
        # SEOModel
        "meta_title", "meta_description",
    )


class DepartmentTranslation(TranslationOptions):
    fields = ("name",)


class JobPositionTranslation(TranslationOptions):
    fields = (
        "title", "location", "experience_level",
        "description", "responsibilities", "requirements",
    )


class JobApplicationTranslation(TranslationOptions):
    fields = ()


translator.register(CareerSettings, CareerSettingsTranslation)
translator.register(Department, DepartmentTranslation)
translator.register(JobPosition, JobPositionTranslation)
translator.register(JobApplication, JobApplicationTranslation)
