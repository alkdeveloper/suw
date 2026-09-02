from common.utils import UniqueUploadTo
from django.db import models
from django.utils.translation import gettext_lazy as _
from solo.models import SingletonModel
from common.models import SEOModel, SortableModel


class SiteSettings(SingletonModel, SEOModel):
    FONT_CHOICES = [
        ("dm_sans", "DM Sans"),
        ("krub", "Krub"),
        ("inter", "Inter"),
        ("manrope", "Manrope"),
        ("red_hat_display", "Red Hat Display"),
    ]

    # Tema
    font_family = models.CharField(
        max_length=50,
        choices=FONT_CHOICES,
        default="dm_sans",
        verbose_name=_("Font"),
    )

    # Genel
    logo = models.ImageField(upload_to=UniqueUploadTo("core/"), blank=True, verbose_name=_("Logo"))
    phone = models.CharField(max_length=20, blank=True, verbose_name=_("Telefon"))
    fax = models.CharField(max_length=30, blank=True, verbose_name=_("Faks"))
    email = models.EmailField(blank=True, verbose_name=_("E-posta"))
    address = models.TextField(blank=True, verbose_name=_("Adres"))
    latitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        blank=True,
        null=True,
        verbose_name=_("Enlem"),
    )
    longitude = models.DecimalField(
        max_digits=10,
        decimal_places=6,
        blank=True,
        null=True,
        verbose_name=_("Boylam"),
    )

    # Global footer üstü iletişim / konum bölümü
    contact_section_eyebrow = models.CharField(max_length=100, blank=True, verbose_name=_("İletişim Bölümü Eyebrow"))
    contact_section_title = models.CharField(max_length=200, blank=True, verbose_name=_("İletişim Bölümü Başlık"))
    contact_section_description = models.TextField(blank=True, verbose_name=_("İletişim Bölümü Açıklama"))
    google_maps_url = models.URLField(blank=True, verbose_name=_("Google Maps URL"))
    apple_maps_url = models.URLField(blank=True, verbose_name=_("Apple Maps URL"))
    yandex_maps_url = models.URLField(blank=True, verbose_name=_("Yandex Maps URL"))

    # Footer
    footer_title = models.CharField(max_length=200, blank=True, verbose_name=_("Footer Başlık"))
    footer_newsletter_title = models.CharField(max_length=200, blank=True, verbose_name=_("Bülten Başlık"))
    footer_newsletter_placeholder = models.CharField(max_length=200, blank=True, verbose_name=_("Bülten Placeholder"))
    footer_newsletter_consent_text = models.TextField(blank=True, verbose_name=_("Bülten Rıza Metni"))
    footer_newsletter_consent_link_text = models.CharField(max_length=200, blank=True, verbose_name=_("Bülten Rıza Link Metni"))
    footer_contact_title = models.CharField(max_length=100, blank=True, verbose_name=_("Footer İletişim Başlığı"))
    footer_navigation_title = models.CharField(max_length=100, blank=True, verbose_name=_("Footer Navigasyon Başlığı"))
    footer_social_title = models.CharField(max_length=100, blank=True, verbose_name=_("Footer Sosyal Başlığı"))
    footer_address_label = models.CharField(max_length=100, blank=True, verbose_name=_("Footer Adres Etiketi"))
    copyright_text = models.CharField(max_length=200, blank=True, verbose_name=_("Telif Hakkı"))

    # Sosyal medya
    instagram = models.URLField(blank=True, verbose_name="Instagram")
    linkedin = models.URLField(blank=True, verbose_name="LinkedIn")
    facebook = models.URLField(blank=True, verbose_name="Facebook")
    twitter = models.URLField(blank=True, verbose_name="Twitter/X")
    youtube = models.URLField(blank=True, verbose_name="YouTube")
    whatsapp = models.CharField(max_length=20, blank=True, verbose_name="WhatsApp")

    # ── Header copy (a11y) ──────────────────────────────────────────────────
    header_home_aria_label = models.CharField(max_length=200, blank=True, verbose_name=_("Header Ana Sayfa Aria Etiketi"))
    header_desktop_nav_aria_label = models.CharField(max_length=200, blank=True, verbose_name=_("Header Masaüstü Menü Aria Etiketi"))
    header_mobile_nav_aria_label = models.CharField(max_length=200, blank=True, verbose_name=_("Header Mobil Menü Aria Etiketi"))
    header_locale_button_aria_label_prefix = models.CharField(max_length=200, blank=True, verbose_name=_("Header Dil Butonu Aria Ön Ek"))
    header_mobile_menu_aria_label = models.CharField(max_length=200, blank=True, verbose_name=_("Header Mobil Menü Aç/Kapat Aria"))

    # ── Footer copy ─────────────────────────────────────────────────────────
    footer_home_aria_label = models.CharField(max_length=200, blank=True, verbose_name=_("Footer Ana Sayfa Aria Etiketi"))
    footer_back_to_top_aria_label = models.CharField(max_length=200, blank=True, verbose_name=_("Yukarı Çık Aria Etiketi"))
    footer_newsletter_submit_aria_label = models.CharField(max_length=200, blank=True, verbose_name=_("Bülten Gönder Aria Etiketi"))
    footer_newsletter_success_message = models.CharField(max_length=300, blank=True, verbose_name=_("Bülten Başarı Mesajı"))
    footer_newsletter_error_message = models.CharField(max_length=300, blank=True, verbose_name=_("Bülten Hata Mesajı"))
    footer_contact_label_phone = models.CharField(max_length=100, blank=True, verbose_name=_("Footer İletişim Telefon Etiketi"))
    footer_contact_label_fax = models.CharField(max_length=100, blank=True, verbose_name=_("Footer İletişim Faks Etiketi"))
    footer_contact_label_email = models.CharField(max_length=100, blank=True, verbose_name=_("Footer İletişim E-posta Etiketi"))
    footer_contact_label_whatsapp = models.CharField(max_length=100, blank=True, verbose_name=_("Footer İletişim WhatsApp Etiketi"))
    footer_social_label_instagram = models.CharField(max_length=100, blank=True, verbose_name=_("Instagram Sosyal Etiket"))
    footer_social_label_linkedin = models.CharField(max_length=100, blank=True, verbose_name=_("LinkedIn Sosyal Etiket"))
    footer_social_label_facebook = models.CharField(max_length=100, blank=True, verbose_name=_("Facebook Sosyal Etiket"))
    footer_social_label_x = models.CharField(max_length=100, blank=True, verbose_name=_("X Sosyal Etiket"))
    footer_social_label_youtube = models.CharField(max_length=100, blank=True, verbose_name=_("YouTube Sosyal Etiket"))

    # ── Not found copy ──────────────────────────────────────────────────────
    not_found_title = models.CharField(max_length=200, blank=True, verbose_name=_("404 Başlık"))
    not_found_description = models.TextField(blank=True, verbose_name=_("404 Açıklama"))
    not_found_primary_button_text = models.CharField(max_length=100, blank=True, verbose_name=_("404 Birincil Buton Metni"))
    not_found_secondary_button_text = models.CharField(max_length=100, blank=True, verbose_name=_("404 İkincil Buton Metni"))

    class Meta:
        verbose_name = _("Site Ayarları")

    def __str__(self):
        return "Site Ayarları"


