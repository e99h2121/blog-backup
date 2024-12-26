CSV 2 JSON、略して C2J かどうかは知らないが、

これを
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/279afe95-3bc5-7d2e-f474-f4b69611746f.png)

こうします、という小話。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/112b4d77-886d-9ae9-ca36-845aaaa1e814.png)


```JSON:ARM
{
    "definition": {
        "$schema": "https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#",
        "actions": {
            "BLOB_コンテンツを取得する_(V2)": {
                "inputs": {
                    "host": {
                        "connection": {
                            "name": "@parameters('$connections')['azureblob_1']['connectionId']"
                        }
                    },
                    "method": "get",
                    "path": "/v2/datasets/@{encodeURIComponent(encodeURIComponent('https://noystorageaccount.blob.core.windows.net/'))}/files/@{encodeURIComponent(encodeURIComponent('JTJmZm9sZGVyJTJmdW1pbm9jb21wYW55LmNzdg=='))}/content",
                    "queries": {
                        "inferContentType": true
                    }
                },
                "metadata": {
                    "JTJmZm9sZGVyJTJmdW1pbm9jb21wYW55LmNzdg==": "/folder/uminocompany.csv"
                },
                "runAfter": {},
                "type": "ApiConnection"
            },
            "For_each": {
                "actions": {
                    "SplitByComma": {
                        "inputs": "@split(item(), ',')",
                        "runAfter": {},
                        "type": "Compose"
                    },
                    "作成": {
                        "inputs": {
                            "メールアドレス": "@{outputs('SplitByComma')?[3]}",
                            "社員名称": "@{outputs('SplitByComma')?[1]}",
                            "社員番号": "@{outputs('SplitByComma')?[0]}",
                            "電話番号": "@{outputs('SplitByComma')?[2]}"
                        },
                        "runAfter": {
                            "SplitByComma": [
                                "Succeeded"
                            ]
                        },
                        "type": "Compose"
                    }
                },
                "foreach": "@skip(outputs('SplitbyLine'),1)",
                "runAfter": {
                    "SplitbyLine": [
                        "Succeeded"
                    ]
                },
                "type": "Foreach"
            },
            "SplitbyLine": {
                "inputs": "@split(body('BLOB_コンテンツを取得する_(V2)'), decodeUriComponent('%0D%0A'))",
                "runAfter": {
                    "BLOB_コンテンツを取得する_(V2)": [
                        "Succeeded"
                    ]
                },
                "type": "Compose"
            },
            "json": {
                "inputs": "@outputs('作成')",
                "runAfter": {
                    "For_each": [
                        "Succeeded"
                    ]
                },
                "type": "Compose"
            }
        },
        "contentVersion": "1.0.0.0",
        "outputs": {},
        "parameters": {
            "$connections": {
                "defaultValue": {},
                "type": "Object"
            }
        },
        "triggers": {
            "manual": {
                "inputs": {
                    "schema": {}
                },
                "kind": "Http",
                "type": "Request"
            }
        }
    },
    "parameters": {
        "$connections": {
            "value": {
                "azureblob_1": {
                    "connectionId": "/subscriptions/<SubscriptionID>/resourceGroups/<ResourceGroup>/providers/Microsoft.Web/connections/azureblob",
                    "connectionName": "azureblob",
                    "connectionProperties": {
                        "authentication": {
                            "type": "ManagedServiceIdentity"
                        }
                    },
                    "id": "/subscriptions/<SubscriptionID>/providers/Microsoft.Web/locations/japaneast/managedApis/azureblob"
                }
            }
        }
    }
}
```

マネージド ID が使えるところが便利です。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/bedfaf26-8441-d47b-a6bd-84490e6bfac7.png)


## つづく
前職では外部連携と言えば CSV 出力、CSV 取込 ばかりだったのですが、JSON 楽しいですね。


https://jpazinteg.github.io/blog/LogicApps/how-to-treat-json-in-logicApps/


こんな記事もあります。つづく。
