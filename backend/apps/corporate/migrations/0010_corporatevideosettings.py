import common.utils
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("corporate", "0009_update_why_suw_section")]

    operations = [
        migrations.CreateModel(
            name="CorporateVideoSettings",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title_tr", models.CharField(blank=True, default="ÜRETİMİN ARKASINDAKİ DENEYİM.", max_length=240, verbose_name="TR Başlık")),
                ("title_en", models.CharField(blank=True, default="THE EXPERIENCE BEHIND PRODUCTION.", max_length=240, verbose_name="EN Başlık")),
                ("description_tr", models.TextField(blank=True, default="SUW, 1978'den gelen ALK Group üretim deneyiminden güç alır. Ürün geliştirme, üretim, kalite kontrol ve tedarik süreçlerini aynı yapı içerisinde yöneterek kurumsal müşterilere uçtan uca çözümler sunar.", verbose_name="TR Açıklama")),
                ("description_en", models.TextField(blank=True, default="SUW draws strength from ALK Group's manufacturing experience dating back to 1978. By managing product development, production, quality control and supply processes within a single structure, we provide corporate clients with end-to-end solutions.", verbose_name="EN Açıklama")),
                ("video_file", models.FileField(blank=True, upload_to=common.utils.UniqueUploadTo("corporate/video/"), validators=[django.core.validators.FileExtensionValidator(["mp4"])], verbose_name="Video Dosyası (.mp4)")),
                ("poster_image", models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("corporate/video/poster/"), validators=[django.core.validators.FileExtensionValidator(["jpg", "jpeg", "png", "webp"])], verbose_name="Video Kapak Görseli")),
                ("is_active", models.BooleanField(default=True, verbose_name="Aktif")),
            ],
            options={"verbose_name": "Üretim Videosu"},
        ),
    ]
