from django.shortcuts import render
from rest_framework.decorators import api_view
from api.models import Note
from api.serializers import NoteSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

@api_view(["GET","POST"])
def NoteList(request):
    
    if request.method == "GET":
        notes = Note.objects.all()
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(["GET", "PUT"])
def NoteBody(request, id):

    if request.method == "GET":
        try:
            note = Note.objects.get(id=id)
            serializer = NoteSerializer(note)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except Exception:
            return Response(status=status.HTTP_404_NOT_FOUND)
            
    if request.method == "PUT":
        note = Note.objects.get(id=id)
        serializer = NoteSerializer(note, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        