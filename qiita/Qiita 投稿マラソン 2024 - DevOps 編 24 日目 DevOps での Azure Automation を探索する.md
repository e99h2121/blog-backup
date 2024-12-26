[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃないかと走り始めた個人的コミット駆動目的の投稿です。24 日目。


## 本日のタイトル: DevOps での Azure Automation を探索する

[Azure と DSC を使用したコードとしてのインフラストラクチャの管理 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-manage-infrastructure-as-code-using-azure/) における DevOps での Azure Automation です。

> 環境のプロビジョニングと構成管理を手動で実行するのは手間がかかり、エラーが発生しやすくなります。Microsoft Azure DevOps では、手動実行によって発生するエラーの確率を減らすオートメーションを推奨しています。また、オートメーションには、分野の専門家に頼ることなく、作業を迅速に完了できるという追加の利点もあります。

> Azure Automation は、クラウドやエンタープライズ環境で一般的に実行される、手動で、実行時間が長く、エラーが発生しやすく、頻繁に繰り返されるタスクをユーザーが自動化する方法を提供する Azure サービスです。Azure Automation により、時間が節約され、通常の管理タスクの信頼性が向上します。

> タスクを一定間隔で自動的に実行するようにスケジュールを設定することもできます。
> Runbook を使用してプロセスを自動化したり、Desired State Configuration (DSC) を使用して構成管理を自動化したりできます。

> Azure Automation は、Azure 内でオートメーションを実行する唯一の方法ではありません。オープンソース ツールを使用してこれらの操作の一部を実行することもできます。ただし、Azure Automation で利用できる統合フックでは、これらの操作を手動で行った場合に管理する必要がある統合の複雑さの多くが取り除かれています。


[DevOps での Azure Automation を探索する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/explore-azure-automation-devops/)

## Runbook を触る

Runbook にはいくつか種類があります。
[Azure Automation の Runbook の種類 | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/automation/automation-runbook-types?tabs=lps72%2Cpy10)

[Azure Automation で Runbook を開始する | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/automation/start-runbooks) に従って、PowerShell で動かしてみます。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/b69d1f59-7f3c-2eb3-019a-76c991a12514.png)

