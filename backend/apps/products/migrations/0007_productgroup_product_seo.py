from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("products", "0006_productgroup_home_card_media")]

    operations = [
        migrations.AddField(model_name="productgroup", name="seo_title_tr", field=models.CharField(blank=True, max_length=200)),
        migrations.AddField(model_name="productgroup", name="seo_title_en", field=models.CharField(blank=True, max_length=200)),
        migrations.AddField(model_name="productgroup", name="seo_description_tr", field=models.TextField(blank=True)),
        migrations.AddField(model_name="productgroup", name="seo_description_en", field=models.TextField(blank=True)),
        migrations.AddField(model_name="product", name="seo_title_tr", field=models.CharField(blank=True, max_length=200)),
        migrations.AddField(model_name="product", name="seo_title_en", field=models.CharField(blank=True, max_length=200)),
        migrations.AddField(model_name="product", name="seo_description_tr", field=models.TextField(blank=True)),
        migrations.AddField(model_name="product", name="seo_description_en", field=models.TextField(blank=True)),
    ]
