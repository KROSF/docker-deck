import requests

response = requests.get("https://ident.me/.json")
payload = response.json()
print(payload['address'])
