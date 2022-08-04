from unicodedata import name
from urllib import response
from django.test import Client, TestCase
from django.urls import reverse
# from .forms import UserRegistrationForm

class TestBasicViews(TestCase):
    c = Client()
    
    def test_travelList(self):
        response = self.c.get('/register/')
        self.assertEqual(response.status_code, 200)
    
    def test_travelInd(self):
        response = self.c.get('/login/')
        self.assertEqual(response.status_code, 200)
    
    

