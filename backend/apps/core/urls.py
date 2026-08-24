from django.urls import path
from .views import SiteSettingsView, MetadataView, LanguageListView, NewsletterSubscribeView

urlpatterns = [
    path("languages/", LanguageListView.as_view(), name="languages"),
    path("settings/", SiteSettingsView.as_view(), name="site-settings"),
    path("metadata/", MetadataView.as_view(), name="metadata"),
    path("metadata/<path:slug>/", MetadataView.as_view(), name="metadata-detail"),
    path("newsletter/", NewsletterSubscribeView.as_view(), name="newsletter-subscribe"),
]
