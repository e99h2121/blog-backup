[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃない、これをテーマに走り出してみたら良いじゃないという個人的コミット駆動です。


4 日目です。Azure Boards に続き、Azure Pipelines です。


ここまでの記事: 
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 開会宣言 #AzureDevOps - Qiita](https://qiita.com/e99h2121/items/02fcccdc257a0c534fff)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 2 日目 Azure DevOps Labs #AzureDevOps - Qiita](https://qiita.com/e99h2121/items/f3e9672103aead998379)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 3 日目 Azure Boards #カンバン - Qiita](https://qiita.com/e99h2121/items/d79a7edba67b133dfc37)


## 本日のタイトル: Azure Pipelines

[Azure Pipelines とは - Azure Pipelines | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/devops/pipelines/get-started/what-is-azure-pipelines?view=azure-devops)

> Azure Pipelines では、自動的にコード プロジェクトがビルドおよびテストされます。 すべての主要な言語とプロジェクトの種類がサポートされており、継続的インテグレーション、継続的デリバリー、継続的テストを組み合わせて、コードをビルドしてテストし、任意の宛先に配信します。

CI/CD、いちばん DevOps っぽいところです。

Azure Web Apps ならこうなる (黄色マーカー)。
[Azure Web Apps 用の Azure Pipelines のアーキテクチャ - Azure Pipelines | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/devops/pipelines/architectures/devops-pipelines-azure-web-apps-architecture?view=azure-devops#architecture)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/4d2855d0-e2ef-f71a-3d87-b9c152c0be48.png)


[Azure DevOps Pipelines(パイプライン)の超概要 #devops - Qiita](https://qiita.com/mstakaha1113/items/f9fad71b8bd33e77d9ce) も参考。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/1c6f1aa5-eacd-8f25-ef58-a5b249395408.png)

ちょうどこけていますね。
- Pipelines
- Environments
- Releases
- Library
- Task groups
- Deployment groups


[Azure Pipelines とは # Azure DevOps の料金](https://learn.microsoft.com/ja-jp/azure/devops/pipelines/get-started/what-is-azure-pipelines?view=azure-devops#pricing-for-azure-devops)

> パブリック プロジェクトを使用する場合、Azure Pipelines は無料ですが、並列ジョブの無料の許可を要求する必要があります。 この許可を要求するには、要求書を送信します。 既存の組織とプロジェクトは影響を受けません。

> 詳細については、パブリック プロジェクトとは何かに関するページを参照してください。 プライベート プロジェクトを使用する場合は、毎月最長 1,800 分 (30 時間) までパイプライン ジョブを無料で実行できます。

読んでるうちに GitHub Actions が気になります。

[GitHub Actions と Azure Pipeline を両方使っていて思うことを書く - ぐだぐだ言ってないでコードを書けよ、ハゲ。](https://kheiakiyama.hateblo.jp/entry/2020/12/11/123650)

> どのクラスタに対して存在するツールか、という問題だと思っている。
自分がたまたま Azure を利用する立ち位置なので敷居は高くないが、たとえば AWS ユーザに Azure Pipeline 勧めるのは現実的ではない。
> とはいえ AWS ユーザにも GitHub(Microsoft 傘下！) はかなり使われているため、GitHub Actions に抵抗はそう感じないはずだ。

> また、Azure Pipeline ひいては Azure DevOps を使うとなると、エンタープライズ向けのもろもろの機能がついてきてしまうため、そこに目がいってしまい、まずは CI/CD だけ手軽に導入して試す、となりづらい印象がある。


## 本日のまとめ

[コードとしてのインフラストラクチャ (IaC) とは? - Azure DevOps | Microsoft Learn](https://learn.microsoft.com/ja-jp/devops/deliver/what-is-infrastructure-as-code) 
[Amazon.co.jp: Infrastructure as Code ―クラウドにおけるサーバ管理の原則とプラクティス : Kief Morris, 宮下 剛輔, 長尾 高弘: 本](https://www.amazon.co.jp/Infrastructure-Code-%E2%80%95%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%89%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E3%82%B5%E3%83%BC%E3%83%90%E7%AE%A1%E7%90%86%E3%81%AE%E5%8E%9F%E5%89%87%E3%81%A8%E3%83%97%E3%83%A9%E3%82%AF%E3%83%86%E3%82%A3%E3%82%B9-Kief-Morris/dp/4873117968)

辺りを読み直したい...

2024.06.14 個人的注目記事
[AzureのIaCツール比較第二弾！ ~Azure Pipelinesを用いてデプロイする方法~ #CICD - Qiita](https://qiita.com/s_w_high/items/6b4fb951755fa121640a)


つづく

明日は [Azure Artifacts | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops/artifacts/)
