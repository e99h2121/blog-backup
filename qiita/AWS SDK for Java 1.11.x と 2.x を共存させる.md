[WindowsローカルのAWS SDKでJavaプログラムを動かすまで](https://qiita.com/e99h2121/items/7b153c12f61470ffdf48) の続き

Amazon AWS SDK 1.x と 2.x は共存できるようだ、というメモ。

```pom.xml
        <aws-java-sdk.version>1.11.699</aws-java-sdk.version>
        <aws-java-sdk2.version>2.13.53</aws-java-sdk2.version>

        <dependency>
            <groupId>com.amazonaws</groupId>
            <artifactId>aws-java-sdk-bom</artifactId>
            <version>${aws-java-sdk.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
        <dependency>
            <groupId>software.amazon.awssdk</groupId>
            <artifactId>bom</artifactId>
            <version>${aws-java-sdk2.version}</version>
             <type>pom</type>
            <scope>import</scope>
        </dependency>
```

[AWS SDK for Java のドキュメント](https://docs.aws.amazon.com/sdk-for-java/index.html)

[SDK for Java 1.11.x と 2.x の相違点](https://docs.aws.amazon.com/ja_jp/sdk-for-java/v2/migration-guide/whats-different.html)

[Using the SDK for Java 1.x and 2.x Side by Side (SDK for Java 1.x and 2.xを共用する)](https://docs.aws.amazon.com/sdk-for-java/v2/migration-guide/side-by-side.html)

