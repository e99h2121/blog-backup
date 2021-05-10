![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d7974729-9265-d7d9-b90c-6aec683822e5.png)
↑ この赤いところを日々記録してみる、という話。


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/19f3cb6f-9506-860a-c752-43544b126656.png)
HTML上の `<span class="css-mf9wc5">11448</span>` を取得したいということになります。API としては以下があるのだが、ユーザー単位でContribution数を取るというのはできなそう。

https://qiita.com/api/v2/docs

だったので、HTMLから直接走査しました。
Contribution とは...

https://help.qiita.com/ja/articles/qiita-contribution

自分の日々のモチベーションだったりをこれで維持したいという目論見です。


## 全体

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

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/128e8ac1-5b29-db17-b3a6-706efd7913e9.png)

2時間おきの時間実行で仕掛けるとこんな感じになった。
（実際は1日1回程度で良いかな）

## OrganizationのContribution数も

同じ要領で、Organization の数値をとってSlackに通知しているとの話。

https://qiita.com/naoqoo2/items/427fbdc077d6b3a296e4

## 注意点

色々応用できそうだなあと思いつつ、お約束としては以下ですね。

https://qiita.com/nezuq/items/c5e827e1827e7cb29011

https://qiita.com/n_oshiumi/items/b4efd1f40ec0a1b77376

以上を踏まえつつ、アウトプットを楽しむ仕掛けを作ったというお話でした。
参考になればさいわいです。
