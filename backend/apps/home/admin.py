from django import forms
from django.contrib import admin
from django.utils.html import format_html
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin, TabularInline
from unfold.decorators import display
from solo.admin import SingletonModelAdmin
from common.admin import OrderableMixin
from .models import (
    HomePage,
    HomeProductCategoriesSettings,
    HomeWorkEssentialsSettings,
    WorkEssentialItem,
    HomeProductionInsightsSettings,
    ProductionInsightItem,
    HomeTechnicalPerformanceSettings,
    TechnicalPerformanceItem,
    HomeCorporateWorkwearSettings,
    HomeProcessSettings,
    HomeProcessStep,
    HomeTickerWord,
    HomeBrand,
    HomeActivity,
    HomeAboutFeature,
    HomeOperationalItem,
)


# Ana Sayfa (Singleton)
class HomePageAdminForm(forms.ModelForm):
    class Meta:
        model = HomePage
        fields = "__all__"
        labels = {
            "hero_subtitle_tr": "Eyebrow TR",
            "hero_subtitle_en": "Eyebrow EN",
            "hero_title_tr": "Başlık TR",
            "hero_title_en": "Başlık EN",
            "hero_description_tr": "Açıklama TR",
            "hero_description_en": "Açıklama EN",
            "meta_title_tr": "SEO Başlık TR",
            "meta_title_en": "SEO Başlık EN",
            "meta_description_tr": "SEO Açıklama TR",
            "meta_description_en": "SEO Açıklama EN",
        }


class HomeProductCategoriesSettingsAdminForm(forms.ModelForm):
    class Meta:
        model = HomeProductCategoriesSettings
        fields = (
            "product_categories_eyebrow_tr",
            "product_categories_title_tr",
            "product_categories_description_tr",
            "product_categories_eyebrow_en",
            "product_categories_title_en",
            "product_categories_description_en",
        )
        labels = {
            "product_categories_eyebrow_tr": "Eyebrow TR",
            "product_categories_title_tr": "Başlık TR",
            "product_categories_description_tr": "Açıklama TR",
            "product_categories_eyebrow_en": "Eyebrow EN",
            "product_categories_title_en": "Başlık EN",
            "product_categories_description_en": "Açıklama EN",
        }


class HomeWorkEssentialsSettingsAdminForm(forms.ModelForm):
    class Meta:
        model = HomeWorkEssentialsSettings
        fields = (
            "work_essentials_eyebrow_tr",
            "work_essentials_title_tr",
            "work_essentials_description_tr",
            "work_essentials_cta_text_tr",
            "work_essentials_eyebrow_en",
            "work_essentials_title_en",
            "work_essentials_description_en",
            "work_essentials_cta_text_en",
            "work_essentials_cta_link",
        )
        labels = {
            "work_essentials_eyebrow_tr": "Eyebrow TR",
            "work_essentials_title_tr": "Başlık TR",
            "work_essentials_description_tr": "Açıklama TR",
            "work_essentials_cta_text_tr": "CTA Metni TR",
            "work_essentials_eyebrow_en": "Eyebrow EN",
            "work_essentials_title_en": "Başlık EN",
            "work_essentials_description_en": "Açıklama EN",
            "work_essentials_cta_text_en": "CTA Metni EN",
            "work_essentials_cta_link": "CTA Linki",
        }


class WorkEssentialItemInline(TabularInline):
    model = WorkEssentialItem
    verbose_name = "Katalog Görseli"
    verbose_name_plural = "Katalog Görselleri"
    extra = 0
    fields = ("image", "image_preview", "alt_tr", "alt_en", "link", "sort_order", "is_active")
    readonly_fields = ("image_preview",)
    ordering = ("sort_order", "id")

    @display(description="Önizleme")
    def image_preview(self, obj):
        if not obj or not obj.image:
            return "—"
        return format_html(
            '<img src="{}" style="width:54px;height:68px;object-fit:cover;border-radius:4px" />',
            obj.image.url,
        )


class HomeProductionInsightsSettingsAdminForm(forms.ModelForm):
    class Meta:
        model = HomeProductionInsightsSettings
        fields = (
            "production_insights_eyebrow_tr",
            "production_insights_title_tr",
            "production_insights_description_tr",
            "production_insights_eyebrow_en",
            "production_insights_title_en",
            "production_insights_description_en",
        )
        labels = {
            "production_insights_eyebrow_tr": "Eyebrow TR",
            "production_insights_title_tr": "Başlık TR",
            "production_insights_description_tr": "Açıklama TR",
            "production_insights_eyebrow_en": "Eyebrow EN",
            "production_insights_title_en": "Başlık EN",
            "production_insights_description_en": "Açıklama EN",
        }


