# Generated by Django 4.2.5 on 2023-10-12 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('card', '0006_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='auditoria',
            field=models.CharField(default='kfkgo', max_length=20),
        ),
    ]
