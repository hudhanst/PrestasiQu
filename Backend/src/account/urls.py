from django.urls import path, include

from knox import views as knox_views

from .API.api import (
    LoginAPI,
    UserAPI,
    Registrasi_Staff_API,
    Get_Account_Detail_API
    )

urlpatterns=[
    path('api/auth',include('knox.urls')),
    path('api/auth/user/create-staff',Registrasi_Staff_API.as_view()),
    path('api/auth/user/<pk>',Get_Account_Detail_API.as_view()),
    # path('api/auth/user/<pk>/update',Registrasi_Staff_API.as_view()),
    path('api/auth/login',LoginAPI.as_view()),
    path('api/auth/user',UserAPI.as_view()),
    path('api/auth/logout',knox_views.LogoutView.as_view(), name="knox_logout"),
]