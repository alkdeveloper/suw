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
    hero_image_mobile = models.ImageField(
        upload_to=UniqueUploadTo("home/hero/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True,
        verbose_name=_("Hero Mobil Görsel"),
    )

    # Ana sayfa ürün kategorileri bölümü üst içeriği
    product_categories_eyebrow = models.CharField(
        max_length=100,
        blank=True,
        verbose_name=_("Ürün Kategorileri Eyebrow"),
    )
    product_categories_title = models.CharField(
        max_length=200,
        blank=True,
        verbose_name=_("Ürün Kategorileri Başlık"),
    )
    product_categories_description = models.TextField(
        blank=True,
        verbose_name=_("Ürün Kategorileri Açıklama"),
    )

    # Work Essentials bölümü üst içeriği
    work_essentials_eyebrow = models.CharField(max_length=100, blank=True, verbose_name=_("Work Essentials Eyebrow"))
    work_essentials_title = models.CharField(max_length=200, blank=True, verbose_name=_("Work Essentials Başlık"))
    work_essentials_description = models.TextField(blank=True, verbose_name=_("Work Essentials Açıklama"))
    work_essentials_cta_text = models.CharField(max_length=100, blank=True, verbose_name=_("Work Essentials CTA Metni"))
    work_essentials_cta_link = models.CharField(max_length=500, blank=True, verbose_name=_("Work Essentials CTA Linki"))

    # Teknik Performans bölümü
    technical_performance_eyebrow = models.CharField(max_length=100, blank=True, verbose_name=_("Teknik Performans Eyebrow"))
    technical_performance_title = models.CharField(max_length=250, blank=True, verbose_name=_("Teknik Performans Başlık"))
    technical_performance_description = models.TextField(blank=True, verbose_name=_("Teknik Performans Açıklama"))
    technical_performance_image = models.ImageField(
        upload_to=UniqueUploadTo("home/technical-performance/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])],
        blank=True,
        verbose_name=_("Teknik Performans Görseli"),
    )
    technical_performance_cta_text = models.CharField(max_length=100, blank=True, verbose_name=_("Teknik Performans CTA Metni"))
    technical_performance_cta_link = models.CharField(max_length=500, blank=True, verbose_name=_("Teknik Performans CTA Linki"))

    # Kurumsal İş Giyimi bölümü
    corporate_workwear_eyebrow = models.CharField(max_length=100, blank=True, verbose_name=_("Kurumsal İş Giyimi Eyebrow"))
    corporate_workwear_title = models.CharField(max_length=250, blank=True, verbose_name=_("Kurumsal İş Giyimi Başlık"))
    corporate_workwear_description = models.TextField(blank=True, verbose_name=_("Kurumsal İş Giyimi Açıklama"))
    corporate_workwear_personnel_title = models.CharField(max_length=160, blank=True, verbose_name=_("Personel Kıyafetleri Başlık"))
    corporate_workwear_personnel_description = models.TextField(blank=True, verbose_name=_("Personel Kıyafetleri Açıklama"))
    corporate_workwear_personnel_image = models.ImageField(upload_to=UniqueUploadTo("home/corporate-workwear/"), validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])], blank=True, verbose_name=_("Personel Kıyafetleri Görseli"))
    corporate_workwear_promo_title = models.CharField(max_length=160, blank=True, verbose_name=_("Promosyon Tekstil Başlık"))
    corporate_workwear_promo_description = models.TextField(blank=True, verbose_name=_("Promosyon Tekstil Açıklama"))
    corporate_workwear_promo_image = models.ImageField(upload_to=UniqueUploadTo("home/corporate-workwear/"), validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])], blank=True, verbose_name=_("Promosyon Tekstil Görseli"))
    corporate_workwear_cta_text = models.CharField(max_length=100, blank=True, verbose_name=_("Kurumsal İş Giyimi CTA Metni"))
    corporate_workwear_cta_link = models.CharField(max_length=500, blank=True, verbose_name=_("Kurumsal İş Giyimi CTA Linki"))

    # Fikirden Teslimata süreç bölümü
    process_eyebrow = models.CharField(max_length=100, blank=True, verbose_name=_("Süreç Eyebrow"))
    process_title = models.CharField(max_length=250, blank=True, verbose_name=_("Süreç Başlık"))
    process_description = models.TextField(blank=True, verbose_name=_("Süreç Açıklama"))

    # Üretim Bilgileri bölümü üst içeriği
    production_insights_eyebrow = models.CharField(max_length=100, blank=True, verbose_name=_("Üretim Bilgileri Eyebrow"))
    production_insights_title = models.CharField(max_length=250, blank=True, verbose_name=_("Üretim Bilgileri Başlık"))
    production_insights_description = models.TextField(blank=True, verbose_name=_("Üretim Bilgileri Açıklama"))

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


class HomeProductCategoriesSettings(HomePage):
    class Meta:
        proxy = True
        verbose_name = _("Ürün Kategorileri Bölümü")
        verbose_name_plural = _("Ürün Kategorileri Bölümü")


class HomeWorkEssentialsSettings(HomePage):
    class Meta:
        proxy = True
        verbose_name = _("Work Essentials")
        verbose_name_plural = _("Work Essentials")


