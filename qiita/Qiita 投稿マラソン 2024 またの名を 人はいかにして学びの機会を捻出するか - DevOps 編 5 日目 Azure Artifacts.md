[Qiita Engineer Festa 2024（キータ・エンジニア・フェスタ 2024） - Qiita](https://qiita.com/official-campaigns/engineer-festa/2024)

> 投稿マラソン
> Qiita Engineer Festa 2024 の記事投稿キャンペーンに紐づけて19記事投稿すると、「Qiitaオリジナルグッズ」を必ずプレゼント！38記事投稿すると更に特別な「Qiitaオリジナルグッズセット」を必ずプレゼント！

とのことで「学び」を強制的に自分に課したいな、どこまで走れるか分からないがちょうど目の前に、学びたい [Azure DevOps Services | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops) があるじゃない、これをテーマに走り出してみたら良いじゃないという個人的コミット駆動です。

週末になりましたね。5 日目です。Azure Artifacts です。


ここまでの記事: 
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 開会宣言 #AzureDevOps - Qiita](https://qiita.com/e99h2121/items/02fcccdc257a0c534fff)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 2 日目 Azure DevOps Labs #AzureDevOps - Qiita](https://qiita.com/e99h2121/items/f3e9672103aead998379)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 3 日目 Azure Boards #カンバン - Qiita](https://qiita.com/e99h2121/items/d79a7edba67b133dfc37)
[Qiita 投稿マラソン 2024 またの名を 人はいかにして学びの機会を捻出するか - DevOps 編 4 日目 Azure Pipelines #AzurePipelines - Qiita](https://qiita.com/e99h2121/items/564e9126eb5f93765346)


## 本日のタイトル: Azure Artifacts

[Azure Artifacts の概要 - Azure Artifacts | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/devops/artifacts/start-using-azure-artifacts?view=azure-devops&tabs=nuget%2Cnugetserver)

> Azure Artifacts を使用すると、開発者はすべての依存関係を 1 か所から効率的に管理できます。 Azure Artifacts を使用すると、開発者はフィードにパッケージを発行し、チーム内、組織全体、さらにはインターネット経由で一般に共有することができます。 Azure Artifacts を使用すると、開発者は、NuGet.org や npmjs.com などのさまざまなフィードやパブリック レジストリのパッケージを使用することもできます。 Azure Artifacts では、NuGet、npm、Python、Maven、Cargo、ユニバーサル パッケージのパッケージの種類がサポートされています。


> NuGet packages		
npm packages		
Maven packages		
Gradle packages		
Python packages		
Cargo packages
Universal Packages

AWS ならこの辺か。
[【AWS】AWS CodeArtifactをAWS CodeBuildで検証する（準備編） #AWS - Qiita](https://qiita.com/ymd65536/items/aca6234a6baf85c24856)


実用しているのはこの辺りが興味深かったです。
[自作 npm パッケージを Azure Artifacts へ手動デプロイおよび自動化](https://zenn.dev/takanari_dev/articles/2024-02-23-npm-azure-artifacts)


feed というやつを作る図:
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/c41a02af-2c03-4303-3255-a02d1a1dbce1.png)

ひとしきりのものが用意されていることが分かります:
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/4e7f5fdc-d0b5-4355-5e04-bdf9b5d7a645.png)



## ところで Artifact って

https://eow.alc.co.jp/search?q=artifact

> アーチファクト、技能(art)によって作り出したもの、人工物、加工品、工芸品、芸術品、所産、作り事◆可算
作為、人為的な結果［影響］
〔技術上の原因による〕不自然な結果◆例えば、不適切な統計処理の結果現れたパターンなど。
《コ》不可逆圧縮に伴う悪い副作用◆例えば、動画のブロックノイズなど。通例、複数形で。
**《コ》〔ソフトウェア開発における〕中間生成物、〔UMLという方法論における〕アーティファクト**
〔考古学の人工〕遺物、埋蔵物


## 本日のまとめ

Artifact イメージできました。


2024.06.15 個人的注目記事
[Azure Devops (Artifacts) を無償、無料で使う #AzureDevOps - Qiita](https://qiita.com/wf-kenji-ikeda/items/9c21859d8b5b6a63246e)
[Jar を作り、Azure Artifacts を利用して成果物を配布する #Java - Qiita](https://qiita.com/wf-kenji-ikeda/items/696bda335a8933abfcb3)
[ライブラリ開発者より指定されたバージョンを利用してアプリケーションを作る #Java - Qiita](https://qiita.com/wf-kenji-ikeda/items/5bf06ce19c52e73a5463)

Java 最近触ってないけどどうなったんだっけということで以下も発見。

https://newrelic.com/jp/resources/report/2024-state-of-the-java-ecosystem-jp


つづく

明日は [Azure Repos – Git リポジトリ | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/devops/repos/) です。
