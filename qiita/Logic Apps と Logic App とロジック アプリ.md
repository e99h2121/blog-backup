こんにちは！[Microsoft Azure Tech Advent Calendar 2024](https://qiita.com/advent-calendar/2024/microsoft-azure-tech) の 10 日目の記事です。

自動化などというキーワードとともにライトなユーザーに使われることも多い Logic Apps。Logic Apps とは Logic Apps なのか Logic App なのかロジック アプリなのか。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/53169acb-1fa0-ec58-b45c-c4d560e5c5bf.png)
(タグにも戸惑いの跡を感じました)

Logic Apps、単体で愛されるというよりは、そのカテゴリの示すところ「Integration - 統合」役のサービスとして時には通知、時には連携、加工、ちょっとした時に利用いただくもの。本日は、そのようなときにすっと思い出していただけるような、Logic App 界隈の用語を整頓しながら、最近の Logic Apps を紹介しようと思います。

- Integration
- SKU
- コネクタ
- その他サービスから呼ばれるものたち

などなど。

なお公式にも便利な記事がありますので合わせてご活用ください！

[Logic Apps をこれから使い始めようという方へ | Japan Azure Integration Support Blog](https://jpazinteg.github.io/blog/LogicApps/LogicApps-HeadFirst/)
[Logic Apps の調査時にサポート エンジニアへ連携するログの取得方法について | Japan Azure Integration Support Blog](https://jpazinteg.github.io/blog/LogicApps/TroubleLogCollection/)
[従量課金版 Azure Logic Apps の料金体系を理解するポイント | Japan Azure Integration Support Blog](https://jpazinteg.github.io/blog/LogicApps/LogicApps-ConsumptionPricing/)


## Integration

### Integration / 統合

単に ja-jp/en-us の表記ゆれと思いつつ、サービスのしんがりに控えし [統合]。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/80323783-b8d7-aaf4-8459-677ede974b38.png)

画面を進めてみると [ワークフローとオーケストレーション] というカテゴリになっています。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d8e8b3a7-9e2f-a1f7-5000-a945ae55510d.png)

ロジック アプリ / Logic Apps カスタム コネクタ / 統合アカウント / 統合サービス環境 というサービスが見えます。いずれも Logic Apps 関連です。


https://azure.microsoft.com/ja-jp/solutions/integration-services

https://azure.microsoft.com/en-us/solutions/integration-services


## SKU

リソース [作成] に進みます。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/c7e177d3-e22a-8839-a223-4e6ee2d8f05f.png)

上の通り Logic Apps には大きく 従量課金版 と Standard 版 があります。
従量課金版 は マルチテナント とも呼びます。上の表に書かれていませんが Standard 版のワークフロー サービス プランはシングルテナントと呼びます。

https://learn.microsoft.com/ja-jp/azure/logic-apps/logic-apps-overview#create-and-deploy-to-different-environments

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/f3078333-3996-c09c-25ff-b2ad68e26cd4.png)

https://learn.microsoft.com/ja-jp/azure/logic-apps/single-tenant-overview-compare

> 従量課金ロジック アプリでは、"マルチテナント" Azure Logic Apps 内で実行されるワークフローを 1 つだけ保有できます。 または、"シングルテナント'' Azure Logic Apps あるいは App Service Environment v3 (ASE v3) で実行される Standard ロジック アプリ ワークフローを作成します。

従量課金版 Logic Apps は 1 Logic Apps に 1 ワークフロー、
Standard 版 Logic Apps は 1 Logic Apps に複数ワークフローを構築できます。

従量課金版 か Standard 版かはリソース プロバイダーで以下判別できます。
- 従量課金: Microsoft.Logic/workflows/<LogicApps>
- Standard: Microsoft.Web/sites/<LogicApps>

または以下 プラン から確認できます。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/f9ad803b-48b7-dfcd-bd8f-1c166c9b6a22.png)

### 従量課金 / マルチテナント

従量課金版 = マルチテナント です。マルチテナントとは一般的にも「複数のユーザーが同じサーバーやサービスを共有して利用する方式」です。

https://learn.microsoft.com/ja-jp/azure/logic-apps/quickstart-create-example-consumption-workflow


### Standard / 標準 / シングルテナント / Standard (App Service Environment v3) / ハイブリッド

一方の Standard 版について。

https://learn.microsoft.com/ja-jp/azure/logic-apps/create-single-tenant-workflows-azure-portal

> Standard ロジック アプリのリソースの種類は Azure Functions によって実行され、関数アプリに似たストレージ要件があります。 ステートフル ワークフローは、スケジュールでのキューの使用や、テーブルや BLOB へのワークフローの状態の格納など、ストレージ トランザクションを実行します。 これらのトランザクションには、ストレージの料金がかかります。 ステートフル ワークフローによって外部ストレージにデータが格納される方法の詳細については、「ステートフルとステートレスのワークフロー」を参照してください。

