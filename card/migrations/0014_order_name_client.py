# Generated by Django 4.2.6 on 2023-10-16 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('card', '0013_order_date_order_view_lesson'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='name_client',
            field=models.CharField(max_length=90, null=True),
        ),
    ]
