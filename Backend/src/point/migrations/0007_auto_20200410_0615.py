# Generated by Django 3.0.4 on 2020-04-09 23:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('point', '0006_auto_20200410_0602'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pelanggaran',
            old_name='JenisPelanggaran',
            new_name='Jenis_Pelanggaran',
        ),
        migrations.RenameField(
            model_name='pelanggaran',
            old_name='KeteranganPelanggaran',
            new_name='Keterangan_Pelanggaran',
        ),
        migrations.RenameField(
            model_name='pelanggaran',
            old_name='NamaPelanggaran',
            new_name='Nama_Pelanggaran',
        ),
        migrations.RenameField(
            model_name='pelanggaran',
            old_name='PelanggaranPoint',
            new_name='Pelanggaran_Point',
        ),
    ]
