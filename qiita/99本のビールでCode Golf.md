ビールが好きです。
99 Bottles of Beerという有名なお題があるようなので今日はそのCode Golfの話。

## [Code Golfとは](https://qiita.com/ymg_aq/items/b8e5d26035180bc8797e#code-golf-%E3%81%A8%E3%81%AF)
>コードゴルフはコンピュータプログラミング・コンテストの一種。参加者は与えられたアルゴリズムを、可能な限りもっとも短いソースコードで記述することを競う[1]。バイナリサイズではなく、ソースコードの文字数がスコアとなる
[Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%BC%E3%83%89%E3%82%B4%E3%83%AB%E3%83%95)

例えばFizzBuzz問題のCode Golf解説が[こちら](https://qiita.com/ymg_aq/items/b8e5d26035180bc8797e)

なのですが、Code Golfのお題が大量にあるのを見つけた。
それがこれ。https://code.golf/

## [99 bottles of beer](https://rosettacode.org/mw/index.php?title=99_bottles_of_beer&redirect=no) 
Display the complete lyrics for the song:     99 Bottles of Beer on the Wall.
→「"99 Bottles of Beer on the Wall." の歌詞を表示するプログラムを書け」ということなのですね。

https://code.golf/99-bottles-of-beer#java

```Beer.java
import java.text.MessageFormat;
 
class Beer {
    static String bottles(int n) {
        return MessageFormat.format("{0,choice,0#No more bottles|1#One bottle|2#{0} bottles} of beer", n);
    }
 
    public static void main(String[] args) {
        String bottles = bottles(99);
        for (int n = 99; n > 0; ) {
            System.out.println(bottles + " on the wall");
            System.out.println(bottles);
            System.out.println("Take one down, pass it around");
            bottles = bottles(--n);
            System.out.println(bottles + " on the wall");
            System.out.println();
        }
    }
}
```
とか書いていく。安直には以下みたいな感じ。
ポイントとしては歌詞の最後のほう 1 は`bottles`ではなくて`bottle`だしNo more以下の歌詞をどう処理するかです。

```Beer.java
import java.text.MessageFormat;
 
class Beer {
    static String bottles(int n) {
        return MessageFormat.format("{0,choice,0#no more bottles|1#1 bottle|2#{0} bottles} of beer", n);
    }
 
    public static void main(String[] args) {
        String bottles = bottles(99);
        for (int n = 99; n > 0; ) {
            System.out.println(bottles + " on the wall, " + bottles+".");
            bottles = bottles(--n);
            System.out.println("Take one down and pass it around, "+ bottles + " on the wall.");
            System.out.println();
        }
        System.out.println("No more bottles of beer on the wall, no more bottles of beer.");
        System.out.println("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
}
```

## 実行
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/f6c5d974-7021-4d98-e8a4-d55eef3660c5.png)

とか、お題はクリアできるのだけどランクインするためにはもう少し削らないといけない。

## 結果
```Beer.java
import java.text.MessageFormat; 
class Beer {
static String b(int n) {
return MessageFormat.format("{0,choice,0#no more bottles|1#1 bottle|2#{0} bottles} of beer", n);
}
public static void main(String[] args) {
String b = b(99);
for (int n = 99; n > 0;) {
System.out.println(b + " on the wall, " + b+".");
b= b(--n);
System.out.println("Take one down and pass it around, "+ b+ " on the wall.\n");
}
System.out.println("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");}
}
```
とか小賢しい感じに削ると、とりあえず14位になったよ。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/ee2bae21-f155-b236-8f6e-581393673f57.png)

今日は以上～～！
