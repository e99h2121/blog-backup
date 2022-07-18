[Google Apps Scriptで、Slackに(またはLINE Botにも)ﾈｺﾁｬﾝをpostする - Qiita](https://qiita.com/e99h2121/items/56b9d7a9db88e0b4744a) と合わせて、ごくごく簡単にSlackとの連携をさせる作り方メモ。


## 作り方
### Google Form

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/1f2151b0-61e3-68d1-9f82-7efd2f71a78f.png)

ひとまずシンプルにつくります。

### Slack投稿

[ワークフロービルダーからWebhookを用いる](https://qiita.com/e99h2121/items/56b9d7a9db88e0b4744a#n%E6%99%82%E9%96%93%E3%81%8A%E3%81%8D%E3%81%ABslack%E3%81%AE%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB%E3%81%AB%EF%BE%88%EF%BD%BA%EF%BE%81%EF%BD%AC%EF%BE%9Dpost)

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/24ccf316-5f0d-7786-a42a-8660eef72e75.png" width=50%>

変数を設定しておきます。ここでは `text`。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/0c000d81-c6db-3f7b-4b7a-e525d7d52c72.png" width=50%>

任意のチャンネルに送信することにします。
メッセージには先に設定しておいた変数、`text` を利用します。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/66bfa129-aefb-00ae-cc0c-7a3e3e72fc9c.png" width=50%>

ワークフローを保存するとURLが表示されます。GAS側にて使います。

### Google Apps Script

```js
function onFormSubmit(event) {
    var message = "";
    var items = event.response.getItemResponses();
    for (var i = 0; i < items.length; i++) {
      //message += items[i].getItem().getTitle() + ": " + items[i].getResponse() + "\n";
      message += items[i].getResponse();
    }

    UrlFetchApp.fetch(
    // Webhook URLを入れる
    "https://hooks.slack.com/workflows/xxxxx", // ここ
    {
        "method" : "POST",
        "contentType" : "application/json",
        "payload" : JSON.stringify({"message": message})
    }
    );
}
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/264ff6e4-1aad-41d5-01ee-7e3f193573d8.png)

### トリガー設定

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/144280b9-3366-4490-3fd4-71a38e0691e4.png)


## 完成

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/3d5f9908-ccbc-ca24-beb6-db499b6867b5.png)

何故これをおもいついたかというと社内Peing（匿名投稿） https://peing.net/ja/ が作れるよなあと思ったからでした。

以上です～
