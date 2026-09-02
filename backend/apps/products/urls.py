from django.urls import path

from .views import CategoryListView, GroupDetailView, GroupListView, ProductDetailView, ProductListView, ProductPageSettingsView

urlpatterns = [
    path("page/", ProductPageSettingsView.as_view(), name="product-page-settings"),
    path("groups/", GroupListView.as_view(), name="product-group-list"),
    path("groups/<slug:slug>/", GroupDetailView.as_view(), name="product-group-detail"),
    path("categories/", CategoryListView.as_view(), name="product-category-list"),
    path("products/", ProductListView.as_view(), name="product-list"),
    path("products/<slug:slug>/", ProductDetailView.as_view(), name="product-detail"),
]
