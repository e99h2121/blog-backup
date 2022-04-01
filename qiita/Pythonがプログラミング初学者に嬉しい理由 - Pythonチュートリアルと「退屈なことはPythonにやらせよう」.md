https://qiita.com/e99h2121/items/fc94960448cb3341f80b

> 社内にてプログラミング初歩をモブプロで楽しむ会が始まった

... のですが、その中でPythonチュートリアルも分かりやすいなあと思ったのでその感想文+「退屈なことはPythonにやらせよう」という本の紹介です。

## チュートリアル

https://docs.python.org/ja/3/tutorial/

> 1. やる気を高めよう

まずやる気を高めます。

### Pythonの魅力紹介

> コンピュータを使っていろいろな作業をしていると、自動化したい作業が出てくるでしょう。たとえば、たくさんのテキストファイルで検索-置換操作を行いたい、大量の写真ファイルを込み入ったやりかたでファイル名を整理して変更したり、などです。ちょっとした専用のデータベースや、何か専用のGUIアプリケーション、シンプルなゲームを作りたいかもしれません。

> あなたがプロのソフト開発者として、C/C++/Java ライブラリを扱う必要があるけども、通常の編集/コンパイル/テスト/再コンパイルのサイクルを遅すぎると感じているかもしれません。上記ライブラリのためのテストを書くことにうんざりしているかもしれません。または、拡張言語を持つアプリケーションを書いているなら、そのために新しい言語一式の設計と実装をしたくないでしょう。

> Pythonはそんなあなたのための言語です。

私だ！という気持ちになりますね。

> ところで、この言語は BBC のショー番組、"モンティパイソンの空飛ぶサーカス (Monty Python's Flying Circus)" から取ったもので、爬虫類とは関係ありません。このドキュメントでは、モンティパイソンの寸劇への参照が許可されているだけでなく、むしろ推奨されています！

> さて、皆さんはもう Python にワクワクして、もうちょっと詳しく調べてみたくなったはずです。プログラミング言語を習得する最良の方法は使ってみることですから、このチュートリアルではみなさんが読んだ内容を Python インタプリタで試してみることをおすすめします。

ワクワクしてきます。
余談ですが空飛ぶモンティパイソンはネトフリで見られるようです。

https://www.netflix.com/jp/title/70213238

### Pythonインタプリタを使う

```python
Python 3.10.2 (tags/v3.10.2:a58ebcc, Jan 17 2022, 14:12:15) [MSC v.1929 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> the_world_is_flat = True
>>> if the_world_is_flat:
...      print("Be careful not to fall off!")
...
Be careful not to fall off!
>>>
```

ともかく書かれているようにポチポチ動かしてみます。


```python
>>> # this is the first comment
>>> spam = 1  # and this is the second comment
>>>           # ... and now a third!
>>> text = "# This is not a comment because it's inside quotes."
>>> spam
1   
>>> text
"# This is not a comment because it's inside quotes."
>>>
```

コメントなども。

### 文字列は複数行に書ける

> 文字列リテラルは複数行にまたがって書けます。1 つの方法は三連引用符 ("""...""" や '''...''') を使うことです。改行文字は自動的に文字列に含まれますが、行末に \ を付けることで含めないようにすることもできます。次の例:

```python
print("""\
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
""")

```

