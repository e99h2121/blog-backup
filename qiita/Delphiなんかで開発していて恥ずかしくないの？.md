## この記事は

[Develop fun!を体現する Works Human Intelligence Advent Calendar 2020](https://qiita.com/advent-calendar/2020/whi)
[Develop fun!を体現する Works Human Intelligence #2 Advent Calendar 2020](https://qiita.com/advent-calendar/2020/whi-2)

煽り記事的タイトルですが Works Human Intelligence アドベントカレンダーの投稿練習です。

## プログラミング言語に優劣はあるのか

[Delphiで湯婆婆する](https://qiita.com/e99h2121/items/0aba0ce4b5b4d1c27505) を投稿したらそれなりに面白がってもらえたようなのでDelphi（Object Pascal）というプログラミング言語の良いところを書いてみます。結論を先に書いてしまうと、言語に向き不向きはあっても優劣なんてないわけです。たまに表題のように煽られる弊社ではありますが、それを中の人としてどう向き合うべきなのか、という意味であらためてDelphiについて考えてみました。

### 事実
弊社内ではDelphiとCOBOLをいまでも保守に使っており、今回ここではDelphiについて書きます。
なんで？と言われるとなんででしょう、現在の旗艦プロダクトのVersion Upgradeがあった過去、もう20年近く前なのでしょうか、

- 業務アプリたるもの安定を重視すべき。「枯れた技術」のほうが安定している。

のような理由をもってそうしてきたからとイチ開発としては理解しています。だけでなく、「[今も改良が続くPascal/Delphi言語の栄枯盛衰](https://news.mynavi.jp/article/programinglanguageoftheworld-22/)」のような記事を見ると教育用言語として、「とっつきやすい」という利点があったものと私は感じます。


### 世界にプログラミング言語はいくつあるのか

[250という数が最も説得力がある](https://techracho.bpsinc.jp/oasist/2018_12_24/65739#:~:text=1.%20%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E%E3%81%AE%E6%95%B0,%E3%81%A8%E8%A8%80%E3%82%8F%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82) らしいです。

[Delphiが24周年だそうで](https://kabukawa.hatenablog.jp/entry/2019/02/14/153012#Delphi-is-%E4%BD%95)...2019年に24周年を迎えたそうで。
[TIOBEプログラミング言語ランキング](https://news.mynavi.jp/article/20190910-891939/) では堂々13位だったようです。
往年より[得意の逆ハリ](http://ikadoku.blog76.fc2.com/blog-entry-950.html) をしたくてやっているわけではなくそれなりに根拠があってDelphiを当時選択、使ってきたと思います。

### 向き不向き

プログラミング初学者を「プログラミング楽し～い！」と感じさせるには非常に適した言語だったと思います。

動画：[ボタン置いてHello World1行書いたら動く。](https://www.youtube.com/watch?v=Ob0gHLQM0mU)

[![Delphi参考](http://img.youtube.com/vi/Ob0gHLQM0mU/0.jpg)](http://www.youtube.com/watch?v=Ob0gHLQM0mU)

老年に安心、ホームページビルダー並みなのではないでしょうか。なので[湯婆婆](https://qiita.com/e99h2121/items/0aba0ce4b5b4d1c27505)も平日の朝ちょっと手を動かしたらできました。


### 得意不得意

というだけではそれでお金を頂戴している身としては少し足りません。他に良いところといえば、コンポーネントを拡張して作るのが簡単です。日曜大工的に[窓の杜](https://forest.watch.impress.co.jp/)に公開するようなアプリを作るには便利だったのだと思います。[Github](https://en.wikipedia.org/wiki/GitHub)時代以前の話だとおもいます。

ただ一方、きょうび、ライブラリが多くて、テストも書きやすくてなんぼ。そうです。さすがにJavaができないと始まらない。

## Delphiは過去の話

ということで見ていただきたい最近の我々のプロダクトは、[さすがにWebアプリケーションになっています。](https://www.works-hi.co.jp/products/hcm/talent-search) 逆を言えばそうでもないとプロダクトとして改善も難しい。基本はJava、JavaScriptができないと開発にならないです。Delphiは保守のちょっとしたときに「ソース引っ張り出すのめんどくせ～」と思いながら、申し訳程度に不具合として直す作業をしています (個人の感想です)。

### 言語としてつぶしがきく、競技人口が多い

選手層が厚い言語のほうが優れたものにたどり着きやすい。選択肢が多い。
業務アプリケーションとして、という主軸は今も昔も変わらないですがその点で弊社も常識的なことを考えていると思います。

Java, JavaScriptほか理由があればお好きな言語でも、弊社も割と常識を受け入れて楽しく開発をしています。弊社の開発が枯れた技術だけを、ましてや「疑いもなく使っている」ということはないので安心していただけたらと思います。いや誰向けのメッセージかわからないが。


## Delphiの現在

会社的にも紆余曲折があって勝手なシンパシーを感じずにはいられませんが、エンバカデロ社になったDelphiは、以下であそべるようです。先に書いた通り休日にたしなむには相変わらず楽しいツールの一つだと思います。
https://www.embarcadero.com/products/delphi/starter/free-download

以上Delphiを振り返ってみました。
