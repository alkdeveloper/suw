from django import forms
from django.contrib import admin
from django.utils.html import format_html
from solo.admin import SingletonModelAdmin
from unfold.admin import ModelAdmin, TabularInline

from .models import Product, ProductCategory, ProductGroup, ProductImage, ProductPageSettings


def preview(field):
    return format_html('<img src="{}" style="width:72px;height:48px;object-fit:cover;border-radius:4px" />', field.url) if field else "—"


class ProductImageInline(TabularInline):
    model = ProductImage
    extra = 0
    fields = ["image", "image_preview", "alt_tr", "alt_en", "sort_order"]
    readonly_fields = ["image_preview"]

    def image_preview(self, obj):
        return preview(obj.image) if obj.pk else "—"


class ProductAdminForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = "__all__"
        labels = {"sizes_tr": "Bedenler TR", "sizes_en": "Bedenler EN"}
        widgets = {
            "sizes_tr": forms.Textarea(attrs={"rows": 7, "placeholder": "XS\nS\nM\nL\nXL\nXXL\n3XL"}),
            "sizes_en": forms.Textarea(attrs={"rows": 7, "placeholder": "XS\nS\nM\nL\nXL\nXXL\n3XL"}),
        }


@admin.register(ProductPageSettings)
class ProductPageSettingsAdmin(SingletonModelAdmin, ModelAdmin):
    fieldsets = (
        ("Türkçe İçerik", {"fields": ("eyebrow_tr", "title_tr", "description_tr")} ),
        ("İngilizce İçerik", {"fields": ("eyebrow_en", "title_en", "description_en")} ),
        ("Hero Görselleri", {"fields": ("hero_image", "hero_image_preview", "hero_image_mobile", "hero_image_mobile_preview")} ),
        ("Türkçe SEO", {"fields": ("seo_title_tr", "seo_description_tr")} ),
        ("İngilizce SEO", {"fields": ("seo_title_en", "seo_description_en")} ),
    )
    readonly_fields = ["hero_image_preview", "hero_image_mobile_preview"]

    def hero_image_preview(self, obj): return preview(obj.hero_image)
    def hero_image_mobile_preview(self, obj): return preview(obj.hero_image_mobile)


@admin.register(ProductGroup)
class ProductGroupAdmin(ModelAdmin):
    list_display = ["image_preview", "name_tr", "name_en", "slug", "is_active", "show_on_home", "sort_order"]
    list_editable = ["is_active", "show_on_home", "sort_order"]
    search_fields = ["name_tr", "name_en", "slug"]
    prepopulated_fields = {"slug": ("name_tr",)}
    ordering = ["sort_order"]
    readonly_fields = ["image_preview", "hero_image_preview", "hero_image_mobile_preview"]
    fieldsets = (
        ("Temel Bilgiler", {"fields": ("name_tr", "name_en", "slug", "short_description_tr", "short_description_en")} ),
        ("Kart Görseli", {"fields": ("image", "image_preview")} ),
        ("Türkçe Hero", {"fields": ("hero_eyebrow_tr", "hero_title_tr", "hero_description_tr")} ),
        ("İngilizce Hero", {"fields": ("hero_eyebrow_en", "hero_title_en", "hero_description_en")} ),
        ("Hero Görselleri", {"fields": ("hero_image", "hero_image_preview", "hero_image_mobile", "hero_image_mobile_preview")} ),
        ("Yayın", {"fields": ("sort_order", "is_active", "show_on_home")} ),
    )

    def image_preview(self, obj):
        return preview(obj.image)

    def hero_image_preview(self, obj): return preview(obj.hero_image)
    def hero_image_mobile_preview(self, obj): return preview(obj.hero_image_mobile)


@admin.register(ProductCategory)
class ProductCategoryAdmin(ModelAdmin):
    list_display = ["image_preview", "name_tr", "name_en", "group_names", "is_active", "sort_order"]
    list_editable = ["is_active", "sort_order"]
    list_filter = ["groups", "is_active"]
    search_fields = ["name_tr", "name_en", "slug"]
    filter_horizontal = ["groups"]
    prepopulated_fields = {"slug": ("name_tr",)}
    ordering = ["sort_order"]
    readonly_fields = ["image_preview", "header_image_preview"]
    fieldsets = (
        ("Temel Bilgiler", {"fields": (("name_tr", "name_en"), "slug", "groups", "sort_order", "is_active")} ),
        ("Kart", {"fields": ("image", "image_preview")} ),
        ("Kategori Sayfası", {"fields": (("description_tr", "description_en"), "header_image", "header_image_preview")} ),
        ("SEO", {"fields": (("seo_title_tr", "seo_title_en"), ("seo_description_tr", "seo_description_en"))} ),
    )

    def image_preview(self, obj):
        return preview(obj.image)

    def header_image_preview(self, obj):
        return preview(obj.header_image)

    def group_names(self, obj):
        return ", ".join(obj.groups.values_list("name_tr", flat=True)) or "—"


@admin.register(Product)
class ProductAdmin(ModelAdmin):
    form = ProductAdminForm
    inlines = [ProductImageInline]
    list_display = ["image_preview", "product_code", "name_tr", "category", "group_names", "is_featured", "is_active", "sort_order"]
    list_editable = ["is_featured", "is_active", "sort_order"]
    list_filter = ["category", "groups", "is_active", "is_featured"]
    search_fields = ["name_tr", "name_en", "product_code"]
    filter_horizontal = ["groups"]
    prepopulated_fields = {"slug": ("name_tr",)}
    ordering = ["sort_order"]
    readonly_fields = ["image_preview"]
    fieldsets = (
        ("Temel Bilgiler", {"fields": ("product_code", "slug", "category", "groups")} ),
        ("Türkçe İçerik", {"fields": ("name_tr", "short_description_tr", "description_tr", "materials_tr", "features_tr", "colors_tr", "sizes_tr")} ),
        ("İngilizce İçerik", {"fields": ("name_en", "short_description_en", "description_en", "materials_en", "features_en", "colors_en", "sizes_en")} ),
        ("Ana Görsel", {"fields": ("main_image", "image_preview")} ),
        ("Yayın", {"fields": ("sort_order", "is_active", "is_featured")} ),
    )

    def image_preview(self, obj):
        return preview(obj.main_image)

    def group_names(self, obj):
        return ", ".join(obj.groups.values_list("name_tr", flat=True)) or "—"
