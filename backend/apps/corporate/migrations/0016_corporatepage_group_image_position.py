import common.utils
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("corporate", "0015_clean_about_settings_and_add_about_cta")]

    operations = [
        migrations.AlterField(
            model_name="corporatepage",
            name="group_image",
            field=models.ImageField(
                blank=True,
                help_text="Önerilen görsel ölçüsü: 1200 x 1500 px (4:5 dikey)",
                upload_to=common.utils.UniqueUploadTo("corporate/group/"),
                verbose_name="Görsel",
            ),
        ),
        migrations.AddField(
            model_name="corporatepage",
            name="group_image_position",
            field=models.CharField(
                choices=[("top", "Üst"), ("center", "Orta"), ("bottom", "Alt")],
                default="center",
                max_length=10,
                verbose_name="Görsel Odak Noktası",
            ),
        ),
    ]
