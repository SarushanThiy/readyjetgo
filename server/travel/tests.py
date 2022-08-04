from unicodedata import name
from urllib import response
from django.test import Client, TestCase
from django.urls import reverse

from .models import VisitedLocation, Travel

class BaseTestCase(TestCase):
    @classmethod
    def setUpTestData(self):
        test_travel = Travel.objects.create(name='Ahmedabad', cityBeach='City', continent='Asia', country='India', destination_image="https://www.tripsavvy.com/thmb/18jukZwmonkaOB7Gk2t_ua9GDYQ=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/sidi-bashir-mosque-in-ahmedabad-1322198135-18dddfc8f76e4a2f8cbce7d522ad4cb7.jpg")
        VisitedLocation.objects.create(location_name=test_travel)

    def test_travelDest(self):
        place = Travel.objects.get(name="Ahmedabad")
        self.assertEqual(place.cityBeach, 'City')
        
    
    def test_visited(self):
        response =  VisitedLocation.objects.get(location_name=1)
        self.assertEqual(response.id, 1)
    

class TestBasicViews(BaseTestCase):
    c = Client()
   
    def test_travelList(self):
        response = self.c.get('/')
        self.assertEqual(response.status_code, 200)
    
    def test_travelInd(self):
        response = self.c.get('/1')
        self.assertEqual(response.status_code, 200)
    
    
