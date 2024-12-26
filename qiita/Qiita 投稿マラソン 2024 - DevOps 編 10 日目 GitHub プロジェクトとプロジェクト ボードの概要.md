[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃない、これをテーマに走り出してみたら良いじゃないという個人的コミット駆動です。

「またの名を 人はいかにして学びの機会を捻出するか」などという補足タイトルをつけていたのですが、長くなったので削りました。



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



## 本日のタイトル: GitHub プロジェクトとプロジェクト ボードの概要

[エンタープライズ DevOps の開発 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-work-git-for-enterprise-devops/) の続きです。

[3 日目 Azure Boards](https://qiita.com/e99h2121/items/d79a7edba67b133dfc37) で Azure Boards は見ましたが、GitHub Project も深掘りします。

[GitHub Projects と Azure Boards を使用したアジャイルの計画 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/plan-agile-github-projects-azure-boards/)

私そう言えば、GitHub Projects で個人タスク管理をやっていたことがありました...
[プロジェクトのタスク管理をどこでやるか、検討の記錄 22.01 #GitHub - Qiita](https://qiita.com/e99h2121/items/25217220c8d2c80fa633)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/2efed2ef-4b23-e6c7-1829-f4b7666c0142.png)


[GitHub プロジェクトとプロジェクト ボードの概要 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/plan-agile-github-projects-azure-boards/2-introduction-to-project-boards)

[デフォルトのプロセスおよびプロセステンプレート - Azure Boards | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/devops/boards/work-items/guidance/choose-process?view=azure-devops&tabs=agile-process)

> 基本: 最も軽量で、選択的なプレビューにあります。
スクラム: 2 番目に軽量です。
アジャイル: 多くのアジャイル メソッド用語をサポートします。
CMMI: 正式なプロセスと変更管理を最も多くサポートします。

[Azure Boards と Azure DevOps でのプロセス テンプレートの成果物の概要 - Azure Boards | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/devops/boards/work-items/guidance/cmmi-process?view=azure-devops)
> CMMI プロセスは、作業、テスト、フィードバック、コード レビューを計画および追跡するために、次の作業項目の種類 (WIT) をサポートしています。 さまざまな WIT を使って、要求、変更要求、タスク、バグなど、さまざまなタスクを追跡できます。 これらの成果物は、CMMI プロセスを使ってプロジェクトを作成するときに作成されます。 これらは、能力成熟度モデル統合 (CMMI) プロセスに基づいています。

[能力成熟度モデル統合 (CMMI)、背景メモ - Azure Boards | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/devops/boards/work-items/guidance/cmmi/guidance-background-to-cmmi?view=azure-devops)


## 本日のまとめ

ちょっと前の記事なのですが、私のタスク管理は以下がきっかけでした。
[GitHub Projects で日常のタスク管理を行う](https://zenn.dev/t4t5u0/articles/f3aeb3895fd1fb)
[GitHub Projects Beta (Table View) を用いたタスク管理](https://zenn.dev/t4t5u0/articles/githubprojectsbeta)


2024.06.21 個人的注目記事

[GitHubのProjectを使って、Azure DevOpsの複数のプロジェクトを集約して管理する - kkamegawa's weblog](https://kkamegawa.hatenablog.jp/entry/2020/10/04/184115)


つづく

明日は [GitHub を Azure Boards にリンクする - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/plan-agile-github-projects-azure-boards/5-link-github-to-azure-boards) を見ますー。
