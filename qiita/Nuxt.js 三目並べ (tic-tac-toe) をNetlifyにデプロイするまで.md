## 三目並べ (tic-tac-toe) 

[三目並べ - Wikipedia](https://ja.wikipedia.org/wiki/%E4%B8%89%E7%9B%AE%E4%B8%A6%E3%81%B9)
ふと思い立ってNuxt.jsの手習いにゲームでも触りたいなと思った。
この記事のゴール: [practice-nuxt-tic-tac-toe](https://e99h2121-nuxt-tictactoe.netlify.app/)

## 材料

https://github.com/sudoist/practice-nuxt-tic-tac-toe

上記を発見。感謝。

`npm install`
`npm run dev`
`http://localhost:3030/`

途中以下エラーが出た。

```
 ERROR  in ./store/index.js                                                                   friendly-errors 04:19:19

Module Error (from ./node_modules/eslint-loader/dist/cjs.js):                                 friendly-errors 04:19:19

C:\git\practice-nuxt-tic-tac-toe\store\index.js
   1:24  error  Delete `␍`  prettier/prettier
   2:26  error  Delete `␍`  prettier/prettier
   3:1   error  Delete `␍`  prettier/prettier
   4:28  error  Delete `␍`  prettier/prettier
   5:26  error  Delete `␍`  prettier/prettier
   6:13  error  Delete `␍`  prettier/prettier
   7:19  error  Delete `␍`  prettier/prettier
   8:7   error  Delete `␍`  prettier/prettier
   9:17  error  Delete `␍`  prettier/prettier
  10:29  error  Delete `␍`  prettier/prettier
  11:29  error  Delete `␍`  prettier/prettier
```

package.json について `--fix` を付加した。

```package.json
    "lint:js": "eslint --ext .js,.vue --ignore-path .gitignore . --fix",
```

[参考](https://qiita.com/RYO_nami/items/c3c089d72cba4cb96fd2)
> prettier の End of Line のデフォルト値が lf なのに対して、コード内に crlf が含まれているため。

`npm run lint`

なるほど。これで手元の `http://localhost:3030/` にて動作する。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/0193f839-f3ed-86ef-a029-c35beb35c893.png)

## デプロイ

折角なのでnetlifyにデプロイしてみる。
Page Not Found が出現したがリダイレクトの設定を施す。[参考](https://monmon.hatenablog.com/entry/nuxtjs-404-redirection)

## Completed

[practice-nuxt-tic-tac-toe](https://e99h2121-nuxt-tictactoe.netlify.app/)


## 参考

[【エラー解決方法】Delete `␍` eslint(prettier/prettier) - Qiita](https://qiita.com/RYO_nami/items/c3c089d72cba4cb96fd2)
[STRIP](https://strip.koatech.info/articles/nuxt-generate-fallback/)
[Nuxt.js + Netlifyで404 Not Foundをトップページにリダイレクト - モンモンブログ](https://monmon.hatenablog.com/entry/nuxtjs-404-redirection)

本題とずれるが、これも便利そう: [commitlint - Lint commit messages](https://commitlint.js.org/#/)
とほほさん: https://www.tohoho-web.com/ex/vuejs.html

以上です～
