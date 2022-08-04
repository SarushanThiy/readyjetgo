from unicodedata import name
from urllib import response
from django.test import Client, TestCase
from django.urls import reverse

from .models import Continent, Country, CityorBeach

class BaseTestCase(TestCase):
    @classmethod
    def setUpTestData(self):
        test_continent = Continent.objects.create(continent='Asia')
        test_country = Country.objects.create(country='India', continent=test_continent)
        CityorBeach.objects.create(continent=test_continent, country=test_country, cityorbeach='City')

    def test_continent(self):
        place = Continent.objects.get(continent="Asia")
        self.assertEqual(place.id, 1)
        
    def test_country(self):
        place = Country.objects.get(country="India")
        self.assertEqual(place.id, 1)

    def test_visited(self):
        place = CityorBeach.objects.get(cityorbeach="City")
        self.assertEqual(place.id, 1)
    
    

