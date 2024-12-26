今年を振り返る「なんかかく」アドベントカレンダー 22 日目です。もう日付は残り少ないので Logic Apps の話をします。Logic Apps にも、私も大好き Spotify のコネクタがあります。

## Spotify for Developers

お仕事で使うことはほぼ無いのですが、こちらが API。

https://developer.spotify.com/

## Spotify コネクタ

コネクタがこれ。

https://learn.microsoft.com/ja-jp/connectors/spotifyip/

ちょっと楽しそうなアクションが使えそうです。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/7bf7c22f-6c96-5a67-c164-d6b39ab93a3c.png)

と言うことでいつものアカウントでサインインしました。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/59775d48-b733-6913-aa2e-9bfb1de229ff.png)

簡単に接続できました。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/5c1ca7c5-2b73-69da-195e-fc034111eaed.png)

なんと、いとも簡単に実行できました。今年の私のお気に入りを振り返ることができます。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/2362b157-dd79-4d5e-be33-9f212158caa9.png)

私のトップ アーティストを配列化した図:

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/75360a1a-8dc8-f39c-d824-3c05cb4b6740.png)


### しかし

何故でしょう。何故なんでしょうね。一回うまく行ったのに怪しい雲行きです。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/71f1f3af-f00e-6f49-dbdc-a6a6289e1640.png)

403 出るよね。おーい山田君、これは報告だ…

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/daddaf02-7cae-a882-a63c-8f96b3f85741.png)



## 代替案として API

このままこの記事を終わらせては誰も納得しないので、代替案として API を HTTP アクションで叩く策を探ることにしました。

### API にいくつか種類がある

Client ID と Secret を取得することは簡単です。

https://developer.spotify.com/documentation/web-api/tutorials/getting-started

しかしこれだけでは肝心の User データにアクセスすることはできません。Spotify のドキュメントをよく読もう。

https://community.spotify.com/t5/Spotify-for-Developers/401-error-when-accessing-user-liked-saved-songs/td-p/5417717

### Authorization Flow

https://developer.spotify.com/documentation/web-api/concepts/authorization

ユーザーのリソースにアクセスするにはこの辺を使わねばならないということなんですね。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/53154e6b-04f7-e98b-b62e-7dd2c6d36b39.png)



### Authorization Code flow 

https://developer.spotify.com/documentation/web-api/tutorials/code-flow

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/18d3f481-56d7-d8c9-3c1b-6fdca5cf7aef.png)

端的にはこの VSCode の拡張で簡単に立てられるサーバー Live Server を用い 127.0.0.1:5500 を立てました。Redirect URL への登録を忘れずに。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d5ff9ac7-b34d-ec31-3af5-7b7bae7d9883.png)

その上で以下 URL を GET すると同意を促す画面へリダイレクトしてくれます。

`https://accounts.spotify.com/authorize?response_type=token&redirect_uri=http://127.0.0.1:5500&client_id=<clientid>` 

`https://accounts.spotify.com/authorize?response_type=token&redirect_uri=http://127.0.0.1:5500&client_id=<clientid>&scope=user-library-read&show_dialog=true` 

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/89217d24-2b1a-964f-23fa-52912b0c0c03.png)

上に同意することでようやく、ユーザー情報にアクセスできる Access Token ゲットです。
下の URL がアクセス トークン。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/0de69358-61df-afe3-8d83-14f6cedf38b5.png)





## HTTP コネクタで仕切り直し

ということで、Logic Apps でも HTTP コネクタを用いることで仕切り直ししましょう。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/977f385e-c481-cf98-26e2-2e0a7f133ea9.png)

成功。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/e6dac6a8-1ef2-6bbe-c947-cb72fba8a4ac.png)



## まとめ

そんなこんなで、Logic Apps や Power Automate のコネクタを眺めていると遊べるが、プレビューのコネクタはたまにこういうご愛敬もあるので、優しい気持ちでプロダクトを育てていきたいねという話でした。

以上です～！
