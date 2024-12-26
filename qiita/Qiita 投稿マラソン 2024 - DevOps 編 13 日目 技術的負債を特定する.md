[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃない、これをテーマに走り出してみたら良いじゃないという個人的コミット駆動です。

## 本日のタイトル: 技術的負債を特定する

「技術的負債」という言葉、キャッチーですね。キャッチーなのでエンジニア以外にも浸透しがちだと感じますが、何が 技術的負債 なのかはちゃんと測ろうということですね。

[エンタープライズ DevOps の開発 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-work-git-for-enterprise-devops/) の最後、

[技術的負債を特定する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/identify-technical-debt/) に関するところです。

[コード品質を確認する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/identify-technical-debt/2-examine-code-quality)

> コードの品質は、主観的に測定するべきではありません。 開発者が記述するコードでは、それらのコードの品質が高く評価されますが、それはコード品質を測定するための優れた方法ではありません。 異なるチームでは、コンテキストに基づいて異なる定義が使用される場合があります

- 信頼性
- 保守容易性
- テスト容易性
- 移植性
- 再利用性

[複雑さと品質の指標を調べる - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/identify-technical-debt/3-examine-complexity-quality-metrics)

- ビルド失敗率
- デプロイ失敗率
- チケット量
- バグ バウンス率
- 計画外作業率


## ツール

以下辺りが紹介されております。

[SonarCloud Online Code Review as a Service Tool | Sonar](https://www.sonarsource.com/products/sonarcloud/)
[GitHub Advanced Security の概要 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/identify-technical-debt/6-introduction-to-github-advanced-security)
[Improve your .NET code quality with NDepend](https://www.ndepend.com/)

https://www.linuxfoundation.jp/wp-content/uploads/2020/08/J_TechnicalDebtandOpenSourceDevelopment_Whitepaper.pdf


## 本日のまとめ

2024.06.25 個人的注目記事
[技術的負債イベントに参加して ##技術的負債 - Qiita](https://qiita.com/Kudo_panda/items/3c91887dcd7775893339)
[どうやって技術的負債の雪だるまを生み出し、それを返済してきたか - 5年半越しの設計論](https://zenn.dev/339/articles/ecc4986473ca88)
[数年来の技術的負債を改修した話 - 2種類のORM並列状態からの脱却 -](https://zenn.dev/loglass/articles/94753ea267bb74)
[ユビーで技術的負債解消を通してデリバリパフォーマンスをあげた事例の紹介](https://zenn.dev/ubie_dev/articles/e0ec142f1451b7)

などなど、技術的負債 を記した記事は多いですね。と思ったら自分もこんなものが...

[「良い技術的負債と悪い技術的負債」 #TDD - Qiita](https://qiita.com/e99h2121/items/98289b21c432a67f598c)

https://blog.crisp.se/2013/10/11/henrikkniberg/good-and-bad-technical-debt



つづく

次回は [AZ-400: Azure Pipelines と GitHub Actions での CI の実装 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-implement-ci-azure-pipelines-github-actions/) に入りますー。


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
