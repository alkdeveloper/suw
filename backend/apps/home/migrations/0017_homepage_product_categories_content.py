from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("home", "0016_homepage_hero_image_mobile"),
    ]

    operations = [
        migrations.AddField(
            model_name="homepage",
            name="product_categories_description",
            field=models.TextField(blank=True, verbose_name="Ürün Kategorileri Açıklama"),
        ),
        migrations.AddField(
            model_name="homepage",
            name="product_categories_description_en",
            field=models.TextField(blank=True, null=True, verbose_name="Ürün Kategorileri Açıklama"),
        ),
        migrations.AddField(
            model_name="homepage",
            name="product_categories_description_tr",
            field=models.TextField(blank=True, null=True, verbose_name="Ürün Kategorileri Açıklama"),
        ),
        migrations.AddField(
            model_name="homepage",
            name="product_categories_eyebrow",
            field=models.CharField(blank=True, max_length=100, verbose_name="Ürün Kategorileri Eyebrow"),
        ),
        migrations.AddField(
            model_name="homepage",
            name="product_categories_eyebrow_en",
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name="Ürün Kategorileri Eyebrow"),
        ),
        migrations.AddField(
            model_name="homepage",
            name="product_categories_eyebrow_tr",
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name="Ürün Kategorileri Eyebrow"),
        ),
        migrations.AddField(
            model_name="homepage",
            name="product_categories_title",
            field=models.CharField(blank=True, max_length=200, verbose_name="Ürün Kategorileri Başlık"),
        ),
        migrations.AddField(
            model_name="homepage",
            name="product_categories_title_en",
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name="Ürün Kategorileri Başlık"),
        ),
        migrations.AddField(
            model_name="homepage",
            name="product_categories_title_tr",
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name="Ürün Kategorileri Başlık"),
        ),
        migrations.CreateModel(
            name="HomeProductCategoriesSettings",
            fields=[],
            options={
                "verbose_name": "Ürün Kategorileri Bölümü",
                "verbose_name_plural": "Ürün Kategorileri Bölümü",
                "proxy": True,
                "indexes": [],
                "constraints": [],
            },
            bases=("home.homepage",),
        ),
    ]
