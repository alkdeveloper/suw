from common.utils import UniqueUploadTo
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.translation import gettext_lazy as _
from django.core.validators import FileExtensionValidator
from solo.models import SingletonModel
from common.models import SEOModel, SortableModel, AutoSlugMixin


# Markalar (listeleme) sayfası
class BrandsPage(SingletonModel, SEOModel):
    hero_title = models.CharField(max_length=200, blank=True, verbose_name=_("Hero Başlık"))
    hero_subtitle = models.CharField(max_length=300, blank=True, verbose_name=_("Hero Alt Başlık"))

    video_file = models.FileField(
        upload_to=UniqueUploadTo("brands/video/"),
        validators=[FileExtensionValidator(["mp4", "webm"])],
        blank=True,
        verbose_name=_("Video Dosyası (MP4)"),
    )
    video_image = models.ImageField(
        upload_to=UniqueUploadTo("brands/video/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True,
        verbose_name=_("Video Arka Plan Görseli"),
    )

    intro_label = models.CharField(max_length=100, blank=True, verbose_name=_("Giriş Etiket"))
    intro_text = models.TextField(blank=True, verbose_name=_("Giriş Metni"))

    ticker_description = models.TextField(blank=True, verbose_name=_("Ticker Alt Açıklama"))

    use_custom_timeline = models.BooleanField(
        default=False,
        verbose_name=_("Özel Zaman Çizelgesi Kullan"),
    )
    milestones_title = models.CharField(max_length=200, blank=True, verbose_name=_("Milestones Başlık"))
    milestones_button_text = models.CharField(max_length=100, blank=True, verbose_name=_("Milestones Buton Metni"))
    milestones_button_url = models.CharField(max_length=200, blank=True, verbose_name=_("Milestones Buton Linki"))
    milestones_year_suffix = models.CharField(max_length=50, blank=True, verbose_name=_("Yıl Suffix"))

    companies_title = models.CharField(max_length=200, blank=True, verbose_name=_("Şirketler Başlık"))
    companies_description = models.TextField(blank=True, verbose_name=_("Şirketler Açıklama"))

    global_title = models.CharField(max_length=200, blank=True, verbose_name=_("Global Başlık"))
    global_description = models.TextField(blank=True, verbose_name=_("Global Açıklama"))
    global_map_image = models.ImageField(
        upload_to=UniqueUploadTo("brands/global/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "svg"])],
        blank=True,
        verbose_name=_("Harita Görseli"),
    )
    countries_text = models.TextField(blank=True, verbose_name=_("Ülkeler Metni"))

    class Meta:
        verbose_name = _("Markalar Sayfa Ayarları")

    def __str__(self):
        return "Markalar Sayfa Ayarları"


# ---------------------------------------------------------------------------
# Tüketici markaları (external link)
# ---------------------------------------------------------------------------
class Brand(AutoSlugMixin, SortableModel, SEOModel):
    name = models.CharField(max_length=200, verbose_name=_("Marka Adı"))
    slug = models.SlugField(max_length=200, unique=True, blank=True, verbose_name=_("Slug"))
    subtitle = models.CharField(max_length=200, blank=True, verbose_name=_("Alt Başlık"))
    logo = models.ImageField(
        upload_to=UniqueUploadTo("brands/logos/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "svg"])],
        verbose_name=_("Logo"),
    )
    card_image = models.ImageField(
        upload_to=UniqueUploadTo("brands/cards/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True,
        verbose_name=_("Kart Görseli"),
    )
    description = models.TextField(blank=True, verbose_name=_("Açıklama"))
    show_external_link = models.BooleanField(
        default=True,
        verbose_name=_("Dış Bağlantıyı Göster"),
    )
    url = models.URLField(blank=True, verbose_name=_("Web Sitesi (External)"))
    cta_label = models.CharField(max_length=100, blank=True, verbose_name=_("Hover Buton Metni"))
    is_active = models.BooleanField(default=True, verbose_name=_("Aktif"))

    slug_source = "name"

    class Meta(SortableModel.Meta):
        verbose_name = _("Marka")
        verbose_name_plural = _("Markalar")

    def __str__(self):
        return self.name


# ---------------------------------------------------------------------------
# Grup şirketleri (kart listesi)
# ---------------------------------------------------------------------------
class GroupCompany(AutoSlugMixin, SortableModel):
    DETAIL_KEY_CHOICES = [
        ("akal", "AKAL"),
        ("alkan-promosyon", "ALKAN Promosyon"),
        ("akal-gmbh", "AKAL GmbH"),
        ("suw", "SUW"),
    ]

    name = models.CharField(max_length=200, verbose_name=_("Şirket Adı"))
    slug = models.SlugField(max_length=200, unique=True, blank=True, verbose_name=_("Slug"))
    logo = models.ImageField(
        upload_to=UniqueUploadTo("brands/companies/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "svg"])],
        verbose_name=_("Logo"),
    )
    description = models.TextField(blank=True, verbose_name=_("Açıklama"))
    founded_year = models.PositiveSmallIntegerField(null=True, blank=True, verbose_name=_("Kuruluş Yılı"))
    is_active = models.BooleanField(default=True, verbose_name=_("Aktif"))
    detail_key = models.CharField(
        max_length=32,
        blank=True,
        choices=DETAIL_KEY_CHOICES,
        verbose_name=_("Detay Sayfası"),
        help_text=_("Seçilirse kartın detay sayfasına yönlendirilir."),
    )

    slug_source = "name"

    class Meta(SortableModel.Meta):
        verbose_name = _("Grup Şirketi")
        verbose_name_plural = _("Grup Şirketleri")

    def __str__(self):
        return self.name


class BrandMilestone(SortableModel):
    year = models.CharField(max_length=10, verbose_name=_("Yıl"))
    description = models.TextField(verbose_name=_("Açıklama"))

    class Meta(SortableModel.Meta):
        verbose_name = _("Tarihçe Öğesi")
        verbose_name_plural = _("Tarihçe")

    def __str__(self):
        return self.year


class GlobalOperationLocation(SortableModel):
    PAGE_SCOPE_BRANDS = "brands"
    PAGE_SCOPE_COMPANIES = "companies"
    PAGE_SCOPE_CHOICES = [
        (PAGE_SCOPE_BRANDS, _("Markalar Sayfası")),
        (PAGE_SCOPE_COMPANIES, _("Şirketler Sayfası")),
    ]

    page_scope = models.CharField(
        max_length=16,
        choices=PAGE_SCOPE_CHOICES,
        default=PAGE_SCOPE_BRANDS,
        verbose_name=_("Kullanıldığı Sayfa"),
        help_text=_(
            "Bu marker hangi sayfanın haritasında görünecek? Markalar ve Şirketler "
            "sayfaları birbirinden bağımsız listeler kullanır; aynı ülkeyi her iki "
            "sayfada da göstermek isterseniz iki ayrı kayıt oluşturmanız gerekir."
        ),
    )
    country_name = models.CharField(max_length=100, verbose_name=_("Ülke Adı"))
    latitude = models.DecimalField(
        max_digits=9, decimal_places=6, verbose_name=_("Enlem"),
        help_text=_("Örn. 50.4501 (Kiev). google.com/maps üzerinden sağ tık → koordinatı kopyala."),
    )
    longitude = models.DecimalField(
        max_digits=9, decimal_places=6, verbose_name=_("Boylam"),
        help_text=_("Örn. 30.5234 (Kiev). google.com/maps üzerinden sağ tık → koordinatı kopyala."),
    )

    class Meta(SortableModel.Meta):
        verbose_name = _("Operasyon Lokasyonu")
        verbose_name_plural = _("Operasyon Lokasyonları")

    def __str__(self):
        return self.country_name


class BrandsOperationLocation(GlobalOperationLocation):
    """Markalar sayfasına ait operasyon lokasyonları (proxy)."""

    class Meta:
        proxy = True
        verbose_name = _("Operasyon Lokasyonu · Markalar")
        verbose_name_plural = _("Operasyon Lokasyonları · Markalar")


class CompaniesOperationLocation(GlobalOperationLocation):
    """Şirketler sayfasına ait operasyon lokasyonları (proxy)."""

    class Meta:
        proxy = True
        verbose_name = _("Operasyon Lokasyonu · Şirketler")
        verbose_name_plural = _("Operasyon Lokasyonları · Şirketler")


# ---------------------------------------------------------------------------
# Şirketler listesi sayfası (bağımsız singleton)
# ---------------------------------------------------------------------------
class CompaniesPage(SingletonModel, SEOModel):
    companies_title = models.CharField(max_length=200, blank=True, verbose_name=_("Sayfa Başlığı / Hero Başlık"))

    video_file = models.FileField(
        upload_to=UniqueUploadTo("companies/video/"),
        validators=[FileExtensionValidator(["mp4", "webm"])],
        blank=True,
        verbose_name=_("Video Dosyası (MP4)"),
    )
    video_image = models.ImageField(
        upload_to=UniqueUploadTo("companies/video/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True,
        verbose_name=_("Video Arka Plan Görseli"),
    )

    intro_label = models.CharField(max_length=100, blank=True, verbose_name=_("Giriş Etiket"))
    intro_text = models.TextField(blank=True, verbose_name=_("Giriş Metni"))

    ticker_description = models.TextField(blank=True, verbose_name=_("Ticker Alt Açıklama"))

    milestones_title = models.CharField(max_length=200, blank=True, verbose_name=_("Tarihçe Başlık"))
    milestones_button_text = models.CharField(max_length=100, blank=True, verbose_name=_("Tarihçe Buton Metni"))
    milestones_button_url = models.CharField(max_length=200, blank=True, verbose_name=_("Tarihçe Buton Linki"))
    milestones_year_suffix = models.CharField(max_length=50, blank=True, verbose_name=_("Yıl Suffix"))

    global_title = models.CharField(max_length=200, blank=True, verbose_name=_("Global Başlık"))
    global_description = models.TextField(blank=True, verbose_name=_("Global Açıklama"))
    global_map_image = models.ImageField(
        upload_to=UniqueUploadTo("companies/global/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "svg"])],
        blank=True,
        verbose_name=_("Harita Görseli"),
    )
    countries_text = models.TextField(blank=True, verbose_name=_("Ülkeler Metni"))

    class Meta:
        verbose_name = _("Şirketler Sayfa Ayarları")

    def __str__(self):
        return "Şirketler Sayfa Ayarları"


# ---------------------------------------------------------------------------
# Şirket Detay Sayfaları — 4 ayrı Singleton, her biri tasarımına göre
# ---------------------------------------------------------------------------
class AkalPage(SingletonModel, SEOModel):
    """AKAL detay: alt marka kartları + global operasyon + alt paragraf."""

    hero_title = models.CharField(max_length=200, blank=True, verbose_name=_("Hero Başlık"))
    hero_image = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True, verbose_name=_("Hero Görseli"),
    )
    logo = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "svg"])],
        blank=True, verbose_name=_("Logo"),
    )
    subtitle = models.CharField(max_length=200, blank=True, verbose_name=_("Alt Başlık"))
    description = models.TextField(blank=True, verbose_name=_("Açıklama / Giriş Metni"))

    cta_label = models.CharField(max_length=100, blank=True, verbose_name=_("Buton Metni"))
    cta_url = models.URLField(blank=True, verbose_name=_("Buton Linki"))

    contact_name = models.CharField(max_length=200, blank=True, verbose_name=_("İletişim Kişisi"))
    contact_email = models.EmailField(blank=True, verbose_name=_("İletişim E-posta"))
    contact_website = models.URLField(blank=True, verbose_name=_("Web Sitesi"))

    sub_brands_title = models.CharField(max_length=200, blank=True, verbose_name=_("Alt Marka Başlığı"))
    sub_brands = models.ManyToManyField(
        Brand, blank=True, related_name="akal_page_items", verbose_name=_("Alt Markalar"),
    )
    bottom_paragraph = models.TextField(blank=True, verbose_name=_("Alt Markalar Altı Paragraf"))

    global_block_title = models.CharField(max_length=200, blank=True, verbose_name=_("Global Blok Başlık"))
    global_block_description = models.TextField(blank=True, verbose_name=_("Global Blok Açıklama"))

    class Meta:
        verbose_name = _("Şirket Detayı · AKAL")

    def __str__(self):
        return "Şirket Detayı · AKAL"


class AlkanPage(SingletonModel, SEOModel):
    """ALKAN Promosyon: tek öne çıkan görsel + iletişim + alt paragraf."""

    hero_title = models.CharField(max_length=200, blank=True, verbose_name=_("Hero Başlık"))
    hero_image = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True, verbose_name=_("Hero Görseli"),
    )
    logo = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "svg"])],
        blank=True, verbose_name=_("Logo"),
    )
    subtitle = models.CharField(max_length=200, blank=True, verbose_name=_("Alt Başlık"))
    description = models.TextField(blank=True, verbose_name=_("Açıklama / Giriş Metni"))

    cta_label = models.CharField(max_length=100, blank=True, verbose_name=_("Buton Metni"))
    cta_url = models.URLField(blank=True, verbose_name=_("Buton Linki"))

    feature_image = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True, verbose_name=_("Öne Çıkan Görsel"),
    )
    bottom_paragraph = models.TextField(blank=True, verbose_name=_("Alt Paragraf"))

    contact_name = models.CharField(max_length=200, blank=True, verbose_name=_("İletişim Kişisi"))
    contact_email = models.EmailField(blank=True, verbose_name=_("İletişim E-posta"))
    contact_website = models.URLField(blank=True, verbose_name=_("Web Sitesi"))

    class Meta:
        verbose_name = _("Şirket Detayı · ALKAN")

    def __str__(self):
        return "Şirket Detayı · ALKAN"


