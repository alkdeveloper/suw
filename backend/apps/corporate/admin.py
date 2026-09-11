from django import forms
from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html
from unfold.admin import ModelAdmin
from solo.admin import SingletonModelAdmin
from common.admin import OrderableMixin
from .models import CorporateHistoryItem, CorporatePage, CorporateVideoSettings, WhySuwItem


class CorporatePageAdminForm(forms.ModelForm):
    class Meta:
        model = CorporatePage
        fields = "__all__"
        labels = {
            "meta_title_tr": "SEO Başlık TR",
            "meta_description_tr": "SEO Açıklama TR",
            "meta_title_en": "SEO Başlık EN",
            "meta_description_en": "SEO Açıklama EN",
        }


@admin.register(CorporatePage)
class CorporatePageAdmin(SingletonModelAdmin, ModelAdmin):
    form = CorporatePageAdminForm
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
        ("Tarihçe Hero — Türkçe", {"fields": ("history_hero_title_tr", "history_hero_description_tr")}),
        ("History Hero — English", {"fields": ("history_hero_title_en", "history_hero_description_en")}),
        ("Tarihçe Hero Görselleri", {"fields": ("history_hero_image", "history_hero_image_mobile")}),
        ("İlk Section — Türkçe", {"fields": ("group_title_tr", "group_description_tr")}),
        ("First Section — English", {"fields": ("group_title_en", "group_description_en")}),
        ("İlk Section Görseli", {"fields": ("group_image", "group_image_position")}),
        ("Kronoloji", {"fields": ("timeline_title_tr", "timeline_title_en")}),
        ("Hakkımızda CTA — Türkçe", {"fields": ("about_cta_title_tr", "about_cta_description_tr")}),
        ("Hakkımızda CTA — İngilizce", {"fields": ("about_cta_title_en", "about_cta_description_en")}),
        ("SEO", {"fields": (("meta_title_tr", "meta_title_en"), ("meta_description_tr", "meta_description_en"))}),
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
    list_display = ("year", "description_tr", "sort_order", "is_active", "edit_link")
    list_display_links = ("year", "description_tr")
    list_editable = ("sort_order", "is_active")
    ordering = ("sort_order", "id")
    fieldsets = (
        ("Kronoloji", {"fields": ("year",)}),
        ("Türkçe İçerik", {"fields": ("description_tr",)}),
        ("İngilizce İçerik", {"fields": ("description_en",)}),
        ("Yayın", {"fields": ("sort_order", "is_active")}),
    )

    @admin.display(description="Düzenle")
    def edit_link(self, obj):
        url = reverse("admin:corporate_corporatehistoryitem_change", args=(obj.pk,))
        return format_html('<a class="button" href="{}">Düzenle</a>', url)
