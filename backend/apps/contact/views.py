import logging

from django.conf import settings
from django.core.mail import EmailMessage
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from drf_spectacular.utils import extend_schema

from .models import ContactPage, ContactMessage
from .serializers import ContactPageSerializer, ContactMessageSerializer

logger = logging.getLogger(__name__)


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
        self._send_notification(message)

    def _send_notification(self, message):
        recipient = settings.CONTACT_NOTIFICATION_EMAIL
        if not recipient:
            logger.warning(
                "CONTACT_NOTIFICATION_EMAIL tanımlı değil — bildirim atlandı (mesaj id=%s)",
                message.pk,
            )
            return
        body = (
            f"Ad Soyad : {message.first_name} {message.last_name}\n"
            f"E-posta  : {message.email}\n"
            f"Telefon  : {message.phone or '-'}\n"
            f"Konu     : {message.subject}\n"
            f"Tarih    : {message.created_at:%d.%m.%Y %H:%M}\n\n"
            f"Mesaj:\n{message.message}\n"
        )
        logger.warning(
            "SMTP bağlantı deneniyor — host=%s port=%s user=%s → alıcı=%s",
            settings.EMAIL_HOST,
            settings.EMAIL_PORT,
            settings.EMAIL_HOST_USER,
            recipient,
        )
        try:
            EmailMessage(
                subject=f"Yeni İletişim Mesajı: {message.subject}",
                body=body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[recipient],
                reply_to=[message.email],
            ).send(fail_silently=False)
            logger.warning(
                "SMTP OK — mail gönderildi → %s (mesaj id=%s)", recipient, message.pk
            )
        except Exception:
            logger.exception(
                "SMTP HATA — mail gönderilemedi host=%s port=%s (mesaj id=%s)",
                settings.EMAIL_HOST,
                settings.EMAIL_PORT,
                message.pk,
            )
