import common.utils
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [("home", "0017_homepage_product_categories_content")]

    operations = [
        migrations.AddField(model_name="homepage", name="work_essentials_cta_link", field=models.CharField(blank=True, max_length=500, verbose_name="Work Essentials CTA Linki")),
        migrations.AddField(model_name="homepage", name="work_essentials_cta_text", field=models.CharField(blank=True, max_length=100, verbose_name="Work Essentials CTA Metni")),
        migrations.AddField(model_name="homepage", name="work_essentials_cta_text_en", field=models.CharField(blank=True, max_length=100, null=True, verbose_name="Work Essentials CTA Metni")),
        migrations.AddField(model_name="homepage", name="work_essentials_cta_text_tr", field=models.CharField(blank=True, max_length=100, null=True, verbose_name="Work Essentials CTA Metni")),
        migrations.AddField(model_name="homepage", name="work_essentials_description", field=models.TextField(blank=True, verbose_name="Work Essentials Açıklama")),
        migrations.AddField(model_name="homepage", name="work_essentials_description_en", field=models.TextField(blank=True, null=True, verbose_name="Work Essentials Açıklama")),
        migrations.AddField(model_name="homepage", name="work_essentials_description_tr", field=models.TextField(blank=True, null=True, verbose_name="Work Essentials Açıklama")),
        migrations.AddField(model_name="homepage", name="work_essentials_eyebrow", field=models.CharField(blank=True, max_length=100, verbose_name="Work Essentials Eyebrow")),
        migrations.AddField(model_name="homepage", name="work_essentials_eyebrow_en", field=models.CharField(blank=True, max_length=100, null=True, verbose_name="Work Essentials Eyebrow")),
        migrations.AddField(model_name="homepage", name="work_essentials_eyebrow_tr", field=models.CharField(blank=True, max_length=100, null=True, verbose_name="Work Essentials Eyebrow")),
        migrations.AddField(model_name="homepage", name="work_essentials_title", field=models.CharField(blank=True, max_length=200, verbose_name="Work Essentials Başlık")),
        migrations.AddField(model_name="homepage", name="work_essentials_title_en", field=models.CharField(blank=True, max_length=200, null=True, verbose_name="Work Essentials Başlık")),
        migrations.AddField(model_name="homepage", name="work_essentials_title_tr", field=models.CharField(blank=True, max_length=200, null=True, verbose_name="Work Essentials Başlık")),
        migrations.CreateModel(
            name="WorkEssentialItem",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("image", models.ImageField(upload_to=common.utils.UniqueUploadTo("home/work-essentials/"), validators=[django.core.validators.FileExtensionValidator(["jpg", "jpeg", "png", "webp"])], verbose_name="Görsel")),
                ("alt_tr", models.CharField(blank=True, max_length=200, verbose_name="Alt TR")),
                ("alt_en", models.CharField(blank=True, max_length=200, verbose_name="Alt EN")),
                ("link", models.CharField(blank=True, max_length=500, verbose_name="Link")),
                ("sort_order", models.PositiveIntegerField(default=0, verbose_name="Sıra")),
                ("is_active", models.BooleanField(default=True, verbose_name="Aktif")),
                ("home_page", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="work_essentials_items", to="home.homepage", verbose_name="Ana Sayfa")),
            ],
            options={"verbose_name": "Work Essentials Görseli", "verbose_name_plural": "Work Essentials Görselleri", "ordering": ("sort_order", "id")},
        ),
        migrations.CreateModel(
            name="HomeWorkEssentialsSettings",
            fields=[],
            options={"verbose_name": "Work Essentials", "verbose_name_plural": "Work Essentials", "proxy": True, "indexes": [], "constraints": []},
            bases=("home.homepage",),
        ),
    ]
