import json
from channels.generic.websocket import AsyncJsonWebsocketConsumer

class TravelConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'send_{self.room_name}'

    # Receive message from WebSocket.
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        username = text_data_json["username"]
        message = text_data_json["message"]

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_message',
                'username': username,
                'message': message
            }
        )

   # Receive message from room group
    async def send_message(self, text_data): 
        username = text_data("username")
        message = text_data("message")


        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            "username": username,
            "message": message
        }))


    #     # Join room group
    #     await self.channel_layer.group_add(
    #         self.room_group_name,
    #         self.channel_name
    #     )
    #     await self.accept()
    #     # await self.send(text_data=json.dumps({'type':'connection_established', 'message': 'You are connected'}))

    # async def disconnect(self, close_code):
    #     print("Disconnected")
    #     # Leave room group
    #     await self.channel_layer.group_discard(
    #         self.room_group_name,
    #         self.channel_name
    #     )

