React Kawaii という React コンポーネントのお試し。
[10 Trending projects on GitHub for web developers - 23rd April 2021](https://dev.to/iainfreestone/10-trending-projects-on-github-for-web-developers-23rd-april-2021-4g02) で紹介されていたもの。

![image](https://raw.githubusercontent.com/miukimiu/react-kawaii/master/docs/images/react-kawaii-example.gif)

## React Kawaii

https://react-kawaii.vercel.app/

https://github.com/miukimiu/react-kawaii

## 使い方

以下で。

`npm install --save react-native-svg`
`npm install --save react-kawaii`

かわいいのは題名のとおりさておいて、React ってこういう感じなのかあ というのが分かるところが面白かったかもしれない。

https://github.com/e99h2121/next-netlify-starter/blob/main/pages/index.js#L28

書いたのこれだけ。

```js
import { Planet } from 'react-kawaii'
import { Cat } from 'react-kawaii'
import { Ghost } from 'react-kawaii'

//中略

<Planet size={90} mood="blissful" color="#FDA7DC" />
<Planet size={90} mood="lovestruck" color="#FDA7DC" />
<Planet size={90} mood="blissful" color="#FDA7DC" />
<Cat size={110} mood="excited" color="#596881" />
<Cat size={110} mood="happy" color="#596881" />
<Cat size={110} mood="excited" color="#596881" />
<Ghost size={100} mood="excited" color="#83D1FB" />
<Ghost size={100} mood="happy" color="#83D1FB" />
<Ghost size={100} mood="ko" color="#83D1FB" />

```

## こうなる

https://e99h2121.netlify.app/

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/ba7a659a-72c1-f45c-33ee-878c7dbb4a73.png)

https://react-kawaii.vercel.app/#/Components?id=cat

## 追記: Supercons も

```
# yarn add supercons
npm i supercons
```

https://github.com/lachlanjc/supercons

https://supercons.vercel.app/

```js
import React from 'react'
import Icon from 'supercons'

export default () => (
  <div style={{ color: 'magenta' }}>
    <Icon glyph="like" size={128} />
    <Icon glyph="cloud" size={32} />
  </div>
)
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/1dcc8e9a-0e91-6da9-f428-7e0485af5b0a.png)


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/98843a98-630d-9b50-201d-99403157e780.png)


## React メモ

https://qiita.com/mikan3rd/items/b9ac6125b1f14175677e

https://qiita.com/naruto/items/fdb61bc743395f8d8faf

以上お楽しみいただければさいわいです。
