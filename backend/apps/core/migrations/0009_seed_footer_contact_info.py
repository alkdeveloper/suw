# Footer iletişim: telefon, faks, e-posta, adres (TR/EN) — SiteSettings singleton.

from django.db import migrations


def seed_footer_contact(apps, schema_editor):
    SiteSettings = apps.get_model("core", "SiteSettings")
    site = SiteSettings.objects.first()
    if not site:
        site = SiteSettings.objects.create()

    phone = "444 10 47"
    fax = "0216 422 35 49"
    email = "info@alk.com.tr"
    address_tr = "Yenidoğan, Merve Mahallesi Akabe Cad. No:16 Sancaktepe - İstanbul"
    address_en = "Yenidoğan, Merve District Akabe Ave. No:16 Sancaktepe - Istanbul"

    lbl_fax_tr = "Faks"
    lbl_fax_en = "Fax"
    lbl_phone_tr = "Telefon"
    lbl_phone_en = "Phone"
    lbl_email_tr = "E-posta"
    lbl_email_en = "E-mail"
    footer_addr_tr = "Adres"
    footer_addr_en = "Address"
    footer_contact_title_tr = "İletişim"
    footer_contact_title_en = "Contact"

    SiteSettings.objects.filter(pk=site.pk).update(
        phone=phone,
        fax=fax,
        email=email,
        address=address_tr,
        address_tr=address_tr,
        address_en=address_en,
        footer_address_label=footer_addr_tr,
        footer_address_label_tr=footer_addr_tr,
        footer_address_label_en=footer_addr_en,
        footer_contact_title=footer_contact_title_tr,
        footer_contact_title_tr=footer_contact_title_tr,
        footer_contact_title_en=footer_contact_title_en,
        footer_contact_label_phone=lbl_phone_tr,
        footer_contact_label_phone_tr=lbl_phone_tr,
        footer_contact_label_phone_en=lbl_phone_en,
        footer_contact_label_fax=lbl_fax_tr,
        footer_contact_label_fax_tr=lbl_fax_tr,
        footer_contact_label_fax_en=lbl_fax_en,
        footer_contact_label_email=lbl_email_tr,
        footer_contact_label_email_tr=lbl_email_tr,
        footer_contact_label_email_en=lbl_email_en,
    )


def noop_reverse(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0008_sitesettings_fax_and_contact_labels"),
    ]

    operations = [
        migrations.RunPython(seed_footer_contact, noop_reverse),
    ]
