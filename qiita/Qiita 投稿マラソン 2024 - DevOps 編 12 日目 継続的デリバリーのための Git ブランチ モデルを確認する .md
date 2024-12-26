[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃない、これをテーマに走り出してみたら良いじゃないという個人的コミット駆動です。

## 本日のタイトル: 継続的デリバリーのための Git ブランチ モデルを確認する

[エンタープライズ DevOps の開発 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-work-git-for-enterprise-devops/)

[ブランチの戦略とワークフローを設計し、実装する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/manage-git-branches-workflows/) 

[継続的デリバリーのための Git ブランチ モデルを確認する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/manage-git-branches-workflows/4-explore-git-branch-model-for-continuous-delivery)

> プロセスのオーバーヘッドが多すぎるブランチ モデルは、顧客に変更を加える速度を上げるのに役立ちません。ブランチ モデルを開発すると、品質の低い変更を出荷しないための十分なパディングが得られます。 ただし、速度を低下するほど多くのプロセスを導入することはありません。

> インターネットには、Git 用のブランチ戦略があふれています。正しいか間違っているかではなく、チームに最適なブランチ戦略が役立ちます。


[Git ブランチ ポリシーと設定 - Azure Repos | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/devops/repos/git/branch-policies?view=azure-devops&tabs=browser)
[ブランチ ポリシー - Azure Repos | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/devops/repos/git/branch-policies-overview?view=azure-devops)


- レビュー担当者の最少数を要求する
- リンクされた作業項目を確認する
- コメント解決の有無を確認する
- マージの種類を制限する
- ビルドの検証
- 状態の確認
- コードのレビュー担当者を自動的に含める
- ブランチ ポリシーをバイパスする

[既存の Git リポジトリを複製する - Azure Repos | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/devops/repos/git/clone?view=azure-devops&tabs=visual-studio-2022)
> forking ワークフローでは、フォークを作成してローカルで複製し、ローカルで変更を加えてブランチにプッシュし、アップストリームに PR を作成して完了したら、フォークをアップストリームから最新版に同期します



https://learn.microsoft.com/ja-jp/shows/exam-readiness-zone/preparing-for-az-400-design-and-implement-source-control-2-of-5

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/dab9f436-14d5-09af-2612-6d08d0a5ab80.png)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/915b671b-aecf-ae71-ca8a-b190d3676b5e.png)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/a91a469c-3e51-c4a4-b7d8-000ccd96e9c1.png)


## 演習

演習: [Git をローカルで操作する方法を説明する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/introduction-to-devops/11-describe-working-git-locally)

`dotnet new mvc`

でこれができる。驚き。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/767d7ed0-07fe-ceae-4220-bec88ceb78a9.png)

拡張機能など

[GitLens — Git supercharged](https://gitlens.amod.io/)
[Pull Request Merge Conflict Extension - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.conflicts-tab)


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/8f6c73e2-233d-8a77-7815-29d6261ae653.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/b6c44b61-b43f-6a60-510f-61b7114e43d3.png)


「正しいか間違っているかではなく、チームに最適なブランチ戦略」とのことで、以下などが参考になりそう。


