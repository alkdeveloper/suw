from django.db import migrations


def seed_about_cta(apps, schema_editor):
    HomePage = apps.get_model("home", "HomePage")
    page = HomePage.objects.first()
    if not page:
        return
    tr = "Kurumsal"
    en = "Corporate"
    HomePage.objects.filter(pk=page.pk).update(
        about_cta_button_text=tr,
        about_cta_button_text_tr=tr,
        about_cta_button_text_en=en,
    )


def noop(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0011_homepage_about_cta_button"),
    ]

    operations = [
        migrations.RunPython(seed_about_cta, noop),
    ]
