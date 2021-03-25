## Gradleとは

公式: [Gradle](https://gradle.org/)

[いまさら Gradle を使ってみた](https://qiita.com/kazu_coeur/items/16e7f5c2fea54eb5eebf) の説明が分かりやすい。

### 簡単にサマリ

#### Ant 
功績: ビルドツールのデファクト

が、結果 `ビルド職人にしか読めない build.xml が横行。ライブラリーの依存関係、プロジェクト毎に異なるディレクトリー構成` 等が問題になった。


#### Maven 

功績: 「規約」という概念でこれらの問題を解決した。

しかし `XML の限界`に差し掛かる。`自身が持つ強い規約を XML とプラグインだけで解決しようとしているので、ちょっとだけ手を加えるということが非常に苦手。プラグイン開発の敷居の高さもあって、ほとんどの場合は「Maven で出来ることをやる」と言ったビルドツール支配型になった。`

そこで

#### Gradle 登場

Gradle は Maven がもたらした規約を尊重しつつも、XML ではなくスクリプトを導入することでビルド周辺の諸問題を解決しようとするもの。


## 参考

[多分わかりやすいGradle入門](https://tech-lab.sios.jp/archives/9500)
[Gradle入門](https://qiita.com/vvakame/items/83366fbfa47562fafbf4)
[MavenとGradleを比べてGradleがいいんじゃないかなって思う理由](http://sassembla.github.io/Public/12:05:27%2018-03-20/12:05:27%2018-03-20.html)

