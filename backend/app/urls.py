from django.urls import path, include,re_path
from rest_framework.routers import DefaultRouter
from django.views.generic import TemplateView
from .views import FeedbackViewSet

router = DefaultRouter()
router.register('feedback', FeedbackViewSet,basename='feedback')
# router.register('articles',ArticleViewSet,basename='articles')
urlpatterns = [
    path('', include(router.urls)),
]
urlpatterns+= [re_path(r'^.*',TemplateView.as_view(template_name='index.html'))]