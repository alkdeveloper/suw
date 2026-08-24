from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('careers', '0008_careers_add_apply_form_newsletter'),
    ]

    operations = [
        # ── Open positions copy ───────────────────────────────────────────────
        migrations.AddField(model_name='careersettings', name='positions_count_label_suffix', field=models.CharField(blank=True, max_length=100, verbose_name='Pozisyon Sayı Suffix')),
        migrations.AddField(model_name='careersettings', name='positions_count_label_suffix_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Pozisyon Sayı Suffix [tr]')),
        migrations.AddField(model_name='careersettings', name='positions_count_label_suffix_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Pozisyon Sayı Suffix [en]')),

        migrations.AddField(model_name='careersettings', name='positions_previous_aria_label', field=models.CharField(blank=True, max_length=100, verbose_name='Önceki Aria Etiketi')),
        migrations.AddField(model_name='careersettings', name='positions_previous_aria_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Önceki Aria Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='positions_previous_aria_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Önceki Aria Etiketi [en]')),

        migrations.AddField(model_name='careersettings', name='positions_next_aria_label', field=models.CharField(blank=True, max_length=100, verbose_name='Sonraki Aria Etiketi')),
        migrations.AddField(model_name='careersettings', name='positions_next_aria_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Sonraki Aria Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='positions_next_aria_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Sonraki Aria Etiketi [en]')),

        # ── Job listing copy ──────────────────────────────────────────────────
        migrations.AddField(model_name='careersettings', name='job_responsibilities_label', field=models.CharField(blank=True, max_length=100, verbose_name='Sorumluluklar Etiketi')),
        migrations.AddField(model_name='careersettings', name='job_responsibilities_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Sorumluluklar Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='job_responsibilities_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Sorumluluklar Etiketi [en]')),

        migrations.AddField(model_name='careersettings', name='job_expectations_label', field=models.CharField(blank=True, max_length=100, verbose_name='Beklentiler Etiketi')),
        migrations.AddField(model_name='careersettings', name='job_expectations_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Beklentiler Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='job_expectations_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Beklentiler Etiketi [en]')),

        migrations.AddField(model_name='careersettings', name='job_meta_department', field=models.CharField(blank=True, max_length=100, verbose_name='Departman Meta Etiketi')),
        migrations.AddField(model_name='careersettings', name='job_meta_department_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Departman Meta Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='job_meta_department_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Departman Meta Etiketi [en]')),

        migrations.AddField(model_name='careersettings', name='job_meta_location', field=models.CharField(blank=True, max_length=100, verbose_name='Lokasyon Meta Etiketi')),
        migrations.AddField(model_name='careersettings', name='job_meta_location_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Lokasyon Meta Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='job_meta_location_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Lokasyon Meta Etiketi [en]')),

        migrations.AddField(model_name='careersettings', name='job_meta_work_type', field=models.CharField(blank=True, max_length=100, verbose_name='Çalışma Şekli Meta Etiketi')),
        migrations.AddField(model_name='careersettings', name='job_meta_work_type_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Çalışma Şekli Meta Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='job_meta_work_type_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Çalışma Şekli Meta Etiketi [en]')),

        migrations.AddField(model_name='careersettings', name='job_meta_employment', field=models.CharField(blank=True, max_length=100, verbose_name='Çalışma Tipi Meta Etiketi')),
        migrations.AddField(model_name='careersettings', name='job_meta_employment_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Çalışma Tipi Meta Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='job_meta_employment_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Çalışma Tipi Meta Etiketi [en]')),

        migrations.AddField(model_name='careersettings', name='job_meta_experience', field=models.CharField(blank=True, max_length=100, verbose_name='Deneyim Meta Etiketi')),
        migrations.AddField(model_name='careersettings', name='job_meta_experience_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Deneyim Meta Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='job_meta_experience_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Deneyim Meta Etiketi [en]')),

        # ── Application form copy ─────────────────────────────────────────────
        migrations.AddField(model_name='careersettings', name='app_position_summary_label', field=models.CharField(blank=True, max_length=100, verbose_name='Pozisyon Özet Etiketi')),
        migrations.AddField(model_name='careersettings', name='app_position_summary_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Pozisyon Özet Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='app_position_summary_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Pozisyon Özet Etiketi [en]')),

        migrations.AddField(model_name='careersettings', name='app_form_title', field=models.CharField(blank=True, max_length=200, verbose_name='Başvuru Form Alt Başlığı')),
        migrations.AddField(model_name='careersettings', name='app_form_title_tr', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Başvuru Form Alt Başlığı [tr]')),
        migrations.AddField(model_name='careersettings', name='app_form_title_en', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Başvuru Form Alt Başlığı [en]')),

        migrations.AddField(model_name='careersettings', name='app_submit_label', field=models.CharField(blank=True, max_length=100, verbose_name='Başvuru Gönder Butonu')),
        migrations.AddField(model_name='careersettings', name='app_submit_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Başvuru Gönder Butonu [tr]')),
        migrations.AddField(model_name='careersettings', name='app_submit_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Başvuru Gönder Butonu [en]')),

        migrations.AddField(model_name='careersettings', name='app_submitting_label', field=models.CharField(blank=True, max_length=100, verbose_name='Başvuru Gönderiliyor')),
        migrations.AddField(model_name='careersettings', name='app_submitting_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Başvuru Gönderiliyor [tr]')),
        migrations.AddField(model_name='careersettings', name='app_submitting_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Başvuru Gönderiliyor [en]')),

        migrations.AddField(model_name='careersettings', name='app_upload_label', field=models.CharField(blank=True, max_length=100, verbose_name='CV Yükle Butonu')),
        migrations.AddField(model_name='careersettings', name='app_upload_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='CV Yükle Butonu [tr]')),
        migrations.AddField(model_name='careersettings', name='app_upload_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='CV Yükle Butonu [en]')),

        migrations.AddField(model_name='careersettings', name='app_privacy_link_label', field=models.CharField(blank=True, max_length=100, verbose_name='Gizlilik Linki Metni')),
        migrations.AddField(model_name='careersettings', name='app_privacy_link_label_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Gizlilik Linki Metni [tr]')),
        migrations.AddField(model_name='careersettings', name='app_privacy_link_label_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Gizlilik Linki Metni [en]')),

        migrations.AddField(model_name='careersettings', name='app_privacy_consent_text', field=models.TextField(blank=True, verbose_name='Rıza Metni')),
        migrations.AddField(model_name='careersettings', name='app_privacy_consent_text_tr', field=models.TextField(blank=True, null=True, verbose_name='Rıza Metni [tr]')),
        migrations.AddField(model_name='careersettings', name='app_privacy_consent_text_en', field=models.TextField(blank=True, null=True, verbose_name='Rıza Metni [en]')),

        migrations.AddField(model_name='careersettings', name='app_feedback_success_message', field=models.CharField(blank=True, max_length=300, verbose_name='Başvuru Başarı Mesajı')),
        migrations.AddField(model_name='careersettings', name='app_feedback_success_message_tr', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Başvuru Başarı Mesajı [tr]')),
        migrations.AddField(model_name='careersettings', name='app_feedback_success_message_en', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Başvuru Başarı Mesajı [en]')),

        migrations.AddField(model_name='careersettings', name='app_feedback_error_message', field=models.CharField(blank=True, max_length=300, verbose_name='Başvuru Hata Mesajı')),
        migrations.AddField(model_name='careersettings', name='app_feedback_error_message_tr', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Başvuru Hata Mesajı [tr]')),
        migrations.AddField(model_name='careersettings', name='app_feedback_error_message_en', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Başvuru Hata Mesajı [en]')),

        migrations.AddField(model_name='careersettings', name='app_feedback_missing_cv_message', field=models.CharField(blank=True, max_length=300, verbose_name='CV Eksik Mesajı')),
        migrations.AddField(model_name='careersettings', name='app_feedback_missing_cv_message_tr', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='CV Eksik Mesajı [tr]')),
        migrations.AddField(model_name='careersettings', name='app_feedback_missing_cv_message_en', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='CV Eksik Mesajı [en]')),

        migrations.AddField(model_name='careersettings', name='app_field_first_name', field=models.CharField(blank=True, max_length=100, verbose_name='Ad Etiketi')),
        migrations.AddField(model_name='careersettings', name='app_field_first_name_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Ad Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='app_field_first_name_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Ad Etiketi [en]')),

        migrations.AddField(model_name='careersettings', name='app_field_last_name', field=models.CharField(blank=True, max_length=100, verbose_name='Soyad Etiketi')),
        migrations.AddField(model_name='careersettings', name='app_field_last_name_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Soyad Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='app_field_last_name_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Soyad Etiketi [en]')),

        migrations.AddField(model_name='careersettings', name='app_field_email', field=models.CharField(blank=True, max_length=100, verbose_name='E-posta Etiketi')),
        migrations.AddField(model_name='careersettings', name='app_field_email_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='E-posta Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='app_field_email_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='E-posta Etiketi [en]')),

        migrations.AddField(model_name='careersettings', name='app_field_phone', field=models.CharField(blank=True, max_length=100, verbose_name='Telefon Etiketi')),
        migrations.AddField(model_name='careersettings', name='app_field_phone_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Telefon Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='app_field_phone_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Telefon Etiketi [en]')),

        migrations.AddField(model_name='careersettings', name='app_field_cv', field=models.CharField(blank=True, max_length=100, verbose_name='CV Etiketi')),
        migrations.AddField(model_name='careersettings', name='app_field_cv_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='CV Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='app_field_cv_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='CV Etiketi [en]')),

        migrations.AddField(model_name='careersettings', name='app_field_cover_letter', field=models.CharField(blank=True, max_length=100, verbose_name='Ön Yazı Etiketi')),
        migrations.AddField(model_name='careersettings', name='app_field_cover_letter_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Ön Yazı Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='app_field_cover_letter_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Ön Yazı Etiketi [en]')),

        migrations.AddField(model_name='careersettings', name='app_placeholder_first_name', field=models.CharField(blank=True, max_length=100, verbose_name='Ad Placeholder')),
        migrations.AddField(model_name='careersettings', name='app_placeholder_first_name_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Ad Placeholder [tr]')),
        migrations.AddField(model_name='careersettings', name='app_placeholder_first_name_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Ad Placeholder [en]')),

        migrations.AddField(model_name='careersettings', name='app_placeholder_last_name', field=models.CharField(blank=True, max_length=100, verbose_name='Soyad Placeholder')),
        migrations.AddField(model_name='careersettings', name='app_placeholder_last_name_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Soyad Placeholder [tr]')),
        migrations.AddField(model_name='careersettings', name='app_placeholder_last_name_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Soyad Placeholder [en]')),

        migrations.AddField(model_name='careersettings', name='app_placeholder_email', field=models.CharField(blank=True, max_length=100, verbose_name='E-posta Placeholder')),
        migrations.AddField(model_name='careersettings', name='app_placeholder_email_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='E-posta Placeholder [tr]')),
        migrations.AddField(model_name='careersettings', name='app_placeholder_email_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='E-posta Placeholder [en]')),

        migrations.AddField(model_name='careersettings', name='app_placeholder_phone', field=models.CharField(blank=True, max_length=100, verbose_name='Telefon Placeholder')),
        migrations.AddField(model_name='careersettings', name='app_placeholder_phone_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Telefon Placeholder [tr]')),
        migrations.AddField(model_name='careersettings', name='app_placeholder_phone_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Telefon Placeholder [en]')),

        migrations.AddField(model_name='careersettings', name='app_placeholder_cv', field=models.CharField(blank=True, max_length=100, verbose_name='CV Placeholder')),
        migrations.AddField(model_name='careersettings', name='app_placeholder_cv_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='CV Placeholder [tr]')),
        migrations.AddField(model_name='careersettings', name='app_placeholder_cv_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='CV Placeholder [en]')),

        migrations.AddField(model_name='careersettings', name='app_placeholder_cover_letter', field=models.CharField(blank=True, max_length=100, verbose_name='Ön Yazı Placeholder')),
        migrations.AddField(model_name='careersettings', name='app_placeholder_cover_letter_tr', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Ön Yazı Placeholder [tr]')),
        migrations.AddField(model_name='careersettings', name='app_placeholder_cover_letter_en', field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Ön Yazı Placeholder [en]')),

        # ── Newsletter copy ───────────────────────────────────────────────────
        migrations.AddField(model_name='careersettings', name='newsletter_submit_aria_label', field=models.CharField(blank=True, max_length=200, verbose_name='Bülten Gönder Aria Etiketi')),
        migrations.AddField(model_name='careersettings', name='newsletter_submit_aria_label_tr', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Bülten Gönder Aria Etiketi [tr]')),
        migrations.AddField(model_name='careersettings', name='newsletter_submit_aria_label_en', field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Bülten Gönder Aria Etiketi [en]')),

        migrations.AddField(model_name='careersettings', name='newsletter_success_message', field=models.CharField(blank=True, max_length=300, verbose_name='Bülten Başarı Mesajı')),
        migrations.AddField(model_name='careersettings', name='newsletter_success_message_tr', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Bülten Başarı Mesajı [tr]')),
        migrations.AddField(model_name='careersettings', name='newsletter_success_message_en', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Bülten Başarı Mesajı [en]')),

        migrations.AddField(model_name='careersettings', name='newsletter_error_message', field=models.CharField(blank=True, max_length=300, verbose_name='Bülten Hata Mesajı')),
        migrations.AddField(model_name='careersettings', name='newsletter_error_message_tr', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Bülten Hata Mesajı [tr]')),
        migrations.AddField(model_name='careersettings', name='newsletter_error_message_en', field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Bülten Hata Mesajı [en]')),
    ]
