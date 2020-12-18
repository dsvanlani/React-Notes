from rest_framework import serializers
from api.models import *

class NoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Note
        fields = ["id","title", "body"]

