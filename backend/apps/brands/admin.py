from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin
from unfold.decorators import display
from solo.admin import SingletonModelAdmin
from common.admin import OrderableMixin

from .models import (
    BrandsPage,
    CompaniesPage,
    Brand,
    GroupCompany,
    BrandMilestone,
    GlobalOperationLocation,
    BrandsOperationLocation,
    CompaniesOperationLocation,
    AkalPage,
    AlkanPage,
    AkalGmbhPage,
    SuwPage,
    CompanyDetailPage,
)


# =============================================================================
# Markalar Sayfa Ayarları (Singleton)
# =============================================================================
@admin.register(BrandsPage)
class BrandsPageAdmin(TabbedTranslationAdmin, SingletonModelAdmin, ModelAdmin):
    change_form_show_cancel_button = True

    fieldsets = (
        ("1 – Hero", {
            "classes": ["tab"],
            "fields": (
                ("hero_title", "hero_subtitle"),
                "video_file", "video_image",
            ),
        }),
        ("2 – Giriş", {
            "classes": ["tab"],
            "fields": ("intro_label", "intro_text"),
        }),
        ("3 – Markalar & Ticker", {
            "classes": ["tab"],
            "fields": ("ticker_description",),
        }),
        ("4 – Grup Şirketleri", {
            "classes": ["tab"],
            "fields": ("companies_title", "companies_description"),
        }),
        ("5 – Kronolojik Zaman Çizelgesi", {
            "classes": ["tab"],
            "fields": (
                "use_custom_timeline",
                "milestones_title",
                ("milestones_button_text", "milestones_button_url"),
                "milestones_year_suffix",
            ),
        }),
        ("6 – Global Operasyon", {
            "classes": ["tab"],
            "fields": ("global_title", "global_description", "global_map_image", "countries_text"),
        }),
        ("7 – SEO", {
            "classes": ["tab"],
            "fields": ("meta_title", "meta_description"),
        }),
    )


# =============================================================================
# Şirketler Sayfa Ayarları (Singleton)
# =============================================================================
@admin.register(CompaniesPage)
class CompaniesPageAdmin(TabbedTranslationAdmin, SingletonModelAdmin, ModelAdmin):
    change_form_show_cancel_button = True

    fieldsets = (
        ("1 – Hero", {
            "classes": ["tab"],
            "fields": (
                "companies_title",
                "video_file", "video_image",
            ),
        }),
        ("2 – Giriş", {
            "classes": ["tab"],
            "fields": ("intro_label", "intro_text"),
        }),
        ("3 – Ticker", {
            "classes": ["tab"],
            "fields": ("ticker_description",),
        }),
        ("4 – Global Operasyon", {
            "classes": ["tab"],
            "fields": ("global_title", "global_description", "global_map_image", "countries_text"),
        }),
        ("6 – SEO", {
            "classes": ["tab"],
            "fields": ("meta_title", "meta_description"),
        }),
    )


# =============================================================================
# Tüketici markaları (external link)
# =============================================================================
@admin.register(Brand)
class BrandAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["name", "show_logo", "is_active", "move_up_down_links"]
    list_editable = ["is_active"]
    list_filter = ["is_active"]
    search_fields = ["name"]
    ordering = ["order"]
    prepopulated_fields = {"slug": ("name",)}

    fieldsets = (
        ("1 – İçerik", {
            "classes": ["tab"],
            "fields": (
                ("name", "slug"),
                "subtitle",
                "description",
                "show_external_link",
                ("url", "cta_label"),
            ),
        }),
        ("2 – Görseller & Durum", {
            "classes": ["tab"],
            "fields": ("logo", "card_image", "is_active"),
        }),
        ("3 – SEO", {
            "classes": ["tab"],
            "fields": ("meta_title", "meta_description"),
        }),
    )

    @display(description="Logo")
    def show_logo(self, obj):
        if obj.logo:
            return format_html(
                '<img src="{}" style="height:32px;object-fit:contain;border-radius:4px;" />',
                obj.logo.url,
            )
        return "—"


