from rest_framework import serializers
from apps.gallery.models import GalleryImage
from apps.home.models import HomeActivity
from .models import ContactPage, ContactMessage


def _absolute_image_url(request, file_field):
    """SSR / next/image için tam URL; istek yoksa göreli path."""
    if not file_field:
        return None
    url = file_field.url
    if request:
        return request.build_absolute_uri(url)
    return url


class ContactStripImageSerializer(serializers.ModelSerializer):
    """İletişim bülten şeridi — faaliyet görseli (tam URL)."""

    image = serializers.SerializerMethodField()

    class Meta:
        model = HomeActivity
        fields = ["image"]

    def get_image(self, obj):
        return _absolute_image_url(self.context.get("request"), obj.image)


class ContactStripGalleryImageSerializer(serializers.ModelSerializer):
    """İletişim bülten şeridi — galeri görseli (tam URL)."""

    image = serializers.SerializerMethodField()

    class Meta:
        model = GalleryImage
        fields = ["image"]

    def get_image(self, obj):
        return _absolute_image_url(self.context.get("request"), obj.image)


# ── Form copy nested serializers ─────────────────────────────────────────────

class ContactFormFieldsSerializer(serializers.Serializer):
    first_name = serializers.CharField(source="form_field_first_name")
    last_name = serializers.CharField(source="form_field_last_name")
    email = serializers.CharField(source="form_field_email")
    phone = serializers.CharField(source="form_field_phone")
    subject = serializers.CharField(source="form_field_subject")
    message = serializers.CharField(source="form_field_message")


class ContactFormPlaceholdersSerializer(serializers.Serializer):
    first_name = serializers.CharField(source="form_placeholder_first_name")
    last_name = serializers.CharField(source="form_placeholder_last_name")
    email = serializers.CharField(source="form_placeholder_email")
    phone = serializers.CharField(source="form_placeholder_phone")
    subject = serializers.CharField(source="form_placeholder_subject")
    message = serializers.CharField(source="form_placeholder_message")


class ContactFormCopySerializer(serializers.Serializer):
    submit_label = serializers.CharField(source="form_submit_label")
    submitting_label = serializers.CharField(source="form_submitting_label")
    privacy_link_label = serializers.CharField(source="form_privacy_link_label")
    feedback_success_message = serializers.CharField(source="form_feedback_success_message")
    feedback_error_message = serializers.CharField(source="form_feedback_error_message")
    fields = ContactFormFieldsSerializer(source="*")
    placeholders = ContactFormPlaceholdersSerializer(source="*")


# ── Page serializer ──────────────────────────────────────────────────────────

class ContactPageSerializer(serializers.ModelSerializer):
    activities = serializers.SerializerMethodField()
    form_copy = ContactFormCopySerializer(source="*", read_only=True)
    gallery_images = serializers.SerializerMethodField()

    class Meta:
        model = ContactPage
        fields = [
            # Harita
            "map_embed_url",
            # Neredeyiz kartı
            "info_title",
            "info_description",
            "info_image",
            "phone",
            "email",
            "address",
            # Form
            "form_title",
            "kvkk_text",
            "form_eyebrow",
            "form_left_title",
            "form_left_description",
            "form_right_eyebrow",
            "form_right_title",
            "form_copy",
            # Bülten
            "newsletter_title",
            "newsletter_placeholder",
            "newsletter_submit_aria_label",
            "newsletter_success_message",
            "newsletter_error_message",
            # Bülten üstü galeri şeridi
            "gallery_images",
            # Faaliyetler
            "activities",
            # Aramıza Katılın CTA
            "join_label",
            "join_title",
            "join_description",
            "join_button_text",
            "join_button_url",
            # SEO
            "meta_title",
            "meta_description",
        ]

    def get_gallery_images(self, obj):
        """İletişim sayfası bülten üstü şerit — admin’de seçilen galeri (sadece image)."""
        qs = obj.gallery_images.all().order_by("id")
        return ContactStripGalleryImageSerializer(qs, many=True, context=self.context).data

    def get_activities(self, obj):
        qs = HomeActivity.objects.filter(is_active=True).order_by("order")
        return ContactStripImageSerializer(qs, many=True, context=self.context).data


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = [
            "first_name",
            "last_name",
            "email",
            "phone",
            "subject",
            "message",
            "kvkk_accepted",
        ]

    def validate_kvkk_accepted(self, value):
        if not value:
            raise serializers.ValidationError("KVKK onayı zorunludur.")
        return value
