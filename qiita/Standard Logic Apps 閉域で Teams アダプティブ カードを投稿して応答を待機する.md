Standard Logic Apps ではファイアウォール設定配下にワークフローを作成することができます。

https://learn.microsoft.com/ja-jp/azure/logic-apps/secure-single-tenant-workflow-virtual-network-private-endpoint

https://learn.microsoft.com/ja-jp/azure/logic-apps/deploy-single-tenant-logic-apps-private-storage-account

https://learn.microsoft.com/ja-jp/azure/logic-apps/single-tenant-overview-compare

## Teams コネクタ

一方 Teams コネクタの中の「アダプティブ カードを投稿して応答を待機する」際の設定を記載します。

https://learn.microsoft.com/ja-jp/connectors/teams/


以下:
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/dc005387-496d-73bf-1c7e-3e2695194149.png)


https://ascii.jp/elem/000/004/134/4134579/

上の記事にてにて用いられている JSON を一部引用しております。

```JSON:JSON
{
    "type": "AdaptiveCard",
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.2",
    "actions": [
        {
            "type": "Action.Submit",
            "title": "送信"
        }
    ],
    "body": [
        {
            "type": "TextBlock",
            "text": "本日の勤怠",
            "wrap": true,
            "size": "Medium",
            "weight": "Bolder"
        },
        {
            "type": "Input.ChoiceSet",
            "choices": [
                {
                    "title": "出社",
                    "value": "出社"
                },
                {
                    "title": "在宅勤務",
                    "value": "在宅勤務"
                }
            ],
            "placeholder": "Placeholder text",
            "id": "myChoiceSet",
            "style": "expanded"
        }
    ]
}
```


## プライベート エンドポイントを使って Standard ロジック アプリと Azure 仮想ネットワーク間のトラフィックをセキュリティで保護する # プライベート エンドポイントを経由する受信トラフィックに関する


考慮事項が以下になってきます。

https://learn.microsoft.com/ja-jp/azure/logic-apps/secure-single-tenant-workflow-virtual-network-private-endpoint#considerations-for-inbound-traffic-through-private-endpoints

> マネージド API Webhook トリガー (push トリガー) とアクションは、パブリック クラウドで実行され、プライベート ネットワークに呼び出すことができないため、機能しません。
**呼び出しを受信するには、パブリック エンドポイントが必要です。** たとえば、このようなトリガーには、Dataverse トリガーと Event Grid トリガーがあります。


「アダプティブ_カードを投稿して応答を待機する」 アクションにて用いられるうち、
投稿を待機する動作となる ApiConnectionWebhook (マネージド API Webhook) も、以下設定にて動作します。


以下の通り Logic Apps のパブリック ネットワーク アクセスを制限している状態。


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/7e415773-c24a-ae33-a9d4-f93e21f557e2.png)


アクセス制限の詳細として、以下 AzureCloud のサービス タグを許可しておく必要があります。

 ![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/fa55ac91-2b30-b61d-46d3-bdfdf6c6a543.png)


## 結果
 
 
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/79964213-bd7c-9a17-8eb0-062e2abb7e43.png)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/a6fdf189-d9d2-a5dc-d7e2-d9ce85102892.png)



## 参考

AzureCloud とは何ぞという辺りを。

https://qiita.com/aktsmm/items/746d355b9b8e6fcc92a6

以上です～
