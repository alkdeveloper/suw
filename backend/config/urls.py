from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView


def health_check(request):
    return JsonResponse({"status": "ok"})


def api_root(request):
    return JsonResponse({
        "message": "ALK Group API",
        "endpoints": {
            "admin": "/admin/",
            "core": {
                "languages": "/api/core/languages/",
                "settings": "/api/core/settings/",
                "metadata": "/api/core/metadata/?path=/",
            },
            "home": "/api/home/",
            "corporate": "/api/corporate/",
            "brands": "/api/brands/",
            "gallery": "/api/gallery/",
            "careers": "/api/careers/",
            "news": "/api/news/",
            "contact": {
                "page": "/api/contact/page/",
                "message": "/api/contact/message/",
            },
            "legal": "/api/legal/<slug>/",
        }
    })


urlpatterns = [
    path("api/health/", health_check, name="health-check"),
    path("", api_root, name="api-root"),
    path("admin/", admin.site.urls),

    # API
    path("api/core/", include("apps.core.urls")),
    path("api/home/", include("apps.home.urls")),
    path("api/corporate/", include("apps.corporate.urls")),
    path("api/brands/", include("apps.brands.urls")),
    path("api/companies/", include("apps.brands.companies_urls")),
    path("api/gallery/", include("apps.gallery.urls")),
    path("api/careers/", include("apps.careers.urls")),
    path("api/news/", include("apps.news.urls")),
    path("api/contact/", include("apps.contact.urls")),
    path("api/legal/", include("apps.legal.urls")),
]

# Swagger / Redoc — yalnızca DEBUG modunda açık; production'da erişilemez
if settings.DEBUG:
    urlpatterns += [
        path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
        path("api/docs/", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),
        path("api/redoc/", SpectacularRedocView.as_view(url_name="schema"), name="redoc"),
    ]

# Static ve media dosyalar yalnızca DEBUG modunda
if settings.DEBUG:
    from django.views.static import serve as _serve
    urlpatterns += [
        path("media/<path:path>", _serve, {"document_root": settings.MEDIA_ROOT}),
    ]
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
