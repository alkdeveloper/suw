from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin
from ordered_model.admin import OrderedInlineModelAdminMixin, OrderedTabularInline
from unfold.admin import ModelAdmin, TabularInline
from .models import LegalPage, LegalSection


class LegalSectionInline(OrderedTabularInline, TabularInline):
    model = LegalSection
    extra = 1
    fields = ["heading", "heading_tr", "heading_en", "body", "body_tr", "body_en", "move_up_down_links"]
    readonly_fields = ["move_up_down_links"]
    ordering = ["order"]


@admin.register(LegalPage)
class LegalPageAdmin(OrderedInlineModelAdminMixin, TabbedTranslationAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["slug", "title", "last_updated"]
    search_fields = ["slug", "title"]
    ordering = ["slug"]
    prepopulated_fields = {"slug": ("title",)}
    inlines = [LegalSectionInline]

    fieldsets = (
        (
            "1 – İçerik",
            {
                "classes": ["tab"],
                "fields": (
                    ("title", "slug"),
                    "subtitle",
                    "intro",
                    ("last_updated", "last_updated_label"),
                ),
            },
        ),
        (
            "2 – Görseller",
            {
                "classes": ["tab"],
                "fields": (
                    "hero_image",
                    "hero_glow_image",
                ),
            },
        ),
        (
            "3 – SEO",
            {
                "classes": ["tab"],
                "fields": ("meta_title", "meta_description"),
            },
        ),
    )
