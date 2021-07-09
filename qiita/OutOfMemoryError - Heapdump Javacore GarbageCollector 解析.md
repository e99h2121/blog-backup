---
title: OutOfMemoryError - Heapdump Javacore GarbageCollector 解析
tags: Java OutOfMemoryError トラブルシューティング
author: e99h2121
slide: false
---
## OutOfMemoryErrorが出ました
と言ったときに何を確認しようとしているのかの概観です。

(class名) が犯人ですかね？等聞かれます。説明しないといけません。で最終的にはお客様にまで説明するに当たり「こういったメニュー上のどういった操作がトリガーで」ウニャウニャと格好良く説明できたら良いのですが、色んな事情でプログラム側もそれほど単純ではない。ので人間の、とりわけ非技術者も含めて理解できる言葉で説明できるほどの原因に絞り込むのがなかなか難儀です。

## では実際は何が起こっているのか

弊社提供のアプリケーション上では主に「アプリケーションサーバ」でOOMEさんとよく出会います。OOM...実際にメモリ内で何が起こっているのかについてどう説明するのがより的確なのか、どうやって「犯人」あるいは「容疑者」を絞り込み、トラブル関係者にそれなりに納得の行かせるところまでうそぶくこと無く落とし込んで説明するのが良いのかまとめます。

なお当記事は主にプログラム提供者目線で書いているので、「プログラム以外」の側から原因追求はあまり行いません。

### 1.OOME の種類
- ヒープ領域が足りなくなった。
- Full GC が高頻度で実行された。
- スレッドを大量に作りすぎてネイティブメモリが足りなくなった。

etc...いろいろな言われ方をされますが、つまりはいずれか。

> 1. 単純にメモリが足りていない。（プログラムの周りの問題）
> 1. プログラムに問題があり、メモリの解放忘れや不要なオブジェクトの大量生成などが発生している。（プログラム側の問題）

引用：[OutOfMemoryErrorの調べ方](https://qiita.com/opengl-8080/items/64152ee9965441f7667b)
です。で「実際にどの辺の処理が悪かったのか？」、原因となる箇所は一つとは限らない。なので、まずは、時系列でどうメモリが推移しているのか俯瞰してみます。

### 2.ガベージコレクタ
そのためには、[Gcの仕組み](https://www.atmarkit.co.jp/ait/articles/0404/02/news079.html)を先に。
> JVMにGCを適切に行わせるにはヒープサイズを適切に設定（New領域サイズ、Old領域サイズ、領域サイズのバランスなど）する必要があります。当然、適切なヒープサイズはアプリケーションに依存します。**一般にヒープサイズが小さいとGCが頻発してアプリケーションのパフォーマンスが低下します。**さらに、ヒープサイズが必要量を下回る場合はOutOfMemoryErrorが発生してアプリケーションが停止してしまいます。**一方、ヒープサイズが大きいと、GCの起動回数は減りますが、GC1回当たりの処理時間、すなわちアプリケーション停止状態が長くなり、アプリケーションの応答時間に問題が出る場合もあります。**

上の設定は前提事項として、主にプログラムの提供者目線で、回答していきます。

### 3.理解した上で [Gcログを確認する](https://qiita.com/opengl-8080/items/64152ee9965441f7667b#gc-%E3%83%AD%E3%82%B0%E3%82%92%E3%82%B0%E3%83%A9%E3%83%95%E3%81%A7%E7%A2%BA%E8%AA%8D%E3%81%99%E3%82%8B)

なんらか跳ね上がっているタイミングがあれば、そこに目をつけます。1箇所とは限らない。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/da375b76-7d59-8ff0-cabe-c33f809dd09d.png)


### 4.[LeakSuspects](https://qiita.com/opengl-8080/items/64152ee9965441f7667b#leak-suspects-report)

その問題の時点ピンポイントで、何が疑わしいのか確認することになります。Heapdump等見ます。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/a57bcce4-ee9a-4ce5-21bc-5322b177aab0.png)

### 5.お客様業務上の操作ログ
などがあれば、掛け合わせて、「こういったメニュー上のどういった操作がトリガーである可能性が高いです」という説明に近づけることを目指します。


### 6.必要なログ・解析ツール
ここまでの説明を揃えるには、標準出力、標準エラー出力と、以下ツール。

#### Memory Analyzer
https://www.eclipse.org/mat/

http://artificialworlds.net/blog/2016/02/23/how-to-analyse-a-phd-heap-dump-from-an-ibm-jvm/

#### JProfiler
https://www.ej-technologies.com/products/jprofiler/overview.html

#### IBM Java の場合
[Java Platform, Enterprise Edition アプリケーションでのハング・スレッド](https://www.ibm.com/support/knowledgecenter/ja/SSEQTP_9.0.5/com.ibm.websphere.base.doc/ae/ctrb_hangdetection.html)

``` SystemOut.log例
WSVR0605W: Thread threadname has been active for
hangtime and may be hung.  There are totalthreads threads in total in the server that may be hung.
```

>ここで、threadname は JVM スレッド・ダンプ内に表示される名前であり、 hangtime はスレッドがアクティブになってからの概算経過時間を示し、 totalthreads はシステム・スレッドの全体的な評価を示します。

[IBM Heap Analyzer](https://www.ibm.com/support/pages/ibm-heapanalyzer)
[IBM Thread and Monitor Dump Analyzer for Java (TMDA)](https://www.ibm.com/support/pages/ibm-thread-and-monitor-dump-analyzer-java-tmda) 
[IBM Pattern Modeling and Analysis Tool for Java Garbage Collector (PMAT)](https://www.ibm.com/support/pages/ibm-pattern-modeling-and-analysis-tool-java-garbage-collector-pmat) 

これらを GC が起こっているタイミング + 標準出力等で確認。
他、ユーザ操作のわかるログがあると、比較的人間の言葉に近づいた説明ができます。

## 実験用

```OOMReproducer.java
	/**
	 * リストに大量のStringBufferを溜め込むことで
	 * java.lang.OutOfMemoryError
	 * を起こすメソッド。kiloByte指定を良い単位で変えてあげて試す。
	 * ================================================
	 */
	private static void OutOfMemoryByManyStringBuffer(int kiloByte){
		ArrayList list = new ArrayList();
		for (int i=0; i<kiloByte; i++){
			StringBuffer sb = new StringBuffer(getKbString());
			list.add(sb);
		}
	}
	private static String getKbString() {
		return 
		"1111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000" +
		"1111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000" +
		"1111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000" +
		"1111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000" +
		"1111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000" +
		"1111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000" +
		"1111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000" +
		"1111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000" +
		"1111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000" +
		"1111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000" 
		;
	}
```


## まとめ
[OutOfMemoryError の調べ方](https://qiita.com/opengl-8080/items/64152ee9965441f7667b)
[Gcの仕組み](https://www.atmarkit.co.jp/ait/articles/0404/02/news079.html)
[Java開発の性能改善！ その３ ヒープダンプを取ろう](https://qiita.com/i_matsui/items/0d1ae2c7e9d17b6c04e0)
[How do I analyze a hprof file](https://stackoverflow.com/questions/185893/how-do-i-analyze-a-hprof-file)



