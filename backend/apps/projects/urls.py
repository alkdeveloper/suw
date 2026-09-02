from django.urls import path

from .views import ProjectsPageView

urlpatterns = [path("", ProjectsPageView.as_view(), name="projects-page")]
