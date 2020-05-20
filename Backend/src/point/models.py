from django.db import models
from biodata.models import Biodata

class Pelanggaran(models.Model):
    JENISPELANGGARAN_CHOICES=[
        ('Ringan','Ringan'),
        ('Sedang','Sedang'),
        ('Berat','Berat'),
    ]
    Nama_Pelanggaran = models.CharField(max_length=60, unique=True)
    Jenis_Pelanggaran = models.CharField(max_length=10, choices=JENISPELANGGARAN_CHOICES)
    Keterangan_Pelanggaran = models.TextField(max_length=240, null=True, blank=True)
    Pelanggaran_Point = models.PositiveSmallIntegerField(null=False, blank=False)

    def __str__(self):
        return self.Nama_Pelanggaran
class Point(models.Model):
    STATUS_CHOICES=[
        ('Menunggu','Menunggu'),
        ('Rejected','Rejected'),
        ('Accepted','Accepted'),
    ]
    # ## DATA-PENGAJU
    Nomer_Induk_Pengaju = models.ForeignKey(Biodata, to_field='NomerInduk', on_delete=models.DO_NOTHING, related_name='PointPengaju', default=None)
    Nama_Pengaju = models.CharField(max_length=100, null=False, blank=False)
    Tanggal_Pengajuan = models.DateTimeField(auto_now_add=True)
    # ## DATA-DITUJU
    Nomer_Induk_Dituju = models.ForeignKey(Biodata, to_field='NomerInduk', on_delete=models.DO_NOTHING, related_name='PointDituju', default=None)
    Nama_Dituju = models.CharField(max_length=100, null=False, blank=False)
    Point_Awal_Dituju = models.PositiveSmallIntegerField(null=False, blank=False)
    # ## DATA-PELANGGARAN
    Nama_Pelanggaran = models.ForeignKey(Pelanggaran, to_field='Nama_Pelanggaran', on_delete=models.CASCADE, default=None)
    Jenis_Pelanggaran = models.CharField(max_length=15, null=False, blank=False)
    Point_Pengurang = models.PositiveSmallIntegerField(null=False, blank=False)
    # ## DATA-PELENGKAP
    Lampiran = models.ImageField(upload_to="PointLampiran", blank=True, null=True)
    Keterangan = models.TextField(max_length=240, null=True, blank=True, default=None)
    Status = models.CharField(max_length=11, choices=STATUS_CHOICES, default="Menunggu")
    # ## DATA-ASSESSOR
    Nomer_Induk_Assessor = models.ForeignKey(Biodata, to_field='NomerInduk', on_delete=models.DO_NOTHING, related_name='PointAssessor', null=True, blank=True, default=None)
    Nama_Assessor = models.CharField(max_length=100, null=True, blank=True, default=None)
    Tanggal_Diterima = models.DateTimeField(null=True, blank=True, default=None)
    Point_Akhir = models.SmallIntegerField(null=True, blank=True, default=None)
    # // TODO add image converter size