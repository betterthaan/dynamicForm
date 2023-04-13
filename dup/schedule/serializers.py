from rest_framework import serializers
from .models import *


class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = [
            'id',
            'name_work',
            'release_dates',
            'due_dates'
        ]

