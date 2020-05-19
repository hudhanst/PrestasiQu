import datetime

from rest_framework import generics, permissions
from rest_framework.response import Response

from ..models import Point, Pelanggaran
from biodata.models import Biodata

from .serializers import (
    # ##GET-PELANGGARAN
    Get_List_Pelanggaran_Serializer,
    Get_Pelanggaran_Detail_Serializer,
    # ##GET-POINT
    Get_Unconfirm_List_Point_Serializer,
    Get_Confirm_List_Point_Serializer,
    Get_List_Point_Serializer,
    Get_Point_Detail_Serializer,
    Get_Point_List_byUser_Serializer,
    # ##REGISTER-PELANGGARAN
    Register_Pelanggaran_Serializer,
    # ##REGISTER-POINT
    Register_Point_Serializer,
    # ##UPDATE-PELANGGARAN
    Update_Pelanggaran_Serializer,
    # ##UPDATE-POINT
    Update_Point_PointAcception_Accepted_Serializer,
    Update_Point_PointAcception_Rejected_Serializer,
    # ##DELETE-PELANGGARAN
    Delete_Pelanggaran_Serializer,
    # ##DELETE-POINT
)

import logging

# ##GET-PELANGGARAN


class Get_List_Pelanggaran_API(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_List_Pelanggaran_Serializer
    queryset = Pelanggaran.objects.all()


class Get_Pelanggaran_Detail_API(generics.RetrieveAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_Pelanggaran_Detail_Serializer
    queryset = Pelanggaran.objects.all()
# ##GET-POINT


class Get_Unconfirm_List_Point_API (generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_Unconfirm_List_Point_Serializer
    queryset = Point.objects.filter(Status='Menunggu')


class Get_Confirm_List_Point_API(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_Confirm_List_Point_Serializer
    queryset = Point.objects.exclude(Status='Menunggu')


class Get_List_Point_API(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_List_Point_Serializer
    queryset = Point.objects.all()


class Get_Point_Detail_API(generics.RetrieveAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_Point_Detail_Serializer
    queryset = Point.objects.all()


class Get_Point_List_byUser_API(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_Point_List_byUser_Serializer

    def get_queryset(self):
        return Point.objects.filter(Nomer_Induk_Dituju=self.kwargs['qs'])
# ##REGISTER-PELANGGARAN


class Register_Pelanggaran_API(generics.CreateAPIView):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = Register_Pelanggaran_Serializer
# ##REGISTER-POINT


class Register_Point_API(generics.CreateAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Register_Point_Serializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['Nama_Pengaju'] = Biodata.objects.get(
                NomerInduk=serializer.validated_data['Nomer_Induk_Pengaju']).Nama

            serializer.validated_data['Nama_Dituju'] = Biodata.objects.get(
                NomerInduk=serializer.validated_data['Nomer_Induk_Dituju']).Nama
            serializer.validated_data['Point_Awal_Dituju'] = Biodata.objects.get(
                NomerInduk=serializer.validated_data['Nomer_Induk_Dituju']).Point

            serializer.validated_data['Jenis_Pelanggaran'] = Pelanggaran.objects.get(
                Nama_Pelanggaran=serializer.validated_data['Nama_Pelanggaran']).Jenis_Pelanggaran
            serializer.validated_data['Point_Pengurang'] = Pelanggaran.objects.get(
                Nama_Pelanggaran=serializer.validated_data['Nama_Pelanggaran']).Pelanggaran_Point
            serializer.validated_data['Status'] = 'Menunggu'

            serializer.validated_data['Point_Akhir'] = (
                serializer.validated_data['Point_Awal_Dituju']-serializer.validated_data['Point_Pengurang'])

            serializer.save()
            point = serializer.validated_data
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
# ##UPDATE-PELANGGARAN


class Update_Pelanggaran_API(generics.RetrieveUpdateAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Update_Pelanggaran_Serializer
    queryset = Pelanggaran.objects.all()
# ##UPDATE-POINT


class Update_Point_PointAcception_Accepted_API(generics.RetrieveUpdateAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Update_Point_PointAcception_Accepted_Serializer
    # queryset =  Point.objects.all()

    def get_object(self, pk):
        return Point.objects.get(pk=pk)

    def patch(self, request, pk, *args, **kwargs):
        logging.warning(pk)

        originalmodel_object = self.get_object(pk=pk)
        serializer = self.get_serializer(
            originalmodel_object, data=request.data, partial=True)
        if serializer.is_valid():
            logging.warning('terpanggil')

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


class Update_Point_PointAcception_Rejected_API(generics.RetrieveUpdateAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Update_Point_PointAcception_Rejected_Serializer
    # queryset =  Point.objects.all()

    def get_object(self, pk):
        return Point.objects.get(pk=pk)

    def patch(self, request, pk, *args, **kwargs):
        logging.warning(pk)

        originalmodel_object = self.get_object(pk=pk)
        serializer = self.get_serializer(
            originalmodel_object, data=request.data, partial=True)
        if serializer.is_valid():
            logging.warning('terpanggil')

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

# ##DELETE-PELANGGARAN


class Delete_Pelanggaran_API(generics.DestroyAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Delete_Pelanggaran_Serializer
    queryset = Pelanggaran.objects.all()
# ##DELETE-POINT
