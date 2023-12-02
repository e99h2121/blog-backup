https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html

[式関数のリファレンス ガイド - Azure Logic Apps | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/logic-apps/workflow-definition-language-functions-reference#contains)
ベタにワークフロー内に変数を保持しただけ版

## 判定
`@{contains(variables('JapanHoliday2023'), convertFromUtc(UtcNow(), 'Tokyo Standard Time', 'MMdd'))}`

True = 祝日

## 祝日データ


```md:2023年
"JapanHoliday2023_Val": {
                "inputs": {
                    "variables": [
                        {
                            "name": "JapanHoliday2023",
                            "type": "array",
                            "value": [
                                "0101",
                                "0102",
                                "0109",
                                "0211",
                                "0223",
                                "0321",
                                "0429",
                                "0503",
                                "0504",
                                "0505",
                                "0717",
                                "0811",
                                "0918",
                                "0923",
                                "1009",
                                "1103",
                                "1123"
                            ]
                        }
                    ]
                },
                "runAfter": {},
                "type": "InitializeVariable"
            },
```

```md:2024年
            "JapanHoliday2024_Val": {
                "inputs": {
                    "variables": [
                        {
                            "name": "JapanHoliday2024",
                            "type": "array",
                            "value": [
                                "0101",
                                "0108",
                                "0211",
                                "0212",
                                "0223",
                                "0320",
                                "0429",
                                "0503",
                                "0504",
                                "0505",
                                "0506",
                                "0715",
                                "0811",
                                "0812",
                                "0916",
                                "0922",
                                "0923",
                                "1014",
                                "1103",
                                "1104",
                                "1123"
                            ]
                        }
                    ]
                },
                "runAfter": {},
                "type": "InitializeVariable"
            },
```


## 他 参考
[Power Automateで祝日を判定したい｜アイシーティーリンク株式会社 公式ブログ](https://note.com/ictlink/n/ne5a6ad3b16a1)
[Power Automate - 祝日か判定し処理内容を変更/ 中断/ 停止する](https://kurataku.com/powerautomate-holidays-judgment/)
