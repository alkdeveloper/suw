from common.utils import UniqueUploadTo
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import FileExtensionValidator
from solo.models import SingletonModel
from common.models import SEOModel


class ContactPage(SingletonModel, SEOModel):

    # Harita
    map_embed_url = models.URLField(max_length=500, blank=True, verbose_name=_("Google Maps Embed URL"))

    # Neredeyiz kartı
    info_title = models.CharField(max_length=200, blank=True, verbose_name=_("Bilgi Başlığı"))
    info_description = models.TextField(blank=True, verbose_name=_("Bilgi Açıklaması"))
    info_image = models.ImageField(
        upload_to=UniqueUploadTo("contact/"),
        blank=True,
        null=True,
        verbose_name=_("Kart Görseli"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])],
    )
    phone = models.CharField(max_length=30, blank=True, verbose_name=_("Telefon"))
    email = models.EmailField(blank=True, verbose_name=_("E-posta"))
    address = models.TextField(blank=True, verbose_name=_("Adres"))

        # Form
    form_title = models.CharField(
        max_length=200,
        blank=True,
        verbose_name=_("Form Başlığı")
    )

    kvkk_text = models.TextField(
        blank=True,
        verbose_name=_("KVKK Onay Metni")
    )

    # Form Hero Copy
    form_eyebrow = models.CharField(
        max_length=100,
        blank=True,
        verbose_name=_("Form Üst Etiket")
    )

    form_left_title = models.CharField(
        max_length=200,
        blank=True,
        verbose_name=_("Form Sol Başlık")
    )

    form_left_description = models.TextField(
        blank=True,
        verbose_name=_("Form Sol Açıklama")
    )

    form_right_eyebrow = models.CharField(
        max_length=100,
        blank=True,
        verbose_name=_("Form Sağ Üst Etiket")
    )

    form_right_title = models.CharField(
        max_length=200,
        blank=True,
        verbose_name=_("Form Sağ Başlık")
    )


    # Form copy
    form_submit_label = models.CharField(
        max_length=100,
        blank=True,
        verbose_name=_("Form Gönder Butonu")
    )

    form_submitting_label = models.CharField(
        max_length=100,
        blank=True,
        verbose_name=_("Form Gönderiliyor Metni")
    )

    form_privacy_link_label = models.CharField(
        max_length=100,
        blank=True,
        verbose_name=_("Gizlilik Linki Metni")
    )

    form_feedback_success_message = models.CharField(
        max_length=300,
        blank=True,
        verbose_name=_("Form Başarı Mesajı")
    )

    form_feedback_error_message = models.CharField(
        max_length=300,
        blank=True,
        verbose_name=_("Form Hata Mesajı")
    )
    # ── Form copy ────────────────────────────────────────────────────────────
    form_submit_label = models.CharField(max_length=100, blank=True, verbose_name=_("Form Gönder Butonu"))
    form_submitting_label = models.CharField(max_length=100, blank=True, verbose_name=_("Form Gönderiliyor Metni"))
    form_privacy_link_label = models.CharField(max_length=100, blank=True, verbose_name=_("Gizlilik Linki Metni"))
    form_feedback_success_message = models.CharField(max_length=300, blank=True, verbose_name=_("Form Başarı Mesajı"))
    form_feedback_error_message = models.CharField(max_length=300, blank=True, verbose_name=_("Form Hata Mesajı"))
    # Alan etiketleri
    form_field_first_name = models.CharField(max_length=100, blank=True, verbose_name=_("Ad Etiketi"))
    form_field_last_name = models.CharField(max_length=100, blank=True, verbose_name=_("Soyad Etiketi"))
    form_field_email = models.CharField(max_length=100, blank=True, verbose_name=_("E-posta Etiketi"))
    form_field_phone = models.CharField(max_length=100, blank=True, verbose_name=_("Telefon Etiketi"))
    form_field_subject = models.CharField(max_length=100, blank=True, verbose_name=_("Konu Etiketi"))
    form_field_message = models.CharField(max_length=100, blank=True, verbose_name=_("Mesaj Etiketi"))
    # Placeholder'lar
    form_placeholder_first_name = models.CharField(max_length=100, blank=True, verbose_name=_("Ad Placeholder"))
    form_placeholder_last_name = models.CharField(max_length=100, blank=True, verbose_name=_("Soyad Placeholder"))
    form_placeholder_email = models.CharField(max_length=100, blank=True, verbose_name=_("E-posta Placeholder"))
    form_placeholder_phone = models.CharField(max_length=100, blank=True, verbose_name=_("Telefon Placeholder"))
    form_placeholder_subject = models.CharField(max_length=100, blank=True, verbose_name=_("Konu Placeholder"))
    form_placeholder_message = models.CharField(max_length=100, blank=True, verbose_name=_("Mesaj Placeholder"))

    # Bülten bölümü
    newsletter_title = models.CharField(max_length=200, blank=True, verbose_name=_("Bülten Başlığı"))
    newsletter_placeholder = models.CharField(max_length=100, blank=True, verbose_name=_("Bülten Placeholder"))
    newsletter_submit_aria_label = models.CharField(max_length=200, blank=True, verbose_name=_("Bülten Gönder Aria Etiketi"))
    newsletter_success_message = models.CharField(max_length=300, blank=True, verbose_name=_("Bülten Başarı Mesajı"))
    newsletter_error_message = models.CharField(max_length=300, blank=True, verbose_name=_("Bülten Hata Mesajı"))

    # Aramıza Katılın CTA
    join_label = models.CharField(max_length=100, blank=True, verbose_name=_("CTA Etiket"))
    join_title = models.CharField(max_length=200, blank=True, verbose_name=_("CTA Başlık"))
    join_description = models.TextField(blank=True, verbose_name=_("CTA Açıklama"))
    join_button_text = models.CharField(max_length=100, blank=True, verbose_name=_("CTA Buton Metni"))
    join_button_url = models.CharField(max_length=300, blank=True, verbose_name=_("CTA Buton URL"))

    gallery_images = models.ManyToManyField(
        "gallery.GalleryImage",
        blank=True,
        related_name="contact_pages",
        verbose_name=_("Galeri Görselleri"),
    )

    class Meta:
        verbose_name = _("İletişim Sayfa Ayarları")

    def __str__(self):
        return "İletişim Sayfa Ayarları"


class ContactMessage(models.Model):
    first_name = models.CharField(max_length=100, verbose_name=_("Ad"))
    last_name = models.CharField(max_length=100, verbose_name=_("Soyad"))
    email = models.EmailField(verbose_name=_("E-posta"))
    phone = models.CharField(max_length=30, blank=True, verbose_name=_("Telefon"))
    subject = models.CharField(max_length=200, verbose_name=_("Konu"))
    message = models.TextField(verbose_name=_("Mesaj"))
    kvkk_accepted = models.BooleanField(default=False, verbose_name=_("KVKK Onayı"))
    is_read = models.BooleanField(default=False, verbose_name=_("Okundu"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Oluşturulma"))

    class Meta:
        verbose_name = _("İletişim Mesajı")
        verbose_name_plural = _("İletişim Mesajları")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.first_name} {self.last_name} — {self.subject}"
