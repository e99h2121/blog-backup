https://qiita.com/takasp/items/22f7f72b691fda30aea2

https://qiita.com/e99h2121/items/9024b2dbe5741b44f137


## 前提

- Node.js - https://nodejs.org/ja/
- VSCode - https://code.visualstudio.com/
- VSCode の Textlint拡張 - https://marketplace.visualstudio.com/items?itemName=taichi.vscode-textlint

## 手順

npm のちょっとしたオプションについては以下を参照。

https://qiita.com/standard-software/items/2ac49a409688733c90e7


### Step.1 本体と最低限のルールをインストール

任意のフォルダを作成。

`C:\workspaces\textlint_work`

`cd C:\workspaces\textlint_work`
`npm init -y`
`npm install --save-dev textlint textlint-rule-preset-ja-spacing textlint-rule-preset-ja-technical-writing`

上記で、textlint 本体 + プリセット2つをインストールする。

- preset-ja-spacing
- preset-ja-technical-writing

`npx textlint --init` で、`.textlintrc` が生成される。

https://github.com/textlint-ja/textlint-rule-preset-ja-spacing

https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing


### Step.2 追加のルールをインストール

https://shanaiho.smarthr.co.jp/n/n881866630eda

https://github.com/kufu/textlint-rule-preset-smarthr

https://www.npmjs.com/package/textlint-rule-no-mix-dearu-desumasu

上を参考に入れてみる。

`npm install --save-dev textlint-rule-preset-smarthr`
`npm install --save-dev textlint-rule-no-mix-dearu-desumasu`

既存の `.textlintrc` は一旦バックアップを取り、
`npx textlint --init` で再生成。以下ができる。

```.textlintrc
{
  "filters": {},
  "rules": {
    "no-mix-dearu-desumasu": true,
    "preset-smarthr": true,
    "preset-ja-spacing": true,
    "preset-ja-technical-writing": true
  }
}
```

こんな感じです。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/522fe48f-4125-9556-28ec-b0ecfd8337f4.png)


### Step.3 VSCodeで校正

`C:\workspaces\textlint_work\md` 内にMarkdownファイルを置いた。
VSCodeで `C:\workspaces\textlint_work` のフォルダを開く。

例) 
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/ee7688bb-0554-90a0-89d1-6c142e43d8ad.png)


以上で基本的なものがチェックできますよというメモ。
お役に立てばさいわいです。
