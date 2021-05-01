https://qiita.com/e99h2121/items/79d6d4db9182c8c9540d

に続き、自分の手習いのようなところ。大した話ではございませんが、手を動かしてArrayについてまとめてみたかった。以下を参考にしています。

https://dev.to/ibrahima92/15-must-know-javascript-array-methods-in-2020-1kd8

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array

https://qiita.com/may88seiji/items/4a49c7c78b55d75d693b


## some() - 指定したテスト関数が配列中の少なくとも1個の要素を満たすか

パラメータとして渡された関数で配列をテストする。少なくとも1つの要素がテストにマッチした場合はtrueを、その逆の場合はfalseを返す。

```js
const myAwesomeArray = ["a", "b", "c", "d", "e"]

myAwesomeArray.some(test => test === "d")
```

結果:

> true

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/some


## reduce() - 関数を適用
アキュムレーターと配列内のすべての要素に対して (左から右の順で) 関数を適用し、単一の値を返す。

```js
const myArray = [1, 2, 3, 4, 5]
myArray.reduce((total, value) => total * value)

```

`1 * 2 * 3 * 4 * 5` ということ。
結果:

> 120

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


## every() - 指定したテスト関数が配列中の全ての要素を満たすか

パラメータとして渡された関数で配列をテストする。配列の各要素がテストにマッチした場合はtrueを返し、その反対の場合はfalseを返す。

```js
const myArray = ["a", "b", "c", "d", "e"]
myArray.every(test => test === "d")

const myArray2 = ["a", "a", "a", "a", "a"]
myArray2.every(test => test === "a")
```

結果:

> false
> true

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/every


## map() - 新しい配列を生成

パラメータとして関数を受け取り、配列の各要素を含む新しい配列を返す。これは常に同じ量のアイテムを返す。

```js
const myArray = [5, 4, 3, 2, 1]
myArray.map(x => x * x)

```

結果:

> [25, 16, 9, 4, 1]

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map


## flat() - すべてのサブ配列を指定した深さで再帰的に結合

SubArrayに保持されている要素を含む新しいArrayを作成し、それを新しいArrayにフラットにします。このメソッドは1階層分の深さにしか進まないことに注意。

```js
const myArray = [[1, 2], [3, 4], 5]
myArray.flat()
```

結果:

>[1, 2, 3, 4, 5]

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat


## filter() - 与えられた関数によって実装されたテストに合格したすべての配列からなる新しい配列を生成

パラメータとして関数を受け取り、引数として渡されたフィルタリング関数がtrueを返した配列のすべての要素を含む新しい配列を返す。

```js
const myArray = [
  { id: 1, name: "サザエ" },
  { id: 2, name: "カツオ" },
  { id: 3, name: "マスオ" },
  { id: 4, name: "マスオ" },
]

myArray.filter(element => element.name === "マスオ")
```

> 0: {id: 3, name: "マスオ"}
> 1: {id: 4, name: "マスオ"}

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


## forEach() - 与えられた関数を、配列の各要素に対して一度ずつ実行

配列中のそれぞれの要素について関数を呼び出す。

```js
const myArray = [
  { id: 1, name: "サザエ" },
  { id: 2, name: "カツオ" },
  { id: 3, name: "マスオ" }
]

myArray.forEach(element => console.log(element.name))
```

結果:

> サザエ
> カツオ
> マスオ

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach


## findIndex() - 関数を満たす配列内のインデックスを返す

パラメータとして関数を受け取り、配列に適用する。見つかった要素のうち、引数として渡されたテスト関数を満たすもののインデックスを返し、満たしたものがない場合は-1を返す。

```js
const myArray = [
  { id: 1, name: "サザエ" },
  { id: 2, name: "カツオ" },
  { id: 3, name: "マスオ" }
]

myArray.findIndex(element => element.id === 3)
myArray.findIndex(element => element.id === 7)
```

結果:
> 2
> -1

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex


## find() - 提供されたテスト関数を満たす配列内の最初の要素の値 
引数として関数を受け取り、それを配列に適用する。配列で見つかった要素のうち、テスト関数を満たすものの値を返す。それ以外の場合は、undefined を返す。

```js
const myArray = [
  { id: 1, name: "サザエ" },
  { id: 2, name: "カツオ" },
  { id: 3, name: "マスオ" }
]

myArray.find(element => element.id === 3)
myArray.find(element => element.id === 7)
```

結果:

> {id: 3, name: "マスオ"}
> undefined

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find


## sort() - 配列の要素をソートし返す

パラメータとして関数を受け取り、配列の要素をソートし、それを返す。

```js
const myArray = [5, 4, 3, 2, 1]

myArray.sort((a, b) => a - b)
myArray.sort((a, b) => b - a)
```

結果:

> [1, 2, 3, 4, 5]
> [5, 4, 3, 2, 1]

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


## concat() - 2つ以上の配列、値を連結する

2つ以上の配列/値を連結してマージする。要素を含む新しい配列を返す。


```js
const myArray = [1, 2, 3, 4, 5]
const myArray2 = [10, 20, 30, 40, 50]
myArray.concat(myArray2)
```

結果:

>[1, 2, 3, 4, 5, 10, 20, 30, 40, 50]

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat


## fill() - 開始から終了までのすべての要素を、静的な値に変更

開始Index（デフォルト0）から終了Index（デフォルトarray.length）まで、与えられた配列のすべての要素を同じ値で埋める。

```js
const myArray = [1, 2, 3, 4, 5]

// 引数 (0) は値
// 引数 (1) は始まりのindex
// T引数 (3) は終わりのindex
myArray.fill(0, 1, 3)
```

結果:

> [1, 0, 0, 4, 5]

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/fill


## includes() - 要素を含んでいるか

配列に特定の要素が含まれている場合はtrueを、含まれていない場合はfalseを返す。

```js
const myArray = [1, 2, 3, 4, 5]

myArray.includes(3)
myArray.includes(8)
```

結果:

> true
> false

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


## reverse() - 配列を反転
配列を反転させる。最初の要素が最後の要素になり、最後の要素が最初の要素になる。

```js
const myArray = ["e", "d", "c", "b", "a"]
myArray.reverse()
```

結果:

> ['a', 'b', 'c', 'd', 'e']

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse


## flatMap() - flat() と map() 

配列の各要素に関数を適用し、その結果を配列にフラット化する。flat()とmap()を1つの関数にまとめたもの。

```js
const myArray = [[1], [2], [3], [4], [5]]
myArray.flatMap(arr => arr * 10)

// With .flat() and .map()
myArray.flat().map(arr => arr * 10)
```

結果:

> [10, 20, 30, 40, 50]
> [10, 20, 30, 40, 50]

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flatmap

## まとめ（感想）

やはりアロー関数は混乱する。またしっかり理解したい。それだけではなく新たな記事を発見してしまった。

https://brayanarrieta.hashnode.dev/new-javascript-features-ecmascript-2021-with-examples

以上。お楽しみいただけたらさいわいです。
