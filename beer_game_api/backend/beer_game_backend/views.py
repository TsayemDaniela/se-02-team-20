from django.shortcuts import render
from rest_framework import viewsets
from django.http import HttpResponse
from .serializers import InstructorSerializer, PlayerSerializer
from .models import Instructor, Player
from .forms import InstructorForm, PlayerForm
from django.contrib.auth.models import User

# These views handle GET and POST requests to the API.

# Handles requests to "/api/instructors"
class InstructorView(viewsets.ModelViewSet):
    serializer_class = InstructorSerializer
    queryset = Instructor.objects.all()

    def create(self, request):
        form = InstructorForm(request.data or None)
        if form.is_valid():
            cd = form.cleaned_data
            user = User()
            user.email = cd.get('email')
            user.username = cd.get('email')
            user.password = cd.get('password')
            user.save()
            newInstructor = Instructor()
            newInstructor.user= user
            newInstructor.institution = cd.get('institution')
            newInstructor.save()    
            return HttpResponse("Instructor has been added", status=201)
        else:
            return HttpResponse(status=400)

# Handles requests to "/api/players"
class PlayerView(viewsets.ModelViewSet):
    serializer_class = PlayerSerializer
    queryset = Player.objects.all()

    def create(self, request):
        form = PlayerForm(request.data or None)
        if form.is_valid():
            cd = form.cleaned_data
            user = User()
            user.email = cd.get('email')
            user.username = cd.get('email')
            user.password = cd.get('password')
            user.save()
            newPlayer = Player()
            newPlayer.user= user
            newPlayer.classYear = cd.get('classYear')
            newPlayer.save()    
            return HttpResponse("Player has been added", status=201)
        else:
            return HttpResponse(status=400)