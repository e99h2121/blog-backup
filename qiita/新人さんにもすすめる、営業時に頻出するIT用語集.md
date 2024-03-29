社内に `#z_study_営業時に頻出するit用語` という対営業チーム（非エンジニア）向けのチャンネルがあることを知った。用語をストックしたらかなり有用ではと感じたので記事にしておく。基本スタンスは以下である... :smirk: 

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d2dfa614-219a-2b0c-5a2e-92e3884a16a1.png)

一般に対エンジニアにならもう少し突っ込んで説明したい語句もあるが、思い切って割愛しています。同様、非エンジニアに向けて用語を何度も説明するのはツライな、と思うすべての方の参考になればさいわいです。増えたら追記予定、追記リクエストもぜひ。



## 0 to 9, A to Z, 五十音順

### 3層アーキテクチャ

https://www.ibm.com/jp-ja/cloud/learn/three-tier-architecture

> プレゼンテーション層（ユーザー・インターフェース）、アプリケーション層（データを処理する層）、データ層（アプリケーションに関連付けられたデータを保管・管理する層）です。

### AD

[Active Directory - Wikipedia](https://ja.wikipedia.org/wiki/Active_Directory)


### AWS Direct Connect 

https://aws.amazon.com/jp/directconnect/

### AWS Private Link

https://aws.amazon.com/jp/privatelink/

https://www.skyarch.net/column/aws-privatelink/

### AWS Well-Architected フレームワーク

[AWS Well-Architected – 安全で効率的なクラウドアプリケーション](https://aws.amazon.com/jp/architecture/well-architected/?wa-lens-whitepapers.sort-by=item.additionalFields.sortDate&wa-lens-whitepapers.sort-order=desc)

### BGP

[BGP（Border Gateway Protocol）とは 【ルータ】 - 意味をわかりやすく - IT用語辞典 e-Words](https://e-words.jp/w/BGP.html)
> ネットワーク間の経路情報を通信機器間で交換する手順を定めたプロトコル（通信規約）の一つ。
> インターネットで組織間の接続をおこなう



### Grepとは

https://www.weblio.jp/content/GREP

> grepとは、テキストファイルから文字列を検索するプログラムの名称である。もともとは、UNIXのコマンドの一つであったが、MS-DOSやWindowsにも移植され用いられている。

### HTTPステータスコード

[HTTP レスポンスステータスコード - HTTP | MDN](https://developer.mozilla.org/ja/docs/Web/HTTP/Status)

> 成功レスポンス (200–299)
> クライアントエラーレスポンス (400–499)
> サーバーエラーレスポンス (500–599)


### IaaS, PaaS, SaaS

[IaaS、 PaaS、 SaaS - 日本 | IBM](https://www.ibm.com/jp-ja/cloud/learn/iaas-paas-saas)

> **IaaS**: クラウドのストレージ、ネットワーキング、サーバー、その他のコンピューティング・リソースへの従量制課金によるアクセス
**PaaS**: アプリケーションの作成と配信に使用できるクラウド・ベースの環境へのアクセス
**SaaS**: ソフトウェアをサブスクライブ


たとえるならば

> オンプレ：持ち家
IaaS：借家
SaaS：ホテル


> オンプレ：自家用車
IaaS：レンタカー
SaaS：タクシー


### ISO9001, ISO14001, ISO27001

https://emeao.jp/guide/privacymark/privacymark-knowlege/post-1482/


IPSEC, TCP/IP, BGP, SSL handshake , anyconnect


### IOPS

[IOPS（Input/Output Per Second）とは - 意味をわかりやすく - IT用語辞典 e-Words](https://e-words.jp/w/IOPS.html)

> ハードディスクやSSDなどのストレージ（外部記憶装置）の性能指標の一つで、ある条件の元で1秒間に読み込み・書き込みできる回数

似たところで

スループット: 一定時間にどれだけのデータを転送できるか
レイテンシ: 処理や転送の際にかかる一回毎の遅延時間


### IPsec

[IPsecとは？意味・定義 | ITトレンド用語 | NTTコミュニケーションズ](https://www.ntt.com/bizon/glossary/e-i/ipsec.html)

> IPsec（Security Architecture for Internet Protocol）とは、暗号化によってパケットの秘匿や改ざん検知を実現するプロトコル


### JDBC

https://e-words.jp/w/JDBC.html

> Javaプログラムからデータベースにアクセスするための標準インターフェース（API）の一つ



### NTP

https://www.idcf.jp/words/ntp.html

> TCP/IPネットワークを通じてやりとりする NTP（Network Time Protocol）


### OAuth

https://tech-lab.sios.jp/archives/25470

[OAuthのリソースアクセスの分類と必要な実装](https://zenn.dev/ritou/articles/5f52262cd1bdf5)

- 認可
- トークン
- リソースへのアクセス



### RTO, RPO, RLO

[「RPO」と「RTO」と「RLO」の違い｜「分かりそう」で「分からない」でも「分かった」気になれるIT用語辞典](https://wa3.i-3-i.info/diff146recovery.html)
[BCPにおけるRPO、RTO、RLOの違いとは？策定方法も解説｜緊急連絡網・安否確認システム「オクレンジャー」](https://www.ocrenger.jp/archives/3806/)


### SAML

https://www.cybernet.co.jp/onelogin/function/saml.html


### SLA, SLO, 稼働率

https://pfs.nifcloud.com/navi/tech/slo.htm

[契約トラブル回避のススメ つかんでおきたい「SLA」と「SLO」のちがい | NTTコミュニケーションズ 法人のお客さま](https://www.ntt.com/business/services/management/operations-management/global-management-one/column/sla_slo.html)

Service Level Agreement, Service Level Objective

### SMTP

https://time-space.kddi.com/ict-keywords/kaisetsu/20170824/2081

メール送信。受信はPOP

### SSL handshake 

[TLS | SSLハンドシェイクの プロセスは？ | Cloudflare](https://www.cloudflare.com/ja-jp/learning/ssl/what-happens-in-a-tls-handshake/)



### TCP/IP

[TCP/IPとは？通信プロトコルの階層モデルを図解で解説 | ITコラム｜アイティーエム株式会社](https://www.itmanage.co.jp/column/tcp-ip-protocol/)
> インターネットを含む多くのコンピュータネットワークにおいて、世界標準的に利用されている通信プロトコル




### WebAPI

https://www.web-knowledge-info.com/wp/web_basic_knowledge23/

https://qiita.com/e99h2121/items/75cb438bcafc457a2fa1

### オフサイト, オンサイト

https://e-words.jp/w/%E3%82%AA%E3%83%95%E3%82%B5%E3%82%A4%E3%83%88.html

### カーソル

カーソルは、表の中の1行を特定する仮想的な道具です。カーソルを使用して処理の対象とする行を特定しておいて、その行からデータを取り出したり、その行を更新したり、または削除したりすることができます。カーソルにより行を特定することを、カーソルを位置づけるといいます。
[カーソルの概念](https://software.fujitsu.com/jp/manual/manualfiles/M070075/J2X01638/01Z200/sqlbg04/sqlbg033.html)


### 外字

https://www.tlp.jp/column/20190604.html

### 環境変数

WindowsやUnixなどで割り当てられるパラメータ(本ページも参照)のこと。この変数を定義する事によりプログラム内で参照したりする。実行時に実際にどのような環境変数が定義されているかを見る場合には、Windowsの場合には、ProcessExplorerなどが便利。


### 記録媒体の破棄

https://www.soumu.go.jp/main_sosiki/joho_tsusin/security/business/admin/18.html

https://ja.wikipedia.org/wiki/2019%E5%B9%B4%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8CHDD%E8%BB%A2%E5%A3%B2%E3%83%BB%E6%83%85%E5%A0%B1%E6%B5%81%E5%87%BA%E4%BA%8B%E4%BB%B6

### キュー

待ち行列。先に入れたデータが先に出るというデータ構造の一種。いわゆる先入れ先出し。逆はスタック。


### クライアント

サーバーと対比して利用される用語で、要求を送る側のマシンの呼称。一般的に、通常のマシンはクライアントに分類される。

### クラウドコンピューティング

https://aws.amazon.com/jp/cloud/

https://aws.amazon.com/jp/types-of-cloud-computing/?nc1=h_ls

https://www.ibm.com/jp-ja/cloud/learn/cloud-computing

### コンパイル

ソースコードから直接コンピュータが実行できる形式(exeなど)に変換すること。

### サーバー

サービスを提供するマシンの事。このサービスを受ける端末でありクライアントと対比される。例えば、ファイルを格納するためのディスクを提供しているマシンはファイルサーバなどと呼ばれる。多くのユーザからアクセスされる事から比較的高性能のマシンが利用される。

[「いちばんやさしい新しいサーバーの教本」を流し読みした要点と図説 - Qiita](https://qiita.com/e99h2121/items/7ecbbf43c7cb1a1e10cc)

[サーバーとは - Qiita](https://qiita.com/medit_project/items/f3b658d1a1595a13fa3a)

### シングルサインオン

一度、ログインすればその後のログインを省略できる仕組みの事の総称。略してSSOとも呼ばれる。

https://atmarkit.itmedia.co.jp/ait/articles/0212/19/news001.html


### 冗長化

https://ja.wikipedia.org/wiki/%E5%86%97%E9%95%B7%E5%8C%96

https://business.ntt-east.co.jp/content/cloudsolution/column-74.html

https://qiita.com/tnoce/items/313a9aaa65206a3638f8


### 推奨, 非推奨

https://e-words.jp/w/%E9%9D%9E%E6%8E%A8%E5%A5%A8.html

https://blog.cles.jp/item/6357

### ストレージ

[ファイルストレージ オブジェクトストレージ ブロックストレージ とは - Qiita](https://qiita.com/miyuki_samitani/items/ab5af419d935710e2f29)

### スワップ

プログラムが実行された場合、基本的にはメモリ上で動作することになる。しかし、このメモリの使用量が実際につんであるメモリの容量に対して不足した場合に、ＣＰＵは(使われないだろうと判断された)メモリの内容を一時的にハードディスクに移す事によってメモリの量を節約する。この状況をスワップと言う。

ハードディスクへの書込みはメモリの処理と比べると比較すると非常に遅く、プログラムの動作にも影響がでるため、開発者はスワップが発生しないように開発時に意識する必要がある。


### ターンアラウンドタイム, レスポンスタイム

https://itmanabi.com/responsetime-turnaroundtime/

### 二相コミット

複数のテーブルに同時に更新をかけるとき、AのテーブルにはうまくINSERTされたのに、BのテーブルへのINSERTは失敗した場合、データに不整合がおきてしまいます。そのような状況を防ぐための、処理全体をつかさどるサーバーがA、B両方ともうまくいった場合にのみCOMMIT発行の許可を出し、どこか一つでも失敗したらロールバックを走らせるという仕組みを二相コミットと言います。

http://e-words.jp/w/2E79BB8E382B3E3839FE38383E38388.html

読み物: [翻訳: スターバックスは2フェーズコミットを使わない | Ouobpo](https://ameblo.jp/ouobpo/entry-10070039150.html)


### 二要素認証, 二段階認証

https://eset-info.canon-its.jp/malware_info/special/detail/210311.html

### パラメータ

プログラムが動作する上での実行条件のこと。この値によりプログラムの挙動は異なる。


### 表領域

テーブルのデータなどを格納する場所の事。物理的なディスクに対して割り当てを行い、これを割り当てた後は、ディスクを意識させない。表領域がいっぱいになると、データベースはエラーを検知し、それ以上のデータは格納できなくなる。




### プライベートクラウド

https://www.idcf.jp/words/private-cloud.html

### ペネトレーションテスト

https://ja.wikipedia.org/wiki/%E3%83%9A%E3%83%8D%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%86%E3%82%B9%E3%83%88



### マイクロサービス

https://www.ibm.com/jp-ja/cloud/learn/microservices


### リージョンとアベイラビリティーゾーン

https://aws.amazon.com/jp/about-aws/global-infrastructure/regions_az/


### レイテンシー

[レイテンシとは (latency)： - IT用語辞典バイナリ](https://www.sophia-it.com/content/%E3%83%AC%E3%82%A4%E3%83%86%E3%83%B3%E3%82%B7)

### レガシーシステム

古いシステムと言う事。「時代遅れ」というネガティブなニュアンスを含む場合もある。


## おわりに

to. 営業各位 もうしわけないですが、ここにない用語はググってみてください :monkey_face: 
以下は他にもある、非エンジニアに向けて説明している・有用とおもう、その他記事です。

[「分かりそう」で「分からない」でも「分かった」気になれるIT用語辞典](https://wa3.i-3-i.info/index.html)
[不思議の国のSE用語 - Qiita](https://qiita.com/t_nakayama0714/items/478a8ed3a9ae143ad854)
[非エンジニアにクラウド技術の良さを伝えてみる - Qiita](https://qiita.com/muson0110/items/402a094a339b10f2b25e)
[「◯◯をサポートしていますか？」という質問をなくしたい - Qiita](https://qiita.com/flyaway/items/e15b92290046685a8703)
[自他に「対抗する」テクニカルサポートの目次 - Qiita](https://qiita.com/e99h2121/items/2b1aa533c89394ddc994)
[非エンジニアに向けてクラウドサービスについて簡単に説明してみた - Qiita](https://qiita.com/shimajiri/items/a49eddc4230ee9d73e35)
[非エンジニアに向けてWeb APIを簡単に説明してみた - Qiita](https://qiita.com/shimajiri/items/7ea687b62255a82a2eca)
[非エンジニアに向けてPythonを簡単に説明してみた - Qiita](https://qiita.com/shimajiri/items/74aa1487499321910d8f)

以上です～
