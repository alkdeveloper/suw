from django.contrib import admin
from django.utils.html import format_html
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin
from unfold.decorators import display
from solo.admin import SingletonModelAdmin
from common.admin import OrderableMixin
from .models import (
    HomePage,
    HomeTickerWord,
    HomeBrand,
    HomeActivity,
    HomeAboutFeature,
    HomeOperationalItem,
)


# Ana Sayfa (Singleton)
@admin.register(HomePage)
class HomePageAdmin(TabbedTranslationAdmin, SingletonModelAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    readonly_fields = ["about_cta_target_hint"]

    fieldsets = (
        (
            "1 – Hero",
            {
                "classes": ["tab"],
                "fields": (
                    ("hero_title", "hero_subtitle"),
                    "hero_description",
                    "hero_image",
                ),
            },
        ),
        (
            "2 – Markalar",
            {
                "classes": ["tab"],
                "fields": ("brands_title", "brands_description"),
            },
        ),
        (
            "3 – Faaliyetler",
            {
                "classes": ["tab"],
                "fields": (
                    "activities_label",
                    ("activities_title", "activities_description"),
                ),
            },
        ),
        (
            "4 – Hakkımızda",
            {
                "classes": ["tab"],
                "fields": (
                    ("about_label", "about_title"),
                    "about_subtitle",
                    "about_short_description",
                    "about_long_description",
                    "about_background_image",
                    "about_cta_target_hint",
                    "about_cta_button_text",
                ),
            },
        ),
        (
            "5 – Video",
            {
                "classes": ["tab"],
                "fields": (
                    ("video_title", "video_file"),
                    "video_description",
                    "video_image",
                ),
            },
        ),
        (
            "6 – Haberler",
            {
                "classes": ["tab"],
                "fields": ("news_section_title", "news_section_button_text", "news_count"),
            },
        ),
        (
            "7 – Operasyonel",
            {
                "classes": ["tab"],
                "fields": (
                    ("operational_label", "operational_title"),
                    "operational_description",
                    "operational_image",
                ),
            },
        ),
        (
            "8 – SEO",
            {
                "classes": ["tab"],
                "fields": ("meta_title", "meta_description"),
            },
        ),
    )

    @display(description="Buton yönlendirmesi (sabit)")
    def about_cta_target_hint(self, obj=None):
        return format_html(
            "<code>/corporate</code> &nbsp;—&nbsp; Kurumsal sayfa. Dil öneki (tr/en) sitede otomatik eklenir."
        )

    def change_view(self, request, object_id, form_url="", extra_context=None):
        extra_context = extra_context or {}
        extra_context["title"] = "Ana Sayfa"
        extra_context["subtitle"] = None
        return super().change_view(request, object_id, form_url, extra_context)


# Ticker Kelimeler
@admin.register(HomeTickerWord)
class HomeTickerWordAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
    list_display = ["text", "move_up_down_links"]
    ordering = ["order"]
    search_fields = ["text"]


# Markalar
@admin.register(HomeBrand)
class HomeBrandAdmin(OrderableMixin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["name", "show_logo", "is_active", "move_up_down_links"]
    list_editable = ["is_active"]
    list_filter = ["is_active"]
    search_fields = ["name"]
    ordering = ["order"]

    fieldsets = (
        (
            "Marka Bilgileri",
            {
                "classes": ["tab"],
                "fields": (
                    "name",
                    "image",
                    "is_active",
                ),
            },
        ),
    )

    @display(description="Logo")
    def show_logo(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="height:32px;object-fit:contain;border-radius:4px;" />',
                obj.image.url,
            )
        return "—"


# Faaliyetler
@admin.register(HomeActivity)
class HomeActivityAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["title", "show_image", "is_active", "move_up_down_links"]
    list_editable = ["is_active"]
    list_filter = ["is_active"]
    search_fields = ["title"]
    ordering = ["order"]

    fieldsets = (
        (
            "Faaliyet Bilgileri",
            {
                "classes": ["tab"],
                "fields": (
                    "title",
                    "image",
                    "is_active",
                ),
            },
        ),
    )

    @display(description="Görsel")
    def show_image(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="height:40px;width:64px;object-fit:cover;border-radius:4px;" />',
                obj.image.url,
            )
        return "—"


# Hakkımızda Özellikler
@admin.register(HomeAboutFeature)
class HomeAboutFeatureAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["key", "value", "move_up_down_links"]
    search_fields = ["key", "value"]
    ordering = ["order"]

    fieldsets = (
        (
            "Özellik",
            {
                "classes": ["tab"],
                "fields": (
                    ("key", "value"),
                ),
            },
        ),
    )


# Operasyonel Öğeler
@admin.register(HomeOperationalItem)
class HomeOperationalItemAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["title", "icon", "external_link_enabled", "move_up_down_links"]
    list_filter = ["external_link_enabled"]
    search_fields = ["title"]
    ordering = ["order"]

    fieldsets = (
        (
            "Öğe Bilgileri",
            {
                "classes": ["tab"],
                "fields": (
                    ("title", "icon"),
                    "description",
                    "external_link_enabled",
                    "external_url",
                ),
            },
        ),
    )



