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
        request.POST = request.POST.copy() # <== дубликат метода отправки
        # print(view_lesson_value)
        # заполнение формы в зависимости от значение которое мы получили в 
        if view_lesson_value == 'on':
            request.POST['view_lesson'] = True
        else:
            request.POST['view_lesson'] = False

        request.POST['description'] = '0'
        request.POST['phone'] = '0'
        request.POST['email'] = '0@mail.ru'
        request.POST['date'] = '0'
        request.POST['name_client'] = '0'
        form = OrderForm(request.POST)

        # print(form['view_lesson'].value())
        if form.is_valid(): #если форма valid то появляется cleaned_data
            form_data = form
            return redirect('add_order_2', form_data)
        else:
            print(form.errors)
    else:
        form = OrderForm()
    return render(request, 'card/add_order_1.html', {'Author_features': features, 'form':form})

def add_order_2(request, form):
    features = Author.objects.last()
    if request.method == 'POST':
        form = form
        form.cleaned_data = request.POST.get('date')
        return redirect('add_order_3', form)
    return render(request, 'card/add_order_2.html', {'Author_features': features, 'form': form})

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
def customers_detal(request, pk):
    users = get_object_or_404(Order, pk=pk)
    #users = Order.objects.all()
    return render(request, 'card/customers_detal.html', {'users': users})