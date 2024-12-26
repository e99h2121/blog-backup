## Database 的な諸々

https://learn.microsoft.com/ja-jp/training/modules/design-data-storage-solution-for-relational-data/

### SQL Database

https://learn.microsoft.com/ja-jp/azure/azure-sql/database/features-comparison?view=azuresql

> SQL Server と SQL Database または SQL Managed Instance に共通する機能は次のとおりです。

> 言語機能 - フロー制御言語のキーワード、カーソル、データ型、DML ステートメント、述語、シーケンス番号、ストアド プロシージャ、変数。
データベース機能 - 自動チューニング (プランの強制)、変更の追跡、データベース照合順序、包含データベース、包含ユーザー、データ圧縮、データベースの構成設定、オンライン インデックス操作、パーティション分割、テンポラル テーブル (ファースト ステップ ガイドを参照)。
セキュリティ機能 - アプリケーション ロール、動的データ マスク (ファースト ステップ ガイドを参照)、行レベル セキュリティ、および脅威の検出。SQL Database および SQL Managed Instance についてはファースト ステップ ガイドを参照してください。
マルチモデル機能 - グラフの処理、JSON データ (ファースト ステップ ガイドを参照)、OPENXML、空間、OPENJSON、および XML インデックス。


https://learn.microsoft.com/ja-jp/azure/azure-sql/database/elastic-scale-introduction?view=azuresql

- Elastic Database 
- 水平及び垂直スケーリング
- シャーディング

https://learn.microsoft.com/ja-jp/azure/azure-sql/database/service-tier-hyperscale?view=azuresql

>Azure SQL Database の仮想コア購入モデルには、サービス レベルの選択肢が 3 つあります。

- General Purpose
- Business Critical
- Hyperscale


https://learn.microsoft.com/ja-jp/azure/azure-sql/managed-instance/managed-instance-link-feature-overview?view=azuresql

#### ディザスタリカバリ

https://learn.microsoft.com/ja-jp/azure/site-recovery/site-recovery-sql#combining-bcdr-technologies-with-site-recovery

https://docs.microsoft.com/ja-jp/azure/azure-sql/database/active-geo-replication-overview

https://learn.microsoft.com/ja-jp/azure/azure-sql/database/high-availability-sla?view=azuresql&tabs=azure-powershell



#### 暗号化

https://learn.microsoft.com/ja-jp/sql/relational-databases/security/encryption/sql-server-encryption?view=sql-server-ver16

https://learn.microsoft.com/ja-jp/sql/relational-databases/security/encryption/always-encrypted-database-engine?view=sql-server-ver16

https://learn.microsoft.com/ja-jp/sql/relational-databases/security/dynamic-data-masking?view=sql-server-ver16


### Cosmos DB

https://learn.microsoft.com/ja-jp/azure/cosmos-db/introduction

https://learn.microsoft.com/ja-jp/azure/cosmos-db/choose-api

> NoSQL 用 API は Azure Cosmos DB ネイティブ
> MongoDB、PostgreSQL、Cassandra、Gremlin、Table 用の API 


https://learn.microsoft.com/ja-jp/azure/cosmos-db/nosql/how-to-multi-master?tabs=api-async

https://learn.microsoft.com/ja-jp/azure/cosmos-db/consistency-levels

> 最強から最弱の順に、次のレベルがあります。
厳密
有界整合性制約
Session
一貫性のあるプレフィックス
最終的

https://learn.microsoft.com/ja-jp/azure/cosmos-db/synapse-link
> Azure Synapse Link for Azure Cosmos DB は、クラウド ネイティブのハイブリッド トランザクションと分析処理 (HTAP) の機能です。これを使用すると、Azure Cosmos DB 内のオペレーショナル データに対してリアルタイムに近い分析が可能になります。 

https://learn.microsoft.com/ja-jp/azure/cosmos-db/change-feed
> Azure Cosmos DB の変更フィードは、コンテナーに対して行われた変更が発生した順番で記録されている永続的な記録です。 Azure Cosmos DB の変更フィードのサポートは、Azure Cosmos DB コンテナーの変更をリッスンすることで機能します。


### アーキテクチャ

https://learn.microsoft.com/ja-jp/azure/architecture/databases/

## 参考
[【Azure】Azure Synapse Analyticsを用いてAzure SQL Databaseにデータを読み込む際のベスト プラクティス #初心者 - Qiita](https://qiita.com/takaki-imura/items/1ecc2b1df30a3dd75beb)

[Azure Cosmos DBってどんなの？ #Azure - Qiita](https://qiita.com/hirobel/items/72e28dcef067befec36f)