# =============================================================================
# Grup Şirketleri
# =============================================================================
@admin.register(GroupCompany)
class GroupCompanyAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["name", "show_logo", "detail_key", "founded_year", "is_active", "show_detail_page", "move_up_down_links"]
    list_editable = ["is_active"]
    list_filter = ["is_active", "detail_key"]
    search_fields = ["name"]
    ordering = ["order"]
    prepopulated_fields = {"slug": ("name",)}

    fieldsets = (
        ("1 – İçerik", {
            "classes": ["tab"],
            "fields": (
                ("name", "slug"),
                "description",
                "founded_year",
                "detail_key",
            ),
        }),
        ("2 – Görsel & Durum", {
            "classes": ["tab"],
            "fields": ("logo", "is_active"),
        }),
    )

    @display(description="Logo")
    def show_logo(self, obj):
        if obj.logo:
            return format_html(
                '<img src="{}" style="height:32px;object-fit:contain;border-radius:4px;" />',
                obj.logo.url,
            )
        return "—"

    @display(description="Detay Sayfası")
    def show_detail_page(self, obj):
        try:
            dp = obj.detail_page
            url = reverse("admin:brands_companydetailpage_change", args=[dp.pk])
            label = "Aktif" if dp.is_active else "Pasif"
            return format_html('<a href="{}">{}</a>', url, label)
        except CompanyDetailPage.DoesNotExist:
            return "—"


# =============================================================================
# Tarihçe
# =============================================================================
@admin.register(BrandMilestone)
class BrandMilestoneAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["year", "description", "move_up_down_links"]
    search_fields = ["year", "description"]
    ordering = ["order"]

    fieldsets = (
        ("Tarihçe Öğesi", {"classes": ["tab"], "fields": ("year", "description")}),
    )


# =============================================================================
# Global Operasyon Lokasyonları
# =============================================================================
@admin.register(GlobalOperationLocation)
class GlobalOperationLocationAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["country_name", "show_page_scope", "latitude", "longitude", "move_up_down_links"]
    list_filter = ["page_scope"]
    search_fields = ["country_name"]
    ordering = ["page_scope", "order"]

    fieldsets = (
        ("Lokasyon Bilgileri", {
            "classes": ["tab"],
            "fields": ("page_scope", "country_name", ("latitude", "longitude")),
        }),
    )

    @display(description="Sayfa", label={"Markalar Sayfası": "info", "Şirketler Sayfası": "warning"})
    def show_page_scope(self, obj):
        return obj.get_page_scope_display()


class _ScopedOperationLocationAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
    """Belirli bir page_scope'a kilitli operasyon lokasyonu admin tabanı."""

    change_form_show_cancel_button = True
    list_display = ["country_name", "latitude", "longitude", "move_up_down_links"]
    search_fields = ["country_name"]
    ordering = ["order"]

    # Subclass'lar bu değeri ayarlar.
    _scope: str = ""

    fieldsets = (
        ("Lokasyon Bilgileri", {
            "classes": ["tab"],
            "fields": ("country_name", ("latitude", "longitude")),
        }),
    )

    def get_queryset(self, request):
        return super().get_queryset(request).filter(page_scope=self._scope)

    def save_model(self, request, obj, form, change):
        obj.page_scope = self._scope
        super().save_model(request, obj, form, change)


@admin.register(BrandsOperationLocation)
class BrandsOperationLocationAdmin(_ScopedOperationLocationAdmin):
    _scope = GlobalOperationLocation.PAGE_SCOPE_BRANDS


@admin.register(CompaniesOperationLocation)
class CompaniesOperationLocationAdmin(_ScopedOperationLocationAdmin):
    _scope = GlobalOperationLocation.PAGE_SCOPE_COMPANIES


# =============================================================================
# Şirket Detay Sayfaları (Statik Singletonlar)
# =============================================================================
_COMMON_DETAIL_FIELDSETS_HEAD = (
    ("1 – Hero", {
        "classes": ["tab"],
        "fields": ("hero_title", "hero_image"),
    }),
    ("2 – Kimlik Kartı", {
        "classes": ["tab"],
        "fields": ("logo", "subtitle", "description"),
    }),
    ("3 – CTA", {
        "classes": ["tab"],
        "fields": (("cta_label", "cta_url"),),
    }),
)

