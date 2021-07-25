プレゼン、凝りたいと思い始める時が危ないですね。
以下あたりが軸なのかなと思い、並べてみました。
[結局UMLとかシーケンス図とかAWSの図とかどれで描くと良いのよ？と思ったときの選択肢 - Qiita](https://qiita.com/e99h2121/items/eaca084ae7b0488ab686) の姉妹編です。

1. 書きやすさ
1. 資料としての保存
1. プレゼン映え

結論としては以下意味で、この順番です。

- 「書きやすい」フォーマットで完璧に仕上げておく。
- そうすることで保存性、見直す価値のでる資料になるし、映える資料にあとからでも加工できる。



## 1. 書きやすさ

見せるというよりまず、ごくシンプルに書きたい。

### Terminal

Terminal上でプレゼン。

#### slides

`go install github.com/maaslalani/slides@latest`
`slides sample.md`

http://maaslalani.com/slides/

https://qiita.com/e99h2121/items/aa3c41b2e180f8468cbe


### 変換

究極の選択肢として、いかなるものへも変換してしまえばいいということでもある。

#### md2googleslides

https://github.com/googleworkspace/md2googleslides

https://qiita.com/o_-____-___-o/items/acc38ccd242533c735cc


#### Pandoc

https://pandoc.org/

https://qiita.com/e99h2121/items/28fd575b18bdf41b60dd#2-4-%E3%81%99%E3%81%A7%E3%81%AB%E7%A4%BE%E5%86%85%E3%81%AE%E3%81%9F%E3%81%8F%E3%81%95%E3%82%93%E3%81%AE%E6%96%87%E6%9B%B8%E3%81%8Cmarkdown%E4%BB%A5%E5%A4%96%E3%81%A7%E6%9B%B8%E3%81%8B%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B


## 2. 資料としての保存

PDFにかんたんにエクスポートして、関係各所に共有など。

### VSCode

#### Marp

https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode

https://qiita.com/msp0310/items/0e54f69457f81bc64754

https://qiita.com/tomo_makes/items/aafae4021986553ae1d8

PDF出力など小さき所で躓いたのでメモ
https://github.com/marp-team/marp-vscode/issues/44

### Qiita

https://qiita.com/Qiita/items/4ff5873776992f0511d6




## 3. プレゼン映え

最後に見た目。1, 2 が整っていれば資料として十分。
以下でHTMLとかjsとかnpmとか、静的サイトと同じく。スタイルもいくらでも凝ることができる。


### reveal.js

`git clone https://github.com/hakimel/reveal.js.git`
`cd reveal.js && npm install`
`npm start`
`http://localhost:8000`

https://revealjs.com/

https://qiita.com/siguremon/items/c717eca388070215712c


### Fusuma

`npm i fusuma -D`
`npx fusuma init`
`npx fusuma start`
`http://localhost:8080`

https://hiroppy.github.io/fusuma/

https://blog.hiroppy.me/entry/fusuma-v2


### Sli.dev

`npm init slidev`
`http://localhost:3030/`

https://sli.dev/

https://qiita.com/e99h2121/items/a115f8865a0dc21bb462





## 参考

https://notepm.jp/blog/5994

https://qiita.com/ykhirao/items/74a23f812dd5d22b3b88

以上自分が最近プレゼン資料を作ろうとした際の学びでした。
そのスライド: https://github.com/e99h2121/slides/blob/master/slidev/slides.md

参考になればさいわいです。
