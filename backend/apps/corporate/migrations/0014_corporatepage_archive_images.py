import common.utils
from django.core.validators import FileExtensionValidator
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("corporate", "0013_corporatepage_history_hero")]

    operations = [
        migrations.AddField(model_name="corporatepage", name="archive_image_1", field=models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("corporate/archive/"), validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])], verbose_name="Desktop Kolaj Görseli")),
        migrations.AddField(model_name="corporatepage", name="archive_image_2", field=models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("corporate/archive/"), validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])], verbose_name="Mobile Kolaj Görseli (opsiyonel)")),
        migrations.AddField(model_name="corporatepage", name="archive_image_3", field=models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("corporate/archive/"), validators=[FileExtensionValidator(["jpg", "jpeg", "png", "webp"])], verbose_name="Arşiv Görsel 3 (opsiyonel)")),
    ]
