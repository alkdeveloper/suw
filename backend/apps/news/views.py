from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.pagination import PageNumberPagination
from drf_spectacular.utils import extend_schema, OpenApiParameter
from drf_spectacular.types import OpenApiTypes
from .models import NewsPage, News
from apps.home.models import HomeBrand
from .serializers import NewsPageSerializer, NewsListSerializer, NewsDetailSerializer


class NewsPagination(PageNumberPagination):
    page_size = 9
    page_size_query_param = "page_size"
    max_page_size = 30


class NewsPageView(APIView):
    # Haberler sayfası ayarları + öne çıkan haber.

    permission_classes = [AllowAny]
    serializer_class = NewsPageSerializer

    @extend_schema(summary="Haberler Sayfası", description="Haberler sayfa ayarları ve öne çıkan haberi döndürür.", tags=["News"])
    def get(self, request):
        page = NewsPage.objects.first()
        if not page:
            page = NewsPage.get_solo()

        # Standalone querysets
        page.featured = (
            News.objects.filter(is_active=True, is_featured=True)
            .select_related("category")
            .order_by("-date")
            .first()
        )
        page.brands = HomeBrand.objects.filter(is_active=True).order_by("order")

        serializer = NewsPageSerializer(page, context={"request": request})
        return Response(serializer.data)


class NewsListView(ListAPIView):
    # Haber listesi (sayfalı)

    permission_classes = [AllowAny]
    serializer_class = NewsListSerializer
    pagination_class = NewsPagination

    @extend_schema(
        summary="Haber Listesi",
        description="Aktif haberleri sayfalı olarak döndürür. Opsiyonel kategori filtresi.",
        parameters=[
            OpenApiParameter(
                name="category",
                type=OpenApiTypes.STR,
                location=OpenApiParameter.QUERY,
                required=False,
                description="Kategori slug'ına göre filtrele.",
            ),
        ],
        tags=["News"],
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def get_queryset(self):
        qs = News.objects.filter(is_active=True).select_related("category").order_by("-date", "order")
        category_slug = self.request.query_params.get("category")
        if category_slug:
            qs = qs.filter(category__slug=category_slug)
        return qs


class NewsDetailView(RetrieveAPIView):
    # Haber detayı

    permission_classes = [AllowAny]
    serializer_class = NewsDetailSerializer
    lookup_field = "slug"

    @extend_schema(summary="Haber Detayı", description="Slug ile haber detayını döndürür.", tags=["News"])
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def get_queryset(self):
        return News.objects.filter(is_active=True).select_related("category")

    def _get_sibling_qs(self, obj):
        """Aynı kategorideki haberler, tarihe göre sıralı. Kategori yoksa tüm haberler."""
        qs = News.objects.filter(is_active=True).order_by("-date", "order")
        if obj.category_id:
            qs = qs.filter(category_id=obj.category_id)
        return qs

    def _get_previous(self, obj):
        """Mevcut haberden daha eski (önceki) haber."""
        qs = self._get_sibling_qs(obj)
        prev = qs.filter(date__lte=obj.date).exclude(pk=obj.pk).order_by("-date", "order").first()
        if prev and prev.date == obj.date:
            prev = (
                qs.filter(date=obj.date, pk__lt=obj.pk).order_by("-pk").first()
                or qs.filter(date__lt=obj.date).order_by("-date", "order").first()
            )
        return prev

    def _get_next(self, obj):
        """Mevcut haberden daha yeni (sonraki) haber."""
        qs = self._get_sibling_qs(obj)
        nxt = qs.filter(date__gte=obj.date).exclude(pk=obj.pk).order_by("date", "order").first()
        if nxt and nxt.date == obj.date:
            nxt = (
                qs.filter(date=obj.date, pk__gt=obj.pk).order_by("pk").first()
                or qs.filter(date__gt=obj.date).order_by("date", "order").first()
            )
        return nxt

    def get_object(self):
        obj = super().get_object()

        # Önceki / Sonraki haber
        obj.previous_news = self._get_previous(obj)
        obj.next_news = self._get_next(obj)

        # İlgili haberler (aynı kategoriden max 6)
        related_qs = News.objects.filter(is_active=True).exclude(pk=obj.pk).order_by("-date", "order")
        if obj.category_id:
            related_qs = related_qs.filter(category_id=obj.category_id)
        obj.related_news = related_qs.select_related("category")[:6]

        # Marka logo bandı
        obj.brands = HomeBrand.objects.filter(is_active=True).order_by("order")

        # NewsPage'den hero + CTA + detay copy verisi
        news_page = NewsPage.get_solo()
        obj.page_hero_title = news_page.hero_title
        obj.page_hero_image = news_page.hero_image
        obj.join_label = news_page.join_label
        obj.join_title = news_page.join_title
        obj.join_description = news_page.join_description
        obj.join_button_text = news_page.join_button_text
        obj.join_button_url = news_page.join_button_url
        obj.share_title = news_page.share_title
        obj.previous_label = news_page.previous_label
        obj.next_label = news_page.next_label
        obj.related_title = news_page.related_title
        obj.related_view_all_text = news_page.related_view_all_text
        obj.gallery_title = news_page.gallery_title

        return obj
