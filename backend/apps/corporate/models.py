from common.utils import UniqueUploadTo
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import FileExtensionValidator
from solo.models import SingletonModel
from common.models import SEOModel, SortableModel


class CorporatePage(SingletonModel, SEOModel):
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
    description = models.TextField(verbose_name=_("Açıklama"))

    class Meta(SortableModel.Meta):
        verbose_name = _("Tarihçe Öğesi")
        verbose_name_plural = _("Tarihçe")

    def __str__(self):
        return self.year
