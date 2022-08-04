from unicodedata import name
from django.db import models
from django.contrib.auth.models import User
from django.core import serializers

# Create your models here.
class Travel(models.Model):
    id = models.AutoField(primary_key=True)
    cityBeach = models.CharField(null=True,max_length=10)
    name = models.CharField(null=True,max_length=100)
    country = models.CharField(max_length=100)
    continent = models.CharField(max_length=100)
    destination_image = models.CharField(null=True, max_length=2500)

    def __str__(self):
        return self.name

class VisitedLocation(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    location_name = models.ForeignKey(Travel, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.location_name
