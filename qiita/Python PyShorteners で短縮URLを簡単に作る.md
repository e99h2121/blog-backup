

https://dev.to/theinsightfulcoder/create-your-very-own-url-shortener-expander-using-python-4nfd

PyShorteners というやつで非常に簡単にURL短縮ができるらしい、というメモ。
[記事の筆者のソースはこちら](https://github.com/SaiAshish-Konchada/Python-Projects-for-Beginners/tree/main/URL%20Shortener%20%26%20Expander)。



## PyShortenersとは

https://pyshorteners.readthedocs.io/en/latest/
`pip install pyshorteners` して使う。

>pyshortenersは、最も有名なURL Shortenersを使ってURLを短縮したり拡張したりするのを助けるPythonライブラリです。pyshortenersを使うと、短いURLを生成したり、別のURLを拡張したりすることが、次のように入力するだけで簡単にできます。(DeepL翻訳)

```sample.py
import pyshorteners

s = pyshorteners.Shortener()
print(s.tinyurl.short('http://www.g1.com.br'))
```


で、例えば以下のようなツールが簡単に作れる。

```shortener.py
from pyshorteners import Shortener

# passing instance
s = Shortener()
# asking user for choice
choice = int(input("1 or 2 ? (短縮化したいときは 1、元に戻したいときは 2 を入力してください) :"))

# link shortener
def short():
    link = input("短縮化したいリンクを入力してください: ")
    shortened_link = s.tinyurl.short(link)
    print(" The Shortened Link is: " + shortened_link)


# link expander
def expand():
    link = input("元に戻したいリンクを入力してください: ")
    expanded_link = s.tinyurl.expand(link)
    print("The Expanded link is: " + expanded_link)


if choice == 1:
    short()
elif choice == 2:
    expand()
else:
    print("1 か 2 を入力してください")
```


例えばQiitaの記事URLを: https://qiita.com/e99h2121/items/419c3bd39d8dea40f21a
`https://tinyurl.com/yy9rpy4y` などと短縮した例。

```bash
root@d545fa0ed72b:~/opt# python shortener.py
1 or 2 ? (短縮化したいときは 1、元に戻したいときは 2 を入力してください) :1
短縮化したいリンクを入力してください: https://qiita.com/e99h2121/items/419c3bd39d8dea40f21a
 The Shortened Link is: https://tinyurl.com/yy9rpy4y
root@d545fa0ed72b:~/opt# python shortener.py
1 or 2 ? (短縮化したいときは 1、元に戻したいときは 2 を入力してください) :2
元に戻したいリンクを入力してください: https://tinyurl.com/yy9rpy4y
The Expanded link is: https://qiita.com/e99h2121/items/419c3bd39d8dea40f21a
root@d545fa0ed72b:~/opt#
```

## TinyURLとは (怪しくないの？)

短縮URLサービスの先駆け。
https://ja.wikipedia.org/wiki/TinyURL


https://ja.wikipedia.org/wiki/%E7%9F%AD%E7%B8%AEURL

短縮URLにてスペースが節約できる一方、URL偽装等にも使えるため、「TinyURLのリンクをスパムと認識してブロックするため、直リンクにしない」等の策がとられているようだ。

以上メモ。なにがしかの参考になればさいわいです。
