# Generated manually: add help_text to Brand.show_external_link

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("brands", "0006_backfill_detail_pages_and_company_locations"),
    ]

    operations = [
        migrations.AlterField(
            model_name="brand",
            name="show_external_link",
            field=models.BooleanField(
                default=True,
                help_text=(
                    "Kapatılırsa marka kartında ne tıklanabilir bağlantı ne de hover buton metni "
                    "gösterilir. Web sitesi olmayan markalar için bu kutuyu kapatın; aşağıdaki URL "
                    "ve hover metni alanları yok sayılır."
                ),
                verbose_name="Dış Bağlantıyı Göster",
            ),
        ),
    ]
