import common.utils
from django.core.validators import FileExtensionValidator
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("corporate", "0012_corporatepage_experience_hero")]

    operations = [
        migrations.AddField(model_name="corporatepage", name="history_hero_title_tr", field=models.CharField(blank=True, default="1978'DEN BU YANA", max_length=220, verbose_name="Tarihçe Hero Başlık TR")),
        migrations.AddField(model_name="corporatepage", name="history_hero_title_en", field=models.CharField(blank=True, default="SINCE 1978", max_length=220, verbose_name="History Hero Title EN")),
        migrations.AddField(model_name="corporatepage", name="history_hero_description_tr", field=models.TextField(blank=True, default="Şapka, bere, atkı ve eldiven üretimiyle temellerini attığımız tekstil yolculuğumuzu, bugün çok markalı ve uluslararası ölçekte faaliyet gösteren güçlü bir grup yapısıyla sürdürüyoruz.", verbose_name="Tarihçe Hero Açıklama TR")),
        migrations.AddField(model_name="corporatepage", name="history_hero_description_en", field=models.TextField(blank=True, default="What began with the production of hats, beanies, scarves and gloves has grown into a strong, multi-brand group operating on an international scale.", verbose_name="History Hero Description EN")),
        migrations.AddField(model_name="corporatepage", name="history_hero_image", field=models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("corporate/history-hero/"), validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])], verbose_name="Tarihçe Hero Desktop Görsel")),
        migrations.AddField(model_name="corporatepage", name="history_hero_image_mobile", field=models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("corporate/history-hero/mobile/"), validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])], verbose_name="Tarihçe Hero Mobile Görsel")),
    ]
