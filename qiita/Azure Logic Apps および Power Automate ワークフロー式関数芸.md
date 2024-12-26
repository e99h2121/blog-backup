[式関数のリファレンス ガイド - Azure Logic Apps | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/logic-apps/workflow-definition-language-functions-reference)

この辺を駆使した色々集です。

https://zenn.dev/e99h2121/articles/logicapps-function



## 固定長 → CSV

```TXT:固定長ファイル
1234567890ｱｲｳｴｵｶｷｸｹｺAAAAAAAAAA
1234567890ｻｼｽｾｿﾀﾁﾂﾃﾄAAAAAAAAAA
1234567890ﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎAAAAAAAAAA
```

### 改行で Array 化
```
@split(replace(replace(outputs('作成'), decodeUriComponent('%0D'), ' '), decodeUriComponent('%0A'), ' '), ' ')
```

### Array を順に固定桁で取得
```
@{substring(item(), 0, 10)},@{substring(item(), 10, 10)},@{substring(item(), 20, 10)}\n
```


## FizzBuzz

```
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
}
```

## csv 2 json / json 2 csv

https://jpazinteg.github.io/blog/LogicApps/FileFormatConversion/#4%EF%BC%8ECSV-%E2%86%92-JSON

https://qiita.com/e99h2121/items/4b523757b1e5a1ac3ba9


## 日付

https://jpazinteg.github.io/blog/LogicApps/LogicApps-Functions/


## 第 n foo 曜日



https://vicugna-pacos.github.io/azure/logic-apps/recurrence-nth-weekday/

https://mizusibuki.com/pa-1-5th-weekday/

https://idea.tostring.jp/?p=7143

https://automate.sct.co.jp/knowledge/11065/


