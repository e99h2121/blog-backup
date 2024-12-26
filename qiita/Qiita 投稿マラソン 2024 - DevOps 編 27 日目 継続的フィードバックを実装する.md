[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃないかと走り始めた個人的コミット駆動目的の投稿です。27 日目。


## 本日のタイトル: 継続的フィードバックを実装する

[AZ-400: 継続的フィードバックを実装する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-implement-continuous-feedback/)

継続的フィードバックってなんやねん、という印象でしたが、Continuous Integration、Continuous Delivery と同じく継続的シリーズの Continuous feedback という模様。

https://engineering.mercari.com/blog/entry/20211206-15c9c9dc16/

成長促進のための評価 など。でもここでの評価は製品評価ですね。

[使用状況とフローを追跡するためのツールを実装する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/implement-tools-track-usage-flow/)

![](https://learn.microsoft.com/ja-jp/training/wwl-azure/implement-tools-track-usage-flow/media/route-system-feedback-b3040309.png)


## Kusto 

https://zenn.dev/e99h2121/articles/azure-kusto-first


[Kusto クエリ言語 (KQL) を調べる - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/implement-tools-track-usage-flow/5-examine-kusto-query-language-kql)

[基本編 | KUSTO 100+ knocks](https://azure.github.io/fta-kusto100knocks/ja/docs/basic/)

[Alerts based on Analytics query using Custom log search - Developer Support](https://devblogs.microsoft.com/premier-developer/alerts-based-on-analytics-query-using-custom-log-search/)


ちょっと異色なのではこんなことができる。

```
print "this is a 'string' literal in double \" quotes"
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/bebb621e-a050-0cb9-8ae5-5cd9e29d5f65.png)


```
AzureDiagnostics
 | where ResourceType == "WORKFLOWS/RUNS/ACTIONS"
 | project TimeGenerated, Resource, resource_actionName_s, resource_workflowName_s, resource_runId_s, status_s
 | summarize count() by bin(TimeGenerated, 1d), Resource
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/f4f61664-eac8-f820-9f71-c0e81762a1e0.png)





## 本日のまとめ

2024.07.11 個人的注目記事
[Azure Log Analytics と Kusto (KQL) 入門 - 良く使われるオペレーターの使い方 #LogAnalytics - Qiita](https://qiita.com/YoshiakiOi/items/f2cb2b5626c2f7f71dba)
[Kusto (KQL) チートシート/リファレンス（コピペ＆即実行対応） #ChatGPT - Qiita](https://qiita.com/yoshiwatanabe/items/661a01849d6275cd7407)
[Kusto 書くときに意識していること #Query - Qiita](https://qiita.com/nextread/items/615ea20bd64817662d5c)

じっくり読む用です。

明日は [監視ダッシュボードと状態ダッシュボードを開発する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/develop-monitor-status-dashboards/)、[アプリケーション分析を自動化するプロセスを設計する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/design-processes-automate-application-analytics/) をみますー。


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
[Qiita 投稿マラソン 2024 - DevOps 編 24 日目 DevOps での Azure Automation を探索する #AzureAutomation - Qiita](https://qiita.com/e99h2121/items/6b556c0c5d353b8d25a2)
[Qiita 投稿マラソン 2024 - DevOps 編 25 日目 依存関係の管理戦略の設計と実装 #パッケージ管理 - Qiita](https://qiita.com/e99h2121/items/cda34ccf2e3a50ea141f)
[Qiita 投稿マラソン 2024 - DevOps 編 26 日目 GitHub Packages の概要 #GitHubPackages - Qiita](https://qiita.com/e99h2121/items/fbb7a1a1a352052051ce)

