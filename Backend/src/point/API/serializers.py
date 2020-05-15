from rest_framework import serializers

from ..models import Point, Pelanggaran
from biodata.models import Biodata

import logging

# ##GET-PELANGGARAN


class Get_List_Pelanggaran_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Pelanggaran
        # fields = "__all__"
        fields = ['id','Nama_Pelanggaran','Jenis_Pelanggaran','Pelanggaran_Point']


class Get_Pelanggaran_Detail_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Pelanggaran
        fields = "__all__"
# ##GET-POINT


class Get_List_Point_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Point
        # fields = "__all__"
        fields = ['id','Nama_Pengaju','Nama_Dituju','Nama_Pelanggaran','Tanggal_Pengajuan']


class Get_Point_Detail_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Point
        fields = "__all__"
# ##REGISTER-PELANGGARAN


class Register_Pelanggaran_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Pelanggaran
        fields = "__all__"
# ##REGISTER-POINT


class Register_Point_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Point
        fields = "__all__"
        # fields = [
        #     'Nomer_Induk_Pengaju',
        #     'Nama_Pengaju',
        #     'Tanggal_Pengajuan',
        #     'Nomer_Induk_Dituju',
        #     'Nama_Dituju',
        #     'Point_Awal_Dituju',
        #     'Nama_Pelanggaran',
        #     'Jenis_Pelanggaran',
        #     'Point_Pengurang',
        #     'Lampiran',
        #     'Keterangan',
        #     'Status',
        #     'Nomer_Induk_Assessor',
        #     'Nama_Assessor',
        #     'Tanggal_Diterima',
        #     'Point_Akhir',
        #     ]
        read_only_fields = [
            'Nama_Pengaju',
            'Tanggal_Pengajuan',
            'Nama_Dituju',
            'Point_Awal_Dituju',
            'Jenis_Pelanggaran',
            'Point_Pengurang',
            'Status',
            'Nomer_Induk_Assessor',
            'Nama_Assessor',
            'Tanggal_Diterima',
            'Point_Akhir',
        ]
        # extra_kwargs = {
        #     'Nomer_Induk_Pengaju':{'initial':None},
        #     'Nomer_Induk_Dituju':{'initial':None},
        #     'Nama_Pelanggaran':{'initial':None},
        # }
# ##UPDATE-PELANGGARAN
class  Update_Pelanggaran_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Pelanggaran
        fields = "__all__"
        read_only_fields = ['id','Nama_Pelanggaran']
# ##UPDATE-POINT
# ##DELETE-PELANGGARAN
class Delete_Pelanggaran_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Pelanggaran
        # fields = "__all__"
# ##DELETE-POINT
