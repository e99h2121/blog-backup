タイトルに言いたいことは書いてありますが、Javaアンチパターンの小話です。

## finalize()

https://qiita.com/Shrimpman/items/56bfbfc44454e3096da5#no8-finalize%E3%82%92override

> Objectクラスのfinalizeメソッドは、そのObjectに対する参照がなくなり
ガベージコレクタにより破棄対象として回収された時に実行されますよね。
そのfinalizeメソッドをオーバーライドして処理を書いていたから困ったものです。
処理が実行されたりされなかったり、いつ呼ばれるかもわからないなんてことになっていました。

[Javaでやってはいけないこと – finalizeメソッドを使う | javalife](https://www.javalife.jp/2017/12/16/post-35/)
finalize メソッドを呼んでもオブジェクトは解放されません。以下ダメな例。

```FinalizeTest.java
public class FinalizeTest {
 
    public void execute() {
        //データベース接続
        openDatabase();
        //SQL発行等の処理
        ・・・
    }
 
    @Override
    protected void finalize() throws Throwable { //これを書いてはいけない
        //データベース接続の解放
        closeDatabase();    
    }
}
```

以下が正しい例。finalizeメソッドをオーバーライドするのではなく、処理が終わったら、接続を解放する。

```FinalizeTest.java
public class FinalizeTest {
 
    public void execute() {
 
        try {
            //データベース接続
            openDatabase();
 
            //SQL発行等・・・
            ・・・
        } finally {
            //データベース接続の解放
            closeDatabase();    //OK
        }
    }
}
 
```


## System.gc()

以下も、gcの誤った利用例について記載されています。

https://qiita.com/momosetkn/items/e5ff2a8f6c11b959735c#%E3%82%AC%E3%83%99%E3%83%BC%E3%82%B8%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E5%BC%B7%E5%88%B6%E7%9A%84%E3%81%AA%E5%AE%9F%E8%A1%8C%E3%81%A8%E7%84%A1%E5%8A%B9%E5%8C%96


## 参考
[IBMのWASはJVMやGCをどのように扱っているのか？](http://www.atmarkit.co.jp/fjava/rensai4/websphere03/websphere03_1.html)
いずれも今更な内容なのですが [OutOfMemoryError - Heapdump Javacore GarbageCollector 解析](https://qiita.com/e99h2121/items/c63608f5471c6ba595c0) と合わせてまとめ。

参考になればさいわいです。
