from rest_framework import serializers
from ..models import Point, Pelanggaran
from biodata.models import Biodata
import logging
class CreatePelanggaranSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pelanggaran
        fields = "__all__"
class DetailPelanggaranSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pelanggaran
        fields = "__all__"
class DetailPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Point
        fields = "__all__"
class PengajuanPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Point
        # fields = "__all__"
        fields = ['Nomer_Induk_Pengaju',
        'Nama_Pengaju',
        'Tanggal_Pengajuan',
        'Nomer_Induk_Dituju',
        'Nama_Dituju',
        'Point_Awal_Dituju',
        'Nama_Pelanggaran',
        'Jenis_Pelanggaran',
        'Point_Pengurang',
        'Lampiran',
        'Keterangan',
        'Status',
        'Nomer_Induk_Assessor',
        'Nama_Assessor',
        'Tanggal_Diterima',
        'Point_Akhir',
        ]
        read_only_fields = ['Nama_Pengaju','Tanggal_Pengajuan',
        'Nama_Dituju','Point_Awal_Dituju',
        'Jenis_Pelanggaran','Point_Pengurang','Status',
        'Nomer_Induk_Assessor','Nama_Assessor','Tanggal_Diterima','Point_Akhir']
        extra_kwargs = {
            'Nomer_Induk_Pengaju':{'initial':None},
            'Nomer_Induk_Dituju':{'initial':None},
            'Nama_Pelanggaran':{'initial':None},
        }