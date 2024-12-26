https://jazug.connpass.com/event/302216/

## 「ぼくのかんがえたさいきょうの ERP 連携 w/Azure Logic Apps」

https://speakerdeck.com/e99h2121/azure-logic-apps

<script defer class="speakerdeck-embed" data-id="073d111fd67f4ccbaf18b16548b752c1" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>


## 自己紹介

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/84b3b908-3357-5966-047b-f5ce30648efe.png)

[IT エンジニア、自己紹介の練習は常にやっておいて損はないと思う #自己紹介 - Qiita](https://qiita.com/e99h2121/items/6e1f651053f98034284a)


## Logic Apps いいぞ

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/ec5d362e-bdc0-451d-7f8b-65c27ebfef2f.png)

https://qiita.com/e99h2121/items/1614d34cdf2db49c639a

https://qiita.com/e99h2121/items/d6a9f6cf28152549edd8


### ぼくのかんがえたさいきょうのワークフロー
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/efa5c8ca-30d7-39a8-c0a7-3ec0b5bcd8fd.png)


```json:json
{
    "definition": {
        "$schema": "https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#",
        "actions": {
            "Function-Catch": {
                "actions": {
                    "Terminate": {
                        "inputs": {
                            "runError": {
                                "code": "@{outputs('Call_an_Azure_function')['statusCode']}",
                                "message": "@{body('Call_an_Azure_function')}"
                            },
                            "runStatus": "Failed"
                        },
                        "type": "Terminate"
                    }
                },
                "runAfter": {
                    "Function-Try": [
                        "Failed",
                        "Skipped",
                        "TimedOut"
                    ]
                },
                "type": "Scope"
            },
            "Function-Success": {
                "actions": {
                    "BLOB_を作成する_(V2)": {
                        "inputs": {
                            "body": "@body('Word_文書を_PDF_に変換します')",
                            "headers": {
                                "ReadFileMetadataFromServer": true
                            },
                            "host": {
                                "connection": {
                                    "referenceName": "azureblob"
                                }
                            },
                            "method": "post",
                            "path": "/v2/datasets/@{encodeURIComponent(encodeURIComponent('AccountNameFromSettings'))}/files",
                            "queries": {
                                "folderPath": "/LIST",
                                "name": "1.TXT",
                                "queryParametersSingleEncoded": true
                            }
                        },
                        "runAfter": {
                            "Word_文書を_PDF_に変換します": [
                                "SUCCEEDED"
                            ]
                        },
                        "runtimeConfiguration": {
                            "contentTransfer": {
                                "transferMode": "Chunked"
                            }
                        },
                        "type": "ApiConnection"
                    },
                    "Word_文書を_PDF_に変換します": {
                        "inputs": {
                            "host": {
                                "connection": {
                                    "referenceName": "wordonlinebusiness"
                                }
                            },
                            "method": "get",
                            "path": "/api/templates/convertFile",
                            "queries": {
                                "drive": "b!ycyIdAWTIESFQLIiyjl8YvzFU_yU0B9HiBRWkSCunCBiOI6IzBXwR5FX5_OiMFWQ",
                                "file": "1.TXT",
                                "format": "pdf",
                                "source": "me"
                            }
                        },
                        "type": "ApiConnection"
                    },
                    "メールの送信_(V2)": {
                        "inputs": {
                            "body": {
                                "Body": "<p>正常終了しました</p><p>----</p><p>@{convertFromUtc(utcNow(), 'Tokyo Standard Time', 'yyyyMMddHHmmss')} from @{workflow().runid}</p><br>",
                                "Importance": "Normal",
                                "Subject": "正常終了",
                                "To": "nobukoyamada@example.com"
                            },
                            "host": {
                                "connection": {
                                    "referenceName": "outlook"
                                }
                            },
                            "method": "post",
                            "path": "/v2/Mail"
                        },
                        "runAfter": {
                            "BLOB_を作成する_(V2)": [
                                "SUCCEEDED"
                            ]
                        },
                        "type": "ApiConnection"
                    }
                },
                "runAfter": {
                    "Function-Try": [
                        "Succeeded"
                    ]
                },
                "type": "Scope"
            },
            "Function-Try": {
                "actions": {
                    "Call_Bat_Script_on_VM_via_REST_": {
                        "inputs": {
                            "method": "POST",
                            "uri": "http://stat.us/200"
                        },
                        "runAfter": {
                            "Call_an_Azure_function": [
                                "SUCCEEDED"
                            ]
                        },
                        "runtimeConfiguration": {
                            "contentTransfer": {
                                "transferMode": "Chunked"
                            }
                        },
                        "type": "Http"
                    },
                    "Call_an_Azure_function": {
                        "inputs": {
                            "function": {
                                "connectionName": "azureFunctionOperation"
                            },
                            "method": "POST"
                        },
                        "type": "Function"
                    }
                },
                "runAfter": {
                    "Read_blob_content": [
                        "SUCCEEDED"
                    ]
                },
                "type": "Scope"
            },
            "Read_blob_content": {
                "inputs": {
                    "parameters": {
                        "blobName": "uminocompany.csv",
                        "containerName": "list"
                    },
                    "serviceProviderConfiguration": {
                        "connectionName": "AzureBlob",
                        "operationId": "readBlob",
                        "serviceProviderId": "/serviceProviders/AzureBlob"
                    }
                },
                "runAfter": {},
                "type": "ServiceProvider"
            }
        },
        "contentVersion": "1.0.0.0",
        "outputs": {},
        "triggers": {
            "When_a_HTTP_request_is_received": {
                "kind": "Http",
                "type": "Request"
            }
        }
    },
    "kind": "Stateful"
}
```



### 最近のお披露目

**📢 Azure Logic Apps (Standard) workflow assistant - Public Preview 🎊 - Microsoft Community Hub**
https://techcommunity.microsoft.com/t5/azure-integration-services-blog/azure-logic-apps-standard-workflow-assistant-public-preview/ba-p/3978705

**Azure Logic Apps の Standard ワークフローに AI を利用したヘルプを取り入れる**
https://learn.microsoft.com/ja-jp/azure/logic-apps/workflow-assistant-standard


## 私と ERP と Functions 的なもの

https://qiita.com/e99h2121/items/d9a83a6e47a53dcfbfbd

https://qiita.com/e99h2121/items/1cf00b010b886ab1ddc4

https://qiita.com/e99h2121/items/38cb0e004d51dffd2716


## まとめ

https://jpazinteg.github.io/blog/LogicApps/LogicApps-HeadFirst/

https://jpazinteg.github.io/blog/

以上です〜
