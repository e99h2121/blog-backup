[2020年のうちに読んでおきたい2020年アドベントカレンダーをピックアップ](https://qiita.com/e99h2121/items/dfb5004f429e352567c4) に伴いクソアプリアドベントカレンダーを読んだ。で、「[友達がいなくて寂しいので友達を作った（LineBot）](https://qiita.com/Yui_active/items/04ccc89164c6bb57b09b)」(クソなタイトルである:smiley:) に伴い、Google Colaboratoryというものをよく知らなかったので調べた。

Google Colaboratory便利だ！便利なのにGSuiteで余り使われていない気がするから使おう！という記事です。


## ポイント
1. **Python**使える
2. だから**簡単なスプレッドシート、CSV、その他整形**に使える
3. そして**共有簡単**

### 概説：[Google Colaboratoryで初めての機械学習](https://qiita.com/mafunity_/items/464d70915c1815e9a628)

> Colab ノートブックは、Colab がホストする Jupyter ノートブックです。Jupyter プロジェクトの詳細については、[jupyter.org をご覧ください。](https://jupyter.org/)

ともかくPythonコードを共有して実行できる、GSuite利用企業的には期待が広がるツール。機械学習というよりちょっとした神エクセル作るくらいならこれ使ったほうが夢あるよという話である。機械学習という言葉に恐れる必要はなく。以下基本中の基本から、できること、便利なことと、できないこと、べからずまでを書くので参考になると嬉しいです。

### 基本：Helloworld
テストコードを実行してみよう。再生ボタン押すだけ。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/0bef49a6-006b-b357-44ac-e48e4bd7559b.png)

## 1. Python使える
普段Pythonを主開発で触らないのでこれはチャンス。
Slackにメッセージ送信もできます。

### Slackにメッセージ送信
以下、pythonとWebhookでSlackにメッセージ送信するPython。

[Slackに送信する](https://qiita.com/Daara_y/items/c4b01107bc6191b9fbff#%E3%82%B9%E3%82%AF%E3%83%AC%E3%82%A4%E3%83%94%E3%83%B3%E3%82%B0%E3%81%97%E3%81%9F%E7%B5%90%E6%9E%9C%E3%82%92slack%E3%81%AB%E9%80%81%E4%BF%A1%E3%81%99%E3%82%8B)
[PythonでSlackのIncoming Webhookを試してみる](https://qiita.com/bakira/items/8fa06ab10edf1f42ff97)
Webhookはワークフロービルダーからも設定できるこれ。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/e03a8245-1ab0-f66c-8724-4dc59271b5d8.png)
でメッセージを送るとこうなる。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/7062ee7b-2a6a-7fbf-2672-379fa96dd76f.png)

```py
import requests, json;
from bs4 import BeautifulSoup;
web_hook_url = 'https://hooks.slack.com/services/xxxxxxxxxx/xxxxxxxxxx/xxxxxxxxxx'

requests.post(web_hook_url, data = json.dumps({
    'text': 'Slackでありますまいか', # 送りたい内容ですぞ
    'username': 'ありますまいか'  # botの名前ですぞ
}));
```

Colab上ではこう。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/b288b5e2-a1b5-8c1e-7786-c7d728d20139.png)
以上。


## 2. だから簡単なスプレッドシート、CSV、その他整形に使える
有用そうなのがこれ。某かのファイルからデータ読込ができる。

