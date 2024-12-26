諸々参考にしたり、検証したりしているパフォーマンスにまつわる記事のまとめです。

## 知識

### Azure portal を使用してシングルテナント Azure Logic Apps でサンプル Standard ワークフローを作成する#ベスト プラクティスと推奨事項

https://learn.microsoft.com/ja-jp/azure/logic-apps/create-single-tenant-workflows-azure-portal#best-practices-and-recommendations

> デザイナーの応答性とパフォーマンスを最適なものにするには、次のガイドラインを確認してそのようにしてください。
> ワークフローごとに使用するアクションの数を 50 以下にします。 アクションの数がこれを超えると、デザイナーのパフォーマンスが低下する可能性があります。
> 必要に応じて、ビジネス ロジックを複数のワークフローに分割することを検討します。
> ロジック アプリ リソースあたりのワークフローの数を、10 から 15 個以下にします。


### Logic Apps Standard Hosting & Performance Tips

https://techcommunity.microsoft.com/t5/azure-integration-services-blog/logic-apps-standard-hosting-amp-performance-tips/ba-p/3956971

> The more workflows you have in a given "Logic App" and the more complex those workflows are, then the more work that process needs to do at runtime.
The more "Logic Apps" you have on a hosting plan then the more processes there are on each worker VM to compete for the compute resources available 
(determined by the pricing tier or vertical size you assign, literally the number of cores and amount of memory).
Remember that an instance of the Logic Apps runtime is hosted as an extension to the functions runtime, 
each process represents the runtime and configured triggers. 
This means triggers run per "Logic App" app deployed, per scaled out worker VM.

> <翻訳>
> ある "Logic App "内のワークフローが多ければ多いほど、またそれらのワークフローが複雑であればあるほど、そのプロセスが実行時に行う必要のある作業は多くなります。
ホスティングプラン上の「Logic Apps」の数が多ければ多いほど、各Worker VM上で利用可能なコンピュートリソースを奪い合うプロセスの数も多くなります。
(利用可能なコンピュートリソースを争うために、各ワーカーのVM上に多くのプロセスが存在します。）
Logic Appsランタイムのインスタンスは、ファンクションランタイムの拡張としてホストされていることを覚えておいてください、 
各プロセスはランタイムと設定されたトリガーを表します。
つまり、デプロイされた "Logic App" アプリ、スケールアウトされたワーカー VM ごとにトリガーが実行されます。

### Azure Functions の Premium プラン#常時使用可能なインスタンス

https://learn.microsoft.com/ja-jp/azure/azure-functions/functions-premium-plan?tabs=portal#always-ready-instances

> Premium プランでは、指定された数のインスタンスでアプリを常時使用可能にしておくことができます。 
アプリは、負荷に関係なく、これらのインスタンスで継続的に実行されます。 常時使用可能なインスタンスで処理できる以上の負荷が発生すると、
追加のインスタンスが、指定した最大値まで必要に応じて追加されます。


### Scaling Logic App Standard for High Throughput Scenarios

https://techcommunity.microsoft.com/t5/azure-integration-services-blog/scaling-logic-app-standard-for-high-throughput-scenarios/ba-p/3866731

### Organizing logic apps workflows with Logic Apps Standard

https://techcommunity.microsoft.com/t5/azure-integration-services-blog/organizing-logic-apps-workflows-with-logic-apps-standard/ba-p/3251179

### Azure Logic App Standard - Design Considerations

https://techcommunity.microsoft.com/blog/integrationsonazureblog/azure-logic-app-standard---design-considerations/4177301


### ステートフルとステートレス

https://qiita.com/e99h2121/items/bf4c6096317b5fd114ec

ステートレス ワークフロー 

https://github.com/Azure/logicapps/issues/503

ステートフルおよびステートレス ワークフロー

https://learn.microsoft.com/ja-jp/azure/logic-apps/single-tenant-overview-compare#stateful-and-stateless-workflows


### ワークフローの問題のトラブルシューティングと診断 # パフォーマンス - よくあるご質問 (FAQ)

https://learn.microsoft.com/ja-jp/azure/logic-apps/logic-apps-diagnosing-failures?tabs=consumption#performance---frequently-asked-questions-faq


### Azure Logic Apps でのシングルテナント、マルチテナント、統合サービス環境の比較 # ロジック アプリ ワークフローの種類と環境

https://learn.microsoft.com/ja-jp/azure/logic-apps/single-tenant-overview-compare#logic-app-workflow-types-and-environments


### 信頼性の高い Azure Functions のベストプラクティスを紹介する

https://learn.microsoft.com/ja-jp/azure/azure-functions/functions-best-practices?tabs=javascript#configure-host-behaviors-to-better-handle-concurrency



## 監視

### Azure Logic Apps でワークフローの正常性とパフォーマンスのメトリックを表示する

https://learn.microsoft.com/ja-jp/azure/logic-apps/view-workflow-metrics?tabs=standard

### Azure Logic Apps でのワークフローの診断データの監視と収集

https://learn.microsoft.com/ja-jp/azure/logic-apps/monitor-workflows-collect-diagnostic-data?tabs=standard


## その他

### Azure App Service 診断の概要 # プロアクティブ自動復旧

https://learn.microsoft.com/ja-jp/azure/app-service/overview-diagnostics#proactive-auto-healing-only-for-windows-app

上を根拠に、再起動もまれに有効

以上です～