class AkalGmbhPage(SingletonModel, SEOModel):
    """AKAL GmbH: ikincil logo (Nordbron) + 2 öne çıkan görsel."""

    hero_title = models.CharField(max_length=200, blank=True, verbose_name=_("Hero Başlık"))
    hero_image = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True, verbose_name=_("Hero Görseli"),
    )
    logo = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "svg"])],
        blank=True, verbose_name=_("Logo"),
    )
    secondary_logo = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "svg"])],
        blank=True, verbose_name=_("İkincil Logo (Nordbron)"),
    )
    subtitle = models.CharField(max_length=200, blank=True, verbose_name=_("Alt Başlık"))
    description = models.TextField(blank=True, verbose_name=_("Açıklama / Giriş Metni"))

    cta_label = models.CharField(max_length=100, blank=True, verbose_name=_("Buton Metni"))
    cta_url = models.URLField(blank=True, verbose_name=_("Buton Linki"))

    feature_image_1 = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True, verbose_name=_("Öne Çıkan Görsel 1"),
    )
    feature_image_2 = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True, verbose_name=_("Öne Çıkan Görsel 2"),
    )

    contact_name = models.CharField(max_length=200, blank=True, verbose_name=_("İletişim Kişisi"))
    contact_email = models.EmailField(blank=True, verbose_name=_("İletişim E-posta"))
    contact_website = models.URLField(blank=True, verbose_name=_("Web Sitesi"))

    class Meta:
        verbose_name = _("Şirket Detayı · AKAL GmbH")

    def __str__(self):
        return "Şirket Detayı · AKAL GmbH"


