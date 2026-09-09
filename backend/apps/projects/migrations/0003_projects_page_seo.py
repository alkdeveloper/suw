from django.db import migrations, models


def seed_projects_seo(apps, schema_editor):
    Settings = apps.get_model("projects", "ProjectsPageSettings")
    page, _ = Settings.objects.get_or_create(pk=1)
    page.seo_title_tr = page.seo_title_tr or "Projeler"
    page.seo_title_en = page.seo_title_en or "Projects"
    page.seo_description_tr = page.seo_description_tr or "Kurumsal ekipler, saha operasyonları ve özel ihtiyaçlar için geliştirilen seçili SUW iş giyimi projelerini keşfedin."
    page.seo_description_en = page.seo_description_en or "Explore selected SUW workwear projects developed for corporate teams, field operations and custom requirements."
    page.save(update_fields=["seo_title_tr", "seo_title_en", "seo_description_tr", "seo_description_en"])


class Migration(migrations.Migration):
    dependencies = [("projects", "0002_align_project_fields")]
    operations = [
        migrations.AddField(model_name="projectspagesettings", name="seo_title_tr", field=models.CharField(blank=True, max_length=200)),
        migrations.AddField(model_name="projectspagesettings", name="seo_title_en", field=models.CharField(blank=True, max_length=200)),
        migrations.AddField(model_name="projectspagesettings", name="seo_description_tr", field=models.TextField(blank=True)),
        migrations.AddField(model_name="projectspagesettings", name="seo_description_en", field=models.TextField(blank=True)),
        migrations.RunPython(seed_projects_seo, migrations.RunPython.noop),
    ]
