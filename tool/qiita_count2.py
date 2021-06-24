import requests
import json

url = 'https://qiita.com/api/v2/authenticated_user/items'
headers = {"content-type": "application/json",
           "Authorization": "Bearer {your token}"}
params = {
    'page'     : 1,
    'per_page' : 100,
}

res = requests.get(url, params=params, headers=headers)
list = res.json()

print("==========================================================")
# ヘッダ出力
print("\"title\",\"page_views_count\",\"likes_count\"")

for item in list:
    item_id = item['id']
    title = item['title']
    likes_count = item['likes_count']
    item_url = item['url']
    
    url = 'https://qiita.com/api/v2/items/' + item_id
    res = requests.get(url, headers=headers)
    json = res.json()
    page_views_count = json['page_views_count']

    print("\"" + title + "\",\"" + str(page_views_count) + "\",\"" + str(likes_count) + "\",\"" + item_url + "\"")
