from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0003_gallery_intro_video_cta'),
    ]

    operations = [
        migrations.AddField(model_name='gallerypage', name='show_more_text', field=models.CharField(blank=True, max_length=100, verbose_name='Daha Fazla Göster Metni')),
        migrations.AddField(model_name='gallerypage', name='show_more_text_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Daha Fazla Göster Metni [tr]')),
        migrations.AddField(model_name='gallerypage', name='show_more_text_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Daha Fazla Göster Metni [en]')),

        migrations.AddField(model_name='gallerypage', name='lightbox_previous_aria_label', field=models.CharField(blank=True, max_length=100, verbose_name='Lightbox Önceki Aria')),
        migrations.AddField(model_name='gallerypage', name='lightbox_previous_aria_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Lightbox Önceki Aria [tr]')),
        migrations.AddField(model_name='gallerypage', name='lightbox_previous_aria_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Lightbox Önceki Aria [en]')),

        migrations.AddField(model_name='gallerypage', name='lightbox_next_aria_label', field=models.CharField(blank=True, max_length=100, verbose_name='Lightbox Sonraki Aria')),
        migrations.AddField(model_name='gallerypage', name='lightbox_next_aria_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Lightbox Sonraki Aria [tr]')),
        migrations.AddField(model_name='gallerypage', name='lightbox_next_aria_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Lightbox Sonraki Aria [en]')),

        migrations.AddField(model_name='gallerypage', name='lightbox_close_aria_label', field=models.CharField(blank=True, max_length=100, verbose_name='Lightbox Kapat Aria')),
        migrations.AddField(model_name='gallerypage', name='lightbox_close_aria_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Lightbox Kapat Aria [tr]')),
        migrations.AddField(model_name='gallerypage', name='lightbox_close_aria_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Lightbox Kapat Aria [en]')),
    ]
