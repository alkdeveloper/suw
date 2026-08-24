from rest_framework import serializers
from apps.home.serializers import HomeBrandSerializer
from .models import NewsPage, NewsCategory, News


class NewsCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsCategory
        fields = ["id", "name", "slug"]


class NewsListSerializer(serializers.ModelSerializer):
    category = NewsCategorySerializer(read_only=True)

    class Meta:
        model = News
        fields = ["id", "title", "slug", "category", "date", "summary", "image"]


class NewsNavSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ["id", "title", "slug"]


def _news_cover_as_gallery_item(news: News, request) -> dict:
    """Galeri şeridi API şekli — kapak görseli (global galeri M2M yok)."""
    image_url = None
    if news.image:
        url = news.image.url
        image_url = request.build_absolute_uri(url) if request else url
    return {
        "id": news.id,
        "title": news.title,
        "image": image_url,
        "category": NewsCategorySerializer(news.category).data if news.category else None,
    }


def _news_list_gallery_strip(request):
    """Haberler listesi ve haber detayı slider’ı: aynı kaynak (son 24 kapak, tarih yeniden eskiye)."""
    qs = (
        News.objects.filter(is_active=True)
        .exclude(image="")
        .select_related("category")
        .order_by("-date", "order")[:24]
    )
    return [_news_cover_as_gallery_item(n, request) for n in qs]


class NewsDetailSerializer(serializers.ModelSerializer):
    category = NewsCategorySerializer(read_only=True)
    gallery_images = serializers.SerializerMethodField()
    brands = HomeBrandSerializer(many=True, read_only=True)
    previous_news = NewsNavSerializer(read_only=True, allow_null=True)
    next_news = NewsNavSerializer(read_only=True, allow_null=True)
    related_news = NewsListSerializer(many=True, read_only=True)

    # NewsPage'den inject edilen hero alanları
    page_hero_title = serializers.CharField(read_only=True)
    page_hero_image = serializers.ImageField(read_only=True)

    # NewsPage'den inject edilen CTA alanları
    join_label = serializers.CharField(read_only=True)
    join_title = serializers.CharField(read_only=True)
    join_description = serializers.CharField(read_only=True)
    join_button_text = serializers.CharField(read_only=True)
    join_button_url = serializers.CharField(read_only=True)

    # NewsPage'den inject edilen detay copy
    share_title = serializers.CharField(read_only=True)
    previous_label = serializers.CharField(read_only=True)
    next_label = serializers.CharField(read_only=True)
    related_title = serializers.CharField(read_only=True)
    related_view_all_text = serializers.CharField(read_only=True)
    gallery_title = serializers.CharField(read_only=True)

    class Meta:
        model = News
        fields = [
            "id", "title", "slug", "category", "date",
            "summary", "content", "image", "gallery_title", "gallery_images",
            "previous_news", "next_news", "related_news",
            "brands",
            # NewsPage hero
            "page_hero_title", "page_hero_image",
            # Detay copy
            "share_title", "previous_label", "next_label",
            "related_title", "related_view_all_text",
            # CTA
            "join_label", "join_title", "join_description",
            "join_button_text", "join_button_url",
            # SEO
            "meta_title", "meta_description",
        ]

    def get_gallery_images(self, obj):
        """Liste sayfasıyla aynı şerit (son haber kapakları)."""
        return _news_list_gallery_strip(self.context.get("request"))


class NewsPageSerializer(serializers.ModelSerializer):
    featured = NewsListSerializer(read_only=True, allow_null=True)
    gallery_images = serializers.SerializerMethodField()
    brands = HomeBrandSerializer(many=True, read_only=True)

    class Meta:
        model = NewsPage
        fields = [
            # Hero
            "hero_title", "hero_image",
            # Öne çıkan haber
            "featured",
            "featured_button_text",
            # Liste
            "list_load_more_text",
            # Galeri
            "gallery_title", "gallery_images",
            # Marka logoları
            "brands",
            # Aramıza Katılın CTA
            "join_label", "join_title", "join_description",
            "join_button_text", "join_button_url",
            # SEO
            "meta_title", "meta_description",
        ]

    def get_gallery_images(self, obj):
        """Haberler listesi şeridi: yayında haberlerin kapak görselleri (tarih yeniden eskiye)."""
        return _news_list_gallery_strip(self.context.get("request"))
