「素人にはお薦め出来ない」という[コピペが流行ったのはもはや**20年近く前**だったらしい](https://www.buzzfeed.com/jp/takumiharimaya/yoshinoya-copipe)。20年って長いですよね。生まれた赤ちゃんが成人式を迎えるくらいの長さ。
さて2020年12月初め、話題になったこの話、[Kubernetes 1.20からDockerが**非推奨**になる理由](https://blog.inductor.me/entry/2020/12/03/061329)だったり、[Dockerは**非推奨じゃない**し今すぐ騒ぐのをやめろ](https://jaco.udcp.info/entry/2020/12/03/172843) だったり、それそのものはここでは吟味しないのですがその心は

- 機能は100%カバーされる
- 移行を検討してほしい

とのこと。いまこそ「非推奨」の意味を正しく理解したいと思う。

## それはまさに諸刃の剣

[IT用語の「非推奨」は「使えなくもないけど使わない方がいい」ということ。](https://eigobu.jp/magazine/suishou#:~:text=%E5%BE%AE%E5%A6%99%E3%81%AB%E9%81%95%E3%81%86%E3%80%8D-,IT%E7%94%A8%E8%AA%9E%E3%81%AE%E3%80%8C%E9%9D%9E%E6%8E%A8%E5%A5%A8%E3%80%8D%E3%81%AF%E3%80%8C%E4%BD%BF%E3%81%88%E3%81%AA%E3%81%8F%E3%82%82,%E6%96%B9%E3%81%8C%E3%81%84%E3%81%84%E3%80%8D%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8&text=%E3%80%8C%E9%9D%9E%E6%8E%A8%E5%A5%A8%E3%80%8D%E3%81%A8%E3%81%AF%E3%80%81,%E3%81%A8%E3%81%84%E3%81%86%E6%84%8F%E5%91%B3%E3%81%AE%E8%A8%80%E8%91%89%E3%81%A7%E3%81%99%E3%80%82)
[Deprecated と Obsolete](https://blog.cles.jp/item/6357) なんてのは「非推奨」「廃止」とかもう少し強い言い回しに聞こえる。 

この「非推奨」、新機能への移行過程で起こるものであり「非推奨ですよ」と言っている側、基本的には提供者には強い意志がある。使用者側が「あ、おすすめしてないけど使っても良いのね？」とかどうでもいい。別に選択は構わないが非推奨だと言っているのですぞ。と、結果いつまでも使われているので消せないとか提供者側が言っちゃう現象が起こるのは何かズレていると思っていた。私は思っていた。思っていたし、そのつもりで我々はリニューアルした機能をお客様に提供していきたいと思っていた。

## しかし
よく考えたら実際は違った。例えば以下。
[java.util.Dateクラスのほとんどのメソッド・コンストラクタはJDK1.1の段階で非推奨になっています。WikipediaによればJDK1.1のリリースは**1997年2月19日**](https://teratail.com/questions/28479)。**[非推奨ながら互換性のために消せないと言う感じ。](http://www.coppermine.jp/docs/programming/2011/12/java-util-date.html)** うわこれ結構有名な例だったな。


**互換性**がないと非推奨といえど**20年消せない** 扱いに簡単になりえるのだなということ。
我々も機能改良版を用意する際にはお客様に

- 機能は100%カバーされる
- 移行を検討してほしい

と自信を持って言えないと簡単に **20年消せない** 時間を費やすことになるのだ。
互換性が非常に高いものをサクっと出せるのは大事だし考えないといけないことだと思う。

### ちなみにこの話
最近Updateがあったので追記する。
[JDK 1.0 (Java 1.0.2) を入手したので、GitHub に置いておきました。](https://qiita.com/YujiSoftware/items/96df259fe51d56a94a43) とのこと。何が嬉しい？
https://github.com/YujiSoftware/JDK1.0/blob/master/src/java/util/Date.java
でjava.util.Date が読めるということ！

**[java.util.Date―その悲劇と歴史](https://www.coppermine.jp/note/2019/01/java-util-date/)**

> java.util.Dateは、JDK1.1の時に改訂されて以来、実はまだ大きな改訂がありません。Java SE 5.0のときに@Deprecatedアノテーションが導入されていますが、それもほんの些細なことです。Java SE 8ではDate and Time APIとの相互運用性のためのメソッドが追加されましたが、JDK1.1の時に比べれば小規模な改修にとどまりました。先ほどからJDK1.1の時の改訂ばかり強調していますが、それがjava.util.Dateをほとんど書き換えてしまうほどの大改訂だったことが推測されるからです。

> オリジナルのjava.util.Dateの実装については、残念ながらJDK1.0を入手することができないので断言できませんが、現状の内部表現がほぼCalendar（JDK1.1から追加）ベースになっていることから、相当の規模であったことが予想されます。

[What happen to java.util.Date between JDK 1.0 and JDK 1.1?](http://www.experts123.com/q/what-happen-to-java.util.date-between-jdk-1.0-and-jdk-1.1.html)

どうせなら1.1と比べたいと思ったが色々要準備なので未達。
https://www.oracle.com/java/technologies/java-archive-downloads-javase11-downloads.html
だが大改訂の真相が一旦以下と比べることでできるということなのです。
http://hg.openjdk.java.net/jdk8/jdk8/jdk/file/tip/src/share/classes/java/util/Date.java


```JDK1.1.java
    /**
     * Creates today's date/time.
     */
    public Date () {
	this(System.currentTimeMillis());
    }
```



```JDK1.1.java
    /**
     * Creates a date. The fields are normalized before the Date object is
     * created. The arguments do not have to be in the correct range. For
     * example, the 32nd of January is correctly interpreted as the 1st of
     * February. You can use this to figure out what day a particular date
     * falls on.
     * @param year	a year after 1900
     * @param month	a month between 0-11
     * @param date	day of the month between 1-31
     * @param hrs	hours between 0-23
     * @param min	minutes between 0-59
     * @param sec	seconds between 0-59
     */
    public Date (int year, int month, int date, int hrs, int min, int sec) {
	expanded = true;
	valueValid = false;
	tm_millis = 0;
	tm_sec = (byte) sec;
	tm_min = (byte) min;
	tm_hour = (byte) hrs;
	tm_mday = (byte) date;
	tm_mon = (byte) month;
	tm_wday = 0;
	tm_yday = 0;
	tm_year = year;
	computeValue();
	expand();
    }
```


```JDK8.java

    /**
     * Allocates a <code>Date</code> object and initializes it so that
     * it represents the instant at the start of the second specified
     * by the <code>year</code>, <code>month</code>, <code>date</code>,
     * <code>hrs</code>, <code>min</code>, and <code>sec</code> arguments,
     * in the local time zone.
     *
     * @param   year    the year minus 1900.
     * @param   month   the month between 0-11.
     * @param   date    the day of the month between 1-31.
     * @param   hrs     the hours between 0-23.
     * @param   min     the minutes between 0-59.
     * @param   sec     the seconds between 0-59.
     * @see     java.util.Calendar
     * @deprecated As of JDK version 1.1,
     * replaced by <code>Calendar.set(year + 1900, month, date,
     * hrs, min, sec)</code> or <code>GregorianCalendar(year + 1900,
     * month, date, hrs, min, sec)</code>.
     */
    @Deprecated
    public Date(int year, int month, int date, int hrs, int min, int sec) {
        int y = year + 1900;
        // month is 0-based. So we have to normalize month to support Long.MAX_VALUE.
        if (month >= 12) {
            y += month / 12;
            month %= 12;
        } else if (month < 0) {
            y += CalendarUtils.floorDivide(month, 12);
            month = CalendarUtils.mod(month, 12);
        }
        BaseCalendar cal = getCalendarSystem(y);
        cdate = (BaseCalendar.Date) cal.newCalendarDate(TimeZone.getDefaultRef());
        cdate.setNormalizedDate(y, month + 1, date).setTimeOfDay(hrs, min, sec, 0);
        getTimeImpl();
        cdate = null;
    }
```

とりあえずこの辺を比較すると楽しそう。
https://github.com/YujiSoftware/JDK1.0/blob/master/src/java/util/Date.java#L226
https://github1s.com/YujiSoftware/JDK1.0/blob/master/src/java/util/Date.java#L226

http://hg.openjdk.java.net/jdk8/jdk8/jdk/file/tip/src/share/classes/java/util/Date.java#l454

