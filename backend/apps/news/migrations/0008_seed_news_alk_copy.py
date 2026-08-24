# Data migration disabled: seeding handled by SQL dump restore.

from django.db import migrations


def noop(apps, schema_editor):
    return


class Migration(migrations.Migration):

    dependencies = [
        ("news", "0007_remove_news_gallery_images_m2m"),
    ]

    operations = [
        migrations.RunPython(noop, noop),
    ]
