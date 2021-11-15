from django.contrib import admin
from django.urls import include, path

from rest_framework import routers

from .views import UserViewSet

routers = routers.DefaultRouter()
routers.register('', UserViewSet)

urlpatterns = routers.urls

urlpatterns += [
    path('auth/', include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls'))
]
