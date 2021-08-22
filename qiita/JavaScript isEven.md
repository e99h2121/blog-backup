isEven というGitHubトレンドに突如現れたライブラリ。

## プロジェクト

https://github.com/samuelmarina/is-even

> This is a 100% serious project,

そのプロジェクト。

中身がこれ

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/958e91cc-cff0-b699-f034-c96fe0466c3f.png)

！？！？！

となる


## 作者

https://twitter.com/SamuelLMiller/status/1427702786532196358?s=20


## マジレス

```js
isEven = (n)=>{
    if (n % 2 == 1)
        return false;
    return true;
}
```

しかし容赦はないコメント

https://github.com/samuelmarina/is-even/issues/155#issuecomment-902681241

> What is %? I don't get it

https://github.com/samuelmarina/is-even/issues/155#issuecomment-902821064

> Yes, please don't put file size over readability. The old code is perfectly readable, while this would introduce some weird percentage arithmetic. It's safer to write out the cases explicitly.

> What I do like in your code is that return true and return false is programmed out explicitly instead of doing some hard-to-read magic like return n % 2 != 1. Maybe you could make a PR that changes:

```js
function isEven(number) {
    if (isEvenInternal(number))
        return true;
    return false;
}

function isEvenInternal(number) {
...
```

## isOdd

https://github.com/samuelmarina/is-odd

is odd もある...。


## これは別物

https://isevenapi.xyz/

```
$ curl https://api.isevenapi.xyz/api/iseven/6/

{
  "iseven": true,
  "ad": "Buy isEvenCoin, the hottest new cryptocurrency!"
}
```


## まとめ

意外とpull request と discussionが勉強になる　かもしれない。

https://github.com/samuelmarina/is-even/pulls

https://github.com/samuelmarina/is-even/discussions/75

### 改善は続く...

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/f768461d-bf2f-a431-c8db-2577fada63f2.png)



色々なことを考える人がいるものだ。以上です。
