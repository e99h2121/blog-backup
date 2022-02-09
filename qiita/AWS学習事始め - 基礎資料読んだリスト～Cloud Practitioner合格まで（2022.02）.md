## 感想

- 自宅受験の手順を把握することに一番緊張した。
- 難関: 部屋の確保。
    - [お風呂でAWS認定試験を受けて合格した話 - ailes blog](https://wing-degital.hatenablog.com/entry/2021/05/26/070416) ... まじか。 
    - 結局自宅の寒い寝室が一番片付いているため、寒い部屋で受験。
    - 幼児2名の居ない平日昼間を予約。
    - 部屋の4面写せとかカメラぐるっと回せとか本当に言われるんですね。
    - SlackとかDockerとかプロセスを落とさないといけない。システムテストはちゃんとしよう。

ともかく受験してみないことには始まらない1個め。2022年初からの週末にUdemyの模試を毎週スマホでポチポチ解いて基礎問題は9割9分行けるな～となった（問題を覚えたとも言う）ので受けました。合格。

## ロードマップ

https://qiita.com/KurokawaKouhei/items/4e9aa3b526f3f233bf85

### 学習コンテンツ

https://dev.classmethod.jp/articles/aws-all-certifications-and-how-to-study/

https://towardsthecloud.com/10-best-free-aws-learning-resources-for-beginners

### クラウドコンピューティング

https://aws.amazon.com/jp/cloud/

https://aws.amazon.com/jp/types-of-cloud-computing/?nc1=h_ls

### AWSの基礎 (英語)

https://aws.amazon.com/jp/getting-started/fundamentals-core-concepts/?e=gs2020&p=gsrc

https://wa.aws.amazon.com/index.en.html

[AWS Well-Architected ドキュメントが読みやすくなりました！！（AWS Well-Architected ドキュメントの歩き方2022） | DevelopersIO](https://dev.classmethod.jp/articles/aws-well-architected-guide2022/)


### AWS無料模擬試験

[Skill Builder](https://explore.skillbuilder.aws/learn)
無料すてき。

https://dev.classmethod.jp/articles/new-aws-official-practice-questions/

### AWS Certified Cloud Practitioner なにそれ美味しいの

https://aws-exam.net/clf/clf_question.php

https://aws.amazon.com/jp/blogs/news/webinar-bb-practitioner-2018/

https://qiita.com/mizo0203/items/dfc851d4feb3dd4983bf#%E5%8F%97%E9%A8%93%E4%BA%88%E7%B4%84-%E3%81%A8-%E8%A9%A6%E9%A8%93%E5%BD%93%E6%97%A5%E3%81%AB%E5%90%91%E3%81%91%E3%81%A6%E3%81%AE%E6%BA%96%E5%82%99-7-%E6%97%A5%E7%9B%AE

https://qiita.com/nishi1194/items/5b8565851a521e127063

> AWS 認定試験は ほぼ毎日 受験することができますが、 試験開始の 24 時間以上前に受験予約 を済ませる必要があります。

1000点満点で700点以上で合格とのことで、
[AWS Skill Builder AWS Cloud Practitioner Essentials (Japanese) (日本語実写版)](https://explore.skillbuilder.aws/learn/course/external/view/elearning/1875/aws-cloud-practitioner-essentials-japanese-ri-ben-yu-zi-mu-ban)
[【2022年版】この問題だけで合格可能！AWS 認定クラウドプラクティショナー 模擬試験問題集（7回分455問） | Udemy](https://www.udemy.com/course/aws-4260/)
→ 結局、書かれている通り大体この問題だけで合格可能。難易度も書かれているとおり、基礎と応用の間くらい。


## 次ステップ

AWS認定試験を6冠するための受験順と勉強法: https://www.tdi.co.jp/miso/aws-certification-study
[未経験でもAWS認定全11資格を10ヶ月で取得できたので学習方法をまとめました - Qiita](https://qiita.com/mani___524/items/7585331df069266cf69f)
ということなので要領を理解した次からが本番、ソリューションアーキテクトをがんばります。俺たちの戦いはこれからだ。

### ユーザーグループ

https://jaws-ug.jp/

### 全サービス

https://dev.classmethod.jp/articles/aws-summary-2022/

https://dev.classmethod.jp/tags/aws/

[AWSの膨大で複雑なサービス群をすべて「たった1行」で説明していくとこうなる - GIGAZINE](https://gigazine.net/news/20200528-aws-one-line-explanation/)

https://qiita.com/kohashi/items/1bb952313fb695f12577



### AWSでサーバーレス

https://qiita.com/papi_tokei/items/e5075fbb5107a579aa72

https://qiita.com/i-dach/items/9fe3d21bc3fe8de72c67

### AWSでバッチ処理

https://zenn.dev/faycute/articles/fb310e3ccd783f

### AWSその他

https://aws.amazon.com/jp/blogs/news/unpicking-vendor-lock-in/

### 暗記のためにメモったものたち

- **AWS Systems Manager**
    - AWSで利用しているインフラストラクチャリソースを可視化して、制御するための統合ていな運用管理サービスです。AWS Systems Manager の統合UIを利用して、AWS のさまざまなサービスの運用データを確認でき、AWS リソース全体に関わる運用タスクを自動化できます。これによって、オンプレミス環境も含めた統合的な運用管理を提供してくれます。
- **AWS Device Farm**
- **AWS Mobile Hub**
- **AWS Security Hub**
    - すべてのAWSアカウントにおける高優先度のセキュリティアラートおよびコンプライアンス状況を包括的に確認できるサービスです。AWSのセキュリティ関連サービスであるGuardDuty、Inspector、Macieやサードパーティのセキュリティアラートや検出結果をまとめて確認できます。
- **Amazon Detective**
    - CloudTrail、VPC Flow Logs、GuardDutyのログや結果を自動的に収集し、潜在的なセキュリティの問題を調査・分析することができます。
- **Amazon CodeGuru**
    - コードレビューを自動化して、コード品質を向上しつつ、コードレビューの実行時間を短縮してコスト削減を達成できます。
- **AWS Artifact**
    - 重要なコンプライアンス関連情報に関する一元管理型のリソースを提供しています。
- **Amazon WorkSpaces Application Manager（Amazon WAM）**
    - AWS経由で提供されるAmazon WorkSpacesへのソフトウェア配信を管理するためのサービスです。WorkSpacesへのアプリケーションの配布して、インストールやアップデートなど制御することができます。
- **Amazon EMR**
    - クラウドネイティブなビッグデータプラットフォームです。
- **AWS Batch**
    - 数十万件のバッチコンピューティングジョブを AWS で簡単かつ効率的に実行できます。AWS Batch では、コンピューティングリソース (CPU やメモリ最適化インスタンスなど) の最適な数量とタイプを、送信されたバッチジョブの量と具体的なリソース要件に基づいて動的にプロビジョニングします。
- **AWS Server Migration Service (AWS SMS)**
    - エージェントレス型の仮想マシンの移行を行うサービスであり、50台までの稼働中の多数のオンプレミスワークロードを一度にAWSに移行することが可能となります。エージェントレス型のため、本番稼働中のサーバーに影響を与えず移行ができることが最大の特長です。
- **AWS Elastic Beanstalk**
    - Java、.NET、PHP、Node.js、Python、Ruby、Go および Docker を使用して開発されたウェブアプリケーションやサービスを、Apache、Nginx、Passenger、IIS など使い慣れたサーバーでデプロイおよびスケーリングするための、WEBアプリケーションの展開・環境構築向けのサービスです。
- **Amazon Chime**
    - ビデオ、音声、テキストチャット、スクリーン共有などを備えたオンラインミーティングサービスです。これを利用してオンラインミーティング環境を整備することが可能です。
- **Amazon WorkMail**
    - Webメールおよびカレンダーサービスです。これを利用してユーザー間でカレンダーを共有することができます。ユーザー管理には、新規または既存のDirectory Serviceを利用します。
- **Amazon WorkDocs**
    - コンテンツの作成、ストレージ、コラボレーション用の安全なフルマネージド型サービスです。Amazon WorkDocs を使用すると、コンテンツの作成、編集、共有が簡単になります。ドキュメントはURLによる共有や世代管理が行われて、WorkDocs Syncを利用してデスクトップのフォルダをWorkDocsと同期することができます。フルマネージド型サービス Amazon WorkDocs では高価なネットワークファイル共有を不使用にして、負担なくコンテンツをクラウドに移行できます。
- **AWS Control Tower**
- **Amazon S3 Glacier**
    - データアーカイブ専用
- **AWS VPN**
    - オンプレミスとAWSの接続、セキュアなネットワーク、IPSec
- **AWS Snowcone**
    - IoTデバイスの軽量分析エンジンとして使用して、データを収集し、データを処理して即座に洞察を得てから、その場からデータを転送することができます。AWS Snowcone はエッジコンピューティングアプリケーションとして機能して、データを収集し、データを処理して即座に洞察を得てから、データを AWS に転送します。
- **Amazon Kendra**
    - 機械学習を活用したエンタープライズ検索機能を提供します。機械学習による自然言語解析を使用して、S3バケットに保存されたパワーポイント資料などの非構造化データを中身を理解しつつ、検索することが可能となります。
- **Amazon Kinesis Data Firehose**
    - ストリームデータを蓄積するためのサービスではなく、ストリームデータに対してLambda関数と統合してELT処理を実施したり、S3などのストレージに配信することができるサービスです。
- **Amazon SQS**
    - 完全に管理されたメッセージキューサービス
- **AWS CloudHSM**
    - クラウドベースのハードウェアセキュリティモジュール (HSM) です。
- **AWS Resource Access Manager（AWS RAM）**
    - 個々のAWSアカウント、AWS Organizations内の組織や組織単位（OU）、サポートされているリソースの安全な共有を実施するサービス
- **継承される統制**
    - 継承される統制 とはユーザーが AWS から完全に継承する統制です。物理統制と環境統制に分かれます。
- **Amazon Timestream**
    - IoT アプリケーションに適したフルマネージドな時系列データベースサービスです。IoT機器などから収集したタイムスタンプをもつ時系列データの保存して、その検索や分析を行うことができます。リレーショナルデータベースの最大 1,000 倍の速度と 10 分の 1 のコストで、1 日あたり数兆ものイベントを、簡単に保存し、分析できます。
- **Amazon Kinesis Data Streams**
    - IoTなどのデータレコードの大量の ストリーム をリアルタイムで収集し、処理します。データを保存したり分析したりは実施できません。
- **AWS IoT Greengrass**
    - 使用しているIoTデバイスにLambda関数をデプロイおよび実行できるサービス
- **Amazon Macie**
    - Amazon S3に保存データを機械学習によって自動的に検出、分類、保護するセキュリティサービス



業務で使うとはいえそんなレアなヤツの名前まで覚える必要あるのかよという気分になりつつ、たまには取得を目的に取得してもいいじゃないかと思う2022年。暗記から入ってAWSの記事を読み出すと知っている単語が出たときに少し嬉しくなる効用に気づけました。

以上です～～
