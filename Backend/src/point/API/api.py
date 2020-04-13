from rest_framework import generics, permissions
from rest_framework.response import Response

from ..models import Point, Pelanggaran
from .serializers import PengajuanPointSerializer, CreatePelanggaranSerializer, DetailPelanggaranSerializer, DetailPointSerializer

from biodata.models import Biodata
import logging
class CreatePelanggaranAPI(generics.CreateAPIView):
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class = CreatePelanggaranSerializer
class DetailPelanggaranAPI(generics.ListAPIView):
    permission_classes=[
        permissions.AllowAny,
    ]
    serializer_class = DetailPelanggaranSerializer
    queryset = Pelanggaran.objects.all()
class DetailPointAPI(generics.ListAPIView):
    permission_classes=[
        permissions.AllowAny,
    ]
    serializer_class = DetailPointSerializer
    queryset = Point.objects.all()
class PengajuanPointAPI(generics.CreateAPIView):
    permission_classes=[
        permissions.AllowAny,
    ]
    serializer_class = PengajuanPointSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['Nama_Pengaju']=Biodata.objects.get(NomerInduk=serializer.validated_data['Nomer_Induk_Pengaju']).Nama

            serializer.validated_data['Nama_Dituju']=Biodata.objects.get(NomerInduk=serializer.validated_data['Nomer_Induk_Dituju']).Nama
            serializer.validated_data['Point_Awal_Dituju']=Biodata.objects.get(NomerInduk=serializer.validated_data['Nomer_Induk_Dituju']).Point

            serializer.validated_data['Jenis_Pelanggaran']=Pelanggaran.objects.get(Nama_Pelanggaran=serializer.validated_data['Nama_Pelanggaran']).Jenis_Pelanggaran
            serializer.validated_data['Point_Pengurang']=Pelanggaran.objects.get(Nama_Pelanggaran=serializer.validated_data['Nama_Pelanggaran']).Pelanggaran_Point
            serializer.validated_data['Status']='Menunggu'
            
            serializer.validated_data['Point_Akhir']=(serializer.validated_data['Point_Awal_Dituju']-serializer.validated_data['Point_Pengurang'])

            serializer.save()
            point = serializer.validated_data
            return Response({
                'created':CreatePointSerializer(point, context=self.get_serializer_context()).data,
            })
        else:
            return Response('error')