from rest_framework import generics, permissions
from rest_framework.response import Response

from rest_framework.generics import RetrieveAPIView,ListAPIView

from ..models import Biodata
from .serializers import Biodataserializer, BiodataDetailserializer
import logging

class GetBiodataAPI(ListAPIView):
    permission_classes=[
        # permissions.IsAuthenticated
        permissions.AllowAny
    ]
    serializer_class = Biodataserializer
    queryset = Biodata.objects.all()

class GetBiodataDetailAPI(RetrieveAPIView):
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class = BiodataDetailserializer
    queryset = Biodata.objects.all()