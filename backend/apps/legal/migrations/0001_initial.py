import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('ordered_model', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='LegalPage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('meta_title', models.CharField(blank=True, max_length=200, verbose_name='Meta Başlık')),
                ('meta_title_tr', models.CharField(blank=True, max_length=200, null=True, verbose_name='Meta Başlık [tr]')),
                ('meta_title_en', models.CharField(blank=True, max_length=200, null=True, verbose_name='Meta Başlık [en]')),
                ('meta_description', models.TextField(blank=True, verbose_name='Meta Açıklama')),
                ('meta_description_tr', models.TextField(blank=True, null=True, verbose_name='Meta Açıklama [tr]')),
                ('meta_description_en', models.TextField(blank=True, null=True, verbose_name='Meta Açıklama [en]')),
                ('slug', models.SlugField(help_text='Örnek: privacy-and-cookie-policy', max_length=200, unique=True, verbose_name='Slug')),
                ('title', models.CharField(max_length=300, verbose_name='Başlık')),
                ('title_tr', models.CharField(max_length=300, null=True, verbose_name='Başlık [tr]')),
                ('title_en', models.CharField(max_length=300, null=True, verbose_name='Başlık [en]')),
                ('subtitle', models.CharField(blank=True, max_length=300, verbose_name='Alt Başlık')),
                ('subtitle_tr', models.CharField(blank=True, max_length=300, null=True, verbose_name='Alt Başlık [tr]')),
                ('subtitle_en', models.CharField(blank=True, max_length=300, null=True, verbose_name='Alt Başlık [en]')),
                ('intro', models.TextField(blank=True, verbose_name='Giriş Metni')),
                ('intro_tr', models.TextField(blank=True, null=True, verbose_name='Giriş Metni [tr]')),
                ('intro_en', models.TextField(blank=True, null=True, verbose_name='Giriş Metni [en]')),
                ('last_updated', models.DateField(blank=True, null=True, verbose_name='Son Güncelleme Tarihi')),
                ('last_updated_label', models.CharField(blank=True, max_length=100, verbose_name='Son Güncelleme Etiketi')),
                ('last_updated_label_tr', models.CharField(blank=True, max_length=100, null=True, verbose_name='Son Güncelleme Etiketi [tr]')),
                ('last_updated_label_en', models.CharField(blank=True, max_length=100, null=True, verbose_name='Son Güncelleme Etiketi [en]')),
                ('hero_image', models.ImageField(blank=True, upload_to='legal/hero/', validators=[django.core.validators.FileExtensionValidator(['jpg', 'jpeg', 'png'])], verbose_name='Hero Görsel')),
                ('hero_glow_image', models.ImageField(blank=True, upload_to='legal/hero/', validators=[django.core.validators.FileExtensionValidator(['jpg', 'jpeg', 'png', 'svg'])], verbose_name='Hero Glow Görsel')),
            ],
            options={
                'verbose_name': 'Yasal Sayfa',
                'verbose_name_plural': 'Yasal Sayfalar',
                'ordering': ['slug'],
            },
        ),
        migrations.CreateModel(
            name='LegalSection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order', models.PositiveIntegerField(db_index=True, editable=False, verbose_name='Sıra')),
                ('heading', models.CharField(blank=True, max_length=300, verbose_name='Bölüm Başlığı')),
                ('heading_tr', models.CharField(blank=True, max_length=300, null=True, verbose_name='Bölüm Başlığı [tr]')),
                ('heading_en', models.CharField(blank=True, max_length=300, null=True, verbose_name='Bölüm Başlığı [en]')),
                ('body', models.JSONField(default=list, help_text='Her satır ayrı bir paragraf. JSON string array: ["paragraf1", "paragraf2"]', verbose_name='Bölüm İçeriği')),
                ('body_tr', models.JSONField(blank=True, default=list, null=True, verbose_name='Bölüm İçeriği [tr]')),
                ('body_en', models.JSONField(blank=True, default=list, null=True, verbose_name='Bölüm İçeriği [en]')),
                ('page', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sections', to='legal.legalpage', verbose_name='Sayfa')),
            ],
            options={
                'verbose_name': 'Yasal Sayfa Bölümü',
                'verbose_name_plural': 'Yasal Sayfa Bölümleri',
                'ordering': ['order'],
                'abstract': False,
            },
        ),
    ]
