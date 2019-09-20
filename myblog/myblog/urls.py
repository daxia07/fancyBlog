from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include('frontend.urls')),
    # path('', include('posts.urls')),
    # path('', include('accounts.urls')),
    url(r'^', views.FrontendAppView.as_view())
]
