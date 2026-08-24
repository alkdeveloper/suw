from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0006_contact_add_info_image'),
    ]

    operations = [
        # ── Form copy ─────────────────────────────────────────────────────────
        migrations.AddField(model_name='contactpage', name='form_submit_label', field=models.CharField(blank=True, max_length=100, verbose_name='Form Gönder Butonu')),
        migrations.AddField(model_name='contactpage', name='form_submit_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Form Gönder Butonu [tr]')),
        migrations.AddField(model_name='contactpage', name='form_submit_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Form Gönder Butonu [en]')),

        migrations.AddField(model_name='contactpage', name='form_submitting_label', field=models.CharField(blank=True, max_length=100, verbose_name='Form Gönderiliyor Metni')),
        migrations.AddField(model_name='contactpage', name='form_submitting_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Form Gönderiliyor Metni [tr]')),
        migrations.AddField(model_name='contactpage', name='form_submitting_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Form Gönderiliyor Metni [en]')),

        migrations.AddField(model_name='contactpage', name='form_privacy_link_label', field=models.CharField(blank=True, max_length=100, verbose_name='Gizlilik Linki Metni')),
        migrations.AddField(model_name='contactpage', name='form_privacy_link_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Gizlilik Linki Metni [tr]')),
        migrations.AddField(model_name='contactpage', name='form_privacy_link_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Gizlilik Linki Metni [en]')),

        migrations.AddField(model_name='contactpage', name='form_feedback_success_message', field=models.CharField(blank=True, max_length=300, verbose_name='Form Başarı Mesajı')),
        migrations.AddField(model_name='contactpage', name='form_feedback_success_message_tr', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Form Başarı Mesajı [tr]')),
        migrations.AddField(model_name='contactpage', name='form_feedback_success_message_en', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Form Başarı Mesajı [en]')),

        migrations.AddField(model_name='contactpage', name='form_feedback_error_message', field=models.CharField(blank=True, max_length=300, verbose_name='Form Hata Mesajı')),
        migrations.AddField(model_name='contactpage', name='form_feedback_error_message_tr', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Form Hata Mesajı [tr]')),
        migrations.AddField(model_name='contactpage', name='form_feedback_error_message_en', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Form Hata Mesajı [en]')),

        migrations.AddField(model_name='contactpage', name='form_field_first_name', field=models.CharField(blank=True, max_length=100, verbose_name='Ad Etiketi')),
        migrations.AddField(model_name='contactpage', name='form_field_first_name_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Ad Etiketi [tr]')),
        migrations.AddField(model_name='contactpage', name='form_field_first_name_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Ad Etiketi [en]')),

        migrations.AddField(model_name='contactpage', name='form_field_last_name', field=models.CharField(blank=True, max_length=100, verbose_name='Soyad Etiketi')),
        migrations.AddField(model_name='contactpage', name='form_field_last_name_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Soyad Etiketi [tr]')),
        migrations.AddField(model_name='contactpage', name='form_field_last_name_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Soyad Etiketi [en]')),

        migrations.AddField(model_name='contactpage', name='form_field_email', field=models.CharField(blank=True, max_length=100, verbose_name='E-posta Etiketi')),
        migrations.AddField(model_name='contactpage', name='form_field_email_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='E-posta Etiketi [tr]')),
        migrations.AddField(model_name='contactpage', name='form_field_email_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='E-posta Etiketi [en]')),

        migrations.AddField(model_name='contactpage', name='form_field_phone', field=models.CharField(blank=True, max_length=100, verbose_name='Telefon Etiketi')),
        migrations.AddField(model_name='contactpage', name='form_field_phone_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Telefon Etiketi [tr]')),
        migrations.AddField(model_name='contactpage', name='form_field_phone_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Telefon Etiketi [en]')),

        migrations.AddField(model_name='contactpage', name='form_field_subject', field=models.CharField(blank=True, max_length=100, verbose_name='Konu Etiketi')),
        migrations.AddField(model_name='contactpage', name='form_field_subject_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Konu Etiketi [tr]')),
        migrations.AddField(model_name='contactpage', name='form_field_subject_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Konu Etiketi [en]')),

        migrations.AddField(model_name='contactpage', name='form_field_message', field=models.CharField(blank=True, max_length=100, verbose_name='Mesaj Etiketi')),
        migrations.AddField(model_name='contactpage', name='form_field_message_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Mesaj Etiketi [tr]')),
        migrations.AddField(model_name='contactpage', name='form_field_message_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Mesaj Etiketi [en]')),

        migrations.AddField(model_name='contactpage', name='form_placeholder_first_name', field=models.CharField(blank=True, max_length=100, verbose_name='Ad Placeholder')),
        migrations.AddField(model_name='contactpage', name='form_placeholder_first_name_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Ad Placeholder [tr]')),
        migrations.AddField(model_name='contactpage', name='form_placeholder_first_name_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Ad Placeholder [en]')),

        migrations.AddField(model_name='contactpage', name='form_placeholder_last_name', field=models.CharField(blank=True, max_length=100, verbose_name='Soyad Placeholder')),
        migrations.AddField(model_name='contactpage', name='form_placeholder_last_name_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Soyad Placeholder [tr]')),
        migrations.AddField(model_name='contactpage', name='form_placeholder_last_name_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Soyad Placeholder [en]')),

        migrations.AddField(model_name='contactpage', name='form_placeholder_email', field=models.CharField(blank=True, max_length=100, verbose_name='E-posta Placeholder')),
        migrations.AddField(model_name='contactpage', name='form_placeholder_email_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='E-posta Placeholder [tr]')),
        migrations.AddField(model_name='contactpage', name='form_placeholder_email_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='E-posta Placeholder [en]')),

        migrations.AddField(model_name='contactpage', name='form_placeholder_phone', field=models.CharField(blank=True, max_length=100, verbose_name='Telefon Placeholder')),
        migrations.AddField(model_name='contactpage', name='form_placeholder_phone_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Telefon Placeholder [tr]')),
        migrations.AddField(model_name='contactpage', name='form_placeholder_phone_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Telefon Placeholder [en]')),

        migrations.AddField(model_name='contactpage', name='form_placeholder_subject', field=models.CharField(blank=True, max_length=100, verbose_name='Konu Placeholder')),
        migrations.AddField(model_name='contactpage', name='form_placeholder_subject_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Konu Placeholder [tr]')),
        migrations.AddField(model_name='contactpage', name='form_placeholder_subject_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Konu Placeholder [en]')),

        migrations.AddField(model_name='contactpage', name='form_placeholder_message', field=models.CharField(blank=True, max_length=100, verbose_name='Mesaj Placeholder')),
        migrations.AddField(model_name='contactpage', name='form_placeholder_message_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Mesaj Placeholder [tr]')),
        migrations.AddField(model_name='contactpage', name='form_placeholder_message_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Mesaj Placeholder [en]')),

        # ── Newsletter copy ───────────────────────────────────────────────────
        migrations.AddField(model_name='contactpage', name='newsletter_submit_aria_label', field=models.CharField(blank=True, max_length=200, verbose_name='Bülten Gönder Aria Etiketi')),
        migrations.AddField(model_name='contactpage', name='newsletter_submit_aria_label_tr', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Bülten Gönder Aria Etiketi [tr]')),
        migrations.AddField(model_name='contactpage', name='newsletter_submit_aria_label_en', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Bülten Gönder Aria Etiketi [en]')),

        migrations.AddField(model_name='contactpage', name='newsletter_success_message', field=models.CharField(blank=True, max_length=300, verbose_name='Bülten Başarı Mesajı')),
        migrations.AddField(model_name='contactpage', name='newsletter_success_message_tr', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Bülten Başarı Mesajı [tr]')),
        migrations.AddField(model_name='contactpage', name='newsletter_success_message_en', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Bülten Başarı Mesajı [en]')),

        migrations.AddField(model_name='contactpage', name='newsletter_error_message', field=models.CharField(blank=True, max_length=300, verbose_name='Bülten Hata Mesajı')),
        migrations.AddField(model_name='contactpage', name='newsletter_error_message_tr', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Bülten Hata Mesajı [tr]')),
        migrations.AddField(model_name='contactpage', name='newsletter_error_message_en', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Bülten Hata Mesajı [en]')),
    ]
