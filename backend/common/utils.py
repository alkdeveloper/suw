import os
import uuid

from django.utils.deconstruct import deconstructible
from django.utils.text import slugify


@deconstructible
class UniqueUploadTo:
    """
    UUID tabanlı benzersiz dosya adı üretir.
    Migration sistemiyle tam uyumludur (@deconstructible).

    Kullanım:
        image = models.ImageField(upload_to=UniqueUploadTo("home/brands/"))
        # → home/brands/3f5a1b2c4d6e7f8a9b0c1d2e3f4a5b6c.jpg
    """

    def __init__(self, path: str):
        self.path = path.rstrip("/")

    def __call__(self, instance, filename: str) -> str:
        ext = os.path.splitext(filename)[1].lower()
        return f"{self.path}/{uuid.uuid4().hex}{ext}"

    def __eq__(self, other) -> bool:
        return isinstance(other, UniqueUploadTo) and self.path == other.path

_TR_CHAR_MAP = str.maketrans(
    "çğıöşüÇĞİÖŞÜ",
    "cgiosuCGIOSU",
)


def turkish_slugify(value: str) -> str:
    value = value.translate(_TR_CHAR_MAP)
    return slugify(value)


def auto_translate_instance(instance, fields: list, source_lang: str = "tr", target_lang: str = "en") -> None:
    try:
        from deep_translator import GoogleTranslator
        translator = GoogleTranslator(source=source_lang, target=target_lang)
        for field in fields:
            source_value = getattr(instance, f"{field}_{source_lang}", None)
            target_field = f"{field}_{target_lang}"
            if source_value and not getattr(instance, target_field, None):
                setattr(instance, target_field, translator.translate(source_value))
    except Exception:
        pass
