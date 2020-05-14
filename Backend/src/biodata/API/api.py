from rest_framework import generics, permissions
from rest_framework.response import Response

from django.db.models import Q
from ..models import Biodata
from account.models import User
from .serializers import (
    # ##GET
    Get_List_All_Biodata_Serializer,
    Get_Biodata_Detail_Serializer,
    Get_List_Siswa_Biodata_Serializer,
    Get_List_Staff_Biodata_Serializer,
    Get_List_Admin_Biodata_Serializer,
    # ##REGISTER
    Register_Biodata_asSiswa_Serializer,
    Register_Biodata_asStaff_Serializer,
    Register_Biodata_asAdmin_Serializer,
    # ##UPDATE
    Update_Biodata_Full_Serializer,
    Update_Biodata_Staff_Serializer,
    # ##DELETE
    Delete_Biodata_Serializer,
)

from account.API.permission import IsAdmin, IsSiswa, IsStaff

import logging

# ##GET


class Get_List_All_Biodata_API(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
        # permissions.IsAuthenticated,
        # IsAdmin,
    ]
    serializer_class = Get_List_All_Biodata_Serializer
    queryset = Biodata.objects.all()


class Get_Biodata_Detail_API(generics.RetrieveAPIView):
    permission_classes = [
        permissions.AllowAny,
        # permissions.IsAuthenticated,
    ]
    serializer_class = Get_Biodata_Detail_Serializer
    queryset = Biodata.objects.all()


class Get_List_Siswa_Biodata_API(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_List_Siswa_Biodata_Serializer

    # queryset = Biodata.objects.filter(Status='Siswa Aktif')
    def get_queryset(self):
        # Profileid = User.objects.filter(siswa=True, staff=False, admin=False, supervisor=False, superuser=False)
        Profileid = User.objects.filter(siswa=True, staff=False)
        queryset = Biodata.objects.filter(
            id__in=[prf.profile_id for prf in Profileid])
        return queryset


class Get_List_Staff_Biodata_API(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_List_Staff_Biodata_Serializer

    # queryset = Biodata.objects.filter(Status='Guru Aktif')
    def get_queryset(self):
        Profileid = User.objects.filter(
            siswa=False, staff=True, admin=False, superuser=False)
        queryset = Biodata.objects.filter(
            id__in=[prf.profile_id for prf in Profileid])
        return queryset


class Get_List_Admin_Biodata_API(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_List_Admin_Biodata_Serializer

    # queryset = Biodata.objects.filter(Status='Staf Aktif')
    def get_queryset(self):
        Profileid = User.objects.filter(Q(admin=True) or Q(superuser=True))
        queryset = Biodata.objects.filter(
            id__in=[prf.profile_id for prf in Profileid])
        return queryset
# ##REGISTER


class Register_Biodata_asSiswa_API(generics.CreateAPIView):
    permission_classes = [
        permissions.AllowAny,
        # permissions.IsAuthenticated,
        # IsAdmin
    ]
    serializer_class = Register_Biodata_asSiswa_Serializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            # serializer.validated_data['NomerInduk'] = serializer.validated_data['NomerInduk']
            # serializer.validated_data['Nama'] = serializer.validated_data['Nama']
            # serializer.validated_data['Agama'] = serializer.validated_data['Agama']
            # serializer.validated_data['TempatLahir'] = serializer.validated_data['TempatLahir']
            # serializer.validated_data['TanggalLahir'] = serializer.validated_data['TanggalLahir']
            # serializer.validated_data['Alamat'] = serializer.validated_data['Alamat']
            # serializer.validated_data['NomerTLP'] = serializer.validated_data['NomerTLP']
            # serializer.validated_data['Email'] = serializer.validated_data['Email']
            serializer.validated_data['PendidikanTerakhir'] = 'SMP'
            # serializer.validated_data['InstansiPendidikanTerakhir'] = serializer.validated_data['InstansiPendidikanTerakhir']
            serializer.validated_data['Point'] = 300
            serializer.validated_data['Status'] = 'Siswa Aktif'
            # serializer.validated_data['Profilepicture'] = serializer.validated_data['Profilepicture']
            serializer.save()
            user = serializer.validated_data
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class Register_Biodata_asStaf_API(generics.CreateAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Register_Biodata_asStaff_Serializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['Point'] = 300
            serializer.validated_data['Status'] = 'Guru Aktif'
            serializer.save()
            user = serializer.validated_data
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class Register_Biodata_asAdmin_API(generics.CreateAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Register_Biodata_asAdmin_Serializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['Point'] = 300
            serializer.validated_data['Status'] = 'Staf Aktif'
            serializer.save()
            user = serializer.validated_data
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
# ##UPDATE


class Update_Biodata_API(generics.RetrieveUpdateAPIView):
    permission_classes = [
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
    # serializer_class = Update_Biodata_Full_Serializer

    def get_serializer_class(self):
        if self.request.user.admin:
            return Update_Biodata_Full_Serializer
        return Update_Biodata_Staff_Serializer
    queryset = Biodata.objects.all()
# ##DELETE


class Delete_Biodata_API(generics.DestroyAPIView):
    # class Delete_Biodata_API(generics.RetrieveDestroyAPIView):
    permission_classes = [
        permissions.AllowAny,
        # permissions.IsAuthenticated,
        # IsAdmin
    ]
    serializer_class = Delete_Biodata_Serializer
    queryset = Biodata.objects.all()
