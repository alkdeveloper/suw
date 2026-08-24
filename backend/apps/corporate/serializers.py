from rest_framework import serializers
from .models import CorporatePage, CorporateHistoryItem
from apps.home.serializers import HomeBrandSerializer, HomeActivitySerializer


class CorporateHistoryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CorporateHistoryItem
        fields = ["id", "year", "description"]


class CorporatePageSerializer(serializers.ModelSerializer):
    history_items = CorporateHistoryItemSerializer(many=True, read_only=True)
    brands = HomeBrandSerializer(many=True, read_only=True)
    activities = HomeActivitySerializer(many=True, read_only=True)

    class Meta:
        model = CorporatePage
        fields = [
            # Hero
            "hero_image",
            "hero_text",
            # Hakkımızda
            "about_label",
            "about_description",
            "about_image",
            # Hikayemiz
            "history_label",
            "history_title",
            "history_items",
            # Vizyon & Misyon
            "vision_title",
            "vision_description",
            "mission_title",
            "mission_description",
            # Markalar
            "brands_title",
            "brands",
            # Faaliyetler
            "activities",
            # Aramıza Katılın
            "join_label",
            "join_title",
            "join_description",
            "join_button_text",
            "join_button_url",
            # SEO
            "meta_title",
            "meta_description",
        ]
