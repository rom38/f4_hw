from rest_framework import serializers

from .models import Category
from .models import Recipie


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "category", "recipies"]


class RecipieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipie
        fields = ["id", "name", "source", "instructions", "category"]
