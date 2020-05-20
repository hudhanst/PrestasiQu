from django.urls import path, include

from .API.api import (
    # ##GET
    # ##GET-INSTANSI
    Get_List_Instansi_API,
    Get_Instansi_Detail_API,
    # ##GET-PRESTASI
    Get_Prestasi_Detail_API,
    Get_Unconfirm_List_Prestasi_API,
    Get_Confirm_List_Prestasi_API,
    Get_Prestasi_List_byUser_API,
    # ##REGISTER
    # ##REGISTER-INSTANSI
    Register_Instansi_API,
    # ##REGISTER-PRESTASI
    Register_Prestasi_API,
    # ##UPDATE
    # ##UPDATE-INSTANSI
    Update_Instansi_API,
    # ##UPDATE-PRESTASI
    Update_Prestasi_PrestasiAcception_Accepted_API,
    Update_Prestasi_PrestasiAcception_Rejected_API,
    # ##DELETE-INSTANSI
    Delete_Instansi_API,
)
# from knox import views as knox_views

urlpatterns = [
    # ##KNOX
    # path('api/auth',include('knox.urls')),
    # ##GET
    # ##GET-INSTANSI
    path('api/instansi/list', Get_List_Instansi_API.as_view()),
    path('api/instansi/detail/<pk>', Get_Instansi_Detail_API.as_view()),
    # ##GET-PRESTASI
    path('api/prestasi/detail/<pk>', Get_Prestasi_Detail_API.as_view()),
    path('api/prestasi/unconfirm-list', Get_Unconfirm_List_Prestasi_API.as_view()),
    path('api/prestasi/confirm-list', Get_Confirm_List_Prestasi_API.as_view()),
    path('api/prestasi/prestasi-list-byuser/<qs>', Get_Prestasi_List_byUser_API.as_view()),
    # ##REGISTER
    # ##REGISTER-INSTANSI
    path('api/instansi/create', Register_Instansi_API.as_view()),
    # ##REGISTER-PRESTASI
    path('api/prestasi/create', Register_Prestasi_API.as_view()),
    # ##UPDATE
    # ##UPDATE-INSTANSI
    path('api/instansi/detail/<pk>/update', Update_Instansi_API.as_view()),
    # ##UPDATE-PRESTASI
    path('api/prestasi/prestasi-acception-accepted/<pk>',Update_Prestasi_PrestasiAcception_Accepted_API.as_view()),
    path('api/prestasi/prestasi-acception-rejected/<pk>',Update_Prestasi_PrestasiAcception_Rejected_API.as_view()),
    # ##DELETE-INSTANSI
    path('api/instansi/detail/<pk>/delete', Delete_Instansi_API.as_view()),

]