class HomeProductionInsightsSettings(HomePage):
    class Meta:
        proxy = True
        verbose_name = _("Üretim Bilgileri")
        verbose_name_plural = _("Üretim Bilgileri")


class HomeTechnicalPerformanceSettings(HomePage):
    class Meta:
        proxy = True
        verbose_name = _("Teknik Performans")
        verbose_name_plural = _("Teknik Performans")


class HomeCorporateWorkwearSettings(HomePage):
    class Meta:
        proxy = True
        verbose_name = _("Kurumsal İş Giyimi")
        verbose_name_plural = _("Kurumsal İş Giyimi")


class HomeProcessSettings(HomePage):
    class Meta:
        proxy = True
        verbose_name = _("Fikirden Teslimata")
        verbose_name_plural = _("Fikirden Teslimata")


class HomeProcessStep(models.Model):
    home_page = models.ForeignKey(HomePage, on_delete=models.CASCADE, related_name="process_steps", verbose_name=_("Ana Sayfa"))
    title_tr = models.CharField(max_length=160, blank=True, verbose_name=_("Başlık TR"))
    title_en = models.CharField(max_length=160, blank=True, verbose_name=_("Başlık EN"))
    description_tr = models.TextField(blank=True, verbose_name=_("Açıklama TR"))
    description_en = models.TextField(blank=True, verbose_name=_("Açıklama EN"))
    sort_order = models.PositiveIntegerField(default=0, verbose_name=_("Sıra"))
    is_active = models.BooleanField(default=True, verbose_name=_("Aktif"))

    class Meta:
        ordering = ("sort_order", "id")
        verbose_name = _("Süreç Adımı")
        verbose_name_plural = _("Süreç Adımları")

    def __str__(self):
        return self.title_tr or self.title_en or f"Süreç Adımı #{self.pk}"


class TechnicalPerformanceItem(models.Model):
    home_page = models.ForeignKey(HomePage, on_delete=models.CASCADE, related_name="technical_performance_items", verbose_name=_("Ana Sayfa"))
    title_tr = models.CharField(max_length=160, blank=True, verbose_name=_("Başlık TR"))
    title_en = models.CharField(max_length=160, blank=True, verbose_name=_("Başlık EN"))
    description_tr = models.TextField(blank=True, verbose_name=_("Açıklama TR"))
    description_en = models.TextField(blank=True, verbose_name=_("Açıklama EN"))
    sort_order = models.PositiveIntegerField(default=0, verbose_name=_("Sıra"))
    is_active = models.BooleanField(default=True, verbose_name=_("Aktif"))

    class Meta:
        ordering = ("sort_order", "id")
        verbose_name = _("Teknik Özellik")
        verbose_name_plural = _("Teknik Özellikler")

    def __str__(self):
        return self.title_tr or self.title_en or f"Teknik Özellik #{self.pk}"


class WorkEssentialItem(models.Model):
    home_page = models.ForeignKey(
        HomePage,
        on_delete=models.CASCADE,
        related_name="work_essentials_items",
        verbose_name=_("Ana Sayfa"),
    )
    image = models.ImageField(
        upload_to=UniqueUploadTo("home/work-essentials/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])],
        verbose_name=_("Görsel"),
    )
    alt_tr = models.CharField(max_length=200, blank=True, verbose_name=_("Alt TR"))
    alt_en = models.CharField(max_length=200, blank=True, verbose_name=_("Alt EN"))
    link = models.CharField(max_length=500, blank=True, verbose_name=_("Link"))
    sort_order = models.PositiveIntegerField(default=0, verbose_name=_("Sıra"))
    is_active = models.BooleanField(default=True, verbose_name=_("Aktif"))

    class Meta:
        ordering = ("sort_order", "id")
        verbose_name = _("Work Essentials Görseli")
        verbose_name_plural = _("Work Essentials Görselleri")

    def __str__(self):
        return self.alt_tr or self.alt_en or f"Work Essentials #{self.pk}"


class ProductionInsightItem(models.Model):
    home_page = models.ForeignKey(HomePage, on_delete=models.CASCADE, related_name="production_insight_items", verbose_name=_("Ana Sayfa"))
    image = models.ImageField(
        upload_to=UniqueUploadTo("home/production-insights/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])],
        blank=True,
        verbose_name=_("Görsel"),
    )
    title_tr = models.CharField(max_length=160, blank=True, verbose_name=_("Başlık TR"))
    title_en = models.CharField(max_length=160, blank=True, verbose_name=_("Başlık EN"))
    short_description_tr = models.TextField(blank=True, verbose_name=_("Kısa Açıklama TR"))
    short_description_en = models.TextField(blank=True, verbose_name=_("Kısa Açıklama EN"))
    detail_text_tr = models.TextField(blank=True, verbose_name=_("Detay Metni TR"))
    detail_text_en = models.TextField(blank=True, verbose_name=_("Detay Metni EN"))
    sort_order = models.PositiveIntegerField(default=0, verbose_name=_("Sıra"))
    is_active = models.BooleanField(default=True, verbose_name=_("Aktif"))

    class Meta:
        ordering = ("sort_order", "id")
        verbose_name = _("Üretim Bilgisi Kartı")
        verbose_name_plural = _("Üretim Bilgisi Kartları")

    def __str__(self):
        return self.title_tr or self.title_en or f"Üretim Bilgisi #{self.pk}"


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



