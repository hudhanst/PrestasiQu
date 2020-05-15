from rest_framework import generics, permissions
from rest_framework.response import Response

from ..models import Instansi

from .serializers import (
    # ##GET-INSTANSI
    Get_List_Instansi_Serializer,
    Get_Instansi_Detail_Serializer,
    # ##REGISTER-INSTANSI
    Register_Instansi_Serializer,
    # ##UPDATE-INSTANSI
    Update_Instansi_Serializer,
    # ##DELETE-INSTANSI
    Delete_Instansi_Serializer,
)

import logging

# ##GET-INSTANSI


class Get_List_Instansi_API(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_List_Instansi_Serializer
    queryset = Instansi.objects.all()


class Get_Instansi_Detail_API(generics.RetrieveAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Get_Instansi_Detail_Serializer
    queryset = Instansi.objects.all()
# ##REGISTER-INSTANSI


class Register_Instansi_API(generics.CreateAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Register_Instansi_Serializer
# ##UPDATE-INSTANSI


class Update_Instansi_API(generics.RetrieveUpdateAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Update_Instansi_Serializer
    queryset = Instansi.objects.all()
# ##DELETE-INSTANSI


class Delete_Instansi_API(generics.DestroyAPIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = Delete_Instansi_Serializer
    queryset = Instansi.objects.all()
