from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [("corporate", "0017_update_timeline_heading")]

    operations = [
        migrations.RemoveField(model_name="corporatepage", name="about_cta_text_tr"),
        migrations.RemoveField(model_name="corporatepage", name="about_cta_text_en"),
        migrations.RemoveField(model_name="corporatepage", name="about_cta_link"),
    ]
