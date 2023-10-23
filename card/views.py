from django.shortcuts import render, redirect
from .models import Author
from .models import Order
from .forms import OrderForm

# Create your views here.

def base(request):
    features = Author.objects.last()
    aew = features.reason_request.split(';')
    return render(request, 'card/main_list.html', {'Author_features': features, 'aew': aew})
######################################################
def add_order(request):
    if request.method == 'POST':
        form = OrderForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success_page')
    else:
        form = OrderForm()
    
    return render(request, 'card/add_order.html',)
######################################################
def add_order_1(request):
    features = Author.objects.last()
    if request.method == 'POST':
        form = OrderForm(request.POST)
        view_lesson_value = request.POST.get('view_lesson', False)
        if view_lesson_value == 'on':
            form.field_order['view_lesson'] = True
        else:
            form.field_order['view_lesson']= False
        request.session['order_data_form'] = form
        return redirect('add_order_2')
    return render(request, 'card/add_order_1.html', {'Author_features': features})

def add_order_2(request, form):
    features = Author.objects.last()
    form_data = request.session.get('order_data_form',{})
    
    if request.method == 'POST':
        form = OrderForm(request.POST)
        if form.is_valid():
            form.cleaned_data.update(form_data)
            form.save()
            return redirect('add_order_2')
    else:
        form = OrderForm(initial=form_data)
    return render(request, 'card/add_order_2.html', {'Author_features': features})

def add_order_3(request, form):
    features = Author.objects.last()
    
    if request.method == 'POST':
        form = OrderForm(request.POST)
        print(form.errors.as_data())
        if form.is_valid():
            form.save()
        return redirect('add_order_2')
    else:
        form = OrderForm()
    return render(request, 'card/add_order_3.html', {'Author_features': features, 'form': form})