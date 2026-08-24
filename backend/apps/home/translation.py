from modeltranslation.translator import TranslationOptions, register
from .models import (
    HomePage,
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
