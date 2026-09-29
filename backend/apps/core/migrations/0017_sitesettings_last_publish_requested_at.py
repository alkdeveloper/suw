from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("core", "0016_sitesettings_coordinates")]

    operations = [
        migrations.AddField(
            model_name="sitesettings",
            name="last_publish_requested_at",
            field=models.DateTimeField(
                blank=True,
                editable=False,
                null=True,
                verbose_name="Son yayın isteği",
            ),
        ),
    ]
