# Generated by Django 4.2.5 on 2023-10-12 12:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('card', '0007_author_auditoria'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='reason_request',
            field=models.CharField(default='kfkgo', max_length=200),
        ),
    ]
