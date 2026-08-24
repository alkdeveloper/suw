from django.urls import path
from .views import (
    CareerPageView,
    JobPositionListView,
    JobPositionDetailView,
    JobApplicationCreateView,
)

urlpatterns = [
    path("", CareerPageView.as_view(), name="career-page"),
    path("positions/", JobPositionListView.as_view(), name="job-positions"),
    path("positions/<slug:slug>/", JobPositionDetailView.as_view(), name="job-position-detail"),
    path("apply/", JobApplicationCreateView.as_view(), name="job-apply"),
]

