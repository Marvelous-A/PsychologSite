from django.urls import path
from . import views

urlpatterns = [
    path('', views.base, name='base'),
    path('add_order_1', views.add_order_1, name='add_order_1')
]
