from django.shortcuts import render



# Create your views here.rom django.shortcuts import render

def index(request):
    return render(request, 'travel/home.html')

def about(request):
    return render(request, 'travel/about.html')

def contact(request):
    return render(request, 'travel/contact.html')

