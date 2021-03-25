以下のような `HashMap` へのログが観測されたら


```Sample1.log
	at java.util.HashMap.findNonNullKeyEntry(HashMap.java:605)
	at java.util.HashMap.putImpl(HashMap.java:701)
	at java.util.HashMap.put(HashMap.java:684)
	at zzz.yyy.xxx.setSomething(SomeUtil.java:nnn)
```


```Sample2.log
	at java.util.HashMap$TreeNode.putTreeVal(HashMap.java:2013)
	at java.util.HashMap.putVal(HashMap.java:648)
	at java.util.HashMap.put(HashMap.java:622)
	at zzz.yyy.xxx.setSomething(SomeUtil.java:nnn)
```

例の場合、`SomeUtil.java` を見ましょう or 開発者に見てもらいましょう。

HashMap は適切に排他制御をして使えているでしょうか。


### HashMapおさらい

- [HashMapでOutOfMemoryErrorが発生するケース](http://wadahiro.hatenablog.com/entry/20110926/1317066552)
- [HashMapと無限ループとsynchronized](https://cero-t.hatenadiary.jp/entry/20091126/1259254839)
- [ThreadとHashMapに潜む無限回廊は実に面白い？](https://www.atmarkit.co.jp/ait/articles/0803/28/news141.html)
- [マルチスレッドでのstatic HashMap.put()で無限ループ](http://ooohooohoooh.blogspot.jp/2011/03/static-hashmapput.html)
- [High CPU / Hang on java.util.HashMap.findNonNullKeyEntry() due to non-thread-safe usage of HashMap](https://www.ibm.com/support/pages/node/205535)

### 排他制御おさらい
- [排他制御のあれこれ](https://qiita.com/opengl-8080/items/fa22f46d7bf35fa45c21)
- [新人に悲観ロックによる排他制御を体験してもらう](https://qiita.com/5zm/items/cc33fa9f591892222153)
