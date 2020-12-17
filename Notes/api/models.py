from django.db import models

# Create your models here.

class Note(models.Model):

    title = models.CharField(max_length=255)

    def __str__():
        return title

class Content(models.Model):

    parent = models.ForeignKey(Note, on_delete=models.CASCADE)
    body = models.TextField()

    def __str__():
        return body