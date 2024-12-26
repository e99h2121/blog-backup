こんにちは！ ERP 界隈から転職してまいりましてはや一年と少々の山田です。師走の第一土曜日皆様元気にお過ごしでしょうか。

この記事は [Microsoft Azure Techのカレンダー | Advent Calendar 2023 - Qiita](https://qiita.com/advent-calendar/2023/microsoft-azure-tech) の 9 日目の記事です。

ひとまず Logic Apps の宣伝から

https://jpazinteg.github.io/blog/LogicApps/LogicApps-HeadFirst/

Logic Apps 使うなら Standard、Standard 使うなら、Standard ならではの機能…


https://learn.microsoft.com/ja-jp/azure/logic-apps/single-tenant-overview-compare#stateful-and-stateless-workflows

「ステートフルおよびステートレス ワークフロー」です。

## ステートフル (Stateful) と ステートレス (Stateless)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/86d231b0-9765-f070-df2b-ccbf4a2e3002.png)


> ステートフル ワークフローは、ステートレス ワークフローよりもはるかに長い間実行を継続できます。

> ステートレス ワークフローは、"合計" サイズが 64 KB を超えないファイルなどのデータやコンテンツを処理する際に、最高のパフォーマンスを発揮します。


ということで両者 Stateful、Stateless を比較してみました。


## 予選
### Stateful で FizzBuzz
ひとまず FizzBuzz 的なことをしてみます。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/76101057-41a4-c335-2c71-9b90d1c3f1cb.png)

`For_each` で `range(1,100)`: こちらの式で 100 回処理を行えます (小ネタ)。処理をシーケンシャルにするには以下もご確認のほど。

https://learn.microsoft.com/ja-jp/azure/logic-apps/logic-apps-control-flow-loops?tabs=standard#for-each-run-sequentially



![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/5814fb92-0402-d742-1951-ff9bf8186a54.png)

30 秒ほどかかってこうなりました。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/465cf0e3-7ef2-95d6-a8fd-2bf7374e56fe.png)

### Stateless で FizzBuzz
同じソースコードを今度は Stateless にしてみます。ソースコード上からも以下ご覧いただけます。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/60748bf0-a8f2-5dbc-a5d2-c4afd2598810.png)

今度は 6 秒少々です。やはり早いのですねー！
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/00c211d4-590a-095d-ef29-681830229f02.png)

## もう少し処理させよう

入れ子式に、子ワークフローへ 100 回 Http Request を送ってみます。

https://learn.microsoft.com/ja-jp/azure/logic-apps/logic-apps-http-endpoint


### Stateful で Request 

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/3b460d93-e6e6-dadb-0da2-4d1e7cf45162.png)



