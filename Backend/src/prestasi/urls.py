from django.urls import path, include

from .API.api import (
    # ##GET-INSTANSI
    Get_List_Instansi_API,
    Get_Instansi_Detail_API,
    # ##REGISTER-INSTANSI
    Register_Instansi_API,
    # ##UPDATE-INSTANSI
    Update_Instansi_API,
    # ##DELETE-INSTANSI
    Delete_Instansi_API,
)
# from knox import views as knox_views

urlpatterns = [
    # ##KNOX
    # path('api/auth',include('knox.urls')),
    # ##GET-INSTANSI
    path('api/instansi/list', Get_List_Instansi_API.as_view()),
    path('api/instansi/detail/<pk>', Get_Instansi_Detail_API.as_view()),
    # ##REGISTER-INSTANSI
    path('api/instansi/create', Register_Instansi_API.as_view()),
    # ##UPDATE-INSTANSI
    path('api/instansi/detail/<pk>/update', Update_Instansi_API.as_view()),
    # ##DELETE-INSTANSI
    path('api/instansi/detail/<pk>/delete', Delete_Instansi_API.as_view()),

]
