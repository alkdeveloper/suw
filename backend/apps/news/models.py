from common.utils import UniqueUploadTo
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import FileExtensionValidator
from solo.models import SingletonModel
from common.models import SEOModel, SortableModel, AutoSlugMixin


class NewsPage(SingletonModel, SEOModel):
    """Haberler sayfası singleton ayarları."""

    hero_title = models.CharField(max_length=200, blank=True, verbose_name=_("Hero Başlık"))
    hero_image = models.ImageField(
        upload_to=UniqueUploadTo("news/hero/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True,
        verbose_name=_("Hero Görsel"),
    )

    # Galeri bölümü (şerit görselleri API’de son haberlerin kapak görsellerinden üretilir)
    gallery_title = models.CharField(max_length=200, blank=True, verbose_name=_("Galeri Başlığı"))

    # Liste / featured copy
    featured_button_text = models.CharField(max_length=100, blank=True, verbose_name=_("Öne Çıkan Buton Metni"))
    list_load_more_text = models.CharField(max_length=100, blank=True, verbose_name=_("Daha Fazla Yükle Metni"))

    # Detay copy (NewsPage'den inject edilir)
    share_title = models.CharField(max_length=100, blank=True, verbose_name=_("Paylaş Başlığı"))
    previous_label = models.CharField(max_length=100, blank=True, verbose_name=_("Önceki Etiketi"))
    next_label = models.CharField(max_length=100, blank=True, verbose_name=_("Sonraki Etiketi"))
    related_title = models.CharField(max_length=200, blank=True, verbose_name=_("İlgili Haberler Başlığı"))
    related_view_all_text = models.CharField(max_length=100, blank=True, verbose_name=_("İlgili Tümünü Gör Metni"))

    # Aramıza Katılın CTA
    join_label = models.CharField(max_length=100, blank=True, verbose_name=_("CTA Etiket"))
    join_title = models.CharField(max_length=200, blank=True, verbose_name=_("CTA Başlık"))
    join_description = models.TextField(blank=True, verbose_name=_("CTA Açıklama"))
    join_button_text = models.CharField(max_length=100, blank=True, verbose_name=_("CTA Buton Metni"))
    join_button_url = models.CharField(max_length=300, blank=True, verbose_name=_("CTA Buton URL"))

    class Meta:
        verbose_name = _("Haberler Sayfa Ayarları")

    def __str__(self):
        return "Haberler Sayfa Ayarları"


class NewsCategory(AutoSlugMixin, SortableModel):
    """Haber kategorileri — Fuar, Basın, Etkinlik vb."""

    name = models.CharField(max_length=100, verbose_name=_("Kategori Adı"))
    slug = models.SlugField(max_length=100, unique=True, blank=True, verbose_name=_("Slug"))

    slug_source = "name"

    class Meta(SortableModel.Meta):
        verbose_name = _("Haber Kategorisi")
        verbose_name_plural = _("Haber Kategorileri")

    def __str__(self):
        return self.name


class News(AutoSlugMixin, SortableModel, SEOModel):
    """Haber öğesi."""

    title = models.CharField(max_length=300, verbose_name=_("Başlık"))
    slug = models.SlugField(max_length=300, unique=True, blank=True, verbose_name=_("Slug"))
    category = models.ForeignKey(
        NewsCategory,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="news_items",
        verbose_name=_("Kategori"),
    )
    date = models.DateField(verbose_name=_("Tarih"))
    summary = models.TextField(blank=True, verbose_name=_("Özet"))
    content = models.TextField(blank=True, verbose_name=_("İçerik"))
    image = models.ImageField(
        upload_to=UniqueUploadTo("news/images/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        verbose_name=_("Görsel"),
    )
    is_featured = models.BooleanField(default=False, verbose_name=_("Öne Çıkan"))
    is_active = models.BooleanField(default=True, verbose_name=_("Aktif"))

    slug_source = "title"

    class Meta(SortableModel.Meta):
        verbose_name = _("Haber")
        verbose_name_plural = _("Haberler")

    def __str__(self):
        return self.title
