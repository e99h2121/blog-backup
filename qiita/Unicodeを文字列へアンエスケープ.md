![test.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/798717bf-1937-6861-c8b0-2ca915ca699f.gif)


## ソース

### JavaScript

```js
var unicodeUnescape = function(str) {
    var result = '', strs = str.match(/\\u.{4}/ig);
    if (!strs) return '';
    for (var i = 0, len = strs.length; i < len; i++) {
        result += String.fromCharCode(strs[i].replace('\\u', '0x'));
    }
    return result;
};

var result = unicodeUnescape('\\u3042\\u3044\\u3046\\u3048\\u304a');
console.log(result); //あいうえお
```

### HTML

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">

<script>

function unEscape() {

    var unicodeUnescape = function(utf8String) {
        var result = '', strs = utf8String.match(/\\u.{4}/ig);
        if (!strs) return '';
        for (var i = 0, len = strs.length; i < len; i++) {
            result += String.fromCharCode(strs[i].replace('\\u', '0x'));
        }
        return result;
    };

    var utf8String = "";
    utf8String = document.getElementById('input').value;

    var result = unicodeUnescape(utf8String);
    document.getElementById('converterd').value = result;
}

    </script>
</head>

<body>
    <p><label for="input">Unicode（¥uxxx形式）を入力:</label><p><textarea cols="120" rows="10" id="input"></textarea></p>
    <p><input type="button" value="アンエスケープ" onclick="unEscape();"></p>
    <p><textarea cols="120" rows="10" id="converterd">アンエスケープ後文字列</textarea></p>
</body>
</html>
````

## 参考

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/0efd0abd-5a49-4769-7616-8cd2a4fc91f0.png)


https://dencode.com/ja/string/unicode-escape

https://qiita.com/weal/items/3b3ddfb8157047119554

以上、ダンプファイルやらに含まれるUnicodeを読みたいと思ったときのもの。簡単ながら以上です。
