from common.utils import UniqueUploadTo
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import FileExtensionValidator
from solo.models import SingletonModel
from common.models import SEOModel, SortableModel, AutoSlugMixin


class GalleryPage(SingletonModel, SEOModel):
    """Galeri sayfası singleton ayarları."""

    hero_title = models.CharField(max_length=200, blank=True, verbose_name=_("Hero Başlık"))
    hero_image = models.ImageField(
        upload_to=UniqueUploadTo("gallery/hero/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True,
        verbose_name=_("Hero Görsel"),
    )

    # Giriş metni
    intro_text = models.TextField(blank=True, verbose_name=_("Giriş Metni"))

    # Video bölümü
    video_title = models.CharField(max_length=200, blank=True, verbose_name=_("Video Başlık"))
    video_description = models.TextField(blank=True, verbose_name=_("Video Açıklama"))
    video_image = models.ImageField(
        upload_to=UniqueUploadTo("gallery/video/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True,
        verbose_name=_("Video Arka Plan Görseli"),
    )
    video_file = models.FileField(
        upload_to=UniqueUploadTo("gallery/video/"),
        validators=[FileExtensionValidator(["mp4", "webm"])],
        blank=True,
        verbose_name=_("Video Dosyası (MP4/WebM)"),
    )
    video_url = models.URLField(max_length=500, blank=True, verbose_name=_("Video URL (harici MP4)"))

    # Showcase kopyası
    show_more_text = models.CharField(max_length=100, blank=True, verbose_name=_("Daha Fazla Göster Metni"))
    lightbox_previous_aria_label = models.CharField(max_length=100, blank=True, verbose_name=_("Lightbox Önceki Aria"))
    lightbox_next_aria_label = models.CharField(max_length=100, blank=True, verbose_name=_("Lightbox Sonraki Aria"))
    lightbox_close_aria_label = models.CharField(max_length=100, blank=True, verbose_name=_("Lightbox Kapat Aria"))

    # Aramıza Katılın CTA
    join_label = models.CharField(max_length=100, blank=True, verbose_name=_("CTA Etiket"))
    join_title = models.CharField(max_length=200, blank=True, verbose_name=_("CTA Başlık"))
    join_description = models.TextField(blank=True, verbose_name=_("CTA Açıklama"))
    join_button_text = models.CharField(max_length=100, blank=True, verbose_name=_("CTA Buton Metni"))
    join_button_url = models.CharField(max_length=300, blank=True, verbose_name=_("CTA Buton URL"))

    class Meta:
        verbose_name = _("Galeri Sayfa Ayarları")

    def __str__(self):
        return "Galeri Sayfa Ayarları"


class GalleryCategory(AutoSlugMixin, SortableModel):
    """Galeri kategorileri."""

    name = models.CharField(max_length=100, verbose_name=_("Kategori Adı"))
    slug = models.SlugField(max_length=100, unique=True, blank=True, verbose_name=_("Slug"))

    slug_source = "name"

    class Meta(SortableModel.Meta):
        verbose_name = _("Galeri Kategorisi")
        verbose_name_plural = _("Galeri Kategorileri")

    def __str__(self):
        return self.name


class GalleryImage(SortableModel):
    """Galeri görseli — birden fazla sayfada M2M ile kullanılabilir."""

    title = models.CharField(max_length=200, blank=True, verbose_name=_("Başlık"))
    image = models.ImageField(
        upload_to=UniqueUploadTo("gallery/images/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        verbose_name=_("Görsel"),
    )
    category = models.ForeignKey(
        GalleryCategory,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="images",
        verbose_name=_("Kategori"),
    )
    is_active = models.BooleanField(default=True, verbose_name=_("Aktif"))

    class Meta(SortableModel.Meta):
        verbose_name = _("Galeri Görseli")
        verbose_name_plural = _("Galeri Görselleri")

    def __str__(self):
        return self.title or f"Görsel #{self.pk}"