class HomeTechnicalPerformanceSettingsAdminForm(forms.ModelForm):
    class Meta:
        model = HomeTechnicalPerformanceSettings
        fields = (
            "technical_performance_eyebrow_tr", "technical_performance_title_tr", "technical_performance_description_tr", "technical_performance_cta_text_tr",
            "technical_performance_eyebrow_en", "technical_performance_title_en", "technical_performance_description_en", "technical_performance_cta_text_en",
            "technical_performance_image", "technical_performance_cta_link",
        )
        labels = {
            "technical_performance_eyebrow_tr": "Eyebrow TR", "technical_performance_title_tr": "Başlık TR", "technical_performance_description_tr": "Açıklama TR", "technical_performance_cta_text_tr": "CTA Metni TR",
            "technical_performance_eyebrow_en": "Eyebrow EN", "technical_performance_title_en": "Başlık EN", "technical_performance_description_en": "Açıklama EN", "technical_performance_cta_text_en": "CTA Metni EN",
            "technical_performance_image": "Teknik Performans Görseli", "technical_performance_cta_link": "CTA Linki",
        }


class TechnicalPerformanceItemInline(TabularInline):
    model = TechnicalPerformanceItem
    extra = 0
    fields = ("title_tr", "title_en", "description_tr", "description_en", "sort_order", "is_active")
    ordering = ("sort_order", "id")


class HomeCorporateWorkwearSettingsAdminForm(forms.ModelForm):
    class Meta:
        model = HomeCorporateWorkwearSettings
        fields = "__all__"
        labels = {
            "corporate_workwear_eyebrow_tr": "Eyebrow TR", "corporate_workwear_eyebrow_en": "Eyebrow EN",
            "corporate_workwear_title_tr": "Başlık TR", "corporate_workwear_title_en": "Başlık EN",
            "corporate_workwear_description_tr": "Açıklama TR", "corporate_workwear_description_en": "Açıklama EN",
            "corporate_workwear_cta_text_tr": "CTA Metni TR", "corporate_workwear_cta_text_en": "CTA Metni EN",
            "corporate_workwear_cta_link": "CTA Linki",
        }


class HomeProcessSettingsAdminForm(forms.ModelForm):
    class Meta:
        model = HomeProcessSettings
        fields = ("process_eyebrow_tr", "process_title_tr", "process_description_tr", "process_eyebrow_en", "process_title_en", "process_description_en")
        labels = {
            "process_eyebrow_tr": "Eyebrow TR", "process_title_tr": "Başlık TR", "process_description_tr": "Açıklama TR",
            "process_eyebrow_en": "Eyebrow EN", "process_title_en": "Başlık EN", "process_description_en": "Açıklama EN",
        }


class HomeProcessStepInline(TabularInline):
    model = HomeProcessStep
    extra = 0
    fields = ("title_tr", "title_en", "description_tr", "description_en", "sort_order", "is_active")
    ordering = ("sort_order", "id")


class ProductionInsightItemInline(TabularInline):
    model = ProductionInsightItem
    extra = 0
    fields = (
        "image",
        "image_preview",
        "title_tr",
        "title_en",
        "short_description_tr",
        "short_description_en",
        "detail_text_tr",
        "detail_text_en",
        "sort_order",
        "is_active",
    )
    readonly_fields = ("image_preview",)
    ordering = ("sort_order", "id")

    @display(description="Önizleme")
    def image_preview(self, obj):
        if not obj or not obj.image:
            return "—"
        return format_html('<img src="{}" style="width:72px;height:52px;object-fit:cover;border-radius:4px" />', obj.image.url)


