from django.contrib import admin
from django.utils.html import format_html
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin
from unfold.decorators import display
from solo.admin import SingletonModelAdmin
from common.admin import OrderableMixin
from .models import GalleryPage, GalleryCategory, GalleryImage


# Galeri Sayfa Ayarları (Singleton)
@admin.register(GalleryPage)
class GalleryPageAdmin(TabbedTranslationAdmin, SingletonModelAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    readonly_fields = ("join_button_url",)

    fieldsets = (
        (
            "1 – Hero",
            {
                "classes": ["tab"],
                "fields": ("hero_title", "hero_image", "intro_text"),
            },
        ),
        (
            "2 – Galeri Kopyası",
            {
                "classes": ["tab"],
                "fields": (
                    "show_more_text",
                    ("lightbox_previous_aria_label", "lightbox_next_aria_label", "lightbox_close_aria_label"),
                ),
            },
        ),
        (
            "3 – Video",
            {
                "classes": ["tab"],
                "fields": (
                    "video_title",
                    "video_description",
                    "video_image",
                    "video_file",
                    "video_url",
                ),
            },
        ),
        (
            "4 – Aramıza Katılın CTA",
            {
                "classes": ["tab"],
                "fields": (
                    "join_label",
                    "join_title",
                    "join_description",
                    ("join_button_text", "join_button_url"),
                ),
            },
        ),
        (
            "5 – SEO",
            {
                "classes": ["tab"],
                "fields": ("meta_title", "meta_description"),
            },
        ),
    )

    def change_view(self, request, object_id, form_url="", extra_context=None):
        extra_context = extra_context or {}
        extra_context["title"] = "Galeri Sayfası"
        extra_context["subtitle"] = None
        return super().change_view(request, object_id, form_url, extra_context)


# Galeri Kategorileri
@admin.register(GalleryCategory)
class GalleryCategoryAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["name", "slug", "move_up_down_links"]
    search_fields = ["name"]
    ordering = ["order"]
    prepopulated_fields = {"slug": ("name",)}

    fieldsets = (
        (
            "Kategori Bilgileri",
            {
                "classes": ["tab"],
                "fields": (
                    ("name", "slug"),
                ),
            },
        ),
    )


# Galeri Görselleri
@admin.register(GalleryImage)
class GalleryImageAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["show_image", "title", "category", "is_active", "move_up_down_links"]
    list_editable = ["is_active"]
    list_filter = ["is_active", "category"]
    search_fields = ["title"]
    ordering = ["order"]

    fieldsets = (
        (
            "1 – Görsel",
            {
                "classes": ["tab"],
                "fields": (
                    "title",
                    "image",
                    "category",
                ),
            },
        ),
        (
            "2 – Durum",
            {
                "classes": ["tab"],
                "fields": (
                    "is_active",
                ),
            },
        ),
    )

    @display(description="Önizleme")
    def show_image(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="height:48px;width:80px;object-fit:cover;border-radius:6px;" />',
                obj.image.url,
            )
        return "—"

