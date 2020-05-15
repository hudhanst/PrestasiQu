from django.urls import path, include

from .API.api import (
    # ##GET-PELANGGARAN
    Get_List_Pelanggaran_API,
    Get_Pelanggaran_Detail_API,
    # ##GET-POINT
    Get_List_Point_API,
    Get_Point_Detail_API,
    # ##REGISTER-PELANGGARAN
    Register_Pelanggaran_API,
    # ##REGISTER-POINT
    Register_Point_API,
    # ##UPDATE-PELANGGARAN
    Update_Pelanggaran_API,
    # ##UPDATE-POINT
    # ##DELETE-PELANGGARAN
    Delete_Pelanggaran_API,
    # ##DELETE-POINT
)
# from knox import views as knox_views

urlpatterns = [
    # ##KNOX
    # path('api/auth',include('knox.urls')),
    # ##GET-PELANGGARAN
    path('api/pelanggaran/list', Get_List_Pelanggaran_API.as_view()),
    path('api/pelanggaran/detail/<pk>', Get_Pelanggaran_Detail_API.as_view()),
    # ##GET-POINT
    path('api/point/list', Get_List_Point_API.as_view()),
    path('api/point/detail/<pk>', Get_Point_Detail_API.as_view()),
    # ##REGISTER-PELANGGARAN
    path('api/pelanggaran/create', Register_Pelanggaran_API.as_view()),
    # ##REGISTER-POINT
    path('api/point/create', Register_Point_API.as_view()),
    # ##UPDATE-PELANGGARAN
    path('api/pelanggaran/detail/<pk>/update',Update_Pelanggaran_API.as_view()),
    # ##UPDATE-POINT
    # ##DELETE-PELANGGARAN
    path('api/pelanggaran/detail/<pk>/delete',Delete_Pelanggaran_API.as_view()),
    # ##DELETE-POINT
]
