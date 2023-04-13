from django.contrib import admin
from django.urls import path, include
from schedule import views
from schedule.views import *
from rest_framework import routers
# from django.conf import settings

routerWork = routers.DefaultRouter()

routerWork.register("", WorkView, basename="workview")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('work/', include((routerWork.urls, 'workview'))),
]
