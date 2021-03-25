## 動機

5年前のQiitaに [ズンドコキヨシ](https://qiita.com/shunsugai@github/items/971a15461de29563bf90)というお題を見つけたが、当時より現在までどうやら誰もDelphiでズンドコしていなかったようなので、ズンドコキヨシした。

参考: [ズンドコキヨシまとめ](https://qiita.com/shunsugai@github/items/971a15461de29563bf90)

## 要件
<blockquote class="twitter-tweet" data-lang="en"><p lang="ja" dir="ltr">Javaの講義、試験が「自作関数を作り記述しなさい」って問題だったから<br>「ズン」「ドコ」のいずれかをランダムで出力し続けて「ズン」「ズン」「ズン」「ズン」「ドコ」の配列が出たら「キ・ヨ・シ！」って出力した後終了って関数作ったら満点で単位貰ってた</p>&mdash; てくも (@kumiromilk) <a href="https://twitter.com/kumiromilk/status/707437861881180160">March 9, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

曲の発売が2004年のようで若い人々にはポカーンかもしれない...
歌詞がこれ: https://www.uta-net.com/song/15131/
書かれていないが「キ・ヨ・シ！」というオーディエンスの合いの手が入る歌である。

お題はつまり平成のFizzBuzz、ズンドコキヨシ版（何それ）ということだ。
[ズンドコキヨシ with JavaScript](https://qiita.com/n4o847/items/432fd0f6e31d7367ad73) はCodegolfまでされていて超クール。

## 実装
Life is short. Write the code. 

### 普通にズンドコ
```zundoko.pas
begin
  zun := 'ズン';
  doko:= 'ドコ';
  zunzunzunzundoko := 'ズンズンズンズンドコ';
  kiyoshi := 'キ・ヨ・シ！';
  sentence := '';

  while true do
  begin
    zunordoko := random(2);
    case zunordoko of
    0:sentence := sentence + zun;
    1:sentence := sentence + doko;
    end;
    if (Pos(zunzunzunzundoko, sentence) > 0) then break;      

  end;
  sentence := sentence + kiyoshi;
  Showmessage(sentence);

end;
```


### Codegolf気味なズンドコ

```zundoko_codegolf.pas
var
  z, d, s:String;
  zd:Integer;
begin
  z:='ズン';d:='ドコ';s:= '';
  while (Pos(z+z+z+z+d, s)=0) do begin
    zd:=random(2);
    case zd of
    0:s:=s+z;
    1:s:=s+d;
    end;
  end;
  s := s + 'キ・ヨ・シ！';Showmessage(s);
end;
```

## 実行結果
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/9dc3b252-5d4e-9f8d-df58-7f913d03751a.png)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/f0ece52f-347b-7b24-fb0f-c84e7b098445.png)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/1ba42497-3bc3-5536-2c6b-bd0a6e342404.png)

それっぽい。


## ズンドコキヨシのせいだよ

2021年の今なので、時代が分かるよう修正した。

```zundoko_dandg.pas
var
  z, d, s:String;
  dandg:String;
  zd:Integer;
begin
  z:='ズン';d:='ドコ';s:= '';
  dandg:='ドルチェ＆ガッバーナーの';
  while (Pos(dandg+z+z+z+z+d, s)=0) do begin //ドルチェ&ガッバーナのズンズンズンズンドコ
    zd:=random(3);
    case zd of
    0:s:=s+z;
    1:s:=s+d;
    2:s:=s+dandg;
    end;
  end;
  s := s + 'キ・ヨ・シ！のせいだよ';Showmessage(s);
end;

```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/f93b2ced-2a61-c67b-cfb4-69555be103f5.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d4c9deff-c740-84dd-045f-ea8ad9ceb299.png)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d65da7cf-b923-794f-ba0b-8da03e15ff97.png)


以上お粗末さまでしたズンドコ。

## 参考

記憶に新しい令和のHelloworld, [Javaで湯婆婆を実装してみる](https://qiita.com/Nemesis/items/c7192a7c510788d2cba2) 
[ヌジョレーボーボー](https://qiita.com/mattn/items/ae764601862b0073071e) 等と並ぶ、平成のFizzbuzz。
名作に出会えた喜び。

### 余談だが

Qiita過去 `ネタ` 徘徊という趣味の考古学が以下で楽しめそうだと気づいた。
https://qiita.com/tags/{タグ名}?page={ページ数} で探せる。
例) [https://qiita.com/tags/ネタ?page=28](https://qiita.com/tags/%E3%83%8D%E3%82%BF?page=28)
、が最古のネタのようだ。もっと探そう。

### 追記

[[Delphi][ネタ]ズンドコキヨシ・コードゴルフ](https://qiita.com/pik/items/9ddb684967a5bec4d970)
[Delphi でズンドコキヨシを書いてみる](https://qiita.com/ht_deko/items/a066ea4be3afee7e8ef5)
当記事後、ズンドコされている方を発見し嬉しかったので追記する。


以上お楽しみいただければさいわいです。
