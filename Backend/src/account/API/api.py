from rest_framework import generics,permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, LoginSerializer, CreateAccount_AS_STAFF_Serializer

# login API
class LoginAPI(generics.GenericAPIView):
    serializer_class=LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.validated_data
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            # "token":AuthToken.objects.create(user)
            "token":AuthToken.objects.create(user)[1]#u need to add [1] because The Token.objects.create returns a tuple (instance, token). So in order to get token use the index 1
        })

# get user API
class UserAPI(generics.RetrieveAPIView):
    permission_classes=[
        permissions.IsAuthenticated,
    ]
    serializer_class=UserSerializer

    def get_object(self):
        return self.request.user

class Registrasi_Staff_API(generics.CreateAPIView):
    permission_classes=[
        permissions.AllowAny
        # permissions.IsAdminUser
    ]
    serializer_class=CreateAccount_AS_STAFF_Serializer
    # def post(self, request, *args, **kwargs):
    #     serializer=self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     user=serializer.validated_data
    #     return Response({
    #         "user":UserSerializer(user,context=self.get_serializer_context()).data,
    #         # "token":AuthToken.objects.create(user)
    #         # "token":AuthToken.objects.create(user)[1]#u need to add [1] because The Token.objects.create returns a tuple (instance, token). So in order to get token use the index 1
    #     })
    # def post(self, request, *args, **kwargs):
    #     serializer=self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     user=serializer.save()
    #     return Response({
    #         "user":UserSerializer(user,context=self.get_serializer_context()).data,
    #         # "token":AuthToken.objects.create(user)
    #         "token":AuthToken.objects.create(user)[1]#u need to add [1] because The Token.objects.create returns a tuple (instance, token). So in order to get token use the index 1
    #     })