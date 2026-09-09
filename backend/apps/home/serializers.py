from rest_framework import serializers
from drf_spectacular.utils import extend_schema_field
from .models import (
    HomePage,
    HomeTickerWord,
    HomeBrand,
    HomeActivity,
    HomeAboutFeature,
    HomeOperationalItem,
    WorkEssentialItem,
    ProductionInsightItem,
)


class WorkEssentialItemSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    alt = serializers.SerializerMethodField()

    class Meta:
        model = WorkEssentialItem
        fields = ("id", "image", "alt", "link", "sort_order")

    def get_image(self, obj):
        return _absolute_media_url(self.context.get("request"), obj.image)

    def get_alt(self, obj):
        language = getattr(self.context.get("request"), "LANGUAGE_CODE", "tr")
        return obj.alt_en if language == "en" else obj.alt_tr


class ProductionInsightItemSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    title = serializers.SerializerMethodField()
    short_description = serializers.SerializerMethodField()
    detail_text = serializers.SerializerMethodField()

    class Meta:
        model = ProductionInsightItem
        fields = ("id", "image", "title", "short_description", "detail_text", "sort_order")

    def get_image(self, obj):
        return _absolute_media_url(self.context.get("request"), obj.image)

    def _is_en(self):
        return getattr(self.context.get("request"), "LANGUAGE_CODE", "tr") == "en"

    def get_title(self, obj):
        return obj.title_en if self._is_en() else obj.title_tr

    def get_short_description(self, obj):
        return obj.short_description_en if self._is_en() else obj.short_description_tr

    def get_detail_text(self, obj):
        return obj.detail_text_en if self._is_en() else obj.detail_text_tr


def _absolute_media_url(request, file_field):
    """SSR / farklı origin’de medya alanları için tam URL."""
    if not file_field:
        return None
    url = file_field.url
    if request:
        return request.build_absolute_uri(url)
    return url


class HomeTickerWordSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeTickerWord
        fields = ["text"]


class HomeBrandSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = HomeBrand
        fields = ["id", "name", "image"]

    def get_image(self, obj: HomeBrand):
        return _absolute_media_url(self.context.get("request"), obj.image)


class HomeActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeActivity
        fields = ["id", "title", "image"]


class HomeAboutFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeAboutFeature
        fields = ["key", "value"]


class HomeOperationalItemSerializer(serializers.ModelSerializer):
    external_url = serializers.SerializerMethodField()

    class Meta:
        model = HomeOperationalItem
        fields = ["id", "icon", "title", "description", "external_link_enabled", "external_url"]

    def get_external_url(self, obj: HomeOperationalItem) -> str:
        if not obj.external_link_enabled:
            return ""
        return obj.external_url or ""


class HomeAboutSerializer(serializers.Serializer):
    """Hakkımızda bölümü — page field'ları + alt modeller."""

    label = serializers.CharField(source="about_label")
    title = serializers.CharField(source="about_title")
    subtitle = serializers.CharField(source="about_subtitle")
    short_description = serializers.CharField(source="about_short_description")
    long_description = serializers.CharField(source="about_long_description")
    background_image = serializers.ImageField(source="about_background_image")
    cta_button_text = serializers.CharField(source="about_cta_button_text")
    cta_path = serializers.SerializerMethodField()

    def get_cta_path(self, obj):
        """Sabit iç yol; frontend dil öneki ekler."""
        return "/corporate"

    features = HomeAboutFeatureSerializer(many=True, source="about_features")


class HomeOperationalSerializer(serializers.Serializer):
    """Operasyonel bölüm — page field'ları + alt modeller."""

    label = serializers.CharField(source="operational_label")
    title = serializers.CharField(source="operational_title")
    description = serializers.CharField(source="operational_description")
    image = serializers.ImageField(source="operational_image")
    items = HomeOperationalItemSerializer(many=True, source="operational_items")


