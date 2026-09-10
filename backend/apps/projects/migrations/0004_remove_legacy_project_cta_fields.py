from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("projects", "0003_projects_page_seo"),
    ]

    operations = [
        migrations.RemoveField(model_name="projectspagesettings", name="cta_description_en"),
        migrations.RemoveField(model_name="projectspagesettings", name="cta_description_tr"),
        migrations.RemoveField(model_name="projectspagesettings", name="cta_eyebrow_en"),
        migrations.RemoveField(model_name="projectspagesettings", name="cta_eyebrow_tr"),
        migrations.RemoveField(model_name="projectspagesettings", name="cta_text_en"),
        migrations.RemoveField(model_name="projectspagesettings", name="cta_text_tr"),
        migrations.RemoveField(model_name="projectspagesettings", name="cta_title_en"),
        migrations.RemoveField(model_name="projectspagesettings", name="cta_title_tr"),
    ]
