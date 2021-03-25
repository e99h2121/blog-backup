GASでdoGetメソッドを作成する。
doGetメソッドはGetリクエストを受け取った際に呼び出される関数。
doGetメソッド内でHTMLServiceオブジェクトを使用することでWebアプリケーションを作成できる。

## gs
```code.gs
function doGet(request) {
  return HtmlService.createTemplateFromFile('Wild')
      .evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
```
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/1810a6b8-6984-fcca-7bfe-2c1fc053a356.png)



## HTML

解けない愛のパズルを解く。
`<?!= include('Tough'); ?>` がつまり、上の *.gs のinclude関数を呼び出しているところである。

```Wild.html
<!DOCTYPE html>
<html>
  <head>
    <title>Wild and Tough</title>
    <base target="_top">
    <?!= include('Tough'); ?>
  </head>
  <body>
    <div class="wildandtough"><b><span>Wild&Tough </span><span>この</span><span>街</span><span>で</span><span>やさしさに</span><span>甘えて</span><span>いたくはない</span></b></div>
  </body>
</html>

````
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/2e485893-8715-3af5-f088-7d800fd26eb1.png)


## CSS

本来 `Tough.css` 等としたいようなところだがここでは `Tough.html` の名で作成するしかない。以下CSSを記述する。普通のCSSだ。WildでToughなフォントをimportし、クルマのライトをイメージしたら、哀しくおどけたblinkが施される。

```Tough.html
<style>
@import url(//fonts.googleapis.com/css?family=Reggae+One);
html,body{
  height:100%
}
body {
  background-color: #333333;
  background-size:cover;
  margin:0
}
.wildandtough {
  text-align: center;
  width: 100%;
  height: 50%;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  user-select: none;
}
.wildandtough b{
  font: 400 19vh "Reggae One";
  color: #fee;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #4444ff, 0 0 0.5em #4444ff, 0 0 0.1em #4444ff, 0 10px 3px #000;
}
.wildandtough b span{
  animation: blink linear infinite 2s;
}
.wildandtough b span:nth-of-type(2){
  animation: blink linear infinite 3s;
}
@keyframes blink {
  78% {
    color: inherit;
    text-shadow: inherit;
  }
  79%{
     color: #333;
  }
  80% {
    text-shadow: none;
  }
  81% {
    color: inherit;
    text-shadow: inherit;
  }
  82% {
    color: #333;
    text-shadow: none;
  }
  83% {
    color: inherit;
    text-shadow: inherit;
  }
  92% {
    color: #333;
    text-shadow: none;
  }
  92.5% {
    color: inherit;
    text-shadow: inherit;
  }
}

</style>

```
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d7dde8bd-1567-0410-870a-980553e80c45.png)




## 出来栄え

![gwt.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/881b4075-7ce0-2616-2e2f-03784ccf9566.gif)


みたいなことをすれば傷ついた夢を取り戻せるかもしれない。


## 参考
https://developers.google.com/apps-script/guides/html/best-practices#code.gs
[NeonSign - Codepen](https://codepen.io/takaharatoru/pen/LYEjyMw)
[Reggae One - Google Fonts](https://fonts.google.com/specimen/Reggae+One?preview.text_type=custom&subset=japanese&preview.text=%E3%81%93%E3%81%AE%E8%A1%97%E3%81%A7%E3%82%84%E3%81%95%E3%81%97%E3%81%95%E3%81%AB%E7%94%98%E3%81%88%E3%81%A6%E3%81%84%E3%81%9F%E3%81%8F%E3%81%AF%E3%81%AA%E3%81%84)
[JSONを返す無料APIを3分で作る方法](https://qiita.com/ykhirao/items/a41322085ab55837b88e)
、というか、GASをちょっと触ってみようと思っただけなのに `GetWild` タグが既に存在していて結構過去ネタがあることが驚き。


### GetWildタグ 
https://qiita.com/advent-calendar/2016/getwild
https://qiita.com/tags/getwild?page=1


歌詞は一部引用: https://www.youtube.com/watch?v=NHKq8IOXPxA
以上、GAS (Google App Script) の初心者向け手ほどきになればさいわいです。
