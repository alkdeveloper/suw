from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("corporate", "0014_corporatepage_archive_images")]

    operations = [
        migrations.RemoveField(model_name="corporatepage", name="why_title_tr"),
        migrations.RemoveField(model_name="corporatepage", name="why_title_en"),
        migrations.RemoveField(model_name="corporatepage", name="why_description_tr"),
        migrations.RemoveField(model_name="corporatepage", name="why_description_en"),
        migrations.RemoveField(model_name="corporatepage", name="final_cta_eyebrow_tr"),
        migrations.RemoveField(model_name="corporatepage", name="final_cta_eyebrow_en"),
        migrations.RenameField(model_name="corporatepage", old_name="final_cta_title_tr", new_name="about_cta_title_tr"),
        migrations.RenameField(model_name="corporatepage", old_name="final_cta_title_en", new_name="about_cta_title_en"),
        migrations.RenameField(model_name="corporatepage", old_name="final_cta_description_tr", new_name="about_cta_description_tr"),
        migrations.RenameField(model_name="corporatepage", old_name="final_cta_description_en", new_name="about_cta_description_en"),
        migrations.RenameField(model_name="corporatepage", old_name="final_cta_text_tr", new_name="about_cta_text_tr"),
        migrations.RenameField(model_name="corporatepage", old_name="final_cta_text_en", new_name="about_cta_text_en"),
        migrations.RenameField(model_name="corporatepage", old_name="final_cta_link", new_name="about_cta_link"),
        migrations.AlterField(model_name="corporatepage", name="about_cta_title_tr", field=models.CharField(blank=True, max_length=220, verbose_name="CTA Başlık TR")),
        migrations.AlterField(model_name="corporatepage", name="about_cta_title_en", field=models.CharField(blank=True, max_length=220, verbose_name="CTA Başlık EN")),
        migrations.AlterField(model_name="corporatepage", name="about_cta_description_tr", field=models.TextField(blank=True, verbose_name="CTA Açıklama TR")),
        migrations.AlterField(model_name="corporatepage", name="about_cta_description_en", field=models.TextField(blank=True, verbose_name="CTA Açıklama EN")),
        migrations.AlterField(model_name="corporatepage", name="about_cta_text_tr", field=models.CharField(blank=True, max_length=100, verbose_name="CTA Buton TR")),
        migrations.AlterField(model_name="corporatepage", name="about_cta_text_en", field=models.CharField(blank=True, max_length=100, verbose_name="CTA Buton EN")),
        migrations.AlterField(model_name="corporatepage", name="about_cta_link", field=models.CharField(blank=True, max_length=200, verbose_name="CTA Link")),
    ]
