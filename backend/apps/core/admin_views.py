"""Custom, server-side Django admin actions."""

from datetime import timedelta

from django.contrib import messages
from django.core.exceptions import PermissionDenied
from django.db import transaction
from django.shortcuts import redirect
from django.utils import timezone
from django.views.decorators.http import require_POST

from .models import SiteSettings
from .services.github_publish import (
    PublishConfigurationError,
    PublishRequestError,
    dispatch_publish_workflow,
)

PUBLISH_COOLDOWN = timedelta(seconds=60)


@require_POST
def publish_site(request):
    if not request.user.is_superuser:
        raise PermissionDenied

    now = timezone.now()
    with transaction.atomic():
        site_settings = SiteSettings.objects.select_for_update().first()
        if site_settings is None:
            site_settings = SiteSettings.objects.create()

        last_requested = site_settings.last_publish_requested_at
        if last_requested and now - last_requested < PUBLISH_COOLDOWN:
            messages.warning(
                request,
                "Bir yayın işlemi kısa süre önce başlatıldı. Lütfen biraz bekleyin.",
            )
            return redirect("admin:index")

        try:
            dispatch_publish_workflow()
        except PublishConfigurationError:
            messages.error(
                request,
                "Site yayını başlatılamadı. Yayın entegrasyonu yapılandırılmamış.",
            )
        except PublishRequestError:
            messages.error(
                request,
                "Site yayını başlatılamadı. GitHub bağlantısını kontrol edin.",
            )
        else:
            site_settings.last_publish_requested_at = now
            site_settings.save(update_fields=["last_publish_requested_at"])
            messages.success(
                request,
                "Site yayını başlatıldı. Güncellemeler birkaç dakika içinde yayında olacaktır.",
            )

    return redirect("admin:index")
