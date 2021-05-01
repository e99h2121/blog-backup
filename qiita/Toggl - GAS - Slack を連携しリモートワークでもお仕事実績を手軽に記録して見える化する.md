表題の通り、日々のお仕事実績を各ツールを連携させて見える化した、という連携ツール構築メモです。運用しての所感みたいな話はまた別途書きます。まずは、それぞれ仕組み的にどうするかのお話。

## 使用するツール達

表題の通り Toggl - GAS - Slack です。順番に書きます。

### 1. Toggl

タイムトラッキングツールです。

https://toggl.com/track/

https://qiita.com/makky_tyuyan/items/66e98295c9f5d841580b

その日の実績を入れていきます。あまり細かいと疲れそうなのでお好みで使えるといいですね。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/71126f54-6c74-6824-6b43-a1b82b095538.png)

#### Toggl Chrome extension

とはいえ良い感じにお仕事ペースをキープしたい意欲はあります。
Chrome拡張を入れてボタンをポチると気持ちが切り替わる気がします。

https://chrome.google.com/webstore/detail/toggl-track-productivity/oejgccbfbmkkpaidnkphaiaecficdnfn?hl=ja

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/47ffe264-0e4f-1033-5da8-885135848346.png)

#### Google Calendar
予めの予定はGoogle Calendarと連携して使えるのが便利です。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/9fe1a9da-0e5a-2bd3-38de-fbbe93d5a368.png)


#### API Token 
Profile 画面にAPI Tokenというのがあるので取得しておきます。あとでGASで使います。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/3f267bac-d9e5-60b0-f0d4-29e284114a0b.png)


### 2. Slack

https://qiita.com/kojimadev/items/ea8825dec1b0d0d2874c

2つ目はおなじみSlackです。「分報」を記録する個人チャンネルを用意しておきます。
`#times_yamada` 等など。

#### Slack ワークフロービルダー
[[所要時間1時間]GASでWork fun なSlack botをさくっと実装してみた](https://qiita.com/saba_can00/items/ae753995955a57e7b41b)

> 1. Slackのワークフロービルダーで[Webhook]のワークフローを作成して、投稿用のURLを取得する (参考：ワークフロービルダーガイド）
> 2. Webhookの変数設定でGASから送信する「名言」を受け取るための「変数(ここではword)」を設定する

作成した分報にメッセージがポストできるように、以上の設定を済ませておきます。



### 3. Google Apps Script (GAS)

もっともプログラム風なところです。

#### Google Sheets 

記録用スプレッドシートを用意しておきます。後述のGASスクリプトの都合上、`daily` という名称のタブシートにしています。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/09a79037-651b-a538-987a-3f38dd6ba428.png)


#### GASスクリプト本体

https://github.com/e99h2121/toggl-to-slack/blob/master/Code.gs

```jss
// 自身のSpleadsheet URLに書き換える。上で用意したURLです。まあ、無くてもいいです。
const ssurl = 'https://docs.google.com/spreadsheets/d/hogehogehoge';
// 自身のSlack WebHookのURLに書き換える。Slack ワークフロービルダーのところで取得した投稿用URLです。
const slackurl = 'https://hooks.slack.com/workflows/xxxxx/zzzzzz';
// 自身のToggl の API Tokenに書き換える。TogglのAPI Tokenのところで取得したTokenです。
const authkey = '{your toggl token}:api_token';

// Slackに投稿するためのAPIリクエスト
var Slack = {
  post: function(message){
    var url = slackurl;
    var payload = {
      text: message
    };
    var options = {
      'method': 'POST',
      'contentType': 'application/json',
      'payload': JSON.stringify(payload)
    }
    var response = UrlFetchApp.fetch(url, options);
    return response;
  },
}

// Toggl APIにアクセスするための各種エンドポイント
var Toggl = {
  BASIC_AUTH: authkey,

  get: function(path){
    var url = 'https://www.toggl.com/api/v8' + path;
    var options = {
      'method' : 'GET',
      'headers': {"Authorization" : "Basic " + Utilities.base64Encode(this.BASIC_AUTH)}
    }
    var response = UrlFetchApp.fetch(url, options);
    return JSON.parse(response);
  },
  getTimeEntries: function(){
    var path = '/time_entries'
    return this.get(path)
  },
  getProject: function(id) {
    var path = '/projects/' + id
    return this.get(path);
  }
}

// 日付レイアウトの変換メソッド
function dateStyle(date, format) {
    format = format.replace(/YYYY/, date.getFullYear());
    format = format.replace(/MM/, date.getMonth() + 1);
    format = format.replace(/DD/, date.getDate());
    return format;
}

// 実行メソッド
function main() {
  var now = new Date();
  var yesterday = dateStyle(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1), 'YYYY/MM/DD'); //昨日の日付を整形して取得
  var timeEntries = Toggl.getTimeEntries();
  var data = []; // Slackに投稿するためのタスクをストックする変数

  // タスク一覧を一つずつ配列にpush
  var len = timeEntries.length;

  for(let i=0; i<len; i++) {
    var timeEntry = timeEntries[i]; // タスク一覧から一つずつ取得
    // タスクのプロジェクトidからプロジェクト名を取得しない場合は、エラーになるので、else処理
    var projectName = 'pid' in timeEntry ? Toggl.getProject(timeEntry.pid).data.name : 'No Project';
    var targetEntryDate = timeEntry.start.substr(0,10).split('-'); // タスクの日付をして取得
    var entryStart = dateStyle(new Date(targetEntryDate[0], targetEntryDate[1] - 1, targetEntryDate[2]), 'YYYY/MM/DD') // タスクの日付レイアウト整形

    if(i===0) {
      // 日付の情報は一つでいいので、一度だけpush
      data.push('*' + yesterday + 'のレポート*')
    }
    if(entryStart === yesterday) {
      // 昨日のタスクだけpush（投稿イメージ：【プロジェクト名】タスク名　40分）
      data.push('【' + projectName + '】 *' + timeEntry.description + '*　' + Math.round(timeEntry.duration/60/60*60) + '分')
    }
   Utilities.sleep(1000); //Too many requests と言われたので回避
  }

  // 実績がない日(タイトルのみ1行の日、土日祝など)はここで終了
  if (data.length == 1) {
    return;
  }
  
  // スプレッドシートに実績投稿
  postSpreadSheet(data);

  // Slackに実績投稿
  data.push('see :' + ssurl);
  postSlack(data);

}


function postSlack(message) {
  // Slackに投稿　昨日のタスクの配列を改行コードでjoinしてまとめてSlackにPOSTする。
  Slack.post(message.join('\n'))
}

function postSpreadSheet(message) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  // 書き込みタブの名前と揃える。
  var sheet = ss.getSheetByName('daily');
  sheet.appendRow([message.join(',')]);
}
```

## Almost done!

GASスクリプトを夜中の0時～5時位に走らせるよう、時間指定で設定しておくと良いと思います。Slackに実績が運ばれてきます。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/9ecd05db-8546-ff32-1036-f9870463b7f5.png)


ギッチギチに時間を実績記録して報告してとやっていると少々窮屈かもしれません。ゆるりと報告、共有する前提理解のある職場なら意識せず日常を記録するのもなかなかおもしろいのではと思います。しばらく続けてみての気づきはまたまとめます。

以上お疲れさまでした。Happy Timetracking!

## 参考記事

https://qiita.com/saba_can00/items/ae753995955a57e7b41b

https://qiita.com/yokozawa0701/items/e4c392bd0afe9902e51d

https://ajike.github.io/slack-toggl-gas/
