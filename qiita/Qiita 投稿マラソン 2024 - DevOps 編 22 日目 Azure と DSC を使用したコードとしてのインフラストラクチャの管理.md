[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃないかと走り始めた個人的コミット駆動目的の投稿です。22 日目。


## 本日のタイトル: Azure と DSC を使用したコードとしてのインフラストラクチャの管理

[Azure と DSC を使用したコードとしてのインフラストラクチャの管理 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-manage-infrastructure-as-code-using-azure/)

DSC が何たるか知りませんでした。

[Windows 用 Desired State Configuration (DSC) の概要 - PowerShell | Microsoft Learn](https://learn.microsoft.com/ja-jp/powershell/dsc/getting-started/wingettingstarted?view=dsc-1.1)

`Install-Module 'PSDscResources' -Verbose`

`Get-DscConfiguration`

`Get-DscLocalConfigurationManager`

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/7d80b091-833a-15ef-c51d-8d93d6ca7b33.png)

これを Azure Automation にて使えるということになります。

[Azure Automation State Configuration の使用を開始する | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/automation/automation-dsc-getting-started?view=dsc-1.1)


## Terraform なら

https://learn.microsoft.com/ja-jp/azure/developer/terraform/create-base-template-using-yeoman

https://learn.microsoft.com/ja-jp/azure/developer/terraform/test-modules-using-terratest

[「Infrastructure as Code クラウドにおけるサーバ管理の原則とプラクティス」を読み直した #Terraform - Qiita](https://qiita.com/e99h2121/items/052402f6aafe87978589)

もちろんほかにも IaC に関わる考慮事項として以下があげられております。

https://learn.microsoft.com/ja-jp/azure/developer/intro/azure-developer-key-concepts#devops-support

> GitHub のアクション
Azure DevOps
Octopus のデプロイ
Jenkins
Terraform
Ansible
Chef



## 本日のまとめ

2024.07.05 個人的注目記事

[PowerShell DSCを調べてみる #構成管理 - Qiita](https://qiita.com/kerolon/items/194d8f86fb1a121413bb)
[IaC(Infrastructure as Code) における Declarative vs. Imperative #SRE - Qiita](https://qiita.com/san-tak/items/9d9d8da4295e51f19653) 

宣言型 (Declarative) と命令型 (Imperative) のほかにも読みごたえがあります。
明日は、[Azure Resource Manager テンプレートを使用して Azure リソースを作成する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/create-azure-resources-using-azure-resource-manager-templates/) を見ますー。



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
