EclipseにSonarLintプラグインを追加する手順です。


https://www.sonarlint.org/


## 通常

`https://eclipse-uc.sonarlint.org`

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d01579ba-a0bc-8923-f765-d1a5275c8b4a.png)

参考: [Eclipseにプラグインを追加してみよう (1/3)：CodeZine（コードジン）](https://codezine.jp/article/detail/13932)

## zipから静的追加

バイナリ配布: https://binaries.sonarsource.com/?prefix=SonarLint-for-Eclipse/releases/
URLからお好みのVersionのzipを取得する。

https://github.com/SonarSource/sonarlint-eclipse/wiki/Installation

ダウンロードしたフォルダから zip を指定する。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d9c1546d-343f-fa3a-212e-137b56142d00.png)

チェックを入れる。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/40a3bb4c-dd3d-4058-90ab-15eeffe59393.png)

Next。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/6653bf0d-1f45-f9fb-e834-6aa7e8499fcb.png)

インストール後、ダイアログに従いEclipseを再起動する。
Preference > SonarLint > Rules Configuration から設定が行えるようになります。
右クリック `SonarLint` からAnalyze。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/1b26caab-b765-38d7-74b7-261f7fdb6b90.png)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/6770b081-f4be-6141-c835-2c85bc8b5ac6.png)



## ほか参考記事
[java - Do not use System.out.println in server side code - Stack Overflow](https://stackoverflow.com/questions/8601831/do-not-use-system-out-println-in-server-side-code)
[java - Why is using System.out.println() so bad? - Software Engineering Stack Exchange](https://softwareengineering.stackexchange.com/questions/161194/why-is-using-system-out-println-so-bad)
[SonarQubeでソースコードの品質チェック - Qiita](https://qiita.com/teradonburi/items/776e4735395af872320a)
[sonarlintのEclipse設定 - Qiita](https://qiita.com/cheng_rancher/items/57335b59345e2cba8f33)

以上 Happy Analyzing！
