import common.utils
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("products", "0002_seed_suw_product_taxonomy")]

    operations = [
        migrations.CreateModel(
            name="ProductPageSettings",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("eyebrow_tr", models.CharField(blank=True, max_length=120)),
                ("eyebrow_en", models.CharField(blank=True, max_length=120)),
                ("title_tr", models.CharField(blank=True, max_length=220)),
                ("title_en", models.CharField(blank=True, max_length=220)),
                ("description_tr", models.TextField(blank=True)),
                ("description_en", models.TextField(blank=True)),
                ("hero_image", models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("products/page/"), validators=[django.core.validators.FileExtensionValidator(["jpg", "jpeg", "png", "webp"])])),
                ("hero_image_mobile", models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("products/page/"), validators=[django.core.validators.FileExtensionValidator(["jpg", "jpeg", "png", "webp"])])),
                ("seo_title_tr", models.CharField(blank=True, max_length=200)),
                ("seo_title_en", models.CharField(blank=True, max_length=200)),
                ("seo_description_tr", models.TextField(blank=True)),
                ("seo_description_en", models.TextField(blank=True)),
            ],
            options={"verbose_name": "Ürünler sayfa ayarları"},
        ),
        migrations.AddField(model_name="product", name="materials_tr", field=models.TextField(blank=True)),
        migrations.AddField(model_name="product", name="materials_en", field=models.TextField(blank=True)),
        migrations.AddField(model_name="product", name="features_tr", field=models.TextField(blank=True)),
        migrations.AddField(model_name="product", name="features_en", field=models.TextField(blank=True)),
        migrations.AddField(model_name="product", name="colors_tr", field=models.TextField(blank=True)),
        migrations.AddField(model_name="product", name="colors_en", field=models.TextField(blank=True)),
        migrations.AddField(model_name="productgroup", name="hero_eyebrow_tr", field=models.CharField(blank=True, max_length=120)),
        migrations.AddField(model_name="productgroup", name="hero_eyebrow_en", field=models.CharField(blank=True, max_length=120)),
        migrations.AddField(model_name="productgroup", name="hero_title_tr", field=models.CharField(blank=True, max_length=220)),
        migrations.AddField(model_name="productgroup", name="hero_title_en", field=models.CharField(blank=True, max_length=220)),
        migrations.AddField(model_name="productgroup", name="hero_description_tr", field=models.TextField(blank=True)),
        migrations.AddField(model_name="productgroup", name="hero_description_en", field=models.TextField(blank=True)),
        migrations.AddField(model_name="productgroup", name="hero_image", field=models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("products/groups/hero/"), validators=[django.core.validators.FileExtensionValidator(["jpg", "jpeg", "png", "webp"])])),
        migrations.AddField(model_name="productgroup", name="hero_image_mobile", field=models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("products/groups/hero/"), validators=[django.core.validators.FileExtensionValidator(["jpg", "jpeg", "png", "webp"])])),
    ]
