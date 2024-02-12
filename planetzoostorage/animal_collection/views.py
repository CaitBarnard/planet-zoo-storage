from rest_framework import viewsets
from animal_collection.models import Animal
from animal_collection.serializers import AnimalSerializer


class AnimalView(viewsets.ModelViewSet):
    serializer_class = AnimalSerializer
    queryset = Animal.objects.all()
