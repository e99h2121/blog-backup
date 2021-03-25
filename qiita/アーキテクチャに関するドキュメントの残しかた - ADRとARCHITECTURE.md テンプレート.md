技術、アーキテクチャ設計の指針には [技術選定/アーキテクチャ設計で後悔しないためのガイドライン](https://qiita.com/hirokidaichi/items/a746062917595619720b) という資料があるが、ここでも[アーキテクチャディシジョンレコードをつける](https://qiita.com/hirokidaichi/items/a746062917595619720b#%E3%82%A2%E3%83%BC%E3%82%AD%E3%83%86%E3%82%AF%E3%83%81%E3%83%A3%E3%83%87%E3%82%A3%E3%82%B7%E3%82%B8%E3%83%A7%E3%83%B3%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E3%81%A4%E3%81%91%E3%82%8B) という文書に触れられている。「なんでこのアーキテクチャにしたの？」は、プロジェクト外の者、あるいはもちろん、プロジェクトに新規参加する者にとって大事な資料となる。

以下具体的に ADR と、ARCHITECTURE.md というものに絞って何を書くべきか書いた。


## 1. ADR - Architecture Decision Record アーキテクチャ決定録

**目的: アーキテクチャに関わるドキュメント決定記録。** あれ、これ以前どう決めましたっけ？ の決定録。[意思決定の記録を残す - ADRの話](https://uga-box.hatenablog.com/entry/2020/01/21/001611) に以下がまとめられている。

- 書き方ポイント
- フォーマット
    - タイトル (Title)
    - ステータス (Status)
    - 文脈、背景 (Context)
    - 決定 (Decision)
    - 結果 (Consequences)


テンプレートとしては以下等。
[joelparkerhenderson/architecture_decision_record](https://github.com/joelparkerhenderson/architecture_decision_record/blob/master/adr_template_madr.md)
日本語にして使いやすいようにしておく。

```ADR.md

## タイトル: 解決したい問題と解決策

* **ステータス ( 提案済｜却下済｜承認済｜非推奨 等 )**
* 意思決定者。意思決定に関与した全員のリスト] !
* 日付: [決定書が最後に更新されたYYYY-MM-DD] 
* 技術的背景やその他関連チケットNo

## 文脈、背景や問題点の説明

文脈、背景 (コンテキスト) と問題を、2～3文で。
問題を疑問形で表現しても良い。

## 決定事項

* 決定1
* 決定2、背景、直面する懸念、等

## 考慮した選択肢

* 選択肢1
* 選択肢2

## 決定結果

### 決定にあたり考慮したメリット
* 例：満足度の向上

### 決定にあたり考慮したデメリット
* 例：品質の妥協、必要なフォローアップのコスト、等

## 参考
* その他

```

### その他参考
[アーキテクチャ設計のドキュメンテーション](https://gist.github.com/kawasima/e325eda1c910d2abc5fb5f69d6a692e2) 
[アーキテクチャの「なぜ？」を記録する！ADRってなんぞや？](https://qiita.com/fuubit/items/dbb22435202acbe48849)

### 例
https://github.com/roschart/Nosedive/tree/master/doc/adr
https://github.com/huifenqi/arch/tree/master/decisions


## 2. ARCHITECTURE.md - システム全体の簡単な図とテキスト

**目的: プロジェクトへの新規参加者が全体像の把握を効率的に行えるようにする。**

引用: https://matklad.github.io//2021/02/06/ARCHITECTURE.md.html 
> 10k〜200k行 規模のオープンソースプロジェクトを保守するならば、私はREADMEとCONTRIBUTINGの隣にARCHITECTUREドキュメントを追加することを強く推奨する。これは「もっとドキュメントを書け」というアドバイスではないことを強調しておきたい。

決定録と少々異なり、Architecture.md は、アーキテクチャに関するドキュメントそのもの。
[プログラムの「アーキテクチャに関するドキュメント」は面倒でも書くべき、ではどのように書くべきか？](https://gigazine.net/news/20210210-architecture-md/) をサマリすると [Aleksey Kladov](https://github.com/matklad) 氏曰く:

- 特にコードの総行数が1万行を超える大規模なプロジェクトにおいて、アーキテクチャを示す「ARCHITECTURE.md」を用意することが重要。
- ARCHITECTURE.mdの中心となるのは、「プロジェクトの全体像」とコードのつながりを表した「コードマップ」です。コードマップはそれぞれのコードが「どんな処理をするのか」「どこにあるのか」「どのように関わり合っているのか」を記述するにとどめ、詳細な説明については別のドキュメントにまとめるべき。
- ARCHITECTURE.mdの内容はコードの変更に影響を受けない内容にすべき。
- ファイルやモジュールはリンクを作成せず、名称で検索できるようにする。
- 「プロジェクトで不変とされる部分」「レイヤーやシステムの境界」といった、コードを読むだけではわかりにくい部分を明示することも大切。


### そのサンプル (例: rust-analyzer, jasper)
以下Readme.md。

Rust Analyzer:
https://github.com/rust-analyzer/rust-analyzer/blob/master/README.md

Jasper:
https://github.com/jasperapp/jasper/blob/master/README.md


#### ARCHITECTURE.md

今回のテーマ ARCHITECTURE.md。図はシンプル。
引用: https://github.com/rust-analyzer/rust-analyzer/blob/master/docs/dev/architecture.md
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/bbf0c799-c6c0-3b0f-cfd2-d3b87cb6d2d8.png)

引用: https://github.com/jasperapp/jasper/blob/master/ARCHITECTURE.md
https://docs.google.com/drawings/d/1t0_N30f3oE0diRzwjY-MQMo2zFmkrTOlbkXIcBdlmso/edit
![https://raw.githubusercontent.com/jasperapp/jasper/master/architecture.png](https://raw.githubusercontent.com/jasperapp/jasper/master/architecture.png)

こちらのテンプレートは、テンプレと言うほどのテンプレではない。こんな感じで良いようだ。

```ARCHITECTURE.md
## 項目1

* 箇条書き
* 箇条書き
* 箇条書き

## 項目2

* 箇条書き
* 箇条書き
* 箇条書き

## 項目3

* 箇条書き
* 箇条書き
* 箇条書き

## FAQ

* 箇条書き
* 箇条書き
``` 

### ARCHITECTURE.mdを「書いてみた」参考記事

[ARCHITECTURE.mdというものを書いてみた](https://blog.h13i32maru.jp/entry/2021/02/19/114906)
図形描画には [Google図形描画](https://support.google.com/docs/answer/179740?co=GENIE.Platform%3DDesktop&hl=ja) が使えるようだ。

- [ドキュメントを書くときの「メンタルモデルの原則」](https://techlife.cookpad.com/entry/2020/11/27/104826) がポイント。端的には「『これをするにはこうする。こうしたらこうなる。』というように動作や結果をイメージできる」状態を作る。
- 「アーキテクチャ図を書くことが一番良かったです。今までは頭の中にしかなかったものが目視できるようになると、気づくことがあります」。


## まとめ

[Pandoc+git+markdownを使うこれだけの理由](https://zenn.dev/e99h2121/articles/5b4546aeb9ee89) にも、もう少し、それ未満の話についてはなぐり書きした。

1 も 2 も、新規参加者が「プロジェクトの者たち、何やってるのかわからん」となる問題を解決するのに有効そうです。開発ドキュメントが散在しがちなプロジェクトで使えるだろうかと思い以上、書きました。なにがしかの参考になればさいわいです。