[Azure Logic Apps の Standard プランを概観する #logicapps - Qiita](https://qiita.com/nakazax/items/b1758ba4e9b7511014bb)
[Standard タイプの Logic Apps について少し触れてみる #Azure - Qiita](https://qiita.com/kwtc_/items/afb15b658488502b680e)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/dac4f8b6-25d7-1a49-6e47-d198be47d7b0.png)

#### ステートフル・ステートレス 
[Standard Logic Apps、Stateless ってなにそれおいしいの？ #logicapps - Qiita](https://qiita.com/e99h2121/items/bf4c6096317b5fd114ec)


#### 閉域化

Standard Logic Apps は App Service と同一の基盤となるため、App Service のドキュメントを参考にできることも多いです。

[アプリを Azure 仮想ネットワークと統合する - Azure App Service | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/app-service/overview-vnet-integration)

以下紹介されています。

https://learn.microsoft.com/ja-jp/azure/logic-apps/logic-apps-examples-and-scenarios#access-azure-virtual-network-resources

> ロジック アプリワークフローで、Azure 仮想ネットワーク内の仮想マシン (VM) や、セキュリティで保護されたリソースにアクセスすることが必要になる場合があります。 このようなリソースに直接アクセスするには、 Standard ロジック アプリ ワークフローを作成します。 この種類のロジック アプリ ワークフローは、マルチテナント Azure Logic Apps の従量課金ロジック アプリ ワークフローとは別に、シングルテナントの Azure Logic Apps で実行され、専用ストレージやその他のリソースを使用します。 このオプションでは、他の Azure のテナントがご利用のアプリのパフォーマンスに与える、 「うるさい隣人 (noisy neighbors)」影響として知られる印象を軽減するのに役立ちます。

https://learn.microsoft.com/ja-jp/azure/logic-apps/secure-single-tenant-workflow-virtual-network-private-endpoint

https://learn.microsoft.com/ja-jp/azure/logic-apps/set-up-standard-workflows-hybrid-deployment-requirements



### その他

下位互換的趣が強いです。

#### 統合アカウント 

https://learn.microsoft.com/ja-jp/azure/logic-apps/logic-apps-enterprise-integration-overview

https://learn.microsoft.com/ja-jp/azure/logic-apps/enterprise-integration/create-integration-account?tabs=azure-portal%2Cconsumption

#### 統合サービス環境 (ISE)

ISE は廃止されました。

https://azure.microsoft.com/ja-jp/blog/announcing-azure-integration-service-environment-for-logic-apps/

https://learn.microsoft.com/ja-jp/azure/templates/microsoft.logic/integrationserviceenvironments?pivots=deployment-language-bicep


## コネクタ

ようやくワークフローの中身にあたる部分です。「箱」の一つ一つの呼び名です。

### トリガー / アクション / コネクタ

https://jpazinteg.github.io/blog/LogicApps/LogicApps-HeadFirst/#%E3%82%B3%E3%83%8D%E3%82%AF%E3%82%BF%E3%81%A8%E3%81%AF

#### コネクタとは

https://learn.microsoft.com/ja-jp/connectors/connectors#connector-components

> 各コネクタは、アクションとトリガーに分類される一連の操作を提供します。 基盤となるサービスに接続すると、アプリやワークフロー内でこれらの操作を簡単に活用することができます。

> アクションを使用して SQL データベース内のデータを検索、書き込み、更新、削除します。
> いくつかのコネクタは、特定のイベントが発生したときにアプリに通知できるトリガーを提供しています。

#### トリガーとは

https://learn.microsoft.com/ja-jp/azure/logic-apps/create-workflow-with-trigger-or-action?tabs=consumption


> トリガーは、どのワークフローでも常に最初のステップであり、ワークフローが実行を開始できるようになる前に満たす条件を指定します。 トリガーの後に、ワークフローが必要なタスクを実行するには、後続のアクションを 1 つ以上追加する必要があります。 トリガーとアクションは連携して、ワークフローのロジックと構造を定義します。


以下が「繰り返し」トリガー と パスを使用して BLOB コンテンツを取得する (V2) アクションです。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/ea5d87bc-9eda-615f-17a3-25d03ae724fb.png)




### マネージド コネクタ / 組み込みコネクタ / Build-In コネクタ / スタンダードコネクタ (標準) / エンタープライズ コネクタ

https://jpazinteg.github.io/blog/LogicApps/LogicApps-ConsumptionPricing/#%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3-%E3%81%A8-%E3%82%B3%E3%83%8D%E3%82%AF%E3%82%BF-%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6

> 組み込みコネクタは、直接 Azure Logic Apps 内でネイティブで動作するよう作られています。
マネージド コネクタは、Microsoft によって Azure でデプロイ、ホスト、管理されます。
マネージド コネクタはほとんどが、基になるサービスまたはシステムが Azure Logic Apps と通信するために使用する API のプロキシまたはラッパーを提供します。

マネージド = 管理対象の などという意味となります。

## その他

他サービスから利用されるものに以下があります。

### プレイブック

トリガーされるものは Logic Apps です。

https://learn.microsoft.com/ja-jp/azure/sentinel/automation/logic-apps-playbooks


https://learn.microsoft.com/ja-jp/azure/sentinel/automation/define-playbook-access-restrictions

https://microsoftlearning.github.io/SC-200T00A-Microsoft-Security-Operations-Analyst.ja-jp/Instructions/Labs/LAB_AK_07_Lab1_Ex3_Scheduled_Query.html


### タスク

トリガーされるものは Logic Apps です。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/6f72e436-faad-ba8c-5826-302263471d16.png)


https://learn.microsoft.com/ja-jp/azure/logic-apps/create-automation-tasks-azure-resources#edit-the-tasks-underlying-workflow

https://learn.microsoft.com/ja-jp/training/modules/manage-azure-paas-resources-using-automated-methods/5-automate-database-workflows-by-using-logic-apps


### アラート

これもトリガーされるものは Logic Apps です。

https://learn.microsoft.com/ja-jp/azure/azure-monitor/alerts/alerts-logic-apps?tabs=send-email


### Power Automate

たまに間違えられる両者。基盤は Logic Apps ですが、別製品で、達成しようとするビジネス上のゴールもそれなりに違うところが面白いです。

https://qiita.com/advent-calendar/2024/powerautomate

### AI

意外と呼ばれています。

[Azure AI サービスと AI エコシステム - Azure AI services | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/ai-services/ai-services-and-ecosystem#azure-logic-apps)
[Assistants をロジック アプリと共に使用する方法 - Azure OpenAI | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/ai-services/openai/how-to/assistants-logic-apps)
[Azure Logic Apps で Document Intelligence を使用する - Azure AI services | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/ai-services/document-intelligence/tutorial/logic-apps?view=doc-intel-4.0.0&pivots=workflow-onedrive)


### Azure AI Agent Service 

そして最近のお話。

[Azure AI Agent Service: Revolutionizing AI Agent Development and Deployment](https://techcommunity.microsoft.com/blog/azure-ai-services-blog/introducing-azure-ai-agent-service/4298357)
[【Ignite 2024 速報】新たな AI エージェント開発機能 「Azure AI Agent Service」 を発表し、Azure AI Foundry に統合 など #AzureOpenAIService - Qiita](https://qiita.com/nohanaga/items/d3cc240758e41ee3ec3f)

<iframe width="1236" height="695" src="https://www.youtube.com/embed/dMEwpthSuhU" title="Azure AI Agent Service" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

ここにいる。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/0853d570-d77b-f0b5-56e2-d802b23ebb6d.png)
> Enable your agent to take actions with 1400+ Azure Logic Apps connectors: Leverage a wide ecosystem of connectors in Logic Apps to enable your agent to complete tasks and take actions on behalf of your users. With Logic apps, you simplify need to define the business logic for your workflow in Azure Portal to connect your agent to external systems, tools and APIs. Examples of connectors include Microsoft products such as Azure App Service, Dynamics365 Customer Voice, Microsoft Teams, M365 Excel, and leading enterprise services such as MongoDB, Dropbox, Jira, Gmail, Twilio, SAP, Stripe, ServiceNow and many more.
> (機械翻訳) 1400 以上の Azure Logic Apps コネクタを使用して、エージェントがアクションを実行できるようにします： Logic Apps のコネクタの幅広いエコシステムを活用することで、エージェントはユーザーの代わりにタスクを完了し、アクションを実行できます。Logic Apps では、Azure Portal でワークフローのビジネスロジックを定義するだけで、エージェントを外部システム、ツール、APIに接続できます。コネクタの例としては、Azure App Service、Dynamics365 Customer Voice、Microsoft Teams、M365 Excel などの Microsoft 製品や、MongoDB、Dropbox、Jira、Gmail、Twilio、SAP、Stripe、ServiceNow などの主要なエンタープライズサービスがあります。


## まとめ

以上ふとした時に出会えるかもしれないロジック アプリ (Logic Apps、Logic App)、美味しいご飯の友のような存在です。お役に立てばさいわいです。
