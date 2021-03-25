筆者のスペック：[Delphi](https://qiita.com/e99h2121/items/b19fe6130f318d3a187c) の人です。[業務アプリたるやみたいなことを普段は考えています。](https://qiita.com/e99h2121/items/40e7eea415faa53614c4)

- ERP業務アプリケーション開発17年
- 言語：Java, JavaScript (Delphi, COBOL, C++, SQL？, HTML？, CSS？, 趣味では色々
- フレームワーク？：Spring, jQuery, 
- 他：Windows, UNIX全般, LINUX, データベースは何でも

で3層構造を主に触って食ってきました。タイトルだけは今時風にしてみました。
以下 [Web制作を諦めた初心者が半年でアプリをリリースした話（Flutter）](https://qiita.com/naokiwakata/items/1c6d6f4095a02f727b7b) を読んで全く単語が頭に入ってこなかったのと、頭から入りたい質として「あーん？こいつら信用できるん？」なんて、浮かんだ疑念を解き明かすために書きます。

## 結論
- Flutter
- Firebase
- Dart

を使ってバックエンドは[Nginx/Django/PostgreSQL](https://qiita.com/tetsufe/items/a189034dc17e0059d391#flutter%E4%BB%A5%E5%A4%96%E3%81%AE%E6%A7%8B%E6%88%90) あたり、で問題なく（というより最適だ位に）モバイルアプリは作れそうだ、と理解しました。
冒頭から手のひらを反すような結論になります。
[三連休に本気出したらFlutterでアプリを作成できるか検証してみた](https://qiita.com/beeeyan/items/bf8644bc1e6a335a91bc) を見つけたからこの3連休で本気出すか...どうかは約束しない。

以下、枯れた技術だけは知っているけれどイマドキの単語は全く、という方の、2021年のお供になればと思い書きます。

## わからなかった単語1： Flutter
### Flatter
https://ejje.weblio.jp/content/flatter
> 主な意味: おべっかを使う、おもねる、お世辞を言う

ではない。(本当に間違えた。)

### Flutter
公式：https://flutter.dev/
Wikipedia: https://ja.wikipedia.org/wiki/Flutter
> Flutter (フラッター) は、Googleによって開発されたフリーかつオープンソースのモバイルアプリケーションフレームワークである。FlutterはAndroidやiOS向けのアプリケーションの開発に利用されている。


[学生の個人開発にもFlutterがオススメな理由（リリース例あり）](https://qiita.com/tetsufe/items/a189034dc17e0059d391) があるが

>全てDartのみで書ける
Storyboard, XML, CSSを触る必要がありません

Dartのみで書けるってどういう意味やねん。状態であった。

## わからなかった単語2： Dart
### Dart
公式：https://dart.dev/
Wikipedia: https://ja.wikipedia.org/wiki/Dart
> Dart（ダートもしくはダーツ。当初は Dash と呼ばれていた）はGoogleによって開発されたウェブ向けのプログラミング言語である。ウェブブラウザ組み込みのスクリプト言語であるJavaScriptの代替となることを目的に作られた。

[Flutter入門のためのDart入門](https://qiita.com/teradonburi/items/913fb8c311b9f2bdb1dd)。
なるほど、FlutterとDartの組み合わせはどうやらテッパンらしい。


## わからなかった単語3： Firebase
### Firebase

公式: https://firebase.google.com/
Wikipedia: https://ja.wikipedia.org/wiki/Firebase
> Firebase(ファイアベース)は、2011年にFirebase, Inc.が開発したモバイル・Webアプリケーション開発プラットフォームで、その後2014年にGoogleに買収された。

[Web制作を諦めた初心者が半年でアプリをリリースした話（Flutter）](https://qiita.com/naokiwakata/items/1c6d6f4095a02f727b7b)に戻ると「Flutter×Firebaseで作成しました」とあったわけだが、Firebase、これも分からなかった。

[Firebaseで1時間で簡単なWebチャットアプリが作れるハンズオン](https://qiita.com/taketakekaho/items/52b7c196ddbd4cb3c968)
1時間で作れる、そんなに嬉しいの？というか拡張性、信頼性、あるの？

## わからなかった背景: 何でそんなフレームワーク達を使うの？
この疑問は端的には以下2つから来ている。

1. そんな新しいフレームワーク信用できるの？
2. えっ、また新しい言語覚えるのツライ...

### 疑問1. Flutterは信用できるのか
[Flutterがいい理由](https://qiita.com/teradonburi/items/913fb8c311b9f2bdb1dd#flutter%E3%81%8C%E3%82%88%E3%81%84%E7%90%86%E7%94%B1) にある。

> **Androidの開発をJavaやkotlinの完全ネイティブで開発すると Activity、Fragment、Viewと複数のライフライクルを管理することになり**、わかりづらくデバッグしづらいバグが発生します。

- Flutterは複雑なライフサイクルがラッピングされているため**シンプル**
- **AndroidとiOSで共通のソースコードで実装できる**。
- 標準のUIライブラリで**AndroidとiOS両方対応**している。



### 疑問2. 新しい言語覚えるのツライ

同記事で引用されている [Android開発はFlutterでやる方がいい説](https://qiita.com/ko2ic/items/b07d3ec73513c1bd8ba6) が私にはわかりやすかった。
[良くも悪くもDart言語](https://qiita.com/ko2ic/items/b07d3ec73513c1bd8ba6#%E8%89%AF%E3%81%8F%E3%82%82%E6%82%AA%E3%81%8F%E3%82%82dart%E8%A8%80%E8%AA%9E) であるということはすなわち
> **Dart言語の文法は、ほとんどJavaです。**JavaScriptに近いかもしれませんが、Javaを知っている人の学習コストは限りなくゼロに近い

らしい。[【翻訳記事】なぜFlutterにおいてDartを使用するのか？](https://qiita.com/yasutaka_ono/items/608405a27e57cc30e0d7) が詳しいので更に読むと良い。

## 結論：アーキテクチャ選定のガイドラインに則り
以上より Flutter, Firebase, Dart、それだけ話題になっていることがわかった。
使えるのではないかなとようやく理解できました。

### ガイドラインとは
[技術選定/アーキテクチャ設計で後悔しないためのガイドライン](https://qiita.com/hirokidaichi/items/a746062917595619720b) という記事を昨年末読んだ。

- そもそもアーキテクチャ・技術選定に時間をかけるべきか。
- あなたの技術的モチベーションをどの程度考慮したほうがいいのか。

今回私が Flutter, Firebase, Dart に興味を持った動機は、「趣味でアプリ開発できるかな？」程度。上記を考えると「時間はかけないべき」だし「私のモチベーションだけを考慮すればいい」。しかし多少将来を考えると、少しでもほかの誰かも触れたり、中身に興味を持てたり、あるいは日常業務（記事冒頭参照）に学びを還元できる要素があったほうがいい。

[アーキテクチャ選定のガイドライン まとめ](https://qiita.com/hirokidaichi/items/a746062917595619720b#%E3%81%BE%E3%81%A8%E3%82%81) には以下のようにある。

> 最も大事なのは、そのような「失敗」をリカバリーできる体制やチーム、組織を作り上げることです。そのためには、その時考えたことや予測をしっかりと文書化し残していくことが大事になります。

そういう意味で当記事は「Flutter Firebase Dart」などという私にとっては初見のマイナー扱いだった技術たち。それらが、意外と強固で信頼性に足りそうだという記録として残したく書いたということになります。

### 補足：Dart言語の人気
[2019年にわざわざ学ばなくてもいいプログラミング言語](https://japan.zdnet.com/article/35135732/) で堂々1位。
[疑問はStack Overflowで解決しながら淡々と利用されている、そういう言語であり、それを目指している](https://qiita.com/Cat_sushi/items/ac9f11b2b255efdb15de)。

Kotlin: https://kotlinlang.org/ はそれとして。
[KotlinとJavaができる人向けDart速習](https://qiita.com/kikuchy/items/2cce118d38fc15324b2b) なんてのもあるし、まあJavaがベースにあるヒトにとってはどちらでも、かじってみてもいいのかなという印象です。
一方で [もしあなたが急にAndroidアプリを業務で作るはめになった場合の選択肢(2021年初頭版)](https://qiita.com/Gazyu/items/dafdb74c4aadf722da92)。あ、業務で作るとなるとそれはまた別の話よね、とおもったので念のためここに追記。

以上2021年、（比較的）おっさん向けのモバイルアプリ「完全に理解したい」ための記事でした。
その後の[Hello, My Flutter Worldの記録はここにメモった。](https://zenn.dev/e99h2121/articles/b05c3277f114d4)
