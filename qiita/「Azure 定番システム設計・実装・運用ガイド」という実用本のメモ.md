[Azure定番システム設計・実装・運用ガイド 改訂新版 (Amazon)](https://www.amazon.co.jp/dp/4296080121?language=ja_JP) という実用本（というか、実戦形式の良本）に関する読書記録です。太字が肝。

![](https://m.media-amazon.com/images/I/41Fiiyvx4VL._SX387_BO1,204,203,200_.jpg)

- オンプレEコマースサイトを Azure に移行する
- イントラネット環境を Azure と接続しイントラネットを延伸する

というシナリオに基づいて書かれています。


## 要点
- [[公式リンク集] 2018/9/6 発売 Azure定番システム設計・実装・運用ガイド | Microsoft Learn](https://learn.microsoft.com/ja-jp/archive/blogs/jpaztech/azure_book_links)
- **Azureの基本と特徴**
    - [Azure リージョンの決定ガイド - Cloud Adoption Framework | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/cloud-adoption-framework/migrate/azure-best-practices/multiple-regions)
- **リフト＆シフトによる既存環境の移行**
   	- [Azure Storage Explorer – cloud storage management | Microsoft Azure](https://azure.microsoft.com/en-us/products/storage/storage-explorer/#features)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/a7ef3d32-3ddc-8573-99f0-17b44f6d8b2d.png)
- **データベースサービスを使う**
    - SQL Server から PaaSサービスへ
    - [Azure SQL のドキュメント - Azure SQL | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/azure-sql/?view=azuresql)
- **App Serviceを使う**
    - SLA: [サービス レベル契約 - ホーム | Microsoft Azure](https://azure.microsoft.com/ja-jp/support/legal/sla/)
    - Kudu
        - [ローカル Git リポジトリからデプロイする - Azure App Service | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/app-service/deploy-local-git?tabs=cli)]
        - [projectkudu/kudu: Kudu is the engine behind git/hg deployments, WebJobs, and various other features in Azure Web Sites. It can also run outside of Azure.](https://github.com/projectkudu/kudu)
    - [Azure Cache for Redis の構成方法 | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/azure-cache-for-redis/cache-configure)
- 負荷分散と地理冗長
    - [Azure Traffic Manager | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/traffic-manager/traffic-manager-overview)
- イントラネットをAzureに延伸する
    - [Azure Virtual Network のドキュメント - チュートリアル、クイックスタート、API リファレンス | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/virtual-network/)
- **Azureサポートチームからのベストプラクティス紹介**
    - [日本マイクロソフト サポート情報](https://cssjpn.github.io/)
	- [クラウド監視戦略 - Cloud Adoption Framework | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/cloud-adoption-framework/strategy/monitoring-strategy#high-level-modeling)  （クラウドモデル）
![](https://learn.microsoft.com/ja-jp/azure/cloud-adoption-framework/strategy/media/monitoring-strategy/cloud-models.png)
	- [Azure でクラウドのデータをセキュリティ保護するラーニング パス - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/secure-your-cloud-data/)
		- Azure 開発チーム公式ブログ: https://azure.microsoft.com/en-us/blog/

以上です～
