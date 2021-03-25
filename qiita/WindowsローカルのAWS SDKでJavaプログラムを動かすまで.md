## 前提

[AWS SDK for Java 2.0 開発者ガイド](https://docs.aws.amazon.com/ja_jp/sdk-for-java/v2/developer-guide/welcome.html) 
そして今回使おうとしているもの。

```pom.xml
    <properties>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
        <aws.java.sdk.version>2.11.12</aws.java.sdk.version>
    </properties>
<!-- 中略 -->
    <dependencies>
    	<dependency>
                <groupId>software.amazon.awssdk</groupId>
                <artifactId>bom</artifactId>
                <version>${aws.java.sdk.version}</version>
                <type>pom</type>
                <scope>import</scope>
    	</dependency>
    	<dependency>
    		<groupId>software.amazon.awssdk</groupId>
    		<artifactId>ecs</artifactId>
    		<version>${aws.java.sdk.version}</version>
    	</dependency>
    	<dependency>
    		<groupId>software.amazon.awssdk</groupId>
    		<artifactId>ssm</artifactId>
    		<version>${aws.java.sdk.version}</version>
    	</dependency>
    </dependencies>
```


## インストール

AWS CLI をインストールする。
[Installing the AWS CLI version 2 on Windows](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html)

[設定ファイルと認証情報ファイルの設定](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-configure-files.html)
C:\Users\(username)\.aws 以下にファイルがあることを確認。


```~/.aws/credentials
[default]
aws_access_key_id=(自身のaccess_key_id)
aws_secret_access_key=(自身のsecret_access_key)

```

```~/.aws/config
[default]
region=ap-northeast-1
output=json
```

## 認証準備

[MFAデバイスの割り当て](https://console.aws.amazon.com/iam/home#/users/yamada_n@works-hi.co.jp?section=security_credentials) でMFAの設定を行う。
MFAを設定後は、logout -> 再login をして初めてコンソール上で様々のサービスの確認・操作ができる。コンソール上でEC2などの情報が見られるか、権限を確認する。




## MFA認証を用い、一時認証ユーザーを生成

[MFA トークンを使用して、AWS CLI 経由で AWS リソースへのアクセスを認証する方法を教えてください。](https://aws.amazon.com/jp/premiumsupport/knowledge-center/authenticate-mfa-cli/)

[Checking MFA Status](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_checking-status.html)

`The ARN in AWS for an SMS device, such as arn:aws:iam::123456789012:sms-mfa/username`
`The ARN in AWS for a virtual device, such as arn:aws:iam::123456789012:mfa/username`

これはつまり以下のようなこと。


```
C:\Users\works>aws sts get-session-token --serial-number arn:aws:iam::123456123456:mfa/yourid@yourmail.co.jp --token-code (MFAの数字6ケタ) 

{
    "Credentials": {
        "AccessKeyId": "ASIA************",
        "SecretAccessKey": "p8j****************************",
        "SessionToken": "**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************",
        "Expiration": "2020-06-17T19:08:08+00:00"
    }
}
```

こうしてCredentialsを獲得できる。


## デバッグ


[AWS CLIの設定切替方法と、AWS_DEFAULT_PROFILEとAWS_PROFILEの違いについて] (https://qiita.com/shonansurvivors/items/1fb53a2d3b8dddab6629)が分かりやすかった。
`aws configure --profile プロファイルの名前` とある通り、テスト用プロファイル `eclipse` を作成してみる。

```
C:\Users\works>aws configure --profile eclipse
AWS Access Key ID [None]: (CredentialのAccess Key ID)
AWS Secret Access Key [None]: (CredentialのSecret Access Key)
Default region name [None]: ap-northeast-1
Default output format [None]: json
```


これで
`~/.aws/credentials`
`~/.aws/config`
が更新されていることを確認する。


今回はこの状態で、Eclipse の実行時環境変数に
`AWS_PROFILE=eclipse` をセットする。


無事ローカルでJavaプログラムが動いたー。
関連: [AWS SDK 1, 2の共存など、細かいメモ](https://qiita.com/e99h2121/items/2dd857fc5bc20796d691)
