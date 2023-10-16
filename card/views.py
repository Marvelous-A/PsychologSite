from django.shortcuts import render, redirect
from .models import Author
from .models import Order
from .forms import OrderForm

# Create your views here.

def base(request):
    features = Author.objects.last()
    aew = features.reason_request.split(';')
    return render(request, 'card/main_list.html', {'Author_features': features, 'aew': aew})

def add_order(request):
    if request.method == 'POST':
        form = OrderForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success_page')
    else:
        form = OrderForm()
    
    return render(request, 'card/add_order.html',)

def add_order_1(request):
    reception = Order.objects.all()
    features = Author.objects.last()
    # if request.method == 'POST':
    #     form = OrderForm(request.POST)
    return render(request, 'card/add_order_1.html', {'Author_features': features, 'Order_reception': reception})

def add_order_2(request):
    features = Author.objects.last()
    return render(request, 'card/add_order_2.html', {'Author_features': features})

def add_order_3(request):
    features = Author.objects.last()
    return render(request, 'card/add_order_3.html', {'Author_features': features})