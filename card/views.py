from django.shortcuts import render, redirect
from .models import Author
from .models import Order
from .forms import OrderForm

# Create your views here.

def base(request):
    features = Author.objects.last()
    aew = features.reason_request.split(';')
    return render(request, 'card/main_list.html', {'Author_features': features, 'aew': aew})

def main_list(request):
    if request.method == 'POST':
        return redirect('add_order_1')
    return render(request, 'card/main_list.html', {})

def add_order_1(request):
    features = Author.objects.last()
    if request.method == 'POST':
        form = OrderForm(request.POST)
        view_lesson_value = request.POST.get('view_lesson', False)
        if view_lesson_value == 'on':
            form.field_order['view_lesson'] = True
        else:
            form.field_order['view_lesson']= False
        return redirect('add_order_2', form)
    return render(request, 'card/add_order_1.html', {'Author_features': features})

def add_order_2(request):
    features = Author.objects.last()
    if request.method == 'POST':
        form = OrderForm(request.POST)
        return redirect('add_order_3', form)
    return render(request, 'card/add_order_2.html', {'Author_features': features})

def add_order_3(request):
    features = Author.objects.last()
    
    if request.method == 'POST':
        form = OrderForm(request.POST)
        print(form.errors.as_data())
        if form.is_valid():
            form.save()
        else:
            form = OrderForm(request.POST)
        return redirect('add_order_2')
    else:
        form = OrderForm()
    return render(request, 'card/add_order_3.html', {'Author_features': features, 'form': form})

def customers(request):
    users = Order.objects.all()
    return render(request, 'card/customers.html', {'users': users})