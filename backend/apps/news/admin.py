from django.contrib import admin
from django.utils.html import format_html
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin
from unfold.decorators import display
from solo.admin import SingletonModelAdmin
from common.admin import OrderableMixin
from .models import NewsPage, NewsCategory, News


# Haberler Sayfa Ayarları
@admin.register(NewsPage)
class NewsPageAdmin(TabbedTranslationAdmin, SingletonModelAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    readonly_fields = ("join_button_url",)

    fieldsets = (
        (
            "1 – Hero",
            {
                "classes": ["tab"],
                "fields": ("hero_title", "hero_image"),
            },
        ),
        (
            "2 – Liste & Öne Çıkan Kopyası",
            {
                "classes": ["tab"],
                "fields": (
                    "featured_button_text",
                    "list_load_more_text",
                ),
            },
        ),
        (
            "3 – Detay Kopyası",
            {
                "classes": ["tab"],
                "fields": (
                    "share_title",
                    ("previous_label", "next_label"),
                    "related_title",
                    "related_view_all_text",
                ),
            },
        ),
        (
            "4 – Galeri",
            {
                "classes": ["tab"],
                "fields": ("gallery_title",),
                "description": "Şerit görselleri API’de yayında haberlerin kapak görsellerinden otomatik oluşturulur.",
            },
        ),
        (
            "5 – Aramıza Katılın",
            {
                "classes": ["tab"],
                "fields": (
                    ("join_label", "join_title"),
                    "join_description",
                    ("join_button_text", "join_button_url"),
                ),
            },
        ),
        (
            "6 – SEO",
            {
                "classes": ["tab"],
                "fields": ("meta_title", "meta_description"),
            },
        ),
    )

    def change_view(self, request, object_id, form_url="", extra_context=None):
        extra_context = extra_context or {}
        extra_context["title"] = "Haberler Sayfası"
        extra_context["subtitle"] = None
        return super().change_view(request, object_id, form_url, extra_context)


# Haber Kategorileri
@admin.register(NewsCategory)
class NewsCategoryAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
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


# Haberler
@admin.register(News)
class NewsAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["title", "show_image", "category", "date", "show_featured", "is_active", "move_up_down_links"]
    list_editable = ["is_active"]
    list_filter = ["is_active", "is_featured", "category", "date"]
    search_fields = ["title", "summary"]
    ordering = ["-date", "order"]
    date_hierarchy = "date"
    prepopulated_fields = {"slug": ("title",)}

    fieldsets = (
        (
            "1 – İçerik",
            {
                "classes": ["tab"],
                "fields": (
                    ("title", "slug"),
                    ("category", "date"),
                    "summary",
                    "content",
                ),
            },
        ),
        (
            "2 – Görseller",
            {
                "classes": ["tab"],
                "fields": ("image",),
                "description": "Haber listesi / detay şeridinde bu kapak görseli kullanılır.",
            },
        ),
        (
            "3 – Durum",
            {
                "classes": ["tab"],
                "fields": (
                    ("is_featured", "is_active"),
                ),
            },
        ),
        (
            "4 – SEO",
            {
                "classes": ["tab"],
                "fields": ("meta_title", "meta_description"),
            },
        ),
    )

    @display(description="Görsel")
    def show_image(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="height:40px;width:72px;object-fit:cover;border-radius:4px;" />',
                obj.image.url,
            )
        return "—"

    @display(description="Öne Çıkan", label={"Evet": "success", "Hayır": "info"})
    def show_featured(self, obj):
        return "Evet" if obj.is_featured else "Hayır"


