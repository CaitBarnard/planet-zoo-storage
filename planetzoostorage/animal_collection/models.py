from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Biome(models.Model):
    BIOMES_CHOICES = [
        ("TU", "Tundra"),
        ("TA", "Taiga"),
        ("GR", "Grassland"),
        ("TE", "Temperate"),
        ("DE", "Desert"),
        ("TR", "Tropical"),
        ("AQ", "Aquatic"),
    ]

    name = models.CharField(max_length=50, choices=BIOMES_CHOICES)

    def __str__(self):
        return self.name


class Continent(models.Model):
    CONTINENTS_CHOICES = [
        ("EU", "Europe"),
        ("AS", "Asia"),
        ("AF", "Africa"),
        ("NA", "North America"),
        ("SA", "South America"),
        ("OC", "Oceania"),
    ]

    name = models.CharField(max_length=50, choices=CONTINENTS_CHOICES)

    def __str__(self):
        return self.name


class Species(models.Model):
    TYPE_CHOICES = [
        ("H", "Habitat"),
        ("E", "Exhibit"),
    ]

    name = models.CharField(max_length=100)
    type = models.CharField(default=TYPE_CHOICES[0], choices=TYPE_CHOICES)
    biomes = models.ManyToManyField(Biome, blank=True)
    continents = models.ManyToManyField(Continent, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "species"


class Animal(models.Model):
    GENDER_CHOICES = [
        ("M", "Male"),
        ("F", "Female"),
    ]

    APPEAL_MEDAL_CHOICES = [
        ("G", "Gold"),
        ("S", "Silver"),
        ("B", "Bronze"),
        ("N", "None"),
    ]

    def gene_field():
        return models.IntegerField(
            validators=[MinValueValidator(0), MaxValueValidator(100)]
        )

    species = models.ForeignKey(Species, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    appeal_rating = models.IntegerField(blank=True, null=True)
    appeal_medal = models.CharField(
        max_length=1, choices=APPEAL_MEDAL_CHOICES, blank=True, null=True
    )
    size_gene = gene_field()
    longevity_gene = gene_field()
    fertility_gene = gene_field()
    immunity_gene = gene_field()

    def __str__(self):
        return f"{self.name} ({self.species.name})"
