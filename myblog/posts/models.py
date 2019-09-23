from django.contrib.auth.models import User
# from django.contrib.contenttypes.fields import GenericRelation
from django.contrib.contenttypes.models import ContentType
from django.urls import reverse
from django.utils import timezone
from django.db import models
# from ckeditor_uploader.fields import RichTextUploadingField
# from comments.models import Comment


class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    # content = RichTextUploadingField(config_name='default')
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE)
    # val_obj = GenericRelation(Comment, object_id_field='val_id', related_query_name='post')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('post-detail', kwargs={'pk': self.pk})

    # @property
    # def comments(self):
    #     return Comment.objects.filter_by_instance(self)

    @property
    def get_content_type(self):
        return ContentType.objects.get_for_model(self.__class__)
