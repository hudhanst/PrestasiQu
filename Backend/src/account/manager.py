from django.db import models
from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, nomerinduk, password=None):
        """
        Creates and saves a User with the given email and password.
        """
        if not nomerinduk:
            raise ValueError('Users must have a nomerinduk ')

        user = self.model(
            nomerinduk=nomerinduk,
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