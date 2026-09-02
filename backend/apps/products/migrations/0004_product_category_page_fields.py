import common.utils
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("products", "0003_product_page_and_hero_fields")]

    operations = [
        migrations.AddField(
            model_name="productcategory",
            name="header_image",
            field=models.ImageField(blank=True, upload_to=common.utils.UniqueUploadTo("products/categories/header/"), validators=[django.core.validators.FileExtensionValidator(["jpg", "jpeg", "png", "webp"])]),
        ),
        migrations.AddField(model_name="productcategory", name="seo_title_tr", field=models.CharField(blank=True, max_length=200)),
        migrations.AddField(model_name="productcategory", name="seo_title_en", field=models.CharField(blank=True, max_length=200)),
        migrations.AddField(model_name="productcategory", name="seo_description_tr", field=models.TextField(blank=True)),
        migrations.AddField(model_name="productcategory", name="seo_description_en", field=models.TextField(blank=True)),
    ]
