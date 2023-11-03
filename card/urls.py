from django.urls import path
from . import views
from django.contrib.auth import views as auth_views


urlpatterns = [
    #path('', views.base, name='base'),
    path('', views.main_list, name='main_list'),
    path('add_order_1', views.add_order_1, name='add_order_1'),
    path('add_order_2', views.add_order_2, name='add_order_2'),
    path('add_order_3', views.add_order_3, name='add_order_3'),
    path('customers', views.customers, name='customers'),
    path('customers_detal/<int:pk>/', views.customers_detal, name='customers_detal'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout')
]