@admin.register(HomePage)
class HomePageAdmin(TabbedTranslationAdmin, SingletonModelAdmin, ModelAdmin):
    form = HomePageAdminForm
    change_form_show_cancel_button = True
    readonly_fields = ("hero_image_preview", "hero_image_mobile_preview")
    fieldsets = (
        (
            "Türkçe Hero",
            {
                "classes": ["tab"],
                "fields": ("hero_subtitle_tr", "hero_title_tr", "hero_description_tr"),
            },
        ),
        (
            "İngilizce Hero",
            {
                "classes": ["tab"],
                "fields": ("hero_subtitle_en", "hero_title_en", "hero_description_en"),
            },
        ),
        (
            "Hero Görselleri",
            {
                "classes": ["tab"],
                "fields": ("hero_image", "hero_image_preview", "hero_image_mobile", "hero_image_mobile_preview"),
            },
        ),
        (
            "SEO",
            {
                "classes": ["tab"],
                "fields": (("meta_title_tr", "meta_title_en"), ("meta_description_tr", "meta_description_en")),
            },
        ),
    )

    def hero_image_preview(self, obj):
        return format_html('<img src="{}" style="width:180px;height:96px;object-fit:cover;border-radius:4px" />', obj.hero_image.url) if obj.hero_image else "—"

    def hero_image_mobile_preview(self, obj):
        return format_html('<img src="{}" style="width:96px;height:128px;object-fit:cover;border-radius:4px" />', obj.hero_image_mobile.url) if obj.hero_image_mobile else "—"

    def change_view(self, request, object_id, form_url="", extra_context=None):
        extra_context = extra_context or {}
        extra_context["title"] = "Ana Sayfa"
        extra_context["subtitle"] = None
        return super().change_view(request, object_id, form_url, extra_context)


@admin.register(HomeProductCategoriesSettings)
class HomeProductCategoriesSettingsAdmin(SingletonModelAdmin, ModelAdmin):
    form = HomeProductCategoriesSettingsAdminForm
    change_form_show_cancel_button = True
    fieldsets = (
        (
            "Türkçe İçerik",
            {
                "fields": (
                    "product_categories_eyebrow_tr",
                    "product_categories_title_tr",
                    "product_categories_description_tr",
                ),
            },
        ),
        (
            "İngilizce İçerik",
            {
                "fields": (
                    "product_categories_eyebrow_en",
                    "product_categories_title_en",
                    "product_categories_description_en",
                ),
            },
        ),
    )

    def change_view(self, request, object_id, form_url="", extra_context=None):
        extra_context = extra_context or {}
        extra_context["title"] = "Ürün Kategorileri Bölümü"
        extra_context["subtitle"] = None
        return super().change_view(request, object_id, form_url, extra_context)


@admin.register(HomeWorkEssentialsSettings)
class HomeWorkEssentialsSettingsAdmin(SingletonModelAdmin, ModelAdmin):
    form = HomeWorkEssentialsSettingsAdminForm
    inlines = (WorkEssentialItemInline,)
    change_form_show_cancel_button = True
    fieldsets = (
        ("Türkçe İçerik", {"fields": ("work_essentials_eyebrow_tr", "work_essentials_title_tr", "work_essentials_description_tr", "work_essentials_cta_text_tr")}),
        ("İngilizce İçerik", {"fields": ("work_essentials_eyebrow_en", "work_essentials_title_en", "work_essentials_description_en", "work_essentials_cta_text_en")}),
        ("CTA", {"fields": ("work_essentials_cta_link",)}),
    )

    def change_view(self, request, object_id, form_url="", extra_context=None):
        extra_context = extra_context or {}
        extra_context["title"] = "Katalog Vitrini"
        extra_context["subtitle"] = None
        return super().change_view(request, object_id, form_url, extra_context)


@admin.register(HomeProductionInsightsSettings)
class HomeProductionInsightsSettingsAdmin(SingletonModelAdmin, ModelAdmin):
    form = HomeProductionInsightsSettingsAdminForm
    inlines = (ProductionInsightItemInline,)
    change_form_show_cancel_button = True
    fieldsets = (
        ("Türkçe İçerik", {"fields": ("production_insights_eyebrow_tr", "production_insights_title_tr", "production_insights_description_tr")}),
        ("İngilizce İçerik", {"fields": ("production_insights_eyebrow_en", "production_insights_title_en", "production_insights_description_en")}),
    )

    def change_view(self, request, object_id, form_url="", extra_context=None):
        extra_context = extra_context or {}
        extra_context["title"] = "Üretim Bilgileri"
        extra_context["subtitle"] = None
        return super().change_view(request, object_id, form_url, extra_context)


