from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from drf_spectacular.utils import extend_schema
from .models import (
    HomePage,
    HomeTickerWord,
    HomeBrand,
    HomeActivity,
    HomeAboutFeature,
    HomeOperationalItem,
)
from apps.news.models import News
from .serializers import HomePageSerializer


class HomePageView(APIView):
    permission_classes = [AllowAny]
    serializer_class = HomePageSerializer

    @extend_schema(summary="Ana Sayfa", description="Ana sayfa tüm bölüm verilerini döndürür.", tags=["Home"])
    def get(self, request):
        page = HomePage.get_solo()

        # Standalone querysets — view'da filtre + sıralama
        page.ticker_words = HomeTickerWord.objects.order_by("order")
        page.brands = HomeBrand.objects.filter(is_active=True).order_by("order")
        page.activities = HomeActivity.objects.filter(is_active=True).order_by("order")
        page.about_features = HomeAboutFeature.objects.order_by("order")
        page.operational_items = HomeOperationalItem.objects.order_by("order")

        # Gerçek haberler tablosundan son N haberi çek
        page.news = News.objects.filter(is_active=True).select_related("category").order_by("-date")[:page.news_count]

        serializer = HomePageSerializer(page, context={"request": request})
        return Response(serializer.data)
