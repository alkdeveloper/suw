from rest_framework import serializers

from .models import Product, ProductCategory, ProductGroup, ProductImage, ProductPageSettings


def localized(obj, field, request):
    language = (request.headers.get("Accept-Language", "tr") if request else "tr").lower()
    suffix = "en" if language.startswith("en") else "tr"
    return getattr(obj, f"{field}_{suffix}")


def image_url(obj, field_name, request):
    field = getattr(obj, field_name, None)
    if not field:
        return None
    return request.build_absolute_uri(field.url) if request else field.url


class ProductPageSettingsSerializer(serializers.ModelSerializer):
    eyebrow = serializers.SerializerMethodField()
    title = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    seo_title = serializers.SerializerMethodField()
    seo_description = serializers.SerializerMethodField()
    hero_image = serializers.SerializerMethodField()
    hero_image_mobile = serializers.SerializerMethodField()

    class Meta:
        model = ProductPageSettings
        fields = ["eyebrow", "title", "description", "hero_image", "hero_image_mobile", "seo_title", "seo_description"]

    def _localized(self, obj, field):
        return localized(obj, field, self.context.get("request"))

    def get_eyebrow(self, obj): return self._localized(obj, "eyebrow")
    def get_title(self, obj): return self._localized(obj, "title")
    def get_description(self, obj): return self._localized(obj, "description")
    def get_seo_title(self, obj): return self._localized(obj, "seo_title")
    def get_seo_description(self, obj): return self._localized(obj, "seo_description")
    def get_hero_image(self, obj): return image_url(obj, "hero_image", self.context.get("request"))
    def get_hero_image_mobile(self, obj): return image_url(obj, "hero_image_mobile", self.context.get("request"))


class LocalizedSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()

    def get_name(self, obj):
        return localized(obj, "name", self.context.get("request"))

    def get_image(self, obj):
        field = getattr(obj, "image", None)
        if not field:
            return None
        request = self.context.get("request")
        return request.build_absolute_uri(field.url) if request else field.url


class ProductGroupSerializer(LocalizedSerializer):
    short_description = serializers.SerializerMethodField()
    url = serializers.SerializerMethodField()
    hero_eyebrow = serializers.SerializerMethodField()
    hero_title = serializers.SerializerMethodField()
    hero_description = serializers.SerializerMethodField()
    hero_image = serializers.SerializerMethodField()
    hero_image_mobile = serializers.SerializerMethodField()

    class Meta:
        model = ProductGroup
        fields = ["id", "name", "slug", "image", "short_description", "url", "hero_eyebrow", "hero_title", "hero_description", "hero_image", "hero_image_mobile"]

    def get_short_description(self, obj):
        return localized(obj, "short_description", self.context.get("request"))

    def get_url(self, obj):
        return f"/products/{obj.slug}/"

    def get_hero_eyebrow(self, obj): return localized(obj, "hero_eyebrow", self.context.get("request"))
    def get_hero_title(self, obj): return localized(obj, "hero_title", self.context.get("request"))
    def get_hero_description(self, obj): return localized(obj, "hero_description", self.context.get("request"))
    def get_hero_image(self, obj): return image_url(obj, "hero_image", self.context.get("request"))
    def get_hero_image_mobile(self, obj): return image_url(obj, "hero_image_mobile", self.context.get("request"))


class ProductCategorySerializer(LocalizedSerializer):
    description = serializers.SerializerMethodField()
    header_image = serializers.SerializerMethodField()
    seo_title = serializers.SerializerMethodField()
    seo_description = serializers.SerializerMethodField()
    groups = serializers.SlugRelatedField(many=True, read_only=True, slug_field="slug")

    class Meta:
        model = ProductCategory
        fields = ["id", "name", "slug", "image", "description", "header_image", "seo_title", "seo_description", "groups"]

    def get_description(self, obj):
        return localized(obj, "description", self.context.get("request"))

    def get_header_image(self, obj):
        return image_url(obj, "header_image", self.context.get("request"))

    def get_seo_title(self, obj):
        return localized(obj, "seo_title", self.context.get("request"))

    def get_seo_description(self, obj):
        return localized(obj, "seo_description", self.context.get("request"))


class ProductImageSerializer(serializers.ModelSerializer):
    alt = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()

    class Meta:
        model = ProductImage
        fields = ["image", "alt", "sort_order"]

    def get_alt(self, obj):
        return localized(obj, "alt", self.context.get("request"))

    def get_image(self, obj):
        return image_url(obj, "image", self.context.get("request"))


class ProductSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    short_description = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    category = ProductCategorySerializer(read_only=True)
    groups = ProductGroupSerializer(many=True, read_only=True)
    images = ProductImageSerializer(many=True, read_only=True)
    main_image = serializers.SerializerMethodField()
    materials = serializers.SerializerMethodField()
    features = serializers.SerializerMethodField()
    colors = serializers.SerializerMethodField()
    sizes = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ["id", "name", "slug", "product_code", "category", "groups", "short_description", "description", "main_image", "materials", "features", "colors", "sizes", "images", "is_featured"]

    def get_name(self, obj):
        return localized(obj, "name", self.context.get("request"))

    def get_short_description(self, obj):
        return localized(obj, "short_description", self.context.get("request"))

    def get_description(self, obj):
        return localized(obj, "description", self.context.get("request"))

    def get_main_image(self, obj): return image_url(obj, "main_image", self.context.get("request"))
    def get_materials(self, obj): return localized(obj, "materials", self.context.get("request"))
    def get_features(self, obj): return localized(obj, "features", self.context.get("request"))
    def get_colors(self, obj): return localized(obj, "colors", self.context.get("request"))
    def get_sizes(self, obj): return localized(obj, "sizes", self.context.get("request"))
