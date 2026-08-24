# Generated manually: add help_text to HomeOperationalItem external link fields

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0013_homeoperationalitem_external_link_enabled_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="homeoperationalitem",
            name="external_link_enabled",
            field=models.BooleanField(
                default=False,
                help_text=(
                    "Kapalıyken öğenin üzerine gelindiğinde dış bağlantı oku görünmez ve "
                    "kart tıklanabilir olmaz. Açmak için bu kutuyu işaretleyin ve aşağıya "
                    "yönlendirilecek URL'yi girin. Yeni öğelerde varsayılan KAPALIDIR."
                ),
                verbose_name="Dış Yönlendirme Aktif",
            ),
        ),
        migrations.AlterField(
            model_name="homeoperationalitem",
            name="external_url",
            field=models.URLField(
                blank=True,
                help_text="Sadece üstteki kutu işaretliyse kullanılır. Boşsa yönlendirme gerçekleşmez.",
                verbose_name="Dış Yönlendirme URL",
            ),
        ),
    ]