class HomePageSerializer(serializers.ModelSerializer):
    hero_description = serializers.SerializerMethodField()
    product_categories_description = serializers.SerializerMethodField()
    ticker_words = HomeTickerWordSerializer(many=True, read_only=True)
    brands = HomeBrandSerializer(many=True, read_only=True)
    activities = HomeActivitySerializer(many=True, read_only=True)
    about = HomeAboutSerializer(source="*", read_only=True)
    operational = HomeOperationalSerializer(source="*", read_only=True)
    news = serializers.SerializerMethodField()
    video_file = serializers.SerializerMethodField()
    video_image = serializers.SerializerMethodField()
    hero_image = serializers.SerializerMethodField()
    hero_image_mobile = serializers.SerializerMethodField()
    work_essentials_items = serializers.SerializerMethodField()
    production_insight_items = serializers.SerializerMethodField()
    corporate_workwear_personnel_image = serializers.SerializerMethodField()
    corporate_workwear_promo_image = serializers.SerializerMethodField()
    final_cta = serializers.SerializerMethodField()

    def _localized_value(self, obj, field_name):
        language = getattr(self.context.get("request"), "LANGUAGE_CODE", "tr")
        suffix = "en" if language == "en" else "tr"
        return getattr(obj, f"{field_name}_{suffix}", "") or ""

    def get_hero_description(self, obj):
        return self._localized_value(obj, "hero_description")

    def get_product_categories_description(self, obj):
        return self._localized_value(obj, "product_categories_description")

    class Meta:
        model = HomePage
        fields = [
            # Hero
            "hero_title",
            "hero_subtitle",
            "hero_description",
            "hero_image",
            "hero_image_mobile",
            # Ürün kategorileri bölümü
            "product_categories_eyebrow",
            "product_categories_title",
            "product_categories_description",
            # Work Essentials
            "work_essentials_eyebrow",
            "work_essentials_title",
            "work_essentials_description",
            "work_essentials_cta_text",
            "work_essentials_cta_link",
            "work_essentials_items",
            # Kurumsal İş Giyimi
            "corporate_workwear_eyebrow", "corporate_workwear_title", "corporate_workwear_description",
            "corporate_workwear_personnel_title", "corporate_workwear_personnel_description", "corporate_workwear_personnel_image",
            "corporate_workwear_promo_title", "corporate_workwear_promo_description", "corporate_workwear_promo_image",
            "corporate_workwear_cta_text", "corporate_workwear_cta_link",
            # Üretim Bilgileri
            "production_insights_eyebrow",
            "production_insights_title",
            "production_insights_description",
            "production_insight_items",
            "final_cta",
            # Ticker
            "ticker_words",
            # Markalar
            "brands_title",
            "brands_description",
            "brands",
            # Faaliyetler
            "activities_label",
            "activities_title",
            "activities_description",
            "activities",
            # Hakkımızda
            "about",
            # Operasyonel
            "operational",
            # Video
            "video_title",
            "video_description",
            "video_file",
            "video_image",
            # Haberler
            "news_section_title",
            "news_section_button_text",
            "news",
            # SEO
            "meta_title",
            "meta_description",
        ]

    @extend_schema_field({"type": "array", "items": {"$ref": "#/components/schemas/NewsList"}})
    def get_news(self, obj):
        from apps.news.serializers import NewsListSerializer
        return NewsListSerializer(obj.news, many=True, context=self.context).data

    def get_video_file(self, obj):
        return _absolute_media_url(self.context.get("request"), obj.video_file)

    def get_hero_image(self, obj):
        return _absolute_media_url(self.context.get("request"), obj.hero_image)

    def get_hero_image_mobile(self, obj):
        return _absolute_media_url(self.context.get("request"), obj.hero_image_mobile)

    def get_work_essentials_items(self, obj):
        items = obj.work_essentials_items.filter(is_active=True).order_by("sort_order", "id")
        return WorkEssentialItemSerializer(items, many=True, context=self.context).data

    def get_production_insight_items(self, obj):
        items = obj.production_insight_items.filter(is_active=True).order_by("sort_order", "id")
        return ProductionInsightItemSerializer(items, many=True, context=self.context).data

    def get_corporate_workwear_personnel_image(self, obj):
        return _absolute_media_url(self.context.get("request"), obj.corporate_workwear_personnel_image)

    def get_corporate_workwear_promo_image(self, obj):
        return _absolute_media_url(self.context.get("request"), obj.corporate_workwear_promo_image)

    def get_video_image(self, obj):
        return _absolute_media_url(self.context.get("request"), obj.video_image)

    def get_final_cta(self, obj):
        language = getattr(self.context.get("request"), "LANGUAGE_CODE", "tr")
        suffix = "en" if language == "en" else "tr"
        return {"title": getattr(obj, f"final_cta_title_{suffix}"), "description": getattr(obj, f"final_cta_description_{suffix}"), "text": getattr(obj, f"final_cta_text_{suffix}"), "bottom_label": getattr(obj, f"final_cta_bottom_label_{suffix}"), "link": obj.final_cta_link}
