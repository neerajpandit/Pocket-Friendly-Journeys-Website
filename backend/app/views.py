from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from app.models import Feedback
from app.serializers import FeedbackSerializer

class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer