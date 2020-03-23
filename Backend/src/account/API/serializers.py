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

class CreateAccount_AS_STAFF_Serializer(serializers.ModelSerializer):
    # nomerinduk = serializers.CharField()
    # password = serializers.CharField()
    class Meta:
        # stafff = serializers.BooleanField(default=True, write_only=True)
        model = User
        fields = ('nomerinduk','password','profile')
        # fields = ['staff',]
        # extra_kwargs={'staff':{'write_only':True}}
        # extra_kwargs={'password':{'write_only':True}}
        # fields="__all__"
        # extra_kwargs={'password':{'write_only':True}}
        def create(self,validate_data):
            """
            this function for validate data we input is same as requirment on model
            exmp: email mast be unique so this function will ask the same
            """
            user = User.objects.create_user(nomerinduk='nomerinduk',password='password',staff=True, profile='profile')

