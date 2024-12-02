from rest_framework import viewsets
from .models import Coffee, Order
from .serializers import CoffeeSerializer, OrderSerializer

class CoffeeViewSet(viewsets.ModelViewSet):
    queryset = Coffee.objects.all()
    serializer_class = CoffeeSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
