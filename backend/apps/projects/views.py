from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import ProjectsPageSettings
from .serializers import ProjectsPageSerializer


class ProjectsPageView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        settings = ProjectsPageSettings.get_solo()
        return Response(ProjectsPageSerializer(settings, context={"request": request}).data)
