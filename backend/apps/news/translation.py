from modeltranslation.translator import TranslationOptions, register
from .models import NewsPage, NewsCategory, News


@register(NewsPage)
class NewsPageTranslationOptions(TranslationOptions):
    fields = (
        "hero_title",
        "gallery_title",
        # Liste / featured copy
        "featured_button_text",
        "list_load_more_text",
        # Detay copy
        "share_title",
        "previous_label",
        "next_label",
        "related_title",
        "related_view_all_text",
        # CTA
        "join_label",
        "join_title",
        "join_description",
        "join_button_text",
        # SEO
        "meta_title",
        "meta_description",
    )


@register(NewsCategory)
class NewsCategoryTranslationOptions(TranslationOptions):
    fields = ("name",)


@register(News)
class NewsTranslationOptions(TranslationOptions):
    fields = (
        "title",
        "summary",
        "content",
        # SEO
        "meta_title",
        "meta_description",
    )
