from django.contrib.auth.hashers import make_password

from rest_framework import generics, permissions
from rest_framework.response import Response

from knox.models import AuthToken

from ..models import User

import logging

from .serializers import (
    # ##LOGIN
    LoginSerializer,
    UserSerializer,
    # ##GET
    Get_Full_Account_Detail_Serializer,
    Get_Partial_Account_Detail_Serializer,
    # ##REGISTER
    Create_Account_asSiswa_Serializer,
    Create_Account_asStaff_Serializer,
    Create_Account_asAdmin_Serializer,
    # ##UPDATE
    Update_Account_Detail_Serializer,
    Update_Account_Password_Serializer,
)

import logging
# ##LOGIN


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            # u need to add [1] because The Token.objects.create returns a tuple (instance, token). So in order to get token use the index 1
            "token": AuthToken.objects.create(user)[1]
        })


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.AllowAny,
        # permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
# ##GET


class Get_Account_Detail_API(generics.RetrieveAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]

    def get_serializer_class(self):
        self.request.user.admin = True
        self.request.user.superuser = True
        if self.request.user.admin:
            return Get_Full_Account_Detail_Serializer
            # return Get_Partial_Account_Detail_Serializer
        return Get_Partial_Account_Detail_Serializer
        # return Get_Full_Account_Detail_Serializer

    queryset = User.objects.all()
    lookup_field = 'profile'
# ##REGISTER


class Registrasi_User_asSiswa_API(generics.CreateAPIView):
    permission_classes = [
        permissions.AllowAny,
        # permissions.IsAdminUser
    ]
    serializer_class = Create_Account_asSiswa_Serializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['password'] = make_password(
                serializer.validated_data['password'])
            serializer.validated_data['siswa'] = True
            serializer.save()
            user = serializer.validated_data
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class Registrasi_User_asStaff_API(generics.CreateAPIView):
    permission_classes = [
        permissions.AllowAny,
        # permissions.IsAdminUser
    ]
    serializer_class = Create_Account_asStaff_Serializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['password'] = make_password(
                serializer.validated_data['password'])
            serializer.validated_data['staff'] = True
            serializer.save()
            user = serializer.validated_data
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class Registrasi_User_asAdmin_API(generics.CreateAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Create_Account_asAdmin_Serializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['password'] = make_password(
                serializer.validated_data['password'])
            serializer.validated_data['staff'] = True
            serializer.validated_data['admin'] = True
            serializer.save()
            user = serializer.validated_data
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
# ##UPDATE


class Update_Account_Detail_API(generics.RetrieveUpdateAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Update_Account_Detail_Serializer

    # def get_serializer_class(self):
    # self.request.user.admin = False
    # self.request.user.superuser = True
    # if self.request.user.admin or self.request.user.superuser:
    # return Update_Account_Detail_Serializer
    # return Update_Account_Password_Serializer

    queryset = User.objects.all()
    lookup_field = 'profile'

    # def get_object(self, profile):
    #     return User.objects.get(profile=profile)

    def patch(self, request, *args, **kwargs):
        # logging.warning('profile',profile)
        pk = self.kwargs.get('profile')
        # logging.warning('profile', pk)

        originalmodel_object = User.objects.get(profile=pk)
        # logging.warning('originalmodel_object', originalmodel_object)
        serializer = self.get_serializer(
            originalmodel_object, data=request.data, partial=True)
        dataaa = request.data
        # logging.warning(dataaa,'dataaa')
        if serializer.is_valid():
            # if serializer.validated_data['password'] != None:
            logging.warning(len(serializer.validated_data))
            if len(serializer.validated_data) > 7:
                serializer.validated_data['password'] = make_password(
                    serializer.validated_data['password'])

            serializer.save()
            user = serializer.validated_data
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
