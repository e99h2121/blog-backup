[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃないかと走り始めた個人的コミット駆動目的の投稿です。

掲げていた目次:
- https://azuredevopslabs.com/
- [Azure Boards | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops/boards/)
- [Azure Pipelines | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops/pipelines/)
- [Azure Artifacts | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops/artifacts/)
- [Azure Repos – Git リポジトリ | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops/repos/)
- [Azure Test Plans | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops/test-plans/)
- [AZ-400: エンタープライズ DevOps の開発 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-work-git-for-enterprise-devops/)
	- [GitHub プロジェクトとプロジェクト ボードの概要 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/plan-agile-github-projects-azure-boards/2-introduction-to-project-boards)
		- [GitHub を Azure Boards にリンクする - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/plan-agile-github-projects-azure-boards/5-link-github-to-azure-boards)
	- [継続的デリバリーのための Git ブランチ モデルを確認する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/manage-git-branches-workflows/4-explore-git-branch-model-for-continuous-delivery)
	- [GitHub Advanced Security の概要 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/identify-technical-debt/6-introduction-to-github-advanced-security)
- [AZ-400: Azure Pipelines と GitHub Actions での CI の実装 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-implement-ci-azure-pipelines-github-actions/)
	- [Azure Pipelines について確認する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/explore-azure-pipelines/)
	- **[GitHub Actions を使用した継続的インテグレーションについて学習する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/learn-continuous-integration-github-actions/) <--- この辺り**。半ばまで来ました。
- [AZ-400: リリース戦略の設計と実装 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-design-implement-release-strategy/)
	- [Explore build and release tasks - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/create-release-pipeline-devops/7-explore-build-release-tasks)
		- https://github.com/microsoft/azure-pipelines-tasks
	- [一般的なリリース管理ツールを確認する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/automate-inspection-health/11-explore-common-release-management-tools)
- [AZ-400: Azure Pipelines を使用して、セキュリティで保護された継続的配置を実装する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-implement-secure-continuous-deployment/)
	- [最新のデプロイ パターンを理解する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/introduction-to-deployment-patterns/4-understand-modern-deployment-patterns)
		- ブルーグリーン デプロイ。
		- カナリア リリース。
		- ダーク起動。
		- A/B テスト。
		- 段階的公開またはリングベース デプロイ。
		- フィーチャー トグル。
- [AZ-400: Azure と DSC を使用したコードとしてのインフラストラクチャの管理 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-manage-infrastructure-as-code-using-azure/)
	- [DevOps での Azure Automation を探索する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/explore-azure-automation-devops/)
- [AZ-400: 依存関係の管理戦略の設計と実装 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-design-implement-dependency-management-strategy/)
	- [GitHub Packages の概要 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/introduction-github-packages/)
- [AZ-400: 継続的フィードバックを実装する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-implement-continuous-feedback/)
	- [アプリケーション分析を自動化するプロセスを設計する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/design-processes-automate-application-analytics/)
	- [アラート、ブレイムレス レトロスペクティブ (誰も責めることのないふりかえり)、およびジャスト カルチャを管理する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/manage-alerts-blameless-retrospectives-just-culture/)
- [AZ-400: コンプライアンスのためにセキュリティを実装し、コード ベースを検証する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-implement-security-validate-code-bases-compliance/)
	- [オープンソース ソフトウェアとは - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/implement-open-source-software-azure/3-what-open-source-software)
	- [セキュリティの監視とガバナンス - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/security-monitoring-and-governance/)
- まとめ (ふりかえり、反省会)

...からの、16 日目です。ただのメモとならぬように頑張ろうと思います。


## 本日のタイトル: GitHub Actions を使用した継続的インテグレーションについて学習する

[GitHub Actions の概要 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/introduction-to-github-actions/)
[GitHub Actions を使用した継続的インテグレーションについて学習する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/learn-continuous-integration-github-actions/)

https://github.com/features/actions
https://github.com/actions/starter-workflows

>継続的インテグレーション (CI) と継続的配置 (CD) のソリューションを構築するためによく使用されます。
>ただし、広範囲のさまざまなタスクに使用できます。

それが以下のようなものとのこと。

- 自動テスト。
- 新しいイシュー、メンションへの自動応答。
- コード レビューのトリガー。
- pull request の処理。
- ブランチ管理。

YAML で定義され、GitHub リポジトリ内に配置される。



## コンテナー

ここで一緒に見ておきたいコンテナー系:

[【GitHub Actions】Dockerコンテナを実行してみた #GitHubActions - Qiita](https://qiita.com/suzuki0430/items/d625f8b57ae317ae7d66)
[Qiita 投稿マラソン 2024 - DevOps 編 14 日目 Azure Pipelines と GitHub Actions での CI の実装 #GitHubActions - Qiita](https://qiita.com/e99h2121/items/3735f3e085504eb77e44) でも見た [コンテナーのビルド戦略を考える - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/design-container-build-strategy/) 

>Docker ボリュームのサポートを使用し、アプリケーションとそのデータの分離性を維持することをお勧めします。 ボリュームは、コンテナーの有効期間の外部に存在する永続的なストレージ メカニズムです。

https://docs.docker.com/build/building/multi-stage/

[コンテナーに関連した Azure のサービスを考察する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/design-container-build-strategy/7-explore-azure-container-related-services)
[Container Apps と他の Azure コンテナー オプションの比較 | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/container-apps/compare-options)

特に Azure のコンテナー関係の仲間:

[Azure Kubernetes Service (AKS) | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/kubernetes-service/)
[Azure Container Registry | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/container-registry/)
[Azure Container Apps | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/container-apps/)

> Azure Container Apps を使用すると、コンテナーに基づいてサーバーレス マイクロサービスとジョブをビルドできます。

> - 汎用コンテナー (特に、コンテナーにデプロイされた多くのマイクロサービスにまたがるアプリケーション向け) を実行するように最適化されています。
> - Kubernetes と、Dapr、KEDA、envoy などのオープンソースのテクノロジが利用されています。
> - サービス検出やトラフィック分割などの機能によって Kubernetes スタイルのアプリやマイクロサービスをサポートします。
> - トラフィックに基づくスケーリングをサポートし、ゼロにスケーリングなど、キューのようなイベント ソースからプルすることで、イベント駆動型アプリケーション アーキテクチャを有効にします。
> - オンデマンド、スケジュール済み、イベント ドリブンのジョブの実行をサポートします。

[Azure Container Instances | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/container-instances/)
> Azure Container Instances (ACI) では、オンデマンドで Hyper-V 分離コンテナーの単一ポッドが提供されます。 これは、Container Apps と比較した場合、下位レベルの "ビルディング ブロック" オプションと考えることができます。 スケーリング、負荷分散、証明書のような概念は、ACI コンテナーでは提供されません。 たとえば、5 つのコンテナー インスタンスにスケーリングするには、5 つの個別のコンテナー インスタンスを作成します。 



## 本日のまとめ

2024.06.28 個人的注目記事

[パブリックプレビューの Azure Container Apps を試してみた #AzureCLI - Qiita](https://qiita.com/mnrst/items/d8120a7155532d3cbd2d)
Container Apps、2021 年頃の登場だったのですね。
ほか [Azure のコンテナ的な諸々 #AzureContainerRegistry - Qiita](https://qiita.com/e99h2121/items/b8e0a785e8659463b92f)


明日は [AZ-400: リリース戦略の設計と実装 - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/paths/az-400-design-implement-release-strategy/) を見てまいります。


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
