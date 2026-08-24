from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.pagination import PageNumberPagination
from drf_spectacular.utils import extend_schema, OpenApiParameter
from drf_spectacular.types import OpenApiTypes
from .models import GalleryPage, GalleryCategory, GalleryImage
from apps.home.models import HomeBrand, HomePage
from apps.corporate.models import CorporatePage
from .serializers import GalleryPageSerializer, GalleryImageSerializer


def _apply_corporate_join_fallback(gallery_page: GalleryPage) -> None:
    """
    Galeri admin'de CTA alanları boşsa kurumsal sayfadaki aynı blok metinlerini kullan.
    (İstek süresince bellekte; veritabanına yazılmaz.)
    """
    corp = CorporatePage.get_solo()
    join_fields = (
        "join_label",
        "join_title",
        "join_description",
        "join_button_text",
        "join_button_url",
    )
    for name in join_fields:
        current = getattr(gallery_page, name, None)
        if current is None or (isinstance(current, str) and not str(current).strip()):
            fallback = getattr(corp, name, None)
            if fallback is not None and str(fallback).strip():
                setattr(gallery_page, name, fallback)


def _apply_home_video_fallback(gallery_page: GalleryPage) -> None:
    """
    Galeri video alanları boşsa anasayfa (HomePage) video bloğu kullanılır.
    Kurumsal modelinde video yok; sitedeki "Neler Yapıyoruz?" içeriği burada tutulur.
    """
    home = HomePage.get_solo()
    for name in ("video_title", "video_description"):
        current = getattr(gallery_page, name, None)
        if current is None or (isinstance(current, str) and not str(current).strip()):
            fallback = getattr(home, name, None)
            if fallback is not None and str(fallback).strip():
                setattr(gallery_page, name, fallback)
    if not gallery_page.video_image and home.video_image:
        gallery_page.video_image = home.video_image
    gallery_has_video = bool(gallery_page.video_file) or bool((gallery_page.video_url or "").strip())
    if not gallery_has_video and home.video_file:
        gallery_page.video_file = home.video_file


class GalleryImagePagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = "page_size"
    max_page_size = 48


class GalleryPageView(APIView):
    # Galeri sayfası ayarları

    permission_classes = [AllowAny]
    serializer_class = GalleryPageSerializer

    @extend_schema(summary="Galeri Sayfası", description="Galeri sayfa ayarları ve kategorileri döndürür.", tags=["Gallery"])
    def get(self, request):
        page = GalleryPage.get_solo()
        _apply_home_video_fallback(page)
        _apply_corporate_join_fallback(page)
        page.categories = GalleryCategory.objects.order_by("order")
        page.brands = HomeBrand.objects.filter(is_active=True).order_by("order")

        serializer = GalleryPageSerializer(page, context={"request": request})
        return Response(serializer.data)


class GalleryImageListView(ListAPIView):
    # Galeri görselleri (filtrelenebilir)

    permission_classes = [AllowAny]
    serializer_class = GalleryImageSerializer
    pagination_class = GalleryImagePagination

    @extend_schema(
        summary="Galeri Görselleri",
        description="Aktif galeri görsellerini döndürür. Opsiyonel kategori filtresi.",
        parameters=[
            OpenApiParameter(
                name="category",
                type=OpenApiTypes.STR,
                location=OpenApiParameter.QUERY,
                required=False,
                description="Kategori slug'ına göre filtrele.",
            ),
        ],
        tags=["Gallery"],
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def get_queryset(self):
        qs = GalleryImage.objects.filter(is_active=True).select_related("category").order_by("order")
        category_slug = self.request.query_params.get("category")
        if category_slug:
            qs = qs.filter(category__slug=category_slug)
        return qs
