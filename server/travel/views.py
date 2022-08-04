from django.http import  Http404
from .models import Travel
# Create your views here.
import jwt
from rest_framework.exceptions import AuthenticationFailed

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import TravelSerializer

def checkToken (request):
    token = request.COOKIES.get('jwt')
    if not token: 
        raise AuthenticationFailed('Unauthenticated')  
    try:
        payload = jwt.decode(token, 'secret', algorithms=['HS256'])
    except jwt.ExpiredSignatureError:
        raise AuthenticationFailed('Unauthenticated')

class TravelList (APIView):
   
    def get(self, request, format = None):
        travel = Travel.objects.all()
        serializer = TravelSerializer(travel, many = True)
        return Response(serializer.data)

    def post(self, request, format = None):
        checkToken(request)
        serializer = TravelSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


class TravelInd (APIView):
    def get_object(self, id):
        try:
            return Travel.objects.get(pk=id),200
        except Travel.DoesNotExist:
            raise Http404

    def get(self, request, id, format = None):
        checkToken(request)
        travel = self.get_object(id)
        serializer = TravelSerializer(travel)
        return Response(serializer.data)
    
    def put(self, request,id, format=None):
        checkToken(request)
        travel = self.get_object(id)
        serializer = TravelSerializer(travel, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format = None):
        checkToken(request)
        travel = self.get_object(id)
        travel.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


