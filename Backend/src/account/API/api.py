from django.contrib.auth.hashers import make_password

from rest_framework import generics,permissions
from rest_framework.response import Response

from knox.models import AuthToken

from ..models import User

from .serializers import (
    UserSerializer,
    LoginSerializer,
    Create_Account_AS_STAFF_Serializer,
    Get_Full_Account_Detail_Serializer,
    Get_Partial_Account_Detail_Serializer,
    )

import logging

class LoginAPI(generics.GenericAPIView):
    serializer_class=LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.validated_data
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            "token":AuthToken.objects.create(user)[1]#u need to add [1] because The Token.objects.create returns a tuple (instance, token). So in order to get token use the index 1
        })

class UserAPI(generics.RetrieveAPIView):
    permission_classes=[
        permissions.AllowAny,
        # permissions.IsAuthenticated,
    ]
    serializer_class=UserSerializer

    def get_object(self):
        return self.request.user

class Registrasi_Staff_API(generics.CreateAPIView):
    permission_classes=[
        permissions.AllowAny,
        # permissions.IsAdminUser
    ]
    serializer_class = Create_Account_AS_STAFF_Serializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['password'] = make_password(serializer.validated_data['password'])
            serializer.validated_data['staff'] = True
            serializer.save()
            user = serializer.validated_data
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
class Get_Account_Detail_API(generics.RetrieveAPIView):
    permission_classes=[
        permissions.AllowAny,
    ]
    # serializer_class = Get_Full_Account_Detail_Serializer
    def get_serializer_class(self):
        if self.request.user.admin:
            # return Get_Full_Account_Detail_Serializer
            return Get_Partial_Account_Detail_Serializer
        # return Get_Partial_Account_Detail_Serializer
        return Get_Full_Account_Detail_Serializer

    queryset = User.objects.all()
