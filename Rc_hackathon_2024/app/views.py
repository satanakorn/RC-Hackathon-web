from django.shortcuts import render , get_object_or_404 , redirect
from app.models import Problem
import sys
import json
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login


def base(request):
    return render(request, "base.html")

def index(request):
    return render(request, "index.html")

def login(request):
    if request.method == 'POST':
        email = request.POST.get('email-form')
        password = request.POST.get('password-form')
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('/')  
        else:
            return render(request, 'login.html', {'error': 'Invalid email or password'})
    else:
        return render(request, 'login.html')




def list_problem(request):
    easy_problems = Problem.objects.filter(category=Problem.EASY)
    medium_problems = Problem.objects.filter(category=Problem.MEDIUM)
    hard_problems = Problem.objects.filter(category=Problem.HARD)
    return render(request, "list.html", {'easy_problems': easy_problems, 'medium_problems': medium_problems, 'hard_problems': hard_problems})

def qrcode(request):
    return render(request, "qrcode.html")

def about(request):
    return render(request, "about.html")


def quiz(request, problem_id):
    problem = get_object_or_404(Problem, id=problem_id)
    title = problem.title
    description = problem.description
    inp = problem.inp
    outp = problem.outp.replace(' ', '\n')
    inp_ex = problem.inp_ex.replace(' ', '\n')
    outp_ex = problem.outp_ex.replace(' ', '\n') 
    return render(request, "quiz.html", {'title': title, 'description': description, 'input':inp, 'output':outp, 'input_ex': inp_ex , 'output_ex': outp_ex, 'problem_id': problem_id})




@csrf_exempt
def upload_python_file(request):
    if request.method == 'POST':
        uploaded_file = request.FILES.get('file')
        problem_id = request.POST.get('problem_id')
    
        if uploaded_file:
            
            with open('uploaded_file.txt', 'wb+') as destination:
                for chunk in uploaded_file.chunks():
                    destination.write(chunk)
            
            return JsonResponse({'success': True, 'message': 'File uploaded successfully'})
        else:
            
            return JsonResponse({'success': False, 'error': 'No file uploaded'}, status=400)
    else:
        
        return JsonResponse({'success': False, 'error': 'Method not allowed'}, status=405)
