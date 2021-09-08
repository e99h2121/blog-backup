自身のプライオリティによりますが、いくつか。

1. Markdownで幅広く再利用性を利かせたい、**長期的に**丁寧に版管理したい
2. 自分自身の操作性、描きやすさと、見た目
3. 俄然手軽に、**短期的に**、Onlineでいつでもどこでも

いずれかという視点で考えると良いのかなと思い、並べてみました。



## 1. 長期的に: Markdownで幅広く再利用性を利かせたい、丁寧に版管理したいなら

- Markdownで描くことのメリットは再利用性。
- 将来的に追記・編集、自分以外の誰かが手を入れる可能性が高い。
- 現在のドキュメントだけでなく多種説明資料、媒体に転用する可能性がある。

...という点で差分管理をしたいなら、以下。

### VSCodeでPlantUML

https://qiita.com/opengl-8080/items/98c510b8ca060bdd2ea3

https://qiita.com/munieru_jp/items/088dfc3e5e91b5ea17c3

上記参考で以下。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/c47f75db-23b7-c42c-88e0-85013b0daac4.png)

`Alt+D` でプレビュー起動。
`Ctrl + Shift + P` でコマンドパレットを起動し、出力。

png, svg, eps, pdf, vdx, xmi, scxml, html で出力可能。
シーケンス図も書けます。

https://qiita.com/takehanKosuke/items/efa29f8bfb9a6b74e901

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/946dcefb-d9b7-7bcc-f259-6d9c0800c62b.png)

#### Qiita記事にも使えるようになったようだ
https://twitter.com/Qiita/status/1391701962047909894?s=19

こんな感じで

```
```plantuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: another authentication Response
```


```plantuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: another authentication Response
```



#### トラブルシュート

https://qiita.com/zonbitamago/items/7946acfb4cbaa139f00a

https://qiita.com/Utsumi_Re/items/4824de73b7202ee8e623

https://qiita.com/koara-local/items/e7a7a7d68a4f99a91ab1


### あるいはTypora

https://qiita.com/snova301/items/037ebb66658b181e659c

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/350cdafb-aefd-6ed2-9ad4-a78cec824266.png)






### その他 flowchart.js, Growi

https://qiita.com/ka215/items/a709665cb34c505ccf1f

https://qiita.com/gakuri/items/93b06fb47eb538d2e447

https://flowchart.js.org/

https://growi.org/ja/


## 2. 自分自身の操作性、描きやすさと、見た目なら

- 多分開発用途で、編集もせいぜい同じツールを使える開発メンバー。
- 設計資料だから開発チーム内でまあまあ便利に使えるのがベスト。

...という点なら、以下。


### こちらもVSCodeで、Draw.io

デフォルトでは `.drawio`, `.dio`, `.drawio.png`, `.drawio.svg` などの拡張子のファイルを開けば、DrawioのUIで開いてくれる。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/bfd9721b-c257-fb89-f170-3799d25d02f3.png)


https://qiita.com/kabik/items/2e017c45db99f6752505

https://qiita.com/riku-shiru/items/5ab7c5aecdfea323ec4e

#### トラブルシュート

https://qiita.com/tfukumori/items/0f2b52088cd39f5c124e


### JavaScript mermaid.js 

https://qiita.com/rana_kualu/items/da394fd33ce019bf0ba7

`npm install mermaid --save-dev`


```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <link rel="stylesheet" href="https://unpkg.com/mermaid/dist/mermaid.min.css">
</head>
<body>
<div class="mermaid">
  sequenceDiagram
    A->>B:起動
    B->>C:依頼
    C->>B:返答
    loop 
      B->>B:処理終了まで
    end
</div>

<script src="https://unpkg.com/mermaid/dist/mermaid.min.js" charset="UTF-8"></script>
<script>
  mermaid.initialize({
    startOnLoad:true
  });
</script>
</body>
</html>
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/4ff7a5bb-ce22-c754-e38c-d3aa27984e43.png)

### あるいは Python Diagram as Code(Diagrams) 

https://qiita.com/daisukeArk/items/e864d1bb0d1fd601fe9f

https://diagrams.mingrammer.com/docs/getting-started/installation


等など。
以上このゾーンは結局お好みかもしれない。


## 3. 短期的に: 俄然手軽に、Onlineでいつでもどこでもなら

- とにかく描いて議論して話を固めたい。まだ初期段階だから色々変わりそう。
- 開発チーム以外も見る、編集するから道具にこだわれない。

...という点なら。


### Google Workspace

- [Google Drawings](https://docs.google.com/drawings/)

意外とシンプルに描けます。

<iframe width="400" height="300" src="https://www.youtube.com/embed/MWHVchoTlik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


- [Google Jamboard](https://edu.google.com/intl/ja/products/jamboard/)

チームでああだこうだ言いながら書いても良いかもしれない。


### yUML

こちらもお気軽におしゃれな絵が描ける。

https://yuml.me/

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/2bd723c2-c2ba-cea1-2ae5-bc6301bb0a46.png)


### ほか色々 Cacoo、Cloudcraft、Hava 

https://qiita.com/uralogical/items/112bbba43fd17d52ef20

- Cacoo https://app.cacoo.com/
- Cloudcraft https://cloudcraft.co/
- Hava https://www.hava.io/


### 結局 Google Sheets や Excel

Google Sheets やExcelという選択肢になる現場もあるとおもう。Good luck。

https://www.google.com/intl/ja_jp/sheets/about/


## 番外

その他、Miscたち。

### 素材

https://qiita.com/halpas/items/82725f1e384dde0cdf8e

https://github.com/awslabs/aws-icons-for-plantuml/blob/main/AWSSymbols.md


### スクリプトを作ってしまうという選択肢

https://qiita.com/suo-takefumi/items/2608dd179e83eb284779

https://github.com/zgw426/Handling_JSON_with_no_web_server_HTML-JavaScript-



## まとめ

- 長期的に少しずつメンテして育てたい
- 短期的にササッと書き捨てたい


以上、選択肢とプラスアルファの順に並べてみました。
参考になればさいわいです。
