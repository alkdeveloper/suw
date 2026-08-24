from django.urls import path
from .views import CompaniesPageView, CompanyDetailPageView

urlpatterns = [
    path("", CompaniesPageView.as_view(), name="companies-page"),
    path("<slug:slug>/", CompanyDetailPageView.as_view(), name="company-detail-dynamic"),
]
