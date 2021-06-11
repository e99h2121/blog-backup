各種静的サイト構築を試す遊びに興じてしまいそれぞれをメモしている。
[3000文字Tips - 知ると便利なTipsをみんなへ届けよう](https://qiita.com/official-events/d523df99d6479293ffa7) にあやかりHexoで静的サイト構築までを書きます。


https://qiita.com/dongsu-iis/items/8662472e98e7fe598849

https://liginc.co.jp/web/programming/server/104594

## 公式

https://hexo.io/

node.js と git があればよい。

`npm install -g hexo-cli`
`npx hexo init blog`

で初期インストール。

`npx hexo clean`
`npx hexo generate`
`npx hexo server`

で `localhost:4000` に起動する。

`npm install hexo-deployer-git --save`
しておくと、

`npx hexo deploy -g`

でgitにお手軽デプロイできる。

### プラグイン一覧
https://github.com/hexojs/hexo/wiki/Plugins

### テーマ

https://hexo.io/themes/

### テーマごとの設定
`.\themes\(テーマ名フォルダ)` 内の `_config.yml` に書くと反映される。


## 参考

読み方はヘクソで良いのかな。日本語で綴るとちょっと残念なのが玉にキズ。GitHub Pages と組み合わせると blog作成は非常に簡単。

https://qiita.com/7321hasu/items/4ffe8636d69fea228827

https://qiita.com/nekozuki_dev/items/395dd3911790d43176b2

https://qiita.com/genie-oh/items/8c19668c7dae6b4a153e

以上です。
