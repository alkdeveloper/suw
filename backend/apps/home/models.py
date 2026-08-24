from common.utils import UniqueUploadTo
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import FileExtensionValidator
from solo.models import SingletonModel
from common.models import SEOModel, SortableModel


class HomePage(SingletonModel, SEOModel):
    # Hero bölümü
    hero_title = models.CharField(max_length=300, blank=True, verbose_name=_("Hero Başlık"))
    hero_subtitle = models.CharField(max_length=300, blank=True, verbose_name=_("Hero Alt Başlık"))
    hero_description = models.TextField(blank=True, verbose_name=_("Hero Açıklama"))
    hero_image = models.ImageField(
        upload_to=UniqueUploadTo("home/hero/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True,
        verbose_name=_("Hero Görsel"),
    )

    # Markalar bölümü
    brands_title = models.CharField(max_length=200, blank=True, verbose_name=_("Markalar Başlık"))
    brands_description = models.TextField(blank=True, verbose_name=_("Markalar Açıklama"))

    # Faaliyetler bölümü
    activities_label = models.CharField(max_length=100, blank=True, verbose_name=_("Faaliyetler Etiket"))
    activities_title = models.CharField(max_length=200, blank=True, verbose_name=_("Faaliyetler Başlık"))
    activities_description = models.TextField(blank=True, verbose_name=_("Faaliyetler Açıklama"))

    # Hakkımızda bölümü
    about_label = models.CharField(max_length=100, blank=True, verbose_name=_("Hakkımızda Etiket"))
    about_title = models.CharField(max_length=200, blank=True, verbose_name=_("Hakkımızda Başlık"))
    about_subtitle = models.CharField(max_length=200, blank=True, verbose_name=_("Hakkımızda Alt Başlık"))
    about_short_description = models.TextField(blank=True, verbose_name=_("Kısa Açıklama"))
    about_long_description = models.TextField(blank=True, verbose_name=_("Uzun Açıklama"))
    about_background_image = models.ImageField(
        upload_to=UniqueUploadTo("home/about/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True,
        verbose_name=_("Hakkımızda Arka Plan Görseli"),
    )
    about_cta_button_text = models.CharField(
        max_length=100,
        blank=True,
        verbose_name=_("İstatistikler — buton metni"),
        help_text=_("Buton her zaman Kurumsal sayfasına (/corporate) gider; yalnızca metin düzenlenir."),
    )

    # Operasyonel bölüm
    operational_label = models.CharField(max_length=100, blank=True, verbose_name=_("Operasyonel Etiket"))
    operational_title = models.CharField(max_length=200, blank=True, verbose_name=_("Operasyonel Başlık"))
    operational_description = models.TextField(blank=True, verbose_name=_("Operasyonel Açıklama"))
    operational_image = models.ImageField(
        upload_to=UniqueUploadTo("home/operational/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "svg"])],
        blank=True,
        verbose_name=_("Operasyonel Görsel"),
    )

    # Video bölümü
    video_title = models.CharField(max_length=200, blank=True, verbose_name=_("Video Başlık"))
    video_description = models.TextField(blank=True, verbose_name=_("Video Açıklama"))
    video_file = models.FileField(
        upload_to=UniqueUploadTo("home/video/"),
        validators=[FileExtensionValidator(["mp4", "webm"])],
        blank=True,
        verbose_name=_("Video Dosyası (MP4)"),
    )
    video_image = models.ImageField(
        upload_to=UniqueUploadTo("home/video/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True,
        verbose_name=_("Video Arka Plan Görseli"),
    )

    # Haberler bölümü
    news_section_title = models.CharField(max_length=200, blank=True, verbose_name=_("Haberler Bölüm Başlık"))
    news_section_button_text = models.CharField(max_length=100, blank=True, verbose_name=_("Haberler Buton Metni"))
    news_count = models.PositiveSmallIntegerField(default=6, verbose_name=_("Anasayfa Haber Sayısı"))

    class Meta:
        verbose_name = _("Sayfa Ayarları")

    def __str__(self):
        return "Sayfa Ayarları"


class HomeTickerWord(SortableModel):
    text = models.CharField(max_length=100, verbose_name=_("Metin"))

    class Meta(SortableModel.Meta):
        verbose_name = _("Ticker Kelime")
        verbose_name_plural = _("Ticker Kelimeler")

    def __str__(self):
        return self.text


class HomeBrand(SortableModel):
    name = models.CharField(max_length=200, verbose_name=_("Marka Adı"))
    image = models.ImageField(
        upload_to=UniqueUploadTo("home/brands/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "svg"])],
        verbose_name=_("Logo"),
    )
    is_active = models.BooleanField(default=True, verbose_name=_("Aktif"))

    class Meta(SortableModel.Meta):
        verbose_name = _("Marka")
        verbose_name_plural = _("Markalar")

    def __str__(self):
        return self.name


class HomeActivity(SortableModel):
    title = models.CharField(max_length=200, verbose_name=_("Başlık"))
    image = models.ImageField(
        upload_to=UniqueUploadTo("home/activities/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        verbose_name=_("Görsel"),
    )
    is_active = models.BooleanField(default=True, verbose_name=_("Aktif"))

    class Meta(SortableModel.Meta):
        verbose_name = _("Faaliyet")
        verbose_name_plural = _("Faaliyetler")

    def __str__(self):
        return self.title


class HomeAboutFeature(SortableModel):
    key = models.CharField(max_length=100, verbose_name=_("Başlık"))
    value = models.CharField(max_length=200, verbose_name=_("Değer"))

    class Meta(SortableModel.Meta):
        verbose_name = _("Özellik")
        verbose_name_plural = _("Özellikler")

    def __str__(self):
        return f"{self.key}: {self.value}"


class HomeOperationalItem(SortableModel):
    icon = models.CharField(max_length=100, blank=True, verbose_name=_("İkon"))
    title = models.CharField(max_length=200, verbose_name=_("Başlık"))
    description = models.TextField(blank=True, verbose_name=_("Açıklama"))
    external_link_enabled = models.BooleanField(
        default=False,
        verbose_name=_("Dış Yönlendirme Aktif"),
        help_text=_(
            "Kapalıyken öğenin üzerine gelindiğinde dış bağlantı oku görünmez ve "
            "kart tıklanabilir olmaz. Açmak için bu kutuyu işaretleyin ve aşağıya "
            "yönlendirilecek URL'yi girin. Yeni öğelerde varsayılan KAPALIDIR."
        ),
    )
    external_url = models.URLField(
        blank=True,
        verbose_name=_("Dış Yönlendirme URL"),
        help_text=_("Sadece üstteki kutu işaretliyse kullanılır. Boşsa yönlendirme gerçekleşmez."),
    )

    class Meta(SortableModel.Meta):
        verbose_name = _("Operasyonel Öğe")
        verbose_name_plural = _("Operasyonel Öğeler")

    def __str__(self):
        return self.title



