from django.urls import path
from .views import GalleryPageView, GalleryImageListView

urlpatterns = [
    path("", GalleryPageView.as_view(), name="gallery-page"),
    path("images/", GalleryImageListView.as_view(), name="gallery-images"),
]

