from rest_framework import serializers

from ..models import Instansi

import logging

# ##GET-INSTANSI


class Get_List_Instansi_Serializer (serializers.ModelSerializer):
    class Meta:
        model = Instansi
        fields = "__all__"


class Get_Instansi_Detail_Serializer (serializers.ModelSerializer):
    class Meta:
        model = Instansi
        fields = "__all__"
# ##REGISTER-INSTANSI


class Register_Instansi_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Instansi
        fields = "__all__"
# ##UPDATE-INSTANSI


class Update_Instansi_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Instansi
        fields = "__all__"
        read_only_fields = ['id', 'Nama_Instansi']
# ##DELETE-INSTANSI


class Delete_Instansi_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Instansi
        # fields = "__all__"
