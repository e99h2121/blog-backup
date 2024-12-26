[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃないかと走り始めた個人的コミット駆動目的の投稿です。25 日目。



## 本日のタイトル: 依存関係の管理戦略の設計と実装

[依存関係の管理戦略の設計と実装 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-design-implement-dependency-management-strategy/)

ソフトウェア開発における依存関係の管理、それのコードベースでの識別、およびパッケージ フィードでの依存関係のパッケージと管理の方法について という章です。


[依存関係の管理とは - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/explore-package-dependencies/2-what-is-dependency-management)

> 依存関係の管理が必要な理由
- プロジェクトとソリューションに導入されたソフトウェアの依存関係は、適切に宣言して解決する必要がある。プロジェクト コードと含まれる依存関係の全体的な構成を管理する必要があります。
- なぜかというと、適切に依存関係を管理することができなければ、ソリューション内のコンポーネントを制御し続けることは難しくなるから。
- 依存関係の管理により、ソフトウェア エンジニアとチームは依存関係をより効率的に操作することができるから。
- 依存関係の管理により、使用される関係を制御し、ガバナンスとセキュリティ スキャンによって既知の脆弱性や悪用パッケージを使用することができるから。

[パッケージ管理について理解する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/understand-package-management/)

## パッケージとは

パッケージの種類
- NuGet パッケージ ("new get" と発音します) は、.NET コード成果物に使用される標準です。 
- npm パッケージは、JavaScript 開発に使用されます。
- Maven は、Java ベースのプロジェクトに使用されます。 
- PyPI: Python Package Index (PyPI と略され、Cheese Shop として知られています) は、Python の公式サードパーティ製ソフトウェア リポジトリです。
- Docker パッケージ: イメージと呼ばれ、コンポーネントの完全で自己完結型のデプロイを含みます。


[成果物の移行、統合、およびセキュリティ保護 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/migrate-consolidating-secure-artifacts/)

> Maven、npm、または NuGet パッケージをクラウドでホストし、インデックスを付けて照合して一緒に保存することができるので、コードの共有が簡単になります。

> バイナリを Git に保存する必要もなくなりました。 ユニバーサル パッケージを使用することで、直接保持できます。 また、パッケージを保護するための最適な方法でもあります。 Azure Artifacts を使用すると、Maven、npm、および NuGet からユニバーサル成果物を管理できます。

## Design

https://learn.microsoft.com/ja-jp/shows/exam-readiness-zone/preparing-for-az-400-design-and-implement-source-control-2-of-5

### Source Code
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/cae752ca-d817-5eb0-8307-30390ecc2407.png)

### Authentication

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/73110f44-cd99-cd51-2a09-7f72f48295b1.png)


## モノレポとマルチレポ

https://mtx2s.hatenablog.com/entry/2023/07/24/220603

https://zenn.dev/matken/articles/monorepo-and-multirepo


## 本日のまとめ

https://developer.mozilla.org/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management

2024.07.09 個人的注目記事

[パッケージマネージャ使用時のOSS管理 #license - Qiita](https://qiita.com/n-shima/items/f4abcd5671e00c029b01)
[パッケージマネージャのライセンス情報がいい加減すぎて困る件 #npm - Qiita](https://qiita.com/n-shima/items/11e96b5d1b94cf7b4a5f)


明日は [GitHub Packages の概要 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/introduction-github-packages/) を見ますー。


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
[Qiita 投稿マラソン 2024 - DevOps 編 23 日目 Azure Resource Manager テンプレートを使用して Azure リソースを作成する #ARMTemplate - Qiita](https://qiita.com/e99h2121/items/131526ee2f3b522f54fc)
[Qiita 投稿マラソン 2024 - DevOps 編 24 日目 DevOps での Azure Automation を探索する #AzureAutomation - Qiita](https://qiita.com/e99h2121/items/6b556c0c5d353b8d25a2)

