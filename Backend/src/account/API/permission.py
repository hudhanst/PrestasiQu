from rest_framework.permissions import BasePermission
from ..models import User
# import logging

class IsSiswa(BasePermission):
    """
    CEK APAKAH SUPERVISOR APA BUKAN
    """
    message = 'anda bukan siswa'
    def has_permission(self, request, view):
        # logging.warning(f'{request.user}')
        if request.user.siswa is True:
            return True
        return False

class IsStaff(BasePermission):
    """
    CEK APAKAH STAFF APA BUKAN
    """
    message = 'anda bukan staf yang berwenang'
    def has_permission(self, request, view):
        # logging.warning(f'{request.user}')
        if request.user.staff is True:
            return True
        return False

class IsAdmin(BasePermission):
    """
    CEK APAKAH ADMIN APA BUKAN
    """
    message = 'anda bukan admin'
    def has_permission(self, request, view):
        # logging.warning(f'{request.user}')
        if request.user.admin is True:
            return True
        return False

class IsSupervisor(BasePermission):
    """
    CEK APAKAH SUPERVISOR APA BUKAN
    """
    message = 'anda bukan supervisor'
    def has_permission(self, request, view):
        # logging.warning(f'{request.user}')
        if request.user.supervisor is True:
            return True
        return False
