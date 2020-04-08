from rest_framework.permissions import BasePermission
from ..models import User
# import logging

class IsSiswa(BasePermission):
    """
    CEK APAKAH SUPERVISOR APA BUKAN
    """
    message = 'anda bukan siswa'
    def has_permission(self, request, view):
        if request.user.siswa is True:
            return True
        return False

class IsStaff(BasePermission):
    """
    CEK APAKAH STAFF APA BUKAN
    """
    message = 'anda bukan staf yang berwenang'
    def has_permission(self, request, view):
        if request.user.staff is True:
            return True
        return False

class IsAdmin(BasePermission):
    """
    CEK APAKAH ADMIN APA BUKAN
    """
    message = 'anda bukan admin'
    def has_permission(self, request, view):
        if request.user.admin is True:
            return True
        return False

class IsSupervisor(BasePermission):
    """
    CEK APAKAH SUPERVISOR APA BUKAN
    """
    message = 'anda bukan supervisor'
    def has_permission(self, request, view):
        if request.user.supervisor is True:
            return True
        return False
class IsSuperUser(BasePermission):
    """
    CEK APAKAH SUPERUSER APA BUKAN
    """
    message = 'anda bukan superuser'
    def has_permission(self, request, view):
        if request.user.superuser is True:
            return True
        return False

class IsTrue(BasePermission):
    """
    debug always true
    """
    message = 'True'
    condition= True
    def has_permission(self, request, view):
        if self.condition is True:
            return True
        return False
class IsFalse(BasePermission):
    """
    debug always false
    """
    message = 'False'
    condition= False
    def has_permission(self, request, view):
        # logging.warning(f'{request.user}')
        if self.condition is True:
            return True
        return False