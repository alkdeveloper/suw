from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.exceptions import NotFound
from drf_spectacular.utils import extend_schema

from apps.home.models import HomeTickerWord
from apps.corporate.models import CorporateHistoryItem

from .models import (
    BrandsPage,
    CompaniesPage,
    Brand,
    GroupCompany,
    CompanyDetailPage,
    GlobalOperationLocation,
    AkalPage,
    AlkanPage,
    AkalGmbhPage,
    SuwPage,
)
from .serializers import (
    BrandsPageSerializer,
    CompaniesPageSerializer,
    CompanyDetailPageSerializer,
    AkalPageSerializer,
    AlkanPageSerializer,
    AkalGmbhPageSerializer,
    SuwPageSerializer,
)


class BrandsPageView(APIView):
    permission_classes = [AllowAny]
    serializer_class = BrandsPageSerializer

    @extend_schema(summary="Markalar Sayfası", tags=["Brands"])
    def get(self, request):
        page = BrandsPage.get_solo()
        page.brands = Brand.objects.filter(is_active=True).order_by("order")
        page.companies = GroupCompany.objects.filter(is_active=True).order_by("order")
        page.milestones = CorporateHistoryItem.objects.order_by("order")
        page.locations = GlobalOperationLocation.objects.filter(
            page_scope=GlobalOperationLocation.PAGE_SCOPE_BRANDS,
        ).order_by("order")
        page.ticker_words = HomeTickerWord.objects.order_by("order")
        return Response(BrandsPageSerializer(page, context={"request": request}).data)


class CompaniesPageView(APIView):
    permission_classes = [AllowAny]
    serializer_class = CompaniesPageSerializer

    @extend_schema(summary="Şirketler Sayfası", tags=["Companies"])
    def get(self, request):
        page = CompaniesPage.get_solo()
        page.companies = GroupCompany.objects.filter(is_active=True).order_by("order")
        page.milestones = CorporateHistoryItem.objects.order_by("order")
        page.locations = GlobalOperationLocation.objects.filter(
            page_scope=GlobalOperationLocation.PAGE_SCOPE_COMPANIES,
        ).order_by("order")
        page.ticker_words = HomeTickerWord.objects.order_by("order")
        return Response(CompaniesPageSerializer(page, context={"request": request}).data)


class _SingletonDetailView(APIView):
    """Her şirket detay sayfası için ortak singleton view tabanı."""

    permission_classes = [AllowAny]
    model = None
    serializer_class = None

    def get(self, request):
        obj = self.model.get_solo()
        return Response(self.serializer_class(obj, context={"request": request}).data)


class AkalPageView(_SingletonDetailView):
    model = AkalPage
    serializer_class = AkalPageSerializer

    @extend_schema(summary="Şirket Detayı · AKAL", tags=["Brands"])
    def get(self, request):
        obj = self.model.get_solo()
        # sub_brands M2M zaten modelde var → serializer many=True ile okuyor
        return Response(self.serializer_class(obj, context={"request": request}).data)


class AlkanPageView(_SingletonDetailView):
    model = AlkanPage
    serializer_class = AlkanPageSerializer

    @extend_schema(summary="Şirket Detayı · ALKAN", tags=["Brands"])
    def get(self, request):
        return super().get(request)


class AkalGmbhPageView(_SingletonDetailView):
    model = AkalGmbhPage
    serializer_class = AkalGmbhPageSerializer

    @extend_schema(summary="Şirket Detayı · AKAL GmbH", tags=["Brands"])
    def get(self, request):
        return super().get(request)


class SuwPageView(_SingletonDetailView):
    model = SuwPage
    serializer_class = SuwPageSerializer

    @extend_schema(summary="Şirket Detayı · SUW", tags=["Brands"])
    def get(self, request):
        return super().get(request)


class CompanyDetailPageView(APIView):
    """
    Dinamik şirket detay sayfası. GroupCompany.slug ile erişilir.
    is_active=False olan sayfalar 404 döndürür.
    """

    permission_classes = [AllowAny]
    serializer_class = CompanyDetailPageSerializer

    @extend_schema(summary="Dinamik Şirket Detay Sayfası", tags=["Companies"])
    def get(self, request, slug):
        try:
            company = GroupCompany.objects.get(slug=slug, is_active=True)
        except GroupCompany.DoesNotExist:
            raise NotFound("Şirket bulunamadı.")

        try:
            detail = company.detail_page
        except CompanyDetailPage.DoesNotExist:
            raise NotFound("Şirket detay sayfası bulunamadı.")

        if not detail.is_active:
            raise NotFound("Bu şirketin detay sayfası henüz aktif değil.")

        serializer = CompanyDetailPageSerializer(detail, context={"request": request})
        return Response(serializer.data)

