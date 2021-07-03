何でも草API Pixela。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/61b3cde1-f162-a329-f9d9-42c0ec16ef8f.png)



かいつまむと公式のことを行うだけなのだが、便利なTips等含めメモ。

提供ページ:
https://pixe.la/ja
Github:
https://github.com/a-know/pi/releases

["草APIサービス" Pixela のコマンドラインツールを作ったので、OSごとのインストール・使い方を書きます！](https://blog.a-know.me/entry/2019/02/24/214142) を使うとコマンドラインでも行える。

curlなら以下。
[VS Code上でHTTPリクエストを送信し、VS Code上でレスポンスを確認できる「REST Client」拡張の紹介](https://qiita.com/toshi0607/items/c4440d3fbfa72eac840c) 等で使いやすくなる。
それどころでなければ[WebAPIとPostmanについて](https://qiita.com/notch0314/items/97c7d1bb565fdae4a712) 等。


## ユーザーの作成

```bat
curl -X POST https://pixe.la/v1/users -d '{"token":"setyoursecretpass", "username":"yamada-n", "agreeTermsOfService":"yes", "notMinor":"yes"}'
{"message":"Success.","isSuccess":true}
```

setyoursecretpass の部分は自分でパスワードをセット。
username もご自身の名前に。`_` は使えなかった。


```
HTTP/1.1 200 OK
Content-Type: application/json
Vary: Accept-Encoding
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Origin: *
X-Appengine-Log-Flush-Count: 0
Content-Encoding: gzip
X-Cloud-Trace-Context: 032116ac803274b95fe030909b1ac005
Date: Sun, 24 Jan 2021 11:30:11 GMT
Server: Google Frontend
Cache-Control: private
Connection: close
Transfer-Encoding: chunked

{
  "message": "Success. Let's visit https://pixe.la/@yamada-n , it is your profile page!",
  "isSuccess": true
}
```


## グラフの作成

```bat
curl -X POST https://pixe.la/v1/users/yamada-n/graphs -H 'X-USER-TOKEN:setyoursecretpass' -d '{"id":"test-graph","name":"graph-name","unit":"commit","type":"int","color":"shibafu"}'
{"message":"Success.","isSuccess":true}
```

setyoursecretpass の部分は自分でパスワードをセット。
同じく username もご自身の名前に。


```
HTTP/1.1 200 OK
Content-Type: application/json
Vary: Accept-Encoding
Access-Control-Allow-Headers: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Origin: *
X-Appengine-Log-Flush-Count: 1
Content-Encoding: gzip
X-Cloud-Trace-Context: 51b4b971e66a00162db502b6b78eba85
Date: Sun, 24 Jan 2021 11:42:06 GMT
Server: Google Frontend
Cache-Control: private
Connection: close
Transfer-Encoding: chunked

{
  "message": "Success.",
  "isSuccess": true
}
```


## 草を生やす

```bat
curl -X POST https://pixe.la/v1/users/(username)/graphs/test-graph -H 'X-USER-TOKEN:setyoursecretpass' -d '{"date":"20210123","quantity":"10"}'
{"message":"Success.","isSuccess":true}
```

setyoursecretpass の部分は自分でパスワードをセット。
(username) もご自身の名前。

date : 草を生やしたい日付
quantity : 草の量


### 例えばGoogle Apps Script (GAS)から

こんな感じにするとGASで草を生やせる。

```js

var headers = {
  'X-USER-TOKEN': '自分のパスワード'
};

var options = {
  'method' : 'put',
  'contentType': 'application/json',
  'payload' : '',
  'headers' : headers,
  'muteHttpExceptions': true
};

function myFunctionToPixela() {
  var json = UrlFetchApp.fetch('https://pixe.la/v1/users/yamada-n/graphs/my-tweet-graph/increment', options).getContentText();
  var jsonData = JSON.parse(json);

  //返り値は {"message":"Success.","isSuccess":true
  var message = jsonData['message'];
  console.log(message);
 }
 
```



```js
var headers = {
  'X-USER-TOKEN': '自分のパスワード'
};

function getToday() {
  today = new Date();
  date = Utilities.formatDate(today,'JST', 'yyyyMMdd');
  console.log(date);
  return date;
}

var body = { 
  'date': getToday(),
  'quantity':'10',
};

var options = {
  'method' : 'post',
  'contentType': 'application/json',
  'payload' : JSON.stringify(body),
  'headers' : headers,
  'muteHttpExceptions': true
};

function myFunctionToPixela() {
  var json = UrlFetchApp.fetch('https://pixe.la/v1/users/yamada-n/graphs/test-graph', options).getContentText();
  var jsonData = JSON.parse(json);

  //返り値は {"message":"Success.","isSuccess":true
  var message = jsonData['message'];
  console.log(message);
 }
```



## 確認

生えた草はここで確認。
https://pixe.la/v1/users/yamada-n/graphs/test-graph
あるいはもう少し詳細に。
https://pixe.la/v1/users/yamada-n/graphs/test-graph.html

[Trelloのタスク完了でGitHubのような芝を生やして達成感を生み出してみた](https://qiita.com/wamisnet/items/8cd6d4a569ef6c03efb7) 
[Pixelaの草をドットアートに変換する](https://qiita.com/wordijp/items/48c790e96b2537be0ea7)

その他: https://qiita.com/tags/pixela
等のようなことができる～。
