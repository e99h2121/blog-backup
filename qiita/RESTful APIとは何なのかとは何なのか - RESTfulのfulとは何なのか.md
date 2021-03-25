RESTful API とは何なのかについての、[RESTful APIとは何なのか](https://qiita.com/NagaokaKenichi/items/0647c30ef596cedf4bf2) という記事に対して、WebAPI含めて自分の理解を確認するために書いている。
> RESTful APIとは
RESTの原則に則って構築されたWebシステムのHTTPでの呼び出しインターフェースのこと。

以上を雰囲気で理解して割とそのままにしてきたひとはいるだろうか。私だ。
そんなの常識だろという方は、先に最後の「RESTfulのful とは」、「RESTとRESTfulの違いとは」について見ていただいてそれでも「ふーん」であれば、ブラウザバックしましょう、そういうレベル感の記事です。

##REST
**RE**presentational **S**tate **T**ransferの略
Representation は [表現](https://ja.wikipedia.org/wiki/Representational_State_Transfer#%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9) などの意。State = 状態。Transfer = 転送。

表現とは、[Webサーバの送信するリソースの形式](https://qiita.com/NagaokaKenichi/items/0f3a55e422d5cc9f1b9c#%E8%A1%A8%E7%8F%BE)。
リソースとは、[Web上に存在する情報、データのこと。](https://qiita.com/NagaokaKenichi/items/0f3a55e422d5cc9f1b9c#%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B)

RESTとは、Webサーバと、Web上に存在する情報、データの形式の、状態を、転送する 位の意味になりそう。


## [RESTの原則](https://qiita.com/NagaokaKenichi/items/0647c30ef596cedf4bf2#rest%E3%81%AE%E5%8E%9F%E5%89%87)

主に以下の4つの原則から成る。
よくある、「頭文字4つでREST」とかいうやつではない。

### 1. [アドレス可能性 (Addressability)](https://qiita.com/NagaokaKenichi/items/0f3a55e422d5cc9f1b9c#%E3%82%A2%E3%83%89%E3%83%AC%E3%82%B9%E5%8F%AF%E8%83%BD%E6%80%A7)

アドレス可能とは、提供する情報がURIを通して表現できること。全ての情報はURIで表現される一意なアドレスを持っている、ということ。
URIを通じてリソースを簡単に指し示せる性質であるということ。

#### URIとは
[URL と URI の違い](https://qiita.com/Zuishin/items/3bd56117ab08ec2ec818)
Uniform Resource Identifier 統一 資源 識別子 には

1. Uniform Resource Locator 統一 資源 位置指定子
1. Uniform Resource Name 統一 資源 名 

がある。この2つはいずれもURI。
つまり「アドレス可能である」という変な日本語は、 統一 資源 識別子によって、一意になり、Web上に存在するデータを、簡単に示す（＝アドレスできる）ことができる、ということ。


#### [エンドポイントとエントリポイント](http://memopct.blogspot.com/2013/07/blog-post.html)

**エンドポイント**：サービスを利用する側の視点
そのURLにアクセスさえすれば、それ以上何もしなくてもいい（APIに任せる）ので、エンド="終点" 

**エントリポイント**：サービスを提供する側の視点
URLにアクセスがあることでAPIサービスの処理が開始されるので、エントリ=”入り口” 

例えば自分の作ったシステムからgoogleのAPIを使うとしたら、GoogleのAPIのURLは自分にとってのエンドポイント。Googleから見たそのURLは処理が始まるポイント。だからエントリポイントになる。


### 2. [ステートレス性 (Stateless)](https://qiita.com/NagaokaKenichi/items/0f3a55e422d5cc9f1b9c#%E3%82%B9%E3%83%86%E3%83%BC%E3%83%88%E3%83%AC%E3%82%B9%E6%80%A7)

[ステートレスとステートフルって結局どう違うの？](https://qiita.com/mtakehara21/items/efcbbc3ba58a62c10eb6#%E3%82%B9%E3%83%86%E3%83%BC%E3%83%88%E3%83%AC%E3%82%B9%E3%81%A8%E3%82%B9%E3%83%86%E3%83%BC%E3%83%88%E3%83%95%E3%83%AB%E3%81%A3%E3%81%A6%E7%B5%90%E5%B1%80%E3%81%A9%E3%81%86%E9%81%95%E3%81%86%E3%81%AE)
これは有名なハンバーガー屋のやり取りの例。

```
客：ハンバーガーください。
店：ハンバーガーですね、ドリンクはいかがしましょうか？

客：ハンバーガーとコーラください。
店：ハンバーガーとコーラですね、サイドはいかがしましょうか？

客：ハンバーガーとコーラとポテトください。
店：ハンバーガーとコーラとポテトですね
 (以下略)
```
以上ステートレス。

```
客：ハンバーガーください。
店：ハンバーガーですね、ドリンクはいかがしましょうか？

客：コーラください。
店：コーラですね、サイドはいかがしましょうか？

客：ポテトください。
店：ポテトですね 
 (以下略)
```

以上がステートフル。

で、RESTfulはHTTPをベースにした「ステートレス」なクライアント/サーバプロトコルであること。つまりセッション等の状態管理をせず、やり取りされる情報がそれ自体で完結して解釈できること。
「ハンバーガーとコーラとポテトください現金で」なこと。

### 3. 接続性 (Connectability)
情報の内部に、別の情報や(その情報の別の)状態へのリンクを含めることができること。
リソースに、別のリソースへのリンクを含めることができること。
リソースに含まれるリンクをもとに別のリソースに接続可能となること。
リソース、くどいが、
[Web上に存在する情報、データ](https://qiita.com/NagaokaKenichi/items/0f3a55e422d5cc9f1b9c#%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B)。それに含まれるリンクをもとに、別の「Web上に存在する情報、データ」に接続可能となること、ということ。

### 4. 統一インターフェース (Uniform Interface)

4つ目。情報の操作 (取得、作成、更新、削除) は全てHTTPメソッド (GET、POST、PUT、DELETE) を利用する。
[GETとPOSTの違いについて](https://qiita.com/kanataxa/items/522efb74421255f0e0a1)
GETはURLに直接付加するので目でパラメータを見ることができる。
POSTはBodyに含めることが可能で目に見えない形での送信ができる。
[CRUD](https://qiita.com/fukulingo/items/a9e8d18467fe3e04068e#crud) と対比される。HTTPメソッドのうちGET、POST、PUT、DELETEは「CRUD」、つまり Create/Read/Update/Delete を満たす。

## WebAPIとRest(ful)API

[WebAPIの種類](https://qiita.com/NagaokaKenichi/items/df4c8455ab527aeacf02#web-api%E3%81%AE%E7%A8%AE%E9%A1%9E)として

- XML-RPC
- SOAP
- REST

がある。念のため[WebAPIとは](https://qiita.com/NagaokaKenichi/items/df4c8455ab527aeacf02#web-api%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%AA%E3%81%AE%E3%81%8B)
「厳格な定義はないが、広義にはHTTPプロトコルを用いてネットワーク越しに呼び出すアプリケーション間、システム間のインターフェース」。更に念のため、APIは、Application Programming Interface。
API実例：[郵便番号API](https://qiita.com/busyoumono99/items/9b5ffd35dd521bafce47#%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%81%A7webapi)

### WebAPIのサポート
自分にとって身近なので、ここに書いておく。
[メーカーはいかにしてWebAPIのテクニカルサポートを行うべきか？](https://note.com/hatanowf/n/n3594ac003e12) 等議論あり。

## RESTfulのful とは

4原則と超基本がわかったところで最後に、これはどこにも書いてなかったオマケ。
[RESTful API、REST APIと呼び方があるが、広義ではほぼ同じと考えて問題ない。](https://qiita.com/NagaokaKenichi/items/0647c30ef596cedf4bf2#restful-api%E3%81%A8rest-api%E3%81%AE%E9%81%95%E3%81%84)
とあるが、それでも気になる ful とはいったい何なのか。

以下に答えを発見した。

**What does the “ful” in RESTful mean?**
https://stackoverflow.com/questions/50047879/what-does-the-ful-in-restful-mean
**What's the difference between REST & RESTful**
https://stackoverflow.com/questions/1568834/whats-the-difference-between-rest-restful

> Representational state transfer (REST) is a style of software architecture. As described in a dissertation by Roy Fielding, REST is an "architectural style" that basically exploits the existing technology and protocols of the Web.

> RESTful is typically used to refer to web services implementing such an architecture.

ざっくり：
>REST（Representational State Transfer）は、ソフトウェアアーキテクチャのスタイルの一つ。ロイ・フィールディングの論文で述べられているように、RESTは基本的にWebの既存の技術とプロトコルを利用した「アーキテクチャスタイル」です。

> **RESTfulは、通常、そのようなアーキテクチャを実装したWebサービス**、という意味で使用されます。

つまり
> So REST is the architecture and RESTful an adjective?

→ RESTはアーキテクチャで、RESTfulは形容詞。**RESTなアーキテクチャ性があること、これすなわち、RESTful。**

Beautyは美で Beautiful は美しい。あ、そういう感じね～！つまりRESTful APIは「REST的な、REST性なAPI」、REST APIは「REST（というアーキテクチャの）API」ということで、結局雰囲気を理解した。スッキリしていただけたら幸いです。以上！

