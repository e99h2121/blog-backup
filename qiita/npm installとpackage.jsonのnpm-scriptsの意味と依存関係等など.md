
Node package manager で、なんとなく打っているコマンドのそれぞれの意味を丁寧に追いかけた。以下も参考。

https://qiita.com/hashrock/items/15f4a4961183cfbb2658


## npm install

https://docs.npmjs.com/cli/v7/commands/npm-install

`npm install`, `npm i` と package.json をドキュメントに沿って見る。

## [npmとpackage.json](https://qiita.com/Sekky0905/items/452619651cdd950c2271)

https://docs.npmjs.com/cli/v7/configuring-npm/package-json

> どう使うのか
> npm installとpackage.jsonが存在するディレクトリでコマンドを打てば、package.jsonに記述されている依存パッケージを自動でインストールしてくれる
> npm installをするとnode_modulesというディレクトリがnpm installを実行したディレクトリに作成され、npmを利用してインストールしたパッケージは、この中に格納される


### package.jsonを概念的に理解する

https://qiita.com/righteous/items/e5448cb2e7e11ab7d477#scripts

> scripts は簡単に言えばコマンドのエイリアスであり、任意のコマンド(i.e. コマンドラインのコマンド)に名前をつけることができる。例えば以下のような形である。

```
  "scripts": {
    "start": "node index.js",
    "lint": "eslint"
  },
```
> ここに記載された script はnpm run <name>で実行できる。例えば上のlintはnpm run lintで実行できる。


## npm-scripts

https://docs.npmjs.com/cli/v7/using-npm/scripts

https://dev.classmethod.jp/articles/be-on-the-same-page-by-using-npm-scripts/

```
{
  "scripts": {
    "myFirstScript": "echo done"
  },
}
```
は、例えば `npm run myFirstScript` で実行できるという話。


## package.json を作る

https://docs.npmjs.com/creating-a-package-json-file

`npm init`

で例えば以下対話式でファイルができる。

```
C:\git\js-playground\nodejs\script>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (script) mytest
version: (1.0.0)
description: mytest package json
entry point: (index.js)
test command: test
git repository:
keywords:
author: yamada_n
license: (ISC)
About to write to C:\git\js-playground\nodejs\script\package.json:

{
  "name": "mytest",
  "version": "1.0.0",
  "description": "mytest package json",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "author": "yamada_n",
  "license": "ISC"
}


Is this OK? (yes) yes
```

```package.json
{
  "name": "mytest",
  "version": "1.0.0",
  "description": "mytest package json",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "author": "yamada_n",
  "license": "ISC"
}
```

先程のとおり `scripts` に `myFirstScript` を足してみる。

```package.json
{
  "name": "mytest",
  "version": "1.0.0",
  "description": "mytest package json",
  "main": "index.js",
  "scripts": {
    "test": "test",
    "myFirstScript": "echo done"
  },
  "author": "yamada_n",
  "license": "ISC"
}
```

`npm run myFirstScript` は以下のようになった。

```
C:\git\js-playground\nodejs\script>npm run myFirstScript

> mytest@1.0.0 myFirstScript
> echo done

done
```

## Dependencies 

https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file

で、依存関係が書かれているのがここ。
`npm install typescript` などと打つと

```
C:\git\js-playground\nodejs\script>npm install typescript

added 1 package, and audited 2 packages in 4s

found 0 vulnerabilities
```

```package.json
  "dependencies": {
    "typescript": "^4.3.4"
  }
```

https://qiita.com/eiji-noguchi/items/8c1d3741ac9f2857b230


## package-lock.json

もうひとつ、package-lock.json とは何か。

https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json

https://qiita.com/sugurutakahashi12345/items/1f6bb7a372b8263500e5



## 関連

[npm と yarn と pnpm 比較（2021年4月版） - Qiita](https://qiita.com/e99h2121/items/7e38e592dc45b7c0407d)
[10 npm Commands that every developer must know](https://dev.to/gurshehzadsingh/10-npm-commands-that-every-developer-must-know-4gmn)

これでインストール時のあれやこれやの意味がわかる。
以上参考になればさいわいです。
