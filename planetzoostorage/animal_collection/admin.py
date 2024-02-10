from django.contrib import admin

from animal_collection.models import Animal, Biome, Continent, Species

admin.site.site_header = "Planet Zoo Storage Admin"
admin.site.site_title = "Planet Zoo Storage Admin Portal"

admin.site.register(Species)
admin.site.register(Animal)
admin.site.register(Biome)
admin.site.register(Continent)
