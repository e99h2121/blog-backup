[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃないかと走り始めた個人的コミット駆動目的の投稿です。

[Qiita 投稿マラソン 2024 - DevOps 編 17 日目 リリース戦略の設計と実装 #リリース - Qiita](https://qiita.com/e99h2121/items/2b4ffd5a4dc7ccd58515) に続く 18 日目。


## 本日のタイトル: デプロイ パターンの概要

[Azure Pipelines を使用して、セキュリティで保護された継続的配置を実装する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-implement-secure-continuous-deployment/) の [デプロイ パターンの概要 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/introduction-to-deployment-patterns/)

従来のデプロイ パターン:
![](https://learn.microsoft.com/ja-jp/training/wwl-azure/introduction-to-deployment-patterns/media/classic-deployment-pattern-8d085442.png)

上に対し [最新のデプロイ パターンを理解する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/introduction-to-deployment-patterns/4-understand-modern-deployment-patterns)
- ブルーグリーン デプロイ。
- カナリア リリース。
- ダーク起動。
- A/B テスト。
- 段階的公開またはリングベース デプロイ。
- フィーチャー トグル。



[ID 管理システムと統合する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/integrate-identity-management-systems/)
[アプリケーション構成データを管理する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/manage-application-configuration-data/)
[リリース手法多すぎﾜﾛﾀｧ　B/G、カナリア、機能フラグ、ダークローンチ、A/Bテスト、、など #QiitaEngineerFesta2022 - Qiita](https://qiita.com/minorun365/items/3c92187cb251abbd92bc)


## 余談: CD

Continuous Deployment と Continuous Delivery の違い

https://martinfowler.com/bliki/ContinuousDelivery.html

### 違いのポイント
継続的デリバリーは、ソフトウェアをいつでもデプロイ可能な状態に保つことを目指しており、実際のデプロイは手動または計画的に行われる。
継続的デプロイメントは、すべての変更が自動的に本番環境にデプロイされるプロセスを指す。
### 継続的デリバリーの利点
- デプロイ・リスクの低減：小さな変更をデプロイするため、失敗のリスクが減り、問題が発生しても迅速に修正可能。
- 信憑性のある進捗管理：実際にデプロイされた機能を基に進捗を評価することで、より正確な進捗状況を把握できる。
- ユーザーからのフィードバック：ユーザーの前でソフトウェアを早期かつ頻繁に動作させることで、実際の価値を確認し、改善のためのフィードバックを迅速に得られる。
### 関連用語
- 継続的インテグレーション：開発環境でコードを統合、ビルド、テストするプロセス。
- デプロイメントパイプライン：ソフトウェアが段階的に本番環境に近づくための自動化されたプロセス。


## 本日のまとめ

2024.06.30 個人的注目記事

[真夏のIT怪談夜話2024 -夜間作業- #リリース - Qiita](https://qiita.com/yam_dev/items/219b05d762522c9b1b07)
[新規プロダクト（サービス）のリリースタイミングはいつが最適か？ #devops - Qiita](https://qiita.com/yuubon/items/6699265913c9ae99764b)


次回は 具体的なデプロイ パターン 
[ブルーグリーン デプロイとフィーチャー トグルの実装 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/implement-blue-green-deployment-feature-toggles/) を見ます。

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

