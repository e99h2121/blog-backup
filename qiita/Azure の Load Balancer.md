ざっくり。

https://learn.microsoft.com/ja-jp/azure/architecture/guide/technology-choices/load-balancing-overview

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/1e52e012-409b-47e2-9f02-0f53dd40763f.png)

>Azure Front Door は、Web アプリケーション向けのグローバル負荷分散およびサイト アクセラレーション サービスを提供するアプリケーション配信ネットワークです。 SSL オフロード、パスベースのルーティング、高速フェールオーバー、キャッシュなどのレイヤー 7 機能をアプリケーションに提供して、アプリケーションのパフォーマンスと高可用性を向上させます。

>Traffic Manager は、世界中の Azure リージョン間でサービスへのトラフィックを最適に配分しつつ、高可用性と応答性を実現する DNS ベースのトラフィック ロード バランサーです。 Traffic Manager は DNS ベースの負荷分散サービスであるため、負荷分散はドメイン レベルでのみ行われます。 そのため、DNS キャッシュに関連した、また DNS TTL を遵守しないシステムに関連した一般的な課題が理由で、Azure Front Door ほど高速なフェールオーバーはできません。

>Application Gateway は、アプリケーション配信コントローラーをサービスとして提供することで、さまざまなレイヤー 7 負荷分散機能を利用できるようにします。 これを使用して、CPU を集中的に使用する SSL 終了をゲートウェイにオフロードし、Web ファームの生産性を最適化できます。

>Load Balancer は、すべての UDP と TCP プロトコル向けの高パフォーマンス、超低待機時間のレイヤー 4 負荷分散サービス (受信および送信) です。 これは、ソリューションの高可用性を保証しながら、1 秒あたり数百万の要求を処理するように構築されています。 Azure Load Balancer は、ゾーン冗長であるため、可用性ゾーン全体で高可用性を確保します。 リージョン デプロイ トポロジと リージョン間トポロジの両方をサポートします。

## Front Door
[Azure Front Door | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/frontdoor/front-door-overview)

CDN。

## Traffic Manager
[Azure の Traffic Manager | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/traffic-manager/traffic-manager-overview)

> **DNS ベースのトラフィック ロード バランサーです。** このサービスを使用すると、パブリックに公開されているアプリケーションへのトラフィックを世界各国の Azure リージョン全体に分散することができます。 また、Traffic Manager によって、パブリック エンドポイントには高可用性と高い応答速度が確保されます。

> トランスポート層の負荷分散を行う場合は、**Load Balancer を確認してください。**


## Application Gateway
[Azure Application Gateway とは | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/application-gateway/overview)

> **Web アプリケーションに対するトラフィックを管理できる Web トラフィック ロード バランサーです。** 従来のロード バランサーはトランスポート レイヤー (OSI レイヤー 4 - TCP と UDP) で動作し、送信元 IP アドレスとポートに基づくトラフィックを送信先 IP アドレスとポートにルーティングします。

> DNS ベースのグローバルなルーティングを検討中であり、トランスポート層セキュリティ (TLS) プロトコル終端 ("SSL オフロード") の要件や、HTTP/HTTPS 要求ごとまたはアプリケーション層の処理の要件がない場合は、**Traffic Manager を検討してください。**



## Load Balancer
[Azure Load Balancer の概要 - Azure Load Balancer | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/load-balancer/load-balancer-overview)

> Azure Load Balancer は、開放型システム間相互接続 (OSI) モデルの第 4 レイヤーで動作します。 クライアントにとっての単一接続点となります。 Load Balancer は、ロード バランサーのフロントエンドに到着したインバウンド フローを、バックエンド プールのインスタンスに分配します。 これらのフローは、構成された負荷分散規則と正常性プローブに従っています。 バックエンド プール インスタンスには、Azure Virtual Machines か、仮想マシン スケール セット内のインスタンスを使用できます。

- パブリック
- 内部 (プライベート)



[Azure Load Balancer のコンポーネント | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/load-balancer/components#frontend-ip-configurations)
- フロントエンド IP の構成
- バックエンド プール
- 正常性プローブ
- ロード バランサー規則
- 高可用性ポート
- 受信 NAT
- アウトバウンド規則

[クイック スタート:パブリック ロード バランサーを作成する - Azure portal - Azure Load Balancer | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/load-balancer/quickstart-load-balancer-standard-public-portal)



## ほか参考

[Azureのロードバランサ事情 - ロードバランサの中ってどうなっているの？ - - Qiita](https://qiita.com/yuhattor/items/60e4547019473761be3f)

[Azure Load Balancer での一般的な問題のトラブルシューティング | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/load-balancer/load-balancer-troubleshoot)
