[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃないかと走り始めた個人的コミット駆動目的の投稿です。


## 本日のタイトル: Azure Pipelines と GitHub Actions での CI の実装

[AZ-400: Azure Pipelines と GitHub Actions での CI の実装 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-implement-ci-azure-pipelines-github-actions/)

4 日目で見た これです。
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 4 日目 Azure Pipelines #AzurePipelines - Qiita](https://qiita.com/e99h2121/items/564e9126eb5f93765346)

[Azure Pipelines について確認する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/explore-azure-pipelines/)
[Azure Pipeline の主な用語を理解する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/explore-azure-pipelines/4-understand-key-terms)

> エージェント
エージェントは、1 つのビルドまたは配置ジョブを実行するインストール可能なソフトウェアです。

> アーティファクト
成果物は、ビルドによって発行されるファイルまたはパッケージのコレクションです。

> ビルド
ビルドは、パイプラインの 1 つの実行を表します。 

> 継続的デリバリー
継続的デリバリー (CD) (継続的配置とも呼ばれます) は、コードをビルドし、テストし、1 つ以上のテストおよび運用ステージに配置するプロセスです。 

> 継続的インテグレーション
継続的インテグレーション (CI) は、開発チームがコードのテストとビルドを簡略化するために使う手法です。

> 配置ターゲット
配置ターゲットは、開発中のアプリケーションをホストするために使われる仮想マシン、コンテナー、Web アプリなどの任意のサービスです。 ビルドが完了してテストが実行された後に、パイプラインによって 1 つ以上の配置ターゲットにアプリが配置されます。

> ジョブ
1 つのビルドには、1 つ以上のジョブが含まれています。 ほとんどのジョブはエージェント上で実行されます。 ジョブは、一連のステップの実行境界を表します。 すべてのステップは、同じエージェント上で一緒に実行されます。

> パイプライン
パイプラインには、アプリの継続的インテグレーションと配置プロセスを定義します。タスクというステップで構成されています。

> リリース
リリースは、リリース パイプラインの一回の実行を表す

> ステージ
ステージは、パイプラインの主要な区分です。"アプリのビルド"、"統合テストの実行"、"ユーザーの受け入れテストへの配置" など

> タスク
タスクはパイプラインの構成要素です。ビルド パイプラインは、ビルド タスクとテスト タスクで構成される場合があります。

> トリガー
トリガーは、実行するタイミングをパイプラインに指示するために設定されます。

## Integrate GitHub with DevOps pipelines

https://learn.microsoft.com/ja-jp/shows/exam-readiness-zone/preparing-for-az-400-design-and-implement-source-control-2-of-5

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/77967b06-2fd7-f11b-207c-d3edba117e31.png)



[「GitHub CI/CD実践ガイド」を読んで、GitHub Actionsを始めよう - とことんDevOps | 日本仮想化技術のDevOps技術情報メディア](https://devops-blog.virtualtech.jp/entry/20240619/1718764468)


https://www.azuredevopslabs.com/labs/azuredevops/yaml/

こうしてみてみるとコンテナについても少々調べたほうが良さそう。
Docker のマルチステージビルド:

[マルチステージビルドについて調べる](https://zenn.dev/masaruxstudy/articles/d85f6c1af3bf65)
[Dockerのマルチステージビルドでimageを軽量化する](https://zenn.dev/hakshu/articles/docker-multi-stage-build)

## Use cases for gates

https://learn.microsoft.com/ja-jp/shows/exam-readiness-zone/preparing-for-az-400-design-and-implement-build-and-release-pipelines-3-of-5

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/caba7569-7bdd-7859-9f84-efa0534ba77e.png)


## 本日のまとめ

なんとなく眺めていた中で 2024.06.26 個人的注目記事

[【都知事選】マニュフェストがGithubに公開されたので、Github Actionsのワークフローで何をしているのか解説する #GitHub - Qiita](https://qiita.com/genimura/items/426767278333a92f80db)

これですね、時事ネタ。

https://github.com/takahiroanno2024/election2024/blob/main/.github/workflows/issue-review.yml


明日は
[Azure Pipelines エージェントとプールを管理する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/manage-azure-pipeline-agents-pools/) を見ますー。



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
