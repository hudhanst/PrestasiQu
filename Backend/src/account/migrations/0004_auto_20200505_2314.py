# Generated by Django 3.0.4 on 2020-05-05 16:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('biodata', '0006_auto_20200322_1313'),
        ('account', '0003_user_superuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='biodata.Biodata'),
        ),
    ]
