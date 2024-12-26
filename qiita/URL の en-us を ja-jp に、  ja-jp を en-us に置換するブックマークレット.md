つくりました。


https://qiita.com/e99h2121/items/b33866a517212fb1d7a9

```javascript
javascript:(function() { 
  var url = location.href; 
  var replacedUrl = url.replace(/en-us/gi, 'temp-value'); 
  replacedUrl = replacedUrl.replace(/ja-jp/gi, 'en-us'); 
  replacedUrl = replacedUrl.replace(/temp-value/gi, 'ja-jp'); 
  location.href = replacedUrl; 
})();
```


![la2.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/616cb584-efcc-f572-dce3-574726280d15.gif)


## 参考

https://qiita.com/kanaxx/items/63debe502aacd73c3cb8
