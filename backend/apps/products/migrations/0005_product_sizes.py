from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("products", "0004_product_category_page_fields")]

    operations = [
        migrations.AddField(model_name="product", name="sizes_tr", field=models.TextField(blank=True)),
        migrations.AddField(model_name="product", name="sizes_en", field=models.TextField(blank=True)),
    ]
