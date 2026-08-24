from django.db import migrations


def forward_fix_legacy_legal_footer_url(apps, schema_editor):
    NavigationItem = apps.get_model("core", "NavigationItem")
    NavigationItem.objects.filter(
        location="footer",
        url="/legal/gizlilik-ve-cerez",
    ).update(url="/legal/privacy-and-cookie-policy")


def reverse_fix_legacy_legal_footer_url(apps, schema_editor):
    NavigationItem = apps.get_model("core", "NavigationItem")
    NavigationItem.objects.filter(
        location="footer",
        url="/legal/privacy-and-cookie-policy",
    ).update(url="/legal/gizlilik-ve-cerez")


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0009_seed_footer_contact_info"),
    ]

    operations = [
        migrations.RunPython(
            forward_fix_legacy_legal_footer_url,
            reverse_fix_legacy_legal_footer_url,
        ),
    ]
