大した話ではございませんが、[15 Very Important Javascript String Methods Every Developer Should Know](https://dev.to/satishnaikawadi2001/15-very-important-javascript-string-methods-every-developer-should-know-1apb) でまとめられていた文字列操作と、プラスいくつかを日本語文字列でやってみましたよという記録。

端的には、以下参考。
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String


```js
var stringOne = "大事な大事なJavaScript文字列操作を勉強しよう。"
var stringTwo = "いくつかサンプルもあるよ。"
```
を準備して、始めます。


## charAt() - 指定位置から文字を返す

```js
var index = 4;
console.log(`stringOneのインデックス ${index} の文字は ${stringOne.charAt(index)}`);
index = 10;
console.log(`stringOneのインデックス ${index} の文字は ${stringOne.charAt(index)}`);
```
文字列内の指定された位置から文字を返す。インデックスが整数に変換できない場合やインデックスが指定されない場合、デフォルトは0で、文字列の最初の文字を返す。

結果:
>stringOneのインデックス 4 の文字は 事
>stringOneのインデックス 10 の文字は S

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charAt


## concat() - 文字列連結

```js
console.log(stringOne.concat(stringTwo));
console.log(stringOne.concat('さらに', stringTwo));
```

呼び出した文字列に文字列の引数を連結して、新しい文字列を返す。引数が文字列型でない場合は、連結する前に文字列値に変換される。

>大事な大事なJavaScript文字列操作を勉強しよう。いくつかサンプルもあるよ。
>大事な大事なJavaScript文字列操作を勉強しよう。さらにいくつかサンプルもあるよ。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/concat

注意：
> concat() メソッドの代わりに 代入演算子 (+ または +=) を使用する事を強くお勧めします。
> この性能試験によれば、代入演算子のほうが数倍高速です。

とあるので、使用には留意したほうがよい。

## endsWith() - 文字列が指定された文字列で終わるか

```js
console.log(stringOne.endsWith('しよう。'));
console.log(stringOne.endsWith('しよう'));
console.log(stringOne.endsWith('しよう', 27));
```

文字列が指定された文字列で終わるかどうかを判断し、trueまたはfalseを返す。大文字と小文字を区別する。2 番目の引数は文字列の長さ。デフォルトは string.length。

>true
>false
>true

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

## includes() - 文字列を含むか

```js
console.log(stringOne.includes("JavaScript"));
console.log(stringOne.includes("JavaScript", 6)); //6から探す
console.log(stringOne.includes("javascript")); //大文字小文字を区別
```
文字列が別の文字列の中で見つかるかどうかを、大文字小文字を区別して検索し、trueまたはfalseを返す。2 番目の引数は検索を開始する文字列内の位置。(デフォルトは0。)

>true
>true
>false

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/includes

## indexOf() - インデックス

```js
console.log(stringOne.indexOf('a'));
console.log(stringOne.indexOf('a', 15)); //インデックス 15 から探す
```
指定された値が最初に出現する、呼び出し元の String オブジェクト内のインデックスを返す。値が見つからない場合は -1 を返す。2番目の引数は検索を開始するインデックス。デフォルトは0。

>7
>-1

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf


## lastIndexOf() - 指定文字列が最後に現れる位置

```js
console.log(stringOne.lastIndexOf('a'));
```

indexOf()メソッドと同様だが、違いは、最初に出現するのではなく、与えられた文字列の最後に出現するものを検索する点。検索値の最後の出現箇所のインデックスを返し、見つからない場合は-1を返す。

>9

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

## padStart() - 指定文字列で始めから埋める

```js
console.log(stringOne.padStart(100, '聞いて'));
```

>聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて聞いて大事な大事なJavaScript文字列操作を勉強しよう


https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

## padEnd() - 指定文字列で終わりまで埋める

```js
console.log(stringOne.padEnd(100, '。'));
```

> 大事な大事なJavaScript文字列操作を勉強しよう。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。


https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd


## repeat() - 繰り返す

```js
console.log(stringOne.repeat(2) +`大事なことなので2回言いました。`);
```

> 大事な大事なJavaScript文字列操作を勉強しよう。大事な大事なJavaScript文字列操作を勉強しよう。大事なことなので2回言いました。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/repeat


## replace() - 置換

```js
console.log(stringOne.replace('操作', 'メソッド'));
console.log(stringOne.replace('大事な大事な', '重要な'));
const regex = /JavaScript/i;
console.log(stringOne.replace(regex, 'JS'));
```

pattern を置換した新しい文字列を返す。pattern は文字列または正規表現で、置換後文字列は文字列またはマッチするたびに呼び出される関数。patternが文字列の場合、最初に出現する文字列のみが置き換えられる。

>大事な大事なJavaScript文字列メソッドを勉強しよう。
>重要なJavaScript文字列操作を勉強しよう。
>大事な大事なJS文字列操作を勉強しよう。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace


### replaceAll() - 全置換

こちらは全てを置換する。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll


## startsWith() - 文字列から始まるか

```js
console.log(stringOne.startsWith("大事な"));
console.log(stringOne.startsWith("大事な", 3)); // インデックス 3 から探す
console.log(stringOne.startsWith("大事な", 5)); // インデックス 5 から探す
```
文字列が指定された文字列の文字で始まるかどうかを判断し true または false を返す。2番目の引数は検索を開始する位置。デフォルトは0。

>true
>true
>false

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

## slice() - 文字列の一部分を抽出する

```js
console.log(`stringOne の長さは ${stringOne.length}`);
console.log(stringOne.slice(6, 21)); // インデックス 6 から 21
console.log(stringOne.slice(6, -9)); // インデックス 6 から 28 - 9 = 19 
console.log(stringOne.slice(6)); // インデックス 6 から全体
```

元の文字列を変更することなく、文字列の一部分を抽出して新しい文字列として返す。最初の引数は抽出を開始するインデックス。2番目の引数は抽出を終了するインデックス。endIndexとbeginIndexのいずれかまたは両方が負の値である場合、例えば、endIndexが-3の場合は、str.length - 3として扱われる。

>28
>JavaScript文字列操作
>JavaScript文字列
>JavaScript文字列操作を勉強しよう。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/slice


## split() - 分割する

```js
console.log(stringOne.split('を'));
console.log(stringOne.split('JavaScript'));
``` 
文字列を部分文字列の順序付きリストに分割し配列にして返す。

> ["大事な大事なjavascript文字列操作", "勉強しよう。"]
> ["大事な大事な", "文字列操作を勉強しよう。"]

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split


## substr() - 指定位置から文字数分返す

```js
console.log(stringOne.substr(6)); // インデックス 6 から残りぜんぶ
console.log(stringOne.substr(6, 18)); // インデックス 6 から 18 文字
```

文字列の一部を、指定されたインデックスから指定された文字数分だけ返す。

>JavaScript文字列操作を勉強しよう
>JavaScript文字列操作を勉強

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/substr


## trim() - 空白を取り除く

```js
var stringThree = '       空白を 取り除く       ';
console.log(stringThree.trim());
```
空白を削除する。

> 空白を 取り除く

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/trim

### trimStart() - 先頭の空白を取り除く
文字列の先頭にある空白を削除する。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/trimstart

### trimEnd() - 末尾の空白を取り除く
文字列の末尾にある空白を削除する。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/trimend

## match() - 正規表現のマッチング結果を返す

```js
const regex = /[ぁ-ん]/g; // regex for capital characters
console.log(stringOne.match(regex));
```
文字列と正規表現のマッチングの結果を取得する。
>["な", "な", "を", "し", "よ", "う"]

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/match

## toLowerCase() - 小文字にして返す 

```js
var stringThree = 'THIS IS DEMO STRING';
console.log(stringThree.toLowerCase());
```

小文字にして返す。

>this is demo string

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/tolowercase

## toUpperCase() - 大文字にして返す

```js 
console.log(stringThree.toUpperCase());
```
大文字にして返す。

>THIS IS DEMO STRING

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/touppercase


## おまけ

この辺のドキュメントも面白そう

https://tc39.es/ecma262/#sec-for-statement


以上。お楽しみいただけたらさいわいです。

