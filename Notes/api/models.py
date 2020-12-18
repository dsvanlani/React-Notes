from django.db import models

# Create your models here.

class Note(models.Model):

    title = models.CharField(max_length=255)
    body = models.TextField(default="")

    def __str__(self):
        return f"{self.title}"
