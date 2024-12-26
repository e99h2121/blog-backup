[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃないかと走り始めた個人的コミット駆動目的の投稿です。19 日目。


## 本日のタイトル: ブルーグリーン デプロイとフィーチャー トグルの実装
[Azure Pipelines を使用して、セキュリティで保護された継続的配置を実装する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-implement-secure-continuous-deployment/)

[デプロイ パターンの概要 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/introduction-to-deployment-patterns/)

[ブルーグリーン デプロイとフィーチャー トグルの実装 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/implement-blue-green-deployment-feature-toggles/)
[3分でわかる ブルーグリーンデプロイメント | 日経クロステック（xTECH）](https://xtech.nikkei.com/atcl/nxt/keyword/18/00002/070800077/)

> ブルーグリーンデプロイメントとは現状の本番環境（ブルー）とは別に新しい本番環境（グリーン）を構築した上で、ロードバランサーの接続先を切り替えるなどして新しい本番環境をリリースする運用方法のこと。

> アプリケーションあるいはインフラストラクチャーで何らかの変更をする際に、この運用を採用する。現状の本番環境を変更しないのがミソだ。現状の本番環境は、新しい本番環境に切り替えて正常に動作することを確認した上で破棄する。

またフィーチャー トグルとは...
> フィーチャー トグルは、フィーチャー フリッパー、機能フラグ、機能の切り替え、条件付き機能などとも呼ばれます。
> フィーチャー トグルは、ブランチに代わる優れた手段でもあります。 ブランチは、バージョン管理システムで実現されます。機能を分離し続けるには、独立したブランチを保持します。ソフトウェアを運用環境に組み込むときに、それをリリース ブランチとマージしてデプロイします。

> フィーチャー トグルでは、切り替えの背後で新機能を構築します。 機能はリリースが発生したときに "オフ" になるため、運用ソフトウェアに公開されることも、影響を与えることもありません。

> フィーチャー トグルの最も純粋な形式は IF ステートメントです。
スイッチがオフの場合は IF のコードを実行し、それ以外の場合は ELSE のコードを実行します。

[小さく安全なリリースを実現するために使える「フィーチャートグル」って何？年収は？彼女は？調べてみました！ #プログラミング - Qiita](https://qiita.com/ipeblb/items/92b794321751a6fa133e)


その他:

https://dev.to/mostlyjason/intro-to-deployment-strategies-blue-green-canary-and-more-3a3





## 本日のまとめ

2024.07.02 個人的注目記事

[Blue-Greenデプロイメントの名前の由来 | 3.1415.jp](https://3.1415.jp/3je66ZNQ)

> Blue-Green deployment とは、全く同じ本番環境を 2つ用意して、片方をユーザに提供し、もう片方をリリース前のテストに使う方式のことをいいます。データベーススキーマの変更に気を付ければ、ダウンタイムゼロでサービスを提供し続けられる上に、問題が起こった場合にも切り戻しが容易という特徴を持ちます。

> なぜ Blue-Greenデプロイメントという名前なのか。もともと A環境、B環境と呼ぼうと思っていたけど、問題が起きたときの環境がたまたまB環境だったりしたら「なんで Aを使わなかったんだ」と理不尽に怒られるかもしれないと心配して、優劣を暗示しない色を名前に使うことにしたそうです。


明日も 具体的なデプロイ パターン その2 [カナリア リリースとダーク ローンチを実装する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/implement-canary-releases-dark-launching/) を見ます。

- ブルーグリーン デプロイ。
- カナリア リリース。
- ダーク起動。
- A/B テスト。
- 段階的公開またはリングベース デプロイ。
- フィーチャー トグル。


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
