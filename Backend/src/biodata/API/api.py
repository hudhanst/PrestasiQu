from rest_framework import generics, permissions
from rest_framework.response import Response

# from rest_framework.generics import RetrieveAPIView,ListAPIView

from ..models import Biodata
from .serializers import (BiodataSerializer, BiodataDetailSerializer, CreateStaffBiodataSerializer, 
DeleteBiodataSerializer, UpdateStaffBiodataSerializer, Update_Biodata_Full_Serializer)
from account.API.permission import IsAdmin, IsSiswa, IsStaff
# from account.API.permission import IsTrue, IsFalse
import logging

class GetBiodataAPI(generics.ListAPIView):
    permission_classes=[
        permissions.AllowAny,
        # permissions.IsAuthenticated, 
        # IsAdmin,
    ]
    serializer_class = BiodataSerializer
    queryset = Biodata.objects.all()

class GetBiodataDetailAPI(generics.RetrieveAPIView):
    permission_classes=[
        permissions.AllowAny,
        # permissions.IsAuthenticated,
    ]
    serializer_class = BiodataDetailSerializer
    queryset = Biodata.objects.all()

class DeleteBiodataAPI(generics.DestroyAPIView):
    permission_classes=[
        permissions.AllowAny,
        # permissions.IsAuthenticated,
        # IsAdmin
    ]
    serializer_class=DeleteBiodataSerializer
    queryset = Biodata.objects.all()

class UpdateBiodataAPI(generics.RetrieveUpdateAPIView):
    permission_classes=[
        permissions.AllowAny,
        # IsSiswa|IsAdmin|IsStaff|IsTrue
        # IsSiswa|IsAdmin|IsStaff|IsTrue,
        # permissions.IsAuthenticated,
        # IsAdmin|IsSiswa,
        # IsSiswa,
        # IsStaff
        # IsAdmin
        # WhoAccsesit
        # IsAdmin
    ]
    # accs = WhoAccsesit.WhoAccses_it('self')
    # logging.warning(f'--{permission_classes[1]}')
    # serializer_class=UpdateStaffBiodataSerializer
    def get_serializer_class(self):
        if self.request.user.admin:
            return Update_Biodata_Full_Serializer
        return UpdateStaffBiodataSerializer
    queryset = Biodata.objects.all()

# class CreateSiswaBiodataAPI():

# class CreateAdminBiodataAPI():
class CreateStaffBiodataAPI(generics.CreateAPIView):
    permission_classes=[
        permissions.AllowAny,
        # permissions.IsAuthenticated,
        # IsAdmin
    ]
    serializer_class = CreateStaffBiodataSerializer
    # def post(self, request, *args, **kwargs):
    #     serializer=self.get_serializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.validated_data['Status']='Guru Aktif'
    #         serializer.save()
    #         biodata = serializer.validated_data
    #     else:
    #         return Response("error")
    #     return Response({
    #         "user created":CreateStaffBiodataSerializer(biodata, context=self.get_serializer_context()).data,
    #     })