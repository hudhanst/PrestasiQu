from django.urls import path, include

from knox import views as knox_views

from .API.api import (
    ### LOGIN
    LoginAPI,
    UserAPI,
    ### GET
    Get_Account_Detail_API,
    ### REGISTER
    Registrasi_Staff_API,
    ### UPDATE
    Update_Account_Detail_API,
    )

urlpatterns=[
    ### KNOX
    path('api/auth',include('knox.urls')),
    ### LOGIN
    path('api/auth/login',LoginAPI.as_view()),
    path('api/auth/user',UserAPI.as_view()),
    ### GET
    path('api/auth/user/<pk>',Get_Account_Detail_API.as_view()),
    ### REGISTER
    path('api/auth/user/create-staff',Registrasi_Staff_API.as_view()),
    ### UPDATE
    path('api/auth/user/<pk>/update',Update_Account_Detail_API.as_view()),
    ### LOGOUT
    path('api/auth/logout',knox_views.LogoutView.as_view(), name="knox_logout"),
    ]