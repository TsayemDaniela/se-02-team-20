from django.contrib import admin
from .models import Instructor, Player


class BeerGameAdmin(admin.ModelAdmin):
    pass

admin.site.register(Instructor, BeerGameAdmin)
admin.site.register(Player, BeerGameAdmin)