from rest_framework import serializers

from .models import ProjectSector, ProjectsPageSettings


def localized(obj, field, request):
    language = (request.headers.get("Accept-Language", "tr") if request else "tr").lower()
    return getattr(obj, f"{field}_{'en' if language.startswith('en') else 'tr'}")


def image_url(obj, field_name, request):
    field = getattr(obj, field_name, None)
    return request.build_absolute_uri(field.url) if field and request else (field.url if field else None)


class ProjectSectorSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    headline = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    product_groups = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    image_mobile = serializers.SerializerMethodField()

    class Meta:
        model = ProjectSector
        fields = ["id", "title", "headline", "description", "product_groups", "image", "image_mobile"]

    def get_title(self, obj): return localized(obj, "title", self.context.get("request"))
    def get_headline(self, obj): return localized(obj, "headline", self.context.get("request"))
    def get_description(self, obj): return localized(obj, "description", self.context.get("request"))
    def get_product_groups(self, obj):
        value = localized(obj, "product_groups", self.context.get("request"))
        return [item.strip() for item in value.replace("\\n", "\n").splitlines() if item.strip()]
    def get_image(self, obj): return image_url(obj, "image", self.context.get("request"))
    def get_image_mobile(self, obj): return image_url(obj, "image_mobile", self.context.get("request"))


class ProjectsPageSerializer(serializers.ModelSerializer):
    hero_eyebrow = serializers.SerializerMethodField()
    hero_title = serializers.SerializerMethodField()
    hero_description = serializers.SerializerMethodField()
    cta_eyebrow = serializers.SerializerMethodField()
    cta_title = serializers.SerializerMethodField()
    cta_description = serializers.SerializerMethodField()
    cta_text = serializers.SerializerMethodField()
    sectors = serializers.SerializerMethodField()

    class Meta:
        model = ProjectsPageSettings
        fields = ["hero_eyebrow", "hero_title", "hero_description", "cta_eyebrow", "cta_title", "cta_description", "cta_text", "sectors"]

    def _localized(self, obj, field): return localized(obj, field, self.context.get("request"))
    def get_hero_eyebrow(self, obj): return self._localized(obj, "hero_eyebrow")
    def get_hero_title(self, obj): return self._localized(obj, "hero_title")
    def get_hero_description(self, obj): return self._localized(obj, "hero_description")
    def get_cta_eyebrow(self, obj): return self._localized(obj, "cta_eyebrow")
    def get_cta_title(self, obj): return self._localized(obj, "cta_title")
    def get_cta_description(self, obj): return self._localized(obj, "cta_description")
    def get_cta_text(self, obj): return self._localized(obj, "cta_text")
    def get_sectors(self, obj):
        queryset = ProjectSector.objects.filter(is_active=True).order_by("sort_order", "id")
        return ProjectSectorSerializer(queryset, many=True, context=self.context).data
