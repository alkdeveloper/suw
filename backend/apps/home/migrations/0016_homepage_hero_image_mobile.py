import common.utils
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("home", "0015_alter_homeactivity_image_alter_homebrand_image_and_more")]

    operations = [
        migrations.AddField(
            model_name="homepage",
            name="hero_image_mobile",
            field=models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("home/hero/"), validators=[django.core.validators.FileExtensionValidator(["jpg", "jpeg", "png"])] , verbose_name="Hero Mobil Görsel"),
        ),
    ]
