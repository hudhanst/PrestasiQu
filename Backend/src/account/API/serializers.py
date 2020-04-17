from rest_framework import serializers
# from django.contrib.auth.models import User
from ..models import User
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        # fields=('id','nomerinduk','siswa','staff','admin','supervisor','profile')
        fields = '__all__'
# login serializer
class LoginSerializer(serializers.Serializer):
    nomerinduk = serializers.CharField()
    password = serializers.CharField()

    def validate(self,data):
        user=authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("incorect cardinal")

class Create_Account_AS_STAFF_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        read_only_fields = ['id','last_login','active','siswa','staff','admin','supervisor','superuser']

class Get_Full_Account_Detail_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
class Get_Partial_Account_Detail_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['nomerinduk','password']