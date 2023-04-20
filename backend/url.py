
from django.contrib import admin
from django.urls import path
from django.urls import include, re_path
from django.views.generic import TemplateView


from backend.views import hello_world, home, post_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name="index.html")),
    re_path(r'^post/(?P<pk>\d+)/$', post_detail, name='post_detail'),
]
