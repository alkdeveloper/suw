from common.utils import UniqueUploadTo
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import FileExtensionValidator
from common.models import SEOModel, SortableModel


class LegalPage(SEOModel):
    """Yasal sayfa — slug ile çağrılır, singleton değil."""

    slug = models.SlugField(
        max_length=200,
        unique=True,
        verbose_name=_("Slug"),
        help_text=_("Örnek: privacy-and-cookie-policy"),
    )
    title = models.CharField(max_length=300, verbose_name=_("Başlık"))
    subtitle = models.CharField(max_length=300, blank=True, verbose_name=_("Alt Başlık"))
    intro = models.TextField(blank=True, verbose_name=_("Giriş Metni"))
    last_updated = models.DateField(null=True, blank=True, verbose_name=_("Son Güncelleme Tarihi"))
    last_updated_label = models.CharField(max_length=100, blank=True, verbose_name=_("Son Güncelleme Etiketi"))

    hero_image = models.ImageField(
        upload_to=UniqueUploadTo("legal/hero/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
        blank=True,
        verbose_name=_("Hero Görsel"),
    )
    hero_glow_image = models.ImageField(
        upload_to=UniqueUploadTo("legal/hero/"),
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "svg"])],
        blank=True,
        verbose_name=_("Hero Glow Görsel"),
    )

    class Meta:
        verbose_name = _("Yasal Sayfa")
        verbose_name_plural = _("Yasal Sayfalar")
        ordering = ["slug"]

    def __str__(self):
        return self.title


class LegalSection(SortableModel):
    """Yasal sayfa bölümü — başlık + string[] gövde."""

    page = models.ForeignKey(
        LegalPage,
        on_delete=models.CASCADE,
        related_name="sections",
        verbose_name=_("Sayfa"),
    )
    heading = models.CharField(max_length=300, blank=True, verbose_name=_("Bölüm Başlığı"))
    body = models.JSONField(
        default=list,
        verbose_name=_("Bölüm İçeriği"),
        help_text=_("Her satır ayrı bir paragraf. JSON string array: [\"paragraf1\", \"paragraf2\"]"),
    )

    class Meta(SortableModel.Meta):
        verbose_name = _("Yasal Sayfa Bölümü")
        verbose_name_plural = _("Yasal Sayfa Bölümleri")

    def __str__(self):
        return f"{self.page.slug} — {self.heading or 'Bölüm'}"
