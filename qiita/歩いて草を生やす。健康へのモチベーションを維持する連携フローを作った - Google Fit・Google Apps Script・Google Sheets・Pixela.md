とりあえず完成形がこれ。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/a4a469bd-bee8-12c2-170d-de3b2e34e0ce.png)

その後「頑張って濃い緑色を増やしたい」モチベーションは持続していて一定の効果有り。歯抜けの箇所はGASさんがエラーになっていた日ではある :sweat_smile: 
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/47e77b58-d0dd-16f8-9aa3-6143e1db2b5b.png)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d7749674-c0e1-2d8a-f5f0-45a912b69e72.png)


## 前提
筆者は、AndroidスマフォでGoogle Fitを使って歩数記録しています。在宅勤務も1年を超えてくると歩数とかだんだんどうでも良くなってきちゃいますね...
しかし暖かくなったし折角なので、プログラマーみんな大好き「[草](https://qiita.com/sta/items/2c1f0252a6a9ce5e2087)」の形で記録を見える化しモチベーション維持につなげたいと思いました。

https://play.google.com/store/apps/details?id=com.google.android.apps.fitness&hl=en&gl=US

## Pixela準備

https://github.com/a-know/Pixela

Pixela - Record and Track your habits or effort. All by API. な草サービスです。下準備として

https://qiita.com/e99h2121/items/59a80db4b107c76a3ff1

の要領でユーザーを作成しておきます。合わせて

```bat

curl -X POST https://pixe.la/v1/users/作成したユーザー/graphs -H 'X-USER-TOKEN:パスワード' -d '{"id":"my-daily-steps","name":"my-daily-steps","unit":"commit","type":"int","color":"shibafu"}'
{"message":"Success.","isSuccess":true}
```

などという要領で、グラフを作成しておきます。
https://pixe.la/v1/users/作成したユーザー/graphs/my-daily-steps.html など。


## Google Fitのデイリーの歩数と距離をGoogle Apps Script (以下GAS) でGoogle Sheetsに記録

ここから、以下を元に試した記録になります。

https://ithoughthecamewithyou.com/post/export-google-fit-daily-steps-to-a-google-sheet


>Google Fitは、Fitbitなどの専用トラッカーを持ち歩かなくても、毎日の歩数を記録することができる優れた方法です。しかし、そのデータを取り出すのは簡単ではありません。知る限り、唯一の方法はGoogle Takeoutですが、これは自動化のために作られたものではありません。幸いなことに、APIがあり、Google Sheetsでほとんどのことができます。

>もしあなたが歩数、体重、距離をエクスポートしたいと思っているなら、この記事に必要なものがすべて揃っていますので、以下の手順に従ってスプレッドシートを立ち上げてください。また、この記事はGoogle Apps ScriptでOAuth2を使用するための良い入門書であり、より複雑なGoogle Fitの統合のための適切な出発点となるでしょう。


### Google Sheetのシート作成
- 始めに、Googleシート、シートにアタッチされたApps Scriptプロジェクト、そしてFitness APIへのアクセスを提供するGoogle APIプロジェクトを作成する。
- Google Driveで新しいスプレッドシートを作成する。名前は任意。
- 最初のタブの名前を「Metrics」に変更する。
    - セルA1に「日付」、B1に「歩数」、C1に「距離」を入力する。
- 履歴を取得するために、「History」というタブも作成する。
- ツールメニューから「スクリプトエディタ...」を選択すると、新しいアプリのスクリプトプロジェクトが開く。

### Google Apps Script

- アプリケーションスクリプトプロジェクトに名前をつけて、リソースメニューから「ライブラリ...」を選択する。
- ライブラリを追加 より `1B7FSrk5Zi6L1rSxxTDgDEUsPzlukDsi4KGuTMorsTQHhGBzBkMun4iDF` と入力し、追加 をクリックする。これでGoogle OAuth2ライブラリが見つかります。
- 最新のバージョン（2021年4月時点で40）を選択し、「保存」します。
- ファイルメニューから「プロジェクトの設定」を選択し、スクリプトID（長い文字と数字の羅列）をメモしておく。

### Google API Console
- Google API Consoleを開く。
- 新しいプロジェクトを作成し、「Google Fit Sheet」のような名前を付ける。
- ダッシュボードから「APIとサービスの有効化」をクリックし、「フィットネスAPI」を見選択する。
- 次に「Keys」に進み、OAuthクライアントIDを作成する。
- 同意画面の作成を求められますが、入力する必要のあるフィールドは製品名（例：「My Fit App」等）だけでよい。次に、アプリケーションタイプとして「Web Application」を選択します。
- 名前と許可されたリダイレクトURLを設定する。
    - リダイレクトURLは、https://script.google.com/macros/d/{SCRIPTID}/usercallback。
    - {SCRIPTID}は先程メモした実際のスクリプトID。
- 以上を追加した後、クライアントIDとクライアントシークレットをメモしておく。


### 再度GASプロジェクト

以下のコードを コード.gs ウィンドウに貼り付けます。
★で示した部分は筆者がPixela用にカスタムした部分なので、適宜取捨してご利用を。

```js
var ClientID = 'クライアントID';
var ClientSecret = 'クライアントシークレット';

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Google Fit')
      .addItem('Authorize if needed (does nothing if already authorized)', 'showSidebar')
      .addItem('Get Metrics for Yesterday', 'getMetrics')
      .addItem('Get Metrics for past 60 days', 'getHistory')
      .addItem('Reset Settings', 'clearProps')
      .addToUi();
}

function getMetrics() {
  getMetricsForDays(1, 1, 'Metrics');
}

function getHistory() {
  getMetricsForDays(1, 60, 'History');
}

// see step count example at https://developers.google.com/fit/scenarios/read-daily-step-total
// adapted below to handle multiple metrics (steps, weight, distance), only logged if present for day
function getMetricsForDays(fromDaysAgo, toDaysAgo, tabName) {
  var start = new Date();
  start.setHours(0,0,0,0);
  start.setDate(start.getDate() - toDaysAgo);

  var end = new Date();
  end.setHours(23,59,59,999);
  end.setDate(end.getDate() - fromDaysAgo);
  
  var fitService = getFitService();
  
  var request = {
    "aggregateBy": [
      {
        "dataTypeName": "com.google.step_count.delta",
        "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
      },
      {
        "dataTypeName": "com.google.distance.delta",
        "dataSourceId": "derived:com.google.distance.delta:com.google.android.gms:merge_distance_delta"
      }
    ],
    "bucketByTime": { "durationMillis": 86400000 },
    "startTimeMillis": start.getTime(),
    "endTimeMillis": end.getTime()
  };
  
  var response = UrlFetchApp.fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
    headers: {
      Authorization: 'Bearer ' + fitService.getAccessToken()
    },
    'method' : 'post',
    'contentType' : 'application/json',
    'payload' : JSON.stringify(request, null, 2)
  });
  
  var json = JSON.parse(response.getContentText());
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(tabName);
  
  for(var b = 0; b < json.bucket.length; b++) {
    // each bucket in our response should be a day
    var bucketDate = new Date(parseInt(json.bucket[b].startTimeMillis, 10));
    
    var steps = -1;
    var distance = -1;
    
    if (json.bucket[b].dataset[0].point.length > 0) {
      steps = json.bucket[b].dataset[0].point[0].value[0].intVal;
    }
    
    if (json.bucket[b].dataset[1].point.length > 0) {
      distance = json.bucket[b].dataset[1].point[0].value[0].fpVal;
    }
    
    //-- ★ここから: Pixela用に Steps 数に応じてPixela をキックする。
    i = 0;
    var n = steps/1000;
    n = Math.floor(n)
    while (i<n) {
      myFunctionToPixela();
      i++;
    }
    //-- ★ここまで: Pixela用に Steps 数に応じてPixela をキックする。
    sheet.appendRow([bucketDate,
                     steps == -1 ? ' ' : steps, 
                     distance == -1 ? ' ' : distance]);
  }
}

// functions below adapted from Google OAuth example at https://github.com/googlesamples/apps-script-oauth2

function getFitService() {
  // Create a new service with the given name. The name will be used when
  // persisting the authorized token, so ensure it is unique within the
  // scope of the property store.
  return OAuth2.createService('fit')

      // Set the endpoint URLs, which are the same for all Google services.
      .setAuthorizationBaseUrl('https://accounts.google.com/o/oauth2/auth')
      .setTokenUrl('https://oauth2.googleapis.com/token') //https://accounts.google.com/o/oauth2/token

      // Set the client ID and secret, from the Google Developers Console.
      .setClientId(ClientID)
      .setClientSecret(ClientSecret)

      // Set the name of the callback function in the script referenced
      // above that should be invoked to complete the OAuth flow.
      .setCallbackFunction('authCallback')

      // Set the property store where authorized tokens should be persisted.
      .setPropertyStore(PropertiesService.getUserProperties())

      // Set the scopes to request (space-separated for Google services).
      // see https://developers.google.com/fit/rest/v1/authorization for a list of Google Fit scopes
      .setScope('https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.body.read https://www.googleapis.com/auth/fitness.location.read')

      // Below are Google-specific OAuth2 parameters.

      // Sets the login hint, which will prevent the account chooser screen
      // from being shown to users logged in with multiple accounts.
      .setParam('login_hint', Session.getActiveUser().getEmail())

      // Requests offline access.
      .setParam('access_type', 'offline')

      // Forces the approval prompt every time. This is useful for testing,
      // but not desirable in a production application.
      //.setParam('approval_prompt', 'force');
}

function showSidebar() {
  var fitService = getFitService();
  if (!fitService.hasAccess()) {
    var authorizationUrl = fitService.getAuthorizationUrl();
    var template = HtmlService.createTemplate(
        '<a href="<?= authorizationUrl ?>" target="_blank">Authorize</a>. ' +
        'Close this after you have finished.');
    template.authorizationUrl = authorizationUrl;
    var page = template.evaluate();
    SpreadsheetApp.getUi().showSidebar(page);
  } else {
  // ...
  }
}

function authCallback(request) {
  var fitService = getFitService();
  var isAuthorized = fitService.handleCallback(request);
  if (isAuthorized) {
    return HtmlService.createHtmlOutput('Success! You can close this tab.');
  } else {
    return HtmlService.createHtmlOutput('Denied. You can close this tab');
  }
}

function clearProps() {
  PropertiesService.getUserProperties().deleteAllProperties();
}

//-- ★ここから: Pixela用関数。

var headers = {
  'X-USER-TOKEN': 'Pixelaのトークン'
};

var options = {
  'method' : 'put',
  'contentType': 'application/json',
  'payload' : '',
  'headers' : headers,
  'muteHttpExceptions': true
};

function myFunctionToPixela() {
  var json = UrlFetchApp.fetch('https://pixe.la/v1/users/yamada-n/graphs/my-daily-steps/increment', options).getContentText();
  var jsonData = JSON.parse(json);

  //返り値は {"message":"Success.","isSuccess":true
  var message = jsonData['message'];
 }

//-- ★ここまで: Pixela用関数。


``` 


### Script について
- コードの一番上にて、APIコンソールのClient IDとClient Secretを入力する。
- Googleシートに戻ってリロードする。リロードすると、Google Fitのメニューが表示される。
- まず「Authorize...」を選択します。スクリプトを認証する画面が出てくる。
- サイドバーにリンクが表示されるので、リンクをクリックして、Google Fitデータにアクセスするスクリプトを承認。
- その後サイドバーを閉じて、Google Fitメニューから「昨日のMetricsを取得」を選択する。
- スプレッドシートに新しい行が追加され、昨日の日付とフィットネスデータが表示される。


### 最後に
- データの取り込みを自動化する。編集メニューから「現在のプロジェクトのトリガー」を選択します。`getMetrics() `を一日のうちで時間指定で実行するトリガーを追加します（午前5時から6時の間がお勧め）。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/71f9c518-83e8-985a-1c47-5206a86d8cd1.png" width=50%>

始めたばかりなのでまだまだ草の生え始めですが、頑張って濃い芝生を作りたくなりますよね...？
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/a4a469bd-bee8-12c2-170d-de3b2e34e0ce.png)

