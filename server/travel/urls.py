from django.urls import path 
# from . import views 
from .views import TravelList, TravelInd
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', TravelList.as_view()),
    path('<int:id>/', TravelInd.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
