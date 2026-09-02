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
    TechnicalPerformanceItem,
    HomeProcessStep,
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


class TechnicalPerformanceItemSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()

    class Meta:
        model = TechnicalPerformanceItem
        fields = ("id", "title", "description", "sort_order")

    def _is_en(self):
        return getattr(self.context.get("request"), "LANGUAGE_CODE", "tr") == "en"

    def get_title(self, obj):
        return obj.title_en if self._is_en() else obj.title_tr

    def get_description(self, obj):
        return obj.description_en if self._is_en() else obj.description_tr


class HomeProcessStepSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()

    class Meta:
        model = HomeProcessStep
        fields = ("id", "title", "description", "sort_order")

    def _is_en(self):
        return getattr(self.context.get("request"), "LANGUAGE_CODE", "tr") == "en"

    def get_title(self, obj):
        return obj.title_en if self._is_en() else obj.title_tr

    def get_description(self, obj):
        return obj.description_en if self._is_en() else obj.description_tr


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
    technical_performance_image = serializers.SerializerMethodField()
    technical_performance_items = serializers.SerializerMethodField()
    corporate_workwear_personnel_image = serializers.SerializerMethodField()
    corporate_workwear_promo_image = serializers.SerializerMethodField()
    process_steps = serializers.SerializerMethodField()

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
            # Teknik Performans
            "technical_performance_eyebrow",
            "technical_performance_title",
            "technical_performance_description",
            "technical_performance_image",
            "technical_performance_cta_text",
            "technical_performance_cta_link",
            "technical_performance_items",
            # Kurumsal İş Giyimi
            "corporate_workwear_eyebrow", "corporate_workwear_title", "corporate_workwear_description",
            "corporate_workwear_personnel_title", "corporate_workwear_personnel_description", "corporate_workwear_personnel_image",
            "corporate_workwear_promo_title", "corporate_workwear_promo_description", "corporate_workwear_promo_image",
            "corporate_workwear_cta_text", "corporate_workwear_cta_link",
            # Fikirden Teslimata
            "process_eyebrow", "process_title", "process_description", "process_steps",
            # Üretim Bilgileri
            "production_insights_eyebrow",
            "production_insights_title",
            "production_insights_description",
            "production_insight_items",
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

    def get_technical_performance_image(self, obj):
        return _absolute_media_url(self.context.get("request"), obj.technical_performance_image)

    def get_technical_performance_items(self, obj):
        items = obj.technical_performance_items.filter(is_active=True).order_by("sort_order", "id")
        return TechnicalPerformanceItemSerializer(items, many=True, context=self.context).data

    def get_corporate_workwear_personnel_image(self, obj):
        return _absolute_media_url(self.context.get("request"), obj.corporate_workwear_personnel_image)

    def get_corporate_workwear_promo_image(self, obj):
        return _absolute_media_url(self.context.get("request"), obj.corporate_workwear_promo_image)

    def get_process_steps(self, obj):
        items = obj.process_steps.filter(is_active=True).order_by("sort_order", "id")
        return HomeProcessStepSerializer(items, many=True, context=self.context).data

    def get_video_image(self, obj):
        return _absolute_media_url(self.context.get("request"), obj.video_image)
