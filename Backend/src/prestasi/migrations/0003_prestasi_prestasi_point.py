# Generated by Django 3.0.4 on 2020-05-20 07:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prestasi', '0002_prestasi'),
    ]

    operations = [
        migrations.AddField(
            model_name='prestasi',
            name='Prestasi_Point',
            field=models.PositiveSmallIntegerField(default='1'),
            preserve_default=False,
        ),
    ]
