from rest_framework import serializers
from .models import LegalPage, LegalSection


class LegalSectionSerializer(serializers.ModelSerializer):
    body = serializers.SerializerMethodField()

    class Meta:
        model = LegalSection
        fields = ["heading", "body"]

    def get_body(self, obj):
        """Her zaman string[] döner."""
        if isinstance(obj.body, list):
            return [str(item) for item in obj.body]
        return []


class LegalPageSerializer(serializers.ModelSerializer):
    sections = LegalSectionSerializer(many=True, read_only=True)
    last_updated = serializers.DateField(format="%Y-%m-%d", allow_null=True)

    class Meta:
        model = LegalPage
        fields = [
            "slug",
            "title",
            "subtitle",
            "intro",
            "last_updated",
            "last_updated_label",
            "hero_image",
            "hero_glow_image",
            "sections",
            # SEO
            "meta_title",
            "meta_description",
        ]
