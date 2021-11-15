from rest_framework.serializers import ModelSerializer

from .models import CustomUser


class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser

        # This is a tuple of the different model attributes you want to serialize.
        fields = ('url', 'email', 'last_login', 'date_joined', 'is_staff')