[チュートリアル - Azure Automation で PowerShell ワークフロー Runbook を作成する | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/automation/learn/automation-tutorial-runbook-textual#add-code-to-the-runbook)

```
Write-Output " `r`n"
Write-Output "Non-Parallel"
Get-Date
Start-Sleep -s 3
Get-Date
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/933bdce9-f9a7-9643-cc75-a490a32f2bf5.png)


等々...


https://github.com/azureautomation/runbooks

Sample Automation runbooks が探せます。



## 本日のまとめ

2024.07.07 個人的注目記事

[Power Apps や Power Automate で運用管理業務を効率化しよう #PowerShell - Qiita](https://qiita.com/Takashi_Masumori/items/0662d54d35cee57d64d2)

Azure Automation は PowerAutomate から利用できたりもします。

次回は [依存関係の管理戦略の設計と実装 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-design-implement-dependency-management-strategy/) へ入りますー。


ここまでの記事: 
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 開会宣言 #AzureDevOps - Qiita](https://qiita.com/e99h2121/items/02fcccdc257a0c534fff)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 2 日目 Azure DevOps Labs #AzureDevOps - Qiita](https://qiita.com/e99h2121/items/f3e9672103aead998379)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 3 日目 Azure Boards #カンバン - Qiita](https://qiita.com/e99h2121/items/d79a7edba67b133dfc37)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 4 日目 Azure Pipelines #AzurePipelines - Qiita](https://qiita.com/e99h2121/items/564e9126eb5f93765346)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 5 日目 Azure Artifacts #AzureArtifacts - Qiita](https://qiita.com/e99h2121/items/d0f2b3f5c308d0910775)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 6 日目 Azure Repos #GitHub - Qiita](https://qiita.com/e99h2121/items/f78e69d9c82b60addb82)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 7 日目 Azure Test Plans #TestRail - Qiita](https://qiita.com/e99h2121/items/b4598ffb6fffd9ab07a5)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 8 日目 分析とレポート #AzureDevOps - Qiita](https://qiita.com/e99h2121/items/8e9e0560dee99bf4b586)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 9 日目 エンタープライズ DevOps の開発 #devops - Qiita](https://qiita.com/e99h2121/items/d2ddb9781858e4e46459)
[Qiita 投稿マラソン 2024 - DevOps 編 10 日目 GitHub プロジェクトとプロジェクト ボードの概要 #GitHubProjects - Qiita](https://qiita.com/e99h2121/items/656daacf47c62a895608)
[Qiita 投稿マラソン 2024 - DevOps 編 11 日目 GitHub を Azure Boards にリンクする #AzureBoards - Qiita](https://qiita.com/e99h2121/items/d4a9151f7950052cbb7f)
[Qiita 投稿マラソン 2024 - DevOps 編 12 日目 継続的デリバリーのための Git ブランチ モデルを確認する #ブランチ戦略 - Qiita](https://qiita.com/e99h2121/items/f1e958820648b84f5b52)
[Qiita 投稿マラソン 2024 - DevOps 編 13 日目 技術的負債を特定する #技術的負債 - Qiita](https://qiita.com/e99h2121/items/03ebc00cb83d0e3607c4)
[Qiita 投稿マラソン 2024 - DevOps 編 14 日目 Azure Pipelines と GitHub Actions での CI の実装 #GitHubActions - Qiita](https://qiita.com/e99h2121/items/3735f3e085504eb77e44)
[Qiita 投稿マラソン 2024 - DevOps 編 15 日目 Azure Pipelines エージェントとプールを管理する #AzurePipelines - Qiita](https://qiita.com/e99h2121/items/b00195426a3602d2c449)
[Qiita 投稿マラソン 2024 - DevOps 編 16 日目 GitHub Actions を使用した継続的インテグレーションについて学習する #GitHubActions - Qiita](https://qiita.com/e99h2121/items/e12a4360a94fcad4a754)
[Qiita 投稿マラソン 2024 - DevOps 編 17 日目 リリース戦略の設計と実装 #リリース - Qiita](https://qiita.com/e99h2121/items/2b4ffd5a4dc7ccd58515)
[Qiita 投稿マラソン 2024 - DevOps 編 18 日目 デプロイ パターンの概要 #リリース - Qiita](https://qiita.com/e99h2121/items/107a192aebabe08fffbe)
[Qiita 投稿マラソン 2024 - DevOps 編 19 日目 ブルーグリーン デプロイとフィーチャー トグルの実装 #ブルーグリーンデプロイメント - Qiita](https://qiita.com/e99h2121/items/93491d740e4ca4ae9f53)
[Qiita 投稿マラソン 2024 - DevOps 編 20 日目 カナリア リリースとダーク ローンチを実装する #カナリアリリース - Qiita](https://qiita.com/e99h2121/items/c7d9acedc9fc3ec71973)
[Qiita 投稿マラソン 2024 - DevOps 編 21 日目 A/B テストと段階的公開型デプロイを実装する #ABテスト - Qiita](https://qiita.com/e99h2121/items/6117751b1c651481cbbd)
[Qiita 投稿マラソン 2024 - DevOps 編 22 日目 Azure と DSC を使用したコードとしてのインフラストラクチャの管理 #IaC - Qiita](https://qiita.com/e99h2121/items/3f6f0e142d4f07695284)
[Qiita 投稿マラソン 2024 - DevOps 編 23 日目 Azure Resource Manager テンプレートを使用して Azure リソースを作成する #ARMTemplate - Qiita](https://qiita.com/e99h2121/items/131526ee2f3b522f54fc)

もう後半戦ですね... 
