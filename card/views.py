from django.shortcuts import render
from .models import Author
from .models import Order

# Create your views here.

def base(request):
    features = Author.objects.last()
    aew = features.reason_request.split(';')
    return render(request, 'card/main_list.html', {'Author_features': features, 'aew': aew})

def add_order_1(request):
    reception = Order.objects.last()
    features = Author.objects.last()
    return render(request, 'card/add_order_1.html', {'Author_features': features, 'Order_reception': reception})