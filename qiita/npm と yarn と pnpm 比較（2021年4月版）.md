## 3者の公式

https://www.npmjs.com/

https://yarnpkg.com/

https://pnpm.io/

## 概要

- 3者ともJavascriptのパッケージマネージャー。
- npm はNode.jsをインストールすれば一緒にインストールされる。
- yarn: npmと互換性があり、npmで使用していたプロジェクト設定ファイル（package.json）がそのまま使える。
- pnpm: 同じくnpmと互換性があり、ディスクスペースの使用量と速度が大幅に改善されている。

先に [npmとyarnとpnpmの違い2021](https://zenn.dev/hibikine/articles/27621a7f95e761) からわかりやすい結論。

> 筆者のおすすめ
**初心者、もしくは複数人開発であればnpm をおすすめします。**

> 標準ツールのため、Nodeと一緒に複数人でバージョンを揃えやすい
nodeを入れれば追加でのインストールが不要
標準ツールのため、信頼性があり、ドキュメントも多い
現在はインストールがそこまで遅くはない
開発でパッケージマネージャーを触ることは最初期や機能追加以外は少ない

> **個人開発であればpnpmかYarn(v1) をおすすめします。**
> パッケージのインストール、アンインストールが早く、初期の試行錯誤がしやすい
pnpmではnode_modulesのサイズが小さくなり、容量を圧迫しない。



## 3者の特徴

https://blog.logrocket.com/javascript-package-managers-compared/

https://qiita.com/Hai-dozo/items/90b852ac29b79a7ea02b

https://qiita.com/masakinihirota/items/bbe6c2e2f548fdce03dc#examples%E9%9B%86%E3%82%92%E8%A9%A6%E3%81%99%E3%81%AB%E3%81%AFpnpm-%E3%82%92%E6%8E%A8%E5%A5%A8

より翻訳および引用しての箇条書き。

### npm

- Node Package Manager。2009年にNode.jsがリリースされた翌年にリリースされた。
- package-lock.jsonファイルを自動的に生成する。バージョンコントロールシステムにコミットすると便利。他の開発者がローカルマシンに依存関係を簡単にインストールできる。
- ローカルまたはグローバルな依存関係を簡単に管理。
- 複数のバージョンの依存関係を扱うのに十分な機能。
- pypiやrubygems、packagistよりも多くのパッケージを持つ公式レジストリを持っている。npm社はGitHubが買収し、Microsoftの孫会社。

#### 補足: package-lock.json

https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json

https://qiita.com/fj_yohei/items/7ca887a45e0855917279

> 依存パッケージが依存するパッケージ(ネストした依存状態)のバージョン情報が変わる場合がある。
package.jsonだけでは、node_modulesを完璧に再現できるとは限らない(勝手に違うバージョンのライブラリがインストールされてしまう可能性)
package-lock.jsonはバージョン情報をすべて正確に記録する
package-lock.json に書き込まれたバージョンのパッケージがインストールされる


### yarn
- 2016年にリリース。
- npmと比べてインストールが速い、セキュリティが高い。セキュリティが高いというのは、インストール時にパッケージが不正に変更されていないかなどをチェックサムを用いて検証することができ、安全なパッケージのインストールが可能であるということ。
- 例えば、同じリポジトリの下で複数のパッケージを管理していて、それらがすべて個別のpackage.jsonファイルを持っている場合、リポジトリ内のすべてのパッケージの依存関係を一度にインストールすることができ、すべてのパッケージを簡単に更新することができる。npmの場合は、各パッケージフォルダ内でnpm installコマンドを手動で実行する必要がある。
- オフラインキャッシュの仕組みを利用している。つまり、パッケージを初めてインストールすると、Yarnはそのパッケージを~/.yarn-cacheの下にあるキャッシュフォルダに追加する。これによりnpmと比較してYarnのパフォーマンスを大幅に向上させている。
- yarn.lockというロックファイルを利用しているので、プロジェクトはすべてのチームメイトに対して正しく動作する。決定論的インストールアルゴリズムとも呼ばれている。
- アプリケーションを開発する際のさまざまな場面で便利なライセンスチェッカーが組み込まれている。
- npmとは異なり、Yarnはパラレルダウンロードと呼ばれるアプローチを採用している。これにより、Yarnはより多くのリソースを利用してビルドプロセスを高速化することができる。
- Yarnは、HTTPリクエストに失敗した場合、自動的に再試行することができる。


### pnpm

- リリースはyarnとあまり変わらない。
- すべてのパッケージを1つの場所にインストールし、シンボリックリンクを使って参照する。複数のプロジェクトに同じモジュールの同じバージョンをインストールする場合二重インストールしない。
- content-addressable storage systemと呼ばれる全く新しい概念を導入し、ファイル間の違いを検出できるようにしている。これにより、2つの異なるバージョンのパッケージに、変更されていないファイルを複製することがなくなった。
- これらのためインストールの高速化とディスク使用容量の効率化が望める。
- 最新版の5.8.0では、Yarn-bashのような新しい設定であるshell-emulatorが導入されており、これはクロスプラットフォームのシェル環境である。
- 厳格なアクセスコントロールメカニズムを持っており、パッケージはpackage.jsonファイルで定義された依存関係にのみアクセスすることができる。
- ただし、npmとyarnでは対応していてもpnpmには標準対応していない場合がある。


## 3者のベンチマーク

引用: https://github.com/pnpm/benchmarks-of-javascript-package-managers
The app's `package.json` [here](https://github.com/pnpm/benchmarks-of-javascript-package-managers/blob/main/fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | --- | --- | --- |
| install |       |          |             | 51s | 14.4s | 39.1s | 29.1s |
| install | ✔     | ✔        | ✔           | 5.4s | 1.3s | 707ms | n/a |
| install | ✔     | ✔        |             | 10.9s | 3.9s | 11s | 1.8s |
| install | ✔     |          |             | 33.4s | 6.5s | 26.5s | 17.2s |
| install |       | ✔        |             | 28.3s | 11.8s | 23.3s | 14.2s |
| install | ✔     |          | ✔           | 4.6s | 1.7s | 22.1s | n/a |
| install |       | ✔        | ✔           | 6.5s | 1.3s | 713ms | n/a |
| install |       |          | ✔           | 6.1s | 5.4s | 41.1s | n/a |
| update  | n/a   | n/a      | n/a         | 5.1s | 10.7s | 35.4s | 28.3s |

![Graph of the alotta-files results](https://raw.githubusercontent.com/pnpm/benchmarks-of-javascript-package-managers/main/results/imgs/alotta-files.svg)


## まとめ

安定性で npm。機能性、パフォーマンスで yarn あるいは pnpm。
以上参考になればさいわいです。
