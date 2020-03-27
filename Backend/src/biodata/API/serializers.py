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
class UpdateStaffBiodataSerializer(serializers.ModelSerializer):
    """
    UPDATE STAFF BIODATA
    """
    class Meta:
        staff_choices=[
            ('Guru Aktif','Guru Aktif'),
            ('Staf Aktif','Staf Aktif')
            ]
        model = Biodata
        fields = ['id','NomerInduk','Nama','Agama','TempatLahir','TanggalLahir','Alamat','NomerTLP','Email','PendidikanTerakhir','InstansiPendidikanTerakhir','Status','Profilepicture']
        extra_kwargs = {
            'Status' : {'choices':staff_choices, 'required':True},
            'NomerInduk' : {'read_only':True},
        }
        # fields = "__all__"
class Update_Biodata_Full_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Biodata
        fields = "__all__"
class CreateStaffBiodataSerializer(serializers.ModelSerializer):
    """
    CREATE STAFF BIODATA
    """
    # Status = serializers.ChoiceField(choices=staff_choices, required=True)
    class Meta:
        staff_choices=[
            ('Guru Aktif','Guru Aktif'),
            ('Staf Aktif','Staf Aktif')
            ]
        model = Biodata
        # fields = ['NomerInduk','Nama','TempatLahir','TanggalLahir','NomerTLP','Email']
        fields = ['id','NomerInduk','Nama','Agama','TempatLahir','TanggalLahir','Alamat','NomerTLP','Email','PendidikanTerakhir','InstansiPendidikanTerakhir','Status','Profilepicture']
        # fields = "__all__"
        extra_kwargs = {
            'Status' : {'choices':staff_choices, 'required':True},
        }

# class CreateSiswaBiodataSerializer(serializers.ModelSerializer):
#     """
#     CREATE SISWA BIODATA
#     """