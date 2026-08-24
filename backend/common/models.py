from django.db import models
from ordered_model.models import OrderedModel


class SEOModel(models.Model):
    meta_title = models.CharField(max_length=160, blank=True, verbose_name="Meta Başlık")
    meta_description = models.TextField(max_length=320, blank=True, verbose_name="Meta Açıklama")

    class Meta:
        abstract = True


class SortableModel(OrderedModel):
    class Meta(OrderedModel.Meta):
        abstract = True


class AutoSlugMixin:
    """
    Slug alanını otomatik dolduran mixin.
    Kullanmak için: slug_source = "title" override edilebilir.
    """
    slug_source = "title"

    def save(self, *args, **kwargs):
        if not self.slug:
            from common.utils import turkish_slugify
            source = getattr(self, self.slug_source, "")
            self.slug = turkish_slugify(source)
        super().save(*args, **kwargs)
