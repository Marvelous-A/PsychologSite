# Generated by Django 4.2.6 on 2023-10-11 19:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('card', '0004_remove_author_validate_for_phonenambers_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='amount_reception',
            field=models.IntegerField(default=0, null=True),
        ),
    ]
