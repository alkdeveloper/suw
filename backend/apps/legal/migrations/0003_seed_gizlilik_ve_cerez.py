"""
Data migration — 3 yasal sayfayı oluşturur:
  - privacy-and-cookie-policy   → Gizlilik ve Çerez Politikası
  - disclosure-and-consent      → Aydınlatma ve Rıza
  - candidate-privacy-notice    → Çalışan Adayı Aydınlatma Metni

Slug'lar frontend/src/lib/legal.ts ile birebir eşleşir.
Admin panelinden içerik düzenlenebilir: Yasal > Yasal Sayfalar.
"""
import datetime
from django.db import migrations

PAGES = [
    {
        "slug": "privacy-and-cookie-policy",
        "title_tr": "Gizlilik ve Çerez Politikası",
        "subtitle_tr": "Kişisel verilerinizin korunması ve çerez kullanımı hakkında bilgi",
        "intro_tr": "Bu sayfa, ALK Group olarak kişisel verilerinizi nasıl işlediğimizi ve çerezleri nasıl kullandığımızı açıklamaktadır.",
        "last_updated_label_tr": "Son güncelleme",
        "meta_title_tr": "Gizlilik ve Çerez Politikası | ALK Group",
        "meta_description_tr": "ALK Group gizlilik ve çerez politikası hakkında detaylı bilgi edinin.",
        "title_en": "Privacy and Cookie Policy",
        "subtitle_en": "Information on the protection of your personal data and the use of cookies",
        "intro_en": "This page explains how ALK Group processes your personal data and how we use cookies.",
        "last_updated_label_en": "Last updated",
        "meta_title_en": "Privacy and Cookie Policy | ALK Group",
        "meta_description_en": "Learn about ALK Group's privacy and cookie policy.",
        "title": "Gizlilik ve Çerez Politikası",
        "subtitle": "Kişisel verilerinizin korunması ve çerez kullanımı hakkında bilgi",
        "intro": "Bu sayfa, ALK Group olarak kişisel verilerinizi nasıl işlediğimizi ve çerezleri nasıl kullandığımızı açıklamaktadır.",
        "last_updated_label": "Son güncelleme",
        "meta_title": "Gizlilik ve Çerez Politikası | ALK Group",
        "meta_description": "ALK Group gizlilik ve çerez politikası hakkında detaylı bilgi edinin.",
    },
    {
        "slug": "disclosure-and-consent",
        "title_tr": "Aydınlatma ve Rıza",
        "subtitle_tr": "Kişisel verilerin işlenmesine ilişkin aydınlatma ve rıza metni",
        "intro_tr": "Bu sayfa, ALK Group bünyesindeki şirketlerin kişisel verilerinizi işleme amaçlarını ve rıza koşullarını açıklamaktadır.",
        "last_updated_label_tr": "Son güncelleme",
        "meta_title_tr": "Aydınlatma ve Rıza | ALK Group",
        "meta_description_tr": "ALK Group aydınlatma ve rıza metni hakkında detaylı bilgi edinin.",
        "title_en": "Disclosure and Consent",
        "subtitle_en": "Disclosure and consent text regarding the processing of personal data",
        "intro_en": "This page explains the purposes and conditions of consent for processing your personal data by ALK Group companies.",
        "last_updated_label_en": "Last updated",
        "meta_title_en": "Disclosure and Consent | ALK Group",
        "meta_description_en": "Learn about ALK Group's disclosure and consent policy.",
        "title": "Aydınlatma ve Rıza",
        "subtitle": "Kişisel verilerin işlenmesine ilişkin aydınlatma ve rıza metni",
        "intro": "Bu sayfa, ALK Group bünyesindeki şirketlerin kişisel verilerinizi işleme amaçlarını ve rıza koşullarını açıklamaktadır.",
        "last_updated_label": "Son güncelleme",
        "meta_title": "Aydınlatma ve Rıza | ALK Group",
        "meta_description": "ALK Group aydınlatma ve rıza metni hakkında detaylı bilgi edinin.",
    },
    {
        "slug": "candidate-privacy-notice",
        "title_tr": "Çalışan Adayı Aydınlatma Metni",
        "subtitle_tr": "İş başvurusu sürecinde kişisel verilerin işlenmesine ilişkin bilgilendirme",
        "intro_tr": "Bu sayfa, iş başvurusu sürecinde ALK Group tarafından toplanan kişisel verilerinizin nasıl işlendiğini açıklamaktadır.",
        "last_updated_label_tr": "Son güncelleme",
        "meta_title_tr": "Çalışan Adayı Aydınlatma Metni | ALK Group",
        "meta_description_tr": "ALK Group çalışan adayı aydınlatma metni hakkında detaylı bilgi edinin.",
        "title_en": "Candidate Privacy Notice",
        "subtitle_en": "Information on the processing of personal data during the job application process",
        "intro_en": "This page explains how ALK Group processes the personal data collected during the job application process.",
        "last_updated_label_en": "Last updated",
        "meta_title_en": "Candidate Privacy Notice | ALK Group",
        "meta_description_en": "Learn about ALK Group's candidate privacy notice.",
        "title": "Çalışan Adayı Aydınlatma Metni",
        "subtitle": "İş başvurusu sürecinde kişisel verilerin işlenmesine ilişkin bilgilendirme",
        "intro": "Bu sayfa, iş başvurusu sürecinde ALK Group tarafından toplanan kişisel verilerinizin nasıl işlendiğini açıklamaktadır.",
        "last_updated_label": "Son güncelleme",
        "meta_title": "Çalışan Adayı Aydınlatma Metni | ALK Group",
        "meta_description": "ALK Group çalışan adayı aydınlatma metni hakkında detaylı bilgi edinin.",
    },
]


def create_legal_pages(apps, schema_editor):
    LegalPage = apps.get_model("legal", "LegalPage")
    today = datetime.date.today()
    for data in PAGES:
        if LegalPage.objects.filter(slug=data["slug"]).exists():
            continue
        LegalPage.objects.create(last_updated=today, **data)


def reverse_legal_pages(apps, schema_editor):
    LegalPage = apps.get_model("legal", "LegalPage")
    slugs = [p["slug"] for p in PAGES]
    LegalPage.objects.filter(slug__in=slugs).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("legal", "0002_alter_legalsection_options_alter_legalpage_intro_en_and_more"),
    ]

    operations = [
        migrations.RunPython(create_legal_pages, reverse_legal_pages),
    ]
