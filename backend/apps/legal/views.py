from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import AllowAny
from drf_spectacular.utils import extend_schema
from .models import LegalPage
from .serializers import LegalPageSerializer


class LegalPageDetailView(RetrieveAPIView):
    """GET /api/legal/<slug>/ — Yasal sayfa detayı. Bilinmeyen slug için 404 döner."""

    permission_classes = [AllowAny]
    serializer_class = LegalPageSerializer
    lookup_field = "slug"

    @extend_schema(
        summary="Yasal Sayfa",
        description="Slug ile yasal sayfa içeriğini döner. Bilinmeyen slug için 404.",
        tags=["Legal"],
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def get_queryset(self):
        return LegalPage.objects.prefetch_related("sections").order_by("sections__order")
