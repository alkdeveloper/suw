from django.urls import path
from .views import ContactPageView, ContactMessageCreateView

urlpatterns = [
    path("", ContactPageView.as_view(), name="contact-page"),
    path("message/", ContactMessageCreateView.as_view(), name="contact-message"),
]

