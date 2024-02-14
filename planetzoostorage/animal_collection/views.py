from rest_framework import viewsets
from animal_collection.models import Animal, Species
from animal_collection.serializers import AnimalSerializer, SpeciesSerializer


class SpeciesView(viewsets.ModelViewSet):
    serializer_class = SpeciesSerializer
    queryset = Species.objects.all()


class AnimalView(viewsets.ModelViewSet):
    serializer_class = AnimalSerializer
    queryset = Animal.objects.all()
