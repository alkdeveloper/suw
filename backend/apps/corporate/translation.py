from modeltranslation.translator import translator, TranslationOptions
from .models import CorporatePage, CorporateHistoryItem


class CorporatePageTranslation(TranslationOptions):
    fields = (
        "hero_text",
        "about_label",
        "about_description",
        "history_label",
        "history_title",
        "vision_title",
        "vision_description",
        "mission_title",
        "mission_description",
        "brands_title",
        "join_label",
        "join_title",
        "join_description",
        "join_button_text",
        # SEOModel
        "meta_title",
        "meta_description",
    )


class CorporateHistoryItemTranslation(TranslationOptions):
    fields = ("description",)


translator.register(CorporatePage, CorporatePageTranslation)
translator.register(CorporateHistoryItem, CorporateHistoryItemTranslation)
