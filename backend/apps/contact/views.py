from django.db import transaction
from rest_framework import generics
from rest_framework.permissions import AllowAny
from drf_spectacular.utils import extend_schema

from .models import ContactPage, ContactMessage
from .serializers import ContactPageSerializer, ContactMessageSerializer
from .services.microsoft_graph_mail import send_contact_notification

class ContactPageView(generics.RetrieveAPIView):

    permission_classes = [AllowAny]
    serializer_class = ContactPageSerializer

    def get_object(self):
        ContactPage.objects.get_or_create(pk=1)
        return (
            ContactPage.objects.prefetch_related("gallery_images")
            .first()
        )

    @extend_schema(
        summary="İletişim Sayfası",
        description="İletişim sayfası içerik ve ayarlarını döner.",
        tags=["Contact"],
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class ContactMessageCreateView(generics.CreateAPIView):

    permission_classes = [AllowAny]
    serializer_class = ContactMessageSerializer

    @extend_schema(
        summary="İletişim Formu Gönder",
        description="İletişim formu mesajı oluşturur.",
        tags=["Contact"],
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

    def perform_create(self, serializer):
        message = serializer.save()
        transaction.on_commit(lambda: send_contact_notification(message))
