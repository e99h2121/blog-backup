https://qiita.com/e99h2121/items/de4a7aa2409b54e42817

上記のうち、Marpで以下3つ、実際スライドを作った。その手順をまとめておく。


## サンプル

### サンプル1
<script async class="speakerdeck-embed" data-id="c39826d5883948b98d3333701aa64be4" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

### サンプル2
<script async class="speakerdeck-embed" data-id="2cbfc0f1534241599537b377efaa093a" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

### サンプル3
<script async class="speakerdeck-embed" data-id="14cf2d7cbf5f478895862ef2fe129ccc" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

## 0. 準備
[結局Markdownでプレゼン資料ってどれで作ると良いのよ？と思ったときの選択肢#Marp](https://qiita.com/e99h2121/items/de4a7aa2409b54e42817#vscode) 参照のこと

## 1. 全体の話の流れを決める

```txt:*.txt
タイトル
Marpでスライドを簡単に作ろう
お名前・所属 [@yamada_n](https://e99h2121.github.io/)
はじめに
これはサンプルです
ここがタイトル
副題
内容
テキストはMarkdown記法。
*[リンクも張れる(Markdown記法 チートシート)](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)
画像挿入
背景に白抜き
画像を小さくしたりぼやかしたりできる
:pineapple: 絵文字もつかえる :pineapple: 
画像を右
画像を左
Enjoy!
 ```


## 2. Markdownに起こす

`./images` に画像の置き場所を作っておく。

```md:Markdown
# タイトル
## Marpでスライドを簡単に作ろう
お名前・所属 [@yamada_n](https://e99h2121.github.io/)

# はじめに

これはサンプルです

# ここがタイトル

## 副題

内容

# テキストはMarkdown記法。
*[リンクも張れる(Markdown記法 チートシート)](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)

# 画像挿入

![](./images/frog.png)

# 背景に白抜き

![bg](./images/writing.png)

# 画像を小さくしたりぼやかしたりできる

![bg blur:10px 30%](./images/frog.png)

# :pineapple: 絵文字もつかえる :pineapple: 

# 画像を右

![bg right:70%](./images/frog.png)

# 画像を左

![bg left:70%](./images/frog.png)

# Enjoy!
 
```




## 3. ページの区切りを考える

`---` が改ページになります。

https://help.qiita.com/ja/articles/qiita-slide

```

---

```

## 4. 画像を入れる

### Marp イメージシンタックス
https://marpit.marp.app/image-syntax

例) 
画像として挿入したい場合: `![](./images/writing.png)`
背景として挿入したい場合: `![bg](./images/writing.png)`
背景として30%の大きさにしぼやかしたい場合: `![bg blur:10px 30%](./images/writing.png)`

### いらすとや
https://www.irasutoya.com/

### パブリックドメインの絵画など
https://artvee.com/


## 5. スタイルやフォントを決める

### フォント

https://fonts.google.com/

https://coliss.com/articles/freebies/google-fonts-for-japanese.html


### サンプル1

```md:Markdown
---
theme: uncover
marp: true
paginate: true
footer: See also https://twitter.com/e99h2121
---

<style>
@import url('https://fonts.googleapis.com/css?family=Noto Sans JP&display=swap');
section {
    font-family: 'Noto Sans JP', serif;
    background-color: ivory;
}
</style>



<!--
_paginate: false
_color: ivory;
-->
![bg](./images/writing.png)


# タイトル
#### Marpでスライドを簡単に作ろう

お名前・所属 [@yamada_n](https://e99h2121.github.io/)


---

*はじめに

- サンプルです

---


# タイトル

## 副題

内容

---

# テキストはMarkdown記法。
*[リンクも張れる(Markdown記法 チートシート)](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)

---

# 画像挿入

![](./images/frog.png)

---

<!--
_color: ivory;
-->

# 背景に白抜き

![bg](./images/writing.png)

---

# 画像を小さくしたりぼやかしたりできる

![bg blur:10px 30%](./images/frog.png)

---

# :pineapple: 絵文字もつかえる :pineapple: 

---

# 画像を右

![bg right:70%](./images/frog.png)

---

# 画像を左

![bg left:70%](./images/frog.png)

---

# Enjoy!
 
```

### サンプル2

```md:Markdown
---
theme: uncover
marp: true
paginate: true
header: sample 
footer: Pineapple / Strictly Confidential
---

<style>
@import url('https://fonts.googleapis.com/css?family=Noto Sans JP&display=swap');
section {
    font-family: 'Noto Sans JP', serif;
}

header {
    width: 100%;
    color: orange;
    background-image: url(./images/pineapple.png);
    background-repeat: no-repeat;
    background-position: 85%;
    top: 10px;
    text-align: left;
    padding: 33px;
}

footer {
    width: 100%;
    color: white;
    background: linear-gradient(to right, orange, white);
    text-align: left;
    padding: 10px;
}

</style>

<!--
_paginate: false
_color: black;
-->


# タイトル
#### MarpとMarkdownでスライドを簡単に作ろう

お名前・所属 [@yamada_n](https://twitter/e99h2121)

---

# タイトル

## 副題

内容

---

# テキストはMarkdown記法。
*[リンクも張れる(Markdown記法 チートシート)](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)

---

# 画像挿入

![](./images/frog.png)

---

Enjoy!
 
```

### サンプル3

```md:Markdown
---
theme: uncover
marp: true
paginate: true
---

<style scoped>
section { 
    font-size: 400%; 
}
</style>

HTMLタグを使いたい場合は、ページ右肩の真ん中のボタン（Marp のマークのボタン）を押して、［Open extension settings］を選ぶ。そして、「Enable HTML」のチェックボックスにチェックを入れる。

---

文字サイズを変更したいページの冒頭に、以下の内容を入れる。これで、文字サイズは4倍になる。style scoped を設定すると、その領域だけにWebページのスタイルが適用になる。

    ```
    <style scoped>
    section { 
        font-size: 400%; 
    }
    </style>
    ```

---

<style>
@import url('https://fonts.googleapis.com/css?family=Noto Sans JP&display=swap');
section {
    font-family: 'Noto Sans JP', serif;
}
</style>


scoped でなければ全ページに適用


---

<style scoped>
section {
    background-color: ivory;
}
</style>

# おおお

---

<style scoped>
section {
    background: linear-gradient(to right, #16a085, #f4d03f); 
    color: white;
}
</style>

# かっこいい

```


## 6. 全体見直し

https://note.com/toyomane/n/n992f1f468fb4

- 統一感。
- 書き込みすぎていないか。1秒で聴衆がスライドの内容を概観できるか。


## 7. 完成したMarkdownを転用

元がMarkdownだから、他に転用するのも簡単。
https://github.com/e99h2121/slides/tree/master/template
Happy Presentation Life!


以上参考になればさいわいです。
