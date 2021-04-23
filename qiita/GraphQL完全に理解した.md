SQLのノリでGraphQLね～、等と軽く理解しておきたいところだがそのためにはRESTだマイクロサービスだサーバーレスだと必要な周辺知識と用語理解が多すぎる（気がする）GraphQL。以下記事を読んで手を動かして、「完全に理解した」という記録です。

## まず入門

以下を読む。

https://qiita.com/bananaumai/items/3eb77a67102f53e8a1ad

https://zenn.dev/saboyutaka/articles/07f1351a6b0049

> GraphQLが持ち込むパラダイムシフト
一言でいうなら、
> APIから特定のユースケース・コンテキストを排除することでクライアント・サーバーサイド双方の柔軟性を向上させた
> APIが特定のユースケース・コンテキストを持たない事で
> - クライアントは利用出来る情報を最大限利用して柔軟なUIを構築し、ユーザーに最大の価値を届ける事が出来る
> - サーバーサイドはバックエンド都合でドメインロジックを構築出来る

> 逆に言うとGraphQLを使うとRESTはコンテキストフルなAPI(提供する前にレスポンス表現を固定する必要がある)で、それがクライアントのUI表現をいかに固定化させてきたか、バックエンドのアーキテクチャを固定化させてきたかに気づくことになる



## つまりこんな良いことがある

以下を読む。

https://qiita.com/saboyutaka/items/8a75602a3a7b52af1a69

https://qiita.com/saboyutaka/items/171f7382cdf75b67d076

> またGraphQLを一度も利用したことがない方は、https://github.com/APIs-guru/graphql-apis の中から2,3つ利用して見るとどんなものかざっくり把握出来るかと思います。(個人的にはポケモン, スターウォーズ、Spotifyあたりが好きです。) GraphQLのAPIを使ってみるとAPIの裏側がどう実装されているのか全く気にせず使えるのがわかると思います。

## 概念図はこれ

[apollo-server](https://www.apollographql.com/docs/apollo-server/)　より
![image](https://www.apollographql.com/docs/apollo-server/ee7fbac9c0ca5b1dd6aef886bb695e63/index-diagram.svg)

お勧めの通り

https://github.com/APIs-guru/graphql-apis

を試してみたくなるが、以下チュートリアルがとにかく簡単なのでやってみた。

https://www.howtographql.com/graphql-js/1-getting-started/

https://qiita.com/jintz/items/4ddc6bf4f95238eff5e9

そう。爆速で環境が作れるのです。

## 手順

`npm install --save graphql`

```
mkdir src
touch src/index.js
```

`npm install apollo-server`

```index.js
const { ApolloServer } = require('apollo-server');

// 1
const typeDefs = `
  type Query {
    info: String!
  }
`

// 2
const resolvers = {
  Query: {
    info: () => `API でありますまいか`
  }
}

// 3
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
``` 

わかりやすいように日本語を入れています。
`node src/index.js`　で起動する。
http://localhost:4000/ に以下を投げてみる。

```
query {
  info
}
```

結果が取れただろうか。これがgraphQLことはじめ。


## 実用例

https://github.com/konstantinmuenster/graphql-weather-api

https://graphql-weather-api.herokuapp.com/ で以下クエリが投げられる。

```graphql

# Write your query or mutation here
query {
  getCityByName(name: "Tokyo") {
    id
    name
    country
    coord {
      lon
      lat
    }
    weather {
      summary {
        title
        description
        icon
      }
      temperature {
        actual
        feelsLike
        min
        max
      }
      wind {
        speed
        deg
      }
      clouds {
        all
        visibility
        humidity
      }
      timestamp
    }
  }
}
```

### 結果

東京はMistのようだ（2021/4/14）。

```
      "weather": {
        "summary": {
          "title": "Mist",
          "description": "mist",
          "icon": "50d"
        },
```


## まとめ

試すのが入門には一番ですね。以上、引用した記事を読めば完全に理解できる、というおんぶにだっこなメモ。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/1092d4df-3c28-dbf7-e3d1-89134b843145.png)

### 追記メモ

https://uncle-javascript.com/graph-ql-beginning

https://speakerdeck.com/shinnoki/zu-zhi-zhan-lue-to-graphql-hasura

https://speakerdeck.com/qsona/architecture-practices-with-graphql


参考になればさいわいです。
