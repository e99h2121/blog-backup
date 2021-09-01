
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/729623e7-7bfa-8405-d6af-ba7de40f8f67.png)


↑ この赤いところを日々記録してみる、という話。

## GAS

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/19f3cb6f-9506-860a-c752-43544b126656.png)
HTML上の `<span class="css-mf9wc5">23856</span>` を取得したいということになります。API としては以下があるのだが、ユーザー単位でContribution数を取るというのはできない。

https://qiita.com/api/v2/docs

だったので、HTMLから直接走査しました。
Contribution とは...

https://help.qiita.com/ja/articles/qiita-contribution

自分の日々のモチベーションだったりをこれで維持したいという目論見です。


### 全体

端的に以下 Google Apps Script（GAS）を書きました。

```JavaScript:Code.gs
function main () {
  var now = new Date(); //現在日時を取得
  var time = Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss');
  let count = countContribution();
  write2SpreadSheet(time, count);
}

function countContribution() {
  const URL = 'https://qiita.com/e99h2121';//mypage
  let responseDataGET = UrlFetchApp.fetch(URL).getContentText();
  let myRegexp = /<span class=\"css-mf9wc5\">([\d]+)<\/span>/; //★ `<span class="css-mf9wc5">nnnnn</span>`  
  let contribution = responseDataGET.match(myRegexp);
  let out = contribution[0].replace("<span class=\"css-mf9wc5\">","").replace("<\/span>",""); //★ 数字部分のみに置換
  return out;
}

function write2SpreadSheet(today, count) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  // 書き込みタブの名前と揃える。
  var sheet = ss.getSheetByName('count');
  var row = sheet.getLastRow();
  var lastval = sheet.getRange(row,2).getValue();
  var plus = count - lastval; 
  sheet.appendRow([today, count, plus]);
}
```

で、記録。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/616601da-f67e-30d4-c8f5-38e37b50a7f7.png)


2時間おきの時間実行で仕掛けるとこんな感じになる。
（実際は1日1回程度で良い）

### OrganizationのContribution数も

同じ要領で、Organization の数値をとってSlackに通知しているとの話。

https://qiita.com/naoqoo2/items/427fbdc077d6b3a296e4

### 注意点

色々応用できそうだなあと思いつつ、お約束としては以下。

https://qiita.com/nezuq/items/c5e827e1827e7cb29011

https://qiita.com/n_oshiumi/items/b4efd1f40ec0a1b77376


## あるいはPythonでCSVに落とす

```py
import requests
import json

url = 'https://qiita.com/api/v2/authenticated_user/items'
headers = {"content-type": "application/json",
           "Authorization": "Bearer {Token}"}
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

``` 

### 参考

https://qiita.com/Naoto9282/items/252c4b386aeafc0052ba


以上を踏まえつつ、アウトプットを楽しむ仕掛け諸々のお話でした。
参考になればさいわいです。
