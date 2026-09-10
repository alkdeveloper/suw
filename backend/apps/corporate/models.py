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
    history_hero_title_tr = models.CharField(max_length=220, blank=True, default="1978'DEN BU YANA", verbose_name="Tarihçe Hero Başlık TR")
    history_hero_title_en = models.CharField(max_length=220, blank=True, default="SINCE 1978", verbose_name="History Hero Title EN")
    history_hero_description_tr = models.TextField(
        blank=True,
        default="Şapka, bere, atkı ve eldiven üretimiyle temellerini attığımız tekstil yolculuğumuzu, bugün çok markalı ve uluslararası ölçekte faaliyet gösteren güçlü bir grup yapısıyla sürdürüyoruz.",
        verbose_name="Tarihçe Hero Açıklama TR",
    )
    history_hero_description_en = models.TextField(
        blank=True,
        default="What began with the production of hats, beanies, scarves and gloves has grown into a strong, multi-brand group operating on an international scale.",
        verbose_name="History Hero Description EN",
    )
    history_hero_image = models.ImageField(
        upload_to=UniqueUploadTo("corporate/history-hero/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])],
        blank=True,
        verbose_name="Tarihçe Hero Desktop Görsel",
    )
    history_hero_image_mobile = models.ImageField(
        upload_to=UniqueUploadTo("corporate/history-hero/mobile/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])],
        blank=True,
        verbose_name="Tarihçe Hero Mobile Görsel",
    )
    experience_number_tr = models.CharField(max_length=40, blank=True, default="50", verbose_name="Tecrübe Sayısı TR")
    experience_label_tr = models.CharField(max_length=120, blank=True, default="YILLIK TECRÜBE", verbose_name="Tecrübe Etiketi TR")
    experience_number_en = models.CharField(max_length=40, blank=True, default="50", verbose_name="Experience Number EN")
    experience_label_en = models.CharField(max_length=120, blank=True, default="YEARS OF EXPERIENCE", verbose_name="Experience Label EN")

    group_eyebrow_tr = models.CharField(max_length=120, blank=True)
    group_eyebrow_en = models.CharField(max_length=120, blank=True)
    group_title_tr = models.CharField(max_length=220, blank=True)
    group_title_en = models.CharField(max_length=220, blank=True)
    group_description_tr = models.TextField(blank=True)
    group_description_en = models.TextField(blank=True)
    group_supporting_label_tr = models.CharField(max_length=160, blank=True)
    group_supporting_label_en = models.CharField(max_length=160, blank=True)
    group_image = models.ImageField(
        upload_to=UniqueUploadTo("corporate/group/"),
        blank=True,
        verbose_name="Görsel",
        help_text="Önerilen görsel ölçüsü: 1200 x 1500 px (4:5 dikey)",
    )
    group_image_position = models.CharField(
        max_length=10,
        choices=(("top", "Üst"), ("center", "Orta"), ("bottom", "Alt")),
        default="center",
        verbose_name="Görsel Odak Noktası",
    )
    group_image_mobile = models.ImageField(upload_to=UniqueUploadTo("corporate/group/mobile/"), blank=True)
    archive_image_1 = models.ImageField(
        upload_to=UniqueUploadTo("corporate/archive/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])],
        blank=True,
        verbose_name="Desktop Kolaj Görseli",
    )
    archive_image_2 = models.ImageField(
        upload_to=UniqueUploadTo("corporate/archive/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])],
        blank=True,
        verbose_name="Mobile Kolaj Görseli (opsiyonel)",
    )
    archive_image_3 = models.ImageField(
        upload_to=UniqueUploadTo("corporate/archive/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])],
        blank=True,
        verbose_name="Arşiv Görsel 3 (opsiyonel)",
    )

    why_eyebrow_tr = models.CharField(max_length=120, blank=True)
    why_eyebrow_en = models.CharField(max_length=120, blank=True)

    experience_eyebrow_tr = models.CharField(max_length=120, blank=True)
    experience_eyebrow_en = models.CharField(max_length=120, blank=True)
    experience_title_tr = models.CharField(max_length=240, blank=True)
    experience_title_en = models.CharField(max_length=240, blank=True)
    experience_description_tr = models.TextField(blank=True, verbose_name="Tecrübe Açıklaması TR")
    experience_description_en = models.TextField(blank=True, verbose_name="Experience Description EN")

    timeline_eyebrow_tr = models.CharField(max_length=120, blank=True)
    timeline_eyebrow_en = models.CharField(max_length=120, blank=True)
    timeline_title_tr = models.CharField(max_length=220, blank=True, default="HİKAYEMİZ", verbose_name="Kronoloji Başlığı TR")
    timeline_title_en = models.CharField(max_length=220, blank=True, default="OUR STORY", verbose_name="Kronoloji Başlığı EN")
    timeline_description_tr = models.TextField(blank=True)
    timeline_description_en = models.TextField(blank=True)

    about_cta_title_tr = models.CharField(max_length=220, blank=True, verbose_name="CTA Başlık TR")
    about_cta_title_en = models.CharField(max_length=220, blank=True, verbose_name="CTA Başlık EN")
    about_cta_description_tr = models.TextField(blank=True, verbose_name="CTA Açıklama TR")
    about_cta_description_en = models.TextField(blank=True, verbose_name="CTA Açıklama EN")
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


class CorporateVideoSettings(SingletonModel):
    title_tr = models.CharField(max_length=240, blank=True, default="ÜRETİMİN ARKASINDAKİ DENEYİM.", verbose_name="TR Başlık")
    title_en = models.CharField(max_length=240, blank=True, default="THE EXPERIENCE BEHIND PRODUCTION.", verbose_name="EN Başlık")
    description_tr = models.TextField(blank=True, default="SUW, 1978'den gelen ALK Group üretim deneyiminden güç alır. Ürün geliştirme, üretim, kalite kontrol ve tedarik süreçlerini aynı yapı içerisinde yöneterek kurumsal müşterilere uçtan uca çözümler sunar.", verbose_name="TR Açıklama")
    description_en = models.TextField(blank=True, default="SUW draws strength from ALK Group's manufacturing experience dating back to 1978. By managing product development, production, quality control and supply processes within a single structure, we provide corporate clients with end-to-end solutions.", verbose_name="EN Açıklama")
    video_file = models.FileField(
        upload_to=UniqueUploadTo("corporate/video/"),
        validators=[FileExtensionValidator(["mp4"])],
        blank=True,
        verbose_name="Video Dosyası (.mp4)",
    )
    poster_image = models.ImageField(
        upload_to=UniqueUploadTo("corporate/video/poster/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])],
        blank=True,
        verbose_name="Video Kapak Görseli",
    )
    is_active = models.BooleanField(default=True, verbose_name="Aktif")

    class Meta:
        verbose_name = "Üretim Videosu"

    def __str__(self):
        return "Üretim Videosu"


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
