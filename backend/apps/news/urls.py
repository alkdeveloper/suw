from django.urls import path
from .views import NewsPageView, NewsListView, NewsDetailView

urlpatterns = [
    path("", NewsPageView.as_view(), name="news-page"),
    path("list/", NewsListView.as_view(), name="news-list"),
    path("<slug:slug>/", NewsDetailView.as_view(), name="news-detail"),
]

