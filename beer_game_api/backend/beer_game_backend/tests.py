import unittest
from django.test import TestCase
from django.test import Client
from django.contrib.auth.models import User
from .models import Instructor, Player

# Creates a web client, and simulates a post request of creating a new Instructor.
class InstructorTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_new_instructor(self):
        response = self.client.post('/api/instructors/', {'email': 'test@mail.com', 'password': '123', 'confirmPassword': '123', 'institution': 'Jacobs'})
        self.assertEqual(response.status_code, 201)
        newUser = User.objects.get(username='test@mail.com')
        self.assertEqual(newUser.password, "123")