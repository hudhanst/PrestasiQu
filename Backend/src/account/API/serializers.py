from rest_framework import serializers
# from django.contrib.auth.models import User
from ..models import User
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('id','nomerinduk','siswa','staff','admin','supervisor','profile')
# login serializer
class LoginSerializer(serializers.Serializer):
    nomerinduk = serializers.CharField()
    password = serializers.CharField()

    def validate(self,data):
        user=authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("incorect cardinal")