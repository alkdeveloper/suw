from common.utils import UniqueUploadTo
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import FileExtensionValidator
from solo.models import SingletonModel
from common.models import SEOModel, SortableModel


class CorporatePage(SingletonModel, SEOModel):
    hero_eyebrow_tr = models.CharField(max_length=120, blank=True)
    hero_eyebrow_en = models.CharField(max_length=120, blank=True)
    hero_title_tr = models.CharField(max_length=220, blank=True)
    hero_title_en = models.CharField(max_length=220, blank=True)
    hero_description_tr = models.TextField(blank=True)
    hero_description_en = models.TextField(blank=True)

    group_eyebrow_tr = models.CharField(max_length=120, blank=True)
    group_eyebrow_en = models.CharField(max_length=120, blank=True)
    group_title_tr = models.CharField(max_length=220, blank=True)
    group_title_en = models.CharField(max_length=220, blank=True)
    group_description_tr = models.TextField(blank=True)
    group_description_en = models.TextField(blank=True)
    group_supporting_label_tr = models.CharField(max_length=160, blank=True)
    group_supporting_label_en = models.CharField(max_length=160, blank=True)
    group_image = models.ImageField(upload_to=UniqueUploadTo("corporate/group/"), blank=True)
    group_image_mobile = models.ImageField(upload_to=UniqueUploadTo("corporate/group/mobile/"), blank=True)

    why_eyebrow_tr = models.CharField(max_length=120, blank=True)
    why_eyebrow_en = models.CharField(max_length=120, blank=True)
    why_title_tr = models.CharField(max_length=240, blank=True)
    why_title_en = models.CharField(max_length=240, blank=True)
    why_description_tr = models.TextField(blank=True)
    why_description_en = models.TextField(blank=True)

    experience_eyebrow_tr = models.CharField(max_length=120, blank=True)
    experience_eyebrow_en = models.CharField(max_length=120, blank=True)
    experience_title_tr = models.CharField(max_length=240, blank=True)
    experience_title_en = models.CharField(max_length=240, blank=True)
    experience_description_tr = models.TextField(blank=True)
    experience_description_en = models.TextField(blank=True)

    timeline_eyebrow_tr = models.CharField(max_length=120, blank=True)
    timeline_eyebrow_en = models.CharField(max_length=120, blank=True)
    timeline_title_tr = models.CharField(max_length=220, blank=True)
    timeline_title_en = models.CharField(max_length=220, blank=True)

    final_cta_eyebrow_tr = models.CharField(max_length=120, blank=True)
    final_cta_eyebrow_en = models.CharField(max_length=120, blank=True)
    final_cta_title_tr = models.CharField(max_length=220, blank=True)
    final_cta_title_en = models.CharField(max_length=220, blank=True)
    final_cta_description_tr = models.TextField(blank=True)
    final_cta_description_en = models.TextField(blank=True)
    final_cta_text_tr = models.CharField(max_length=100, blank=True)
    final_cta_text_en = models.CharField(max_length=100, blank=True)
    final_cta_link = models.CharField(max_length=200, blank=True, default="/projects")
    # Hero bölümü
    hero_image = models.ImageField(
        upload_to=UniqueUploadTo("corporate/hero/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True,
        verbose_name=_("Hero Görsel"),
    )
    hero_text = models.CharField(max_length=300, blank=True, verbose_name=_("Hero Metin"))

    # Hakkımızda bölümü
    about_label = models.CharField(max_length=100, blank=True, verbose_name=_("Hakkımızda Etiket"))
    about_description = models.TextField(blank=True, verbose_name=_("Hakkımızda Açıklama"))
    about_image = models.ImageField(
        upload_to=UniqueUploadTo("corporate/about/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True,
        verbose_name=_("Hakkımızda Görsel"),
    )

    # Hikayemiz bölümü
    history_label = models.CharField(max_length=100, blank=True, verbose_name=_("Hikayemiz Etiket"))
    history_title = models.CharField(max_length=200, blank=True, verbose_name=_("Hikayemiz Başlık"))

    # Vizyon
    vision_title = models.CharField(max_length=200, blank=True, verbose_name=_("Vizyon Başlık"))
    vision_description = models.TextField(blank=True, verbose_name=_("Vizyon Açıklama"))

    # Misyon
    mission_title = models.CharField(max_length=200, blank=True, verbose_name=_("Misyon Başlık"))
    mission_description = models.TextField(blank=True, verbose_name=_("Misyon Açıklama"))

    # Markalar bölümü başlığı
    brands_title = models.CharField(max_length=200, blank=True, verbose_name=_("Markalar Başlık"))

    # Aramıza Katılın bölümü
    join_label = models.CharField(max_length=100, blank=True, verbose_name=_("Katılın Etiket"))
    join_title = models.CharField(max_length=200, blank=True, verbose_name=_("Katılın Başlık"))
    join_description = models.TextField(blank=True, verbose_name=_("Katılın Açıklama"))
    join_button_text = models.CharField(max_length=100, blank=True, verbose_name=_("Buton Metin"))
    join_button_url = models.CharField(max_length=200, blank=True, verbose_name=_("Buton URL"))

    class Meta:
        verbose_name = _("Kurumsal Sayfa")

    def __str__(self):
        return "Kurumsal Sayfa"


class CorporateHistoryItem(SortableModel):
    year = models.CharField(max_length=10, verbose_name=_("Yıl"))
    year_tr = models.CharField(max_length=40, blank=True)
    year_en = models.CharField(max_length=40, blank=True)
    description = models.TextField(verbose_name=_("Açıklama"))
    title_tr = models.CharField(max_length=180, blank=True)
    title_en = models.CharField(max_length=180, blank=True)
    sort_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta(SortableModel.Meta):
        verbose_name = _("Tarihçe Öğesi")
        verbose_name_plural = _("Tarihçe")

    def __str__(self):
        return self.year


class WhySuwItem(models.Model):
    title_tr = models.CharField(max_length=180)
    title_en = models.CharField(max_length=180)
    description_tr = models.TextField()
    description_en = models.TextField()
    sort_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["sort_order", "id"]
        verbose_name = "Neden SUW Öğesi"
        verbose_name_plural = "Neden SUW"

    def __str__(self): return self.title_tr


class GroupExperienceItem(models.Model):
    title_tr = models.CharField(max_length=180)
    title_en = models.CharField(max_length=180)
    description_tr = models.TextField()
    description_en = models.TextField()
    sort_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["sort_order", "id"]
        verbose_name = "ALK Group Deneyimi Öğesi"
        verbose_name_plural = "ALK Group Deneyimi"

    def __str__(self): return self.title_tr