- 「通知」をクリックすると、Google Fitの認証が切れた場合など、何か問題が発生した場合にメールで通知することができる（その場合は、再度Google Fitメニューから認証を行う）。
- スプレッドシートは毎日、前日の歩数が自動的に更新される。チャートや移動平均を追加したり、他のシステムにエクスポートしたりできる。

- このスクリプトで認証がうまくいかず、APIから400エラーが返ってくるようになった場合。Google Fitアプリを起動し、下部のプロファイルアイコン、右上の設定アイコンをクリック。「接続されているアプリを管理」をクリックし、Google Fitからスクリプトを切断する。最後に、シートのメニューから「設定をリセット」を実行し、再度認証を行う。


## その他参考

参考にしたもの、個別の技術トピックのまとめです。
[OAuth2.0完全に理解した](https://zenn.dev/e99h2121/articles/19a722adf116c3)
[Pixelaで何でも草を生やす](https://qiita.com/e99h2121/items/59a80db4b107c76a3ff1)

https://github.com/googleworkspace/apps-script-oauth2

https://developers.google.com/fit/scenarios/record-steps


そして健康になる。

### 健康記事

https://zenn.dev/mattn/articles/cac1a9048c3935

https://qiita.com/PopomPro/items/7155bc46a31e87bdc368

https://zenn.dev/kdnakt/scraps/92734381d4595c


皆様のモチベーション維持に参考になれば、さいわいです。
