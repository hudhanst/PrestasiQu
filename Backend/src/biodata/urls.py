from django.urls import path, include
from .API.api import GetBiodataDetailAPI, GetBiodataAPI,CreateStaffBiodataAPI
# from knox import views as knox_views

urlpatterns=[
    # path('api/auth',include('knox.urls')),
    path('api/auth/biodata/<pk>',GetBiodataDetailAPI.as_view()),
    path('api/auth/biodata',GetBiodataAPI.as_view()),#only for debug
    # path('api/auth/buatsiswaid',.as_view()),
    path('api/auth/buatstaffid',CreateStaffBiodataAPI.as_view()),
]