from django.db import models
import channels.layers
from asgiref.sync import async_to_sync

class TravelPosting(models.Model):

    ...

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        channel_layer = channels.layers.get_channel_layer()
        group = f"travel-posting-{self.user.id}"
        async_to_sync(channel_layer.group_send)(
            group,
            {
                "type": "propagate_status",
                "message": {"id": self.id, "state": self.state},
            },
        )



