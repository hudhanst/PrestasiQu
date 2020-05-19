from rest_framework import serializers

from ..models import Biodata

# ##GET


class Get_List_All_Biodata_Serializer(serializers.ModelSerializer):
    """
    GET ALL BIODATA AVALIABLE
    """
    class Meta:
        model = Biodata
        fields = "__all__"


class Get_Biodata_Detail_Serializer(serializers.ModelSerializer):
    """
    GET SPESIFIC BIODATA
    """
    class Meta:
        model = Biodata
        fields = ('id', 'NomerInduk', 'Nama', 'Agama', 'TempatLahir', 'TanggalLahir', 'Alamat', 'NomerTLP',
                  'Email', 'PendidikanTerakhir', 'InstansiPendidikanTerakhir', 'Point', 'Status', 'Profilepicture')


class Get_Biodata_Point_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Biodata
        fields = ['Point', ]
        # read_only_fields = ['Point',]


class Get_Biodata_NomerInduk_Serializer (serializers.ModelSerializer):
    class Meta:
        model = Biodata
        fields = ['NomerInduk', ]
# ##GET-SISWA


class Get_List_Siswa_Biodata_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Biodata
        fields = ['id', 'NomerInduk', 'Nama']


class Get_List_Staff_Biodata_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Biodata
        fields = ['id', 'NomerInduk', 'Nama']


class Get_List_Admin_Biodata_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Biodata
        fields = ['id', 'NomerInduk', 'Nama']


class Get_List_All_Biodata_Serializer (serializers.ModelSerializer):
    class Meta:
        model = Biodata
        fields = ['id', 'NomerInduk', 'Nama', 'Status']
# ##REGISTER


class Register_Biodata_asSiswa_Serializer(serializers.ModelSerializer):
    """
    CREATE SISWA BIODATA
    """
    class Meta:
        model = Biodata
        fields = "__all__"
        read_only_fields = ['id', 'PendidikanTerakhir', 'Point', 'Status']


class Register_Biodata_asStaff_Serializer(serializers.ModelSerializer):
    """
    CREATE STAFF BIODATA
    """
    class Meta:
        model = Biodata
        # fields = ['id', 'NomerInduk', 'Nama', 'Agama', 'TempatLahir', 'TanggalLahir', 'Alamat', 'NomerTLP',
        #           'Email', 'PendidikanTerakhir', 'InstansiPendidikanTerakhir', 'Status', 'Profilepicture']
        fields = "__all__"
        read_only_fields = ['id', 'Point', 'Status']


class Register_Biodata_asAdmin_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Biodata
        fields = "__all__"
        read_only_fields = ['id', 'Point', 'Status']
# ##UPDATE


class Update_Biodata_Full_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Biodata
        fields = "__all__"
        read_only_fields = ['NomerInduk', 'Point']


class Update_Biodata_Staff_Serializer(serializers.ModelSerializer):
    """
    UPDATE STAFF BIODATA
    """
    class Meta:
        staff_choices = [
            ('Guru Aktif', 'Guru Aktif'),
            ('Staf Aktif', 'Staf Aktif')
        ]
        model = Biodata
        fields = ['id', 'NomerInduk', 'Nama', 'Agama', 'TempatLahir', 'TanggalLahir', 'Alamat', 'NomerTLP',
                  'Email', 'PendidikanTerakhir', 'InstansiPendidikanTerakhir', 'Status', 'Profilepicture']
        extra_kwargs = {
            'Status': {'choices': staff_choices, 'required': True},
            'NomerInduk': {'read_only': True},
        }
        # fields = "__all__"


class Update_Biodata_Point_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Biodata
        fields = ['id', 'NomerInduk', 'Point']
        read_only_fields = ['id', 'NomerInduk']
# ##DELETE


class Delete_Biodata_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Biodata
        # fields = "__all__"
