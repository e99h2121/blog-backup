null安全でない言語は、もはやレガシー言語だ

https://qiita.com/koher/items/e4835bd429b88809ab33

という少し前の記事を読んだのですが、依然そんなレガシー言語と日々対峙していて改めてnullにまつわる話を見つけたので改めて向き合ってみた話。

## Javaにおける null にまつわる興味深い事実 - Interesting facts about null in Java

https://www.geeksforgeeks.org/interesting-facts-about-null-in-java/

> ほとんどのプログラミング言語はnullとの戦いである。nullに悩まされないプログラマーはいない。
Javaでは、nullは`java.lang.NullPointerException`と関わる。それは`java.lang`パッケージ内のクラス。nullを使用したり使用しなかったりして何らかの操作を行おうとすると呼び出され、時にはどこで起こったのかさえわからないこともある。

で、Javaプログラマーが知っておくべきJavaのnullに関する重要なポイントが以下だとのこと。ざっくり手を動かしてみた。


### 1. "nullは大文字小文字を区別する"

Javaではnullは [リテラル](https://qiita.com/koukonko/items/3331f6abe8db18d55bcc) であり、大文字小文字を区別する。小文字のみ。C言語のようにNULLや0とは書けない。

```java
// 以下はコンパイルエラー : can't find symbol 'NULL'
Object obj = NULL; 
          
// こちらは動く。
Object obj1 = null; 
```



### 2. "参照変数"

Javaでは、どの参照変数もデフォルト値はnullである。

http://ichitcltk.hustle.ne.jp/gudon2/index.php?pageType=file&id=java003_null_or_empty

```java
private static Object obj; 
public static void main(String args[]){
    // null がプリントされる
    System.out.println("Value of object obj is : " + obj);
} 

```


### 3. "nullの型"

nullはオブジェクトでもなければ型でもない。任意の参照型に割り当てることができる特別な値。
任意の型にキャストすることができる。

```java
// null は String に代入できる。
String str = null; 
    
// Integer にも代入できる。
Integer itr = null; 

// Double にも代入できる。
Double dbl = null; 
        
// String にキャストできる。
String myStr = (String) null; 
    
// Integer にキャストできる。
Integer myItr = (Integer) null; 

// はい。これもキャストできる。No error
Double myDbl = (Double) null; 
```


### 4. "オートボクシングとアンボクシング"

[オートボクシングとアンボクシング](https://qiita.com/chihiro/items/870eca6e911fa5cd8e58) の操作中、プリミティブなボクシングされたデータタイプにnull値が割り当てられた場合、NullpointerExceptionが投げられる。

```java
// Integer は null になりえる。
Integer i = null;

// こちらはヌルポ
int a = i;

```


### 5. "instanceof 演算子"

javaのinstanceof演算子は、オブジェクトが指定された型（クラスまたはサブクラスまたはインターフェース）のインスタンスであるかどうかをテストするために使用される。実行時、式の値がnullでなければ、instanceof演算子の結果はtrueになる。

```java

Integer i = null;
Integer j = 10;
String s = "10";

// false
System.out.println(i instanceof Integer);
// true
System.out.println(j instanceof Integer);
// これはコンパイルエラー
//System.out.println(s instanceof Integer);
```

 
### 6. "staticメソッドとnon-staticメソッド"

null値を持つ参照変数に対してnon-staticメソッドを呼び出すことはできない。NullPointerExceptionが投げられる。staticメソッドは、staticバインディングを使用して結合されているので、NullPointerExceptionを投げることはない。

https://qiita.com/kome_ha/items/585c4ba7515bb9b6f019

```java

App obj= null;
obj.staticMethod();
obj.nonStaticMethod();     

private static void staticMethod(){
    System.out.println("static method. ");
}
          
private void nonStaticMethod() {
    System.out.println(" Non-static method. ");
}

```


### 7. "== と != "

Javaでは、比較演算子はnullと一緒に使うことができる。これによりnullをチェックする。

```java

// true
System.out.println(null==null);
// false
System.out.println(null!=null);

```


```java
if(s==null || s.equals("")){
```
上記のコードのnullまたは空文字であるかの判定条件の順序を逆にすると、値がnullの場合に実行時エラーが発生する。



### 全体

```App.java
public class App {
    static Object _obj; 

    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        func1();
        func2();
        func3();
        func4();
        func5();
        func6();
        func7();
    }
    private static void func1() {
        // 以下はコンパイルエラー : can't find symbol 'NULL'
        // Object obj = NULL; 
          
        // こちらは動く。
        Object obj1 = null; 
        System.out.println("事実1: null は小文字。Case sensitive.");
    }
    private static void func2() {
        // "null" がプリントされる。
        System.out.println("事実2: どの参照変数もデフォルト値は null。Object _obj の値は : " + _obj);
    }
    private static void func3() {
        // null は String に代入できる。
        String str = null; 
        System.out.println("事実3: "+str+"は任意の型にキャストすることができる。");
    
        // Integer にも代入できる。
        Integer itr = null; 
        System.out.println("なので Integer に代入しても" + itr);

        // Double にも代入できる。
        Double dbl = null; 
        System.out.println("Double に代入しても" + dbl);
        
        // String にキャストできる。
        String myStr = (String) null; 
        System.out.println("String にキャストしても" + myStr);
    
        // Integer にキャストできる。
        Integer myItr = (Integer) null; 
        System.out.println("Integer にキャストしても" + myItr);
    
        // うん。これもキャストできる。No error
        Double myDbl = (Double) null; 
        System.out.println("Double にキャストしても" + myDbl);
    }
    private static void func4() {
        // Integer は null になりえる。
        Integer i = null;
              
        // オブジェクトを値型に戻す。Unboxing null to integer throws NullpointerException
        // Exception in thread "main" java.lang.NullPointerException: Cannot invoke "java.lang.Integer.intValue()" because "i" is null
        //   at App.func4(App.java:48)
        //   at App.main(App.java:7)
        
        // https://ja.wikipedia.org/wiki/ボックス化
        // https://qiita.com/chihiro/items/870eca6e911fa5cd8e58
        try {
            int a = i;
        } catch (NullPointerException e) {
            System.out.println("事実4: アンボクシング時にNullPointerException。");
            System.out.println("--------------------------------------------------------------------------------");
            e.printStackTrace();
            System.out.println("--------------------------------------------------------------------------------");
        }
    }
    private static void func5() {
        Integer i = null;
        Integer j = 10;
              
        // false がプリントされる
        System.out.println("事実5: 値がnullでなければ、instanceof演算子の結果はtrue。nullでは"); 
        System.out.println("--------------------------------------------------------------------------------");
        System.out.println(i instanceof Integer);
        System.out.println("--------------------------------------------------------------------------------");
          
        // もちろん true
        System.out.println("こちらは");
        System.out.println("--------------------------------------------------------------------------------");
        System.out.println(j instanceof Integer);
        System.out.println("--------------------------------------------------------------------------------");

        // これはコンパイルエラー
        //System.out.println(s instanceof Integer);

    }

    private static void func6(){
        App obj= null;
        obj.staticMethod();
        try {
            obj.nonStaticMethod();     
        } catch (NullPointerException e) {
            System.out.println("こちらは例外を投げる。");
            System.out.println("--------------------------------------------------------------------------------");
            e.printStackTrace();
            System.out.println("--------------------------------------------------------------------------------");
        }
    }
    private static void staticMethod(){
        System.out.println("事実6: static method。null 参照静的メソッドは、静的バインディングを使用して結合されているので、NullPointerExceptionを投げない。");
    }
          
    private void nonStaticMethod() {
        System.out.println(" Non-static method- ");
    }

    private static void func7(){
        // trueを返す。
        System.out.println("事実7: 比較演算子はnullと一緒に使うことができる。");
        System.out.println("だからこれは ");
        System.out.println(null==null);
        // falseを返す。
        System.out.println("これは ");
        System.out.println(null!=null);
    }
}
```


### その出力

```

PS C:\Users\s5551>  & 'c:\Users\s5551\.vscode\extensions\vscjava.vscode-java-debug-0.33.1\scripts\launcher.bat' 'C:\Program Files\Java\jdk-16.0.1\bin\java.exe' '--enable-preview' '-XX:+ShowCodeDetailsInExceptionMessages' '-Dfile.encoding=UTF-8' '-cp' 'C:\Users\s5551\AppData\Local\Temp\vscodesws_de01f\jdt_ws\jdt.ls-java-project\bin' 'App' 
Hello, World!

事実1: null は小文字。Case sensitive.
事実2: どの参照変数もデフォルト値は null。Object _obj の値は : null
事実3: nullは任意の型にキャストすることができる。
なので Integer に代入してもnull
Double に代入してもnull
String にキャストしてもnull
Integer にキャストしてもnull
Double にキャストしてもnull
事実4: アンボクシング時にNullPointerException。
--------------------------------------------------------------------------------
java.lang.NullPointerException: Cannot invoke "java.lang.Integer.intValue()" because "i" is null
        at App.func4(App.java:63)
        at App.main(App.java:9)
--------------------------------------------------------------------------------
事実5: 値がnullでなければ、instanceof演算子の結果はtrue。nullでは
--------------------------------------------------------------------------------
false
--------------------------------------------------------------------------------
こちらは
--------------------------------------------------------------------------------
true
--------------------------------------------------------------------------------
事実6: static method。null 参照静的メソッドは、静的バインディングを使用して結合されているので、NullPointerExceptionを投げない。
こちらは例外を投げる。
--------------------------------------------------------------------------------
java.lang.NullPointerException: Cannot invoke "App.nonStaticMethod()" because "obj" is null
        at App.func6(App.java:92)
        at App.main(App.java:11)
--------------------------------------------------------------------------------
事実7: 比較演算子はnullと一緒に使うことができる。
だからこれは
true
これは
false

```

## まとめ

Javaに対する私の最近の感想は以下。

https://qiita.com/e99h2121/items/c51d2b7b802a36a97c4f

冒頭の「[レガシー言語だ](https://qiita.com/koher/items/e4835bd429b88809ab33)」記事、コメントの議論も色々面白かった。同じ意味で「はてぶ」のコメントも興味深いのでメモとして貼っておく。

https://b.hatena.ne.jp/entry/s/qiita.com/koher/items/e4835bd429b88809ab33

まあそんな変な話題から入ってしまったが、とはいえJavaも日々進化は続いていて、その挾間でサラリーマンJava開発者（私）は色々複雑な気持ちになる。闇と光。

https://qiita.com/YujiSoftware/items/5975c0a93f5e58f6b9cf

https://qiita.com/YujiSoftware/items/cac5f34a1b4ea1d2d434

https://qiita.com/nowokay/items/215769cdcb14d6c5412f

https://qiita.com/YujiSoftware/items/043d9e54d1d9a98584da

https://qiita.com/disc99/items/727b51dbe737602a5c91

Javaどうなってゆくのでしょうねえと既に連休明けを思い浮かべて悶々としつつ...。以上なにがしかお楽しみいただけたらさいわいです。
