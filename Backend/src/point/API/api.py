from rest_framework import generics, permissions
from rest_framework.response import Response

from ..models import Point, Pelanggaran
from biodata.models import Biodata

from .serializers import (
    # ##GET-PELANGGARAN
    Get_List_Pelanggaran_Serializer,
    Get_Pelanggaran_Detail_Serializer,
    # ##GET-POINT
    Get_List_Point_Serializer,
    Get_Point_Detail_Serializer,
    # ##REGISTER-PELANGGARAN
    Register_Pelanggaran_Serializer,
    # ##REGISTER-POINT
    Register_Point_Serializer,
    # ##UPDATE-PELANGGARAN
    Update_Pelanggaran_Serializer,
    # ##UPDATE-POINT
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
# ##DELETE-PELANGGARAN


class Delete_Pelanggaran_API(generics.DestroyAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Delete_Pelanggaran_Serializer
    queryset = Pelanggaran.objects.all()
# ##DELETE-POINT
