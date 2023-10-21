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
    amount_reception = models.IntegerField(default=0, null=True)
    auditoria = models.CharField(max_length=20, default="kfkgo", null=False)
    reason_request = models.CharField(max_length=200, default='Через ";"')

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

class Order(models.Model):
    phone = models.CharField(max_length=20, default='79999999999', null=True)
    email = models.CharField(max_length=30, null=True)
    name_client = models.CharField(max_length=90, null=True)
    description = models.CharField(max_length=400,default='1', null=True)
    date = models.CharField(max_length=40,default='2', null=True)#DateField(null=True)
    view_lesson = models.BooleanField(default=True)

    def validate_phone_number(self):
        import phonenumbers
        try:
            parsed_number = phonenumbers.parse(self.phone, None)
            if phonenumbers.is_valid_number(parsed_number):
                self.validate_number = True
            else:
                self.validate_number = False
        except phonenumbers.phonenumberutil.NumberParseException:
            self.validate_number = False

    def email_validate(self): # Допишешь обработку формы
        pass

    def save(self, *args, **kwargs):
        #self.validate_phone_number()
        super().save(*args, **kwargs)

    def __str__(self):
        return f'Tel: {self.phone} | email: {self.email}'