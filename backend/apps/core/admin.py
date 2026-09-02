from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from django.contrib.auth.forms import UserChangeForm as BaseUserChangeForm
from django.contrib.auth.models import User, Group, Permission
from django.urls import reverse
from django.utils.html import format_html
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin, TabularInline
from modeltranslation.admin import TranslationTabularInline
from unfold.decorators import display
from unfold.forms import AdminPasswordChangeForm, UserCreationForm
from solo.admin import SingletonModelAdmin
from .models import SiteSettings, SiteContactSettings, NavigationItem, NewsletterSubscriber

admin.site.site_header = "SUW Yönetim Paneli"
admin.site.site_title = "SUW Admin"
admin.site.index_title = "SUW Web Sitesi Yönetimi"

# ── Kullanıcı & Grup — unfold temalı ─────────────────────────────────────────

admin.site.unregister(User)
admin.site.unregister(Group)

KARIYER_GRUP_ADI = "Kariyer Yöneticisi"

KARIYER_IZINLER = [
    "add_careersettings", "change_careersettings", "view_careersettings",
    "add_department", "change_department", "delete_department", "view_department",
    "add_jobposition", "change_jobposition", "delete_jobposition", "view_jobposition",
    "view_jobapplication", "change_jobapplication",
]

ROL_SECENEKLER = [
    ("", "— Rol Seçin —"),
    ("kariyer", "Kariyer Yöneticisi"),
]


def _kariyer_grubunu_hazirla():
    """Kariyer Yöneticisi grubunu oluşturur/günceller ve izinlerini atar."""
    try:
        perms = Permission.objects.filter(codename__in=KARIYER_IZINLER)
        group, _ = Group.objects.get_or_create(name=KARIYER_GRUP_ADI)
        group.permissions.set(perms)
        return group
    except Exception:
        return Group.objects.filter(name=KARIYER_GRUP_ADI).first()


class KullaniciEkleForm(UserCreationForm):
    """Yeni kullanıcı ekleme formu — unfold styled password inputları içerir."""

    rol = forms.ChoiceField(
        choices=ROL_SECENEKLER,
        label="Rol",
        required=False,
        help_text="Kariyer Yöneticisi: İş ilanlarını ve başvurularını tam yetki ile yönetebilir.",
    )

    class Meta(UserCreationForm.Meta):
        model = User
        fields = ("username",)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["username"].help_text = (
            "Zorunlu. En fazla 150 karakter. Harf, rakam ve @/./+/-/_ karakterleri."
        )
        if "password1" in self.fields:
            self.fields["password1"].label = "Şifre"
            self.fields["password1"].help_text = (
                "En az 8 karakter. Çok basit veya yaygın şifreler kullanmayın."
            )
        if "password2" in self.fields:
            self.fields["password2"].label = "Şifre Doğrulama"
            self.fields["password2"].help_text = "Doğrulama için aynı şifreyi tekrar girin."


class KullaniciDuzenleForm(BaseUserChangeForm):
    """Kullanıcı düzenleme formu — şifre hash'i göstermez."""

    password = None  # hash widget'ını gizle

    rol = forms.ChoiceField(
        choices=ROL_SECENEKLER,
        label="Rol",
        required=False,
        help_text="Kariyer Yöneticisi: İş ilanlarını ve başvurularını tam yetki ile yönetebilir.",
    )

    class Meta:
        model = User
        fields = ("username", "first_name", "last_name", "email", "is_active")

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["username"].help_text = (
            "Zorunlu. En fazla 150 karakter. Harf, rakam ve @/./+/-/_ karakterleri."
        )
        if self.instance and self.instance.pk:
            if self.instance.groups.filter(name=KARIYER_GRUP_ADI).exists():
                self.fields["rol"].initial = "kariyer"


