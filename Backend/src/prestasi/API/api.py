import datetime

from rest_framework import generics, permissions
from rest_framework.response import Response

from ..models import Instansi, Prestasi
from biodata.models import Biodata

from .serializers import (
    # ##GET
    # ##GET-INSTANSI
    Get_List_Instansi_Serializer,
    Get_Instansi_Detail_Serializer,
    # ##GET-PRESTASI
    Get_Prestasi_Detail_Serializer,
    Get_Unconfirm_List_Prestasi_Serializer,
    Get_Confirm_List_Prestasi_Serializer,
    Get_Prestasi_List_byUser_Serializer,
    # ##REGISTER
    # ##REGISTER-INSTANSI
    Register_Instansi_Serializer,
    # ##REGISTER-PRESTASI
    Register_Prestasi_Serializer,
    # ##UPDATE
    # ##UPDATE-INSTANSI
    Update_Instansi_Serializer,
    # ##UPDATE-PRESTASI
    Update_Prestasi_PrestasiAcception_Accepted_Serializer,
    Update_Prestasi_PrestasiAcception_Rejected_Serializer,
    # ##DELETE-INSTANSI
    Delete_Instansi_Serializer,
)

import logging

# ##GET
# ##GET-INSTANSI


class Get_List_Instansi_API(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_List_Instansi_Serializer
    queryset = Instansi.objects.all()


class Get_Instansi_Detail_API(generics.RetrieveAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_Instansi_Detail_Serializer
    queryset = Instansi.objects.all()
# ##GET-PRESTASI


class Get_Prestasi_Detail_API(generics.RetrieveAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_Prestasi_Detail_Serializer
    queryset = Prestasi.objects.all()


class Get_Unconfirm_List_Prestasi_API(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_Unconfirm_List_Prestasi_Serializer
    queryset = Prestasi.objects.filter(Status='Menunggu')


class Get_Confirm_List_Prestasi_API(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_Confirm_List_Prestasi_Serializer
    # queryset = Prestasi.objects.all()
    queryset = Prestasi.objects.exclude(Status='Menunggu')


class Get_Prestasi_List_byUser_API(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_Prestasi_List_byUser_Serializer
    # queryset = Prestasi.objects.all()

    def get_queryset(self):
        return Prestasi.objects.filter(Nomer_Induk_Dituju=self.kwargs['qs'])
# ##REGISTER
# ##REGISTER-INSTANSI


class Register_Instansi_API(generics.CreateAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Register_Instansi_Serializer
# ##REGISTER-PRESTASI


class Register_Prestasi_API(generics.CreateAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Register_Prestasi_Serializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['Nama_Pengaju'] = Biodata.objects.get(
                NomerInduk=serializer.validated_data['Nomer_Induk_Pengaju']).Nama

            serializer.validated_data['Nama_Dituju'] = Biodata.objects.get(
                NomerInduk=serializer.validated_data['Nomer_Induk_Dituju']).Nama
            serializer.validated_data['Point_Awal_Dituju'] = Biodata.objects.get(
                NomerInduk=serializer.validated_data['Nomer_Induk_Dituju']).Point

            serializer.validated_data['Status'] = 'Menunggu'

            serializer.validated_data['Point_Akhir'] = (
                serializer.validated_data['Point_Awal_Dituju']+serializer.validated_data['Prestasi_Point'])

            serializer.save()
            prestasi = serializer.validated_data
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
# ##UPDATE
# ##UPDATE-INSTANSI


class Update_Instansi_API(generics.RetrieveUpdateAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Update_Instansi_Serializer
    queryset = Instansi.objects.all()
# ##UPDATE-PRESTASI


class Update_Prestasi_PrestasiAcception_Accepted_API(generics.RetrieveUpdateAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Update_Prestasi_PrestasiAcception_Accepted_Serializer
    # queryset = Prestasi.objects.all()

    def get_object(self, pk):
        return Prestasi.objects.get(pk=pk)

    def patch(self, request, pk, *args, **kwargs):

        originalmodel_object = self.get_object(pk=pk)
        serializer = self.get_serializer(
            originalmodel_object, data=request.data, partial=True)
        if serializer.is_valid():

            serializer.validated_data['Status'] = 'Accepted'
            serializer.validated_data['Nama_Assessor'] = Biodata.objects.get(
                NomerInduk=serializer.validated_data['Nomer_Induk_Assessor']).Nama
            serializer.validated_data['Tanggal_Diterima'] = datetime.datetime.now(
            )

            serializer.save()
            point = serializer.validated_data

            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class Update_Prestasi_PrestasiAcception_Rejected_API(generics.RetrieveUpdateAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Update_Prestasi_PrestasiAcception_Rejected_Serializer
    # queryset = Prestasi.objects.all()

    def get_object(self, pk):
        return Prestasi.objects.get(pk=pk)

    def patch(self, request, pk, *args, **kwargs):

        originalmodel_object = self.get_object(pk=pk)
        serializer = self.get_serializer(
            originalmodel_object, data=request.data, partial=True)
        if serializer.is_valid():

            serializer.validated_data['Status'] = 'Rejected'
            serializer.validated_data['Nama_Assessor'] = Biodata.objects.get(
                NomerInduk=serializer.validated_data['Nomer_Induk_Assessor']).Nama
            serializer.validated_data['Tanggal_Diterima'] = datetime.datetime.now(
            )

            serializer.save()
            point = serializer.validated_data

            return Response(serializer.data)
        else:
            return Response(serializer.errors)
# ##DELETE-INSTANSI


class Delete_Instansi_API(generics.DestroyAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Delete_Instansi_Serializer
    queryset = Instansi.objects.all()
