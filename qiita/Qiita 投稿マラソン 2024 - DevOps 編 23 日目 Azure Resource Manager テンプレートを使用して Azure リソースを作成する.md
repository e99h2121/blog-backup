[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃないかと走り始めた個人的コミット駆動目的の投稿です。23 日目。


## 本日のタイトル: Azure Resource Manager テンプレートを使用して Azure リソースを作成する

[Azure と DSC を使用したコードとしてのインフラストラクチャの管理 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-manage-infrastructure-as-code-using-azure/) の中で、ARM テンプレートが否応なく出てきます。

ARM - Azure Resource Manager テンプレート:
[Azure Resource Manager テンプレートを使用して Azure リソースを作成する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/create-azure-resources-using-azure-resource-manager-templates/)

[Azure CLI を使用して Azure リソースを作成する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/create-azure-resources-by-using-azure-cli/)

ARM = 腕 に対して、Bicep.

[Azure Bicep について簡単にまとめ](https://zenn.dev/kentaro36/articles/a465f641e3c7c8)

> ARM テンプレートは、Azure リソースをデプロイするための JSON ファイルです。ARM テンプレートでは、リソースの種類、API バージョン、プロパティなどを指定して、Azure リソースの状態を定義します。ARM テンプレートは、Azure CLI や PowerShell などのツールでデプロイできます。

> Bicep は、ARM テンプレートの JSON を抽象化した言語です。Bicep では、ARM テンプレートで有効なリソースの種類、API バージョン、プロパティなどを使用できますが、同等の JSON と比べて、より簡単で簡潔な構文で記述できます。

[自分なりにAzure Bicepを推してみる](https://zenn.dev/yotan/articles/4978771d943141)

> 上腕二頭筋（いわゆる力こぶ）の事ですね。

[Azure Bicep実行環境の導入（M1 Mac編）](https://zenn.dev/tomot/articles/bc4855f6bded0f)

> ARM（腕）が鍛えられてbicep（上腕二頭筋）になった、とか・・・（？）。真偽は不明

[Azure Bicep テンプレートを使用したデプロイ - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/implement-bicep/8-azure-deployment-use-resource-manager-templates)
そういえば少し前に [VS Code から Bicep で Logic Apps デプロイ #VSCode - Qiita](https://qiita.com/e99h2121/items/0412f70a017827e7f79e) を試した。



## 本日のまとめ

2024.07.06 個人的注目記事

ARM templates と Terraform で検討、されています。

[Azure の構成管理を ARM templates と Terraform で検討してみた #QiitaAzure - Qiita](https://qiita.com/nassy20/items/9bf9042da8319bf0ee37)

> ゴールはあくまで "インフラを継続的に再利用可能にする"

> 少し触ったり調べた程度だと どちらも DRY RUN 、 コードレビューができ、IaC をする上で申し分ないように感じます。
> ただし、大規模化すると使い勝手も変わってくるかもしれません。



明日は、 [DevOps での Azure Automation を探索する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/explore-azure-automation-devops/) を見ますー。



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

