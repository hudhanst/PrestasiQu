from django.db import models

from biodata.models import Biodata


class Instansi(models.Model):
    Nama_Instansi = models.CharField(max_length=60, unique=True)
    Jenis_Instansi = models.CharField(max_length=30)
    Keterangan_Instansi = models.TextField(max_length=240, null=True, blank=True)

    def __str__(self):
        return self.Nama_Instansi


class Prestasi(models.Model):
    STATUS_CHOICES = [
        ('Menunggu', 'Menunggu'),
        ('Rejected', 'Rejected'),
        ('Accepted', 'Accepted'),
    ]
    TINGKATAN_CHOICES = [
        ('Remisi','Remisi'),
        ('RT/RW/Kelurahan','RT/RW/Kelurahan'),
        ('Sekolah','Sekolah'),
        ('Kota','Kota'),
        ('Provinsi','Provinsi'),
        ('Nasional','Nasional'),
        ('Internasional','Internasional'),
    ]
    # ## DATA-PENGAJU
    Nomer_Induk_Pengaju = models.ForeignKey(Biodata, to_field='NomerInduk', on_delete=models.DO_NOTHING, related_name='PrestasiPengaju', default=None)
    Nama_Pengaju = models.CharField(max_length=100, null=False, blank=False)
    Tanggal_Pengajuan = models.DateTimeField(auto_now_add=True)
    # ## DATA-DITUJU
    Nomer_Induk_Dituju = models.ForeignKey(Biodata, to_field='NomerInduk', on_delete=models.DO_NOTHING, related_name='PrestasiDituju', default=None)
    Nama_Dituju = models.CharField(max_length=100, null=False, blank=False)
    Point_Awal_Dituju = models.PositiveSmallIntegerField(null=False, blank=False)
    # ## DATA-PRESTASI
    Nama_Prestasi = models.CharField(max_length=240, null=False, blank=False)
    No_Sertifikat = models.CharField(max_length=100, null=True, blank=True)
    Katagori_Prestasi = models.CharField(max_length=11, choices=STATUS_CHOICES, null=True, blank=True, default=None)
    Tingkatan_Prestasi = models.CharField(max_length=20, choices=TINGKATAN_CHOICES)
    # ## DATA-INSTANSI
    Nama_Instansi = models.ForeignKey(Instansi, on_delete=models.DO_NOTHING, default=None)
    # ## DATA-PELENGKAP
    Lampiran = models.ImageField(upload_to="PrestasiLampiran", blank=True, null=True)
    Keterangan = models.TextField(max_length=240, null=True, blank=True, default=None)
    Status = models.CharField(max_length=11, choices=STATUS_CHOICES, default="Menunggu")
    # ## DATA-ASSESSOR
    Nomer_Induk_Assessor = models.ForeignKey(Biodata, to_field='NomerInduk', on_delete=models.DO_NOTHING, related_name='PrestasiAssessor', null=True, blank=True, default=None)
    Nama_Assessor = models.CharField(max_length=100, null=True, blank=True, default=None)
    Tanggal_Diterima = models.DateTimeField(null=True, blank=True, default=None)
    Point_Akhir = models.SmallIntegerField(null=True, blank=True, default=None)