"""
Admin dashboard callback — özet kartlar, hızlı erişim, bildirimler.
Süper kullanıcılar tüm içeriği, İK Yöneticisi sadece kariyer içeriğini görür.
"""
from django.utils import timezone


def _is_ik_user(request):
    """Süper kullanıcı olmayan ama kariyer yetkisi olan kullanıcı."""
    return (
        not request.user.is_superuser
        and request.user.has_module_perms("careers")
    )


def dashboard_callback(request, context):
    from apps.careers.models import JobPosition, JobApplication, Department

    now = timezone.now()
    thirty_days_ago = now - timezone.timedelta(days=30)
    new_applications = JobApplication.objects.filter(
        created_at__gte=thirty_days_ago
    ).count()

    # ── İK Yöneticisi: sadece kariyer kartları ────────────────────────────────
    if _is_ik_user(request):
        context["summary_cards"] = [
            {
                "label": "Aktif İlanlar",
                "count": JobPosition.objects.filter(is_active=True).count(),
                "icon": "assignment",
                "color": "green",
                "url": "/admin/careers/jobposition/",
            },
            {
                "label": "Son 30g Başvuru",
                "count": new_applications,
                "icon": "person_add",
                "color": "teal",
                "url": "/admin/careers/jobapplication/",
            },
            {
                "label": "Departmanlar",
                "count": Department.objects.filter(is_active=True).count(),
                "icon": "account_tree",
                "color": "blue",
                "url": "/admin/careers/department/",
            },
        ]
        context["quick_links"] = [
            {"title": "İlan Ekle",    "icon": "work",         "url": "/admin/careers/jobposition/add/"},
            {"title": "Departmanlar", "icon": "account_tree", "url": "/admin/careers/department/"},
            {"title": "Başvurular",   "icon": "assignment_ind","url": "/admin/careers/jobapplication/"},
        ]

        # Sadece başvuru bildirimleri
        recent_applications = (
            JobApplication.objects
            .select_related("position")
            .order_by("-created_at")[:5]
        )
        context["notifications_applications"] = [
            {
                "title": f"{a.first_name} {a.last_name}",
                "meta": f"{a.position.title if a.position else '—'} • {a.created_at.strftime('%d.%m.%Y %H:%M')}",
                "url": f"/admin/careers/jobapplication/{a.pk}/change/",
                "icon": "person",
                "icon_color": "teal",
            }
            for a in recent_applications
        ]
        context["new_application_count"] = new_applications
        context["notifications_messages"] = []
        context["unread_message_count"] = 0
        return context

    # ── Süper kullanıcı: tam dashboard ───────────────────────────────────────
    from apps.brands.models import Brand, GroupCompany
    from apps.contact.models import ContactMessage
    from apps.news.models import News
    from apps.gallery.models import GalleryImage
    from apps.core.models import NewsletterSubscriber

    unread_messages = ContactMessage.objects.filter(is_read=False).count()

    context["summary_cards"] = [
        {
            "label": "Aktif Markalar",
            "count": Brand.objects.filter(is_active=True).count(),
            "icon": "label",
            "color": "blue",
            "url": "/admin/brands/brand/",
        },
        {
            "label": "Grup Şirketleri",
            "count": GroupCompany.objects.filter(is_active=True).count(),
            "icon": "business",
            "color": "purple",
            "url": "/admin/brands/groupcompany/",
        },
        {
            "label": "Aktif İlanlar",
            "count": JobPosition.objects.filter(is_active=True).count(),
            "icon": "assignment",
            "color": "green",
            "url": "/admin/careers/jobposition/",
        },
        {
            "label": "Son 30g Başvuru",
            "count": new_applications,
            "icon": "person_add",
            "color": "teal",
            "url": "/admin/careers/jobapplication/",
        },
        {
            "label": "Okunmamış Mesaj",
            "count": unread_messages,
            "icon": "mark_email_unread",
            "color": "rose",
            "url": "/admin/contact/contactmessage/?is_read__exact=0",
        },
        {
            "label": "Haberler",
            "count": News.objects.filter(is_active=True).count(),
            "icon": "newspaper",
            "color": "sky",
            "url": "/admin/news/news/",
        },
        {
            "label": "Galeri Görselleri",
            "count": GalleryImage.objects.count(),
            "icon": "photo_library",
            "color": "orange",
            "url": "/admin/gallery/galleryimage/",
        },
        {
            "label": "Bülten Aboneleri",
            "count": NewsletterSubscriber.objects.filter(is_active=True).count(),
            "icon": "mail",
            "color": "amber",
            "url": "/admin/core/newslettersubscriber/",
        },
    ]

    context["quick_links"] = [
        {"title": "Marka Ekle",   "icon": "add_circle",    "url": "/admin/brands/brand/add/"},
        {"title": "Haber Ekle",   "icon": "post_add",      "url": "/admin/news/news/add/"},
        {"title": "İlan Ekle",    "icon": "work",          "url": "/admin/careers/jobposition/add/"},
        {"title": "Departmanlar", "icon": "account_tree",  "url": "/admin/careers/department/"},
        {"title": "Galeri",       "icon": "photo_library", "url": "/admin/gallery/galleryimage/"},
        {"title": "Site Ayarları","icon": "tune",          "url": "/admin/core/sitesettings/"},
    ]

    recent_messages = (
        ContactMessage.objects
        .filter(is_read=False)
        .order_by("-created_at")[:5]
    )
    context["notifications_messages"] = [
        {
            "title": f"{m.first_name} {m.last_name} — {m.subject}",
            "meta": m.created_at.strftime("%d.%m.%Y %H:%M"),
            "url": f"/admin/contact/contactmessage/{m.pk}/change/",
            "icon": "mail",
            "icon_color": "rose",
        }
        for m in recent_messages
    ]
    context["unread_message_count"] = unread_messages

    recent_applications = (
        JobApplication.objects
        .select_related("position")
        .order_by("-created_at")[:5]
    )
    context["notifications_applications"] = [
        {
            "title": f"{a.first_name} {a.last_name}",
            "meta": f"{a.position.title if a.position else '—'} • {a.created_at.strftime('%d.%m.%Y %H:%M')}",
            "url": f"/admin/careers/jobapplication/{a.pk}/change/",
            "icon": "person",
            "icon_color": "teal",
        }
        for a in recent_applications
    ]
    context["new_application_count"] = new_applications

    return context
