# Generated by Django 4.2.4 on 2023-10-27 16:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_rename_name_useraccount_first_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='is_staff',
            field=models.BooleanField(default=True),
        ),
    ]
