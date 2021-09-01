import requests
from bs4 import BeautifulSoup
import time
​
base_url = 'https://qiita.com'
query = '株式会社'
url = base_url + '/organizations/search?q=' + query
output = 'result.csv'
## https://qiita.com/organizations/search?page=1&q=株式会社
​
org_urls = []
for _ in range(100):
    res = requests.get(url)
    sp = BeautifulSoup(res.text, "html.parser")
    for element in sp.find_all('strong', class_='osr-Item_name'):
        org_urls.append(base_url + element.a['href'])
​
    nxt_li = sp.find('li', class_='st-Pager_next')
    if not nxt_li:
        break
    url = base_url + nxt_li.a['href']
    print(url)
    #time.sleep(1)
​
result = [ '組織名,URL,記事数,LGTM数\n' ]
for org_url in org_urls:
    print(org_url)
    res = requests.get(org_url)
    sp = BeautifulSoup(res.text, "html.parser")
​
    name = sp.find('h1', class_='op-About_name').text
    counters = sp.find_all('div', class_='op-CounterItem')
    for counter in counters:
        c_name = counter.find('p', class_='op-CounterItem_name').text
        c_cnt = counter.find('p', class_='op-CounterItem_count').text
        print(c_name, c_cnt)
        if c_name == 'Posts': art_cnt = c_cnt
        if c_name == 'LGTMs': lgtm_cnt = c_cnt
​
    print(name, org_url, art_cnt, lgtm_cnt)
    result.append('\"{}\",{},{},{}\n'.format(name, org_url, art_cnt, lgtm_cnt))
​
with open(output, 'w') as f:
    f.writelines(result)
