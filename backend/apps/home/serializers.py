from rest_framework import serializers
from drf_spectacular.utils import extend_schema_field
from .models import (
    HomePage,
    HomeTickerWord,
    HomeBrand,
    HomeActivity,
    HomeAboutFeature,
    HomeOperationalItem,
)


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

    class Meta:
        model = HomePage
        fields = [
            # Hero
            "hero_title",
            "hero_subtitle",
            "hero_description",
            "hero_image",
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

    def get_video_image(self, obj):
        return _absolute_media_url(self.context.get("request"), obj.video_image)
