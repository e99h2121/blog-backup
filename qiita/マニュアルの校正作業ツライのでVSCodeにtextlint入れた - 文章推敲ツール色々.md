## textlint物語

そのままですが、なぐり書き。書くのは好きだけど人の書いたものの読むだけってツライ、と思ったので入れたVSCodeとtextlint。


### たすけてドラえもん
[WindowsのVS Codeでtextlintを使ってリアルタイムに文章校正する。](https://mk-55.hatenablog.com/entry/2018/03/24/004339) があるよ。
[Node.js / npmをインストールする（for Windows）](https://qiita.com/taiponrock/items/9001ae194571feb63a5e) をみてインストールします。

`npm install -global textlint textlint-rule-preset-ja-technical-writing textlint-filter-rule-comments textlint-filter-rule-whitelist`

打てばOK。色々ぶっ壊すと嫌なので階層を作って

`C:\workspaces\textlint`

main.md を配置

```
C:\workspaces\textlint>textlint --init
.textlintrc is created.
```

`.textlintrc` を以下のように編集

```.textlintrc
{
  "filters": {
      "comments": true
  },
    "rules": {
        "preset-ja-technical-writing": true
    }
}
```

`textlint main.md` と打ってみると、コマンド上でもエラーが見られます。


### もう一息
あとは、VSCode 上から textlint のチェックを実行するために拡張機能をインストールします。
[vscode-textlint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=taichi.vscode-textlint) 

インストール後 VSCode を再起動し、作成したプロジェクトを開くことで textlint が有効になります。

`Ctrl + Shift + V` で、
[Visual Studio Code で Markdown リアルタイムプレビュー機能を使える](https://sig9.hatenablog.com/entry/2017/03/14/120000)


### Enjoy!
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/59d676e9-260f-fa7c-fd4f-c2bfbc897e36.png)
目視の助けくらいにはなるかも。

## テキスト校正くん
同様、日本語を構成してくれるVSCode拡張

https://marketplace.visualstudio.com/items?itemName=ICS.japanese-proofreading

こんな感じのことを指摘してくれる。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/7b0b1496-5bea-c78c-cbac-a47ecad45c5c.png)

中身的にはtextlintらしいので、textlintを自分でカスタマイズしていくか、うまく選択すると良さそう。

https://blog.solunita.net/posts/fully-customized-textlint/#vscode%E3%81%8B%E3%82%89%E4%BD%BF%E3%81%86




## スタイルガイド
折角なので以下ツールについても書いておく。
JTF日本語標準スタイルガイドは、実務翻訳において和訳時に使用できる日本語表記ガイドライン。
またスタイルガイドとしてはGoogle社、マイクロソフト社のものが圧巻。

- [日本語スタイルガイド](https://www.jtca.org/publication/guide_jsg.html)
- [日本翻訳連盟(JTF)日本語標準スタイルガイド](https://www.jtf.jp/jp/style_guide/styleguide_top.html)
- [日本語文章のスタイルガイドのまとめ](https://qiita.com/azu/items/623e5f50ccac2d4a8ac8)
- [JTF日本語標準スタイルガイドのルールセットで文章をチェック](https://efcl.info/2015/10/19/textlint-plugin-jtf-style/)
- [Google社のテクニカルライティングの基礎教育資料がとても良かったので紹介したい](https://qiita.com/yasuoyasuo/items/c43783316a4d141a140f)
    - [Technical writing resources  |  Google Developers](https://developers.google.com/tech-writing/resources)
        - This style guide provides a set of editorial guidelines for anyone writing developer documentation for Google-related projects.
    - [Welcome - Microsoft Style Guide | Microsoft Docs](https://docs.microsoft.com/en-us/style-guide/welcome/)
        - Welcome to the Microsoft Writing Style Guide, your guide to writing style and terminology for all communication—whether an app, a website, or a white paper. If you write about computer technology, this guide is for you.


## lint 
textlintはMarkdownなどテキスト向けのLintツール（元の意味は主にC言語のソースコードに対し、コンパイラよりも詳細かつ厳密なチェックを行うプログラム）。

- [textlint と VS Code で始める文章校正](https://qiita.com/takasp/items/22f7f72b691fda30aea2)
- [textlintで日本語の文章をチェックする](https://efcl.info/2015/09/10/introduce-textlint/)
- [textlint](https://github.com/textlint/textlint)
- [日本語関係のルールセット](https://efcl.info/2015/12/30/textlint-preset/)

## アンチパターン
仕様書・設計書・提案書・メール・障害票に「各ドキュメント共通してありがちなアンチパターン」。

- [ドキュメント作成時のあるあるアンチパターン20](https://qiita.com/tamikura@github/items/625b94b6046113403728)


以上お役に立てばさいわいです。
