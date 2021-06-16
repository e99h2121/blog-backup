対象読者: COBOLを全く触ったことがないが、人が書いたものを保守するくらいには今後触るかもしれないので、基本的なことだけ知っておきたい（完全理解したい）、どうせなら小ネタくらいは語れるようになりたい人。

## 動機

恥ずかしがる必要はないと思いつつ恥ずかしながら、筆者と筆者のチームはまだ稀にCOBOLの保守作業をすることがある。先日若者に「COBOLのソースの中のAUTHORという文言がコメントアウトされていないがこれは何なのか？」と聞かれショックを受けた。

助けてGoogle先生...。

https://ja.wikipedia.org/wiki/COBOL

> COBOLのプログラムは、次の4つのDIVISIONをこの順番で記述するのが基本となっている。

> **IDENTIFICATION DIVISION……見出し部**
ENVIRONMENT DIVISION……環境部
DATA DIVISION……データ部
PROCEDURE DIVISION……手続き部

```抜粋hoge.ccb
       IDENTIFICATION    DIVISION.
       PROGRAM-ID.       HOGE010.
       AUTHOR.           HOGEHOGE
```

知っている人には空気のような話、つまりそれは見出し部なわけなんだが、こういう小ネタが満載のCOBOL。よくぞ聞いてくれたという思いと、こういうことをちゃんと知識として残すということも上の世代の責任かもしれないな（？）と思い、書くことにしました。


## [COBOLとは](https://ja.wikipedia.org/wiki/COBOL)

