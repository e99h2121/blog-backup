httpcore-4.4.4 では使用可能だが httpcore-4.4.5 から削除されたannotation

`@ThreadSafe`, `@NotThreadSafe` に関する置換メモ。


Release Note:
https://archive.apache.org/dist/httpcomponents/httpcore/RELEASE_NOTES-4.4.x.txt 

httpcore ThreadSafe class not found solution:
https://dev-aux.com/java/org-apache-http-annotation-threadsafe-class-not-found


## 置換

@ThreadSafe class not found compilation error occurs after updating your org.apache.httpcomponents:httpcore dependency version to 4.4.11 or above.
@NotThreadSafe 

```
org.apache.http.annotation.Immutable
org.apache.http.annotation.NotThreadSafe
org.apache.http.annotation.ThreadSafe
```
削除されたこれらの代わりに、`org.apache.http.annotation.Contract` と`org.apache.http.annotation.ThreadingBehavior` enum が導入された。

よって `@ThreadSafe` を `org.apache.http.annotation.Contract` に置換し、`ThreadingBehavior` enumの値`SAFE`を渡せば、スレッドセーフな動作規約を指定できる。


## 例
```
@Contract(threading = org.apache.http.annotation.ThreadingBehavior.SAFE)
```

等々。

同じく `@NotThreadSafe` は `@Contract(threading = org.apache.http.annotation.ThreadingBehavior.UNSAFE)`

`@Immutable` は `ThreadingBehavior.IMMUTABLE` あるいは `IMMUTABLE_CONDITIONAL`

以下も参考: 
https://hc.apache.org/httpcomponents-core-ga/httpcore/clirr-report.html
