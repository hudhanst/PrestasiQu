from rest_framework import generics, permissions
from rest_framework.response import Response

# from rest_framework.generics import RetrieveAPIView,ListAPIView

from ..models import Biodata
from .serializers import BiodataSerializer, BiodataDetailSerializer, CreateStaffBiodataSerializer
from account.API.permission import IsAdmin
import logging


class GetBiodataAPI(generics.ListAPIView):
    permission_classes=[
        permissions.IsAuthenticated, 
        IsAdmin,
        # permissions.AllowAny
    ]
    serializer_class = BiodataSerializer
    queryset = Biodata.objects.all()

class GetBiodataDetailAPI(generics.RetrieveAPIView):
    permission_classes=[
        permissions.AllowAny,
    ]
    serializer_class = BiodataDetailSerializer
    queryset = Biodata.objects.all()

# class CreateSiswaBiodataAPI():

# class CreateAdminBiodataAPI():
class CreateStaffBiodataAPI(generics.CreateAPIView):
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class = CreateStaffBiodataSerializer

    # def post(self, request, *args, **kwargs):
    #     serializer=self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     biodata=serializer.validated_data
    #     return Response({
    #         "biodata":CreateStaffBiodataSerializer(biodata,context=self.get_serializer_context()).data,
    #     })