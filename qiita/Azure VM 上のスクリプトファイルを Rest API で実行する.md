Azure Rest API で、Azure Virtual Machine 上の C:\test.ps1 というスクリプトファイルを実行するためのメモ。

## API

- Virtual Machines - Run Command
https://learn.microsoft.com/ja-jp/rest/api/compute/virtual-machines/run-command?tabs=HTTP 

[URI] で対象の VM を指定する。

POST https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommand?api-version=2022-08-01

[本文] で実行するコマンドや .ps1 ファイルを指定する。ここでは test.ps1。

```powershell
{
  "commandId": "RunPowerShellScript",
  "script": [
    "powershell C:\\test.ps1"
  ]
}
```

Logic Apps でやろうとすると以下。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/cb26210f-5523-f31c-7b54-4466f1cb0a98.png)

## 認証

- マネージド ID が簡単。
ここでは、VM 側の権限を Logic Apps に付与する。
まず Logic Apps 側にロールの割り当てができるように設定する。

[設定 - ID]、[システム割り当て済み] タブにて [状態] を “オン” にして保存。


### マネージド ID の有効化

- Azure Logic Apps でマネージド ID を使用して Azure リソースへのアクセスを認証する # Azure portal でシステム割り当て ID を有効にする
https://learn.microsoft.com/ja-jp/azure/logic-apps/create-managed-service-identity?tabs=consumption#enable-system-assigned-identity-in-azure-portal

- VMの権限を Logic Apps に付与する
[Virtual Machines] - [<対象の Virtual Machines >] - [アクセス制御 (IAM)] 
[+ 追加] から [ロールの割り当ての追加]。

[ロール] について、ここでは [仮想マシン共同作成者] ロールを使う。

- Virtual Machine Contributor
https://docs.microsoft.com/ja-jp/azure/role-based-access-control/built-in-roles#virtual-machine-contributor 
- コマンド実行には [Microsoft.Compute/virtualMachines/runCommand/action] 権限が必要

- Azure portal を使用して Azure ロールを割り当てる
https://learn.microsoft.com/ja-jp/azure/role-based-access-control/role-assignments-portal


## 仕上がり
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/1e3918b2-974e-cca7-0cbc-51c2668bddae.png)

以上です～
