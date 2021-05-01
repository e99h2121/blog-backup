## WinBox.js 

https://nextapps-de.github.io/winbox/

> モダンなWeb用ウィンドウマネージャ：軽量、優れたパフォーマンス、依存関係なし、完全にカスタマイズ可能、オープンソース

(公式説明をDeepL翻訳) だというWinBoxというjs、まだ若いもののようだが触ってみた。

![winbox.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/57784236-3ada-f571-fb5b-595f0e7ed911.gif)

GitHub: https://github.com/nextapps-de/winbox

例えばURLセットして開くならこれだけ。

```js
var winbox = new WinBox("Custom Color and Open URL");
winbox.setBackground("#ff005d");
winbox.setUrl("https://e99h2121.github.io/")

```

こんな雑なこともできる。

```js
var winbox = new WinBox("Custom Color and Open URL");
winbox.setBackground("#ff005d");
winbox.body.innerHTML = "<h1>HTMLを入れられる。</h1><h2>世の中には、</h2><h3>便利なものを作る人がいますね..</h3>";

```

<p class="codepen" data-height="365" data-theme-id="light" data-default-tab="js,result" data-user="kachibito" data-slug-hash="GRrzXoo" style="height: 365px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="GRrzXoo">
  <span>See the Pen <a href="https://codepen.io/kachibito/pen/GRrzXoo">
  GRrzXoo</a> by kachibito (<a href="https://codepen.io/kachibito">@kachibito</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>



<p class="codepen" data-height="565" data-theme-id="light" data-default-tab="result" data-user="e99h2121" data-slug-hash="rNjgWmo" style="height: 565px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Trying Winbox">
  <span>See the Pen <a href="https://codepen.io/e99h2121/pen/rNjgWmo">
  Trying Winbox</a> by YAMADA Nobuko (<a href="https://codepen.io/e99h2121">@e99h2121</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


## 参考記事

http://kachibito.net/useful-resource/winbox-js

見栄えが超簡単に楽しくなった。
以上簡単なメモですが参考になればさいわいです。
