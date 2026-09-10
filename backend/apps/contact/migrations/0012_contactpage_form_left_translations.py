from django.db import migrations, models


def copy_existing_content(apps, schema_editor):
    ContactPage = apps.get_model("contact", "ContactPage")
    for page in ContactPage.objects.all():
        page.form_left_title_tr = page.form_left_title_tr or page.form_left_title
        page.form_left_title_en = page.form_left_title_en or page.form_left_title
        page.form_left_description_tr = page.form_left_description_tr or page.form_left_description
        page.form_left_description_en = page.form_left_description_en or page.form_left_description
        page.save(
            update_fields=[
                "form_left_title_tr",
                "form_left_title_en",
                "form_left_description_tr",
                "form_left_description_en",
            ]
        )


class Migration(migrations.Migration):
    dependencies = [("contact", "0011_contactpage_hero_title")]

    operations = [
        migrations.AddField(
            model_name="contactpage",
            name="form_left_description_en",
            field=models.TextField(blank=True, null=True, verbose_name="Form Sol Açıklama"),
        ),
        migrations.AddField(
            model_name="contactpage",
            name="form_left_description_tr",
            field=models.TextField(blank=True, null=True, verbose_name="Form Sol Açıklama"),
        ),
        migrations.AddField(
            model_name="contactpage",
            name="form_left_title_en",
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name="Form Sol Başlık"),
        ),
        migrations.AddField(
            model_name="contactpage",
            name="form_left_title_tr",
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name="Form Sol Başlık"),
        ),
        migrations.RunPython(copy_existing_content, migrations.RunPython.noop),
    ]
