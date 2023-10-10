from django.shortcuts import render
from .models import Author

# Create your views here.
features = Author.objects.last()

def base(request):
    return render(request, 'card/main_list.html', {'Author_features': features})

def record(request):
    return render(request, 'card/record.html', {'Author_features': features})