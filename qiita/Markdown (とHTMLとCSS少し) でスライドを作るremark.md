## remarkとは

こういうのでいいんだよ、
「HTMLとCSSを使いこなせる人をターゲットにした、シンプルなブラウザ内マークダウン駆動のスライドショーツール」

https://github.com/gnab/remark

> A simple, in-browser, markdown-driven slideshow tool targeted at people who know their way around HTML and CSS


```html

<!DOCTYPE html>
<html>
  <head>
    <title>タイトル</title>
    <meta charset="utf-8">
    <style>
      @import url('https://fonts.googleapis.com/css?family=Noto Sans JP&display=swap');
      @import url(https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz);
      @import url(https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic);
      @import url(https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700,400italic);
      body { 
        font-family: 'Noto Sans JP', serif; 
      }
      h1, h2, h3 {
        font-family: 'Noto Sans JP', serif;
        font-weight: normal;
      }
      
      .remark-code, .remark-inline-code { font-family: 'Ubuntu Mono'; }
    </style>
  </head>
  <body>
    <textarea id="source">

class: center, middle

# タイトル

---

# アジェンダ

1. はじめに
2. 本日のメニュー
3. ...

---

# はじめに

    ```
     System.out.println("Hello, world!!!");

    ```

    </textarea>
    <script src="https://remarkjs.com/downloads/remark-latest.min.js">
    </script>
    <script>
      var slideshow = remark.create();
    </script>
  </body>
</html>


```

## 仕上がり

![test.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/8165fc3a-5eb1-f5b0-ad82-45c2a59b07a6.gif)



## 関連

https://qiita.com/harasou/items/1fa3cca6ac1ef175c876

https://qiita.com/basictomonokai/items/2aff5fa5318c45dd2f1f

https://qiita.com/opengl-8080/items/d44aec7c6c643996916b

凝りたかったらCSSでおめかしして、内容はMarkdownで書いておけば良いやつ。
参考になればさいわいです。
