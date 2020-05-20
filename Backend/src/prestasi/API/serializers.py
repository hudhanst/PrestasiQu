from rest_framework import serializers

from ..models import Instansi, Prestasi

import logging

# ##GET
# ##GET-INSTANSI


class Get_List_Instansi_Serializer (serializers.ModelSerializer):
    class Meta:
        model = Instansi
        fields = "__all__"


class Get_Instansi_Detail_Serializer (serializers.ModelSerializer):
    class Meta:
        model = Instansi
        fields = "__all__"
# ##GET-PRESTASI


class Get_Prestasi_Detail_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Prestasi
        fields = "__all__"


class Get_Unconfirm_List_Prestasi_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Prestasi
        # fields = "__all__"
        fields = ['id', 'Nama_Pengaju', 'Nomer_Induk_Dituju', 'Nama_Dituju',
                  'Nama_Prestasi', 'Tingkatan_Prestasi', 'Tanggal_Pengajuan']


class Get_Confirm_List_Prestasi_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Prestasi
        # fields = "__all__"
        fields = ['id', 'Nama_Pengaju', 'Nomer_Induk_Dituju', 'Nama_Dituju',
                  'Nama_Prestasi', 'Tingkatan_Prestasi', 'Tanggal_Diterima', 'Status']


class Get_Prestasi_List_byUser_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Prestasi
        fields = "__all__"
# ##REGISTER
# ##REGISTER-INSTANSI


class Register_Instansi_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Instansi
        fields = "__all__"
# ##REGISTER-PRESTASI


class Register_Prestasi_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Prestasi
        fields = "__all__"
        read_only_fields = [
            'id',
            'Nama_Pengaju',
            'Tanggal_Pengajuan',
            'Nama_Dituju',
            'Point_Awal_Dituju',
            'Status',
            'Nomer_Induk_Assessor',
            'Nama_Assessor',
            'Tanggal_Diterima',
            'Point_Akhir',
        ]
# ##UPDATE
# ##UPDATE-INSTANSI


class Update_Instansi_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Instansi
        fields = "__all__"
        read_only_fields = ['id', 'Nama_Instansi']
# ##UPDATE-PRESTASI


class Update_Prestasi_PrestasiAcception_Accepted_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Prestasi
        fields = "__all__"


class Update_Prestasi_PrestasiAcception_Rejected_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Prestasi
        fields = "__all__"
# ##DELETE-INSTANSI


class Delete_Instansi_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Instansi
        # fields = "__all__"
