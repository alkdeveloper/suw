from django.http import HttpResponseRedirect
from django.urls import re_path, reverse
from django.utils.html import format_html
from urllib.parse import unquote


class OrderableMixin:
    """↑↓ sıralama linkleri için mixin (django-ordered-model ile çalışır)."""

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            re_path(
                r"^(.+)/move-(up|down)/$",
                self.admin_site.admin_view(self.move_view),
            ),
        ]
        return custom_urls + urls

    def move_view(self, request, object_id, direction):
        from django.shortcuts import get_object_or_404
        queryset = self.get_queryset(request)
        obj = get_object_or_404(queryset, pk=unquote(object_id))
        getattr(obj, direction)()
        return HttpResponseRedirect(request.META.get("HTTP_REFERER", ".."))

    def move_up_down_links(self, obj):
        opts = obj._meta
        base = reverse(f"admin:{opts.app_label}_{opts.model_name}_changelist")
        btn = (
            "display:inline-flex;align-items:center;justify-content:center;"
            "width:26px;height:26px;border-radius:50%;border:1px solid #ccc;"
            "text-decoration:none;color:inherit;font-size:13px;line-height:1;"
        )
        return format_html(
            '<a href="{}{}/" style="{}" title="Yukarı taşı">↑</a>'
            '&nbsp;'
            '<a href="{}{}/" style="{}" title="Aşağı taşı">↓</a>',
            base, f"{obj.pk}/move-up", btn,
            base, f"{obj.pk}/move-down", btn,
        )

    move_up_down_links.short_description = "Sıra"
