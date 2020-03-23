from django.urls import path, include
from .API.api import LoginAPI,UserAPI, Registrasi_Staff_API
from knox import views as knox_views

urlpatterns=[
    path('api/auth',include('knox.urls')),
    path('api/auth/registrasistaff',Registrasi_Staff_API.as_view()),
    path('api/auth/login',LoginAPI.as_view()),
    # path('api/auth/user',UserAPI.as_view()),
    path('api/auth/logout',knox_views.LogoutView.as_view(), name="knox_logout"),
]