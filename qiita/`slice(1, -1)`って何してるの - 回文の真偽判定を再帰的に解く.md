**[isPalindrome(): A recursive approach](https://blog.logrocket.com/ispalindrome-a-recursive-approach/)**
**[What Does `slice(1, -1)` Do?](https://dev.to/cerchie/what-does-slice-1-1-do-3ad7), (`slice(1, -1)`って何してるの)**
を元ネタにした日本語によるまとめ。

## 要約
メジャーなプログラミング題材である、「回文の真偽判定」。
[Project Euler in JavaScript](https://sites.google.com/site/projecteulerinjavascript/home/problem-55)
[js 回文の真偽判定](https://qiita.com/may88seiji/items/4f6c28ca6f7cb04652aa)

### 教科書どおり
```js
function isPalindrome (str) {
  let len = 0;

  // remove non-alphanumeric characters and
  // change the string to lowercase
  // and get the length of the string
  str = str.replace(/[^a-z0-9]/i, '').toLowerCase();
  len = str.length;

  // calculate the string midpoint position and
  // loop through the characters up to the midpoint
  // comparing characters in corresponding positions
  // from the start of the string and the end of the string
  for (let i = 0, mid = len >> 1; i < mid; i++) {
    if (str[i] !== str[len - i - 1]) return false;
  }  

  // if execution reaches here, the character comparisons matched
  // and the string (if not empty) must be a palindrome
  return len > 0;
}

``` 

### sliceでこう書ける

```js

function isPalindrome (str) {
  // remove non-alphanumeric characters and
  // change the string to lowercase
  str = str.replace(/[^a-z0-9]/i, '').toLowerCase();

  // and get the length of the string
  const len = str.length;

  if (len <= 1) return true;
  if (str[0] !== str[len - 1]) return false;

  // proper tail call optimized recursion
  return isPalindrome(str.slice(1, -1));
}
```

### 内部再帰関数 `_isPalindrome()`

```js

const isPalindrome = (() => {
  /**
   * This function is returned immediately
   * from the invocation of the outer arrow function
   * and is assigned to the `isPalindrome` identifier.
   */
  return function isPalindrome (str) {
    // remove non-alphanumeric characters and
    // change the string to lowercase
    str = str.replace(/[^a-z0-9]/i, '').toLowerCase();

    // call the recursive _isPalindrome function with string (if not empty)
    // and return the result
    return (str.length > 0) && _isPalindrome(str);
  };

  /**
   * Internal recursive `_isPalindrome()` function
   * optimized for recursion with proper tail call.
   *
   * A single reference to this function is created and stored
   * after the immediate invocation of the outer arrow function,
   * not accessible outside the scope of the outer arrow function,
   * but accessible to `isPalindrome()` via closure.
   */
  function _isPalindrome (str) {
    const len = str.length;

    if (len <= 1) return true;
    if (str[0] !== str[len - 1]) return false;

    // proper tail call
    return _isPalindrome(str.slice(1, -1));
  }
})();
```

### 更に最適化
```js
const isPalindrome = (() => {
  return function isPalindrome (str) {
    str = str.replace(/[^a-z0-9]/i, '').toLowerCase();
    // wrap the recursive _isPalindrome function with _trampoline()
    return (str.length > 0) && _trampoline(_isPalindrome)(str);
  };

  // trampoline() — higher-order function
  function _trampoline (fn) {
    return function _trampolined (...args) {
      let result = fn(...args);
      while (typeof result === 'function') {
        result = result();
      }
      return result;
    }
  }

  function _isPalindrome (str) {
    const len = str.length;

    if (len <= 1) return true;
    if (str[0] !== str[len - 1]) return false;

    // return a function that calls the recursive function
    return () => _isPalindrome(str.slice(1, -1));
  }
})();

```


## sliceとは
[javascript sliceメソッド](https://qiita.com/iwao2010/items/8f47aa43aff80eefafd6) 
[javascriptのStringのsubstring slice substr](https://qiita.com/littlekbt/items/4a47f485391b6b45d96c)

```js
const str = "deluxe";

console.log(str.slice(2));
// luxeが返る

console.log(str.slice(2, 4));
// luが返る

console.log(str.slice(1, 6));
// eluxeが返る

console.log(str.slice(1, -1));
// eluxが返る
```


```js
const str = 'マツコ';
console.log(str.slice(1, 2));

console.log(str.slice(1, -1));

//いずれも ツが返る
```

```js

const str = 'マツコDeluxe';
console.log(str.slice(1, 2));
// ツが返る

console.log(str.slice(1, -1));
// ツコDeluxが返る
```

つまり **[What Does `slice(1, -1)` Do?](https://dev.to/cerchie/what-does-slice-1-1-do-3ad7), (`slice(1, -1)`って何してるの)**、

> 今日は、slice(1, -1)が何をするのかを学んだ。
> 文字列が回文かどうかを (再帰的に) チェックする方法を調べていたら、 str.slice(1, -1) を使う解決策に出くわしました。

> 配列を変異させずに処理したい場合は slice() が良い選択肢となります。
> 負のインデックスを使用して、シーケンスの終わりからを示すことができます。

という話でありました。
