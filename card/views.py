from django.shortcuts import render, redirect, get_object_or_404
from .models import Author
from .models import Order
from .forms import OrderForm

# Create your views here.

def base(request):
    # features = Author.objects.last()
    # aew = features.reason_request.split(';')
    return render(request, 'card/main_list.html', {})

def main_list(request):
    features = Author.objects.last()
    aew = features.reason_request.split(';')
    if request.method == 'POST':
        return redirect('add_order_1')
    return render(request, 'card/main_list.html', {'Author_features': features, 'aew': aew})

def add_order_1(request):
    features = Author.objects.last()
    if request.method == 'POST':
        view_lesson_value = request.POST.get('view_lesson')# Вот тут мне нужно узнать значене checked на странице ?
        request.session['view_lesson'] = True if view_lesson_value == 'on' else False  # В этом месте передается параметр в общий запрос(сессию)
        return redirect("add_order_2")
    return render(request, 'card/add_order_1.html', {'Author_features': features})

def add_order_2(request):
    features = Author.objects.last()
    if request.method == 'POST':
        date_value = request.POST.get('date')
        request.session['date'] = date_value
        return redirect('add_order_3')
    return render(request, 'card/add_order_2.html', {'Author_features': features})

def add_order_3(request):
    import datetime
    features = Author.objects.last()
    if request.method == 'POST':
        request.POST = request.POST.copy() # делаем POST изменяемым чтобы добавить последние 2 недобавленных параметра 
        request.POST['view_lesson'] = request.session.get('view_lesson') # <= добавили в основной POST запрос, поля которые тянутся с прошлых этапо
        
        request.POST['date'] = request.session.get('date') # <= добавили в основной POST запрос, поля которые тянутся с прошлых этапо
        
        form = OrderForm(request.POST)# <= передали конечный запрос вместе с теми полями который заполняли в прошлых 2 шагах
        if form.is_valid():
            form.save()
        else:
            print(form.errors.as_data())
        return redirect('main_list')
    else:
        Order.objects.all()
        form = OrderForm()
    return render(request, 'card/add_order_3.html', {'Author_features': features, 'form':form})

def customers(request):
    users = Order.objects.all()
    return render(request, 'card/customers.html', {'users': users})

def customers_detal(request, pk):
    users = get_object_or_404(Order, pk=pk)
    # users = Order.objects.get(pk=pk)
    return render(request, 'card/customers_detal.html', {'users': users})