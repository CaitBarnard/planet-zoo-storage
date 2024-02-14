from rest_framework import serializers
from .models import Animal, Species


class SpeciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Species
        fields = ["id", "name"]


class AnimalSerializer(serializers.ModelSerializer):
    species = SpeciesSerializer(read_only=True)

    class Meta:
        model = Animal
        fields = "__all__"
