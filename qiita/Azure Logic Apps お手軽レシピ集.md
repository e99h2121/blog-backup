Logic Apps、縁の下っぷりのまとめ。

## お品書き

### Start/Stop VMs v2

[Start/Stop VMs v2 を Azure サブスクリプションにデプロイする | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/azure-functions/start-stop-vms/deploy)

VM を定時に起動したい、停止したい。クラウド利用時の基本的な要件をかなえる手段の一つです。以下ブログが分かりやすいのでご紹介します。

https://jpazpaas.github.io/blog/2021/11/29/introduce-Start-Stop-VMs-v2.html

> Start/Stop VMs v2 のご紹介
Start/Stop VMs v2 は、複数のサブスクリプションにわたって Azure 仮想マシン (VM) を開始または停止できる、複数の Azure サービスからなるソリューションです

https://qiita.com/shogo-ohe/items/bf8c76fa8022d901435d


#### デプロイ

デプロイは以下です。

https://github.com/microsoft/startstopv2-deployments/blob/main/README.md


Azure Portal からも Marketplace で見つかります。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/32ffc2d0-f709-340f-fc9f-c890505af755.png)


#### 参考

https://jpazpaas.github.io/blog/2021/11/29/introduce-Start-Stop-VMs-v2.html

https://learn.microsoft.com/ja-jp/azure/connectors/connectors-native-recurrence?tabs=consumption

https://learn.microsoft.com/ja-jp/azure/logic-apps/concepts-schedule-automated-recurring-tasks-workflows


### Microsoft Entra

#### インバウンド プロビジョニング

https://learn.microsoft.com/ja-jp/entra/identity/app-provisioning/inbound-provisioning-api-logic-apps

https://jpazureid.github.io/blog/azure-active-directory/introducing-a-new-flexible-way-of-bringing-identities-from-any/

https://qiita.com/murasamelabo/items/beb7b11b68342794ac8d


#### ライフサイクル ワークフロー

https://learn.microsoft.com/ja-jp/entra/id-governance/configure-logic-app-lifecycle-workflows

https://jpazureid.github.io/blog/azure-active-directory/lifecycle-workflows-ga/


### Power Automate
[Power Automate と Power Apps からロジック アプリを呼び出す - Azure Logic Apps | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/logic-apps/call-from-power-automate-power-apps)

https://qiita.com/e99h2121/items/1614d34cdf2db49c639a



### Event Grid

[Azure Event Grid を使用して仮想マシンの変更を監視する - Azure Event Grid | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/event-grid/monitor-virtual-machine-changes-logic-app)

### Service Bus

[Service Bus のイベントを Event Grid 経由で Azure Logic Apps を使用して処理する - Azure Service Bus | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/service-bus-messaging/service-bus-to-event-grid-integration-example?toc=%2Fazure%2Fevent-grid%2Ftoc.json)

### IoT Hub

[チュートリアル - IoT Hub のイベントを使用して Azure Logic Apps をトリガーする - Azure Event Grid | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/event-grid/publish-iot-hub-events-to-logic-apps)

### 監視

[Azure リソースを管理および監視するための自動化タスクを作成する - Azure Logic Apps | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/logic-apps/create-automation-tasks-azure-resources)

[Logic Apps を使用した Log Analytics ワークスペースからストレージ アカウントへのデータのエクスポート - Azure Monitor | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/azure-monitor/logs/logs-export-logic-app)

### Microsoft Defender for Cloud

https://github.com/Azure/Microsoft-Defender-for-Cloud/tree/main/Workflow%20automation


### Azure Open AI

https://techcommunity.microsoft.com/t5/azure-integration-services-blog/integrate-azure-open-ai-in-teams-channel-via-logic-app/ba-p/3776048

https://techcommunity.microsoft.com/t5/azure-integration-services-blog/use-logic-apps-to-build-intelligent-openai-applications/ba-p/4014121


https://qiita.com/e99h2121/items/62e1c1f86abe3467608d



以上です〜
