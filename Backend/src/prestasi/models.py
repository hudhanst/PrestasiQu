from django.db import models


class Instansi(models.Model):
    Nama_Instansi = models.CharField(max_length=60, unique=True)
    Jenis_Instansi = models.CharField(max_length=30)
    Keterangan_Instansi = models.TextField(max_length=240, null=True, blank=True)

    def __str__(self):
        return self.Nama_Instansi
