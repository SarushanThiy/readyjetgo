from rest_framework import serializers
from .models import Travel

class TravelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Travel
        fields = ('id', 'name', 'type', 'country', 'continent')
