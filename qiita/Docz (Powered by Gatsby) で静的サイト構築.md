[🚀10 Trending projects on GitHub for web developers - 21st May 2021 - DEV Community 👩‍💻👨‍💻](https://dev.to/iainfreestone/10-trending-projects-on-github-for-web-developers-21st-may-2021-2c6h)
で紹介されていたDoczというもの。

## Docz


> Doczは、あなたのコードのための美しいインタラクティブなドキュメントを簡単に書いて公開することができます。コードを紹介するMDXファイルを作成すると、Doczがそれをライブローディング可能な本番用サイトに変換します。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/4db27c8d-9cc1-621d-c40f-e40eecd3e6d8.png)

### 公式
https://www.docz.site/docs/getting-started

- 特長
    - Powered by Gatsby
    - Zero config
    - Easy to customize
    - Based on MDX
    - Fully pluggable
    - TypeScript support

どうやらまた新たな静的サイトをジェネレートな何かか...と思ったが、既にVersion 2ではあり、過去記事発見。

https://qiita.com/ozaki25/items/fdf1e0b52ff1fee26514

ただ多少情報更新もありそうなので以下試した流れをメモる。


### お試し

`npx create-docz-app my-docz-app`
で、以下になります。

```md
Success! Created my-docz-app at C:\workspaces\nodejs\docz\my-docz-app
Inside that directory, you can run several commands:

  npm run dev
    Starts docz in dev mode.

  npm run build
    Builds the docz app for production.

We suggest that you begin by typing:

  cd my-docz-app
  npm run dev
```

`npm run dev` で `http://localhost:3000/` に立ち上がる。

> Note that you don't need to follow any file architecture or convention. You can just create your .mdx files and put them anywhere in your project.
> DeepL訳: なお、ファイル構成や規約に従う必要はありません。.mdxファイルを作成して、プロジェクトのどこにでも置くことができます。

本当？以下ファイルを適当においてみた。


```mdx
---
name: Hello world
route: /doc/
---

# こんにちは

Hello, I'm a mdx file!
こんにちは。MDXふぁいるです。


```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/1498f0ef-4cc1-81c6-b55e-686e3a7abc73.png)

無事できあがった。



### netlify にデプロイ

https://www.docz.site/docs/deploying-your-docs

https://e99h2121-docz.netlify.app/


### MDX とは

https://zenn.dev/nbr41to/articles/e8d795b316c41d15dcef

https://mdxjs.com/


### Gatsbyと静的サイトについては

https://qiita.com/umamichi/items/9bd08a21fddc71588efc




## まとめ

ともかく簡単だったのでなにかに使えたらなあというメモでした。



### 他記事、動画

https://blog.tagbangers.co.jp/ja/2019/09/29/getting-started-docz


<iframe width="517" height="270" src="https://www.youtube.com/embed/VCvum6COleQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>





参考になればさいわいです。
