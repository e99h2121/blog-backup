Standard Logic Apps に PowerShell コードの実行 アクション が追加されております (プレビュー)。


https://learn.microsoft.com/ja-jp/azure/logic-apps/add-run-powershell-scripts


https://techcommunity.microsoft.com/t5/azure-integration-services-blog/unlock-inline-powershell-capabilities-to-streamline-logic-apps/ba-p/4220187

Inline コード実行が 3 種類になっています。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/5ec4366c-29ed-b40d-000c-658bcf0b82e6.png)

以下テンプレです。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/e18668b1-5119-76fb-1525-6506eb0fcaaf.png)


## PowerShell に JSON の解析をさせる

基本的なチュートリアルは公式 [Standard ワークフローで PowerShell を追加して実行する - Azure Logic Apps | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/logic-apps/add-run-powershell-scripts) に任せ、ここでは Logic Apps を使う際にたまに難儀する JSON 解析を、この PowerShell コードにやらせたら良いのではと思い、試してみました。


### フロー

お品書きはシンプルに以下流れです。BLOB を一覧表示する (V2) アクションを例に扱っています。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/cc4aa326-3d9c-ad6c-6d66-5ce891da3b25.png)

このアクションの出力例が以下です。

```json
{
    "statusCode": 200,
    "headers": {
        "Cache-Control": "no-store, no-cache",
        "Pragma": "no-cache",
        "Transfer-Encoding": "chunked",
        "Vary": "Accept-Encoding",
        "Set-Cookie": "<中略>",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
        "x-ms-request-id": "fdb55f4c-308e-4878-a805-42a2850cf630",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "x-ms-connection-parameter-set-name": "managedIdentityAuth",
        "Timing-Allow-Origin": "*",
        "x-ms-apihub-cached-response": "true",
        "x-ms-apihub-obo": "false",
        "Date": "Fri, 23 Aug 2024 23:56:28 GMT",
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": "1451",
        "Expires": "-1"
    },
    "body": {
        "value": [
            {
                "Id": "JTJmZm9sZGVyJTJmMS50eHQ=",
                "Name": "1.txt",
                "DisplayName": "1.txt",
                "Path": "/folder/1.txt",
                "LastModified": "2024-07-03T04:18:13Z",
                "Size": 7,
                "MediaType": "text/plain",
                "IsFolder": false,
                "ETag": "\"0x8DC9B17281AD230\"",
                "FileLocator": "JTJmZm9sZGVyJTJmMS50eHQ=",
                "LastModifiedBy": null
            },
            {
                "Id": "JTJmZm9sZGVyJTJmMWtidGV4dC50eHQ=",
                "Name": "1kbtext.txt",
                "DisplayName": "1kbtext.txt",
                "Path": "/folder/1kbtext.txt",
                "LastModified": "2024-07-03T04:18:13Z",
                "Size": 1020,
                "MediaType": "text/plain",
                "IsFolder": false,
                "ETag": "\"0x8DC9B172818D6AB\"",
                "FileLocator": "JTJmZm9sZGVyJTJmMWtidGV4dC50eHQ=",
                "LastModifiedBy": null
            },
            {
                "Id": "JTJmZm9sZGVyJTJmMi50eHQ=",
                "Name": "2.txt",
                "DisplayName": "2.txt",
                "Path": "/folder/2.txt",
                "LastModified": "2024-07-03T04:18:13Z",
                "Size": 9,
                "MediaType": "text/plain",
                "IsFolder": false,
                "ETag": "\"0x8DC9B17281B474D\"",
                "FileLocator": "JTJmZm9sZGVyJTJmMi50eHQ=",
                "LastModifiedBy": null
            },
            {
                "Id": "JTJmZm9sZGVyJTJmMy50eHQ=",
                "Name": "3.txt",
                "DisplayName": "3.txt",
                "Path": "/folder/3.txt",
                "LastModified": "2024-07-03T04:18:13Z",
                "Size": 5,
                "MediaType": "text/plain",
                "IsFolder": false,
                "ETag": "\"0x8DC9B17281BBC6E\"",
                "FileLocator": "JTJmZm9sZGVyJTJmMy50eHQ=",
                "LastModifiedBy": null
            },
            {
                "Id": "JTJmZm9sZGVyJTJmdGVzdC50eHQ=",
                "Name": "test.txt",
                "DisplayName": "test.txt",
                "Path": "/folder/test.txt",
                "LastModified": "2024-05-29T02:08:14Z",
                "Size": 11,
                "MediaType": "text/plain",
                "IsFolder": false,
                "ETag": "\"0x8DC7F843293F8C7\"",
                "FileLocator": "JTJmZm9sZGVyJTJmdGVzdC50eHQ=",
                "LastModifiedBy": null
            }
        ]
    }
}
```

### PowerShell コード

この結果を以下のような PowerShell コードで取得してみます。以下では "Path" プロパティを取得します。 

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/8ac64f32-fd4e-4810-346b-20c428bffb78.png)

```powershell
# BLOB_を一覧表示する_(V2) アクションの出力 (JSON) を取得
$json = (Get-ActionOutput -ActionName "BLOB_を一覧表示する_(V2)").outputs.ToString();

# JSON 文字列を PowerShell オブジェクトに変換
$jsonObject = $json | ConvertFrom-Json

# path の値を取得
$paths = $jsonObject.body.value | ForEach-Object { $_.path }

# 結果を出力
$customResponse = "Get the paths: $($paths -join ', ')"

# Use Push-WorkflowOutput to push outputs forward to subsequent actions
Push-WorkflowOutput -Output $customResponse
```


### 結果

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/6a3eba7e-87ab-5803-47b2-f24a4bc7115a.png)

以下出力。サンプルは単なるカンマ (,) 区切りですが、PowerShell の汎用性を鑑みると、お好みでコーディング自在です。

```
Get the paths: /folder/1.txt, /folder/1kbtext.txt, /folder/2.txt, /folder/3.txt, /folder/test.txt
```


## 比較

Logic Apps の各アクションで JSON プロパティを取得するには以下のような流れとなります。「動的なコンテンツ」から Path を選択する、あるいは コード にて階層を指定する。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/63fec866-33ab-23fa-f914-35dee2f54528.png)

https://jpazinteg.github.io/blog/LogicApps/how-to-treat-json-in-logicApps/


## まとめ

[Run PowerShell Scripts directly in Logic Apps with inline action](https://techcommunity.microsoft.com/t5/azure-integration-services-blog/unlock-inline-powershell-capabilities-to-streamline-logic-apps/ba-p/4220187)

> (翻訳) 主な利点:
> - **管理とコスト:** PowerShell スクリプトをワークフローに直接埋め込むことで、個別のサービスの管理に関連する複雑さとコストを削減できます。
> - **専用のスクリプトスペース:** このアクションにより、専用の .ps1 ファイルが生成され、パーソナライズされたスクリプト環境が提供されます。
> - **シームレスなデプロイ:** スクリプトはワークフローに沿ってデプロイされるため、スムーズで効率的な実行が保証されます。
> - **パブリックモジュールとプライベートモジュールのサポート:** インライン PowerShell アクションでは、管理された依存関係を有効にすることで、PowerShell ギャラリーから最大 10 個のパブリック モジュール (Az や SqlServer など) がサポートされます。さらに、Logic Apps 内でプライベート モジュールを作成して使用し、カスタム機能を実現できるため、コードの再利用とワークフローの保守性が向上します。

というところで Logic Apps の痒い所に手が届くアクションなのではないでしょうかという紹介でした。以上です～