@admin.register(User)
class UserAdmin(DjangoUserAdmin, ModelAdmin):
    form = KullaniciDuzenleForm
    add_form = KullaniciEkleForm
    change_password_form = AdminPasswordChangeForm
    compressed_fields = True

    list_display = ["username", "email", "first_name", "last_name", "show_role", "is_active"]
    list_filter = ["is_active", "groups"]
    search_fields = ["username", "email", "first_name", "last_name"]

    @display(
        description="Rol",
        label={"Süper Admin": "danger", "Kariyer Yöneticisi": "info"},
    )
    def show_role(self, obj):
        if obj.is_superuser:
            return "Süper Admin"
        if obj.groups.filter(name=KARIYER_GRUP_ADI).exists():
            return "Kariyer Yöneticisi"
        return None

    def sifre_degistir_linki(self, obj):
        url = reverse("admin:auth_user_password_change", args=[obj.pk])
        return format_html('<a href="{}">Şifreyi Değiştir →</a>', url)

    sifre_degistir_linki.short_description = "Şifre"

    readonly_fields = ["sifre_degistir_linki"]

    def get_fieldsets(self, request, obj=None):
        if obj is None:
            return (
                ("Hesap Bilgileri", {"fields": ("username", "password1", "password2")}),
                ("Kişisel Bilgi", {"fields": ("first_name", "last_name", "email")}),
                (
                    "Rol",
                    {
                        "fields": ("rol",),
                        "description": "Seçilen rol, kullanıcının hangi bölümleri yöneteceğini belirler.",
                    },
                ),
                ("Durum", {"fields": ("is_active",)}),
            )
        return (
            ("Hesap Bilgileri", {"fields": ("username", "sifre_degistir_linki")}),
            ("Kişisel Bilgi", {"fields": ("first_name", "last_name", "email")}),
            (
                "Rol",
                {
                    "fields": ("rol",),
                    "description": "Seçilen rol, kullanıcının hangi bölümleri yöneteceğini belirler.",
                },
            ),
            ("Durum", {"fields": ("is_active",)}),
        )

    def save_model(self, request, obj, form, change):
        rol = form.cleaned_data.get("rol", "")
        if not obj.is_superuser:
            obj.is_staff = bool(rol)
        super().save_model(request, obj, form, change)
        if not obj.is_superuser:
            obj.groups.clear()
            obj.user_permissions.clear()
            if rol == "kariyer":
                group = _kariyer_grubunu_hazirla()
                if group:
                    obj.groups.add(group)

    def get_queryset(self, request):
        return super().get_queryset(request).prefetch_related("groups")


class NavigationItemInline(TranslationTabularInline):
    model = NavigationItem
    extra = 0
    fields = ["location", "label", "url", "is_external"]


@admin.register(SiteSettings)
class SiteSettingsAdmin(TabbedTranslationAdmin, SingletonModelAdmin, ModelAdmin):
    inlines = [NavigationItemInline]

    fieldsets = (
        (
            "0 – Tema",
            {
                "classes": ["tab"],
                "fields": ("font_family",),
            },
        ),
        (
            "1 – Genel",
            {
                "classes": ["tab"],
                "fields": ("logo", "phone", "fax", "email", "address"),
            },
        ),
        (
            "2 – Footer",
            {
                "classes": ["tab"],
                "fields": (
                    "footer_title",
                    "footer_newsletter_title",
                    "footer_newsletter_placeholder",
                    "footer_newsletter_consent_text",
                    "footer_newsletter_consent_link_text",
                    "footer_contact_title",
                    "footer_navigation_title",
                    "footer_social_title",
                    "footer_address_label",
                    "copyright_text",
                ),
            },
        ),
        (
            "3 – Sosyal Medya",
            {
                "classes": ["tab"],
                "fields": ("instagram", "linkedin", "facebook", "twitter", "youtube", "whatsapp"),
            },
        ),
        (
            "4 – Header Kopyası",
            {
                "classes": ["tab"],
                "fields": (
                    "header_home_aria_label",
                    "header_desktop_nav_aria_label",
                    "header_mobile_nav_aria_label",
                    "header_locale_button_aria_label_prefix",
                    "header_mobile_menu_aria_label",
                ),
            },
        ),
        (
            "5 – Footer Kopyası",
            {
                "classes": ["tab"],
                "fields": (
                    "footer_home_aria_label",
                    "footer_back_to_top_aria_label",
                    "footer_newsletter_submit_aria_label",
                    "footer_newsletter_success_message",
                    "footer_newsletter_error_message",
                    (
                        "footer_contact_label_phone",
                        "footer_contact_label_fax",
                        "footer_contact_label_email",
                        "footer_contact_label_whatsapp",
                    ),
                    ("footer_social_label_instagram", "footer_social_label_linkedin"),
                    ("footer_social_label_facebook", "footer_social_label_x", "footer_social_label_youtube"),
                ),
            },
        ),
        (
            "6 – 404 Kopyası",
            {
                "classes": ["tab"],
                "fields": (
                    "not_found_title",
                    "not_found_description",
                    ("not_found_primary_button_text", "not_found_secondary_button_text"),
                ),
            },
        ),
        (
            "7 – SEO",
            {
                "classes": ["tab"],
                "fields": ("meta_title", "meta_description"),
            },
        ),
    )


@admin.register(SiteContactSettings)
class SiteContactSettingsAdmin(SingletonModelAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    fieldsets = (
        ("İletişim Bilgileri", {"fields": ("address", "phone", "email", "latitude", "longitude")}),
    )

    def change_view(self, request, object_id, form_url="", extra_context=None):
        extra_context = extra_context or {}
        extra_context["title"] = "İletişim ve Haritalar"
        extra_context["subtitle"] = None
        return super().change_view(request, object_id, form_url, extra_context)


@admin.register(NewsletterSubscriber)
class NewsletterSubscriberAdmin(ModelAdmin):
    list_display = ["email", "show_status", "created_at"]
    list_filter = ["is_active", "created_at"]
    search_fields = ["email"]
    ordering = ["-created_at"]
    list_per_page = 50
    date_hierarchy = "created_at"

    @display(
        description="Durum",
        ordering="is_active",
        label={True: "success", False: "danger"},
    )
    def show_status(self, obj):
        return "Aktif" if obj.is_active else "Pasif"
