## 今日から4月

新年度ですね。新しいことが始まる日はわくわくします。
私はプログラマー（というか社会人）に必要な力はたった1つだと思います。
この良き日に乗じて、語るに値するテーマを見つけたのでその紹介です。

https://github.com/wesbos/aprilFools.css

>Put these CSS definitions into your co-workers css overriding file. They will be applied to every website they visit. They are commented out by default, so make sure to uncomment your favourite ones!

>これらのCSS定義を、css overridingファイルに入れてください。これらのCSS定義は、訪れるすべてのウェブサイトに適用されます。デフォルトではコメントアウトされていますので、お気に入りのものはコメントアウトを解除しておいてください。

私は自分のPCに入れるのは恐れ多かったので、ひとまず控えめに自分のお庭に装着しました。
こちら: https://e99h2121.github.io/

```要点抜粋.css
/*
  Turn every website upside down
*/
body {
  transform: rotate(180deg);
}

/*
  blur every website for a split second every 30 seconds
*/
body {
  animation: blur 30s infinite;
}

/*
  Spin every Website
*/ 
body {
  animation: spin 5s linear infinite;
}

/*
  Flip all images upside down
*/
img {
  transform: rotate(180deg);
}

/*
  COMIC SANS EVERYTHING
*/

body, p, body p, body div p {
  font-family: 'Comic Sans MS', cursive !important;
}

/*
  Spin all images
*/ 
img {
  animation: spin 1s linear infinite;
}
``` 

## もうお気づきでしょう

以下が仕上がるのです。
![page2.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/ddeea9e9-ee81-525a-bd09-194034ad49cd.gif)

そうです。こういう ~~イタズラ~~ アイディア を思いついて周囲をすこしだけ、たのしくする。
困難を、技術と、時にユーモアとで解決できる力を持つ者、それがプログラマーだと思います。あ、そして今日は新年度最初の日ではありますが、ご存知エイプリルフールです...

こういう拡張を使うと簡単に楽しめそうです。

https://chrome.google.com/webstore/detail/user-css/okpjlejfhacmgjkmknjhadmkdbcldfcb/related?hl=en

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/f6aed8e6-f319-7427-a63a-6c591cdf1a25.png)


## まとめ

プログラマーに必要なもの。息抜きです！
新生活を迎えるすべての方ほんとうに、おめでとうございます。
怒られない程度に息抜きしながら、楽しんで、一緒に頑張りましょう。

このCSS、社内のどっかに適用したら絶対怒られるでしょうね（大事な注意）。

以上いまからでも間に合うエイプリルフール材料でした。
お楽しみいただければさいわいです。
