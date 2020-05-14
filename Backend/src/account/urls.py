from django.urls import path, include

from knox import views as knox_views

from .API.api import (
    # ##LOGIN
    LoginAPI,
    UserAPI,
    # ##GET
    Get_Account_Detail_API,
    # ##REGISTER
    Registrasi_User_asSiswa_API,
    Registrasi_User_asStaff_API,
    Registrasi_User_asAdmin_API,
    # ##UPDATE
    Update_Account_Detail_API,
)

urlpatterns = [
    # ##KNOX
    path('api/auth', include('knox.urls')),
    # ##LOGIN
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),  # ???
    # ##GET
    path('api/auth/user/<profile>', Get_Account_Detail_API.as_view()),
    # ##REGISTER
    path('api/auth/register_user_siswa', Registrasi_User_asSiswa_API.as_view()),
    path('api/auth/register_user_staff', Registrasi_User_asStaff_API.as_view()),
    path('api/auth/register_user_admin', Registrasi_User_asAdmin_API.as_view()),
    # ##UPDATE
    path('api/auth/user/<profile>/update', Update_Account_Detail_API.as_view()),
    # ##LOGOUT
    path('api/auth/logout', knox_views.LogoutView.as_view(), name="knox_logout"),
]
