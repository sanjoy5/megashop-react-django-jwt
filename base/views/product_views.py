from django.shortcuts import render
from base.products import products
from rest_framework.response import Response
from base.serializers import *
from rest_framework.decorators import api_view


from rest_framework import status

# Create your views here.


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all().order_by('?')
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)
