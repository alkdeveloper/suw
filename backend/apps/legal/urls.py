from django.urls import path
from .views import LegalPageDetailView

urlpatterns = [
    path("<slug:slug>/", LegalPageDetailView.as_view(), name="legal-detail"),
]
