from django.db import models
from biodata.models import Biodata
from django.contrib.auth.models import BaseUserManager
from datetime import datetime


class UserManager(BaseUserManager):
    def create_biodata(self, NomerInduk, Nama, TempatLahir, TanggalLahir):
        if not NomerInduk:
            raise ValueError('Users must have a nomerinduk ')
        biodata = Biodata(
            NomerInduk=NomerInduk,
            Nama=Nama if Nama else NomerInduk,
            TempatLahir=TempatLahir if TempatLahir else 'earth',
            TanggalLahir=TanggalLahir if TanggalLahir else datetime.today(),
        )

        biodata.save(using=self._db)
        return biodata

    def create_user(self, nomerinduk, password=None):
        """
        Creates and saves a User with the given email and password.
        """
        if not nomerinduk:
            raise ValueError('Users must have a nomerinduk ')
        datenow = datetime.today()
        biodata = self.create_biodata(
            NomerInduk=nomerinduk,
            Nama=nomerinduk,
            TempatLahir=None,
            TanggalLahir=datenow
        )
        user = self.model(
            nomerinduk=nomerinduk,
            profile=biodata
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, nomerinduk, password):
        """
        Creates and saves a superuser with the given email and password.
        """
        user = self.create_user(
            nomerinduk,
            password=password,
        )
        user.siswa = True
        user.staff = True
        user.admin = True
        user.supervisor = True
        user.superuser = True
        user.save(using=self._db)
        return user