class SuwPage(SingletonModel, SEOModel):
    """SUW: 2 öne çıkan görsel + uzun alt metin + iletişim."""

    hero_title = models.CharField(max_length=200, blank=True, verbose_name=_("Hero Başlık"))
    hero_image = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True, verbose_name=_("Hero Görseli"),
    )
    logo = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "svg"])],
        blank=True, verbose_name=_("Logo"),
    )
    subtitle = models.CharField(max_length=200, blank=True, verbose_name=_("Alt Başlık"))
    description = models.TextField(blank=True, verbose_name=_("Açıklama / Giriş Metni"))

    cta_label = models.CharField(max_length=100, blank=True, verbose_name=_("Buton Metni"))
    cta_url = models.URLField(blank=True, verbose_name=_("Buton Linki"))

    feature_image_1 = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True, verbose_name=_("Öne Çıkan Görsel 1"),
    )
    feature_image_2 = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True, verbose_name=_("Öne Çıkan Görsel 2"),
    )
    bottom_paragraph = models.TextField(blank=True, verbose_name=_("Alt Paragraf"))

    contact_name = models.CharField(max_length=200, blank=True, verbose_name=_("İletişim Kişisi"))
    contact_email = models.EmailField(blank=True, verbose_name=_("İletişim E-posta"))
    contact_website = models.URLField(blank=True, verbose_name=_("Web Sitesi"))

    class Meta:
        verbose_name = _("Şirket Detayı · SUW")

    def __str__(self):
        return "Şirket Detayı · SUW"


