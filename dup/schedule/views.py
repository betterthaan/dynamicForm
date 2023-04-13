from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from . models import *
from .serializers import *
from rest_framework.response import Response



class WorkView(viewsets.ModelViewSet):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer