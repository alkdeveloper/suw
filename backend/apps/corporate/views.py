from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from drf_spectacular.utils import extend_schema
from .models import CorporatePage, CorporateHistoryItem
from apps.home.models import HomeBrand, HomeActivity
from .serializers import CorporatePageSerializer


class CorporatePageView(APIView):
    permission_classes = [AllowAny]
    serializer_class = CorporatePageSerializer

    @extend_schema(summary="Kurumsal Sayfa", description="Kurumsal sayfa tüm bölüm verilerini döndürür.", tags=["Corporate"])
    def get(self, request):
        page = CorporatePage.get_solo()

        page.history_items = CorporateHistoryItem.objects.order_by("order")
        page.brands = HomeBrand.objects.filter(is_active=True).order_by("order")
        page.activities = HomeActivity.objects.filter(is_active=True).order_by("order")

        serializer = CorporatePageSerializer(page, context={"request": request})
        return Response(serializer.data)
