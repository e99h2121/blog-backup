**[21 Predictions about the Software Development Trends in 2021 (2021年のソフトウェア開発トレンド予測)](https://towardsdatascience.com/21-predictions-about-the-software-development-trends-in-2021-600bfa048be)** という海外記事のつまみぐい。Roadmapは有名な https://roadmap.sh/ がありますが、これも概要レベル (プラス自分の調べた日本語情報の追記) ですので、興味を持った方はぜひ原文へお進みください。また原文記事中では触れられていませんがリンクされている内容の先で https://www.openrefactory.com/, https://twitter.com/openrefactory 等という「自動的にバグを直す」物があるらしいことが書かれていた... こちらも近いうちに調べてみたい。

2021/1/19 追記: [2021年、最近のJavaに浮いた話題がない (ポエム)](https://qiita.com/e99h2121/items/c51d2b7b802a36a97c4f)



**お品書き**
1. Centralized Infrastructure: Cloud, cloud everywhere 集中型インフラ: クラウド
2. Decentralised Infrastructure: Edge Computing will see exponential growth 分散型インフラストラクチャ: エッジコンピューティングの飛躍的な成長
3. Cloud: AWS is leading, but Multi-Cloud will be the future AWSがリードしているが、マルチクラウドという将来
4. Containerization: Kubernetes is the Emperor, and Docker will slip away コンテナ化：皇帝Kubernetes、脱落するDocker
5. Computing: Quantum Computing will get momentum コンピューティング：量子コンピューティングが勢いを増す
6. Blockchain: The roller coaster ride will continue ローラーコースターの旅が続く
7. Artificial Intelligence: AI will be for all みんなのためのAI
8. Deep Learning Library: It will be TensorFlow 2.0 and PyTorch ディープラーニングライブラリ
9. Data Store: One size will not fill all 1サイズではすべてを満たせない
10. Data-Intensive Computation: Spark will remain the leader Sparkはリーダーの座に残る
11. Real-Time Streaming: Flink will be the obvious choice リアルタイムストリーミング: Flinkが当然の選択
12. Data Platform: Others will follow Snowflake データプラットフォーム: 他がSnowflakeを追従
13. Rapid Application Development: Low Code/No-Code will expand 迅速なアプリケーション開発: ローコード/ノーコードで展開
14. Software Architecture: Microservices, Monoliths, Serverless will co-exist ソフトウェアアーキテクチャ: マイクロサービス、モノリス、サーバーレスが共存
15. Programming (mainstream): Python and JavaScript will lead the roost プログラミング（main）：PythonとJavaScriptがリード
16. Programming (modern): Rust will finally arrive プログラミング（modern）：Rustがついに来る
17. Client-Side Web Frameworks: React will continue to Rule クライアントサイドWebフレームワーク: React
18. Server-Side Web Frameworks: Spring and ASP.NET Core for Enterprises 67 / 5000 サーバーサイドWebフレームワーク: SpringおよびASP.NET Core for Enterprises
19. App Development: Native App will continue to dominate アプリ開発：ネイティブアプリが引き続き優勢
20. Cross-Platform App Development: React Native will dominate, but Flutter will catch up クロスプラットフォームアプリ開発：React Nativeが優勢だが、Flutterが追従
21. API: REST for Business Applications API：ビジネスアプリケーション向けREST




## 1. Centralized Infrastructure: Cloud, cloud everywhere 集中型インフラ: クラウド

世界全体がクラウドに移行するのは早晩のことなので、クラウド移行を計画すべし。2021年以降、クラウドネイティブのエンジニアは膨大な不足と高い需要が見込まれる。[MOOC (Massive Online Open Course)](https://ja.wikipedia.org/wiki/Massive_open_online_course) で、クラウド資格を取得するのが良いとのこと。

コロナ禍中に無料で数ヶ月間受講できるサービスを提供しているところが多いらしい。最大手パブリッククラウドプロバイダー、アマゾンが、2021年から2025年の間に2900万人に無料でクラウドコンピューティングのトレーニングを提供すると宣言している。

[Amazon to help 29 million people around the world grow their tech skills with free cloud computing skills training by 2025 (アマゾン、2025年までに無料のクラウドコンピューティングスキルトレーニングで世界中の2900万人の技術スキル支援)](https://www.aboutamazon.com/news/workplace/amazon-to-help-29-million-people-around-the-world-grow-their-tech-skills-with-free-cloud-computing-skills-training-by-2025)

## 2. Decentralised Infrastructure: Edge Computing will see exponential growth 分散型インフラストラクチャ: エッジコンピューティングの飛躍的な成長

[エッジコンピューティング](https://www.sbbit.jp/article/cont1/35432)：
「利用者のスマートフォンなどのインターネットにつながるIoT機器において情報を処理したり、利用者に近いエリアのネットワークにサーバを分散配置して処理を行ったりする」、コンピューティングモデル。

ここでもAmazonがAWS Snow、AWS IoT Greengrassなど多くのサービスを提供している。MicrosoftもAzure Stack Edge、Azure Edge ZoneでEdgeサービスを提供している。GoogleもGoogle Anthosでデータセンターのサービスを移行している。

もう一つのグループは、通信会社、データセンタープロバイダー、ネットワークプロバイダーのように、インフラを持っている企業。これらの企業が既存のインフラを活用できれば、ここをリードするチャンスがある。ハイブリッドクラウドプロバイダー RedHat (IBM) は、そのプラットフォームOpenShiftとOpenStackへの取り組みで、重要なプレーヤーとなると予測。サムスンはIBMと提携し、エッジコンピューティングソリューションを開発している。
[Samsung, IBM to Develop Edge Computing, 5G and Hybrid Cloud Solutions for Industry 4.0 (サムスン、IBM、Industory 4.0向けのエッジコンピューティング、5G、ハイブリッドクラウドソリューションを開発)](https://www.thefastmode.com/technology-solutions/18721-samsung-ibm-to-develop-edge-computing-5g-and-hybrid-cloud-solutions-for-industry-4-0)

他、https://stateoftheedge.com/
このState of the Edgeはエッジコンピューティングのためのオープンスタンダードを作ろうという取り組み。最近、Linux Foundationの一部になったようだ。

## 3. Cloud: AWS is leading, but Multi-Cloud will be the future AWSがリードしているが、マルチクラウドという将来

パンデミックがクラウドの消費量を押し上げる。
[Global cloud infrastructure market Q3 2020](https://www.canalys.com/newsroom/worldwide-cloud-market-q320)
Amazon, Microsoft, Google健在。

一方でマルチクラウドという動き。
https://www.cncf.io/

このクラウドネイティブコンピューティング財団（CNCF）は、マルチクラウドの動きの中で重要な役割を果たしており、Linux財団を凌駕している。2021年にはさらなる成長が見られるだろうと予測。また、[HashiCorp](https://www.hashicorp.com/) のようなマルチクラウドサービスプロバイダも2021年にはより重要になるとのこと。


## 4. Containerization: Kubernetes is the Emperor, and Docker will slip away コンテナ化：皇帝Kubernetes、脱落するDocker
Kubernetes、v1.22でDockerコンテナランタイムを非推奨に、の話題に触れている。
[Kubernetes to deprecate Docker container runtime in v1.22](https://sdtimes.com/kubernetes/kubernetes-to-deprecate-docker-container-runtime-in-v1-22/)
[Kubernetes 1.20からDockerが非推奨になる理由](https://blog.inductor.me/entry/2020/12/03/061329) を参考のこと。

## 5. Computing: Quantum Computing will get momentum コンピューティング：量子コンピューティングが勢いを増す

「量子コンピューティングは一連の中でも最も革新的な技術で、あらゆる分野に影響を与える可能性を秘める」。「2030年代に向けた最もホットなテクノロジー」のリスト中、量子コンピューティングはナンバーワンの座。

以下が、2030年代におけるソフトウェア開発予測10。
[10 Predictions about the Software Development trends in the 2030s](https://towardsdatascience.com/10-predictions-about-the-software-development-trends-in-the-2030s-2fab86c5f661)


## 6. Blockchain: The roller coaster ride will continue ローラーコースターの旅が続く
[ブロックチェーン](https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3)、分散型台帳。
2021年には、Blockchainが「スマートコントラクト」の仕組みとしてより活用されるようになる。

## 7. Artificial Intelligence: AI will be for all みんなのためのAI

AI for All、みんなのためのAI がスローガンになるとのこと。
記事では、フィーチャーエンジニアリングの自動化を可能にする「AutoML 2.0」の開発が興味深く、2021年には、フルサイクルAI化の大きな進展、AIの民主化がさらに進むと予測。
AutoMLについては https://dotdata.com/products/ 

## 8. Deep Learning Library: It will be TensorFlow 2.0 and PyTorch ディープラーニングライブラリ

https://pytorch.org/
[PyTorch入門](https://qiita.com/north_redwing/items/30f9619f0ee727875250) 等参照。
Google Colabでも使えるらしい。
https://colab.research.google.com/notebooks/intro.ipynb

## 9. Data Store: One size will not fill all 1サイズではすべてを満たせない
データベースの世界は、選択肢が豊富でバリエーションに富む。古典的なSQLデータベース、主に4大データベースはMySQL、Oracle、MS-SQL、PostgreSQL。また、NoSQLデータベース等。

最近ではNewSQLデータベースが急増しているという。
[NewSQL](https://qiita.com/tzkoba/items/5316c6eac66510233115)は、新しい形のSQLデータベースで、スケーラブル・分散アーキテクチャなど、過去のRDBMSにはない特徴を持つ。NoSQL(Not Only SQL)を連想させるものだが、アーキテクチャやトランザクションの考え方などはモノリシックなRDBMSとNoSQLの良いとこどりとして設計されている。

Googleは、水平方向に読み書きできるスケーラブルなACID準拠の [Google Spanner](https://qiita.com/kumagi/items/7dbb0e2a76484f6c522b) でリード。また、Amazonも水平方向に拡張可能なACID準拠データベース[Amazon Aurora](https://qiita.com/leomaro7/items/bc64709558180f70453f)を持っており、これはほぼすべてのSQL機能を提供しているが、水平方向の書き込みスケーリングはない。それ以外では、[CockroachDBをDocker環境上で動かしてみる](https://qiita.com/cyack2002/items/18d6ad3bdc95eee8fec7) にあるCockroachDBも非常に目立つNewSQLや分散SQLデータベースだと触れている。

2021年も、適切なデータベースを選択することは、慎重に検討しなければならない非常に困難な作業、という。


## 10. Data-Intensive Computation: Spark will remain the leader Sparkはリーダーの座に残る
Hadoop: https://hadoop.apache.org/
Spark: https://spark.apache.org/
[Hadoop](https://qiita.com/YoungjaeKwon/items/e6e12a3a5158bc02d5b5)は分散バッチジョブのデフォルトとも言える選択肢だったが、現在は[Apache Spark](https://qiita.com/whata/items/8915182cbd3759eebe6d)がベンダーニュートラルな分散バッチジョブのプラットフォームとして選ばれ、Hadoopに取って代わっている。


## 11. Real-Time Streaming: Flink will be the obvious choice リアルタイムストリーミング: Flinkが当然の選択

https://flink.apache.org/
[Apache Flink とは？](https://qiita.com/takanorig/items/e9880813798f0ac5679d)
Apache Flinkは分散ストリーム処理プラットフォームのOSSのひとつ。同類としては Apache Storm や Apache Spark Streaming など。
近年、企業は従来のラムダアーキテクチャを捨て、リアルタイムストリーム処理フレームワークを採用しているとのこと。

## 12. Data Platform: Others will follow Snowflake データプラットフォーム: 他がSnowflakeを追従

Snowflake: https://www.snowflake.com/
Snowflakeはクラウドデータプラットフォーム。アドベントカレンダーも発見。
https://adventar.org/calendars/5085

以下の図はエンタープライズデータプラットフォームの使用例。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/b587de61-63a0-3308-335e-24450aa2016d.png)
引用: https://medium.com/abn-amro-developer/abn-amros-data-integration-architecture-f33506a211c3

## 13. Rapid Application Development: Low Code/No-Code will expand 迅速なアプリケーション開発: ローコード/ノーコードで展開

急速なデジタルトランスフォーメーションにより、ソフトウェアエンジニアの需要と供給に大きなギャップが生じている。新しい開発者がどんどん業界に参入するが、十分ではない。そこで近年、[ローコード/ノーコード](https://qiita.com/e99h2121/items/91569a37fb4a8ab86038) が勢いを増していると指摘。
中でも https://bubble.io/ 。

パブリッククラウドプロバイダーは、昨年予測したようにこの「LCNC」(Low Code, No Code) サービスを提供している。 Microsoftは[PowerApps](https://powerapps.microsoft.com/ja-jp/) を、Googleは[AppSheet] (https://cloud.google.com/appsheet?hl=ja) を、AWSはアプリを迅速に構築するためのプラットフォームとして[Honeycode](https://aws.amazon.com/jp/blogs/news/introducing-amazon-honeycode-build-web-mobile-apps-without-writing-code/) を提供。



## 14. Software Architecture: Microservices, Monoliths, Serverless will co-exist ソフトウェアアーキテクチャ: マイクロサービス、モノリス、サーバーレスが共存

近年では浸透したマイクロサービスアーキテクチャ (Microservice Architecture) 。
[Effective Microservices: 10 Best Practices (効果的なマイクロサービス：10のベストプラクティス)](https://towardsdatascience.com/effective-microservices-10-best-practices-c6e4ba0c6ee2)

一方、そのマイクロサービスアーキテクチャが複雑であることや、あるユースケースでは失敗することを理由に、マイクロサービスアーキテクチャに対する反発が起きている。あるツイートに、マイクロサービスへの批判がまとめられている。
https://twitter.com/kelseyhightower/status/1283107285741404160?s=20
>For all those making their journey from monoliths to microservices, good luck, and take this with you: "A Note on Distributed Systems". 
モノリスからマイクロサービスへの旅をする皆、こちらを査収ください：「分散システムに関するメモ」。

モノリシックが批判されていた数年前のトレンドとは対照的なエピソード。
また話題になっているもう一つは、サーバーレスアーキテクチャ。Amazonは、開発者がコードを書くだけで、サービスプロバイダがサーバーを管理するという画期的なAWS Lambdaサービスで、サーバーレスサービスの先駆者となった。モノリスやマイクロサービスのように、このサーバーレスも銀の弾丸ではなく、適所で使うべきだとしている。

2021年には、このすべてのソフトウェアアーキテクチャ（モノリス、マイクロサービス、サーバーレス）が共存することになるだろうとの予測。

## 15. Programming (mainstream): Python and JavaScript will lead the roost プログラミング（main）：PythonとJavaScriptがリード

オランダのTIOBE Softwareは、プログラミング言語の人気の度合いを表す指標として知られる「TIOBE Index」を公表している。
https://www.tiobe.com/tiobe-index/

[Top 10 In-Demand programming languages to learn in 2020 (2020年に学ぶべきプログラミング言語トップ10)](https://towardsdatascience.com/top-10-in-demand-programming-languages-to-learn-in-2020-4462eb7d8d3e) より、2021年も開発者に優しいプログラミング言語の人気が高まると予測。

1. Python...データサイエンスでNo.1のプログラミング言語。多くの分野でもNo.2またはNo.3。
2. JavaScript...Web開発において誰もが認めるNo.1の言語であり、バックエンド開発を含む他のドメインでますます人気が高まっている。初心者にも最適。
3. Java...人気を徐々に失っているが、その伝説的な下位互換性とリリースサイクル 等などにより、エンタープライズソフトウェア開発における第1の選択肢。
4. C++...近年大きな変化を遂げている。 [C++ 20は近年最も破壊的なリリースの1つであり、2021年以降の人気に大きな影響を与える可能性がある](https://qiita.com/yohhoy/items/f3d90c598348817cd29c) 。


## 16. Programming (modern): Rust will finally arrive プログラミング（modern）：Rustがついに来る

Rust, Go, Kotlin, Swift, TypeScriptに代表される「モダン」なプログラミング言語。
[Top 7 Modern programming languages to learn now (今すぐ学ぶべき現代のプログラミング言語トップ7)](https://towardsdatascience.com/top-7-modern-programming-language-to-learn-now-156863bd1eec)、Rust, Go, Kotlin, TypeScript, Swift, Dart, Juliaがあなたのキャリアとソフトウェア開発スキルを向上させる、と書かれている。

この傾向は2021年も継続、急成長の中でも、ようやく注目されているRustは2021年に躍進するだろうとの予想。Stack Overflowの開発者調査によると、過去5年間、最も愛されているプログラミング言語。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/dcf90f82-7de4-6c8b-c4d7-88568147563b.png)
出典: https://insights.stackoverflow.com/survey/2020

## 17. Client-Side Web Frameworks: React will continue to Rule クライアントサイドWebフレームワーク: React

React: https://reactjs.org/

Web 開発では、ここ数年、JavaScript/TypeScript ベースのフレームワークが主流となっている。中でもFacebookのReactは、クライアントサイドのWebフレームワークの中でリーダー的存在。
[Top 5 In-Demand JavaScript Frameworks for Front-End Development in 2020 (2020年のフロントエンド開発のためのJavaScriptフレームワークトップ5)](https://medium.com/javascript-in-plain-english/top-5-in-demand-javascript-frameworks-for-front-end-development-in-2020-a59c4340d082)

## 18. Server-Side Web Frameworks: Spring and ASP.NET Core for Enterprises 67 / 5000 サーバーサイドWebフレームワーク: SpringおよびASP.NET Core for Enterprises

JVMベースのSpringフレームワークは、エンタープライズ開発におけるNo.1のサーバーサイドフレームワークで、また、大小の複雑なアプリケーションを開発するために必要な機能をすべて備えている。依存性注入、クラウドネイティブ開発、リアクティブ、イベント駆動型アプリケーション開発など。2021年もSpringは企業向けバックエンドフレームワークのNo.1。
[Top 10 In-Demand Web Development Frameworks in 2021 (2021年のWeb開発フレームワークトップ10)](https://towardsdatascience.com/top-10-in-demand-web-development-frameworks-in-2021-8a5b668be0d6)

## 19. App Development: Native App will continue to dominate アプリ開発：ネイティブアプリが引き続き優勢

[ネイティブアプリ](https://www.nttcoms.com/service/mobileweb-smartphoneapp/column/20200924/) 開発は、最高のパフォーマンスとユーザーエクスペリエンスを提供する。しかし、企業は2つのチームに分かれて開発する必要があるため、開発コストが高くなる。

一方クロスプラットフォームアプリ開発は、iOSとAndroidの両方のアプリ開発にほぼ同じコードベースを使用できるため、ますます人気。ただ開発コストは低いが、柔軟性に乏しく、ネイティブアプリほどのパフォーマンスはない。2021年には、企業はネイティブアプリ開発を、スタートアップや小規模企業はクロスプラットフォームアプリ開発を好むようになると予想。

## 20. Cross-Platform App Development: React Native will dominate, but Flutter will catch up クロスプラットフォームアプリ開発：React Nativeが優勢だが、Flutterが追従

クロスプラットフォームのアプリ開発プラットフォームは数多く存在するが、FlutterとReact Nativeがそのリーダー的存在。

FacebookのReact Nativeは、最も人気のあるJavaScriptベースのWeb開発フレームワークであるReactをベースにしている。つまり27億人のFacebookユーザーでその機能をテストしているということ。現在は以下、React Nativeの方がFlutterよりも人気。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/44f02b1a-790f-ac1a-dbf4-0f3ccc85fe9f.png)
出典: https://insights.stackoverflow.com/survey/2020
2021年にはReactがクロスプラットフォームアプリ開発を席巻することになる。

一方、[モバイルアプリ開発は、Flutter一択なのか？-2021版-](https://qiita.com/tetsukick/items/ed9306276942c34b3575)、[クロスプラットフォームフレームワーク比較 2021（Flutter, React Native, Xamarin, Unity）](https://qiita.com/nskydiving/items/c13c949cc17c6f980a67) も参考になる。
GoogleのFlutterは比較的新しいフレームワークだが、ここ数年で絶大な人気を得、美しいモバイル、デスクトップ、ウェブアプリケーションを構築するための強力なUIツールキットを提供している。Flutterは、最も成長が早く、生産性の高い最新のプログラミング言語の1つであるDartを使用している。パフォーマンスの面では、React NativeよりもFlutterが優れている。また、開発者の人間工学にも優れる。

## 21. API: REST for Business Applications API：ビジネスアプリケーション向けREST

近年、マイクロサービスアーキテクチャやサーバーレスの普及が進んでいる。伴い、マイクロサービスやナノサービスは通信を行うが、通常、イベント駆動型の非同期通信ではなく、同期通信が用いられる。従来のモノリスでさえも同期通信を介する。

2020年最も支配的なAPI技術はREST。RESTはWeb技術をベースにした通信規格で、業界ではかなり前（20年前）から存在している。[RestfulAPI](https://qiita.com/e99h2121/items/4409af3879e8638b8200) 参照。

一方[GoogleのgRPC](https://qiita.com/seri1234/items/08bdb859210325750c84)。これはRESTとは異なり、gRPCはSOAPのようなRPCプロトコルである。Googleは古いRPCプロトコルから学び、現代のソフトウェア開発のニーズに適したgRPCを作った。gRPCはJSONの代わりに、Googleが開発したプロトコルバッファを使用する。結果、RESTに比べてパフォーマンスが高く、可読性に優れる。

もう一つ、特にUI開発者に人気が、[FacebookのGraphQL](https://qiita.com/shotashimura/items/3f9e04b93e79592030a4)。多くの場合、UIは必要なデータを取得するためにバックエンドへのAPIコールを何度も行うが、GraphQLはAPIを集約することで、UIとバックエンドの間のコミュニケーションを減らすことができる。一方、セキュリティに配慮した開発には適していないのが大きな欠点。

3つとも別々のユースケースを持っており、お互いに補完し合うことができるため、この傾向は続くという。


## おわりに
以上、概要のみですが、情報は鮮度が命、ということで紹介まで。2021年もう1月も半ばですが少しでも、皆様の知的好奇心の刺激になれば幸いです。改めて原文: [21 Predictions about the Software Development Trends in 2021](https://towardsdatascience.com/21-predictions-about-the-software-development-trends-in-2021-600bfa048be) をお楽しみいただいてはというピックアップでした。
