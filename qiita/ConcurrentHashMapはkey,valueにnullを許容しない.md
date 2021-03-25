ConcurrentHashmapはHashMapをスレッドセーフにしたものだけどちょっと違うところもあるよというメモ。

基本: 
[Map](https://docs.oracle.com/javase/jp/8/docs/api/java/util/Map.html)
[なんとかMapの違い](https://qiita.com/Luecy1/items/4784418a52d3490b5269)


## HashMap

[nullを許容する](https://qiita.com/icelandnono/items/17b5141aaa53a73ce612)。 
[スレッドセーフでない](https://qiita.com/e99h2121/items/88d5579a8ce670061468)。

## ConcurrentHashMap

排他制御を達成するために [java1.5から追加された](https://qiita.com/YanHengGo/items/21ca9408fb59ddb7a566)。
が、nullを許容しない。

```ConcurrentHashMap.java
    /**
     * Maps the specified key to the specified value in this table.
     * Neither the key nor the value can be null.
     *
     * <p> The value can be retrieved by calling the <tt>get</tt> method
     * with a key that is equal to the original key.
     *
     * @param key key with which the specified value is to be associated
     * @param value value to be associated with the specified key
     * @return the previous value associated with <tt>key</tt>, or
     *         <tt>null</tt> if there was no mapping for <tt>key</tt>
     * @throws NullPointerException if the specified key or value is null
     */
    public V put(K key, V value) {
        if (value == null)
            throw new NullPointerException();
        int hash = hash(key.hashCode());
        return segmentFor(hash).put(key, hash, value, false);
    }
```


例:

```Sample1.java
        ConcurrentHashMap map = new ConcurrentHashMap();
        map.put("test", null);
```
```
Exception in thread "main" java.lang.NullPointerException
	at java.util.concurrent.ConcurrentHashMap.put(ConcurrentHashMap.java:881)
	at playground.Sample1.main(Sample1.java:9)
```

```Sample2.java

        ConcurrentHashMap map = new ConcurrentHashMap();
        map.put(null, "test");
```

```
Exception in thread "main" java.lang.NullPointerException
	at java.util.concurrent.ConcurrentHashMap.put(ConcurrentHashMap.java:882)
	at playground.Sample2.main(Sample2.java:12)
```


## 結果

HashMap→ConcurrentHashmap置換時にこういうことをしたソースが存在する。

```Realcode.java
        if (inputvalue == null) {
            return;
        }

```
