from modeltranslation.translator import TranslationOptions, register
from .models import LegalPage, LegalSection


@register(LegalPage)
class LegalPageTranslationOptions(TranslationOptions):
    fields = (
        "title",
        "subtitle",
        "intro",
        "last_updated_label",
        # SEO
        "meta_title",
        "meta_description",
    )


@register(LegalSection)
class LegalSectionTranslationOptions(TranslationOptions):
    fields = (
        "heading",
        "body",
    )
