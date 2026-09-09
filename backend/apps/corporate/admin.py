from django.contrib import admin
from django.utils.html import format_html
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin
from solo.admin import SingletonModelAdmin
from common.admin import OrderableMixin
from .models import CorporateHistoryItem, CorporatePage, CorporateVideoSettings, WhySuwItem


@admin.register(CorporatePage)
class CorporatePageAdmin(TabbedTranslationAdmin, SingletonModelAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    readonly_fields = ("join_button_url",)

    fieldsets = (
        (
            "1 – Hero",
            {
                "classes": ["tab"],
                "fields": ("hero_image", "hero_text"),
            },
        ),
        (
            "2 – Hakkımızda",
            {
                "classes": ["tab"],
                "fields": ("about_label", "about_description", "about_image"),
            },
        ),
        (
            "3 – Hikayemiz",
            {
                "classes": ["tab"],
                "fields": ("history_label", "history_title"),
            },
        ),
        (
            "4 – Vizyon & Misyon",
            {
                "classes": ["tab"],
                "fields": (
                    "vision_title", "vision_description",
                    "mission_title", "mission_description",
                ),
            },
        ),
        (
            "5 – Markalar",
            {
                "classes": ["tab"],
                "fields": ("brands_title",),
            },
        ),
        (
            "6 – Aramıza Katılın",
            {
                "classes": ["tab"],
                "fields": ("join_label", "join_title", "join_description", "join_button_text", "join_button_url"),
            },
        ),
        (
            "7 – SEO",
            {
                "classes": ["tab"],
                "fields": ("meta_title", "meta_description"),
            },
        ),
    )

    fieldsets = (
        ("Türkçe Hero", {"fields": ("hero_title_tr", "hero_description_tr")}),
        ("İngilizce Hero", {"fields": ("hero_title_en", "hero_description_en")}),
        ("ALK Group — Türkçe", {"fields": ("group_eyebrow_tr", "group_title_tr", "group_description_tr", "group_supporting_label_tr")}),
        ("ALK Group — İngilizce", {"fields": ("group_eyebrow_en", "group_title_en", "group_description_en", "group_supporting_label_en")}),
        ("ALK Group Görselleri", {"fields": ("group_image", "group_image_mobile")}),
        ("Neden SUW — Türkçe", {"fields": ("why_title_tr", "why_description_tr")}),
        ("Neden SUW — İngilizce", {"fields": ("why_title_en", "why_description_en")}),
        ("Final CTA — Türkçe", {"fields": ("final_cta_title_tr", "final_cta_description_tr", "final_cta_text_tr")}),
        ("Final CTA — İngilizce", {"fields": ("final_cta_title_en", "final_cta_description_en", "final_cta_text_en")}),
        ("Final CTA Link", {"fields": ("final_cta_link",)}),
    )
    readonly_fields = ()

    def change_view(self, request, object_id, form_url="", extra_context=None):
        extra_context = extra_context or {}
        extra_context["title"] = "Kurumsal Sayfa"
        extra_context["subtitle"] = None
        return super().change_view(request, object_id, form_url, extra_context)


@admin.register(WhySuwItem)
class WhySuwItemAdmin(ModelAdmin):
    list_display = ("title_tr", "title_en", "sort_order", "is_active")
    list_editable = ("sort_order", "is_active")
    ordering = ("sort_order", "id")
    fieldsets = (("Türkçe İçerik", {"fields": ("title_tr", "description_tr")}), ("İngilizce İçerik", {"fields": ("title_en", "description_en")}), ("Yayın", {"fields": ("sort_order", "is_active")}))


@admin.register(CorporateVideoSettings)
class CorporateVideoSettingsAdmin(SingletonModelAdmin, ModelAdmin):
    fieldsets = (
        ("Türkçe İçerik", {"fields": ("title_tr", "description_tr")}),
        ("İngilizce İçerik", {"fields": ("title_en", "description_en")}),
        ("Video", {"fields": ("video_file", "poster_image", "poster_preview", "is_active")}),
    )
    readonly_fields = ("poster_preview",)

    @admin.display(description="Görsel Önizleme")
    def poster_preview(self, obj):
        if not obj or not obj.poster_image:
            return "—"
        return format_html(
            '<img src="{}" alt="" style="max-width:420px;width:100%;height:auto;border-radius:8px;" />',
            obj.poster_image.url,
        )


@admin.register(CorporateHistoryItem)
class CorporateHistoryItemAdmin(OrderableMixin, ModelAdmin):
    list_display = ("year", "description_tr", "sort_order", "is_active")
    list_editable = ("sort_order", "is_active")
    ordering = ("sort_order", "id")
    fieldsets = (
        ("Kronoloji", {"fields": ("year",)}),
        ("Türkçe İçerik", {"fields": ("description_tr",)}),
        ("İngilizce İçerik", {"fields": ("description_en",)}),
        ("Yayın", {"fields": ("sort_order", "is_active")}),
    )
