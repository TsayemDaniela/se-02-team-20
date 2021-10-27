from django import forms
from .models import Instructor, Player, UniversityYear

class InstructorForm(forms.Form):
    email = forms.CharField(max_length=50)
    password = forms.CharField(max_length=20)
    institution = forms.CharField(max_length=100)

class PlayerForm(forms.Form):
    email = forms.CharField(max_length=50)
    password = forms.CharField(max_length=20)
    classYear = forms.ChoiceField(choices=UniversityYear.choices)