from api import views
from django.urls import path

urlpatterns = [
    path('notes', views.NoteList),
    path('notes/<int:id>/', views.NoteBody)
]