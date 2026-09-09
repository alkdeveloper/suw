from django.db import migrations, models


def seed_contact_hero(apps, schema_editor):
    ContactPage = apps.get_model("contact", "ContactPage")
    page, _ = ContactPage.objects.get_or_create(pk=1)
    page.hero_title_tr = page.hero_title_tr or "İŞ GİYİMİNİ\nKONUŞALIM."
    page.hero_title_en = page.hero_title_en or "LET'S TALK\nWORKWEAR."
    page.save(update_fields=["hero_title_tr", "hero_title_en"])


class Migration(migrations.Migration):
    dependencies = [("contact", "0010_contactpage_form_eyebrow_and_more")]
    operations = [
        migrations.AddField(model_name="contactpage", name="hero_title", field=models.CharField(blank=True, max_length=220, verbose_name="Hero Başlığı")),
        migrations.AddField(model_name="contactpage", name="hero_title_en", field=models.CharField(blank=True, max_length=220, null=True, verbose_name="Hero Başlığı")),
        migrations.AddField(model_name="contactpage", name="hero_title_tr", field=models.CharField(blank=True, max_length=220, null=True, verbose_name="Hero Başlığı")),
        migrations.RunPython(seed_contact_hero, migrations.RunPython.noop),
    ]
