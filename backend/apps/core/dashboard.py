"""SUW odaklı admin dashboard verileri."""


def dashboard_callback(request, context):
    from apps.contact.models import ContactMessage
    from apps.products.models import Product, ProductCategory, ProductGroup

    unread_queryset = ContactMessage.objects.filter(is_read=False).order_by("-created_at")
    unread_messages = unread_queryset.count()
    context["summary_cards"] = [
        {"label": "Aktif Ürünler", "count": Product.objects.filter(is_active=True).count(), "icon": "inventory_2", "color": "amber", "url": "/admin/products/product/"},
        {"label": "Ürün Grupları", "count": ProductGroup.objects.filter(is_active=True).count(), "icon": "dashboard", "color": "blue", "url": "/admin/products/productgroup/"},
        {"label": "Kategoriler", "count": ProductCategory.objects.filter(is_active=True).count(), "icon": "category", "color": "teal", "url": "/admin/products/productcategory/"},
        {"label": "Okunmamış Mesaj", "count": unread_messages, "icon": "mark_email_unread", "color": "rose", "url": "/admin/contact/contactmessage/?is_read__exact=0"},
    ]
    context["quick_links"] = [
        {"title": "Ürün Ekle", "icon": "add_circle", "url": "/admin/products/product/add/"},
        {"title": "Ürün Grupları", "icon": "dashboard", "url": "/admin/products/productgroup/"},
        {"title": "Kategoriler", "icon": "category", "url": "/admin/products/productcategory/"},
        {"title": "Site Ayarları", "icon": "tune", "url": "/admin/core/sitesettings/"},
    ]
    context["notifications_messages"] = [
        {
            "title": f"{message.first_name} {message.last_name}",
            "meta": message.subject,
            "icon": "mail",
            "icon_color": "rose",
            "url": f"/admin/contact/contactmessage/{message.pk}/change/",
        }
        for message in unread_queryset[:5]
    ]
    context["unread_message_count"] = unread_messages
    return context
