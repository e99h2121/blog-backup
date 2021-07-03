**Markdownを社内に布教したい**、というモチベーションからMarkdownを勧める理由をまとめたもの。

## 1. Markdownを勧める理由
### 1-1. 圧倒的理由

[全人類がマークダウンを学習すべき理由｜情報デザイン力を鍛えよう](https://note.com/smartcamp_design/n/nd9e58517f07e)
[Markdownとは (日本語Markdownユーザー会)](http://www.markdown.jp/what-is-markdown/) をMarkdownで引用する。

```引用.md
Markdown（マークダウン）は、**文章の書き方**です。
デジタル文書を活用する方法として考案されました。特徴は、

- 手軽に文章構造を明示できること
- 簡単で、覚えやすいこと
- 読み書きに特別なアプリを必要としないこと
- それでいて、対応アプリを使えば快適に読み書きできること

などです。
Markdownはジョン・グルーバー（John Gruber）によって2004年に開発され、
最初は [Daring Fireball: Markdown](http://daringfireball.net/projects/markdown/) で公開されました。
その後、多くの開発者の手を経ながら発展してきました。
```
つまりシンプル。かつ、使うだけで**分かりやすいドキュメント作成を自動的に意識できる。**

**情報デザイン＝あらゆる情報をわかりやすくすること**。
**マークダウンとは | 情報構造がわかりやすい記法**。

### 1-2. 変換しやすい

**シンプルということは、いかようにも加工しやすいということだ。**
校正、推敲、スライド作成、その他フォーマットへの変換はいくらでも可能。

[Markdownファイル校正手順 - 実務編](https://qiita.com/e99h2121/items/2b7aaa1625db2785d3bd)
[マニュアルの校正作業ツライのでVSCodeにtextlint入れた - 文章推敲ツール色々](https://qiita.com/e99h2121/items/9024b2dbe5741b44f137)
[Chrome拡張などで文書校正のtextlintをもっと簡単に使う - textlint editor](https://qiita.com/e99h2121/items/10958410fc19f915d30d)
[1分でも早く仕事を終わらせるためにVSCodeにできること](https://qiita.com/EaE/items/4ca1b35396eba682a86f)
[爆速でスライドを作る！Markdownからスライドを作れる「Marp」](https://qiita.com/msp0310/items/0e54f69457f81bc64754)
[結局Markdownでプレゼン資料ってどれで作ると良いのよ？と思ったときの選択肢](https://qiita.com/e99h2121/items/de4a7aa2409b54e42817)



### 1-3. Gitでの版管理と相性が良い
**Git と組み合わせればさらに強力になる。**

- ソースコードと同様、commitの履歴から、原稿がどう変わっていったのかわかる。
- どれが原稿の最新版なのか、ファイル名に日付を入れなくてもわかる。 
- リバートできる。
- 誰が修正したのかわかる。

具体例をあげるなら、

> ユーザーヒアリング1-1_山田_最新版_Final_★完了★_20210222.docx
> ユーザーヒアリング1-1_山田田中_最新版_Final_★完了★__20210212.docx
> ユーザーヒアリング1-1_山田田中中田_最新版_Final_★完了★__20210225.docx

...のような地獄からの開放。

- 変更点に関して、Git上で議論できる。
- 修正案を検討しやすくなる。


つまりGitの強みをすべて享受できる。
[世の中の小説作家と編集者は今すぐ Word や G Suite を窓から投げ捨てて Git と GitHub の使い方を覚えるべきだ](https://qiita.com/ktkraoichi/items/f6ad43c2da0b3136d6be)、いわんや開発者をや、だ。強調する。**圧倒的に「自分にとって便利になる」のだ。**



## 2. 反論とその答え
### 2-1. 記法が難しい
今更何を言っているのーーー！と言いたいがそういうこともありますよね。
**[Markdown記法 チートシート](https://qiita.com/Qiita/items/c686397e4a0f4f11683d) を読もう。**
あるいは読まなくても、

```
## これがタイトル
```

```
- これとか
* これとかで箇条書き
```
だけで良いんじゃないだろうかとも思う。それだけで伝わるように考えるほうが重要。
Markdownは頭の中の情報整理を助けるメソッド (冒頭で「情報デザイン」と書いた) だと思ったほうが良い。
[「マークダウン書く時なんか崩れちゃうんだよな」ポイントをなくす - Qiita](https://qiita.com/aizawa213/items/0d9ae989a94e3943942a) 等も参考。

### 2-2. 伝えたいことを強調できない、色を付けたい
Word とか ナントカDocument じゃダメなのか。一人で執筆するだけなら好きな道具で良い。
**執筆するだけなら、何を使っても問題ありません。**(敢えて強調) 
**しかし個人開発でない限りおよそプロジェクトは複数人だろう。だからテキストでシンプルに、Markdownなのだ。**

「テキストファイルのバージョン管理は Git を使いましょう。あなたが楽になります。
テキストファイルの共同編集作業は GitHub を使いましょう。みんなが楽になります。」
以上引用: [文章に関わる全ての人のための Git & GitHub 入門 1-1「Git と GitHub を使うメリット」](https://qiita.com/ktkraoichi/items/6b31644e4832882310d8#27-word-%E3%81%A8%E3%81%8B-google-document-%E3%81%98%E3%82%83%E3%83%80%E3%83%A1)


### 2-3. Spreadsheet のほうが共同編集できる
これは一理あると思っています。特にオンライン会議上でああだこうだ言いながら共同編集する方法はかなり有効。すべての場合において強制したいとは思わないのです。

しかしそうやって会議を行った結論は最後にサマリして配布するだろうから、そういう時には検討しても良いんじゃないだろうか。その資料を更に他で利用できるかもしれない。

### 2-4. すでに社内のたくさんの文書がMarkdown以外で書かれている
これもわかるけど、ここまでに書いたことに少しでもメリットを感じて頂けるなら変えていってもいいと思いませんか。変換ツールがあります。

#### Pandoc 

https://pandoc.org/


- [word文書(docx)ファイルをmarkdown形式に変換する](https://qiita.com/kinagaki/items/460577f46529484d720e)
- [Googleドキュメントから効率的にMarkdown作成【Docs to Markdown】](https://qiita.com/lilacs/items/450a4c14b978ddee4a88)
- [多様なフォーマットに対応！ドキュメント変換ツールPandocを知ろう](https://qiita.com/sky_y/items/80bcd0f353ef5b8980ee)
    - 例: `pandoc input.docx -s -o output.md` などという感じで使える。
- https://pandoc-doc-ja.readthedocs.io/ja/latest/users-guide.html

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/cff8e42e-a12a-934e-bad1-1aa47d374287.png)

コマンド例: 
`pandoc input.docx -s -o output.md `
`pandoc input.docx -t markdown-raw_html-native_divs-native_spans -o output.md `


#### PDFからテキスト抽出

https://support.google.com/drive/answer/176692?co=GENIE.Platform%3DDesktop&hl=ja



## 3. Markdownで使いやすいエディタ

ここまで書いてもまだ訝しいと思われると思う。これを使うと良いというのを書いておく。

### Typora
[どうしてみんなMarkdown書くときTypora使わないの?](https://qiita.com/AnchorBlues/items/532dba54cd2f0465af97)
[強力なMarkdownエディタ「Typora」に今更入門](https://qiita.com/4_mio_11/items/223326c3289f6b2c2a07)

### StackEdit
[Markdownテキストでシーケンス図とフローチャートを描く](https://qiita.com/ka215/items/a709665cb34c505ccf1f)
[超高機能マークダウンエディタ「StackEdit」の Welcome Document を和訳してみた](https://qiita.com/ka215/items/9a7768609b88c5df8ef6)

他、先に書いたVSCodeでも良い。

### テーブル
https://www.tablesgenerator.com/markdown_tables

### その他
[自分用メモができるクラウドサービスを比較してみた](https://qiita.com/fuwamaki/items/6af4b8d7710a4fd579cb) に多数。



## 補足

あとはこれだけある過去記事でも眺めつつ
https://qiita.com/tags/markdown
[Wordな職場にMarkdownを定着させるためにやった４つのこと](https://qiita.com/segur/items/915aee79a5ba0c5f847b) をリスペクトして書いたのでこれで少しでも仲間が増えたら嬉しいなーーー。

> やったこと１：議事録をMarkdownで取った
やったこと２：仲間を作った
やったこと３：使いやすいエディタを探した
やったこと４：Markdownの勉強会を実施した

[Excel方眼紙で手順書作るのやめ隊 - AWS/GitHub/CircleCI/mkdocs でドキュメント管理-](https://qiita.com/hassaku_63/items/83daf4dac111f0b5390f) 等
以上、少しでも幸せな開発ドキュメント生活の参考になればさいわいです。