Javaだと比較的最近のやつ : [Javaにテキスト・ブロックが登場](https://blogs.oracle.com/otnjp/post/text-blocks-come-to-java-ja)


### 文字列は乗算で反復できる

```python
>>> 'よく' + 5 * 'なく' + 'ない'
'よくなくなくなくなくなくない'
```

今夜はブギー・バックです。

### 色々

```python
>>> 'Py' 'thon'
'Python'
```

足し算。

```python
>>> prefix = 'Py'
>>> prefix + 'thon'
'Python'
```

これも足し算。

```python
>>> word = 'ありますまいか'
>>> word[0]
'あ'
```
index が使える。

```python
>>> word[10]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: string index out of range
>>> word[7]  
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: string index out of range
```

こうするとエラー。

```python
>>> word[6] 
'か'
>>> word[-6]
'り'
>>> word[2:5]
'ますま'
>>> word[-2:] 
'いか'
>>> word[4:42]
'まいか'
```

この辺りは便利そう。

```python
>>> 'では' + word[0:]
'ではありますまいか'
```

```python
>>> s = 'supercalifragilisticexpialidocious'
>>> len(s)
34
```

で、長さを取得

```python
>>> squares = [1, 4, 9, 16, 25]
>>> squares
[1, 4, 9, 16, 25]
>>> squares[-3:]
[9, 16, 25]
>>> squares[:]
[1, 4, 9, 16, 25]
>>>

```

この日はここまで。

https://docs.python.org/ja/3/tutorial/controlflow.html

まで読み進めて、Pythonを手中にだいたいおさめた気になった。こういったチュートリアルやら教え方が分かりやすい点でPythonはやはり初学者に優しいのだろうなという感想。


## 「退屈なことはPythonにやらせよう」

で「Python なにができる」なんてことをググっていてこの本を見つける。

[退屈なことはPythonにやらせよう ―ノンプログラマーにもできる自動化処理プログラミング | Al Sweigart, 相川 愛三 |本 | 通販 | Amazon](https://www.amazon.co.jp/%E9%80%80%E5%B1%88%E3%81%AA%E3%81%93%E3%81%A8%E3%81%AFPython%E3%81%AB%E3%82%84%E3%82%89%E3%81%9B%E3%82%88%E3%81%86-%E2%80%95%E3%83%8E%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AB%E3%82%82%E3%81%A7%E3%81%8D%E3%82%8B%E8%87%AA%E5%8B%95%E5%8C%96%E5%87%A6%E7%90%86%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Al-Sweigart/dp/487311778X)
[O'Reilly Japan - 退屈なことはPythonにやらせよう](https://www.oreilly.co.jp/books/9784873117782/)
![](https://www.oreilly.co.jp/books/images/picture978-4-87311-778-2.gif)

> ファイル名の変更や表計算のデータ更新といった作業は、日々の仕事の中で頻繁に発生します。
ひとつふたつ修正するだけであれば問題ないのですが、それが数十、数百となってくると手に負えません。
そのような単純な繰り返し作業はコンピュータに肩代わりしてもらうとすごくラクになります。
本書では、手作業だと膨大に時間がかかる処理を一瞬でこなすPython 3プログラムの作り方について学びます。対象読者はノンプログラマー。
本書で基本をマスターすれば、プログラミング未経験者でも面倒な単純作業を苦もなくこなす便利なプログラムを作れるようになります。

なんと原書は 「Free to read under a CC license.」である。

[Automate the Boring Stuff with Python](https://automatetheboringstuff.com/)
他にも http://www.inventwithpython.com/ が読み応えだが以下らしい。

> 劇的な「業務効率化」「コスト削減」「生産性向上」を達成するには、単純な繰り返し作業の自動化は必須です。本書ではWordやExcel、PDF文書の一括処理、Webサイトからのダウンロード、メールやSMSの送受信、画像処理、GUI操作といった日常業務でよく直面する面倒で退屈な作業を、Pythonと豊富なモジュールを使って自動化します。

例: 
- ウェブスクレイピング
- Excelスプレッドシートを使ってみよう
- Googleスプレッドシートを使いこなす
- PDFやWordのドキュメントを扱う
- CSVファイルとJSONデータの扱い方
- 時間を管理する、タスクをスケジュールする、プログラムを起動する
- メールとテキストメッセージの送信
- 画像を操作する
- GUIオートメーションでキーボードとマウスを制御する


https://aizoaikawa.hatenablog.com/

なんだか遊びながらメモ書きのように書いてしまったので長くなったが、まだまだ遊べそうだという記録。以上です～
