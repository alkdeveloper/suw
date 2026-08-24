from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_sitesettings_footer_ui_copy'),
    ]

    operations = [
        # ── Header copy ──────────────────────────────────────────────────────
        migrations.AddField(model_name='sitesettings', name='header_home_aria_label', field=models.CharField(blank=True, max_length=200, verbose_name='Header Ana Sayfa Aria Etiketi')),
        migrations.AddField(model_name='sitesettings', name='header_home_aria_label_tr', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Header Ana Sayfa Aria Etiketi [tr]')),
        migrations.AddField(model_name='sitesettings', name='header_home_aria_label_en', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Header Ana Sayfa Aria Etiketi [en]')),

        migrations.AddField(model_name='sitesettings', name='header_desktop_nav_aria_label', field=models.CharField(blank=True, max_length=200, verbose_name='Header Masaüstü Menü Aria Etiketi')),
        migrations.AddField(model_name='sitesettings', name='header_desktop_nav_aria_label_tr', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Header Masaüstü Menü Aria Etiketi [tr]')),
        migrations.AddField(model_name='sitesettings', name='header_desktop_nav_aria_label_en', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Header Masaüstü Menü Aria Etiketi [en]')),

        migrations.AddField(model_name='sitesettings', name='header_mobile_nav_aria_label', field=models.CharField(blank=True, max_length=200, verbose_name='Header Mobil Menü Aria Etiketi')),
        migrations.AddField(model_name='sitesettings', name='header_mobile_nav_aria_label_tr', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Header Mobil Menü Aria Etiketi [tr]')),
        migrations.AddField(model_name='sitesettings', name='header_mobile_nav_aria_label_en', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Header Mobil Menü Aria Etiketi [en]')),

        migrations.AddField(model_name='sitesettings', name='header_locale_button_aria_label_prefix', field=models.CharField(blank=True, max_length=200, verbose_name='Header Dil Butonu Aria Ön Ek')),
        migrations.AddField(model_name='sitesettings', name='header_locale_button_aria_label_prefix_tr', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Header Dil Butonu Aria Ön Ek [tr]')),
        migrations.AddField(model_name='sitesettings', name='header_locale_button_aria_label_prefix_en', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Header Dil Butonu Aria Ön Ek [en]')),

        migrations.AddField(model_name='sitesettings', name='header_mobile_menu_aria_label', field=models.CharField(blank=True, max_length=200, verbose_name='Header Mobil Menü Aç/Kapat Aria')),
        migrations.AddField(model_name='sitesettings', name='header_mobile_menu_aria_label_tr', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Header Mobil Menü Aç/Kapat Aria [tr]')),
        migrations.AddField(model_name='sitesettings', name='header_mobile_menu_aria_label_en', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Header Mobil Menü Aç/Kapat Aria [en]')),

        # ── Footer copy ──────────────────────────────────────────────────────
        migrations.AddField(model_name='sitesettings', name='footer_home_aria_label', field=models.CharField(blank=True, max_length=200, verbose_name='Footer Ana Sayfa Aria Etiketi')),
        migrations.AddField(model_name='sitesettings', name='footer_home_aria_label_tr', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Footer Ana Sayfa Aria Etiketi [tr]')),
        migrations.AddField(model_name='sitesettings', name='footer_home_aria_label_en', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Footer Ana Sayfa Aria Etiketi [en]')),

        migrations.AddField(model_name='sitesettings', name='footer_back_to_top_aria_label', field=models.CharField(blank=True, max_length=200, verbose_name='Yukarı Çık Aria Etiketi')),
        migrations.AddField(model_name='sitesettings', name='footer_back_to_top_aria_label_tr', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Yukarı Çık Aria Etiketi [tr]')),
        migrations.AddField(model_name='sitesettings', name='footer_back_to_top_aria_label_en', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Yukarı Çık Aria Etiketi [en]')),

        migrations.AddField(model_name='sitesettings', name='footer_newsletter_submit_aria_label', field=models.CharField(blank=True, max_length=200, verbose_name='Bülten Gönder Aria Etiketi')),
        migrations.AddField(model_name='sitesettings', name='footer_newsletter_submit_aria_label_tr', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Bülten Gönder Aria Etiketi [tr]')),
        migrations.AddField(model_name='sitesettings', name='footer_newsletter_submit_aria_label_en', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Bülten Gönder Aria Etiketi [en]')),

        migrations.AddField(model_name='sitesettings', name='footer_newsletter_success_message', field=models.CharField(blank=True, max_length=300, verbose_name='Bülten Başarı Mesajı')),
        migrations.AddField(model_name='sitesettings', name='footer_newsletter_success_message_tr', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Bülten Başarı Mesajı [tr]')),
        migrations.AddField(model_name='sitesettings', name='footer_newsletter_success_message_en', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Bülten Başarı Mesajı [en]')),

        migrations.AddField(model_name='sitesettings', name='footer_newsletter_error_message', field=models.CharField(blank=True, max_length=300, verbose_name='Bülten Hata Mesajı')),
        migrations.AddField(model_name='sitesettings', name='footer_newsletter_error_message_tr', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Bülten Hata Mesajı [tr]')),
        migrations.AddField(model_name='sitesettings', name='footer_newsletter_error_message_en', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Bülten Hata Mesajı [en]')),

        migrations.AddField(model_name='sitesettings', name='footer_contact_label_phone', field=models.CharField(blank=True, max_length=100, verbose_name='Footer İletişim Telefon Etiketi')),
        migrations.AddField(model_name='sitesettings', name='footer_contact_label_phone_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Footer İletişim Telefon Etiketi [tr]')),
        migrations.AddField(model_name='sitesettings', name='footer_contact_label_phone_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Footer İletişim Telefon Etiketi [en]')),

        migrations.AddField(model_name='sitesettings', name='footer_contact_label_email', field=models.CharField(blank=True, max_length=100, verbose_name='Footer İletişim E-posta Etiketi')),
        migrations.AddField(model_name='sitesettings', name='footer_contact_label_email_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Footer İletişim E-posta Etiketi [tr]')),
        migrations.AddField(model_name='sitesettings', name='footer_contact_label_email_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Footer İletişim E-posta Etiketi [en]')),

        migrations.AddField(model_name='sitesettings', name='footer_contact_label_whatsapp', field=models.CharField(blank=True, max_length=100, verbose_name='Footer İletişim WhatsApp Etiketi')),
        migrations.AddField(model_name='sitesettings', name='footer_contact_label_whatsapp_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Footer İletişim WhatsApp Etiketi [tr]')),
        migrations.AddField(model_name='sitesettings', name='footer_contact_label_whatsapp_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Footer İletişim WhatsApp Etiketi [en]')),

        migrations.AddField(model_name='sitesettings', name='footer_social_label_instagram', field=models.CharField(blank=True, max_length=100, verbose_name='Instagram Sosyal Etiket')),
        migrations.AddField(model_name='sitesettings', name='footer_social_label_instagram_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Instagram Sosyal Etiket [tr]')),
        migrations.AddField(model_name='sitesettings', name='footer_social_label_instagram_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Instagram Sosyal Etiket [en]')),

        migrations.AddField(model_name='sitesettings', name='footer_social_label_linkedin', field=models.CharField(blank=True, max_length=100, verbose_name='LinkedIn Sosyal Etiket')),
        migrations.AddField(model_name='sitesettings', name='footer_social_label_linkedin_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='LinkedIn Sosyal Etiket [tr]')),
        migrations.AddField(model_name='sitesettings', name='footer_social_label_linkedin_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='LinkedIn Sosyal Etiket [en]')),

        migrations.AddField(model_name='sitesettings', name='footer_social_label_facebook', field=models.CharField(blank=True, max_length=100, verbose_name='Facebook Sosyal Etiket')),
        migrations.AddField(model_name='sitesettings', name='footer_social_label_facebook_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Facebook Sosyal Etiket [tr]')),
        migrations.AddField(model_name='sitesettings', name='footer_social_label_facebook_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Facebook Sosyal Etiket [en]')),

        migrations.AddField(model_name='sitesettings', name='footer_social_label_x', field=models.CharField(blank=True, max_length=100, verbose_name='X Sosyal Etiket')),
        migrations.AddField(model_name='sitesettings', name='footer_social_label_x_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='X Sosyal Etiket [tr]')),
        migrations.AddField(model_name='sitesettings', name='footer_social_label_x_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='X Sosyal Etiket [en]')),

        migrations.AddField(model_name='sitesettings', name='footer_social_label_youtube', field=models.CharField(blank=True, max_length=100, verbose_name='YouTube Sosyal Etiket')),
        migrations.AddField(model_name='sitesettings', name='footer_social_label_youtube_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='YouTube Sosyal Etiket [tr]')),
        migrations.AddField(model_name='sitesettings', name='footer_social_label_youtube_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='YouTube Sosyal Etiket [en]')),

        # ── Not found copy ────────────────────────────────────────────────────
        migrations.AddField(model_name='sitesettings', name='not_found_title', field=models.CharField(blank=True, max_length=200, verbose_name='404 Başlık')),
        migrations.AddField(model_name='sitesettings', name='not_found_title_tr', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='404 Başlık [tr]')),
        migrations.AddField(model_name='sitesettings', name='not_found_title_en', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='404 Başlık [en]')),

        migrations.AddField(model_name='sitesettings', name='not_found_description', field=models.TextField(blank=True, verbose_name='404 Açıklama')),
        migrations.AddField(model_name='sitesettings', name='not_found_description_tr', field=models.TextField(blank=True, null=True, verbose_name='404 Açıklama [tr]')),
        migrations.AddField(model_name='sitesettings', name='not_found_description_en', field=models.TextField(blank=True, null=True, verbose_name='404 Açıklama [en]')),

        migrations.AddField(model_name='sitesettings', name='not_found_primary_button_text', field=models.CharField(blank=True, max_length=100, verbose_name='404 Birincil Buton Metni')),
        migrations.AddField(model_name='sitesettings', name='not_found_primary_button_text_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='404 Birincil Buton Metni [tr]')),
        migrations.AddField(model_name='sitesettings', name='not_found_primary_button_text_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='404 Birincil Buton Metni [en]')),

        migrations.AddField(model_name='sitesettings', name='not_found_secondary_button_text', field=models.CharField(blank=True, max_length=100, verbose_name='404 İkincil Buton Metni')),
        migrations.AddField(model_name='sitesettings', name='not_found_secondary_button_text_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='404 İkincil Buton Metni [tr]')),
        migrations.AddField(model_name='sitesettings', name='not_found_secondary_button_text_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='404 İkincil Buton Metni [en]')),
    ]
