# Generated by Django 4.2.6 on 2023-10-19 09:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('card', '0014_order_name_client'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='view_lesson',
            field=models.BooleanField(default=True),
        ),
    ]