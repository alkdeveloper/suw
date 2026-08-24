from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.conf import settings
from django.db.models import Prefetch
from drf_spectacular.utils import extend_schema, OpenApiParameter, OpenApiExample
from drf_spectacular.types import OpenApiTypes
from .models import SiteSettings, NavigationItem
from .serializers import SiteSettingsSerializer, MetadataSerializer, NewsletterSubscriberSerializer


class SiteSettingsView(generics.RetrieveAPIView):
    serializer_class = SiteSettingsSerializer
    permission_classes = [AllowAny]

    @extend_schema(
        summary="Site Ayarları",
        description="Site geneli ayarları döndürür.",
        tags=["Core"],
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def get_object(self):
        SiteSettings.get_solo()  # ensure singleton exists
        return SiteSettings.objects.prefetch_related(
            Prefetch(
                "navigation_items",
                queryset=NavigationItem.objects.filter(location=NavigationItem.HEADER).order_by("order"),
                to_attr="header_nav",
            ),
            Prefetch(
                "navigation_items",
                queryset=NavigationItem.objects.filter(location=NavigationItem.FOOTER).order_by("order"),
                to_attr="footer_nav",
            ),
        ).first()


class LanguageListView(APIView):
    permission_classes = [AllowAny]

    @extend_schema(
        summary="Dil listesi",
        description="Sistemde tanımlı dil kodlarını döndürür.",
        responses={200: OpenApiTypes.STR},
        tags=["Core"],
    )
    def get(self, request):
        languages = [code for code, _ in settings.LANGUAGES]
        return Response(languages)


class MetadataView(APIView):
    """
    GET /api/v1/core/metadata/?path=/
    GET /api/v1/core/metadata/?path=/kurumsal
    GET /api/v1/core/metadata/?path=/haberler/haber-slug

    Verilen path için meta_title ve meta_description döndürür.
    Sayfa SEO alanları boşsa SiteSettings'e fallback yapar.
    """

    permission_classes = [AllowAny]

    # Singleton sayfalar: path → (module, model_name)
    SINGLETON_MAP = {
        "/":          ("apps.home.models",      "HomePage"),
        "/kurumsal":  ("apps.corporate.models", "CorporatePage"),
        "/markalar":  ("apps.brands.models",    "BrandsPage"),
        "/galeri":    ("apps.gallery.models",   "GalleryPage"),
        "/kariyer":   ("apps.careers.models",   "CareerSettings"),
        "/haberler":  ("apps.news.models",      "NewsPage"),
        "/iletisim":  ("apps.contact.models",   "ContactPage"),
    }

    # Detail sayfalar: path prefix → (module, model_name)
    DETAIL_MAP = {
        "haberler": ("apps.news.models", "News"),
    }

    @extend_schema(
        parameters=[
            OpenApiParameter(
                name="path",
                type=OpenApiTypes.STR,
                location=OpenApiParameter.QUERY,
                required=False,
                description="Sayfa path'i. Örnek: /, /kurumsal, /haberler/haber-slug",
                examples=[
                    OpenApiExample("Ana Sayfa",  value="/"),
                    OpenApiExample("Kurumsal",   value="/kurumsal"),
                    OpenApiExample("Markalar",   value="/markalar"),
                    OpenApiExample("Galeri",     value="/galeri"),
                    OpenApiExample("Kariyer",    value="/kariyer"),
                    OpenApiExample("Haberler",   value="/haberler"),
                    OpenApiExample("İletişim",   value="/iletisim"),
                ],
            )
        ],
        responses=MetadataSerializer,
        summary="Sayfa metadata",
        description="Verilen path için SEO metadata döndürür. Sayfa SEO boşsa site geneli ayarlara fallback yapar.",
        tags=["Core"],
    )
    def get(self, request, slug=None):
        path = slug if slug else request.query_params.get("path", "/")
        if not path.startswith("/"):
            path = "/" + path
        path = path.rstrip("/") or "/"

        obj = self._resolve(path)
        site = SiteSettings.get_solo()

        # Fallback: sayfa SEO boşsa site geneli değerleri kullan
        meta_title = getattr(obj, "meta_title", "") or site.meta_title
        meta_description = getattr(obj, "meta_description", "") or site.meta_description

        data = {
            "path": path,
            "meta_title": meta_title,
            "meta_description": meta_description,
        }
        serializer = MetadataSerializer(data)
        return Response(serializer.data)

    def _resolve(self, path):
        """Path'e göre doğru model instance'ını döndürür."""
        import importlib

        # Singleton eşleşmesi
        if path in self.SINGLETON_MAP:
            module_path, model_name = self.SINGLETON_MAP[path]
            try:
                module = importlib.import_module(module_path)
                model = getattr(module, model_name)
                return model.get_solo()
            except Exception:
                return None

        # Detail sayfa (örn: /haberler/haber-slug)
        parts = [p for p in path.split("/") if p]
        if len(parts) >= 2:
            prefix = parts[0]
            slug = parts[-1]
            if prefix in self.DETAIL_MAP:
                module_path, model_name = self.DETAIL_MAP[prefix]
                try:
                    module = importlib.import_module(module_path)
                    model = getattr(module, model_name)
                    return self._find_by_slug(model, slug)
                except Exception:
                    return None

        return None

    @staticmethod
    def _find_by_slug(model, slug):
        """
        Slug'a göre model instance'ı bulur.
        modeltranslation slug_tr, slug_en gibi alanlar ürettiğinden
        tüm dil slug alanlarında OR ile arama yapar.
        """
        from django.db.models import Q

        q = Q(slug=slug)
        for code, _ in settings.LANGUAGES:
            safe_code = code.replace("-", "_")
            field_name = f"slug_{safe_code}"
            try:
                model._meta.get_field(field_name)
                q |= Q(**{field_name: slug})
            except Exception:
                pass
        return model.objects.filter(q).first()


# Bülten Aboneliği (POST)
class NewsletterSubscribeView(generics.CreateAPIView):
    """POST /api/core/newsletter/ — Bülten aboneliği."""

    serializer_class = NewsletterSubscriberSerializer

    @extend_schema(
        summary="Bülten Aboneliği",
        description="E-posta adresiyle bülten aboneliği oluşturur.",
        tags=["Core"],
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)
