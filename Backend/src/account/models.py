import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from .manager import UserManager
from biodata.models import Biodata

class User(AbstractBaseUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nomerinduk = models.CharField(verbose_name='nomerinduk', max_length=50, unique=True)
    active = models.BooleanField(default=True)
    siswa = models.BooleanField(default=False)
    staff = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
    supervisor = models.BooleanField(default=False)
    superuser = models.BooleanField(default=False)
    profile = models.OneToOneField(Biodata, on_delete=models.CASCADE)

    USERNAME_FIELD = 'nomerinduk'
    REQUIRED_FIELDS = [] # Email & Password are required by default.
    objects = UserManager()

    def __str__(self):              # __unicode__ on Python 2
        return self.nomerinduk

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_siswa(self):
        "Is the user a siswa?"
        return self.siswa

    @property
    def is_staff(self):
        "Is the user a staff?"
        return self.staff

    @property
    def is_admin(self):
        "Is the user a admin?"
        return self.admin

    @property
    def is_supervisor(self):
        "Is the user a supervisor?"
        return self.supervisor

    @property
    def is_supervisor(self):
        "Is the user a superuser?"
        return self.superuser

    @property
    def is_active(self):
        "Is the user active?"
        return self.active