メモです。
主に、依存関係で既存のライブラリとの競合に気を付けないといけない。


ここまでのまとめ:
- [WindowsローカルのAWS SDKでJavaプログラムを動かすまで](https://qiita.com/e99h2121/items/7b153c12f61470ffdf48)
- [AWS SDK for Java 1.11.x と 2.x](https://qiita.com/e99h2121/items/2dd857fc5bc20796d691)

## 例外
```
software.amazon.awssdk.core.exception.SdkClientException: Unable to load an HTTP implementation from any provider in the chain. You must declare a dependency on an appropriate HTTP implementation or pass in an SdkHttpClient explicitly to the client builder.
        at software.amazon.awssdk.core.exception.SdkClientException$BuilderImpl.build(SdkClientException.java:98)
        at software.amazon.awssdk.core.internal.http.loader.DefaultSdkHttpClientBuilder.lambda$buildWithDefaults$1(DefaultSdkHttpClientBuilder.java:49)
        at java.util.Optional.orElseThrow(Optional.java:290)
        at software.amazon.awssdk.core.internal.http.loader.DefaultSdkHttpClientBuilder.buildWithDefaults(DefaultSdkHttpClientBuilder.java:43)
        at software.amazon.awssdk.core.client.builder.SdkDefaultClientBuilder.lambda$resolveSyncHttpClient$5(SdkDefaultClientBuilder.java:271)
        at java.util.Optional.orElseGet(Optional.java:267)
        at software.amazon.awssdk.core.client.builder.SdkDefaultClientBuilder.resolveSyncHttpClient(SdkDefaultClientBuilder.java:271)
        at software.amazon.awssdk.core.client.builder.SdkDefaultClientBuilder.finalizeSyncConfiguration(SdkDefaultClientBuilder.java:222)
        at software.amazon.awssdk.core.client.builder.SdkDefaultClientBuilder.syncClientConfiguration(SdkDefaultClientBuilder.java:155)
        at software.amazon.awssdk.services.ecs.DefaultEcsClientBuilder.buildClient(DefaultEcsClientBuilder.java:27)
        at software.amazon.awssdk.services.ecs.DefaultEcsClientBuilder.buildClient(DefaultEcsClientBuilder.java:22)
        at software.amazon.awssdk.core.client.builder.SdkDefaultClientBuilder.build(SdkDefaultClientBuilder.java:126)
        at software.amazon.awssdk.services.ecs.EcsClient.create(EcsClient.java:185)
```
→ [Unable to load an HTTP implementation from any provider in the chain. You must declare a dependency on an appropriate HTTP implementation or pass in an SdkHttpClient explicitly to the client builder #446](https://github.com/aws/aws-sdk-java-v2/issues/446)

netty-nio-client
apache-client
がClasspathに必要。




## NoClassDefFoundError
```
java.lang.BootstrapMethodError: java.lang.NoClassDefFoundError: org/reactivestreams/Publisher
        at software.amazon.awssdk.core.interceptor.ExecutionInterceptorChain.modifyHttpRequestAndHttpContent(ExecutionInterceptorChain.java:104)
        at software.amazon.awssdk.core.internal.handler.BaseClientHandler.runModifyHttpRequestAndHttpContentInterceptors(BaseClientHandler.java:140)
        at software.amazon.awssdk.core.internal.handler.BaseClientHandler.finalizeSdkHttpFullRequest(BaseClientHandler.java:85)
        at software.amazon.awssdk.core.internal.handler.BaseSyncClientHandler.doExecute(BaseSyncClientHandler.java:138)
        at software.amazon.awssdk.core.internal.handler.BaseSyncClientHandler.lambda$execute$1(BaseSyncClientHandler.java:107)
        at software.amazon.awssdk.core.internal.handler.BaseSyncClientHandler.measureApiCallSuccess(BaseSyncClientHandler.java:162)
        at software.amazon.awssdk.core.internal.handler.BaseSyncClientHandler.execute(BaseSyncClientHandler.java:91)
        at software.amazon.awssdk.core.client.handler.SdkSyncClientHandler.execute(SdkSyncClientHandler.java:45)
        at software.amazon.awssdk.awscore.client.handler.AwsSyncClientHandler.execute(AwsSyncClientHandler.java:55)
        at software.amazon.awssdk.services.ssm.DefaultSsmClient.getParameter(DefaultSsmClient.java:5258)
Caused by: java.lang.NoClassDefFoundError: org/reactivestreams/Publisher
        at java.lang.ClassLoader.defineClass1(Native Method)
        at java.lang.ClassLoader.defineClass(ClassLoader.java:763)
        at java.security.SecureClassLoader.defineClass(SecureClassLoader.java:142)
        at java.net.URLClassLoader.defineClass(URLClassLoader.java:467)
        at java.net.URLClassLoader.access$100(URLClassLoader.java:73)
        at java.net.URLClassLoader$1.run(URLClassLoader.java:368)
        at java.net.URLClassLoader$1.run(URLClassLoader.java:362)
        at java.security.AccessController.doPrivileged(Native Method)
        at java.net.URLClassLoader.findClass(URLClassLoader.java:361)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:424)
        at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:331)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:357)
        at java.lang.ClassLoader.defineClass1(Native Method)
        at java.lang.ClassLoader.defineClass(ClassLoader.java:763)
        at java.security.SecureClassLoader.defineClass(SecureClassLoader.java:142)
        at java.net.URLClassLoader.defineClass(URLClassLoader.java:467)
        at java.net.URLClassLoader.access$100(URLClassLoader.java:73)
        at java.net.URLClassLoader$1.run(URLClassLoader.java:368)
        at java.net.URLClassLoader$1.run(URLClassLoader.java:362)
        at java.security.AccessController.doPrivileged(Native Method)
        at java.net.URLClassLoader.findClass(URLClassLoader.java:361)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:424)
        at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:331)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:357)
        ... 13 more
Caused by: java.lang.ClassNotFoundException: org.reactivestreams.Publisher
        at java.net.URLClassLoader.findClass(URLClassLoader.java:381)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:424)
        at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:331)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:357)
        ... 37 more
```

→ [java.lang.BootstrapMethodError](https://github.com/zalando/riptide/issues/407)
> Looks like we are running into a dependency issue with Apache Http Client. See release notes for version 4.4.9:

4.4.4 は既にあったのだが、4.4.11 に変更したところ解消。

参考:
[Apache HttpComponents](https://hc.apache.org/)
> The Apache HttpComponents™ project is responsible for creating and maintaining a toolset of low level Java components focused on HTTP and associated protocols.
> This project functions under the Apache Software Foundation (http://www.apache.org), and is part of a larger community of developers and users.

[HttpCore Overview](https://hc.apache.org/httpcomponents-core-ga/)
> HttpCore is a set of low level HTTP transport components that can be used to build custom client and server side HTTP services with a minimal footprint. HttpCore supports two I/O models: blocking I/O model based on the classic Java I/O and non-blocking, event driven I/O model based on Java NIO.


## java.lang.NoSuchMethodError

[SLF4Jでjava.lang.NoSuchMethodError](https://qiita.com/megmogmog1965/items/75d8dc63db3cb753a75b)