まずCSV：[How to read csv to dataframe in Google Colab](https://stackoverflow.com/questions/48340341/how-to-read-csv-to-dataframe-in-google-colab) 
これは見る限り [Python Pandas PyInstallerで5日間で「操作ログ」CSV整形ツールを作る](https://qiita.com/e99h2121/items/ffbaf882d777283e2992) 等と組み合わせると便利。

以下サンプルCSVを読み込んだところ。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/976eb8cd-b439-b367-da52-198647795a00.png)
ついでに[操作ログ](https://qiita.com/e99h2121/items/ffbaf882d777283e2992)も試してみたら動いた。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/3ffa931f-be1c-424f-7d72-4c0582096675.png)

[Colaboratoryのデータの入出力まとめ](https://qiita.com/5at00001040/items/d7867974d2fd1d21dbbf) で網羅されているので参照のこと。

### CSV集計
[はてなブックマーク3万件にみる技術トレンド2020年まとめ](https://qiita.com/lilpacy/items/ef4ae5e08bd2d001f821) 等よろしく問合せ傾向分析のようなことも試せそう。

## 3. そして共有簡単
で、せっかくなら皆に使ってもらいたいですよね。
はい、普段のGSuiteの使い方と一緒です。権限を与えてシェア。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/062934dd-208a-e670-c963-99951ce061ca.png)


## ところで :thinking: 

そうなると。これ[GASとかと連携](https://qiita.com/cold-wisteria/items/640d50edeffea05dae86)したら相当便利そうだなと思いませんでしょうか。私は思いました。以下は使用上の留意点です。

### [できない] 自動実行

現状：[できない。](https://qiita.com/Fortinbras/items/4cfa9269af2ab8d1d4d5) ようです。
[Selenium](https://qiita.com/Fortinbras/items/4cfa9269af2ab8d1d4d5#%E5%AE%9A%E6%9C%9F%E5%AE%9F%E8%A1%8C%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6) とか、[無理やり定期実行させる仕掛け](https://stackoverflow.com/questions/61762045/running-google-colab-every-day-at-a-specific-time) でどうにかしているようだ。少々トリッキー。

### [できないこともある] スクレイピング

冒頭の[友達がいなくて寂しいので友達を作った（LineBot）](https://qiita.com/Yui_active/items/04ccc89164c6bb57b09b)で行われていたスクレイピングというものに戻ると、例えば以下が詳しい。[PythonでHTMLを解析してデータ収集してみる？ スクレイピングが最初からわかる『Python 2年生』](https://codezine.jp/article/detail/12230)

```scraiping_sample.py
import requests
from bs4 import BeautifulSoup

# Webページを取得して解析しますぞ
load_url = "https://ameblo.jp/masayukimakino/entry-11084331526.html"
html = requests.get(load_url)
soup = BeautifulSoup(html.content, "html.parser")

# すべてのstrongタグを検索して、その文字列を表示しますぞ
for element in soup.find_all("strong"):    # すべてのstrongタグを検索して表示しますまいか
    print(element.text)
```

すると例えばこんなことができる。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/5f95b668-e76f-d73c-11e5-09b7e5bcafdc.png)
[スクレイピングは違法？3つの法律問題と対応策を弁護士が5分で解説](https://topcourt-law.com/internet_security/scraping-illegal) を読みましょう。

> 利用目的
スクレイピングの対象
アクセス制限の遵守
利用規約

[Webスクレイピングの注意事項一覧](https://qiita.com/nezuq/items/c5e827e1827e7cb29011)
[Webスクレイピングの法律周りの話をしよう！](https://qiita.com/nezuq/items/3cc9772118ad112c18dc)
を考えた上でうまくツール化する必要がある。よって要・勉強。[Qiitaのトレンド（ランキング）を取得してSlackに送信する](https://qiita.com/Daara_y/items/c4b01107bc6191b9fbff) 等先人の記事を参考に。
社内資料などなどを内部的に解析するには便利そう。


### [十分に注意] Githubに保存
もう一つ、私がやらかしそうだったので反省文兼ねて追記。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/3a44fb8a-919b-15a1-3880-47fb4fa4f882.png)

Githubにコピーを保存する簡単機能もついています。
が、社内利用する場合にはそれがGithubに公開されてしまうことになるので十分注意。



## 結論
冒頭に紹介したJupyterというやつ、[まだJupyter Notebook使ってるの? VS CodeでJupyter生活 (.py)で快適Pythonライフを?!](https://qiita.com/386jp/items/f023de9457c99b964a85) も参考にさらに発展利用させることができそう。
特にPython触ったことがない方、ちょっと試してみるにはお手軽です！
以上社内Gsuiteツールにまつわるお勧めでした。
