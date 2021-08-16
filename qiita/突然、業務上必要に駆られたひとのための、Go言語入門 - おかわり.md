https://qiita.com/e99h2121/items/68ec25a343d81eaae2e3

を書いたものの...


## Go言語入門、おかわり

やりたいことはなんとなくできるようになったが、もう少しGo言語と仲良くなりたくなったので、続き。以下など参考。

https://qiita.com/suin/items/22662f43b6a6e8728798

https://engineering.mercari.com/blog/entry/goforbeginners/


### 改めて

https://xn--go-hh0g6u.com/doc/

Go プログラミング言語はオープンソースプロジェクトで，プログラマの生産性を上げます。

> Go は表現力豊かで，すっきりして簡潔，なおかつ効率的な言語です。 並行メカニズムにより，マルチコアでネットワークにつながれたマシンの最大性能を引き出すプログラムを容易に書くことができます。 革新的な型システムがあり，柔軟でモジュール化されたプログラム構成となります。 Go は素早く機械語にコンパイルされます。 ガベージコレクションの便利さもあり，実行時のリフレクションも可能です。 速く，静的型付け，コンパイル言語でありながら，動的型付け，インタープリタ言語のような感覚でプログラムできます。



### どういう系譜

https://www.levenez.com/lang/

どこだろう...

http://rigaux.org/language-study/diagram.html

ここに居た。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/33d122e8-a0cf-0974-db23-996e0c15f253.png)


### お気軽に試すなら

https://play.golang.org/

### 宣言パターン

https://qiita.com/tfrcm/items/e2a3d7ce7ab8868e37f7#%E5%AE%9A%E7%BE%A9%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3

これだけある

```go
// 宣言した後、値を代入パターン
var msg string
msg = "hello world"

// 宣言と代入を一緒にするパターン

var msg string = "Hello World"

// 宣言と代入を一緒にするパターン (型省略可能)
var msg = "Hello Hello"

// 宣言と代入を一緒にするパターン (var省略)
msg := "Super Hello"

```

### 思想

https://ja.wikipedia.org/wiki/Go_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E)

> 軽量スレッディングのための機能、Pythonのような動的型付け言語のようなプログラミングの容易性、などの特徴もある。
> ブロックの区切りに波括弧を使う記法はC言語他多くと同様である。

設計者たちは、新しい言語として、以下の特徴を持つものを構想していた

> JavaやC++のように、静的に型付けされ、巨大なシステムでもスケールする
> RubyやPythonなどの動的な言語のように生産性（英語版）が高く、リーダブルであり、過度なボイラープレートが必要ない[22]
> IDEが必須ではない。ただし、十分にサポートする
> ネットワークおよびマルチプロセッシングをサポートする


### deferってなんだ

https://tour.golang.org/flowcontrol/12

https://qiita.com/Ishidall/items/8dd663de5755a15e84f2

### panicってなんだ

https://golang.org/doc/effective_go#panic

https://qiita.com/nayuneko/items/9534858156dfd50b43fb


### プログラムを終了するときのお作法

https://budougumi0617.github.io/2021/06/30/which_termination_method_should_choose_on_go/

> https://golang.org/pkg/os/#Exit
https://golang.org/pkg/builtin/#panic
https://golang.org/pkg/runtime/#Goexit
https://sharpknock.com/posts/programming/golang-exit.html

### GoのGC

https://zenn.dev/koron/articles/b96cccfa82c0c1


### 絶妙な顔つきのこいつ何

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/aaa7f81a-84d2-ba53-b87d-83e666985bc9.png)

https://blog.golang.org/gopher

Gopher というらしい。

https://www.techscore.com/blog/2016/12/02/love-gopher/

愛でよう。以上
合わせて参考になればさいわいです。

