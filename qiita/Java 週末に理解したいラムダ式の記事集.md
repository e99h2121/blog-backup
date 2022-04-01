今更感あふれるがまとめておきたかったラムダ式にまつわる記事集。これだけ読んでおけとしたかったもの。
[Java8のラムダ式を理解する - Qiita](https://qiita.com/sano1202/items/64593e8e981e8d6439d3)

> ラムダ式とはインターフェースを実装したインスタンスを生成する式

[ラムダ式 - Qiita](https://qiita.com/Yuki_312/items/d14665b53fc6dccf11f4)

```Java:java
// Java7 non-Lambda
Runnable r = new Runnable() {
  public void run() {
    System.out.println("Hello world!");
  }
};
r.run();

// Java8 Lambda
Runnable r2 = () -> System.out.println("Hello world!");
r2.run();
```


## Project Lambda

[OpenJDK: Project Lambda](https://openjdk.java.net/projects/lambda/)

## 記事

https://qiita.com/sivertigo/items/8f61f02f7c84b786697a

https://qiita.com/sano1202/items/64593e8e981e8d6439d3

https://qiita.com/takumi-n/items/369dd3fcb9ccb8fcfa44

https://qiita.com/kuryus/items/820bdf48cc341a6445f0

https://qiita.com/yonetty/items/24d9a075bf630b1b096f

https://enterprisegeeks.hatenablog.com/entry/2014/10/20/085500


## 関連トピック

https://qiita.com/flyaway/items/16b1a54e8f3ecea609a9#%E6%A1%883-guava%E3%81%AEmapstransformvalues%E3%82%92%E4%BD%BF%E3%81%86

https://www.iandprogram.net/entry/2015/02/08/181600#1-%E3%83%A9%E3%83%A0%E3%83%80%E5%BC%8F%E3%82%92%E7%94%A8%E3%81%84%E3%82%8B%E6%96%B9%E6%B3%95Java8%E4%BB%A5%E9%99%8D

https://qiita.com/sparklingbaby/items/f6f3ce92dc13a9d8fc07

本当にこれだけ。以上です～


