[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃないかと走り始めた個人的コミット駆動目的の投稿です。20 日目。


## 本日のタイトル: カナリア リリースとダーク ローンチを実装する

[デプロイ パターンの概要 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/introduction-to-deployment-patterns/)
[カナリア リリースとダーク ローンチを実装する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/implement-canary-releases-dark-launching/)

[カナリアリリースとは？ わかりやすく10分で解説 | ネットアテスト](https://www.netattest.com/canary-release-2024_mkt_tst#)

> カナリアリリースの名前は、石炭鉱山でガス漏れを検知するためにカナリアが使われたことに由来します。問題がある場合、カナリアが最初に反応するという概念を、ソフトウェアの新バージョンをテストするユーザーへの比喩表現として引用しています。

[カナリアリリースとは？ブルーグリーンデプロイメントとの違いや実施方法を紹介](https://www.sedesign.co.jp/ai-blog/what-is-canary-release)

> カナリアリリースとは、新バージョンのアプリケーションをリリースする際、最初からすべてのユーザーに公開するのではなく、まず一部のユーザー（全体の1％など）に限定公開してテストを行い、所定の基準をクリアすることができれば、一般に向けて公開する手法です。

> 「カナリア」の名称は、かつて炭鉱夫がガス漏れ事故から身を守るため、一酸化炭素などの無臭ガスにも敏感に反応するカナリアを炭鉱に持ち込んだことが由来とされています。新バージョンにアクセスしてテストに参加する一部ユーザーを、ガス漏れを察知するカナリアに見立てて、この名前が付けられました。

Azure では [Azure Traffic Manager のしくみ | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/traffic-manager/traffic-manager-how-it-works) を利用し、以下のようなトラフィック分散が可能。

- 優先順位
- 重み付け
- パフォーマンス
- 地理的
- 複数値
- サブネット

[ダーク ローンチを理解する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/implement-canary-releases-dark-launching/4-understand-dark-launching)

> ダーク ローンチは、多くの点でカナリア リリースと類似しています。ただし、ダーク ローンチでは、バックエンドのパフォーマンスをテストするのではなく、フロントエンドでの新機能に対するユーザーの反応を評価する点が異なります。
> 新機能をすべてのユーザーに対して開始する代わりに、少数のユーザーにリリースするという考え方です。

> Elon Musk は自伝で説明しているように、SpaceX であらゆる種類のアジャイル開発の原則を適用しています。SpaceX では、衛星を打ち上げるためのロケットを構築して打ち上げています。 SpaceX では、ダーク ローンチも使用されています。

関連ツイート:

https://x.com/Phrankensteyn/status/1778891414056632724




## 本日のまとめ

2024.07.03 個人的注目記事

[SaaSのためのDevOps SaaS 「Controlle」のご紹介 #React - Qiita](https://qiita.com/i_am_master_yoda/items/e3231591bdf1f8359911) ダーク ローンチに言及されていたので通読。


明日も 具体的なデプロイ パターン その3 [A/B テストと段階的公開型デプロイを実装する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/implement-test-progressive-exposure-deployment/) を見ます。

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
[Qiita 投稿マラソン 2024 - DevOps 編 19 日目 ブルーグリーン デプロイとフィーチャー トグルの実装 #ブルーグリーンデプロイメント - Qiita](https://qiita.com/e99h2121/items/93491d740e4ca4ae9f53)

