# Generated by Django 5.0.2 on 2024-02-10 16:39

from django.db import migrations


def create_biomes_and_continents(apps, schema_editor):
    Biome = apps.get_model("animal_collection", "Biome")
    Continent = apps.get_model("animal_collection", "Continent")

    Biome.objects.bulk_create(
        [
            Biome(name="Tundra"),
            Biome(name="Taiga"),
            Biome(name="Grassland"),
            Biome(name="Temperate"),
            Biome(name="Desert"),
            Biome(name="Tropical"),
            Biome(name="Aquatic"),
        ]
    )

    Continent.objects.bulk_create(
        [
            Continent(name="Europe"),
            Continent(name="Asia"),
            Continent(name="Africa"),
            Continent(name="North America"),
            Continent(name="South America"),
            Continent(name="Oceania"),
        ]
    )


class Migration(migrations.Migration):

    dependencies = [
        (
            "animal_collection",
            "0002_biome_continent_animal_appeal_medal_and_more",
        ),
    ]

    operations = [
        migrations.RunPython(create_biomes_and_continents),
    ]
