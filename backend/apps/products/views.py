from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from .models import Product, ProductCategory, ProductGroup, ProductPageSettings
from .serializers import ProductCategorySerializer, ProductGroupSerializer, ProductPageSettingsSerializer, ProductSerializer


def as_bool(value):
    return str(value).lower() in {"1", "true", "yes"}


class ProductPageSettingsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        settings = ProductPageSettings.get_solo()
        return Response(ProductPageSettingsSerializer(settings, context={"request": request}).data)


class GroupListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = ProductGroupSerializer

    def get_queryset(self):
        queryset = ProductGroup.objects.filter(is_active=True)
        if as_bool(self.request.query_params.get("home")):
            queryset = queryset.filter(show_on_home=True)
        return queryset


class GroupDetailView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = ProductGroupSerializer
    lookup_field = "slug"
    queryset = ProductGroup.objects.filter(is_active=True)


class CategoryListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = ProductCategorySerializer

    def get_queryset(self):
        queryset = ProductCategory.objects.filter(is_active=True).prefetch_related("groups")
        group = self.request.query_params.get("group")
        return queryset.filter(groups__slug=group).distinct() if group else queryset


class ProductListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.filter(is_active=True).select_related("category").prefetch_related("groups", "images", "category__groups")
        if group := self.request.query_params.get("group"):
            queryset = queryset.filter(groups__slug=group)
        if category := self.request.query_params.get("category"):
            queryset = queryset.filter(category__slug=category)
        if "featured" in self.request.query_params:
            queryset = queryset.filter(is_featured=as_bool(self.request.query_params["featured"]))
        return queryset.distinct()


class ProductDetailView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = ProductSerializer
    lookup_field = "slug"
    queryset = Product.objects.filter(is_active=True).select_related("category").prefetch_related("groups", "images", "category__groups")
