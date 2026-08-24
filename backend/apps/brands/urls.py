from django.urls import path
from .views import (
    BrandsPageView,
    AkalPageView,
    AlkanPageView,
    AkalGmbhPageView,
    SuwPageView,
)

urlpatterns = [
    path("", BrandsPageView.as_view(), name="brands-page"),
    # Statik şirket detay endpointleri — dinamik slug YOK
    path("companies/akal/", AkalPageView.as_view(), name="company-detail-akal"),
    path("companies/alkan-promosyon/", AlkanPageView.as_view(), name="company-detail-alkan"),
    path("companies/akal-gmbh/", AkalGmbhPageView.as_view(), name="company-detail-akal-gmbh"),
    path("companies/suw/", SuwPageView.as_view(), name="company-detail-suw"),
]
