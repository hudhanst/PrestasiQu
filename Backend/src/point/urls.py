from django.urls import path, include
from .API.api import CreatePelanggaranAPI, DetailPelanggaranAPI, PengajuanPointAPI, DetailPointAPI
# from knox import views as knox_views

urlpatterns=[
    # path('api/auth',include('knox.urls')),
    path('api/auth/point/create',PengajuanPointAPI.as_view()),
    path('api/auth/point/detail',DetailPointAPI.as_view()),
    path('api/auth/pelanggaran/create',CreatePelanggaranAPI.as_view()),
    path('api/auth/pelanggaran/detail',DetailPelanggaranAPI.as_view()),
    # path('api/auth/biodata/<pk>',GetBiodataDetailAPI.as_view()),
]