疑問: **Boilerplate** と **Template** は何が違うのでしょうか？


## 結論

- **Boilerplate** は、実際のテキストや画像を提供する。コピー&ペーストしたら使える。
- **Template** は、文書の構造やレイアウトを提供する。コピー&ペーストだけではなく中身を埋めてもらうことを想定している。

ようだ。以下辺りを読んでみた。(ざっくり翻訳し引用。)

[What's the difference between a boiler plate and a template?](https://stackoverflow.com/questions/31173700/whats-the-difference-between-a-boiler-plate-and-a-template) 
[What is boilerplate and why do we use it? Necessity of coding style guide](https://www.freecodecamp.org/news/whats-boilerplate-and-why-do-we-use-it-let-s-check-out-the-coding-style-guide-ac2b6c814ee7/)

> **Boilerplate と Template の違いは何か？**
**Boilerplate** とはコピー&ペーストで文書に追加するだけのもの。**Boilerplate** は、条件や注意事項などを記載し、言葉を使い回している契約書によく見られる。

> 大まかに言えば、**Template** とは、新しいオブジェクトを作成するためのモデルやパターンのこと。ライティングの世界では、履歴書などの標準化されたフォームであり、ライターが自分のバージョンを作り上げるために使用するもの。

> Boilerplate とは異なり、**Template** は特定の用途に合わせて作られる。
> Template も Boilerplate も、使い方を誤ると、ビジネス文書を堅苦しく、人工的なものにしてしまう。

しかしもちろん文脈によりけりでもありそう。以下まとめる。

## Boilerplate とは
[ボイラープレートコード](https://ja.wikipedia.org/wiki/%E3%83%9C%E3%82%A4%E3%83%A9%E3%83%BC%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%B3%E3%83%BC%E3%83%89)
> コンピュータプログラミングでは、殆ど、または全く変化することなく、複数の場所で繰り返される定型コードのセクションのこと。冗長な言語を使用する場合、プログラマーはコードを少しだけ書くだけでも多くのコードを作成する必要がある。このような定型コードはボイラープレートと呼ばれる

例えば以下は、「HTMLのボイラープレート」。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title></title>
</head>
<body>

</body>
</html>
```

### Boilerplate 例

https://html5boilerplate.com/

https://www.reactboilerplate.com/

http://htmlemailboilerplate.com/

https://github.com/seanpowell/Email-Boilerplate

https://github.com/h5bp/server-configs-apache


## Template 

一方の[テンプレート](https://ja.wikipedia.org/wiki/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88)。
> 文書などのコンピュータデータを作成する上で雛形となるデータ、あるいは雛形そのもの。
最も抽象的なテンプレートは、レイアウトのみのデータで、テキストを流し込むことでレイアウトつき文書となる。

そういえばデザインパターンにもあった。

https://qiita.com/shoheiyokoyama/items/c2ce16b4f492cd014d50

[テンプレートエンジン](https://ja.wikipedia.org/wiki/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%B3)
[テンプレート (プログラミング)](https://ja.wikipedia.org/wiki/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0))

### Template 例

https://github.toidicode.com/

https://github.com/toidicode/template

http://techfolios.github.io/

https://github.com/ColorlibHQ/email-templates


## しかし注意してみると

例に上げた [HTML5 Boilerplate](https://html5boilerplate.com/)、よく見ると
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d7907367-95fe-6042-e1aa-4f1c50ea9b25.png)
most popular front-end template と書いてある。いやいや、よく見ると [HTML email boilerplate](http://htmlemailboilerplate.com/) も 
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/b8621423-dd6d-68d5-420a-0aa6ca6d4ec6.png)

downloadable email marketing templates と言っている ... :upside_down: 
[Boilerplate ひな型](http://getreadyforpmp.blogspot.com/2011/07/boilerplate.html) というブログを引用すると以下らしい。
>「あのさ、意味は大体分かってるんだけど、どうしてボイラーが出てくるの？」
「さあねえ。どうしてだろう。考えたことなかったよ。テンプレートと同じ意味なんだけどね。」
「うん、知ってる。でもそれじゃ、どうしてテンプレートって呼ばないのかな。」
「ちょっと気取った（edgy）言い方をしたい時に使う表現なんだよ。」

## まとめ

- **Boilerplate** は、実際のテキストや画像を提供する。コピー&ペーストしたら使える。
- **Template** は、文書の構造やレイアウトを提供する。コピー&ペーストだけではなく中身を埋めてもらうことを想定している。

総合して冒頭のとおりそう書いたが大事なのは文脈を読んで、自身のサイトづくりに、モックアップづくりに、提供者の意図を考えて活用することだとおもう。以上、参考になればさいわいです。
