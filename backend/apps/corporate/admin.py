from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin
from solo.admin import SingletonModelAdmin
from common.admin import OrderableMixin
from .models import CorporatePage, CorporateHistoryItem


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

    def change_view(self, request, object_id, form_url="", extra_context=None):
        extra_context = extra_context or {}
        extra_context["title"] = "Kurumsal Sayfa"
        extra_context["subtitle"] = None
        return super().change_view(request, object_id, form_url, extra_context)


@admin.register(CorporateHistoryItem)
class CorporateHistoryItemAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["year", "description", "move_up_down_links"]
    ordering = ["order"]

    fieldsets = (
        (
            "Tarihçe Bilgileri",
            {
                "classes": ["tab"],
                "fields": ("year", "description"),
            },
        ),
    )
