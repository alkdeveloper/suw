from django.core.validators import FileExtensionValidator
from django.db import models
from django.utils.translation import gettext_lazy as _
from solo.models import SingletonModel

from common.models import AutoSlugMixin
from common.utils import UniqueUploadTo


product_image_validators = [FileExtensionValidator(["jpg", "jpeg", "png", "webp"])]


class ProductPageSettings(SingletonModel):
    eyebrow_tr = models.CharField(max_length=120, blank=True)
    eyebrow_en = models.CharField(max_length=120, blank=True)
    title_tr = models.CharField(max_length=220, blank=True)
    title_en = models.CharField(max_length=220, blank=True)
    description_tr = models.TextField(blank=True)
    description_en = models.TextField(blank=True)
    hero_image = models.ImageField(upload_to=UniqueUploadTo("products/page/"), validators=product_image_validators, blank=True)
    hero_image_mobile = models.ImageField(upload_to=UniqueUploadTo("products/page/"), validators=product_image_validators, blank=True)
    seo_title_tr = models.CharField(max_length=200, blank=True)
    seo_title_en = models.CharField(max_length=200, blank=True)
    seo_description_tr = models.TextField(blank=True)
    seo_description_en = models.TextField(blank=True)

    class Meta:
        verbose_name = _("Ürünler sayfa ayarları")

    def __str__(self):
        return "Ürünler Sayfa Ayarları"


class ProductGroup(AutoSlugMixin, models.Model):
    slug_source = "name_tr"
    name_tr = models.CharField(max_length=120, verbose_name=_("Türkçe ad"))
    name_en = models.CharField(max_length=120, verbose_name=_("İngilizce ad"))
    slug = models.SlugField(max_length=140, unique=True, blank=True)
    image = models.ImageField(upload_to=UniqueUploadTo("products/groups/"), validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])], blank=True)
    short_description_tr = models.TextField(blank=True)
    short_description_en = models.TextField(blank=True)
    hero_eyebrow_tr = models.CharField(max_length=120, blank=True)
    hero_eyebrow_en = models.CharField(max_length=120, blank=True)
    hero_title_tr = models.CharField(max_length=220, blank=True)
    hero_title_en = models.CharField(max_length=220, blank=True)
    hero_description_tr = models.TextField(blank=True)
    hero_description_en = models.TextField(blank=True)
    hero_image = models.ImageField(upload_to=UniqueUploadTo("products/groups/hero/"), validators=product_image_validators, blank=True)
    hero_image_mobile = models.ImageField(upload_to=UniqueUploadTo("products/groups/hero/"), validators=product_image_validators, blank=True)
    sort_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    show_on_home = models.BooleanField(default=False)

    class Meta:
        ordering = ["sort_order", "id"]
        verbose_name = _("Ürün grubu")
        verbose_name_plural = _("Ürün grupları")

    def __str__(self):
        return self.name_tr


class ProductCategory(AutoSlugMixin, models.Model):
    slug_source = "name_tr"
    name_tr = models.CharField(max_length=120, verbose_name=_("Türkçe ad"))
    name_en = models.CharField(max_length=120, verbose_name=_("İngilizce ad"))
    slug = models.SlugField(max_length=140, unique=True, blank=True)
    image = models.ImageField(upload_to=UniqueUploadTo("products/categories/"), validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])], blank=True)
    description_tr = models.TextField(blank=True)
    description_en = models.TextField(blank=True)
    header_image = models.ImageField(upload_to=UniqueUploadTo("products/categories/header/"), validators=product_image_validators, blank=True)
    seo_title_tr = models.CharField(max_length=200, blank=True)
    seo_title_en = models.CharField(max_length=200, blank=True)
    seo_description_tr = models.TextField(blank=True)
    seo_description_en = models.TextField(blank=True)
    groups = models.ManyToManyField(ProductGroup, related_name="categories", blank=True)
    sort_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["sort_order", "id"]
        verbose_name = _("Ürün kategorisi")
        verbose_name_plural = _("Ürün kategorileri")

    def __str__(self):
        return self.name_tr


class Product(AutoSlugMixin, models.Model):
    slug_source = "name_tr"
    name_tr = models.CharField(max_length=180, verbose_name=_("Türkçe ad"))
    name_en = models.CharField(max_length=180, verbose_name=_("İngilizce ad"))
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    product_code = models.CharField(max_length=80, unique=True)
    category = models.ForeignKey(ProductCategory, related_name="products", on_delete=models.PROTECT)
    groups = models.ManyToManyField(ProductGroup, related_name="products", blank=True)
    short_description_tr = models.TextField(blank=True)
    short_description_en = models.TextField(blank=True)
    description_tr = models.TextField(blank=True)
    description_en = models.TextField(blank=True)
    materials_tr = models.TextField(blank=True)
    materials_en = models.TextField(blank=True)
    features_tr = models.TextField(blank=True)
    features_en = models.TextField(blank=True)
    colors_tr = models.TextField(blank=True)
    colors_en = models.TextField(blank=True)
    sizes_tr = models.TextField(blank=True)
    sizes_en = models.TextField(blank=True)
    main_image = models.ImageField(upload_to=UniqueUploadTo("products/items/"), validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])], blank=True)
    is_active = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    sort_order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["sort_order", "id"]
        verbose_name = _("Ürün")
        verbose_name_plural = _("Ürünler")

    def __str__(self):
        return f"{self.product_code} — {self.name_tr}"


class ProductImage(models.Model):
    product = models.ForeignKey(Product, related_name="images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to=UniqueUploadTo("products/gallery/"), validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])])
    alt_tr = models.CharField(max_length=200, blank=True)
    alt_en = models.CharField(max_length=200, blank=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]
        verbose_name = _("Ürün görseli")
        verbose_name_plural = _("Ürün görselleri")

    def __str__(self):
        return f"{self.product.product_code} / {self.sort_order}"