@admin.register(HomeTechnicalPerformanceSettings)
class HomeTechnicalPerformanceSettingsAdmin(SingletonModelAdmin, ModelAdmin):
    form = HomeTechnicalPerformanceSettingsAdminForm
    inlines = (TechnicalPerformanceItemInline,)
    change_form_show_cancel_button = True
    readonly_fields = ("technical_performance_image_preview",)
    fieldsets = (
        ("Türkçe İçerik", {"fields": ("technical_performance_eyebrow_tr", "technical_performance_title_tr", "technical_performance_description_tr", "technical_performance_cta_text_tr")}),
        ("İngilizce İçerik", {"fields": ("technical_performance_eyebrow_en", "technical_performance_title_en", "technical_performance_description_en", "technical_performance_cta_text_en")}),
        ("Görsel", {"fields": ("technical_performance_image", "technical_performance_image_preview")}),
        ("CTA", {"fields": ("technical_performance_cta_link",)}),
    )

    @display(description="Görsel Önizleme")
    def technical_performance_image_preview(self, obj):
        if not obj or not obj.technical_performance_image:
            return "—"
        return format_html('<img src="{}" style="width:180px;height:112px;object-fit:cover;border-radius:4px" />', obj.technical_performance_image.url)

    def change_view(self, request, object_id, form_url="", extra_context=None):
        extra_context = extra_context or {}
        extra_context["title"] = "Teknik Performans"
        extra_context["subtitle"] = None
        return super().change_view(request, object_id, form_url, extra_context)


@admin.register(HomeCorporateWorkwearSettings)
class HomeCorporateWorkwearSettingsAdmin(SingletonModelAdmin, ModelAdmin):
    form = HomeCorporateWorkwearSettingsAdminForm
    change_form_show_cancel_button = True
    readonly_fields = ("personnel_image_preview", "promo_image_preview")
    fieldsets = (
        ("Section — Türkçe", {"fields": ("corporate_workwear_eyebrow_tr", "corporate_workwear_title_tr", "corporate_workwear_description_tr")}),
        ("Section — İngilizce", {"fields": ("corporate_workwear_eyebrow_en", "corporate_workwear_title_en", "corporate_workwear_description_en")}),
        ("Personel Kıyafetleri — Türkçe", {"fields": ("corporate_workwear_personnel_title_tr", "corporate_workwear_personnel_description_tr")}),
        ("Personnel Workwear — English", {"fields": ("corporate_workwear_personnel_title_en", "corporate_workwear_personnel_description_en")}),
        ("Personel Kıyafetleri Görseli", {"fields": ("corporate_workwear_personnel_image", "personnel_image_preview")}),
        ("Promosyon Tekstil — Türkçe", {"fields": ("corporate_workwear_promo_title_tr", "corporate_workwear_promo_description_tr")}),
        ("Promotional Textiles — English", {"fields": ("corporate_workwear_promo_title_en", "corporate_workwear_promo_description_en")}),
        ("Promosyon Tekstil Görseli", {"fields": ("corporate_workwear_promo_image", "promo_image_preview")}),
        ("CTA", {"fields": (("corporate_workwear_cta_text_tr", "corporate_workwear_cta_text_en"), "corporate_workwear_cta_link")}),
    )

    @display(description="Görsel Önizleme")
    def personnel_image_preview(self, obj):
        return format_html('<img src="{}" style="width:180px;height:112px;object-fit:cover;border-radius:4px" />', obj.corporate_workwear_personnel_image.url) if obj and obj.corporate_workwear_personnel_image else "—"

    @display(description="Görsel Önizleme")
    def promo_image_preview(self, obj):
        return format_html('<img src="{}" style="width:180px;height:112px;object-fit:cover;border-radius:4px" />', obj.corporate_workwear_promo_image.url) if obj and obj.corporate_workwear_promo_image else "—"

    def change_view(self, request, object_id, form_url="", extra_context=None):
        extra_context = extra_context or {}
        extra_context["title"] = "Kurumsal İş Giyimi"
        extra_context["subtitle"] = None
        return super().change_view(request, object_id, form_url, extra_context)


@admin.register(HomeProcessSettings)
class HomeProcessSettingsAdmin(SingletonModelAdmin, ModelAdmin):
    form = HomeProcessSettingsAdminForm
    inlines = (HomeProcessStepInline,)
    change_form_show_cancel_button = True
    fieldsets = (
        ("Türkçe İçerik", {"fields": ("process_eyebrow_tr", "process_title_tr", "process_description_tr")}),
        ("İngilizce İçerik", {"fields": ("process_eyebrow_en", "process_title_en", "process_description_en")}),
    )

    def change_view(self, request, object_id, form_url="", extra_context=None):
        extra_context = extra_context or {}
        extra_context["title"] = "Fikirden Teslimata"
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


# Legacy ALK Home yardımcı modellerini veritabanında koru, SUW admin'den gizle.
for legacy_model in (HomeTickerWord, HomeBrand, HomeActivity, HomeAboutFeature, HomeOperationalItem):
    if admin.site.is_registered(legacy_model):
        admin.site.unregister(legacy_model)



