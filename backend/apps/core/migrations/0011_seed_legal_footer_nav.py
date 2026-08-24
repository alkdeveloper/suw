"""
Data migration — Footer navigasyonuna eksik 2 yasal sayfayı ekler:
  - Aydınlatma ve Rıza      → /legal/disclosure-and-consent
  - Çalışan Adayı Aydınlatma → /legal/candidate-privacy-notice
"""
from django.db import migrations

NEW_ITEMS = [
    ("/legal/disclosure-and-consent",  "Aydınlatma ve Rıza",           "Disclosure and Consent"),
    ("/legal/candidate-privacy-notice", "Çalışan Adayı Aydınlatma Metni", "Candidate Privacy Notice"),
]


def add_legal_footer_items(apps, schema_editor):
    SiteSettings = apps.get_model("core", "SiteSettings")
    NavigationItem = apps.get_model("core", "NavigationItem")

    site = SiteSettings.objects.first()
    if not site:
        return

    last_order = (
        NavigationItem.objects.filter(site_settings_id=site.pk, location="footer")
        .order_by("-order")
        .values_list("order", flat=True)
        .first()
    ) or 0

    for i, (url, lab_tr, lab_en) in enumerate(NEW_ITEMS, start=1):
        if NavigationItem.objects.filter(site_settings_id=site.pk, location="footer", url=url).exists():
            continue
        NavigationItem.objects.create(
            site_settings_id=site.pk,
            order=last_order + i,
            location="footer",
            url=url,
            is_external=False,
            label=lab_tr,
            label_tr=lab_tr,
            label_en=lab_en,
        )


def remove_legal_footer_items(apps, schema_editor):
    NavigationItem = apps.get_model("core", "NavigationItem")
    NavigationItem.objects.filter(
        location="footer",
        url__in=[url for url, _, _ in NEW_ITEMS],
    ).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0010_fix_legacy_legal_footer_url"),
    ]

    operations = [
        migrations.RunPython(add_legal_footer_items, remove_legal_footer_items),
    ]
