![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/c0619e0d-21fa-fce2-f9d7-7f93477fe159.png)
Web書道 http://web-shodo.com/ とやらが終了していてかなしかったのでそれに着想を得て遊んだ記録。

https://e99h2121.github.io/playground/shodo.html



## CSSで縦書きという知識

https://qiita.com/moonglows76/items/a993aebd069142779ef1

https://qiita.com/tsuka-rinorino/items/3e3eaaba8cddb6ff08e9

https://qiita.com/skmtko/items/7e1eaa5723ef2c0926d1

端的にはこれ

```css
div {
  -webkit-writing-mode: vertical-rl;
      -ms-writing-mode: tb-rl;
          writing-mode: vertical-rl;
}
```


## 結果このように
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/845a2e83-7ab0-7218-a8c3-09b0a7e0bd0b.png)
してみた。

![nikukyu.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/77b87fdb-feff-8c8b-a54e-226d9b2fbf9f.gif)

## Google Fontsを有り難く使用

https://googlefonts.github.io/japanese/

「はんなり」「ニコモジ」等。

### ソース抜粋

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>CSS縦書き日本語フォントと遊ぶ</title>

<!-- adobe font -->
<script>
  (function(d) {
    var config = {
      kitId: 'han5ukt',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
</script>

    <!-- https://googlefonts.github.io/japanese/ -->
    <link href="https://fonts.googleapis.com/earlyaccess/hannari.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/earlyaccess/nikukyu.css" rel="stylesheet">
    <style>
      body {
        color:#630;
        font-size:5em;
      }
      p.font1{
        font-family: cursive;
      }
      p.font2{
        font-family: serif;
      }
      p.font3{
        font-family: "Nikukyu";
      }
      p.font4{
        font-family: "Hannari";
      }
      p.font5{
        font-family: potta-one,sans-serif;
        font-weight: 400;
        font-style: normal;
      }

      /* 縦書き */
      .v-writing {
        writing-mode: vertical-rl;
        display: inline-block;
        text-align: left;
      }
    </style>
  </head>
  <body>
    <input type="text" id="input_message"  size="20" maxlength="100" value="おこさまランチ">
    <div class="v-writing">
    <p class="font1" id="output_message1">cursive</p>
    <p class="font2" id="output_message2">serif</p>
    <p class="font3" id="output_message3">Nikukyu</p>
    <p class="font4" id="output_message4">Hannari</p>
    <p class="font4" id="output_message4">Pottaone</p>
    <div id="output_message"></div>
    </div>

    <script language="javascript" type="text/javascript">
     function main() {
        var input_message = document.getElementById("input_message").value;
        document.getElementById("output_message").innerHTML = input_message;
        document.getElementById("output_message1").innerHTML = input_message;
        document.getElementById("output_message2").innerHTML = input_message;
        document.getElementById("output_message3").innerHTML = input_message;
        document.getElementById("output_message4").innerHTML = input_message;
        document.getElementById("output_message5").innerHTML = input_message;
      }
      document.getElementById("input_message").onchange = main;
      window.onload = main;
    </script>
  </body>
</html>
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/4fad804b-765c-6fff-dc97-7a5ffebd8a2d.png)
では

https://github.com/e99h2121/playground/blob/main/shodo.html


## 自分でフォントファイルを置くには

参考:
https://b-risk.jp/blog/2020/06/webfont/
https://webquest-design.jp/blog/designtool/15002/

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/0711f202-73fd-1ec5-5595-94425dac5041.png)
以下のように書く。

```css
      @font-face {
        font-family: 'MyFontreisyo';
        src: url('./fonts/aoyagireisyosimo_otf_2_01.otf') format("opentype");
      }
      @font-face {
        font-family: 'MyFontsoseki';
        src: url('./fonts/AoyagiSosekiFont2.otf') format("opentype");
      }
```

## Adobe Fontsも使える

https://fonts.adobe.com/fonts/

2021年4月9日の記事: [Adobe Fontsの日本語フォントが大幅増 ～191フォントが追加され、計436フォントに - 無償メンバーシップでも138フォントが利用可能。量だけでなく質も充実](https://forest.watch.impress.co.jp/docs/news/1317536.html)


## まとめ

https://www.webcreatorbox.com/tech/writing-mode

<p class="codepen" data-height="365" data-theme-id="light" data-default-tab="result" data-user="manabox" data-slug-hash="vJjxpX" style="height: 365px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="縦書き - text-orientation">
  <span>See the Pen <a href="https://codepen.io/manabox/pen/vJjxpX">
  縦書き - text-orientation</a> by Mana (<a href="https://codepen.io/manabox">@manabox</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/7b5366d1-63f7-52f8-98fc-0c5367b70194.png)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/ef397021-92f1-dc3b-a36a-b896a0742e84.png)


実用的には使う場面にほぼ遭遇しないのですけど。
お楽しみいただければさいわいです。
