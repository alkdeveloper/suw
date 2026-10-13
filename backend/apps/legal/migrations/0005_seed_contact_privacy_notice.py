from django.db import migrations


SLUG = "contact-privacy-notice"


def create_contact_privacy_notice(apps, schema_editor):
    LegalPage = apps.get_model("legal", "LegalPage")
    LegalPage.objects.get_or_create(
        slug=SLUG,
        defaults={
            "title": "İletişim Formu Aydınlatma Metni",
            "title_tr": "İletişim Formu Aydınlatma Metni",
            "title_en": "Contact Form Privacy Notice",
            "subtitle": "İletişim formu üzerinden iletilen kişisel verilerin işlenmesine ilişkin bilgilendirme",
            "subtitle_tr": "İletişim formu üzerinden iletilen kişisel verilerin işlenmesine ilişkin bilgilendirme",
            "subtitle_en": "Information regarding the processing of personal data submitted through the contact form",
            "intro": "SUW iletişim formu üzerinden paylaşılan kişisel verilerin işlenmesine ilişkin bilgilendirme bu sayfada yer almaktadır.",
            "intro_tr": "SUW iletişim formu üzerinden paylaşılan kişisel verilerin işlenmesine ilişkin bilgilendirme bu sayfada yer almaktadır.",
            "intro_en": "This page provides information about the processing of personal data submitted through the SUW contact form.",
            "last_updated_label": "Son güncelleme",
            "last_updated_label_tr": "Son güncelleme",
            "last_updated_label_en": "Last updated",
            "meta_title": "İletişim Formu Aydınlatma Metni | SUW",
            "meta_title_tr": "İletişim Formu Aydınlatma Metni | SUW",
            "meta_title_en": "Contact Form Privacy Notice | SUW",
            "meta_description": "SUW iletişim formu üzerinden iletilen kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
            "meta_description_tr": "SUW iletişim formu üzerinden iletilen kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
            "meta_description_en": "Privacy notice regarding personal data submitted through the SUW contact form.",
        },
    )


def remove_contact_privacy_notice(apps, schema_editor):
    LegalPage = apps.get_model("legal", "LegalPage")
    LegalPage.objects.filter(slug=SLUG).delete()


class Migration(migrations.Migration):
    dependencies = [
        ("legal", "0004_alter_legalpage_hero_glow_image_and_more"),
    ]

    operations = [
        migrations.RunPython(
            create_contact_privacy_notice,
            remove_contact_privacy_notice,
        ),
    ]
