from django.urls import path
from app import views

urlpatterns = [
    path('', views.index),
    path('index/', views.index),
    path('login/', views.login, name='login'),
    path('list/', views.list_problem),
    path('qrcode/', views.qrcode),
    path('about/', views.about),
    path('quiz/<str:problem_id>/', views.quiz, name='quiz'),
    path('upload-python-file/', views.upload_python_file, name='upload_python_file'),

]