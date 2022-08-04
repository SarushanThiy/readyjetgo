from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Continent(models.Model):
    id = models.AutoField(primary_key=True)
    continent = models.CharField(max_length=100)

    def __str__(self):
        return self.continent

class Country(models.Model):
    id = models.AutoField(primary_key=True)
    continent = models.ForeignKey(Continent,on_delete=models.SET_NULL, null=True, max_length=100)
    country = models.CharField(max_length=100)

    def __str__(self):
        return self.country

class CityorBeach(models.Model):
    id = models.AutoField(primary_key=True)
    continent = models.ForeignKey(Continent,on_delete=models.SET_NULL, null=True, max_length=100)
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True, max_length=100)
    cityorbeach = models.CharField(max_length=100)

    def __str__(self):
        return self.cityorbeach


