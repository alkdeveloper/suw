from rest_framework import serializers
from .models import CorporatePage, CorporateHistoryItem, GroupExperienceItem, WhySuwItem
from apps.home.serializers import HomeBrandSerializer, HomeActivitySerializer


class CorporateHistoryItemSerializer(serializers.ModelSerializer):
    year_or_period = serializers.SerializerMethodField()
    title = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    class Meta:
        model = CorporateHistoryItem
        fields = ["id", "year_or_period", "title", "description"]
    def _lang(self): return "en" if self.context["request"].headers.get("Accept-Language", "tr").lower().startswith("en") else "tr"
    def get_year_or_period(self, obj): return getattr(obj, f"year_{self._lang()}")
    def get_title(self, obj): return getattr(obj, f"title_{self._lang()}")
    def get_description(self, obj): return getattr(obj, f"description_{self._lang()}")


class AboutItemSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    def _lang(self): return "en" if self.context["request"].headers.get("Accept-Language", "tr").lower().startswith("en") else "tr"
    def get_title(self, obj): return getattr(obj, f"title_{self._lang()}")
    def get_description(self, obj): return getattr(obj, f"description_{self._lang()}")


class CorporatePageSerializer(serializers.ModelSerializer):
    history_items = CorporateHistoryItemSerializer(many=True, read_only=True)
    brands = HomeBrandSerializer(many=True, read_only=True)
    activities = HomeActivitySerializer(many=True, read_only=True)
    page = serializers.SerializerMethodField()

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
            "page",
        ]

    def get_page(self, obj):
        lang = "en" if self.context["request"].headers.get("Accept-Language", "tr").lower().startswith("en") else "tr"
        value = lambda name: getattr(obj, f"{name}_{lang}")
        request = self.context["request"]
        image = lambda field: request.build_absolute_uri(field.url) if field else None
        return {
            "hero": {"eyebrow": value("hero_eyebrow"), "title": value("hero_title"), "description": value("hero_description")},
            "group": {"eyebrow": value("group_eyebrow"), "title": value("group_title"), "description": value("group_description"), "supporting_label": value("group_supporting_label"), "image": image(obj.group_image), "image_mobile": image(obj.group_image_mobile)},
            "why": {"eyebrow": value("why_eyebrow"), "title": value("why_title"), "description": value("why_description"), "items": AboutItemSerializer(WhySuwItem.objects.filter(is_active=True).order_by("sort_order", "id"), many=True, context=self.context).data},
            "experience": {"eyebrow": value("experience_eyebrow"), "title": value("experience_title"), "description": value("experience_description"), "items": AboutItemSerializer(GroupExperienceItem.objects.filter(is_active=True).order_by("sort_order", "id"), many=True, context=self.context).data},
            "timeline": {"eyebrow": value("timeline_eyebrow"), "title": value("timeline_title"), "items": CorporateHistoryItemSerializer(CorporateHistoryItem.objects.filter(is_active=True).order_by("sort_order", "id"), many=True, context=self.context).data},
            "cta": {"eyebrow": value("final_cta_eyebrow"), "title": value("final_cta_title"), "description": value("final_cta_description"), "text": value("final_cta_text"), "link": obj.final_cta_link},
        }
