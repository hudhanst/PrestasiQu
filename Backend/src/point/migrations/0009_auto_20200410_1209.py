# Generated by Django 3.0.4 on 2020-04-10 05:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('biodata', '0006_auto_20200322_1313'),
        ('point', '0008_auto_20200410_0659'),
    ]

    operations = [
        migrations.AlterField(
            model_name='point',
            name='Nomer_Induk_Dituju',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='Dituju', to='biodata.Biodata'),
        ),
        migrations.AlterField(
            model_name='point',
            name='Nomer_Induk_Pengaju',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='Pengaju', to='biodata.Biodata'),
        ),
    ]
