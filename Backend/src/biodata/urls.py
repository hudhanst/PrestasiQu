from django.urls import path, include
from .API.api import GetBiodataDetailAPI,GetBiodataAPI
# from knox import views as knox_views

urlpatterns=[
    # path('api/auth',include('knox.urls')),
    path('api/auth/biodata/<pk>',GetBiodataDetailAPI.as_view()),
    path('api/auth/biodata',GetBiodataAPI.as_view()),#only for debug
]