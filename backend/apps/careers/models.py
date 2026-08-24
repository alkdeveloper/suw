from common.utils import UniqueUploadTo
from common.validators import validate_cv_file
from common.storage_backends import select_cv_storage
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import FileExtensionValidator
from solo.models import SingletonModel
from common.models import SEOModel, SortableModel, AutoSlugMixin


class CareerSettings(SingletonModel, SEOModel):
    # Hero
    hero_title = models.CharField(max_length=200, blank=True, verbose_name=_("Hero Başlık"))
    hero_image = models.ImageField(
        upload_to=UniqueUploadTo("careers/hero/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True,
        verbose_name=_("Hero Görsel"),
    )

    # Tanıtım bölümü ("Aramıza Katılın")
    intro_label = models.CharField(max_length=100, blank=True, verbose_name=_("Tanıtım Etiket"))
    intro_title = models.CharField(max_length=200, blank=True, verbose_name=_("Tanıtım Başlık"))
    intro_description = models.TextField(blank=True, verbose_name=_("Tanıtım Açıklama"))
    intro_image = models.ImageField(
        upload_to=UniqueUploadTo("careers/intro/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True,
        verbose_name=_("Tanıtım Görsel"),
    )
    intro_button_text = models.CharField(max_length=100, blank=True, verbose_name=_("Buton Metni"))
    intro_button_url = models.CharField(max_length=300, blank=True, verbose_name=_("Buton URL"))

    # Açık Pozisyonlar bölümü
    positions_title = models.CharField(max_length=200, blank=True, verbose_name=_("Pozisyonlar Başlık"))
    positions_button_text = models.CharField(max_length=100, blank=True, verbose_name=_("Pozisyonlar Buton Metni"))

    # ── Open positions copy ──────────────────────────────────────────────────
    positions_count_label_suffix = models.CharField(max_length=100, blank=True, verbose_name=_("Pozisyon Sayı Suffix"))
    positions_previous_aria_label = models.CharField(max_length=100, blank=True, verbose_name=_("Önceki Aria Etiketi"))
    positions_next_aria_label = models.CharField(max_length=100, blank=True, verbose_name=_("Sonraki Aria Etiketi"))

    # Neden ALK Group? bölümü
    why_title = models.CharField(max_length=200, blank=True, verbose_name=_("Neden Biz Başlık"))
    why_description = models.TextField(blank=True, verbose_name=_("Neden Biz Açıklama"))
    why_button_text = models.CharField(max_length=100, blank=True, verbose_name=_("Neden Biz Buton Metni"))
    why_button_url = models.CharField(max_length=300, blank=True, verbose_name=_("Neden Biz Buton URL"))

    # ── Job listing copy ─────────────────────────────────────────────────────
    job_responsibilities_label = models.CharField(max_length=100, blank=True, verbose_name=_("Sorumluluklar Etiketi"))
    job_expectations_label = models.CharField(max_length=100, blank=True, verbose_name=_("Beklentiler Etiketi"))
    job_meta_department = models.CharField(max_length=100, blank=True, verbose_name=_("Departman Meta Etiketi"))
    job_meta_location = models.CharField(max_length=100, blank=True, verbose_name=_("Lokasyon Meta Etiketi"))
    job_meta_work_type = models.CharField(max_length=100, blank=True, verbose_name=_("Çalışma Şekli Meta Etiketi"))
    job_meta_employment = models.CharField(max_length=100, blank=True, verbose_name=_("Çalışma Tipi Meta Etiketi"))
    job_meta_experience = models.CharField(max_length=100, blank=True, verbose_name=_("Deneyim Meta Etiketi"))

    # Başvuru formu
    apply_form_title = models.CharField(max_length=200, blank=True, verbose_name=_("Başvuru Form Başlığı"))
    kvkk_text = models.TextField(blank=True, verbose_name=_("KVKK Onay Metni"))

    # ── Application form copy ────────────────────────────────────────────────
    app_position_summary_label = models.CharField(max_length=100, blank=True, verbose_name=_("Pozisyon Özet Etiketi"))
    app_form_title = models.CharField(max_length=200, blank=True, verbose_name=_("Başvuru Form Alt Başlığı"))
    app_submit_label = models.CharField(max_length=100, blank=True, verbose_name=_("Başvuru Gönder Butonu"))
    app_submitting_label = models.CharField(max_length=100, blank=True, verbose_name=_("Başvuru Gönderiliyor"))
    app_upload_label = models.CharField(max_length=100, blank=True, verbose_name=_("CV Yükle Butonu"))
    app_privacy_link_label = models.CharField(max_length=100, blank=True, verbose_name=_("Gizlilik Linki Metni"))
    app_privacy_consent_text = models.TextField(blank=True, verbose_name=_("Rıza Metni"))
    app_feedback_success_message = models.CharField(max_length=300, blank=True, verbose_name=_("Başvuru Başarı Mesajı"))
    app_feedback_error_message = models.CharField(max_length=300, blank=True, verbose_name=_("Başvuru Hata Mesajı"))
    app_feedback_missing_cv_message = models.CharField(max_length=300, blank=True, verbose_name=_("CV Eksik Mesajı"))
    # Alan etiketleri
    app_field_first_name = models.CharField(max_length=100, blank=True, verbose_name=_("Ad Etiketi"))
    app_field_last_name = models.CharField(max_length=100, blank=True, verbose_name=_("Soyad Etiketi"))
    app_field_email = models.CharField(max_length=100, blank=True, verbose_name=_("E-posta Etiketi"))
    app_field_phone = models.CharField(max_length=100, blank=True, verbose_name=_("Telefon Etiketi"))
    app_field_cv = models.CharField(max_length=100, blank=True, verbose_name=_("CV Etiketi"))
    app_field_cover_letter = models.CharField(max_length=100, blank=True, verbose_name=_("Ön Yazı Etiketi"))
    # Placeholder'lar
    app_placeholder_first_name = models.CharField(max_length=100, blank=True, verbose_name=_("Ad Placeholder"))
    app_placeholder_last_name = models.CharField(max_length=100, blank=True, verbose_name=_("Soyad Placeholder"))
    app_placeholder_email = models.CharField(max_length=100, blank=True, verbose_name=_("E-posta Placeholder"))
    app_placeholder_phone = models.CharField(max_length=100, blank=True, verbose_name=_("Telefon Placeholder"))
    app_placeholder_cv = models.CharField(max_length=100, blank=True, verbose_name=_("CV Placeholder"))
    app_placeholder_cover_letter = models.CharField(max_length=100, blank=True, verbose_name=_("Ön Yazı Placeholder"))

    # Bülten bölümü
    newsletter_title = models.CharField(max_length=200, blank=True, verbose_name=_("Bülten Başlığı"))
    newsletter_placeholder = models.CharField(max_length=100, blank=True, verbose_name=_("Bülten Placeholder"))
    newsletter_submit_aria_label = models.CharField(max_length=200, blank=True, verbose_name=_("Bülten Gönder Aria Etiketi"))
    newsletter_success_message = models.CharField(max_length=300, blank=True, verbose_name=_("Bülten Başarı Mesajı"))
    newsletter_error_message = models.CharField(max_length=300, blank=True, verbose_name=_("Bülten Hata Mesajı"))

    # İletişim CTA bölümü
    contact_label = models.CharField(max_length=100, blank=True, verbose_name=_("İletişim Etiket"))
    contact_title = models.CharField(max_length=200, blank=True, verbose_name=_("İletişim Başlık"))
    contact_description = models.TextField(blank=True, verbose_name=_("İletişim Açıklama"))
    contact_button_text = models.CharField(max_length=100, blank=True, verbose_name=_("İletişim Buton Metni"))
    contact_button_url = models.CharField(max_length=300, blank=True, verbose_name=_("İletişim Buton URL"))
    apply_button_text = models.CharField(max_length=100, blank=True, verbose_name=_("Genel Başvuru Buton Metni"))
    apply_button_url = models.CharField(max_length=300, blank=True, verbose_name=_("Genel Başvuru Buton URL"))

    class Meta:
        verbose_name = _("Kariyer Sayfa Ayarları")

    def __str__(self):
        return "Kariyer Sayfa Ayarları"


class Department(SortableModel):
    name = models.CharField(max_length=100, verbose_name=_("Departman Adı"))
    icon = models.FileField(
        upload_to=UniqueUploadTo("careers/departments/"),
        validators=[FileExtensionValidator(["svg", "png"])],
        blank=True,
        verbose_name=_("İkon"),
    )
    is_active = models.BooleanField(default=True, verbose_name=_("Aktif"))

    class Meta(SortableModel.Meta):
        verbose_name = _("Departman")
        verbose_name_plural = _("Departmanlar")

    def __str__(self):
        return self.name


class JobPosition(AutoSlugMixin, SortableModel):

    class WorkType(models.TextChoices):
        REMOTE = "remote", _("Uzaktan")
        ONSITE = "onsite", _("Ofiste")
        HYBRID = "hybrid", _("Hibrit")

    class EmploymentType(models.TextChoices):
        FULL_TIME = "full_time", _("Tam Zamanlı")
        PART_TIME = "part_time", _("Yarı Zamanlı")
        INTERN = "intern", _("Stajyer")
        CONTRACT = "contract", _("Sözleşmeli")

    title = models.CharField(max_length=300, verbose_name=_("Pozisyon Başlığı"))
    slug = models.SlugField(max_length=300, unique=True, blank=True, verbose_name=_("Slug"))
    department = models.ForeignKey(
        Department,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="positions",
        verbose_name=_("Departman"),
    )
    location = models.CharField(max_length=200, blank=True, verbose_name=_("Lokasyon"))
    work_type = models.CharField(
        max_length=20,
        choices=WorkType.choices,
        default=WorkType.ONSITE,
        verbose_name=_("Çalışma Şekli"),
    )
    employment_type = models.CharField(
        max_length=20,
        choices=EmploymentType.choices,
        default=EmploymentType.FULL_TIME,
        verbose_name=_("Çalışma Tipi"),
    )
    experience_level = models.CharField(max_length=100, blank=True, verbose_name=_("Deneyim Seviyesi"))
    description = models.TextField(blank=True, verbose_name=_("Açıklama"))
    responsibilities = models.TextField(blank=True, verbose_name=_("Sorumluluklar"))
    requirements = models.TextField(blank=True, verbose_name=_("Beklentiler"))
    is_active = models.BooleanField(default=True, verbose_name=_("Aktif"))

    slug_source = "title"

    class Meta(SortableModel.Meta):
        verbose_name = _("İş İlanı")
        verbose_name_plural = _("İş İlanları")

    def __str__(self):
        return self.title


class JobApplication(models.Model):

    class ReviewStatus(models.TextChoices):
        NEW = "new", _("Yeni")
        REVIEWING = "reviewing", _("İnceleniyor")
        ACCEPTED = "accepted", _("Kabul Edildi")
        REJECTED = "rejected", _("Reddedildi")

    position = models.ForeignKey(
        JobPosition,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="applications",
        verbose_name=_("Pozisyon"),
    )
    first_name = models.CharField(max_length=100, verbose_name=_("Ad"))
    last_name = models.CharField(max_length=100, verbose_name=_("Soyad"))
    email = models.EmailField(verbose_name=_("E-posta"))
    phone = models.CharField(max_length=30, blank=True, verbose_name=_("Telefon"))
    cv_file = models.FileField(
        upload_to=UniqueUploadTo("careers/cv/"),
        storage=select_cv_storage,
        validators=[
            FileExtensionValidator(["pdf"]),
            validate_cv_file,
        ],
        verbose_name=_("CV Dosyası"),
    )
    cover_letter = models.TextField(blank=True, verbose_name=_("Ön Yazı"))
    kvkk_accepted = models.BooleanField(default=False, verbose_name=_("KVKK Onayı"))
    review_status = models.CharField(
        max_length=20,
        choices=ReviewStatus.choices,
        default=ReviewStatus.NEW,
        verbose_name=_("Değerlendirme Durumu"),
    )
    review_note = models.TextField(blank=True, verbose_name=_("Değerlendirme Notu"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Başvuru Tarihi"))

    class Meta:
        verbose_name = _("İş Başvurusu")
        verbose_name_plural = _("İş Başvuruları")
        ordering = ["-created_at"]

    def __str__(self):
        pos_title = self.position.title if self.position else "Genel"
        return f"{self.first_name} {self.last_name} — {pos_title}"
