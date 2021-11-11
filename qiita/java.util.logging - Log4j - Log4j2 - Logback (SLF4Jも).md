https://twitter.com/yusuke/status/1399185190849683457?s=20

> Javaアプリケーションでロギングフレームワークは何を使っていますか？

という質問が興味深かったので関係するもののおさらいです。


## java.util.logging.Logger

https://docs.oracle.com/javase/8/docs/api/java/util/logging/package-summary.html

https://qiita.com/kenRp01/items/f415eb999a661e1326e2

## Log4j (Log4j 1.x)

https://ja.wikipedia.org/wiki/Log4j

https://logging.apache.org/log4j/1.2/

> On August 5, 2015 the Logging Services Project Management Committee announced that Log4j 1.x had reached end of life. For complete text of the announcement please see the Apache Blog. Users of Log4j 1 are recommended to upgrade to Apache Log4j 2.

> 2015年8月5日、Logging Services Project Management Committeeは、Log4j 1.xがend of lifeに達したことを発表しました。発表の全文は、Apache Blogをご覧ください。Log4j 1のユーザーは、Apache Log4j 2へのアップグレードを推奨します。


### トラブル報告

https://taka-2.hatenablog.jp/entry/20120825/p1

https://scrapbox.io/jiro4989/log4js%E3%81%AE%E6%97%A5%E4%BB%98%E3%83%AD%E3%83%BC%E3%83%AC%E3%83%BC%E3%83%88%E3%82%92%E8%A9%A6%E3%81%9D%E3%81%86%E3%81%A8%E3%81%97%E3%81%A6%E3%83%89%E3%83%8F%E3%83%9E%E3%82%8A%E3%81%97%E3%81%9F


## Log4j2 (Log4j 2.x)

http://logging.apache.org/log4j/2.x/index.html

> Apache Log4j 2 is an upgrade to Log4j that provides significant improvements over its predecessor, Log4j 1.x, and provides many of the improvements available in Logback while fixing some inherent problems in Logback’s architecture.

> Apache Log4j 2は、前身のLog4j 1.xから大幅に改良されたLog4jのアップグレード版で、Logbackのアーキテクチャに内在するいくつかの問題を修正しつつ、Logbackで利用可能な多くの改良点を提供しています。


### Apache Log4j 2.0 - アップグレードする価値はあるか？
https://www.infoq.com/jp/news/2014/08/apache-log4j2/

> 2014年8月17日

> Apache Software Foundationは先日，Log4j 2.0の提供開始を発表した。前バージョンのLog4.j 1.xに対して大幅にパフォーマンスが向上する。開発に数年を費やした今回のリリースは，Log4j 1.xやjava.util.loggingといった既存のロギングソリューションの影響を受けて，スクラッチから書き直されたものだ。

> Log4j 2.0では新たにプラグインシステムやプロパティのサポート，JSONベースのコンフィギュレーションのサポート，コンフィギュレーションの自動再ロードなどが導入される。さらにはSLF4JやCommons Logging, Apache Flume, そしてLog4j 1.xなど，既存のロギングフレームワークの多くをサポートし，新たにプログラマ用APIも提供する。


### Log4j 2 Compatibility with Log4j 1

http://logging.apache.org/log4j/2.x/manual/compatibility.html

### Migrating from Log4j 1.x

http://logging.apache.org/log4j/2.x/manual/migration.html


### Log4j2 why would you use it over log4j? (Stackoverflow)

https://stackoverflow.com/questions/30019585/log4j2-why-would-you-use-it-over-log4j

> 私がこれまで見たものから、log4j2は構成するのがより簡単であると宣伝されますが、 実際には非常に複雑です（3日経って、私はまだそれが私のホーム・ディレクトリにログを書くのを得られません）。自動構成は、単に私のために働かない（または、少なくとも私はそれを働かせることができない）、構成ファイル自体は、その構造においてかなり複雑であり、診断を助けるために実行時に物事を追加するのがはるかに難しいように見えます。
>
> パフォーマンスを除いて、オリジナルのlog4jよりlog4j2を使用する理由がありますか？

以下、特長をピックアップ。

#### Reasons to upgrade from Log4j 1.x to Log4j 2

> Update: since August 2015, Log4j 1.x is officially End of Life and it is recommended to upgrade to Log4j 2. Update 2: Log4j 1.2 is broken in Java 9.

> Community support: Log4j 1.x is not actively maintained, whereas Log4j 2 has an active community where questions are answered, features are added and bugs are fixed.

