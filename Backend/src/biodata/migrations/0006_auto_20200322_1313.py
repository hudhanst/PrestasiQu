# Generated by Django 3.0.4 on 2020-03-22 06:13

from django.db import migrations
import prestasiqu.CustomModelSForms


class Migration(migrations.Migration):

    dependencies = [
        ('biodata', '0005_auto_20200322_1250'),
    ]

    operations = [
        migrations.AlterField(
            model_name='biodata',
            name='Email',
            field=prestasiqu.CustomModelSForms.EmailNullField(blank=True, default=None, max_length=100, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='biodata',
            name='NomerTLP',
            field=prestasiqu.CustomModelSForms.CharNullField(blank=True, default=None, max_length=15, null=True, unique=True),
        ),
    ]
