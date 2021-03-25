## 動機とこのページの趣旨

[jQuery](https://ja.wikipedia.org/wiki/JQuery) ...もう14年モノらしい。

業務で基本的にjQueryを10年ほど利用してきたが、スキルマップ作成とやらでVue, React, Angular の経験を問われたため、知ったかぶりしたいので調べた各種資料。以下を順に読んで `index.html` を3ファイル作るだけで1時間以内にVue, React, Angular「完全に理解した」顔をしよう。タイトルの「怠惰」はプログラマの美徳なのでお飾りフレーズとして書いてしまったが、コピペという怠惰はプログラム的には怠惰では無い、むしろ闇なので、これで一通りかじったらむしろナニモワカラナイの絶望の谷に堕ちてみることをお勧めする。そんな趣旨。

時代は[「Angular」「React」「Vue」の3大フレームワークに集約](https://logmi.jp/tech/articles/323856) らしい...

## Hello Vue world のために以下を読め

さて時間がないので早速始めよう！
[Vue.jsでできること8選。凄さが分かる実用例スニペット集](https://goworkship.com/magazine/vuejs-framework-snippets/) 
凄い！けれどその凄さを実感している場合ではない。
[Vue.jsで Hello World!](https://qiita.com/hyaroy_pg/items/ecb60ee3971e059507bd)

### ひとまず元気に挨拶、Hello world
HTML表示:
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/0d256879-4b03-9b8f-7151-80aa11a9712c.png)

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <title>Title</title>
</head>
<body>
<div id="app">
    <!-- testValの内容を表示する -->
    {{ testVal }}
</div>
</body>
<script>
    const app = new Vue({
        el: '#app',
        data: {
            testVal: 'Hello World!'
        }
    });
</script>
</html>
```

早速動かせた実感を得たら以下。
[Vue.jsで湯婆婆を実装してみる](https://qiita.com/shibomb/items/688ebef26627aea014f7)
[公式（日本語）](https://jp.vuejs.org/v2/guide/)
Vue.js は公式を読めと随所に書いてあるので、公式サイトを読むのが最も手っ取り早く完全に理解できる。

## Hello React World のために以下を読め
次、React。こちらはまず。
[React (JavaScript) で湯婆婆を実装してみる](https://qiita.com/drytt/items/250440366c9f72f619dd)

### 元気に湯婆婆
令和のHelloworld湯婆婆。
HTML表示:
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/5f637e41-7c81-f510-4524-7c934a2b29be.png)

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>React 湯婆婆</title>
  <script src="https://unpkg.com/react/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    (() => {
      'use strict';

      const {useState} = React;
      function Yubaba() {
        const [name, setName] = useState('');
        const newName = name.substr(Math.floor(Math.random() * name.length), 1);

        return (
          <div>
            <p>契約書だよ。そこに名前を書きな。</p>
            <input type='text' value={name} onChange={e => setName(e.target.value)}/>
            <p>フン。{name}というのかい。贅沢な名だねぇ。</p>
            <p>今からお前の名前は{newName}だ。いいかい、{newName}だよ。分かったら返事をするんだ、{newName}!!</p>
          </div>
        );
      }

      ReactDOM.render(
        <Yubaba/>,
        document.getElementById('root')
      );
    })();
  </script>
</body>
</html>
```

[ReactでHello Worldをする前に...](https://qiita.com/micropig3402/items/b90afc78f439f9bec81a)
[Facebook公式のcreate-react-appコマンドを使ってReact.jsアプリを爆速で作成する](https://qiita.com/chibicode/items/8533dd72f1ebaeb4b614)
以上で一通りセットアップはできる。

[ReactでHelloWorldをしてみよう！](https://qiita.com/micropig3402/items/b90afc78f439f9bec81a)
[公式（日本語）](https://ja.reactjs.org/docs/hello-world.html) 
をサラリと読もう。

## Hello Angular World のために以下を読め
ここまでで30分経っただろうか。もう少しだ。
[AngularJSでHello World](https://qiita.com/ymaru/items/3b452138a7394cd9a604) 
[AngularJS で Hello World](http://shogogg.hatenablog.jp/entry/2013/01/25/005753)

### 元気にHello world! (3回め) 
HTML表示:
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/73937473-cbcb-ef8f-73d0-e89a01cd1366.png)

```html
<!DOCTYPE html>
<html ng-app>
  <head>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.4/angular.min.js"></script>
    <script>
      var HelloWorld = {
        Controller: function($scope) {
          $scope.name = 'World';
          $scope.greeting = 'Hello';
          $scope.bye = function() {
            $scope.greeting = 'Good-bye';
          };
        }
      };
    </script>
    <link rel="stylesheet" href="css/main.css">
    <title>Hello World</title>
  </head>
  <body>
    <h1>AngularJS Example: Hello World</h1>
    <div ng-controller="HelloWorld.Controller">
      Input your name →
      <input type="text" ng-model="name" size="20">
      <hr>
      <p>{{greeting}} {{name}}!</p>
      <hr>
      <p><button ng-click="bye()">Bye!</button></p>
    </div>
  </body>
</html>

```


もう湯婆婆なのか何なのかわからなくなっているが、以下。
[とほほのAngular入門](http://www.tohoho-web.com/ex/angular.html)
[公式（日本語）](https://angular.jp/)
とほほの解説はとても心強い。

## で、jQueryとどう違うの？
3種類動かしてみたところでウンチクくらいは語れるようにしておこう。以下で完璧だ。
[JavaScriptが辿った変遷](https://zenn.dev/naoki_mochizuki/articles/46928ccb420ee733f78f)
[jQuery愛好家のためのVue.js、React入門（いずれAngularも）](https://qiita.com/BRSF/items/6a43d4cf56a9dd1a4d0c)
[jQuery から Vue.js へのステップアップ](https://qiita.com/mio3io/items/e7b2596d06b8005e8e6f)

実際に実務でjQueryを置き換えられるかなんて言う顔をするなら以下。
[Vue.jsとjQueryで同じ機能を作成し、コードを比較する](https://qiita.com/hosono/items/447efc3aae93338bca36)
[Vue.jsとjQueryで同じ機能を作成し、コードを比較する - その２](https://note.com/hosonokotaro/n/ncfc9d784de9c)
[ReactとjQueryの比較](https://qiita.com/rinimaruranran/items/1fbe86d46ade0e2a56fe)
[JavaScript: フレームワーク React/Vue/Angularについて](https://qiita.com/gumiTECH/items/13eb7da8224bf93c67b5)

これで1時間以内かな？

## 最後に我らのjQuery
ここまでjQueryだけ知っているひとを想定読者にしたので、最後にウッカリこの記事を開いてしまった人のために、念の為jQueryについてもHello worldしておく。逆の境遇においてもこれでjQueryを完全に理解してほしい。

[jQueryの基礎](https://qiita.com/praz1/items/f6150e8c8364726bac45)
頼まれてもいないのにcssのお餅付きだ。[迎春なので鏡餅をCSSで作った](https://qiita.com/7note/items/34217d2b926efa32bf40)参照。
jQuery公式については
https://jquery.com/ と、
http://semooh.jp/jquery/ がテッパンか。

HTML表示:
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/bd4f914a-5039-e996-6c46-9fedf61ef1e4.png)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <style type="text/css">
.kagamimochi {
  width: 100px;
  text-align: center;
}
.mikan {
  width: 50px;
  height: 40px;
  background: #e88522;
  border-radius: 50%;
  position: relative;
  z-index: 10;
  display: inline-block;
}
.mikan::after {
  content: "";
  width: 15px;
  height: 5px;
  background: linear-gradient(#4f9c5d 50%, #6cb576 50%);
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 10px;
  transform: rotate(-20deg);
  display: inline-block;
}
.mochi1 {
  width: 80px;
  height: 40px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 50%;
  display: inline-block;
  margin-top: -15px;
  position: relative;
  z-index: 5;
}
.mochi2 {
  width: 100px;
  height: 50px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 50%;
  display: inline-block;
  margin-top: -20px;
  position: relative;
  z-index: 4;
}
.kami {
  width: 92px;
  height: 92px;
  background: #fff;
  border: 5px solid #f00;
  transform: rotateX(45deg) rotateZ(45deg);
  display: inline-block;
  margin-top: -75px;
  position: relative;
  z-index: 1;
}

</style>
<script>
  $(function(){
    $('#hide-text').click(function(){
      $('#text').slideUp();
    });  
  });
</script>	
</head>
<body>
  <!-- このボタンを押すと -->
  <div class="btn" id="hide-text">説明を隠す</div>

<div class="kagamimochi">
  <div class="mikan"></div>
  <div class="mochi1"></div>
  <div class="mochi2"></div>
  <div class="kami"></div>
</div>

  <!-- この表示が隠れる -->
  <h1 id="text">Hello, World!</h1>
  <script src="script.js"></script>
</body>
</html>

```

これでどんどん具体的に、ナニモワカラナイを目指せそうです。すべてのJSはここからだ。Enjoy！
以上お粗末様でした。
