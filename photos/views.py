from django.shortcuts import render
from .models import Image

# Create your views here.
def index(request):
    all_images = Image.get_all_images()

    return render(request, 'home.html', {'images': all_images})

def show_image(request, id):
    image = Image.get_image(id)
    return render(request, 'photo.html', {'image': image})