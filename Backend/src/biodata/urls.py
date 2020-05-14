from django.urls import path, include

from .API.api import (
    # ##GET
    Get_List_All_Biodata_API,
    Get_Biodata_Detail_API,
    Get_List_Siswa_Biodata_API,
    Get_List_Staff_Biodata_API,
    Get_List_Admin_Biodata_API,
    # ##REGISTER
    Register_Biodata_asStaf_API,
    Register_Biodata_asSiswa_API,
    # ##UPDATE
    Update_Biodata_API,
    # ##DELETE
    Delete_Biodata_API,
)
# from knox import views as knox_views

urlpatterns = [
    # ##KNOX
    # path('api/auth',include('knox.urls')),
    # ##GET
    path('api/biodata', Get_List_All_Biodata_API.as_view()),  # only for debug
    path('api/biodata/user/<pk>', Get_Biodata_Detail_API.as_view()),
    # path('api/biodata/list_biodata_siswa',Get_List_Siswa_Biodata_API.as_view()),
    path('api/biodata/list_biodata_siswa',Get_List_Siswa_Biodata_API.as_view()),
    path('api/biodata/list_biodata_staff',Get_List_Staff_Biodata_API.as_view()),
    path('api/biodata/list_biodata_admin',Get_List_Admin_Biodata_API.as_view()),
    # ##REGISTER
    path('api/biodata/register_biodata_staff', Register_Biodata_asStaf_API.as_view()),
    path('api/biodata/register_biodata_siswa', Register_Biodata_asSiswa_API.as_view()),
    # ##UPDATE
    path('api/biodata/user/<pk>/update', Update_Biodata_API.as_view()),
    # ##DELETE
    path('api/biodata/user/<pk>/delete', Delete_Biodata_API.as_view()),
]

