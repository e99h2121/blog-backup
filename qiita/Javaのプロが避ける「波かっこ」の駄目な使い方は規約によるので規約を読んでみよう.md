[Java Advent Calendar 2020](https://qiita.com/advent-calendar/2020/java) 14日めの記事です。
ERPパッケージソフトの保守、開発をしています。[本業はこちら](https://qiita.com/e99h2121/items/d9a83a6e47a53dcfbfbd)
もっと真面目にOOMEが起こったときの実用記事を書くつもりでいたのだが表題のような記事を拝見して考えた。

「**[Javaのプロが避ける「波かっこ」の“駄目”な使い方とは？](https://techtarget.itmedia.co.jp/tt/news/2012/12/news01.html#utm_term=share_sp) より適切なプログラミングを目指して** 」

"駄目" がパワーワード過ぎて、もしかして釣りなのか？あるいは、とそのうち消されてしまうのではないかという心配すら感じつつ、考えてみました。

## 結論
標準的な規約や、他所様のスタイルガイドを見てみるというのも発見があります。以下3つほど。
### 1. オブジェクト倶楽部 Javaコーディング標準
http://objectclub.jp/community/codingstandard/CodingStd.pdf
> コーディングスタイルは，Sun Microsystems, Inc の JDK ソースに準じる．インデンテ
ーションは基本的に K&R の C 言語スタイルと同じだが，クラスおよびメソッドの定義開
始の”{“を改行せずに書く．

### 2. Google
https://google.github.io/styleguide/javaguide.html#s4.1-braces
引用：

```Examples.java
// This is acceptable
void doNothing() {}

// This is equally acceptable
void doNothingElse() {
}

// This is not acceptable: No concise empty blocks in a multi-block statement
try {
  doSomething();
} catch (Exception e) {}
```

### 3. Cookpad
https://github.com/cookpad/styleguide/blob/master/java.ja.md#braces
引用：

> [MUST] 直前にトークンがある場合は中括弧で行を始めてならない。中括弧はそのトークンと同じ行に置くようにすること。

```Examples.java
// good
class MyClass {
    int func() {
        if (something) {
            // ...
        } else if (somethingElse) {
            // ...
        } else {
            // ...
        }
    }
}

// bad
class MyClass
{
    int func()
    {
        if (something)
        {
            // ...
        }
        else if (somethingElse)
        {
            // ...
        }
        else
        {
            // ...
        }
    }
}
```

> [MUST] 条件文には中括弧を付けること。

```Examples.java
// good
if (condition) {
    body();
}

// bad
if (condition)
    body();
```

だから、「プログラミング初心者」だと思うなら、もちろんそうでなくても規約を読むと発見があるよ！です。


## [元記事の冒頭](https://techtarget.itmedia.co.jp/tt/news/2012/12/news01.html#utm_term=share_sp)
プログラミング言語によって大きく違うのが、「波かっこ」（「ブレース」「中かっこ」とも）の使い方、だという。いや波括弧を使うか使わないかなんて言語の仕様だから使う側（コーディングする側）としては使うも何も従っているだけだ。[Delphi](https://qiita.com/e99h2121/items/0aba0ce4b5b4d1c27505) ならbegin ~ end だしというような。

主に Twitter上なので心もとないところはあるが、いろいろな意見。
https://ceron.jp/url/techtarget.itmedia.co.jp/tt/news/2012/12/news01.html

- コードスタイルを使えば書き方を強制できる。
- 顰蹙もなにもコーディング規約による。カッコの対応自体が取れていなければコンパイルできない。
- 偏見だと思う。
- 宗教戦争...

等。


### 例えば

以下のようなのはビギナーの例だと述べられている。確かにメジャーではない。

```Beginner.java
public void flag()
{
  boolean flg = true;
  int i = 10;
  if (flg == true)
  {
    for (int i = 0; i < 10; i++)
    {
      System.out.print("flag is true");
    }
  }
  flg = false;
}
```

### 一方で
> 経験を積んだエンジニアが取るアプローチは、コードブロックの開始行の末尾に左波かっこを置くというものだ。

>上述のソースコードを一般的なコードレビューに合格させるには、次のように整形する必要があるだろう（「flag == true」ではなく「flag」と書くべきだという意見もある）。

さり気なく書かれている
`（「flag == true」ではなく「flag」と書くべきだという意見もある）` はカッコの話と、関係ない。



## 「良い」使い方

では、どう書くのと言うのが以下。

```Better.java
public void flag() {
  boolean flg = true;
  int i = 10;
  if (flg == true) {
    for (int i = 0; i < 10; i++) {
      System.out.print("flag is true");
    }
  }
  flg = false;
}
```

しかし「全ての左波かっこに対応する右波かっこが存在するかどうか」はコンパイラで判定されるからどっちでも良いようにも聞こえる。「非常識な記述方法で開発チーム内の他のエンジニアからひんしゅくを買う」かどうかは、チーム次第だ。

ということで結論、標準的な規約や、他所様のスタイルガイドを見てみるというのも発見があります。最低限のスタイルガイドが決まっているプロジェクトは良いプロジェクトですね。

以上でした！

## 参考
以下を参考にしつつ書きました。
[Qiitaで記事を公開するときに気を付けるべきマナーについて 〜無断でネットや書籍の内容を丸写しするのはやめよう〜](https://qiita.com/jnchito/items/215c2d51599eb29adabc)
