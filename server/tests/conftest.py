import pytest
import server

@pytest.fixture
def api(monkeypatch):
    test_locations = [{"City/Beach": "City", "Continent": "North America", "Country": "Canada", "Img":"https://www.tripsavvy.com/thmb/18jukZwmonkaOB7Gk2t_ua9GDYQ=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/sidi-bashir-mosque-in-ahmedabad-1322198135-18dddfc8f76e4a2f8cbce7d522ad4cb7.jpg", "Name": "Ottawa", 'id': 1}, 
    {"City/Beach": "City", "Continent": "Asia", "Country": "India", "Img":"https://content.r9cdn.net/rimg/dimg/66/6f/19cfcc07-city-9618-1629b990c4d.jpg?crop=true&width=1366&height=768&xhint=1491&yhint=1383", "Name": "Ahmedabad", 'id': 2}]
    monkeypatch.setattr(server, "locations", test_locations)
    api = server.app.test_client()
    return api