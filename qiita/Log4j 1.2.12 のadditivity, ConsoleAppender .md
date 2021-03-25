注: [On August 5, 2015 the Logging Services Project Management Committee announced that Log4j 1.x had reached end of life. ](https://logging.apache.org/log4j/1.2/manual.html
) / [Log4jバージョン1のサポートは終了](https://www.infoq.com/jp/news/2015/09/log4j-version-1-reaches-eol/)
...なのだけど今更log4j-1.2について調べている。

元々
`log4j-1.2.8`
しか居なかったアプリケーション上に

`log4j-1.2.12`
が同梱されたことにより何か振る舞いがおかしい。
ログが２重に出る。そして意図せずSystemOutに出る...
この２点に関するメモです。


### ２重に出る

まず２重に出る点、関係していそうなのはこの辺。`Additivity`

[log4jのLoggerの階層構造とadditivityの振舞について](http://gungnir-odin.hatenablog.com/entry/20130117/1358425827)

[Additivity is set to true by default, that is children inherit the appenders of their ancestors by default. ](https://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/Category.html#additive)
Additivity はデフォルトで true に設定されており、子はデフォルトで先祖のアペンダーを継承します。

### 意図せずSystemOutに出る

SystemOutのほうは、[log4j変更履歴](https://logging.apache.org/log4j/1.2/changes-report.html) を見てみると以下が怪しい。

引用。

- 1.2.12 `TRACE level introduced, ConsoleAppender modified to follow redirection of System.out` TRACE レベルが導入され、ConsoleAppender が System.out のリダイレクトに追従するように変更されました。
- 1.2.13 `TRACE level missing info fixed, ConsoleAppender.follow added to make redirection following an optional behavior.` TRACEレベルの欠落情報を修正し、ConsoleAppender.followを追加し、任意の動作に続くリダイレクトを行うようにしました。
- [log4j version 1.2.13](http://repository.transtep.com/repository/thirdparty/logging-log4j-1.2.13/docs/download.html) Bug #37122 : Console appender now behaves as before to fix compatibility problem with JBoss introduced in 1.2.12 release due to fix for bug 31056. Can still be configured to detect changes in the System.out and System.err streams as needed by setting the follow property. ConsoleAppender は、バグ 31056 の修正により 1.2.12 リリースで導入された JBoss との互換性の問題を修正するため、以前のように動作するようになりました。以下のプロパティを設定することで、必要に応じて System.out および System.err ストリームの変更を検出するように設定できるようになりました。

ConsoleAppender の動きがやはり変わっていたように見える。[^1]
ここで `1.2.17` を試す範囲では挙動は `1.2.8` と同様に戻る。


### 互換性

[API/ABI changes review for log4j ](https://abi-laboratory.pro/index.php?view=timeline&lang=java&l=log4j)

業務上もう `1.2.17` に上げてしまってよいのか、一旦、ここまでに調べたことを書いておく。またLog4j には[信頼性のないデータのデシリアライゼーションに関する脆弱性](https://jvndb.jvn.jp/ja/contents/2019/JVNDB-2019-013606.html) というのがあるらしいが一応該当していなそうだったのでそれもメモ。


## ハングする

Bug 50213 - Category callAppenders synchronization causes java.lang.Thread.State: BLOCKED
https://bz.apache.org/bugzilla/show_bug.cgi?id=50213
log4j の該当箇所
http://svn.apache.org/viewvc/logging/log4j/tags/v1_2_17/src/main/java/org/apache/log4j/Category.java?revision=1342873&view=markup#l391



[^1]: [Appender](https://www.techscore.com/tech/Java/ApacheJakarta/Log4J/1-2/)
