from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.serializers import *
from django.contrib.auth.models import User
from rest_framework import status

from django.contrib.auth.hashers import make_password
# Create your views here.
