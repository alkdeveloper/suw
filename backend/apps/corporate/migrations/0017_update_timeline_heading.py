from django.db import migrations, models


def set_timeline_titles(apps, schema_editor):
    CorporatePage = apps.get_model("corporate", "CorporatePage")
    CorporatePage.objects.update(timeline_title_tr="HİKAYEMİZ", timeline_title_en="OUR STORY")


class Migration(migrations.Migration):
    dependencies = [("corporate", "0016_corporatepage_group_image_position")]

    operations = [
        migrations.AlterField(
            model_name="corporatepage",
            name="timeline_title_tr",
            field=models.CharField(blank=True, default="HİKAYEMİZ", max_length=220, verbose_name="Kronoloji Başlığı TR"),
        ),
        migrations.AlterField(
            model_name="corporatepage",
            name="timeline_title_en",
            field=models.CharField(blank=True, default="OUR STORY", max_length=220, verbose_name="Kronoloji Başlığı EN"),
        ),
        migrations.RunPython(set_timeline_titles, migrations.RunPython.noop),
    ]
