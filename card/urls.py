from django.urls import path
from . import views

urlpatterns = [
    path('', views.base, name='base'),
    path('add_order_1', views.add_order_1, name='add_order_1'),
    path('add_order_2', views.add_order_2, name='add_order_2'),
    path('add_order_3', views.add_order_3, name='add_order_3')
]
