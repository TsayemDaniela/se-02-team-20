from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Instructor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    institution = models.CharField(max_length=30, blank=True)
    def __str__(self):
        return self.user.email

class UniversityYear(models.IntegerChoices):
        firstYear = 1
        secondYear = 2
        thirdYear = 3

class Player(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    classYear = models.IntegerField(choices=UniversityYear.choices, null=True) 
    def __str__(self):
        return self.user.email