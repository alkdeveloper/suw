# Generated manually: add help_text to GlobalOperationLocation fields

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("brands", "0007_brand_show_external_link_help_text"),
    ]

    operations = [
        migrations.AlterField(
            model_name="globaloperationlocation",
            name="page_scope",
            field=models.CharField(
                choices=[
                    ("brands", "Markalar Sayfası"),
                    ("companies", "Şirketler Sayfası"),
                ],
                default="brands",
                help_text=(
                    "Bu marker hangi sayfanın haritasında görünecek? Markalar ve Şirketler "
                    "sayfaları birbirinden bağımsız listeler kullanır; aynı ülkeyi her iki "
                    "sayfada da göstermek isterseniz iki ayrı kayıt oluşturmanız gerekir."
                ),
                max_length=16,
                verbose_name="Kullanıldığı Sayfa",
            ),
        ),
        migrations.AlterField(
            model_name="globaloperationlocation",
            name="latitude",
            field=models.DecimalField(
                decimal_places=6,
                help_text="Örn. 50.4501 (Kiev). google.com/maps üzerinden sağ tık → koordinatı kopyala.",
                max_digits=9,
                verbose_name="Enlem",
            ),
        ),
        migrations.AlterField(
            model_name="globaloperationlocation",
            name="longitude",
            field=models.DecimalField(
                decimal_places=6,
                help_text="Örn. 30.5234 (Kiev). google.com/maps üzerinden sağ tık → koordinatı kopyala.",
                max_digits=9,
                verbose_name="Boylam",
            ),
        ),
    ]
