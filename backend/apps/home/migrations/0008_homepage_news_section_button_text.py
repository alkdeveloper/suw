from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_remove_homepage_video_url_homepage_video_file'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='news_section_button_text',
            field=models.CharField(blank=True, max_length=100, verbose_name='Haberler Buton Metni'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='news_section_button_text_tr',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Haberler Buton Metni [tr]'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='news_section_button_text_en',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Haberler Buton Metni [en]'),
        ),
    ]
