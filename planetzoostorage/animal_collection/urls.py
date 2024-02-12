from django.contrib import admin
from rest_framework import routers
from django.urls import include, path

from . import views

router = routers.DefaultRouter()
router.register(r"animals", views.AnimalView, "animal")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
]
