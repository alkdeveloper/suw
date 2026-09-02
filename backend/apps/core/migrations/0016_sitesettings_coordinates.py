from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0015_sitecontactsettings_sitesettings_apple_maps_url_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="sitesettings",
            name="latitude",
            field=models.DecimalField(
                blank=True,
                decimal_places=6,
                max_digits=9,
                null=True,
                verbose_name="Enlem",
            ),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="longitude",
            field=models.DecimalField(
                blank=True,
                decimal_places=6,
                max_digits=10,
                null=True,
                verbose_name="Boylam",
            ),
        ),
    ]
