Bicep とは ARM に対して上腕二頭筋らしい。

## VS Code から Bicep を使う準備

[Bicep の開発およびデプロイ環境のセットアップ - Azure Resource Manager | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/azure-resource-manager/bicep/install)
[Bicep - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-bicep)
[Bicep ファイルを作成する - Visual Studio Code - Azure Resource Manager | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/azure-resource-manager/bicep/quickstart-create-bicep-use-visual-studio-code?tabs=CLI)

上に従いセットアップ。

## 書いてみる
ひとまず書いてみる。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/4bc192e5-868f-490f-84dd-95ab40e0b634.png)

### 視覚化

視覚化できる。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/6ee02945-12ab-c71f-d889-8be899dd3647.png)

### [デプロイ](https://learn.microsoft.com/ja-jp/azure/azure-resource-manager/bicep/quickstart-create-bicep-use-visual-studio-code?tabs=CLI#deploy-the-bicep-file)

ひとまずデプロイしてみよう。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/5d9c0359-df87-f4fa-d118-b0e146052c89.png)

## クイック スタート

以下に従う。

[クイック スタート - Bicep を使用して従量課金ロジック アプリ ワークフローを作成する - Azure Logic Apps | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/logic-apps/quickstart-create-deploy-bicep?tabs=CLI)

[azure-quickstart-templates/quickstarts/microsoft.logic/logic-app-create/main.bicep at master · Azure/azure-quickstart-templates · GitHub](https://github.com/Azure/azure-quickstart-templates/blob/master/quickstarts/microsoft.logic/logic-app-create/main.bicep)


```main.parameter.json
{
  "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentParameters.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "testUri": {
      "value": "https://azure.status.microsoft/status/"
    },
    "location": {
      "value": "japaneast"
    },
    "logicAppName": {
      "value": "mybiceptest"
    }
  }
}
```

## 完成

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d5154bb1-65f9-9d43-f67e-38c066f2e0c7.png)

Bicep でデプロイできました。
