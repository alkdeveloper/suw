from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0004_newspage_add_cta_fields'),
    ]

    operations = [
        migrations.AddField(model_name='newspage', name='featured_button_text', field=models.CharField(blank=True, max_length=100, verbose_name='Öne Çıkan Buton Metni')),
        migrations.AddField(model_name='newspage', name='featured_button_text_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Öne Çıkan Buton Metni [tr]')),
        migrations.AddField(model_name='newspage', name='featured_button_text_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Öne Çıkan Buton Metni [en]')),

        migrations.AddField(model_name='newspage', name='list_load_more_text', field=models.CharField(blank=True, max_length=100, verbose_name='Daha Fazla Yükle Metni')),
        migrations.AddField(model_name='newspage', name='list_load_more_text_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Daha Fazla Yükle Metni [tr]')),
        migrations.AddField(model_name='newspage', name='list_load_more_text_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Daha Fazla Yükle Metni [en]')),

        migrations.AddField(model_name='newspage', name='share_title', field=models.CharField(blank=True, max_length=100, verbose_name='Paylaş Başlığı')),
        migrations.AddField(model_name='newspage', name='share_title_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Paylaş Başlığı [tr]')),
        migrations.AddField(model_name='newspage', name='share_title_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Paylaş Başlığı [en]')),

        migrations.AddField(model_name='newspage', name='previous_label', field=models.CharField(blank=True, max_length=100, verbose_name='Önceki Etiketi')),
        migrations.AddField(model_name='newspage', name='previous_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Önceki Etiketi [tr]')),
        migrations.AddField(model_name='newspage', name='previous_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Önceki Etiketi [en]')),

        migrations.AddField(model_name='newspage', name='next_label', field=models.CharField(blank=True, max_length=100, verbose_name='Sonraki Etiketi')),
        migrations.AddField(model_name='newspage', name='next_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Sonraki Etiketi [tr]')),
        migrations.AddField(model_name='newspage', name='next_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Sonraki Etiketi [en]')),

        migrations.AddField(model_name='newspage', name='related_title', field=models.CharField(blank=True, max_length=200, verbose_name='İlgili Haberler Başlığı')),
        migrations.AddField(model_name='newspage', name='related_title_tr', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='İlgili Haberler Başlığı [tr]')),
        migrations.AddField(model_name='newspage', name='related_title_en', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='İlgili Haberler Başlığı [en]')),

        migrations.AddField(model_name='newspage', name='related_view_all_text', field=models.CharField(blank=True, max_length=100, verbose_name='İlgili Tümünü Gör Metni')),
        migrations.AddField(model_name='newspage', name='related_view_all_text_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='İlgili Tümünü Gör Metni [tr]')),
        migrations.AddField(model_name='newspage', name='related_view_all_text_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='İlgili Tümünü Gör Metni [en]')),
    ]
