from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework import permissions
from .models import Category
from .models import Recipie
from .serializers import CategorySerializer
from .serializers import RecipieSerializer


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = Category.objects.all().order_by("category")
    serializer_class = CategorySerializer
    # permission_classes = [permissions.IsAuthenticated]


class RecipieViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Recipie.objects.all()
    serializer_class = RecipieSerializer
    # permission_classes = [permissions.IsAuthenticated]
