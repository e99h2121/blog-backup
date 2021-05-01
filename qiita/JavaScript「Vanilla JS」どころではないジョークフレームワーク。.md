[Vanilla JSはジョークフレームワーク。普通のJSのこと。](https://qiita.com/tyoukan__/items/e4582c6774748b7f96cd)

> Vanilla JS とは
単にJavaScriptのことです。ネイティブのJavaScript。

http://vanilla-js.com/

Vanilla、「バニラ」のjsなんて言われ方にはだいぶ慣れたのですが、同じ勢いのネタフレームワーク (?) をいくつか見かけ書き留めていたのがたまったので、その寄せ集めです。


## vapor.js

https://github.com/madrobby/vapor.js

> The World's Smallest & Fastest JavaScript Library

使い方は以下。

```html
<script src="vapor.js"></script>
```

>On modern browsers, you can inline it with a data URL:

データURLなら以下だと言っている。

```html
<script src="data:application/javascript,"></script>
```

https://qiita.com/poruruba/items/0d57d5b157a97a79dba6


```html
<script></script>
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/93a4e18b-8ba2-96d7-dfec-c261c5e81dc3.png)
**空です。**


## semicolon.js (1) 

https://github.com/madrobby/Semicolon.js

> Semicolon.js — a more secure and reliable Vapor.js

使い方は以下。

```html
<script src="semicolon.js"></script>
```
あるいは以下。

```html
<script>;</script>
```

＿人人人人人人人＿
＞　セミコロン　＜
￣Y^Y^Y^Y^Y^Y^￣


まあJavaScriptでセミコロン忘れると大変ですってことですね。

https://qiita.com/riku-shiru/items/dce12248947f7f33aecc

## semicolon.js (2)

https://github.com/dchest/semicolon-js

> Semicolon.js — the most useful JavaScript library for cargo cult programmers

セミコロン.js もう一つあった。作者曰く、コードにセミコロンを前置するおまじない（以下）が流行ってしまっていることを憂慮し、作ったようだ。

```js
;var x = 1;
return x;

```

> How is it different from vapor.js or earlier semicolon.js?
These frameworks are jokes; my Semicolon.js is a real deal and comes with ideology (see above).
vapor.jsや以前のsemicolon.jsとどう違うのですか？
これらのフレームワークはジョークです。一方私のSemicolon.jsは本物で、イデオロギーもついています。

いずれのsemicolon.jsも思うところはおそらくどちらも同じと思われる。


## five.js

https://github.com/jackdclark/five

https://five.js.org/

抜粋すると

```js
five.chinese() // 五
five.chinese('pinyin') // wǔ
five.chinese('financial') // 伍 
five.japanese() // 五

```

ピンインも用意している辺り芸が細かいです。
何が面白いのかなあと思いますが

```js
five.high(); // 'o/'
```

これがやりたかったのかな。ハイファイブということらしい。

## faker.js

https://github.com/marak/Faker.js/

これは別にネタというわけではない（むしろ便利なのかもしれない）ですが以下の通り、フェイク（ダミー）のデータを生成してくれるもの。

https://rawgit.com/Marak/faker.js/master/examples/browser/index.html#address

日本語データも作れそう。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/0ae7d81f-9690-767e-6b9e-aec5c00516d8.png)

## trump.js

https://github.com/bullgit/trump.js


> I don't want any of those images that aren't from my server!

最近見られなくなっちゃいましたね。前大統領。

```html
<script type="text/javascript" src="./js/trump.js"></script>
``` 

等などで使うと、img タグの中から他所からきている img を見つけ出し

使用前：
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/aebbafbb-bdf3-46cd-4b9e-e9d489ddfb43.png)
使用後：
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/13a5edb1-5df1-b35b-af8d-011871200cfa.png)

といった感じでよそ者に対して強めに主張してくれるライブラリです。
中身はこのようでした。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/425c56b1-ecb4-6e39-7bc3-ccd008be7928.png)

**MAKE THE WEB GREAT AGAIN**
お後がよろしいようで。面白おかしく風刺できるセンスと知識って素敵

## まとめ
どちらかというとソースコードやネタの意味が勉強になります。お楽しみいただけたらさいわいです。