class SiteContactSettings(SiteSettings):
    class Meta:
        proxy = True
        verbose_name = _("İletişim ve Haritalar")
        verbose_name_plural = _("İletişim ve Haritalar")


class NavigationItem(SortableModel):
    HEADER = "header"
    FOOTER = "footer"
    LOCATION_CHOICES = [
        (HEADER, _("Üst Menü")),
        (FOOTER, _("Alt Menü")),
    ]

    site_settings = models.ForeignKey(
        SiteSettings,
        on_delete=models.CASCADE,
        related_name="navigation_items",
        verbose_name=_("Site Ayarları"),
    )
    location = models.CharField(
        max_length=10,
        choices=LOCATION_CHOICES,
        default=HEADER,
        verbose_name=_("Konum"),
    )
    label = models.CharField(max_length=100, verbose_name=_("Etiket"))
    url = models.CharField(max_length=200, verbose_name=_("URL"))
    is_external = models.BooleanField(default=False, verbose_name=_("Dış Bağlantı"))

    class Meta(SortableModel.Meta):
        verbose_name = _("Navigasyon Öğesi")
        verbose_name_plural = _("Navigasyon Öğeleri")

    def __str__(self):
        return f"{self.get_location_display()} — {self.label}"


class NewsletterSubscriber(models.Model):
    email = models.EmailField(unique=True, verbose_name=_("E-posta"))
    is_active = models.BooleanField(default=True, verbose_name=_("Aktif"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Kayıt Tarihi"))

    class Meta:
        verbose_name = _("Bülten Abonesi")
        verbose_name_plural = _("Bülten Aboneleri")
        ordering = ["-created_at"]

    def __str__(self):
        return self.email
