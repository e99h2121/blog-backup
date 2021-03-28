[Teamsにﾈｺﾁｬﾝの画像を定期postする](https://qiita.com/nicco_mirai/items/eabc244127065f8bf8cf) を作成されたという話に倣い、Slackにﾈｺﾁｬﾝを定期postする。[The Cat API](https://thecatapi.com/)というCaas(Cats as a Service)を利用する。

## [The Cat API](https://thecatapi.com/)とは？
ﾈｺﾁｬﾝの画像のURLをランダムに渡してくれるAPI。[ドキュメント](https://docs.thecatapi.com/)がある。API自体はこれだけ。

1. https://api.thecatapi.com/v1/images/search にGET
2. 受け取ったJSONの最初の配列を取りだして
3. .urlのURLにアクセス
4. Enjoy the ﾈｺﾁｬﾝ 😺

保守対応で心が傷み分報を荒らしている。今回はこのﾈｺﾁｬﾝと、Google Apps Script（以降GASと表記する）を用い、以下フローを達成することで当該問題の解決を目論む（そんなすごい話じゃない）。

1. GASからThe Cat APIに接続しﾈｺﾁｬﾝ画像を取得
2. n時間おきにSlackの私の分報チャンネルにﾈｺﾁｬﾝpost
3. 「殺伐としたSlack channelにﾈｺﾁｬﾝがにゃーん」

## GASからCat APIに接続する

https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app

`UrlFetchApp.fetch` を用います。
[GASでHTTPクライアント処理を実施する（URL Fetch Service）](https://qiita.com/84zume/items/85120c560e747fbb4520) 等参考に。Cat APIはAPIアクセスの手習いにシンプルでオススメです。
`https://api.thecatapi.com/v1/images/search` にGetリクエストを投げると以下が取得できます。

```md
[{"breeds":[],"id":"bbv","url":"https://cdn2.thecatapi.com/images/bbv.jpg","width":500,"height":334}]
```

よってこれをGAS的スクリプトにすると以下。

```js
function myFunction() {
  var json = UrlFetchApp.fetch('https://api.thecatapi.com/v1/images/search').getContentText();
  var jsonData = JSON.parse(json);
  var url = jsonData[0].url;
  console.log(url);
 }
```
json形式のデータの取り出し方は [【GAS GoogleAppsScript | 基礎コード】JSONデータを扱うためのJSONオブジェクト](https://hirachin.com/post-4217/) の例などが分かりやすい。以下引用。

```js
function test() {
  // JSON形式の文字列を用意する
  var str = '[{"name":"ひらちん","age":30,"like":["game","basketball","eat"]},{"name":"ひらこ","age":28,"like":["nail","cooking"]}]'
  
  // JSON.stringifyでJSON形式の文字列に変換する
  var obj = JSON.parse(str)
  
  // ログに書き出す
  Logger.log(obj[0].name)     // ひらちん
  Logger.log(obj[1].name)     // ひらこ
  Logger.log(obj[0].like[1])  // basketball
  Logger.log(obj[1].age)      // 28.0
  Logger.log(obj[1].like)     // [nail, cooking]
}
```


## n時間おきにSlackのチャンネルにﾈｺﾁｬﾝpost

さてこれをSlackのチャンネルに定期ポストしたい。ここではSlackのワークフロービルダーにおける、Webhookを用います。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/24ccf316-5f0d-7786-a42a-8660eef72e75.png" width=50%>

変数を設定しておきます。ここでは `text`。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/0c000d81-c6db-3f7b-4b7a-e525d7d52c72.png" width=50%>

任意のチャンネルに送信することにします。ここでは個人の分報を指定しました。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/c8829c0a-a517-ad5b-30b7-e3f81b73d090.png)
メッセージには先に設定しておいた変数、`text` を利用します。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/66bfa129-aefb-00ae-cc0c-7a3e3e72fc9c.png" width=50%>

ワークフローを保存するとURLが表示されます。GAS側にて使います。GASに戻り、以下のようにしておきました。

```js
//Workflowで定義したURLです
var postUrl = 'https://hooks.slack.com/workflows/ZZZZZZZZZ/YYYYYYYYYYY/0000000000/xxxxxxxxxxxxxxxxxxxxxxxx';　
var username = 'ねこです';  // 通知時に表示されるユーザー名

function sendMessage(text) {
  var jsonData =
  {
     "text" : text,
     "username" : username
  };
  var payload = JSON.stringify(jsonData);
  var options =
  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : payload
  };
  UrlFetchApp.fetch(postUrl, options);
}
``` 

function がデバッグ、実行できることを確認したら、GASでTriggerを `Time-Driven` で設定します。今回は8時間おきに起動するようにしました。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/033d110c-5f59-3ba8-b9b8-16b4d0975368.png" width=50%>



## 完成

スクリプトエディタ上でデバッグの例。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d250f3ad-e864-073e-004b-90713d0e0ace.png)

全体としてこんな感じです。

```js
var postUrl = 'https://hooks.slack.com/workflows/ZZZZZZZZZ/YYYYYYYYYYY/0000000000/xxxxxxxxxxxxxxxxxxxxxxxx';　//Workflowで定義されています
var username = 'ねこです';  // 通知時に表示されるユーザー名

function myFunctionJSON() {
  var json = UrlFetchApp.fetch('https://api.thecatapi.com/v1/images/search').getContentText();
  var jsonData = JSON.parse(json);
  var url = jsonData[0].url;
  console.log(url);
　sendMessage(url);
 } 

function sendMessage(text) {
  var jsonData =
  {
     "text" : text,
     "username" : username
  };
  var payload = JSON.stringify(jsonData);
  var options =
  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : payload
  };
  UrlFetchApp.fetch(postUrl, options);
}

```

殺伐とした channel にﾈｺﾁｬﾝ登場。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/beeb4abe-06e8-39a3-2a61-85d34870c242.png)
にゃーん！！



## 参考

### GAS活用
[総務がGASで請求書業務を半自動化してみた。](https://qiita.com/minamisatomi/items/099957c825dc739ec928)
[Google Apps Script (GAS) で Slack 連携を実装する前に知っておくとよい 5 つのこと](https://qiita.com/seratch/items/2158cb0abed5b8e12809)

### API
[Teamsにﾈｺﾁｬﾝの画像を定期postする](https://qiita.com/nicco_mirai/items/eabc244127065f8bf8cf) 
[無料で使える (癒やされたいだけの) 公開APIリスト: ねこ、いぬ、キツネ、柴犬、ジブリ](https://qiita.com/e99h2121/items/6d5cc72679f43aa37be2)


以上なにがしか参考になればさいわいです。
Happy 猫ing !
