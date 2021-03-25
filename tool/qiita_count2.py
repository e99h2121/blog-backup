import requests
import json

url = 'https://qiita.com/api/v2/authenticated_user/items'
headers = {"content-type": "application/json",
           "Authorization": "Bearer {token}"}

res = requests.get(url, headers=headers)
list = res.json()

for item in list:
    item_id = item['id']
    title = item['title']
    likes_count = item['likes_count']

    url = 'https://qiita.com/api/v2/items/' + item_id
    res = requests.get(url, headers=headers)
    json = res.json()
    page_views_count = json['page_views_count']
    print(title, page_views_count, likes_count)