_COMMON_DETAIL_FIELDSETS_TAIL = (
    ("X – İletişim", {
        "classes": ["tab"],
        "fields": ("contact_name", "contact_email", "contact_website"),
    }),
    ("X – SEO", {
        "classes": ["tab"],
        "fields": ("meta_title", "meta_description"),
    }),
)


@admin.register(AkalPage)
class AkalPageAdmin(TabbedTranslationAdmin, SingletonModelAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    filter_horizontal = ("sub_brands",)

    fieldsets = _COMMON_DETAIL_FIELDSETS_HEAD + (
        ("4 – Alt Markalar", {
            "classes": ["tab"],
            "fields": ("sub_brands_title", "sub_brands", "bottom_paragraph"),
        }),
        ("5 – Global Operasyon", {
            "classes": ["tab"],
            "fields": ("global_block_title", "global_block_description"),
        }),
    ) + _COMMON_DETAIL_FIELDSETS_TAIL


@admin.register(AlkanPage)
class AlkanPageAdmin(TabbedTranslationAdmin, SingletonModelAdmin, ModelAdmin):
    change_form_show_cancel_button = True

    fieldsets = _COMMON_DETAIL_FIELDSETS_HEAD + (
        ("4 – Öne Çıkan Görsel", {
            "classes": ["tab"],
            "fields": ("feature_image", "bottom_paragraph"),
        }),
    ) + _COMMON_DETAIL_FIELDSETS_TAIL


@admin.register(AkalGmbhPage)
class AkalGmbhPageAdmin(TabbedTranslationAdmin, SingletonModelAdmin, ModelAdmin):
    change_form_show_cancel_button = True

    fieldsets = (
        ("1 – Hero", {
            "classes": ["tab"],
            "fields": ("hero_title", "hero_image"),
        }),
        ("2 – Kimlik Kartı", {
            "classes": ["tab"],
            "fields": ("logo", "secondary_logo", "subtitle", "description"),
        }),
        ("3 – CTA", {
            "classes": ["tab"],
            "fields": (("cta_label", "cta_url"),),
        }),
        ("4 – Öne Çıkan Görseller", {
            "classes": ["tab"],
            "fields": ("feature_image_1", "feature_image_2"),
        }),
    ) + _COMMON_DETAIL_FIELDSETS_TAIL


# =============================================================================
# Dinamik Şirket Detay Sayfaları
# =============================================================================
@admin.register(CompanyDetailPage)
class CompanyDetailPageAdmin(TabbedTranslationAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["company", "show_active_status", "show_company_link"]
    list_filter = ["is_active"]
    search_fields = ["company__name"]
    autocomplete_fields = ["company"]

    fieldsets = (
        ("0 – Şirket & Durum", {
            "classes": ["tab"],
            "fields": ("company", "is_active"),
        }),
        ("1 – Hero", {
            "classes": ["tab"],
            "fields": ("hero_title", "hero_image"),
        }),
        ("2 – Kimlik Kartı", {
            "classes": ["tab"],
            "fields": ("logo", "secondary_logo", "subtitle", "description"),
        }),
        ("3 – CTA", {
            "classes": ["tab"],
            "fields": (("cta_label", "cta_url"),),
        }),
        ("4 – Öne Çıkan Görseller", {
            "classes": ["tab"],
            "fields": ("feature_image_1", "feature_image_2"),
        }),
        ("5 – Alt Markalar", {
            "classes": ["tab"],
            "fields": ("sub_brands_title", "sub_brands", "bottom_paragraph"),
        }),
        ("6 – Global Operasyon Bloğu", {
            "classes": ["tab"],
            "fields": ("has_global_block", "global_block_title", "global_block_description"),
        }),
        ("7 – İletişim", {
            "classes": ["tab"],
            "fields": ("contact_name", "contact_email", "contact_website"),
        }),
        ("8 – SEO", {
            "classes": ["tab"],
            "fields": ("meta_title", "meta_description"),
        }),
    )

    @display(description="Durum", label={"Aktif": "success", "Pasif": "danger"})
    def show_active_status(self, obj):
        return "Aktif" if obj.is_active else "Pasif"

    @display(description="Şirkete Git")
    def show_company_link(self, obj):
        url = reverse("admin:brands_groupcompany_change", args=[obj.company.pk])
        return format_html('<a href="{}">← {}</a>', url, obj.company.name)



