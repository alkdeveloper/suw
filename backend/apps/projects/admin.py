from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html
from solo.admin import SingletonModelAdmin
from unfold.admin import ModelAdmin

from .models import ProjectSector, ProjectsPageSettings


def preview(field):
    return format_html('<img src="{}" style="width:96px;height:64px;object-fit:cover;border-radius:4px" />', field.url) if field else "—"


@admin.register(ProjectsPageSettings)
class ProjectsPageSettingsAdmin(SingletonModelAdmin, ModelAdmin):
    fieldsets = (
        ("Türkçe Hero", {"fields": ("hero_title_tr", "hero_description_tr")}),
        ("İngilizce Hero", {"fields": ("hero_title_en", "hero_description_en")}),
        ("SEO", {"fields": (("seo_title_tr", "seo_title_en"), ("seo_description_tr", "seo_description_en"))}),
    )


@admin.register(ProjectSector)
class ProjectSectorAdmin(ModelAdmin):
    list_display = ("image_preview", "title_tr", "title_en", "sort_order", "is_active", "edit_link")
    list_display_links = ("title_tr",)
    list_editable = ("sort_order", "is_active")
    ordering = ("sort_order", "id")
    search_fields = ("title_tr", "title_en", "headline_tr", "headline_en")
    readonly_fields = ("image_preview", "image_mobile_preview")
    fieldsets = (
        ("Türkçe İçerik", {"fields": ("title_tr", "headline_tr", "description_tr")}),
        ("İngilizce İçerik", {"fields": ("title_en", "headline_en", "description_en")}),
        ("Görseller", {"fields": ("image", "image_preview", "image_mobile", "image_mobile_preview")}),
        ("Yayın", {"fields": ("sort_order", "is_active")}),
    )

    @admin.display(description="Görsel")
    def image_preview(self, obj): return preview(obj.image)

    @admin.display(description="Mobil Görsel")
    def image_mobile_preview(self, obj): return preview(obj.image_mobile)

    @admin.display(description="Düzenle")
    def edit_link(self, obj):
        url = reverse("admin:projects_projectsector_change", args=(obj.pk,))
        return format_html('<a class="button" href="{}">Düzenle</a>', url)
