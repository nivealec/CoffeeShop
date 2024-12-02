from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CoffeeViewSet, OrderViewSet

router = DefaultRouter()
router.register(r'coffees', CoffeeViewSet)
router.register(r'orders', OrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
