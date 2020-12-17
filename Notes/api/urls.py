from api import views
from django.urls import path

urlpatterns = [
    path('notelist/', views.NoteList),
    path('notelist/<int:parentID>/', views.NoteBody)
]