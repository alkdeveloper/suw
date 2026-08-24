# Site ayarları metinleri + üst/alt menü öğeleri (TR/EN). Logo ve iletişim/sosyal URL’ler admin’den düzenlenebilir.

from django.db import migrations


def seed_site_nav_footer(apps, schema_editor):
    SiteSettings = apps.get_model("core", "SiteSettings")
    NavigationItem = apps.get_model("core", "NavigationItem")

    site = SiteSettings.objects.first()
    if not site:
        site = SiteSettings.objects.create()

    # ── SiteSettings: görünür metinler (logo / telefon / e-posta / sosyal alanlara dokunmuyoruz) ──
    footer_title_tr = "ALK dünyasından haberdar olun"
    footer_title_en = "Stay in touch with ALK"
    footer_newsletter_title_tr = "E-bülten"
    footer_newsletter_title_en = "Newsletter"
    footer_newsletter_placeholder_tr = "E-posta adresiniz"
    footer_newsletter_placeholder_en = "Your email address"
    footer_newsletter_consent_tr = (
        "E-posta adresimin ALK Group tarafından tanıtım ve bilgilendirme amaçlı kullanılmasını kabul ediyorum."
    )
    footer_newsletter_consent_en = (
        "I agree that my email address may be used by ALK Group for promotional and informational purposes."
    )
    footer_newsletter_consent_link_tr = "Kişisel verilerin korunması"
    footer_newsletter_consent_link_en = "Personal data protection"
    footer_contact_title_tr = "İletişim"
    footer_contact_title_en = "Contact"
    footer_navigation_title_tr = "Keşfet"
    footer_navigation_title_en = "Explore"
    footer_social_title_tr = "Bizi takip edin"
    footer_social_title_en = "Follow us"
    footer_address_label_tr = "Merkez"
    footer_address_label_en = "Head office"
    address_tr = "İstanbul, Türkiye"
    address_en = "Istanbul, Turkey"
    copyright_tr = "© ALK Group. Tüm hakları saklıdır."
    copyright_en = "© ALK Group. All rights reserved."

    header_home_aria_tr = "Ana sayfaya git"
    header_home_aria_en = "Go to home page"
    header_desktop_nav_aria_tr = "Ana navigasyon"
    header_desktop_nav_aria_en = "Main navigation"
    header_mobile_nav_aria_tr = "Mobil navigasyon"
    header_mobile_nav_aria_en = "Mobile navigation"
    header_locale_prefix_tr = "Site dilini seçin:"
    header_locale_prefix_en = "Choose site language:"
    header_mobile_menu_aria_tr = "Menüyü aç veya kapat"
    header_mobile_menu_aria_en = "Open or close menu"

    footer_home_aria_tr = "Ana sayfaya git"
    footer_home_aria_en = "Go to home page"
    footer_back_to_top_tr = "Sayfanın başına dön"
    footer_back_to_top_en = "Back to top"
    footer_newsletter_submit_tr = "Bültene kaydol"
    footer_newsletter_submit_en = "Subscribe to newsletter"
    footer_newsletter_success_tr = "Kaydınız alındı."
    footer_newsletter_success_en = "You have been subscribed."
    footer_newsletter_error_tr = "Bir sorun oluştu. Lütfen tekrar deneyin."
    footer_newsletter_error_en = "Something went wrong. Please try again."
    footer_lbl_phone_tr = "Telefon"
    footer_lbl_phone_en = "Phone"
    footer_lbl_email_tr = "E-posta"
    footer_lbl_email_en = "Email"
    footer_lbl_wa_tr = "WhatsApp"
    footer_lbl_wa_en = "WhatsApp"
    footer_soc_ig_tr = "Instagram"
    footer_soc_ig_en = "Instagram"
    footer_soc_li_tr = "LinkedIn"
    footer_soc_li_en = "LinkedIn"
    footer_soc_fb_tr = "Facebook"
    footer_soc_fb_en = "Facebook"
    footer_soc_x_tr = "X"
    footer_soc_x_en = "X"
    footer_soc_yt_tr = "YouTube"
    footer_soc_yt_en = "YouTube"

    not_found_title_tr = "Sayfa bulunamadı"
    not_found_title_en = "Page not found"
    not_found_desc_tr = "Aradığınız sayfa taşınmış veya kaldırılmış olabilir."
    not_found_desc_en = "The page you are looking for may have been moved or removed."
    not_found_primary_tr = "Ana sayfa"
    not_found_primary_en = "Home"
    not_found_secondary_tr = "İletişim"
    not_found_secondary_en = "Contact"

    meta_title_tr = "ALK Group"
    meta_title_en = "ALK Group"
    meta_desc_tr = "ALK Group: tekstil, markalar ve küresel operasyonlar."
    meta_desc_en = "ALK Group: textiles, brands, and global operations."

    SiteSettings.objects.filter(pk=site.pk).update(
        footer_title=footer_title_tr,
        footer_title_tr=footer_title_tr,
        footer_title_en=footer_title_en,
        footer_newsletter_title=footer_newsletter_title_tr,
        footer_newsletter_title_tr=footer_newsletter_title_tr,
        footer_newsletter_title_en=footer_newsletter_title_en,
        footer_newsletter_placeholder=footer_newsletter_placeholder_tr,
        footer_newsletter_placeholder_tr=footer_newsletter_placeholder_tr,
        footer_newsletter_placeholder_en=footer_newsletter_placeholder_en,
        footer_newsletter_consent_text=footer_newsletter_consent_tr,
        footer_newsletter_consent_text_tr=footer_newsletter_consent_tr,
        footer_newsletter_consent_text_en=footer_newsletter_consent_en,
        footer_newsletter_consent_link_text=footer_newsletter_consent_link_tr,
        footer_newsletter_consent_link_text_tr=footer_newsletter_consent_link_tr,
        footer_newsletter_consent_link_text_en=footer_newsletter_consent_link_en,
        footer_contact_title=footer_contact_title_tr,
        footer_contact_title_tr=footer_contact_title_tr,
        footer_contact_title_en=footer_contact_title_en,
        footer_navigation_title=footer_navigation_title_tr,
        footer_navigation_title_tr=footer_navigation_title_tr,
        footer_navigation_title_en=footer_navigation_title_en,
        footer_social_title=footer_social_title_tr,
        footer_social_title_tr=footer_social_title_tr,
        footer_social_title_en=footer_social_title_en,
        footer_address_label=footer_address_label_tr,
        footer_address_label_tr=footer_address_label_tr,
        footer_address_label_en=footer_address_label_en,
        address=address_tr,
        address_tr=address_tr,
        address_en=address_en,
        copyright_text=copyright_tr,
        copyright_text_tr=copyright_tr,
        copyright_text_en=copyright_en,
        header_home_aria_label=header_home_aria_tr,
        header_home_aria_label_tr=header_home_aria_tr,
        header_home_aria_label_en=header_home_aria_en,
        header_desktop_nav_aria_label=header_desktop_nav_aria_tr,
        header_desktop_nav_aria_label_tr=header_desktop_nav_aria_tr,
        header_desktop_nav_aria_label_en=header_desktop_nav_aria_en,
        header_mobile_nav_aria_label=header_mobile_nav_aria_tr,
        header_mobile_nav_aria_label_tr=header_mobile_nav_aria_tr,
        header_mobile_nav_aria_label_en=header_mobile_nav_aria_en,
        header_locale_button_aria_label_prefix=header_locale_prefix_tr,
        header_locale_button_aria_label_prefix_tr=header_locale_prefix_tr,
        header_locale_button_aria_label_prefix_en=header_locale_prefix_en,
        header_mobile_menu_aria_label=header_mobile_menu_aria_tr,
        header_mobile_menu_aria_label_tr=header_mobile_menu_aria_tr,
        header_mobile_menu_aria_label_en=header_mobile_menu_aria_en,
        footer_home_aria_label=footer_home_aria_tr,
        footer_home_aria_label_tr=footer_home_aria_tr,
        footer_home_aria_label_en=footer_home_aria_en,
        footer_back_to_top_aria_label=footer_back_to_top_tr,
        footer_back_to_top_aria_label_tr=footer_back_to_top_tr,
        footer_back_to_top_aria_label_en=footer_back_to_top_en,
        footer_newsletter_submit_aria_label=footer_newsletter_submit_tr,
        footer_newsletter_submit_aria_label_tr=footer_newsletter_submit_tr,
        footer_newsletter_submit_aria_label_en=footer_newsletter_submit_en,
        footer_newsletter_success_message=footer_newsletter_success_tr,
        footer_newsletter_success_message_tr=footer_newsletter_success_tr,
        footer_newsletter_success_message_en=footer_newsletter_success_en,
        footer_newsletter_error_message=footer_newsletter_error_tr,
        footer_newsletter_error_message_tr=footer_newsletter_error_tr,
        footer_newsletter_error_message_en=footer_newsletter_error_en,
        footer_contact_label_phone=footer_lbl_phone_tr,
        footer_contact_label_phone_tr=footer_lbl_phone_tr,
        footer_contact_label_phone_en=footer_lbl_phone_en,
        footer_contact_label_email=footer_lbl_email_tr,
        footer_contact_label_email_tr=footer_lbl_email_tr,
        footer_contact_label_email_en=footer_lbl_email_en,
        footer_contact_label_whatsapp=footer_lbl_wa_tr,
        footer_contact_label_whatsapp_tr=footer_lbl_wa_tr,
        footer_contact_label_whatsapp_en=footer_lbl_wa_en,
        footer_social_label_instagram=footer_soc_ig_tr,
        footer_social_label_instagram_tr=footer_soc_ig_tr,
        footer_social_label_instagram_en=footer_soc_ig_en,
        footer_social_label_linkedin=footer_soc_li_tr,
        footer_social_label_linkedin_tr=footer_soc_li_tr,
        footer_social_label_linkedin_en=footer_soc_li_en,
        footer_social_label_facebook=footer_soc_fb_tr,
        footer_social_label_facebook_tr=footer_soc_fb_tr,
        footer_social_label_facebook_en=footer_soc_fb_en,
        footer_social_label_x=footer_soc_x_tr,
        footer_social_label_x_tr=footer_soc_x_tr,
        footer_social_label_x_en=footer_soc_x_en,
        footer_social_label_youtube=footer_soc_yt_tr,
        footer_social_label_youtube_tr=footer_soc_yt_tr,
        footer_social_label_youtube_en=footer_soc_yt_en,
        not_found_title=not_found_title_tr,
        not_found_title_tr=not_found_title_tr,
        not_found_title_en=not_found_title_en,
        not_found_description=not_found_desc_tr,
        not_found_description_tr=not_found_desc_tr,
        not_found_description_en=not_found_desc_en,
        not_found_primary_button_text=not_found_primary_tr,
        not_found_primary_button_text_tr=not_found_primary_tr,
        not_found_primary_button_text_en=not_found_primary_en,
        not_found_secondary_button_text=not_found_secondary_tr,
        not_found_secondary_button_text_tr=not_found_secondary_tr,
        not_found_secondary_button_text_en=not_found_secondary_en,
        meta_title=meta_title_tr,
        meta_title_tr=meta_title_tr,
        meta_title_en=meta_title_en,
        meta_description=meta_desc_tr,
        meta_description_tr=meta_desc_tr,
        meta_description_en=meta_desc_en,
    )

    NavigationItem.objects.filter(site_settings_id=site.pk).delete()

    header_rows = [
        ("/", "Ana Sayfa", "Home"),
        ("/corporate", "Kurumsal", "Corporate"),
        ("/brands", "Markalar", "Brands"),
        ("/gallery", "Galeri", "Gallery"),
        ("/career", "Kariyer", "Careers"),
        ("/news", "Haberler", "News"),
        ("/contact", "İletişim", "Contact"),
    ]
    footer_rows = [
        ("/corporate", "Kurumsal", "Corporate"),
        ("/brands", "Markalar", "Brands"),
        ("/news", "Haberler", "News"),
        ("/contact", "İletişim", "Contact"),
        ("/legal/gizlilik-ve-cerez", "Gizlilik ve Çerez", "Privacy & Cookies"),
    ]

    loc_header = "header"
    loc_footer = "footer"

    for order, (url, lab_tr, lab_en) in enumerate(header_rows):
        NavigationItem.objects.create(
            site_settings_id=site.pk,
            order=order,
            location=loc_header,
            url=url,
            is_external=False,
            label=lab_tr,
            label_tr=lab_tr,
            label_en=lab_en,
        )

    for order, (url, lab_tr, lab_en) in enumerate(footer_rows):
        NavigationItem.objects.create(
            site_settings_id=site.pk,
            order=order,
            location=loc_footer,
            url=url,
            is_external=False,
            label=lab_tr,
            label_tr=lab_tr,
            label_en=lab_en,
        )


def noop_reverse(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0006_sitesettings_footer_nav_i18n"),
    ]

    operations = [
        migrations.RunPython(seed_site_nav_footer, noop_reverse),
    ]
