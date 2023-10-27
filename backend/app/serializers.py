from rest_framework import serializers
from app.models import Feedback

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ('id', 'name', 'email', 'subject', 'message')
