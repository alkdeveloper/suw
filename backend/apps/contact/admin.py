from django.contrib import admin
from django.utils.html import format_html
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin
from unfold.decorators import display
from solo.admin import SingletonModelAdmin
from .models import ContactPage, ContactMessage


@admin.register(ContactPage)
class ContactPageAdmin(TabbedTranslationAdmin, SingletonModelAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    filter_horizontal = ["gallery_images"]
    readonly_fields = ("join_button_url",)

    fieldsets = (
        (
            "1 – Hero",
            {
                "classes": ["tab"],
                "fields": ("hero_title",),
            },
        ),
        (
            "2 – Proje Talebi",
            {
                "classes": ["tab"],
                "fields": (
                    "form_left_title",
                    "form_left_description",
                    "phone",
                    "email",
                    "address",
                    "form_title",
                    "form_field_first_name",
                    "form_field_last_name",
                    "form_field_email",
                    "form_field_phone",
                    "form_field_subject",
                    "form_field_message",
                    "form_submit_label",
                ),
            },
        ),
        (
            "3 – Harita",
            {
                "classes": ["tab"],
                "fields": ("map_embed_url",),
            },
        ),
        (
            "8 – SEO",
            {
                "classes": ["tab"],
                "fields": ("meta_title", "meta_description"),
            },
        ),
    )

    def change_view(self, request, object_id, form_url="", extra_context=None):
        extra_context = extra_context or {}
        extra_context["title"] = "İletişim Sayfası"
        extra_context["subtitle"] = None
        return super().change_view(request, object_id, form_url, extra_context)


# İletişim Mesajları (readonly)
@admin.register(ContactMessage)
class ContactMessageAdmin(ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["full_name", "email_display", "subject", "show_read_status", "created_at"]
    list_filter = ["is_read", "created_at"]
    search_fields = ["first_name", "last_name", "email", "subject", "message"]
    ordering = ["-created_at"]
    readonly_fields = [
        "first_name", "last_name", "email", "phone",
        "subject", "message", "kvkk_accepted", "created_at",
    ]
    list_per_page = 25
    date_hierarchy = "created_at"

    fieldsets = (
        (
            "Gönderici",
            {
                "fields": (
                    ("first_name", "last_name"),
                    ("email", "phone"),
                ),
            },
        ),
        (
            "Mesaj",
            {
                "fields": (
                    "subject",
                    "message",
                    "kvkk_accepted",
                ),
            },
        ),
        (
            "Durum",
            {
                "fields": ("is_read", "created_at"),
            },
        ),
    )

    def full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"
    full_name.short_description = "Ad Soyad"

    @display(description="E-posta", ordering="email")
    def email_display(self, obj):
        return format_html('<a href="mailto:{}">{}</a>', obj.email, obj.email)

    @display(
        description="Durum",
        ordering="is_read",
        label={True: "success", False: "warning"},
    )
    def show_read_status(self, obj):
        return "Okundu" if obj.is_read else "Yeni"

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return True
