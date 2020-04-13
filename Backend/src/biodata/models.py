import uuid
from django.db import models
from prestasiqu.CustomModelSForms import CharNullField, EmailNullField

class Biodata(models.Model):
    AGAMA_CHOICES=[
        ('Buddha','Buddha'),
        ('Hindu','Hindu'),
        ('Islam','Islam'),
        ('Katolik','Katolik'),
        ('KongHuCu','KongHuCu'),
        ('Kristen','Kristen'),
        ('Lainnya','Lainnya'),
    ]
    JENJANG_PENDIDIKAN=[
        ('SD','SD'),
        ('SMP','SMP'),
        ('SMA','SMA'),
        ('S1','S1'),
        ('S2','S2'),
        ('S3','S3'),
    ]
    STATUS_COICE=[
        ('Staf',(
            ('Guru Aktif','Guru Aktif'),
            ('Guru Pensiun','Guru Pensiun'),
            ('Guru Diberhentikan','Guru Diberhentikan'),
            ('Staf Aktif','Staf Aktif'),
            ('Staf Pensiun','Staf Pensiun'),
            ('Staf Diberhentikan','Staf Diberhentikan'),
        )),
        ('Siswa',(
            ('Siswa Aktif','Siswa Aktif'),
            ('Siswa Lulus','Siswa Lulus'),
            ('Siswa Diberhentikan','Siswa Diberhentikan'),
        )),
    ]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    NomerInduk = models.CharField(max_length=50, unique=True)
    Nama = models.CharField(max_length=100)
    Agama = models.CharField(max_length=20, choices=AGAMA_CHOICES, blank=True)
    TempatLahir= models.CharField(max_length=50)
    TanggalLahir= models.DateField()
    Alamat= models.CharField(max_length=300, blank=True)
    # NomerTLP = models.CharField(max_length=15, unique=True, blank=True, null=True, default=None)
    NomerTLP = CharNullField(max_length=15, unique=True, blank=True, null=True, default=None)
    # Email = models.EmailField(max_length=100, unique=True, blank=True, null=True, default=None)
    Email = EmailNullField(max_length=100, unique=True, blank=True, null=True, default=None)
    PendidikanTerakhir = models.CharField(max_length=5, blank=True, choices=JENJANG_PENDIDIKAN)
    InstansiPendidikanTerakhir = models.CharField(max_length=200, blank=True)
    Point = models.SmallIntegerField(default=300)
    Status = models.CharField(max_length=30, blank=True, choices=STATUS_COICE)
    Profilepicture = models.ImageField(upload_to='profilepicture', blank=True, default='default.jpg')

    def __str__(self):
        return self.NomerInduk