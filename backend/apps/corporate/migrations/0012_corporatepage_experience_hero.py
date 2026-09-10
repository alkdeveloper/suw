from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("corporate", "0011_add_about_chronology")]

    operations = [
        migrations.AddField(
            model_name="corporatepage",
            name="experience_number_tr",
            field=models.CharField(blank=True, default="50", max_length=40, verbose_name="Tecrübe Sayısı TR"),
        ),
        migrations.AddField(
            model_name="corporatepage",
            name="experience_label_tr",
            field=models.CharField(blank=True, default="YILLIK TECRÜBE", max_length=120, verbose_name="Tecrübe Etiketi TR"),
        ),
        migrations.AddField(
            model_name="corporatepage",
            name="experience_number_en",
            field=models.CharField(blank=True, default="50", max_length=40, verbose_name="Experience Number EN"),
        ),
        migrations.AddField(
            model_name="corporatepage",
            name="experience_label_en",
            field=models.CharField(blank=True, default="YEARS OF EXPERIENCE", max_length=120, verbose_name="Experience Label EN"),
        ),
        migrations.AlterField(
            model_name="corporatepage",
            name="experience_description_tr",
            field=models.TextField(blank=True, verbose_name="Tecrübe Açıklaması TR"),
        ),
        migrations.AlterField(
            model_name="corporatepage",
            name="experience_description_en",
            field=models.TextField(blank=True, verbose_name="Experience Description EN"),
        ),
    ]
