## この記事は

3000文字Tipsイベントの参加記事です。

https://qiita.com/official-events/d523df99d6479293ffa7

> テーマは「3000文字Tips - 知ると便利なTipsをみんなへ届けよう」です。今まで記事投稿をしてきた人もしてこなかった人も、知っておくと便利なTipsをこの機会に投稿してみてください。

3000文字！シンプルでいいですね。

> いろいろな知見は持っているけれど、記事などの投稿はしたことがなかった方
記事投稿にハードルを感じていた方

記事、真面目に書こうとするとなかなかハードルありますよね。でもそんなこと無いよという趣旨だと思う。弊社の各位にも早速紹介しました。

> 以下のような記事を期待しています。

> 記事の文字数が3000文字以下
Tips記事

...って。
ちょっとまって、3000文字ってどのくらいやねん！わからん！と思ったので考えました。

## 文字数カウント

### Step.1

F12を開き開発者ツールConsoleを開きます。

### Step.2

以下を貼り付けます。

```js
// let input = document.getElementsByClassName("css-1iu5ybx"); 古くなったので修正 2021.09
let input = document.getElementsByClassName("css-avadu4");
let count = input[0].value.replace(/\n/g, "").length;
console.log(count); 
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/258447c1-4a0f-ee38-4d5f-55fe53547dc5.png)

ここまでで612文字のようです。

### Step.3

以上でも最低限の気もしますが再利用しづらいのでブックマークレットにしてみます。

https://qiita.com/kanaxx/items/63debe502aacd73c3cb8

URL: `chrome://bookmarks/` を開きます。

右上からブックマークを追加します。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/b293f8e5-f971-0e77-f090-5d801ccefe3a.png)

<s>`javascript: alert(document.getElementsByClassName("css-1iu5ybx")[0].value.replace(/\n/g, "").length);` </s> (2021.09 Qiitaの変更に伴い修正)

`javascript: alert(document.getElementsByClassName("css-avadu4")[0].value.replace(/\n/g, "").length);` をURLに登録してみましょう。出来上がったら編集しながら、ブックマークボタンを押下。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/e5a4f9ce-eeef-4f7e-644d-2bf43211922a.png)

ここまでで当記事、1064文字になりました。

## まとめ

https://qiita.com/t12u/items/8c28484100dfd3a6351b

必要な情報を適切な長さでまとめるのが、良い記事を書くコツ（Tips）でもあるようです。
以上参考になればさいわいです。 (1429文字) 

### 後日追記

https://zenn.dev/sosukesuzuki/articles/d21d69a5914a03

豆知識。
