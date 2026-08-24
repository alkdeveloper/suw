from rest_framework import serializers
from apps.home.serializers import HomeBrandSerializer, _absolute_media_url
from .models import GalleryPage, GalleryCategory, GalleryImage


class GalleryCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryCategory
        fields = ["id", "name", "slug"]


class GalleryImageSerializer(serializers.ModelSerializer):
    category = GalleryCategorySerializer(read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = GalleryImage
        fields = ["id", "title", "image", "category"]

    def get_image(self, obj: GalleryImage):
        return _absolute_media_url(self.context.get("request"), obj.image)


class GalleryPageSerializer(serializers.ModelSerializer):
    categories = GalleryCategorySerializer(many=True, read_only=True)
    brands = HomeBrandSerializer(many=True, read_only=True)
    hero_image = serializers.SerializerMethodField()
    video_image = serializers.SerializerMethodField()
    video_file = serializers.SerializerMethodField()

    class Meta:
        model = GalleryPage
        fields = [
            # Hero
            "hero_title",
            "hero_image",
            "intro_text",
            # Kategoriler
            "categories",
            # Markalar bandı
            "brands",
            # Showcase copy
            "show_more_text",
            "lightbox_previous_aria_label",
            "lightbox_next_aria_label",
            "lightbox_close_aria_label",
            # Video
            "video_title",
            "video_description",
            "video_image",
            "video_file",
            "video_url",
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

    def get_hero_image(self, obj: GalleryPage):
        return _absolute_media_url(self.context.get("request"), obj.hero_image)

    def get_video_image(self, obj: GalleryPage):
        return _absolute_media_url(self.context.get("request"), obj.video_image)

    def get_video_file(self, obj: GalleryPage):
        return _absolute_media_url(self.context.get("request"), obj.video_file)
