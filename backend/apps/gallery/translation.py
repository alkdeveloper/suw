from modeltranslation.translator import TranslationOptions, register
from .models import GalleryPage, GalleryCategory, GalleryImage


@register(GalleryPage)
class GalleryPageTranslationOptions(TranslationOptions):
    fields = (
        "hero_title",
        "intro_text",
        # Showcase copy
        "show_more_text",
        "lightbox_previous_aria_label",
        "lightbox_next_aria_label",
        "lightbox_close_aria_label",
        # Video
        "video_title",
        "video_description",
        # CTA
        "join_label",
        "join_title",
        "join_description",
        "join_button_text",
        # SEO
        "meta_title",
        "meta_description",
    )


@register(GalleryCategory)
class GalleryCategoryTranslationOptions(TranslationOptions):
    fields = ("name",)


@register(GalleryImage)
class GalleryImageTranslationOptions(TranslationOptions):
    fields = ("title",)
