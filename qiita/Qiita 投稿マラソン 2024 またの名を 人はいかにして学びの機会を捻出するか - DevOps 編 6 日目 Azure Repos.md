[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃない、これをテーマに走り出してみたら良いじゃないという個人的コミット駆動です。

日曜日 6 日目です。Azure Repos です。


ここまでの記事: 
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 開会宣言 #AzureDevOps - Qiita](https://qiita.com/e99h2121/items/02fcccdc257a0c534fff)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 2 日目 Azure DevOps Labs #AzureDevOps - Qiita](https://qiita.com/e99h2121/items/f3e9672103aead998379)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 3 日目 Azure Boards #カンバン - Qiita](https://qiita.com/e99h2121/items/d79a7edba67b133dfc37)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 4 日目 Azure Pipelines #AzurePipelines - Qiita](https://qiita.com/e99h2121/items/564e9126eb5f93765346)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 5 日目 Azure Artifacts #AzureArtifacts - Qiita](https://qiita.com/e99h2121/items/d0f2b3f5c308d0910775)



## 本日のタイトル: Azure Repos

[コードでの共同作業 - Azure Repos | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/devops/repos/get-started/what-is-repos?view=azure-devops)

> Azure Repos は、コードの管理に使用できるバージョン管理ツールのセットです。 ソフトウェア プロジェクトが大きいか小さいかにかかわらず、できるだけ早くバージョン管理を使用することをお勧めします。

> バージョン コントロール システムは、時間の経過にともなうコード変更を追跡するのに役立つソフトウェアです。 コードを編集するときに、ファイルのスナップショットを取得するようにバージョン コントロール システムに指示します。 バージョン コントロール システムはスナップショットを永続的に保存するので、後で必要なときに呼び戻すことができます。 バージョン管理は、作業を保存し、チーム全体でコードの変更を調整するために使用します。

> たとえ 1 人の開発者であっても、バージョン管理は、バグ修正や新機能開発の際に整理された状態を維持するのに役立ちます。 バージョン コントロールを使用すると開発の履歴が残るため、コードの確認や任意のバージョンへのロールバックも簡単に行うことができます。

などと言われても、GitHub と何が違うの？ という気持ちになります。

比較はこのスライドが分かりやすかったです。少々古いかも :
<script defer class="speakerdeck-embed" data-id="9fbde6d0e9d0498c932a56b65f4ef213" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

> どちらでも良いのですが、あえて

適材適所ですね。
公式には以下がありました。

[GitHub および Azure Repos での Git のホスティング - Azure DevOps | Microsoft Learn](https://learn.microsoft.com/ja-jp/devops/develop/git/hosting-git-repos)

> Git はすぐにバージョン管理の世界標準になりました。 何百万ものプロジェクトが日常のコラボレーションのニーズに Git を利用しています。 Git の分散型の性質には大きなメリットがありますが、ブランチをマージして他の DevOps アクティビティのハブを提供するには、チームが変更を一元化された Git リポジトリにプッシュする必要があります。

> **GitHub**
> これまでのところ、Git プロジェクトの世界最大のホストは GitHub です。 GitHub は単なる Git ホスティング以上のものを提供します。 GitHub には、パートナー製品とサービスのマーケットプレイスなど、DevOps プロセス全体にわたる機能があります。

> **Azure Repos**
> すでに Azure DevOps または以前のバージョンの Team Foundation Server を使用しているユーザーには、Azure Repos への移行における最上級のオプションがあります。 Azure Repos は、使い慣れたユーザー エクスペリエンスと統合ポイントを組み合わせて、Git のすべての利点を提供します。



## 本日のまとめ



2024.06.16 個人的注目記事
[Azure Reposの今昔 #VisualStudio - Qiita](https://qiita.com/fsdg-nishina/items/32e8a9e802838f9d6ec8)

> マイクロソフトの製品としては
> Team Foundation Services
Visual Studio Online
Visual Studio Team Services
Azure DevOps Services
> と変遷しており、クラウド版のServicesの他にオンプレミス向けサーバー製品のServerが用意されています。

これは私も Visual Studio Online の頃に無料で使い始めた気がしています。

> 2018年6月、マイクロソフトがGitHubを買収しました。
> その後2020年4月、GitHubの無料プランでもプライベートリポジトリの利用ができるようになりました。

GitHub が買収されたのって 2018 年でしたか。時の流れ...

つづく

次回は [Azure Test Plans | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops/test-plans/)
