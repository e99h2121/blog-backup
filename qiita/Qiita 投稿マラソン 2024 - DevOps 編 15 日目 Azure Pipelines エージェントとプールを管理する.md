[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃないかと走り始めた個人的コミット駆動目的の投稿です。15 日目。



## 本日のタイトル: Azure Pipelines エージェントとプールを管理する

[Azure Pipelines エージェント - Azure Pipelines | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/devops/pipelines/agents/agents?view=azure-devops&tabs=yaml%2Cbrowser) とは...

> Azure Pipelines を使用したコードのビルドまたはソフトウェアのデプロイには、少なくとも 1 つのエージェントが必要です。 コードや人を追加していけば、それだけ多くが最終的に必要になります。

> パイプラインを実行すると、システムによって 1 つ以上のジョブが開始されます。 エージェントは、一度に 1 つのジョブを実行するエージェント ソフトウェアがインストールされたコンピューティング インフラストラクチャです。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/2230c010-9da2-389a-04ed-27e0321c53f4.png)
この人のイメージでした。[Jenkins Artwork](https://www.jenkins.io/artwork/)

[Azure Pipelines エージェントとプールを管理する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/manage-azure-pipeline-agents-pools/)
[定義済みのエージェント プールを探索する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/manage-azure-pipeline-agents-pools/5-explore-predefined-agent-pool)


> 既定では、次の仮想マシンのイメージが提供されます。
> Visual Studio 2022 を含む Windows Server 2022。
> Visual Studio 2019 を含む Windows Server 2019。
> Ubuntu 20.04。
> Ubuntu 18.04。
> macOS 11 Big Sur。
> macOS X Catalina 10.15。


[エージェント プールの一般的な状況を理解する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/manage-azure-pipeline-agents-pools/6-understand-typical-situations-for-agent-pools)

[パイプライン戦略を設計して実装する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/implement-pipeline-strategy/)

[Azure Pipelines と統合する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/integrate-azure-pipelines/)



- セルフホステッドと Microsoft ホステッド。
- エージェント プールは組織全体が対象範囲であり、プロジェクト間で共有できる。
- 管理者がプロジェクト エージェント プールのすべてのロールのメンバーシップを管理できる。

などとなりそう。

https://learn.microsoft.com/ja-jp/shows/exam-readiness-zone/preparing-for-az-400-design-and-implement-build-and-release-pipelines-3-of-5

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/982cacb4-df52-6adc-7ca1-4d847c2196aa.png)



## 本日のまとめ
[DevOps の Self-hosted エージェントを構築して使ってみよう！ | Japan Developer Support Core Team Blog](https://jpdscore.github.io/blog/azuredevops/try-self-hosted-agent/)
[Azure DevOps Pipelines の Microsoft-hosted と Self-hosted #Unity - Qiita](https://qiita.com/akiojin/items/1fb2d516399967c183bf)
[Azure DevOps で Self-hosted 環境を構築する方法 #devops - Qiita](https://qiita.com/akiojin/items/ef9226b430ef73806b78)
[Azure DevOpsのカレンダー | Advent Calendar 2023 - Qiita](https://qiita.com/advent-calendar/2023/azuredevops)

以上なども読んでみました。


明日は

[GitHub Actions を使用した継続的インテグレーションについて学習する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/learn-continuous-integration-github-actions/)


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
