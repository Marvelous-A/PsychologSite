# Generated by Django 4.2.5 on 2023-10-09 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author_title', models.CharField(default='Фамилия имя', max_length=256)),
                ('discription', models.TextField(default='Описание', max_length=5000, null=True)),
                ('phone', models.CharField(default='799999999', max_length=20, null=True)),
                ('age', models.IntegerField(null=True)),
                ('profession', models.CharField(max_length=300, null=True)),
            ],
        ),
    ]
