from django.urls import path
from . import views
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate

urlpatterns = [
    path("", views.store, name="store"),
    path("cart/", views.cart, name="cart"),
    path('update_item/',views.updateItem,name="checkout"),
    path('checkout/',views.updateItem,name="checkout"),
    path('finish_order/',views.finishOrder,name="finish_order")
]