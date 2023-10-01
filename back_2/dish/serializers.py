from rest_framework import serializers

from .models import Category
from .models import Recipie


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['category']


class RecipieSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipie
        fields = ['name', 'source', 'instructions', 'category']
