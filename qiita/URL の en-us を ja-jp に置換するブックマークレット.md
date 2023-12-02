### プロンプト

> JavaScriptでブックマークレットを作りたいです。
${location.href} から URL の en-us という文字を ja-jp に置換したいです。大文字小文字どちらにたいしても置換できるようにしてください。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/46ec65f3-55f5-a87a-a79f-958b1e27fc38.png)

```JavaScript
javascript:(function() { 
  var url = location.href; 
  var replacedUrl = url.replace(/en-us/gi, 'ja-jp'); 
  location.href = replacedUrl; 
})();
```

## 完成
![la2.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/e85e0d5d-8099-d379-1c28-2fcdb85fa604.gif)

便利。