- 事務計算処理向けに開発された言語。
- 名前は「Common Business Oriented Language」（共通事務処理用言語）に由来するらしい。
- [バッチ処理](https://qiita.com/koduki/items/e90ee1fea5aa75071d95) で活躍してきた。
- 小数点演算に強い。
    - 事務計算においては1円の誤差も許されないし、大げさでなくその誤差が損害賠償問題になる故、金額を扱うプログラム界隈でよく使われてきた。
    - COBOLは[二進化十進数](https://ja.wikipedia.org/wiki/%E4%BA%8C%E9%80%B2%E5%8C%96%E5%8D%81%E9%80%B2%E8%A1%A8%E7%8F%BE) で計算を行うため小数点演算が他言語よりも強力にサポートされている。他言語の多くは[浮動小数点演算](https://ja.wikipedia.org/wiki/%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0)。
- 文法が英語に近く、またソースの初めから順番に処理を行う構造である。
    - このためプログラム経験者でなくとも意味がわかりやすくかつ読みやすい、とは言われる。
- ファイル [例](https://engineer-club.jp/cobol-perform#-PERFORM)
    - **.cbl**, **.ccb** COBOLソースファイル
    - **.cpy** コピーファイル
    - **.inc** インクルードファイル

### [そんなCOBOLの処理とは](https://engineer-club.jp/cobol-perform)

```ccb
PERFORM     ＜手続き名＞
```

> ＜手続き名＞で記述された処理を1回実行します。

```
PERFORM     ＜手続き名＞     UNTIL   ＜終了条件＞
```

> 例：PERFORM     ＜手続き名＞     UNTIL   END-FLG = “END”
＜手続き名＞で記述された処理を「END-FLG」に「END」が入力されるまで繰り返します。


```
PERFORM     ＜繰り返す回数＞   TIMES
```

> 例：PERFORM   5   TIMES
            ADD  3  TO  WRK-NUM
      END-PERFORM.

> 5回繰り返します。

アルゴリズムそのままの手続き型。なのでフローチャートが書ければ、およそ書ける。他参考。

http://www16.plala.or.jp/hiyokogumi/3/300.html


### そんなCOBOLのHello world、[Fizzbuzzとは](https://ja.wikipedia.org/wiki/COBOL#%E5%AE%9F%E4%BE%8B4_(Fizz_Buzz))

```hello1.ccb
000010 IDENTIFICATION                   DIVISION.
000020 PROGRAM-ID.                      SAMPLE-01.
000030*
000040 ENVIRONMENT                      DIVISION.
000050*
000060 DATA                             DIVISION.
000070*
000080 PROCEDURE                        DIVISION.
000090 MAIN.
000100     DISPLAY "HEllO WORLD!"  UPON CONSOLE.
000110     STOP RUN.
```

```hello2.ccb
000100 IDENTIFICATION                   DIVISION.
000200 PROGRAM-ID.                      SAMPLE-02.
000040 ENVIRONMENT                      DIVISION.
000050*
000300 DATA                             DIVISION.
000400 WORKING-STORAGE SECTION.
000500 01 HELLO1      PIC X(15).
000600 01 HELLO2.
000700     03 FILLER  PIC X(06) VALUE 'HELLO,'.
000800     03 FILLER  PIC X(01) VALUE SPACE.
000900     03 FILLER  PIC X(06) VALUE 'WORLD!'.
001000     03 FILLER  PIC X(01) VALUE SPACE.
001100     03 FILLER  PIC 9(01) VALUE 2.
001200 PROCEDURE DIVISION.
001300     MOVE 'HELLO, WORLD! 1' TO HELLO1.
001400     DISPLAY HELLO1.
001500     DISPLAY HELLO2.
001600     STOP RUN.
```



```FizzBuzz.ccb
000100 IDENTIFICATION DIVISION.
000200 PROGRAM-ID. FIZZBUZZ.
000300 DATA DIVISION.
000400 WORKING-STORAGE SECTION.
000500 01 I           PIC 9(3).
000600 01 HENSHU-IKI  PIC X(8).
000700 PROCEDURE DIVISION.
000800     PERFORM VARYING I FROM 1 BY 1 UNTIL I > 100
000900       MOVE SPACE TO HENSHU-IKI
001000       IF FUNCTION MOD(I 3) = ZERO
001100         MOVE 'FIZZ' TO HENSHU-IKI
001200       END-IF
001300       IF FUNCTION MOD(I 5) = ZERO
001400         STRING
001500           HENSHU-IKI DELIMITED BY SPACE
001600           'BUZZ' DELIMITED BY SIZE
001700           INTO HENSHU-IKI
001800         END-STRING
001900       END-IF
002000       IF HENSHU-IKI = SPACE
002100         MOVE I(3 - FUNCTION INTEGER(FUNCTION LOG10(I)):)
002200           TO HENSHU-IKI
002300       END-IF
002400       DISPLAY HENSHU-IKI
002500     END-PERFORM.
002600     STOP RUN.
```

これらを見てお気づきだろうが、**[COBOLの予約語の数は](https://ja.wikipedia.org/wiki/%E4%BA%88%E7%B4%84%E8%AA%9E_(COBOL))非常に多い。**よく使われる英単語のかなりの数が予約語になっている。その理由として次のような点らしい。

- 英語風の記述が出来ることを原則にしているために他の言語では関数の呼び出しで処理されるようなことがすべて文で処理される。そのため、関数名やパラメータに相当するものまですべて予約語になる。
- 他の言語では記号で書かれるものまで英単語で書く手段を用意するために予約語としている。
    - 「PICTURE」と「PIC」のように、正規形と短縮形が、どちらも予約語とされている。
    - 「ZERO」と「ZEROS」のように、単数形と複数形が、どちらも予約語になっている場合がある。


## COBOLの過去記事

つまりなにかと見てくれは良くないが、普通に色々できる奴なのである。

https://qiita.com/FPC_COMMUNITY/items/4e4fbbdb70e6b79b5729

https://qiita.com/yut-nagase/items/bd76b6424d7d0b23221f

https://qiita.com/Yaggytter/items/397df7a85dde0ef4ae17

https://qiita.com/Keita_INAGAKI/items/6bb0551a483379a94229


## 最近のCOBOL

https://www.ibm.com/blogs/think/jp-ja/cobol-2020/

> 「COBOL＝DXの足かせ」は誤解
――COBOLを誤解して「DX のために、COBOL以外に変えるべき」と議論している企業があったとしたら、どんな提言をしますか？

> 言語には得手不得手があるので、「COBOLだから」「Javaだから」というのではなく、適材適所でシステムを構築することが一番大切だと提言します。例えば、並列処理ができない時間を要する夜間バッチをJavaや他言語に書き換える場合は、性能面でのリスクを考慮しなければならないなど、メリット、デメリットを把握したうえで、公平な目で判断する必要があると思います。COBOLからツールで変換された、1クラスに1メソッドが定義されるようなJavaソースでは、本来のオブジェクト指向型言語の良さを享受できないと思いますし、手続き型言語をオブジェクト指向型言語に変換することは無理があります。

> COBOLで書かれたソースや人材のスキル、過去何十年にもわたる実績・経験といった、お客様が蓄積してきた資産。それを単純にJavaなどで書き換えてしまうと、場合によっては資産が継承されないことになり、企業にとって大きな損失です。

> ――全世界のトランザクションの7割がCOBOLでさばかれているという調査結果もあって、実は世の中のいろいろなところでCOBOLアプリケーションが動いています。一方で、若い人がCOBOLに触れる機会が少ないように思います。**COBOLが使えると高給だという話も聞きますが（笑）、若い人にぜひ伝えておきたい魅力はありますか？**

> COBOLのアプリケーションは膨大に積み重ねてきたものが今も残っています。ただ、技術者の年齢が高くなっていて、同時に若手が減っています。**高給かどうかはともかく（笑）、今後、若手技術者の存在価値が高まるのは間違いないでしょう。大きなチャンスとして、前向きに捉えてくれたら嬉しいですね。**

## おわりに: COBOLが秘伝のタレ化しないために

COBOL記事追記。

https://qiita.com/kaizen_nagoya/items/60596bad631956127cf8

https://qiita.com/yuichisan65/items/b8e088e5f15aa80fabcf

以下は余談。

https://logmi.jp/tech/articles/324437

> 具体的には、「ドキュメントよりも動くもの」を重視した結果、「ソースコードを読めばわかる」仕様になっていたり、少数精鋭の少数もいいところで、プロジェクトが1人メンバーという「ぼっちプロジェクト」と呼ばれるプロジェクトもあったりしました。


なんて、それは少々悲しい話なので、この記事で秘伝のタレ化を防げたら。そのためには今より少しだけCOBOLに興味を持ち、COBOLを完全理解して、COBOLをちょっと読んだり書いたりしてみたいな、という気持ちに少しでもなっていただけたら、さいわいです。
