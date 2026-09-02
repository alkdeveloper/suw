from modeltranslation.translator import TranslationOptions, register
from .models import (
    HomePage,
    HomeProductCategoriesSettings,
    HomeWorkEssentialsSettings,
    HomeProductionInsightsSettings,
    HomeTechnicalPerformanceSettings,
    HomeCorporateWorkwearSettings,
    HomeProcessSettings,
    HomeTickerWord,
    HomeActivity,
    HomeAboutFeature,
    HomeOperationalItem,
)


@register(HomePage)
class HomePageTranslationOptions(TranslationOptions):
    fields = (
        # Hero
        "hero_title",
        "hero_subtitle",
        "hero_description",
        # Ürün kategorileri bölümü
        "product_categories_eyebrow",
        "product_categories_title",
        "product_categories_description",
        # Work Essentials
        "work_essentials_eyebrow",
        "work_essentials_title",
        "work_essentials_description",
        "work_essentials_cta_text",
        # Teknik Performans
        "technical_performance_eyebrow",
        "technical_performance_title",
        "technical_performance_description",
        "technical_performance_cta_text",
        # Kurumsal İş Giyimi
        "corporate_workwear_eyebrow",
        "corporate_workwear_title",
        "corporate_workwear_description",
        "corporate_workwear_personnel_title",
        "corporate_workwear_personnel_description",
        "corporate_workwear_promo_title",
        "corporate_workwear_promo_description",
        "corporate_workwear_cta_text",
        # Fikirden Teslimata
        "process_eyebrow",
        "process_title",
        "process_description",
        # Üretim Bilgileri
        "production_insights_eyebrow",
        "production_insights_title",
        "production_insights_description",
        # Markalar
        "brands_title",
        "brands_description",
        # Faaliyetler
        "activities_label",
        "activities_title",
        "activities_description",
        # Hakkımızda
        "about_label",
        "about_title",
        "about_subtitle",
        "about_short_description",
        "about_long_description",
        "about_cta_button_text",
        # Operasyonel
        "operational_label",
        "operational_title",
        "operational_description",
        # Video
        "video_title",
        "video_description",
        # Haberler
        "news_section_title",
        "news_section_button_text",
        # SEO
        "meta_title",
        "meta_description",
    )


@register(HomeProductCategoriesSettings)
class HomeProductCategoriesSettingsTranslationOptions(TranslationOptions):
    fields = (
        "product_categories_eyebrow",
        "product_categories_title",
        "product_categories_description",
    )


@register(HomeWorkEssentialsSettings)
class HomeWorkEssentialsSettingsTranslationOptions(TranslationOptions):
    fields = (
        "work_essentials_eyebrow",
        "work_essentials_title",
        "work_essentials_description",
        "work_essentials_cta_text",
    )


@register(HomeProductionInsightsSettings)
class HomeProductionInsightsSettingsTranslationOptions(TranslationOptions):
    fields = (
        "production_insights_eyebrow",
        "production_insights_title",
        "production_insights_description",
    )


@register(HomeTechnicalPerformanceSettings)
class HomeTechnicalPerformanceSettingsTranslationOptions(TranslationOptions):
    fields = (
        "technical_performance_eyebrow",
        "technical_performance_title",
        "technical_performance_description",
        "technical_performance_cta_text",
    )


@register(HomeCorporateWorkwearSettings)
class HomeCorporateWorkwearSettingsTranslationOptions(TranslationOptions):
    fields = (
        "corporate_workwear_eyebrow", "corporate_workwear_title", "corporate_workwear_description",
        "corporate_workwear_personnel_title", "corporate_workwear_personnel_description",
        "corporate_workwear_promo_title", "corporate_workwear_promo_description", "corporate_workwear_cta_text",
    )


@register(HomeProcessSettings)
class HomeProcessSettingsTranslationOptions(TranslationOptions):
    fields = ("process_eyebrow", "process_title", "process_description")


@register(HomeTickerWord)
class HomeTickerWordTranslationOptions(TranslationOptions):
    fields = ("text",)


@register(HomeActivity)
class HomeActivityTranslationOptions(TranslationOptions):
    fields = ("title",)


@register(HomeAboutFeature)
class HomeAboutFeatureTranslationOptions(TranslationOptions):
    fields = ("key", "value")


@register(HomeOperationalItem)
class HomeOperationalItemTranslationOptions(TranslationOptions):
    fields = ("title", "description")
