表題のとおりです。とにかく要件を満たすためだけにGoを触らないといけないかもしれない人のために最低限の情報だけ集めた。

https://www.tohoho-web.com/ex/golang.html#about

> Google が開発したプログラミング言語です。「Go言語」や「Golang」と表記されます。
UNIX、B言語(C言語の元)、UTF-8の開発者ケン・トンプソンや、UNIX、Plan 9、UTF-8の開発者ロブ・パイクによって設計されました。
静的型付け、メモリ安全性、ガベージコレクションを備えるコンパイル言語です。
シンプル、高速、メモリ効率が良い、メモリ破壊が無い、並行処理が得意などの特徴を備えています。
メモリ破壊が無く、並行処理を得意とする、進化したC言語という側面があります。
Linux、Mac OS X、Windows、Android、iOS で動作します。


## 入門

### インストール
https://golang.org/doc/install

```
C:\workspaces\go>go version
go version go1.16.4 windows/amd64
```

https://qiita.com/tenntenn/items/0e33a4959250d1a55045

https://qiita.com/tfrcm/items/e2a3d7ce7ab8868e37f7


## 簡単にはじめる

https://golang.org/doc/tutorial/getting-started

チュートリアルにしたがい `go mod init example.com/hello` 

```
C:\workspaces\go>go mod init example.com/hello
go: creating new go.mod: module example.com/hello
go: to add module requirements and sums:
        go mod tidy
```

同じ階層に `hello.go` 作成

```hello.go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

- go.mod
- hello.go

という、ファイルが存在する状態。


## 実行

```
C:\workspaces\go>go run .
Hello, World!
```

## exe化

```
C:\workspaces\go>go build hello.go

C:\workspaces\go>hello
Hello, World!
```

hello.exe として実行できる。


## チートシート

https://qiita.com/jca02266/items/56a4fb7b07b692a6bf34

https://qiita.com/yakimeron/items/937e65b59ee8fd16a824

### 文字列操作

https://qiita.com/tchnkmr/items/b3d0b884db8d7d91fb1b

### ファイル操作

https://qiita.com/knt45/items/557ee65c46a685ea4f59



## その他ちょっとしたもの

https://golang.org/pkg/compress/gzip/

https://zenn.dev/kou_pg_0131/articles/go-gzip-compress-and-decompress

https://qiita.com/nakaryooo/items/2d0befa2c1cf347800c3

```args.go
package main

import (
    "flag"
    "fmt"
)

func main() {
    flag.Parse()
    var name string = flag.Args()[0]
    fmt.Println(name)
}
```

https://qiita.com/yu19991013/items/ae4f6e0ebd59dfb9bc3d


以上。参考になればさいわいです。


## 補足: Go言語、最近どうなの

コミュニティは賑わっていそう。

https://blog.golang.jp/

2021年5月、16位。

https://www.tiobe.com/tiobe-index/

これ以降は、[突然、業務上必要に駆られたひとのための、Go言語入門 - おかわり - Qiita](https://qiita.com/e99h2121/items/cd5a015028d3ad66d032)
