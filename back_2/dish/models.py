from django.db import models


class Category(models.Model):
    category = models.CharField(max_length=15)

    def __str__(self):
        return f'{self.category}'

    class Meta:
        verbose_name_plural = "Categories"


class Recipie(models.Model):
    name = models.CharField(max_length=64)
    source = models.TextField()
    instructions = models.TextField()
    category = models.ForeignKey(Category, related_name='recipies',
                                 on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'
