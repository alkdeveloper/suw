from django.contrib import admin
from django.http import FileResponse, Http404
from django.urls import path, reverse
from django.utils.html import format_html
from django.utils.safestring import mark_safe
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin
from unfold.decorators import display
from solo.admin import SingletonModelAdmin
from common.admin import OrderableMixin
from common.utils import turkish_slugify
from .models import CareerSettings, Department, JobPosition, JobApplication


# Kariyer sayfa ayarları
@admin.register(CareerSettings)
class CareerSettingsAdmin(TabbedTranslationAdmin, SingletonModelAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    readonly_fields = [
        "intro_button_url",
        "why_button_url",
        "apply_button_url",
        "contact_button_url",
    ]

    fieldsets = (
        (
            "1 – Hero",
            {
                "classes": ["tab"],
                "fields": ("hero_title", "hero_image"),
            },
        ),
        (
            "2 – Tanıtım",
            {
                "classes": ["tab"],
                "fields": (
                    "intro_label",
                    "intro_title",
                    "intro_description",
                    "intro_image",
                    "intro_button_text",
                    "intro_button_url",
                ),
            },
        ),
        (
            "3 – Pozisyonlar",
            {
                "classes": ["tab"],
                "fields": (
                    "positions_title",
                    "positions_button_text",
                    "positions_count_label_suffix",
                    ("positions_previous_aria_label", "positions_next_aria_label"),
                ),
            },
        ),
        (
            "4 – Neden Biz",
            {
                "classes": ["tab"],
                "fields": (
                    "why_title",
                    "why_description",
                    ("why_button_text", "why_button_url"),
                ),
            },
        ),
        (
            "4b – İlan Kopyası",
            {
                "classes": ["tab"],
                "fields": (
                    ("job_responsibilities_label", "job_expectations_label"),
                    ("job_meta_department", "job_meta_location"),
                    ("job_meta_work_type", "job_meta_employment", "job_meta_experience"),
                ),
            },
        ),
        (
            "5 – Başvuru Formu",
            {
                "classes": ["tab"],
                "fields": (
                    "apply_form_title",
                    ("apply_button_text", "apply_button_url"),
                    "kvkk_text",
                ),
            },
        ),
        (
            "5b – Başvuru Form Kopyası",
            {
                "classes": ["tab"],
                "fields": (
                    ("app_position_summary_label", "app_form_title"),
                    ("app_submit_label", "app_submitting_label"),
                    ("app_upload_label", "app_privacy_link_label"),
                    "app_privacy_consent_text",
                    "app_feedback_success_message",
                    "app_feedback_error_message",
                    "app_feedback_missing_cv_message",
                    ("app_field_first_name", "app_placeholder_first_name"),
                    ("app_field_last_name", "app_placeholder_last_name"),
                    ("app_field_email", "app_placeholder_email"),
                    ("app_field_phone", "app_placeholder_phone"),
                    ("app_field_cv", "app_placeholder_cv"),
                    ("app_field_cover_letter", "app_placeholder_cover_letter"),
                ),
            },
        ),
        (
            "6 – Bülten",
            {
                "classes": ["tab"],
                "fields": (
                    "newsletter_title",
                    "newsletter_placeholder",
                    "newsletter_submit_aria_label",
                    "newsletter_success_message",
                    "newsletter_error_message",
                ),
            },
        ),
        (
            "7 – İletişim CTA",
            {
                "classes": ["tab"],
                "fields": (
                    "contact_label",
                    "contact_title",
                    "contact_description",
                    ("contact_button_text", "contact_button_url"),
                ),
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
        extra_context["title"] = "Kariyer Sayfası"
        extra_context["subtitle"] = None
        return super().change_view(request, object_id, form_url, extra_context)


# Departmanlar 
@admin.register(Department)
class DepartmentAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["name", "show_icon", "show_position_count", "is_active", "move_up_down_links"]
    list_editable = ["is_active"]
    list_filter = ["is_active"]
    search_fields = ["name"]
    ordering = ["order"]

    fieldsets = (
        (
            "Departman Bilgileri",
            {
                "classes": ["tab"],
                "fields": (
                    "name",
                    "icon",
                    "is_active",
                ),
            },
        ),
    )

    @display(description="İkon")
    def show_icon(self, obj):
        if obj.icon:
            return format_html(
                '<img src="{}" style="height:28px;width:28px;object-fit:contain;" />',
                obj.icon.url,
            )
        return "—"

    @display(description="Pozisyon Sayısı")
    def show_position_count(self, obj):
        return obj.positions.filter(is_active=True).count()



#İş İlanları Kısmı
@admin.register(JobPosition)
class JobPositionAdmin(OrderableMixin, TabbedTranslationAdmin, ModelAdmin):
    change_form_show_cancel_button = True
    list_display = [
        "title", "department", "location",
        "show_work_type", "show_employment_type",
        "is_active", "move_up_down_links",
    ]
    list_editable = ["is_active"]
    list_filter = ["is_active", "work_type", "employment_type", "department"]
    search_fields = ["title", "description"]
    ordering = ["order"]
    prepopulated_fields = {"slug": ("title",)}

    fieldsets = (
        (
            "1 – Temel",
            {
                "classes": ["tab"],
                "fields": (
                    ("title", "slug"),
                    ("department", "location"),
                    ("work_type", "employment_type"),
                    "experience_level",
                ),
            },
        ),
        (
            "2 – İçerik",
            {
                "classes": ["tab"],
                "fields": (
                    "description",
                    "responsibilities",
                    "requirements",
                ),
            },
        ),
        (
            "3 – Durum",
            {
                "classes": ["tab"],
                "fields": (
                    "is_active",
                ),
            },
        ),
    )

    @display(
        description="Çalışma Şekli",
        label={"Uzaktan": "info", "Ofiste": "warning", "Hibrit": "success"},
    )
    def show_work_type(self, obj):
        return obj.get_work_type_display()

    @display(
        description="Çalışma Tipi",
        label={
            "Tam Zamanlı": "success",
            "Yarı Zamanlı": "info",
            "Stajyer": "warning",
            "Sözleşmeli": "info",
        },
    )
    def show_employment_type(self, obj):
        return obj.get_employment_type_display()



#İş Başvuruları
@admin.register(JobApplication)
class JobApplicationAdmin(ModelAdmin):
    change_form_show_cancel_button = True
    list_display = ["get_full_name", "email_display", "position", "show_review_status", "show_cv", "created_at"]
    list_filter = ["review_status", "position__department", "created_at"]
    search_fields = ["first_name", "last_name", "email", "position__title"]
    ordering = ["-created_at"]
    readonly_fields = [
        "first_name", "last_name", "email", "phone", "position",
        "show_cv", "cover_letter", "kvkk_accepted", "created_at",
    ]
    list_per_page = 25
    date_hierarchy = "created_at"

    fieldsets = (
        (
            "Başvuran",
            {
                "fields": (
                    ("first_name", "last_name"),
                    ("email", "phone"),
                    "position",
                ),
            },
        ),
        (
            "Başvuru",
            {
                "fields": (
                    "show_cv",
                    "cover_letter",
                    "kvkk_accepted",
                    "created_at",
                ),
            },
        ),
        (
            "Değerlendirme",
            {
                "fields": (
                    "review_status",
                    "review_note",
                ),
            },
        ),
    )

    @display(description="Ad Soyad")
    def get_full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"

    @display(
        description="Değerlendirme",
        label={
            "Yeni": "info",
            "İnceleniyor": "warning",
            "Kabul Edildi": "success",
            "Reddedildi": "danger",
        },
    )
    def show_review_status(self, obj):
        return obj.get_review_status_display()

    @display(description="E-posta", ordering="email")
    def email_display(self, obj):
        return format_html('<a href="mailto:{}">{}</a>', obj.email, obj.email)

    # Yuvarlak aksiyon butonu ikonları (font bağımlılığı olmadan, inline SVG)
    _EYE_SVG = (
        '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" '
        'stroke="currentColor" stroke-width="1.8" aria-hidden="true">'
        '<path stroke-linecap="round" stroke-linejoin="round" d="M2.04 12.32a1 1 0 0 1 0-.64 '
        'C3.42 7.51 7.36 4.5 12 4.5s8.57 3.01 9.96 7.18c.07.21.07.43 0 .64C20.58 16.49 16.64 19.5 '
        '12 19.5s-8.57-3.01-9.96-7.18Z"/>'
        '<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>'
        '</svg>'
    )
    def _cv_action(self, url, *, title, bg, fg, svg, new_tab=False):
        """Daire içinde ikon + tooltip'li aksiyon butonu üretir."""
        target = mark_safe(' target="_blank" rel="noopener"') if new_tab else ""
        return format_html(
            '<a href="{}"{} title="{}" aria-label="{}" '
            'style="display:inline-flex;align-items:center;justify-content:center;'
            'width:34px;height:34px;border-radius:9999px;background:{};color:{};'
            'text-decoration:none;margin-right:6px;vertical-align:middle;">{}</a>',
            url, target, title, title, bg, fg, mark_safe(svg),
        )

    @display(description="CV")
    def show_cv(self, obj):
        if not obj.cv_file:
            return "—"
        # CV'ler yalnızca PDF; tarayıcıda inline görüntülenir (indirme yok).
        return self._cv_action(
            reverse("admin:careers_jobapplication_cv_view", args=[obj.pk]),
            title="Görüntüle", bg="rgba(79,70,229,.12)", fg="#4f46e5",
            svg=self._EYE_SVG, new_tab=True,
        )

    def has_add_permission(self, request):
        """Admin'den başvuru eklemeyi kapat — sadece API'den gelir."""
        return False

    def has_delete_permission(self, request, obj=None):
        return True

    # ── CV görüntüleme (inline, indirme yok) ─────────────────────────────────
    # CV ham (imzasız/public) S3 URL'i yerine yetkili admin üzerinden, tarayıcıda
    # inline PDF olarak gösterilir. İndirme kapalıdır: dosya tarayıcının sandbox'ı
    # içinde açılır, kullanıcının diskine inip masaüstü uygulamada çalışmaz.
    def get_urls(self):
        urls = super().get_urls()
        custom = [
            path(
                "<int:pk>/cv/view/",
                self.admin_site.admin_view(self.cv_view),
                name="careers_jobapplication_cv_view",
            ),
        ]
        return custom + urls

    def _get_cv_object(self, request, pk):
        if not self.has_view_permission(request):
            raise Http404()
        obj = self.get_object(request, pk)
        if obj is None or not obj.cv_file:
            raise Http404()
        return obj

    def _cv_filename(self, obj):
        base = turkish_slugify(f"{obj.first_name} {obj.last_name}") or "cv"
        return f"{base}-cv.pdf"

    def cv_view(self, request, pk):
        """CV'yi (PDF) tarayıcıda inline gösterir — indirme yok, yalnızca görüntüleme."""
        obj = self._get_cv_object(request, pk)
        response = FileResponse(obj.cv_file.open("rb"), content_type="application/pdf")
        response["Content-Disposition"] = f'inline; filename="{self._cv_filename(obj)}"'
        response["X-Content-Type-Options"] = "nosniff"
        return response