```JSON:JSON
{
    "definition": {
        "$schema": "https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#",
        "actions": {
            "Compose_1": {
                "inputs": "@variables('Val')",
                "runAfter": {
                    "For_each_1": [
                        "SUCCEEDED"
                    ]
                },
                "type": "Compose"
            },
            "For_each_1": {
                "actions": {
                    "Append_to_string_variable": {
                        "inputs": {
                            "name": "Val",
                            "value": "@{items('For_each_1')} / @{if(equals(mod(items('For_each_1'), 3), 0), 'Fizz', ' ')}@{if(equals(mod(items('For_each_1'), 5), 0), 'Buzz', ' ')}"
                        },
                        "runAfter": {
                            "Invoke_a_workflow_in_this_workflow_app": [
                                "SUCCEEDED"
                            ]
                        },
                        "type": "AppendToStringVariable"
                    },
                    "Invoke_a_workflow_in_this_workflow_app": {
                        "inputs": {
                            "host": {
                                "workflow": {
                                    "id": "test"
                                }
                            }
                        },
                        "type": "Workflow"
                    }
                },
                "foreach": "@range(1,100)",
                "runAfter": {
                    "Initialize_variable": [
                        "SUCCEEDED"
                    ]
                },
                "runtimeConfiguration": {
                    "concurrency": {
                        "repetitions": 1
                    }
                },
                "type": "Foreach"
            },
            "Initialize_variable": {
                "inputs": {
                    "variables": [
                        {
                            "name": "Val",
                            "type": "string"
                        }
                    ]
                },
                "runAfter": {},
                "type": "InitializeVariable"
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

結果、30 秒ほど。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/875bc06e-5ba9-6a56-a348-4933ff5357f5.png)



### Stateless で Request 

同じく Http Request を 100 回実行させてみます。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/10405fde-4548-cc3f-f4da-804428eb4edd.png)



```JSON:JSON
{
    "definition": {
        "$schema": "https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#",
        "actions": {
            "Compose_1": {
                "inputs": "@variables('Val')",
                "runAfter": {
                    "For_each_1": [
                        "SUCCEEDED"
                    ]
                },
                "type": "Compose"
            },
            "For_each_1": {
                "actions": {
                    "Append_to_string_variable": {
                        "inputs": {
                            "name": "Val",
                            "value": "@{items('For_each_1')} / @{if(equals(mod(items('For_each_1'), 3), 0), 'Fizz', ' ')}@{if(equals(mod(items('For_each_1'), 5), 0), 'Buzz', ' ')}"
                        },
                        "runAfter": {
                            "Invoke_a_workflow_in_this_workflow_app": [
                                "SUCCEEDED"
                            ]
                        },
                        "type": "AppendToStringVariable"
                    },
                    "Invoke_a_workflow_in_this_workflow_app": {
                        "inputs": {
                            "host": {
                                "workflow": {
                                    "id": "test"
                                }
                            }
                        },
                        "type": "Workflow"
                    }
                },
                "foreach": "@range(1,100)",
                "runAfter": {
                    "Initialize_variable": [
                        "SUCCEEDED"
                    ]
                },
                "runtimeConfiguration": {
                    "concurrency": {
                        "repetitions": 1
                    }
                },
                "type": "Foreach"
            },
            "Initialize_variable": {
                "inputs": {
                    "variables": [
                        {
                            "name": "Val",
                            "type": "string"
                        }
                    ]
                },
                "runAfter": {},
                "type": "InitializeVariable"
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
    "kind": "Stateless"
}
```

結果 10 秒そこそこ。なるほどなるほど。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/ef9d4dc3-f41b-e829-fb3d-91b61715c445.png)

実行履歴を確認するには「デバッグ モードを有効にする」を ON にする、あるいは以下、
「ステートレス ワークフローの実行履歴を有効にする」をご確認くださいませ。実用時はデバッグを無効化することでもう少し早くなりそうですね。

https://learn.microsoft.com/ja-jp/azure/logic-apps/create-single-tenant-workflows-azure-portal#enable-run-history-for-stateless-workflows




## まとめ

### ステートフル ワークフローとステートレス ワークフローの違いのまとめ

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/4369dc64-160f-d7eb-f297-d7603e608e55.png)



今回はステートレス ワークフローに実際どういう特長があるのかを確かめる目的で動作確認してみましたが、ステートフル ワークフローも含めた Standard Logic Apps (シングルテナント) にはまだまだ実業務で使えるポイントが豊富に取り揃えられております。当 [Microsoft Azure Techのカレンダー | Advent Calendar 2023 - Qiita](https://qiita.com/advent-calendar/2023/microsoft-azure-tech) の 25日にも Standard Logic Apps のパワフルな解説記事が予定されている模様です。どうかお楽しみに。

https://learn.microsoft.com/ja-jp/azure/logic-apps/single-tenant-overview-compare#summary-differences-between-stateful-and-stateless-workflows

そして告知です！ 私、来週 12/15 (金) に 同じく Logic Apps を話題にお話しさせていただけることになりました。

https://jazug.connpass.com/event/302216/

> Azure Logic Apps で ERP こうできるんじゃないの

題して　ぼくのかんがえたさいきょうの ERP 連携 w/Azure Logic Apps　です。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/94183913-7f9b-d098-703d-9ffe956d7d6a.png)

趣味に全振りで「やってみた」、「やってみたい」を書くのは楽しいですね。以上ここまで読んでいただきありがとうございます。[Microsoft Azure Techのカレンダー | Advent Calendar 2023 - Qiita](https://qiita.com/advent-calendar/2023/microsoft-azure-tech) を購読設定して、明日の記事もお楽しみに、良き週末をお過ごしくださいませ。

