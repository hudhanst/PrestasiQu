from rest_framework import serializers
from ..models import Biodata

#GET BIODATA DATA
class Biodataserializer(serializers.ModelSerializer):
    class Meta:
        model = Biodata
        fields = "__all__"

class BiodataDetailserializer(serializers.ModelSerializer):
    class Meta:
        model = Biodata
        fields = ('NomerInduk','Nama','Agama','TempatLahir','TanggalLahir','Alamat','NomerTLP','Email','PendidikanTerakhir','InstansiPendidikanTerakhir','Point','Status','Profilepicture')