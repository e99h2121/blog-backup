表題のとおりの小品です。

## ソース
```html
<!DOCTYPE html>
<html lang="ja">
<head>
</head>
<body>
<div class="container">
  <input type="button" value="Format" onclick="format()" />
  <textarea rows="50" cols="100" id="sql_text"></textarea>
</div>

<script type="text/javascript">

function formatSql(text){
  // 改行するキーワード
  var array=["AND","FROM","FULL","GROUP","INNER","LEFT","ON","ORDER","RIGHT","SET","WHERE","VALUES"];

  // キーワード共通処理
  for(i=0; i<array.length; i++){
    var keyword = array[i];
    var after = " " + keyword + " ";

    // キーワード前後の半角スペースを1つだけにする
    // 例: キーワード"   AND  "は" AND "になる
    text = text.replace(new RegExp(" +" + keyword + " +", "gi"), after);

    // 改行
    var afterRn = "\r\n" + after;
    text = text.replace(new RegExp(after, "gi"), afterRn);
  }

  // SELECT：後ろ改行
  text = text.replace(/SELECT/gi, "SELECT\r\n");

  // カンマ：前後のスペース削除
  text = text.replace(/( +,|, +| +, +)/gi, ",");
  // カンマ：改行（前カンマ）
  text = text.replace(/,/g, "\r\n , ");

  // かっこ：改行
  text = text.replace(/\(/g, "(\r\n");
  text = text.replace(/\)/g, "\r\n)\r\n");

  return text;
}

function format() {
  const sql = document.getElementById("sql_text").value;
  document.getElementById("sql_text").value = formatSql(sql);
}

</script>
</body>
</html>
```

![sql.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d3b4ca0d-f6f4-cb17-facc-fb2470291518.gif)

## 参考

以下を少々改善したもの。

https://qiita.com/atmospheri/items/d2249abf7f77f294e2dc

また使いながら改善するかも。
以上です～
