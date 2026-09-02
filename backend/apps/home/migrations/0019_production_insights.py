import common.utils
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [("home", "0018_work_essentials")]

    operations = [
        migrations.AddField(model_name="homepage", name="production_insights_description", field=models.TextField(blank=True, verbose_name="Üretim Bilgileri Açıklama")),
        migrations.AddField(model_name="homepage", name="production_insights_description_en", field=models.TextField(blank=True, null=True, verbose_name="Üretim Bilgileri Açıklama")),
        migrations.AddField(model_name="homepage", name="production_insights_description_tr", field=models.TextField(blank=True, null=True, verbose_name="Üretim Bilgileri Açıklama")),
        migrations.AddField(model_name="homepage", name="production_insights_eyebrow", field=models.CharField(blank=True, max_length=100, verbose_name="Üretim Bilgileri Eyebrow")),
        migrations.AddField(model_name="homepage", name="production_insights_eyebrow_en", field=models.CharField(blank=True, max_length=100, null=True, verbose_name="Üretim Bilgileri Eyebrow")),
        migrations.AddField(model_name="homepage", name="production_insights_eyebrow_tr", field=models.CharField(blank=True, max_length=100, null=True, verbose_name="Üretim Bilgileri Eyebrow")),
        migrations.AddField(model_name="homepage", name="production_insights_title", field=models.CharField(blank=True, max_length=250, verbose_name="Üretim Bilgileri Başlık")),
        migrations.AddField(model_name="homepage", name="production_insights_title_en", field=models.CharField(blank=True, max_length=250, null=True, verbose_name="Üretim Bilgileri Başlık")),
        migrations.AddField(model_name="homepage", name="production_insights_title_tr", field=models.CharField(blank=True, max_length=250, null=True, verbose_name="Üretim Bilgileri Başlık")),
        migrations.CreateModel(
            name="ProductionInsightItem",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("image", models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("home/production-insights/"), validators=[django.core.validators.FileExtensionValidator(["jpg", "jpeg", "png", "webp"])], verbose_name="Görsel")),
                ("title_tr", models.CharField(blank=True, max_length=160, verbose_name="Başlık TR")),
                ("title_en", models.CharField(blank=True, max_length=160, verbose_name="Başlık EN")),
                ("short_description_tr", models.TextField(blank=True, verbose_name="Kısa Açıklama TR")),
                ("short_description_en", models.TextField(blank=True, verbose_name="Kısa Açıklama EN")),
                ("detail_text_tr", models.TextField(blank=True, verbose_name="Detay Metni TR")),
                ("detail_text_en", models.TextField(blank=True, verbose_name="Detay Metni EN")),
                ("sort_order", models.PositiveIntegerField(default=0, verbose_name="Sıra")),
                ("is_active", models.BooleanField(default=True, verbose_name="Aktif")),
                ("home_page", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="production_insight_items", to="home.homepage", verbose_name="Ana Sayfa")),
            ],
            options={"verbose_name": "Üretim Bilgisi Kartı", "verbose_name_plural": "Üretim Bilgisi Kartları", "ordering": ("sort_order", "id")},
        ),
        migrations.CreateModel(
            name="HomeProductionInsightsSettings",
            fields=[],
            options={"verbose_name": "Üretim Bilgileri", "verbose_name_plural": "Üretim Bilgileri", "proxy": True, "indexes": [], "constraints": []},
            bases=("home.homepage",),
        ),
    ]