# ---------------------------------------------------------------------------
# Dinamik Şirket Detay Sayfası — GroupCompany ile birebir ilişkili
# ---------------------------------------------------------------------------
class CompanyDetailPage(SEOModel):
    """
    Her GroupCompany için otomatik oluşturulan detay sayfası.
    is_active=True olduğunda şirket kartı tıklanabilir olur.
    """

    company = models.OneToOneField(
        GroupCompany,
        on_delete=models.CASCADE,
        related_name="detail_page",
        verbose_name=_("Şirket"),
    )
    is_active = models.BooleanField(default=False, verbose_name=_("Detay Sayfası Aktif"))

    hero_title = models.CharField(max_length=200, blank=True, verbose_name=_("Hero Başlık"))
    hero_image = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True, verbose_name=_("Hero Görseli"),
    )
    logo = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "svg"])],
        blank=True, verbose_name=_("Logo"),
    )
    secondary_logo = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "svg"])],
        blank=True, verbose_name=_("İkincil Logo"),
    )
    subtitle = models.CharField(max_length=200, blank=True, verbose_name=_("Alt Başlık"))
    description = models.TextField(blank=True, verbose_name=_("Açıklama / Giriş Metni"))

    cta_label = models.CharField(max_length=100, blank=True, verbose_name=_("Buton Metni"))
    cta_url = models.URLField(blank=True, verbose_name=_("Buton Linki"))

    feature_image_1 = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True, verbose_name=_("Öne Çıkan Görsel 1"),
    )
    feature_image_2 = models.ImageField(
        upload_to=UniqueUploadTo("brands/company-detail/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True, verbose_name=_("Öne Çıkan Görsel 2"),
    )
    bottom_paragraph = models.TextField(blank=True, verbose_name=_("Alt Paragraf"))

    sub_brands_title = models.CharField(max_length=200, blank=True, verbose_name=_("Alt Marka Başlığı"))
    sub_brands = models.ManyToManyField(
        Brand,
        blank=True,
        related_name="company_detail_pages",
        verbose_name=_("Alt Markalar"),
    )

    has_global_block = models.BooleanField(default=False, verbose_name=_("Global Operasyon Bloğu Göster"))
    global_block_title = models.CharField(max_length=200, blank=True, verbose_name=_("Global Blok Başlık"))
    global_block_description = models.TextField(blank=True, verbose_name=_("Global Blok Açıklama"))

    contact_name = models.CharField(max_length=200, blank=True, verbose_name=_("İletişim Kişisi"))
    contact_email = models.EmailField(blank=True, verbose_name=_("İletişim E-posta"))
    contact_website = models.URLField(blank=True, verbose_name=_("Web Sitesi"))

    class Meta:
        verbose_name = _("Şirket Detay Sayfası")
        verbose_name_plural = _("Şirket Detay Sayfaları")

    def __str__(self):
        return f"{self.company.name} · Detay Sayfası"


# ---------------------------------------------------------------------------
# Sinyal: GroupCompany kaydedildiğinde detay sayfasını otomatik oluştur
# ---------------------------------------------------------------------------
@receiver(post_save, sender=GroupCompany)
def auto_create_company_detail_page(sender, instance, created, **kwargs):
    if created:
        CompanyDetailPage.objects.get_or_create(company=instance)

