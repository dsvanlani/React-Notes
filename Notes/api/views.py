from django.shortcuts import render
from rest_framework.decorators import api_view
from api.models import Note, Content
from api.serializers import NoteSerializer, ContentSerializer
from rest_framework.response import Response

# Create your views here.

@api_view(["GET","POST"])
def NoteList(request):
    
    if request.method == "GET":
        notes = Note.objects.all()
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)

@api_view(["GET", "POST"])
def NoteBody(request, parentID):
    if request.method == "GET":
        content = Content.objects.get(parent=Note.objects.get(id=parentID))
        serializer = ContentSerializer(content)
        return Response(serializer.data)