[Infrastructure as Code ―クラウドにおけるサーバ管理の原則とプラクティス | Kief Morris, 宮下 剛輔, 長尾 高弘 |本 | 通販 | Amazon](https://www.amazon.co.jp/dp/4873117968)
[O'Reilly Japan - Infrastructure as Code](https://www.oreilly.co.jp/books/9784873117966/)

![](https://images-na.ssl-images-amazon.com/images/I/51YYyQ6-t6L._SX389_BO1,204,203,200_.jpg)


> Infrastructure as Codeは自動化、バージョン管理、テスト、継続的インテグレーションといった、ソフトウェア開発のプラクティスをシステム管理に応用するための方法論です。
> 本書は、はじめにInfrastructure as Codeの原則と考え方を説明し、次にダイナミックインフラストラクチャプラットフォーム、インフラストラクチャ定義ツール、サーバ構成ツール、インフラストラクチャサービスの4つにカテゴライズして解説します。
> その上で、プロビジョニングやサーバーテンプレート管理のパターンから、テスト、変更管理パイプライン、組織やワークフローのプラクティスまでを詳述しており、Infrastructure as Codeを網羅的に理解することができます。

興味を持ったきっかけ: [(3830) Infrastructure as Code 談議 2022 ~ #AWSDevLiveShow - YouTube](https://www.youtube.com/watch?v=ed35fEbpyIE)


https://twitter.com/nikuyoshi/status/1518359630031712256?s=20&t=gKCK0-Jjbi-E0N32pTZw2g


## 感想

> IaCは楽しい、手順書作成は楽しくない
> リリースのたびに手順書更新 or 新規作成するのは、果たして楽しいのか

という話から始まる、「Infrastructure as Code 談議 2022」 で使われていた本だったので読みたかった。参考: [AWS公式の「Infrastructure as Code 談議 2022」がすごく勉強になったのでまとめてみた - Qiita](https://qiita.com/hatahatahata/items/8eb6f23a4c5e5ea5f4c0)

広範なテーマなのでどこから読むか迷う。
が目次に応じてどこから読んでも割とよく、かつ、「as Code」である通り結局はコードとして理想に近いかどうかかと理解した。10章あたりから、Codeにおける基礎的な話として話が理解しやすくなってきた気がする。





## 要点

- 自動化は簡単ではない。魔法使いの弟子: [ららら♪クラシック これまでの放送 - NHK](https://www.nhk.or.jp/lalala/archive151114.html)
- 以下は本の目次をベースにしたメモです。

### 1章 課題と原則

- なぜInfrastructure as Codeなのか
    - オンプレの時代とクラウドの時代は違う。物理的制約がない。
- Infrastructure as Codeとは何か
    - Infrastructure as Codeの目標: ダイナミックインフラストラクチャ
- **ダイナミックインフラストラクチャが生み出した課題**
    - サーバースプロール
    - 構成ドリフト
    - スノーフレークサーバー
    - 脆いインフラストラクチャ
    - オートメーション恐怖症
    - システム疲労
- **Infrastructure as Codeの原則**
    - 簡単に再現できるシステム
    - 使い捨てにできるシステム
        - サーバーはペットではなく畜牛
    - 統一的なシステム
    - 反復できるプロセス
    - 絶えず変化するデザイン
- プラクティス
    - 定義ファイルの利用
    - 自己記述システムとプロセス
    - あらゆるものをバージョン管理する
    - 継続的テストシステム、プロセス
    - 一斉変更ではなく小刻みな変更
    - 継続的にサービスを利用可能状態に保つ
- アンチフラジャイル：「堅牢」を越えて
    - アンチフラジャイルなITシステムの秘密の成分

## 2章 ダイナミックインフラストラクチャプラットフォーム
- **ダイナミックインフラストラクチャプラットフォームの要件**
    - プログラマブル
    - オンデマンド
    - セルフサービス
- プラットフォームから提供されるインフラストラクチャリソース
    - 計算リソース
    - ストレージリソース
    - ネットワークリソース
- ダイナミックインフラストラクチャプラットフォームのタイプ
    - パブリッククラウドのIaaS
    - コミュニティクラウドのIaaS
    - プライベートクラウドのIaaS
    - アンチパターン：手回し式クラウド
    - ハイブリッド、ミックスクラウド
    - ベアメタルクラウド
- ダイナミックインフラストラクチャプラットフォームに関する判断のポイント
    - パブリックかプライベートか
    - クラウドのポータビリティ
- クラウドと仮想化に対するマシンレベルの共感

### 3章 インフラストラクチャ定義ツール
- Infrastructure as Codeのためのツールの選択
    - 要件：スクリプトで操作できるインターフェイス
    - 要件：コマンドラインツールの無人モード
    - 要件：無人実行のサポート
    - 要件：設定の外在化
- 構成定義ファイル
    - 構成定義の再利用可能性
- インフラストラクチャ定義ツールの操作
    - 手続き型スクリプトによるインフラストラクチャのプロビジョニング
    - インフラストラクチャの宣言的な定義
    - インフラストラクチャ定義ツールの使い方
    - サーバーの構成/設定
- 構成レジストリ
    - 軽い構成レジストリ
    - 構成レジストリはCMDBか
    - CMDBの監査、修正のアンチパターン
    - CMDBに対するInfrastructure as Codeのアプローチ
### 4章 サーバー構成ツール
- 自動化されたサーバー管理の目標
    - **自動化**
- さまざまなサーバー管理機能に対応するツール
    - サーバー作成のためのツール
    - サーバーの構成/設定のためのツール
    - サーバーテンプレートのパッケージングのためのツール
    - サーバー上でコマンドを実行するためのツール
- サーバー変更管理のモデル
    - 随時変更
    - 構成/設定の同期
    - イミュータブルインフラストラクチャ
    - コンテナ化されたサービス
- コンテナ
    - コンテナは仮想マシンか
        - コンテナはカーネルを共有している
    - 仮想マシンよりもコンテナ
    - コンテナの実行
    - コンテナのセキュリティ

### 5章 主要なインフラストラクチャサービス
- **インフラストラクチャサービス、ツールが満たすべき条件**
	- 外部定義を使えるツールを選ぶ
	- インフラストラクチャがダイナミックだという前提で作られたツールを選ぶ
	- ライセンスがクラウド互換になっている製品を選ぶ
	- 疎結合をサポートする製品を選ぶ
- チーム間でのサービスの共有
	- サービスインスタンステンプレート
    - モニタリング：アラート、計測、ロギング
    - アラート：何かまずいことが起きたら教えてくれ
    - 指標計測：データの収集と分析
    - ログの集約と分析
- サービスディスカバリ
    - サーバーサイドサービスディスカバリのパターン
    - クライアントサイドサービスディスカバリのパターン
- 分散プロセス管理
    - サーバーロールによるプロセスのオーケストレーション
    - コンテナによるプロセスのオーケストレーション
    - 短いジョブのスケジューリング
    - コンテナオーケストレーションツール
- ソフトウェアのデプロイ
    - デプロイパイプラインソフトウェア
    - ソフトウェアのパッケージング

### 6章 サーバーのプロビジョニングのパターン
- サーバーのプロビジョニング
    - サーバーのライフサイクル
    - サーバーには何が含まれるか
    - サーバーに含まれるものの分類
    - サーバーロール
- サーバー作成のパターン
    - アンチパターン：手作りサーバー
    - **プラクティス：サーバー作成オプションをスクリプトでラッピングせよ**
    - アンチパターン：ホットクローンによって作成されたサーバー
    - パターン：サーバーテンプレート
    - アンチパターン：スノーフレークファクトリ
- 新サーバーのブートストラップのパターン
    - プッシュブートストラップ
    - プルブートストラップ
    - **プラクティス：すべての新サーバーインスタンスをスモークテストせよ**

### 7章 サーバーテンプレート管理のパターン
- ストックテンプレート：ほかに管理してくれる人はいないか？
- テンプレートを使ったサーバーのプロビジョニング
    - 作成時のプロビジョニング
    - テンプレート内でのプロビジョニング
    - 作成時のプロビジョニングとテンプレートによるプロビジョニングのバランスの取り方
- サーバーテンプレートの構築プロセス
    - 複数のプラットフォームのためのテンプレートの作成
- 原始イメージ
    - アンチパターン：ホットクローンによって作成されたサーバーテンプレート
    - OSインストレーションイメージからのテンプレートの焼き込み
    - ストックイメージからのテンプレートの焼き込み
    - ユニカーネルからのテンプレートの構築
    - ブートをしないサーバーテンプレートのカスタマイズ
- サーバーテンプレートのアップデート
    - テンプレートの「温め直し」
    - フレッシュなテンプレートの焼き込み
    - サーバーテンプレートのバージョン管理
- ロールのためのテンプレートの構築
    - パターン：階層化テンプレート
    - テンプレートのためのベーススクリプトの共有
- サーバーテンプレート管理の自動化
    - 焼き込み前のサーバーのカスタマイズ
    - プラクティス：サーバーテンプレートを自動テストせよ
### 8章 サーバーのアップデート/変更のパターン
- サーバー変更管理モデル
    - 随時変更
    - 継続的な構成/設定の同期
    - イミュータブルサーバー
    - コンテナ化サーバー
- 一般的なパターンとプラクティス
    - プラクティス：サーバーテンプレートを最小化せよ
    - プラクティス：サーバーテンプレートの変更時にサーバーを交換せよ
    - パターン：フェニックスサーバー
- 継続的デプロイのパターンとプラクティス
    - パターン：マスターレス構成管理
    - プラクティス：cronを利用せよ
    - 継続的同期フロー
    - 構成管理の対象外の部分
- イミュータブルサーバーのパターンとプラクティス
- アーティファクトとしてのサーバーイメージ
    - イミュータブルサーバーによる構成管理ツールの単純化
    - イミュータブルサーバーのフロー
    - イミュータブルサーバーのブートストラップ時の構成/設定
    - サーバーアップデートのトランザクション化
- 構成定義管理のプラクティス
    - プラクティス：構成定義を最小限に抑えよ
    - 定義の構造化
    - プラクティス：優れた設計を生み出すテスト駆動開発（TDD）を使え
### 9章 インフラストラクチャ定義のパターン
- 環境
    - アンチパターン：手作りのインフラストラクチャ
    - インフラストラクチャスタックをコードとして定義する
    - アンチパターン：環境ごとの定義ファイル
    - パターン：再利用できる定義ファイル
    - プラクティス：スタック定義をテスト、プロモートせよ
    - セルフサービス環境
- インフラストラクチャの構造化
    - アンチパターン：モノリシックスタック
    - 「リフトアンドシフト」によるインフラのマイグレーションを避ける
    - アプリケーション環境の複数のスタックへの分割
    - スタック間での構成/設定パラメータの管理
    - インフラストラクチャ要素の共有
    - プラクティス：アプリケーションコードとインフラストラクチャコードを統一的に管理せよ
    - 定義の共有に対するアプローチ
    - プラクティス：変更の範囲に合わせてインフラストラクチャを設計せよ
    - 実例：マイクロサービスのためのインフラストラクチャ設計
- 定義ツールの実行

### 10章 インフラストラクチャのためのソフトウェア工学プラクティス
- システムの品質
    - 品質の低いシステムは変更が難しい
    - 高品質システムは従来よりも簡単かつ安全に変更できる
    - インフラストラクチャの品質の着目点
    - 高速フィードバック
        - 高品質システムの要は、変更に対する高速なフィードバックである
- インフラストラクチャ管理のためのVCS
    - VCSで管理すべきもの
- 継続的インテグレーション（CI）
- 継続的なブランチのテストは継続的インテグレーションではない
    - ビルドエラーの原因究明
    - 失敗したテストの無視
    - インフラストラクチャのためのCI
- 継続的デリバリー（CD）
    - インテグレーション段階の問題点
    - デプロイパイプラインと変更パイプライン
    - 継続的デリバリーは継続的デプロイではないということ
- コードの品質
    - クリーンコード
        - **ソフトウェアクラフトマンシップ**
    - プラクティス：技術的負債をマネジメントせよ
- 大きなインフラストラクチャ変更の管理
    - 機能トグル

### 11章 インフラストラクチャの変更のテスト
- テストに対するアジャイルのアプローチ
    - 高速フィードバックのためのテストの自動化
    - テストスイートの有機的な構築
- テストスイートの構造化：テストピラミッド
    - バランスの悪いテストスイートにならないようにするために
    - プラクティス：できる限り低い水準でテストせよ
    - プラクティス：必要な階層だけを実装せよ
    - プラクティス：テストスイートをひんぱんに刈り込め
    - プラクティス：テストの有効性を継続的に評価せよ
- バランスの取れたテストスイートの実装
    - 低水準テスト
    - 中水準テスト
    - 高水準テスト
    - 運用品質のテスト
- テストコードの管理
    - プラクティス：テストコードとテスト対象のコードをいっしょに管理せよ
    - アンチパターン：反射的テスト
    - テストのためのコンポーネントの切り離しのテクニック
    - コンポーネントを切り離せるようにするためのリファクタリング
    - 外部依存コンポーネントの管理
    - テストのセットアップ
- テストのロールとワークフロー
    - 原則：構築したものに対するテストは自分で書け
    - テストを書く習慣
    - 原則：全員がテストツールを使えるようにせよ
    - QAアナリストの価値
- (結局) **テスト駆動開発（TDD）**

### 12章 インフラストラクチャの変更管理パイプライン
- 変更管理パイプラインのメリット
- パイプライン設計のガイドライン
    - ステージ間での統一性を保証せよ
    - すべての変更にすばやくフィードバックを返せ
    - マニュアルステージの前に自動ステージを実行せよ
    - できる限り早く本番環境に近い環境でテストせよ
- パイプラインの基本設計
    - ローカル開発ステージ
    - ビルドステージ
    - 構成アーティファクトの公開
    - 自動テストステージ
    - 人間による確認/チェックステージ
    - 本番環境への適用
- パイプラインを使うためのプラクティス
    - プラクティス：すべての変更で本番対応の品質を証明せよ
    - プラクティス: すべての変更をパイプラインの先頭からスタートさせよ
    - プラクティス：失敗が起きたらラインを止めよ
- より複雑なシステムへのパイプラインのスケールアップ
    - パターン：ファンインパイプライン
    - プラクティス：パイプラインを短く保て
    - プラクティス：パイプラインを分割せよ
 - コンポーネントの間の依存関係を処理するテクニック 
    - パターン：ライブラリ依存
    - パターン：サービスインスタンスのセルフプロビジョニング
    - プレリリースライブラリのビルドの提供
    - コンシューマに対するサービスのテストインスタンスの提供
    - コンシューマとしてサービスのテストインスタンスを利用する
- コンポーネント間のインターフェイスを管理するためのプラクティス
    - プラクティス：インターフェイスの下位互換性を確保せよ
    - プラクティス：リリースとデプロイを切り離せ
    - プラクティス：バージョン耐性を保証せよ
    - プラクティス：テストダブルを用意せよ
    - プラクティス：コントラクトテストでプロバイダをテストせよ
    - プラクティス：参照コンシューマを使ってテストせよ
    - プラクティス：プロバイダインターフェイスをスモークテストせよ
    - プラクティス：コンシューマ主導のコントラクト（CDC）テストを実施せよ
### 13章 インフラストラクチャチームのワークフロー
- 動くものは何でも自動化する
    - 手作業による変更
    - その場しのぎのオートメーション
    - 自律的なオートメーション
    - 自律的なオートメーションのワークフロー
- ローカルサンドボックスの使い方
    - ローカル仮想化を使ったサンドボックス
    - ローカルテストのサンプルワークフロー
    - 仮想化プラットフォームを使ったサンドボックス
- コードベースの構造化のパターン
    - アンチパターン：ブランチを基礎とするコードベース
    - パターン：コンポーネントごとのトランク
    - パターン：単一のトランク
- ワークフローの有効性
    - 変更の加速
    - コードレビュー
    - ワークフローにガバナンスを組み込む
### 14章 継続性とダイナミックインフラストラクチャ
- サービスの継続性
    - 本物の可用性
    - 復旧のためのダイナミックサーバープール
    - ダイナミックインフラストラクチャを意識したソフトウェア設計
    - 継続性のためのコンパートメント化
- ゼロダウンタイム変更
    - パターン：ブルー-グリーン交換
    - パターン：フェニックス交換
    - プラクティス：交換のスコープを絞り込め
    - パターン：カナリア交換
    - ゼロダウンタイム交換のためのトラフィックのルーティング
    - データをともなうゼロダウンタイム変更
- データの継続性
    - レプリケートによる冗長なデータの生成
    - データの再生成
    - データの永続化の委託
    - 永続ストレージへのバックアップ
- ディザスタリカバリ
    - 継続的ディザスタリカバリ
    - DRプラン：災害のためのプランニング
    - プラクティス：コールドスタンバイではなく再構築せよ
    - パイプラインによる継続的なモニタリング
- セキュリティ
    - システムブリーチの自動的な消去
    - 防御としての信頼性の高いアップデート
    - パッケージの出所
        - ハードニングの自動化
        - パイプライン内でのセキュリティチェックの自動化
        - 脆弱性としての変更管理パイプライン
        - クラウドアカウントによるセキュリティリスクのマネジメント
### 15章 Infrastructure as Codeのための組織
- 発展的なアーキテクチャ
    - 実戦演習
    - Trailblazerパイプラインから始める
- 効果測定
    - 求める結果について合意を得ることを優先する
    - **チームのために役立つ指標** を選択する
    - リードタイムの監視と改善
    - カンバンを使った仕事の可視化
    - レトロスペクティブとポストモーテム
- ユーザーに力を与える組織
    - 職能分割モデルの落とし穴
    - セルフサービスモデルを採り入れる
    - 完全な責任を引き受ける：構築するのも運用するのも同じチーム
    - 職能横断型チームの組織
- 継続的変更管理を通じたガバナンス
    - 信頼できる部品の供給
    - パイプラインによる運用準備完了の証明
    - 品質に対する責任の共有
    - 自動プロセスのレビューと監査
    - 問題点を検出、是正するための時間の短縮化
        - 組織論になるのか... という感想
- **まとめ：決して終わりはない**

## 参考
[AWS公式の「Infrastructure as Code 談議 2022」がすごく勉強になったのでまとめてみた - Qiita](https://qiita.com/hatahatahata/items/8eb6f23a4c5e5ea5f4c0)
[【レポート】AWS で始める Infrastructure as Code #AWS-31 #AWSSummit | DevelopersIO](https://dev.classmethod.jp/articles/awssummit-2021-aws-31/)
[大事なことは「コード化すること」だけじゃない 〜 Infrastructure as Code を読んだ - えいのうにっき](https://blog.a-know.me/entry/2018/03/14/214852)

## その他

会社の書籍補助制度を活用しての購入... ありがたや
一読したので、じっくりまた読みます。
