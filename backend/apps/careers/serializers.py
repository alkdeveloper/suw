from rest_framework import serializers
from drf_spectacular.utils import extend_schema_field
from drf_spectacular.types import OpenApiTypes
from django.core.validators import FileExtensionValidator
from common.validators import validate_cv_file
from apps.home.serializers import (
    HomeAboutFeatureSerializer,
    HomeTickerWordSerializer,
    HomeActivitySerializer,
)
from .models import CareerSettings, Department, JobPosition, JobApplication


class DepartmentSerializer(serializers.ModelSerializer):
    position_count = serializers.IntegerField(read_only=True, default=0)

    class Meta:
        model = Department
        fields = ["id", "name", "icon", "position_count"]


class JobPositionListSerializer(serializers.ModelSerializer):
    department = DepartmentSerializer(read_only=True)
    work_type_display = serializers.CharField(source="get_work_type_display", read_only=True)
    employment_type_display = serializers.CharField(source="get_employment_type_display", read_only=True)

    class Meta:
        model = JobPosition
        fields = [
            "id", "title", "slug", "department",
            "location", "work_type", "work_type_display",
            "employment_type", "employment_type_display", "experience_level",
        ]


class JobPositionDetailSerializer(serializers.ModelSerializer):
    department = DepartmentSerializer(read_only=True)
    work_type_display = serializers.CharField(source="get_work_type_display", read_only=True)
    employment_type_display = serializers.CharField(source="get_employment_type_display", read_only=True)

    class Meta:
        model = JobPosition
        fields = [
            "id", "title", "slug", "department",
            "location", "work_type", "work_type_display",
            "employment_type", "employment_type_display",
            "experience_level", "description", "responsibilities", "requirements",
        ]


# ── Copy nested serializers ──────────────────────────────────────────────────

class OpenPositionsCopySerializer(serializers.Serializer):
    count_label_suffix = serializers.CharField(source="positions_count_label_suffix")
    previous_aria_label = serializers.CharField(source="positions_previous_aria_label")
    next_aria_label = serializers.CharField(source="positions_next_aria_label")


class JobListingMetaLabelsSerializer(serializers.Serializer):
    department = serializers.CharField(source="job_meta_department")
    location = serializers.CharField(source="job_meta_location")
    work_type = serializers.CharField(source="job_meta_work_type")
    employment = serializers.CharField(source="job_meta_employment")
    experience = serializers.CharField(source="job_meta_experience")


class JobListingCopySerializer(serializers.Serializer):
    responsibilities_label = serializers.CharField(source="job_responsibilities_label")
    expectations_label = serializers.CharField(source="job_expectations_label")
    meta_labels = JobListingMetaLabelsSerializer(source="*")


class ApplicationFormFieldsSerializer(serializers.Serializer):
    first_name = serializers.CharField(source="app_field_first_name")
    last_name = serializers.CharField(source="app_field_last_name")
    email = serializers.CharField(source="app_field_email")
    phone = serializers.CharField(source="app_field_phone")
    cv = serializers.CharField(source="app_field_cv")
    cover_letter = serializers.CharField(source="app_field_cover_letter")


class ApplicationFormPlaceholdersSerializer(serializers.Serializer):
    first_name = serializers.CharField(source="app_placeholder_first_name")
    last_name = serializers.CharField(source="app_placeholder_last_name")
    email = serializers.CharField(source="app_placeholder_email")
    phone = serializers.CharField(source="app_placeholder_phone")
    cv = serializers.CharField(source="app_placeholder_cv")
    cover_letter = serializers.CharField(source="app_placeholder_cover_letter")


class ApplicationFormCopySerializer(serializers.Serializer):
    position_summary_label = serializers.CharField(source="app_position_summary_label")
    form_title = serializers.CharField(source="app_form_title")
    submit_label = serializers.CharField(source="app_submit_label")
    submitting_label = serializers.CharField(source="app_submitting_label")
    upload_label = serializers.CharField(source="app_upload_label")
    privacy_link_label = serializers.CharField(source="app_privacy_link_label")
    privacy_consent_text = serializers.CharField(source="app_privacy_consent_text")
    feedback_success_message = serializers.CharField(source="app_feedback_success_message")
    feedback_error_message = serializers.CharField(source="app_feedback_error_message")
    feedback_missing_cv_message = serializers.CharField(source="app_feedback_missing_cv_message")
    fields = ApplicationFormFieldsSerializer(source="*")
    placeholders = ApplicationFormPlaceholdersSerializer(source="*")


# ── Page serializer ──────────────────────────────────────────────────────────

class CareerPageSerializer(serializers.ModelSerializer):
    departments = DepartmentSerializer(many=True, read_only=True)
    stats = HomeAboutFeatureSerializer(many=True, read_only=True)
    ticker_words = HomeTickerWordSerializer(many=True, read_only=True)
    activities = HomeActivitySerializer(many=True, read_only=True)
    open_positions_copy = OpenPositionsCopySerializer(source="*", read_only=True)
    job_listing_copy = JobListingCopySerializer(source="*", read_only=True)
    application_form_copy = ApplicationFormCopySerializer(source="*", read_only=True)

    class Meta:
        model = CareerSettings
        fields = [
            # Hero
            "hero_title", "hero_image",
            # Tanıtım
            "intro_label", "intro_title", "intro_description", "intro_image",
            "intro_button_text", "intro_button_url",
            # Pozisyonlar
            "positions_title", "positions_button_text", "departments",
            "open_positions_copy",
            # Neden Biz
            "why_title", "why_description", "why_button_text", "why_button_url", "stats",
            # Job listing copy
            "job_listing_copy",
            # Başvuru formu
            "apply_form_title", "kvkk_text",
            "application_form_copy",
            # Bülten
            "newsletter_title", "newsletter_placeholder",
            "newsletter_submit_aria_label", "newsletter_success_message", "newsletter_error_message",
            # İletişim CTA
            "contact_label", "contact_title", "contact_description",
            "contact_button_text", "contact_button_url",
            "apply_button_text", "apply_button_url",
            # Global
            "ticker_words", "activities",
            # SEO
            "meta_title", "meta_description",
        ]


@extend_schema_field(OpenApiTypes.BINARY)
class BinaryFileField(serializers.FileField):
    pass


class JobApplicationSerializer(serializers.ModelSerializer):
    cv_file = BinaryFileField(
        write_only=True,
        validators=[
            FileExtensionValidator(["pdf"]),
            validate_cv_file,
        ],
    )

    class Meta:
        model = JobApplication
        fields = [
            "position", "first_name", "last_name", "email", "phone",
            "cv_file", "cover_letter", "kvkk_accepted",
        ]

    def validate_kvkk_accepted(self, value):
        if not value:
            raise serializers.ValidationError("KVKK onayı zorunludur.")
        return value
