from django.urls import path
from .views import CorporatePageView

urlpatterns = [
    path("", CorporatePageView.as_view(), name="corporate-page"),
]

