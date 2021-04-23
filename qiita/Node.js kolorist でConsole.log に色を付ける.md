[10 Trending projects on GitHub for web developers - 9th April 2021](https://dev.to/iainfreestone/10-trending-projects-on-github-for-web-developers-9th-april-2021-1968) にて紹介されていたものをお試しした記録。

https://github.com/marvinhagemeister/kolorist

## 導入
`npm install --save-dev kolorist`

## お試し
```kolorist_test.js
import { red, cyan, blue, yellow, white, magenta, green, bgYellow, bgWhite, bold } from 'kolorist';

console.log(red(`Error: カラリストで色付きエラー ${cyan('kolorist_test.js')}.`));

console.log(blue('あお'));

console.log(magenta('マゼンタ'));

console.log(yellow('イエロー'));

console.log(green(bold('グリーン')));

console.log(bgYellow(white('背景イエロー')));

console.log(bgWhite(red('背景白')));



```

`node kolorist_test.mjs` でお試し。



## 出力結果

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/cab3f24d-3858-e31c-d26c-ea84b43601bc.png)


## 余談

本論と全く関係ないが mjs というものは何なのかは以下。

https://blog.jxck.io/entries/2017-08-15/universal-mjs-ecosystem.html