> Update: 2015年8月以降、Log4j 1.xは公式にEnd of Lifeとなっており、Log4j 2へのアップグレードが推奨されています。Update2：Log4j 1.2はJava 9で使えなくなっています。

> コミュニティのサポートです。Log4j 1.xは積極的にメンテナンスされていませんが、Log4j 2には活発なコミュニティがあり、質問に答えたり、機能を追加したり、バグを修正したりしています。

#### Custom log levels

> Automatically reload its configuration upon modification without losing log events while reconfiguring.

> 変更時に自動的に設定を再読み込みし、再設定時にログイベントを失うことはありません。


#### Concurrency improvements

> log4j2 uses java.util.concurrent libraries to perform locking at the lowest level possible. Log4j-1.x has known deadlock issues.
Configuration via XML, JSON, YAML, properties configuration files or programmatically.

> log4j2では、java.util.concurrentライブラリを使用して、可能な限り低いレベルでロックを実行します。Log4j-1.xには、既知のデッドロックの問題があります。
XML、JSON、YAML、プロパティ設定ファイルまたはプログラムによる設定。


#### Be aware

> log4j2.xml and log4j2.properties formats are different from the Log4j 1.2 configuration syntax
Log4j 2 is not fully compatible with Log4j 1.x: The Log4j 1.2 API is supported by the log4j-1.2-api adapter but customizations that rely on Log4j 1.2 internals may not work.
Java 6 required for version 2.0 to 2.3. Java 7 is required for Log4j 2.4 and later.

> log4j2.xmlおよびlog4j2.propertiesフォーマットは、Log4j 1.2の構成構文とは異なります。
Log4j 2は、Log4j 1.xと完全な互換性がありません。Log4j 1.2 APIは、log4j-1.2-apiアダプタによってサポートされていますが、Log4j 1.2の内部に依存するカスタマイズは動作しない可能性があります。
バージョン 2.0～2.3 では、Java 6 が必要です。Log4j 2.4以降ではJava 7が必要です。


#### Tips when upgrading

> You need (at least) both log4j-api-2.6.2.jar and log4j-core-2.6.2.jar in your classpath
Log4j2 looks for a log4j2.xml config file, not a log4j.xml config file
Config file location: either put it in the classpath or specify its path with the log4j.configurationFile system property

> クラスパスにlog4j-api-2.6.2.jarとlog4j-core-2.6.2.jarの両方が（少なくとも）必要です。
Log4j2は、log4j.xml設定ファイルではなく、log4j2.xml設定ファイルを探します。
設定ファイルの場所：クラスパスに置くか、log4j.configurationFileシステム・プロパティでそのパスを指定します。




## Logback

http://logback.qos.ch/reasonsToSwitch.html

> Logback brings a very large number of improvements over log4j, big and small. They are too many to enumerate exhaustively. Nevertheless, here is a non-exhaustive list of reasons for switching to logback from log4j. Keep in mind that logback is conceptually very similar to log4j as both projects were founded by the same developer. If you are already familiar with log4j, you will quickly feel at home using logback. If you like log4j, you will probably love logback.


> Logbackは、大小のlog4jに対する非常に多くの改善をもたらします。それらはあまりにも多く、網羅的に列挙することはできません。それにもかかわらず、log4jからlogbackに乗り換える理由を、網羅的ではありませんが挙げてみました。両方のプロジェクトが同じ開発者によって設立されたため、logbackはlog4jとコンセプト的に非常に似ていることを覚えておいてください。もしあなたがlog4jに慣れ親しんでいるのであれば、すぐにlogbackを使いこなすことができるでしょう。log4jが好きな方は、きっとlogbackも気に入ると思います。

Spring Boot でSLF4Jを目にしているひとは、SLF4Jを経由したLogbackということになりそう。

https://qiita.com/tag1216/items/b898b8fb58920bf335b2


## そのSLF4J

https://qiita.com/NagaokaKenichi/items/9febd2e559331152fcf8

SLF4Jはログのファサードで実体ではない。

## 他、参考

https://qiita.com/kero3/items/0033adca07a585623768

https://blog.kengo-toda.jp/entry/2021/05/31/200807

*[そのコメント](https://b.hatena.ne.jp/entry/s/blog.kengo-toda.jp/entry/2021/05/31/200807)


以上、一連のロギングな何某か。また何かあれば追記します。
参考になればさいわいです。
