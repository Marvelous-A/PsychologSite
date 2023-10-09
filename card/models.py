from django.db import models
from django.conf import settings

# Create your models here.
class Author(models.Model):
    author_title = models.CharField(max_length=256, default='Фамилия имя')
    discription = models.TextField(max_length=5000, default='Описание', null=True)
    phone = models.CharField(max_length=20, default='799999999')
    validate_for_phonenumbers = models.BooleanField(default=False)
    age = models.IntegerField(null=True)
    profession = models.CharField(max_length=300, null=True)

    def validate_phonenumbers(self):
        import phonenumbers
        try:
            parsed_number= phonenumbers.parse(self.phone, None)
            if phonenumbers.is_valid_number(parsed_number):
                self.validate_for_phonenumber = True
            else: 
                self.validate_for_phonenumbers = False
        except phonenumbers.phonenumberutil.NumberParseException:
            self.validate_for_phonenumber = False

    def save(self, *args, **kwargs):
        self.validate_phonenumbers()
        super().save(*args, **kwargs)

    def __str__(self):
        return 'Данные на сайте'