[Azure Reposでブランチポリシーを設定する方法 #AzureDevOps - Qiita](https://qiita.com/uhooi/items/826e624f36e9a230ec3c)
[チームでのアプリ開発におけるブランチ戦略とプルリクエストのマージ方法](https://zenn.dev/altiveinc/articles/git-branch-merge-policy)

[Gitにおけるブランチ戦略について調べてみた #git-flow - Qiita](https://qiita.com/trsn_si/items/cfecbf7dff20c64628ea)
[【第1回】Gitブランチ戦略について調べた（前編）](https://zenn.dev/asilentvoice/articles/fb8aadb385b9b8)
[【第2回】Gitブランチ戦略について調べた（後編）](https://zenn.dev/asilentvoice/articles/969551b9fb2744)


https://learn.microsoft.com/ja-jp/azure/devops/repos/git/git-branching-guidance?view=azure-devops

に記されているプラクティスが面白いのでメモ。

## プラクティス

### Microsoft による DevOps 開発手法

https://learn.microsoft.com/ja-jp/devops/develop/how-microsoft-develops-devops

### トランクベースの分岐戦略

> さまざまなニーズに対応するために、Microsoft は [トランクベースの分岐戦略](https://trunkbaseddevelopment.com/) を使用して、製品を迅速に開発し、定期的に展開し、変更を運用環境に安全に配信できるようにしています。

https://trunkbaseddevelopment.com/

### プラットフォーム エンジニアリングの原則

> Microsoft では、One Engineering System の一部として [プラットフォーム エンジニアリングの原則](https://learn.microsoft.com/ja-jp/platform-engineering/) も使用しています。

https://learn.microsoft.com/ja-jp/platform-engineering/

### ブランチと機能フラグ

> バグを修正したり機能を実装したりするには、開発者はメインの統合ブランチから新しいブランチを作成します。 Git の軽量ブランチ モデルは、コードのコントリビューションごとに、これらの短期間の topic ブランチを作成します。 開発者は [機能フラグ](https://learn.microsoft.com/ja-jp/devops/operate/progressive-experimentation-feature-flags) を使用して早期にコミットし、長時間実行される機能ブランチを回避します。


https://learn.microsoft.com/ja-jp/devops/operate/progressive-experimentation-feature-flags

>  2 つの別々の概念があります。 リング はデプロイメント用であり、ステージ は機能フラグ用です。 リングとステージ について詳しくご覧ください。

<iframe width="1060" height="596" src="https://www.youtube.com/embed/QP_u4ipP2SU" title="Safe Deployment Practices" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


> 独自の機能フラグ インフラストラクチャを構築することも可能ですが、一般的には [LaunchDarkly](https://launchdarkly.com/) または [Split](https://marketplace.visualstudio.com/items?itemName=SplitSoftware.split-for-azuredevops) のようなプラットフォームを採用することをお勧めします。 機能フラグ機能を再構築するのではなく、機能の構築に投資することをお勧めします。

https://launchdarkly.com/

https://marketplace.visualstudio.com/items?itemName=SplitSoftware.split-for-azuredevops


### [機能フラグを使用して実行時間の長いブランチを管理する](https://learn.microsoft.com/ja-jp/azure/devops/repos/git/git-branching-guidance?view=azure-devops#use-feature-flags-to-manage-long-running-branches)

https://martinfowler.com/articles/feature-toggles.html

### [機能ブランチに名前を付ける際の推奨事項](https://learn.microsoft.com/ja-jp/azure/devops/repos/git/git-branching-guidance?view=azure-devops#name-your-feature-branches-by-convention)

> 機能ブランチに名前を付ける際の推奨事項は次のとおりです。

>- ユーザー/ユーザー名/説明
>- ユーザー/ユーザー名/作業項目
>- バグ修正/説明
>- 機能/機能名
>- 機能/機能領域/機能名
>- 修正プログラム/説明

### [正常な pull request に関するいくつかの推奨事項](https://learn.microsoft.com/ja-jp/azure/devops/repos/git/git-branching-guidance?view=azure-devops#review-and-merge-code-with-pull-requests)

> 正常な pull request に関するいくつかの推奨事項は次のとおりです。

>- レビュー担当者 2 名が、[調査に基づく最適な数](https://www.microsoft.com/en-us/research/publication/convergent-software-peer-review-practices/) です。
>- チームに既にコード確認プロセスがある場合は、既に実行している内容に pull request を取り込みます。
>- 同じレビュー担当者を多数の pull request に割り当てる際には注意してください。 レビュー担当者の責任がチーム全体で共有されている場合、pull request の機能が向上します。
>- 十分に詳しい説明を提供して、レビュー担当者が変更を迅速に処理できるようにします。
>- pull request のあるステージされている環境で実行されている変更のビルドまたはリンクされたバージョンを含めます。 他のユーザーは、容易に変更をテストできます。

https://www.microsoft.com/en-us/research/publication/convergent-software-peer-review-practices/




## 本日のまとめ


2024.06.24 個人的注目記事
[Gitでコード管理する際の運用ガイドライン #コードレビュー - Qiita](https://qiita.com/nash_efp/items/b937df8cd0f852308e09)


つづく
次回は「技術的負債を特定する」を見ますー。

[技術的負債を特定する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/identify-technical-debt/)
[GitHub Advanced Security の概要 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/identify-technical-debt/6-introduction-to-github-advanced-security)


---

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



