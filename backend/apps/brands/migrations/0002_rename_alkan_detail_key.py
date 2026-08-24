from django.db import migrations


def forwards(apps, schema_editor):
    GroupCompany = apps.get_model("brands", "GroupCompany")
    GroupCompany.objects.filter(detail_key="alkan").update(detail_key="alkan-promosyon")


def backwards(apps, schema_editor):
    GroupCompany = apps.get_model("brands", "GroupCompany")
    GroupCompany.objects.filter(detail_key="alkan-promosyon").update(detail_key="alkan")


class Migration(migrations.Migration):
    dependencies = [
        ("brands", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(forwards, backwards),
    ]
