https://qiita.com/yoshioterada/items/38cc9e5e0c95f8be84e1

https://qiita.com/yoshioterada/items/2a54dfb60a02a26a2c35

JDKディストリビューション、なぜこんなに種類があるのか。
[OpenJDKと各種JDKディストリビューションの情報源まとめ #minjava](https://qiita.com/yamadamn/items/2dd26a014791b9557199)
以下等がわかりやすかったので自分のためにまとめていたものの蔵出しです... 
[JDK、Oracle JDK、OpenJDK、Java SEってなに？](https://qiita.com/nowokay/items/c1de127354cd1b0ddc5e)

## [Java SEとは](https://www.javadrive.jp/start/install/index5.html#section1) 
- Java Platform, Standard Edition の略。
- Java で使用される API をまとめたもの。
- API とは Application Programming Interface 、この場合は Java の機能やデータなどを利用するための呼び出し方を定義したもの。
- Java で提供されている API は非常に多いが、 Java SE はその中でも基本となる API をまとめたもの。
- 例えば java.lang.String クラスなど。
- Java SE は定期的にバージョンアップされていてどのバージョンの Java SE なのかが分かるようにバージョンを表す番号を合わせて記述します。例えば Java SE 8 とか Java SE 13 とか。

## [Java EE, Java MEとは](https://www.javadrive.jp/start/install/index5.html#section2)
- Java EE とは Java Platform, Enterprise Edition の略で大規模なシステムを開発する場合に必要となる API が含まれます。
- Java EE は Java SE の拡張機能。
- 他にも家電などの組み込み機器やモバイルデバイスで動作するアプリケーションを開発するために使用する API がまとめられた Java ME がある。 Java ME とは Java Platform, Micro Edition の略。

## JVMとは
- Java Virtual Machine の略で Java で作成されたアプリケーションを Windows や Mac OS などで動かすために必要となるアプリケーション。

## JREとは
- Java Runtime Environment の略で Java のプログラムを実行するためのセット。 Java 実行環境とか Java ランタイムなどと呼ばれる。JRE には先に解説した JVM や対応する API がセットになっている。

以前は JRE だけを単独でインストールすることが可能だったが、 2021年2月 現在では JRE は単独で配布されておらず JDK をインストールする必要がある。

## JDKとは
- Java Development Kit の略で Java のプログラムの開発や実行を行うためのプログラムのセット。Java 開発環境などと訳される。

## サマリ: [JDK 9以降のJDKの選び方と有償化について](https://www.javadrive.jp/start/install/index5.html#section2)
> - Oracle社は2017年9月、JDKの提供サイクルとライセンス方式に関して、新たなリリース・モデルを発表した。
> - また Oracle社は 2019年4月 にライセンスを変更し、Oracle JDK は個人利用・開発目的以外の場合は有償でのライセンス契約が必要となった。

https://www.oracle.com/jp/technical-resources/article/java/ja-topics/jdk-release-model.html

https://forest.watch.impress.co.jp/docs/news/1180607.html

> - Oracle JDK を商用で使用する場合は何らかの有償での契約が必要。商用で JDK を利用したい場合には必ず有償しかないというわけではなく、Java の開発は OpenJDK プロジェクトとして Oracle 社や SAP社、 Red Hat社、 Google 社、Amazon 社など複数の会社や個人によって行われている。そして OpenJDK のソースコードを元に各社がバイナリを提供している。
- Oracle 社も OpenJDK をベースに Oracle JDK を提供すると同時に、商用でも無償で利用可能な OpenJDK のバイナリを提供している。以前は Oracle JDK でしかなかった機能は順次 OpenJDK に移されているため機能的な差異も縮小。
- どの JDK を利用するのかについて、 Oracle 社が提供するものであれば長期サポートが必要であれば Oracle JDK 、長期サポートが必要なく商用でも無償で利用したい場合には Oracle OpenJDK となる。

## まとめ

https://qiita.com/yamadamn/items/2dd26a014791b9557199

今後とも情報Updateが必要だなと思いつつのメモでした。
