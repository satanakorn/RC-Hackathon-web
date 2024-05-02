from django.db import models

# Create your models here.

class Problem(models.Model):
    EASY = 'easy'
    MEDIUM = 'medium'
    HARD = 'hard'
    CATEGORY_CHOICES = [
        (EASY, 'Easy'),
        (MEDIUM, 'Medium'),
        (HARD, 'Hard'),
    ]

    id = models.CharField(max_length=3, primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    status = models.CharField(max_length=20, default='ไม่ผ่าน')
    inp = models.CharField(max_length=255)
    outp = models.CharField(max_length=255)
    inp_ex = models.CharField(max_length=255)
    outp_ex = models.CharField(max_length=255)





