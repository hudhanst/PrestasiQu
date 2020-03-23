from rest_framework import serializers
from ..models import Biodata

class BiodataSerializer(serializers.ModelSerializer):
    """
    GET ALL BIODATA AVALIABLE
    """
    class Meta:
        model = Biodata
        fields = "__all__"

class BiodataDetailSerializer(serializers.ModelSerializer):
    """
    GET SPESIFIC BIODATA
    """
    class Meta:
        model = Biodata
        fields = ('NomerInduk','Nama','Agama','TempatLahir','TanggalLahir','Alamat','NomerTLP','Email','PendidikanTerakhir','InstansiPendidikanTerakhir','Point','Status','Profilepicture')

class DeleteBiodataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Biodata
class CreateStaffBiodataSerializer(serializers.ModelSerializer):
    """
    CREATE STAFF BIODATA
    """
    staff_choices=[
        ('Guru Aktif','Guru Aktif'),
        ('Staf Aktif','Staf Aktif')
    ]
    class Meta:
        model = Biodata
        # fields = ['NomerInduk','Nama','TempatLahir','TanggalLahir','NomerTLP','Email']
        fields = ['NomerInduk','Nama','Agama','TempatLahir','TanggalLahir','Alamat','NomerTLP','Email','PendidikanTerakhir','InstansiPendidikanTerakhir','Status','Profilepicture']
        # fields = "__all__"
        # def create(self, validated_data):
        #     biodata = Biodata.objects.create_user(
        #         NomerInduk = validated_data['NomerInduk'],
        #         Nama = validated_data['Nama'],
        #         TempatLahir = validated_data['TempatLahir'],
        #         TanggalLahir = validated_data['TanggalLahir'],
        #         Alamatt = validated_data['Alamat'],
        #         NomerTLP = validated_data['NomerTLP'],
        #         Email = validated_data['Email'],
        #         Status = validated_data['Status'],
        #     )
            # biodata.save()
            # return biodata


# class CreateSiswaBiodataSerializer(serializers.ModelSerializer):
#     """
#     CREATE SISWA BIODATA
#     """