
https://www.youtube.com/watch?v=UBxwwG4MXrc&list=PLL6J8djFsPBVSke_shu2O7hVuRiSizZx8

https://dev.classmethod.jp/articles/devio2022-stepfunctions-mwaa-cmp/

<script async class="speakerdeck-embed" data-slide="1" data-id="2291a04bc5174863b7f9c9581c29075e" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>



> 結論は達成したいゴールや目的によって選びましょうということでしたが、迷った場合どうするか。迷った場合はStep Functionsをお勧めします。パフォーマンスとコスト面で大きな失敗はないと思われます。

### 対象
- バッチシステムを運用している
- バッチシステムの情報を集めている

### Step Functionsの概要と特徴

- ビジュアルワークフローサービス
- ローコード

- メリット
    - サーバーレス
    - 高パフォーマンス
    - Workflow Studio、ビジュアルツールでワークフロー構築
    - IaC管理など考慮は必要
- デメリット
    - タスク単位の再実行不可
    - 処理待ちはwait loopをステートマシンレベルで自前定義
- 実行履歴にハードリミットあり
- タスクがエラーになると全体が停止する
- 実行履歴の保持は90日間

### MWAAの概要

- Amazon Managed Workflows for Apache Airflow
- Pythonスクリプトで定義を作れる

- メリット
    - Airflowの資産および開発・運用経験を生かせる
    - IAMと統合された管理画面
    - タスク単位の再実行が可能
    - 既存のMWAA環境があるならほぼ0コスト
- デメリット
    - DAG(有向非巡回グラフ)
    - タスクの状態遷移に時間がかかる


### まとめ

- Step Functionsはコスパ、実行性能ともに良い。AWSに習熟しているなら有力
- MWAAの強みは既存エコシステムの再利用
- どちらを採用しても [冪等性](https://qiita.com/suin/items/316cb8aaf8dfcf11abae) の考慮は必須


## ほか参考

[スタートアップでもバッチワークフローの使い分けはあり　Amazon MWAAからの一元管理で安心感のある運用を - ログミーTech](https://logmi.jp/tech/articles/324551)
[Step Functions を利用して感じた Airflow との比較 | フューチャー技術ブログ](https://future-architect.github.io/articles/20220111a/)


ということで、
関連: [バッチサーバーFargate化プロジェクトのまとめ - Qiita](https://qiita.com/e99h2121/items/38cb0e004d51dffd2716)
以上です～

