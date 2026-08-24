from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0002_newslettersubscriber"),
    ]

    operations = [
        migrations.AddField(
            model_name="sitesettings",
            name="footer_address_label",
            field=models.CharField(blank=True, max_length=100, verbose_name="Footer Adres Etiketi"),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="footer_contact_title",
            field=models.CharField(blank=True, max_length=100, verbose_name="Footer İletişim Başlığı"),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="footer_navigation_title",
            field=models.CharField(blank=True, max_length=100, verbose_name="Footer Navigasyon Başlığı"),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="footer_newsletter_consent_link_text",
            field=models.CharField(blank=True, max_length=200, verbose_name="Bülten Rıza Link Metni"),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="footer_newsletter_consent_text",
            field=models.TextField(blank=True, verbose_name="Bülten Rıza Metni"),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="footer_newsletter_placeholder",
            field=models.CharField(blank=True, max_length=200, verbose_name="Bülten Placeholder"),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="footer_social_title",
            field=models.CharField(blank=True, max_length=100, verbose_name="Footer Sosyal Başlığı"),
        ),
    ]
