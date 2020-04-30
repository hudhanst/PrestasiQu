from django.urls import path, include

from .API.api import (
    GetBiodataDetailAPI,
    GetBiodataAPI,
    CreateStaffBiodataAPI,
    DeleteBiodataAPI,
    UpdateBiodataAPI,
    Get_Lists_Biodata_API,
    )
# from knox import views as knox_views

urlpatterns=[
    # path('api/auth',include('knox.urls')),
    path('api/auth/biodata',GetBiodataAPI.as_view()),#only for debug
    path('api/auth/list_biodata_siswa',Get_Lists_Biodata_API.as_view()),#only for debug
    path('api/auth/biodata/<pk>',GetBiodataDetailAPI.as_view()),
    path('api/auth/biodata/buatbiodatasatf',CreateStaffBiodataAPI.as_view()),
    path('api/auth/biodata/<pk>/delete',DeleteBiodataAPI.as_view()),
    path('api/auth/biodata/<pk>/update',UpdateBiodataAPI.as_view()),
    # path('api/auth/buatsiswaid',.as_view()),
]