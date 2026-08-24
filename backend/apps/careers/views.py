from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.throttling import ScopedRateThrottle
from django.db.models import Count, Q
from drf_spectacular.utils import extend_schema, OpenApiParameter
from drf_spectacular.types import OpenApiTypes

from .models import CareerSettings, Department, JobPosition, JobApplication
from apps.home.models import HomeAboutFeature, HomeTickerWord, HomeActivity
from .serializers import (
    CareerPageSerializer,
    JobPositionListSerializer,
    JobPositionDetailSerializer,
    JobApplicationSerializer,
)
# Kariyer sayfası ve iş ilanları API görünümler
class CareerPageView(APIView):
    """GET /api/careers/ — Kariyer sayfası ayarları + departmanlar + stats."""

    permission_classes = [AllowAny]
    serializer_class = CareerPageSerializer

    @extend_schema(
        summary="Kariyer Sayfası",
        description="Kariyer sayfa ayarları, departman listesi ve istatistikleri döndürür.",
        tags=["Careers"],
    )
    def get(self, request):
        settings = CareerSettings.get_solo()

        settings.departments = (
            Department.objects.filter(is_active=True)
            .annotate(position_count=Count("positions", filter=Q(positions__is_active=True)))
            .order_by("order")
        )
        settings.stats = HomeAboutFeature.objects.order_by("order")
        settings.ticker_words = HomeTickerWord.objects.order_by("order")
        settings.activities = HomeActivity.objects.filter(is_active=True).order_by("order")

        serializer = CareerPageSerializer(settings, context={"request": request})
        return Response(serializer.data)

# İş İlanları Listesi
class JobPositionListView(generics.ListAPIView):
    """GET /api/careers/positions/ — Aktif iş ilanları."""

    permission_classes = [AllowAny]
    serializer_class = JobPositionListSerializer

    @extend_schema(
        summary="İş İlanları Listesi",
        description="Aktif iş ilanlarını döndürür. Opsiyonel departman filtresi.",
        parameters=[
            OpenApiParameter(
                name="department",
                type=OpenApiTypes.INT,
                location=OpenApiParameter.QUERY,
                required=False,
                description="Departman ID'sine göre filtrele.",
            ),
        ],
        tags=["Careers"],
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def get_queryset(self):
        qs = JobPosition.objects.filter(is_active=True).select_related("department").order_by("order")
        department_id = self.request.query_params.get("department")
        if department_id:
            qs = qs.filter(department_id=department_id)
        return qs


# İş İlanı Detay
class JobPositionDetailView(generics.RetrieveAPIView):

    permission_classes = [AllowAny]
    serializer_class = JobPositionDetailSerializer
    lookup_field = "slug"

    @extend_schema(
        summary="İş İlanı Detay",
        description="Slug'a göre iş ilanı detayını döndürür. apply_button_text ve apply_button_url kariyer ayarlarından gelir.",
        tags=["Careers"],
    )
    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        data = serializer.data

        # Buton metni ve URL'yi CareerSettings'ten ekle
        settings = CareerSettings.get_solo()
        data["apply_button_text"] = settings.apply_button_text
        data["apply_button_url"] = settings.apply_button_url

        return Response(data)

    def get_queryset(self):
        return JobPosition.objects.filter(is_active=True).select_related("department")


# İş Başvurusu (POST — multipart)
class JobApplicationCreateView(generics.CreateAPIView):
    """POST /api/careers/apply/ — İş başvurusu (CV dosyası ile)."""

    permission_classes = [AllowAny]
    serializer_class = JobApplicationSerializer
    parser_classes = [MultiPartParser, FormParser]
    throttle_classes = [ScopedRateThrottle]
    throttle_scope = "job_application"

    @extend_schema(
        summary="İş Başvurusu Gönder",
        description="İş başvurusu oluşturur. multipart/form-data ile CV dosyası yüklenir.",
        tags=["Careers"],
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)
