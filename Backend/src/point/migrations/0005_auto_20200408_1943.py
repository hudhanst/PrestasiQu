# Generated by Django 3.0.4 on 2020-04-08 12:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('biodata', '0006_auto_20200322_1313'),
        ('point', '0004_auto_20200408_1600'),
    ]

    operations = [
        migrations.AlterField(
            model_name='point',
            name='NomerIndukPengaju',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='biodata.Biodata'),
        ),
    ]
