# Generated by Django 4.2.6 on 2023-10-19 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('card', '0015_alter_order_view_lesson'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='date',
            field=models.CharField(max_length=40, null=True),
        ),
    ]
