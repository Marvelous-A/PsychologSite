# Generated by Django 4.2.5 on 2023-10-09 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('card', '0002_alter_author_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='validate_for_phonenambers',
            field=models.BooleanField(default=False),
        ),
    ]
