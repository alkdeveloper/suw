from django.core.validators import FileExtensionValidator
from django.db import models
from solo.models import SingletonModel

from common.utils import UniqueUploadTo


image_validators = [FileExtensionValidator(["jpg", "jpeg", "png", "webp"])]


class ProjectsPageSettings(SingletonModel):
    hero_eyebrow_tr = models.CharField(max_length=120, blank=True)
    hero_eyebrow_en = models.CharField(max_length=120, blank=True)
    hero_title_tr = models.CharField(max_length=220, blank=True)
    hero_title_en = models.CharField(max_length=220, blank=True)
    hero_description_tr = models.TextField(blank=True)
    hero_description_en = models.TextField(blank=True)
    cta_eyebrow_tr = models.CharField(max_length=120, blank=True)
    cta_eyebrow_en = models.CharField(max_length=120, blank=True)
    cta_title_tr = models.CharField(max_length=220, blank=True)
    cta_title_en = models.CharField(max_length=220, blank=True)
    cta_description_tr = models.TextField(blank=True)
    cta_description_en = models.TextField(blank=True)
    cta_text_tr = models.CharField(max_length=100, blank=True)
    cta_text_en = models.CharField(max_length=100, blank=True)

    class Meta:
        verbose_name = "Projeler Sayfa Ayarları"
        verbose_name_plural = "Projeler Sayfa Ayarları"

    def __str__(self): return "Projeler Sayfa Ayarları"


class ProjectSector(models.Model):
    title_tr = models.CharField(max_length=160)
    title_en = models.CharField(max_length=160)
    headline_tr = models.CharField(max_length=240)
    headline_en = models.CharField(max_length=240)
    description_tr = models.TextField()
    description_en = models.TextField()
    image = models.ImageField(upload_to=UniqueUploadTo("projects/sectors/"), validators=image_validators, blank=True)
    image_mobile = models.ImageField(upload_to=UniqueUploadTo("projects/sectors/mobile/"), validators=image_validators, blank=True)
    product_groups_tr = models.TextField(blank=True, help_text="Her ürün grubunu ayrı satıra yazın.")
    product_groups_en = models.TextField(blank=True, help_text="Enter each product group on a separate line.")
    sort_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["sort_order", "id"]
        verbose_name = "Sektör Projesi"
        verbose_name_plural = "Sektör Projeleri"

    def __str__(self): return self.title_tr
