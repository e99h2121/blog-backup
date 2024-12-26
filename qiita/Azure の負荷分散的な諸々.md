## Azure の Load Balancer
https://qiita.com/e99h2121/items/61121923a500391c76bc

- Front Door
- Traffic Manager
- Application Gateway
- Load balancer



https://learn.microsoft.com/ja-jp/azure/architecture/guide/technology-choices/load-balancing-overview


### Traffic Manager

https://learn.microsoft.com/ja-jp/azure/traffic-manager/traffic-manager-routing-methods

> 優先順位トラフィック ルーティング方法
加重トラフィック ルーティング方法
パフォーマンス トラフィック ルーティング方法
地理的トラフィック ルーティング方法
複数値トラフィック ルーティング方法
サブネット トラフィック ルーティング方法

https://learn.microsoft.com/ja-jp/azure/traffic-manager/traffic-manager-how-it-works#how-clients-connect-using-traffic-manager

![](https://learn.microsoft.com/ja-jp/azure/traffic-manager/media/traffic-manager-how-traffic-manager-works/flow.png)

https://learn.microsoft.com/ja-jp/azure/traffic-manager/traffic-manager-overview


### AKS

https://learn.microsoft.com/ja-jp/azure/aks/ingress-basic?tabs=azure-cAKS

> イングレス コントローラーは、リバース プロキシ、構成可能なトラフィック ルーティング、および Kubernetes サービスの TLS 終端を提供するソフトウェアです。 個別の Kubernetes サービスのイングレス ルールとルートを構成するには、Kubernetes イングレス リソースが使われます。 イングレス コントローラーとイングレス ルールを使用すると、1 つの IP アドレスで Kubernetes クラスター内の複数のサービスにトラフィックをルーティングできます。

## スケール セット

https://learn.microsoft.com/ja-jp/azure/virtual-machine-scale-sets/overview

> 複数の可用性ゾーンまたは障害ドメインに VM を分散することにより、高可用性とアプリケーションの回復性が提供される

https://learn.microsoft.com/ja-jp/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-use-availability-zones?tabs=cli-1%2Cportal-2


