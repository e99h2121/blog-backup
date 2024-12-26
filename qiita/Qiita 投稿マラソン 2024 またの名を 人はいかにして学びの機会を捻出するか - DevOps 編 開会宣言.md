[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024) が始まっていますね。

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

38 記事投稿って... 正気じゃない企画ですよね ...
いくらでも生成 AI でスパムを錬成できる時代に一体何を言っているの...

と感じたことはさておいてそんな時代だからこそ人間にしかできない「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃない、これをテーマに走り出してみたら良いじゃないという個人的コミット駆動です。

筆者の業務上 Azure DevOps 資料を中心に学びますが Git 含めた汎用的な DevOps 周りの知識も込みなのでなにがしか読んでくださる方にもおすそ分けになったら嬉しいです。

というわけで [Azure DevOps を完全理解する 目次 #Azure - Qiita](https://qiita.com/ymasaoka/items/c43ac02e0bc9cbdadd65) を参考にしながら開始してみます。


## プログラム

当マラソンの目次です。以下のようなところを順に読み進めていくと大体 30+n 日分になるはず...

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
	- [GitHub Actions を使用した継続的インテグレーションについて学習する - Training | Microsoft Learn](https://learn.microsoft.com/ja-jp/training/modules/learn-continuous-integration-github-actions/)
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
- まとめ (ふりかえり。反省会)


## 本日のまとめ

横道脇道、何かしら得られるものがあったらいいなという気持ちを込めて書きます。 


2024.06.11 個人的注目記事
[Gitでコード管理する際の運用ガイドライン #コードレビュー - Qiita](https://qiita.com/nash_efp/items/b937df8cd0f852308e09)
