
[こんなCSVファイルがあるとした時に](https://qiita.com/e99h2121/items/dd9a853c5823ac050b27) 結局SQLで色々データ見るほうが簡単だよねと思う人（私）向け。CSVをRDBと見立てて、可能な限りお手軽に、SELECTしたりGROUP BY、ORDER BY したいつまりSQLを使って加工したい時にどういう選択肢があるのか、いくつか試した。


|記入者|区分|更新日時|更新日|プロダクト|バージョン|サブシステム|URL|
|:----|:----|:----|:----|:----|:----|:----|:----|
|磯野カツオ| |2021/01/15 23:45|2021/1/15|Great Product|安定Ver|ツール|https://xx.examples.com/examples=zzzz|
|フグ田サザエ| |2021/01/15 23:27|2021/1/15|Great Product|安定Ver|汎用検索|https://xx.examples.com/examples=zzzz|
|さくら友蔵 様|お客様|2021/01/15 23:19|2021/1/15|Great Product|最新Ver|汎用検索|https://xx.examples.com/examples=zzzz|
|フグ田タラオ| |2021/01/15 23:06|2021/1/15|Great Product|最新Ver|未設定|https://xx.examples.com/examples=zzzz|
|磯野波平| |2021/01/15 23:05|2021/1/15|Great Product|最新Ver|共通|https://xx.examples.com/examples=zzzz|
|...|...|... |...|...|...|...|...|


## 選択肢


### 1. q

**q** というツール。

https://dev.classmethod.jp/articles/query-textfiles-using-q/

公式ページは以下。

http://harelba.github.io/q/

基本的にFROM句にCSVを指定することで使える。

```
C:\workspaces\files>q "SELECT COUNT(*) FROM ./all-20210101-20210131.csv "
6923
```

日本語文字列を含むCSVに対し、文字コードを工夫しないと以下のように言われてしまった。注意。

> Could not decode query number 1 using the provided query encoding (cp932)

### 2. trdsql

https://github.com/noborus/trdsql/releases

同じく、上からダウンロードしてくるだけで使える。現在も絶賛Updateされている。

https://github.com/noborus/trdsql

https://qiita.com/noborus/items/f253961cca6f4465f20c




### 3. H2 database

Java製の H2 database。

http://www.h2database.com/html/main.html

最近のUpdateが2019-10-14とあるので少々ご無沙汰なのだろうか。

https://qiita.com/t-shin0hara/items/44a7ed8bd736aa470e11

```
DROP TABLE IF EXISTS TEST;
CREATE TABLE TEST(ID INT PRIMARY KEY,
   NAME VARCHAR(255));
INSERT INTO TEST VALUES(1, 'Hello');
INSERT INTO TEST VALUES(2, 'World');
SELECT * FROM TEST ORDER BY ID;
UPDATE TEST SET NAME='Hi' WHERE ID=1;
DELETE FROM TEST WHERE ID=2;
```

以上でテーブルが作成～削除までできることが確認できる。

https://qiita.com/YJ2222/items/ca239cb20e0e88463571

テーブルを作成するならCREATE文で、以下。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/c3c8e504-8142-3c8e-abb9-32ef7852dfb5.png)
あるいはCSVからテーブルを作りたいなら、以下で。

```
DROP TABLE IF EXISTS DATA;
CREATE TABLE DATA AS SELECT * FROM CSVREAD('C:\workspaces\all-20210101-20210131.csv');
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/f1e78313-d512-454b-73e5-c50dee24452a.png)

こんな感じにデータが入ります。きちんと「DBサーバー」なDBになるという点ではかなりお手軽だと思います。


### 4. SQLite 

アプリケーションに組み込み形式のSQLite。

https://www.sqlite.org/download.html

Windowsなら以下をDownload
`sqlite-dll-win64-x64-3350500.zip`
`sqlite-tools-win32-x86-3350500.zip`

https://bigdata-tools.com/sql-db/#2-3 にある以下2つの図が分かりやすい。
クライアント・サーバ型 (先程のH2 databaseはこれもできる)
![](https://bigdata-tools.com/wp-content/uploads/2019/09/c76bfb5d-image9.png)
組み込み形式 (SQLiteはこれ)
![](https://bigdata-tools.com/wp-content/uploads/2019/09/40166d7c-image43.png)


閑話休題、以下でVersion確認。

```
C:\sqlite-tools-win32-x86-3350500>sqlite3 --version
3.35.5 2021-04-19 18:32:05 1b256d97b553a9611efca188a3d995a2fff712759044ba480f9a0c9e98fae886

```

`sample.db`を作成してみる。

```
C:\sqlite-tools-win32-x86-3350500>sqlite3 sample.db
SQLite version 3.35.5 2021-04-19 18:32:05
Enter ".help" for usage hints.
sqlite> .open sample.db

```

https://qiita.com/ChiakiYamaoka/items/b7c7863688d6f23c0501

に倣い、簡単な操作。

```
create table if not exists TEST (
   ID INT PRIMARY KEY,
   NAME VARCHAR(255)
);
```

でテーブルが作成できることを確認する。

```
sqlite> create table if not exists TEST (
   ...>    ID INT PRIMARY KEY,
   ...>    NAME VARCHAR(255)
   ...> );
sqlite>
sqlite> .tables
TEST
```

```
sqlite> INSERT INTO TEST VALUES(1, 'Hello');
sqlite> INSERT INTO TEST VALUES(2, 'World');
sqlite> SELECT * FROM TEST ORDER BY ID;
1|Hello
2|World
```


```
sqlite> UPDATE TEST SET NAME='Hi' WHERE ID=1;
sqlite> SELECT * FROM TEST ORDER BY ID;
1|Hi
2|World
sqlite> DELETE FROM TEST WHERE ID=2;
sqlite> SELECT * FROM TEST ORDER BY ID;
1|Hi
```
無事DELETEできました。CSVファイルのインポートは以下。

https://qiita.com/Kunikata/items/61b5ee2c6a715f610493

```
create table if not exists DATA (
    記入者 VARCHAR(255),
    区分 VARCHAR(255),
    更新日時 VARCHAR(255),
    更新日 VARCHAR(255),
    プロダクト VARCHAR(255),
    バージョン VARCHAR(255),
    サブシステム VARCHAR(255),
    URL VARCHAR(255)
);
```

```
.mode csv
.import all-20210101-20210131.csv DATA
```

DB Browser for SQLite を使うと、こちらもお手軽にデータが見やすくなりそうです。

https://sqlitebrowser.org/


### 5. Textql

試せていないが見つけたもの。

https://github.com/dinedal/textql

Go言語のセットアップが必要。


### 6. Google Sheets 

|記入者|区分|更新日時|更新日|プロダクト|バージョン|サブシステム|URL|
|:----|:----|:----|:----|:----|:----|:----|:----|
|列A|列B|列C|列D|列E|列F|列G|列H|
|磯野カツオ| |2021/01/15 23:45|2021/1/15|Great Product|安定Ver|ツール|https://xx.examples.com/examples=zzzz|
|フグ田サザエ| |2021/01/15 23:27|2021/1/15|Great Product|安定Ver|汎用検索|https://xx.examples.com/examples=zzzz|
|さくら友蔵 様|お客様|2021/01/15 23:19|2021/1/15|Great Product|最新Ver|汎用検索|https://xx.examples.com/examples=zzzz|
|フグ田タラオ| |2021/01/15 23:06|2021/1/15|Great Product|最新Ver|未設定|https://xx.examples.com/examples=zzzz|
|磯野波平| |2021/01/15 23:05|2021/1/15|Great Product|最新Ver|共通|https://xx.examples.com/examples=zzzz|
|...|...|... |...|...|...|...|...|

などとなっていた場合に、
例: 

```
=query('集計したいタブ名'!A:H,"select A,G WHERE A= '磯野カツオ' or A= '磯野波平' ",1)
```
などという形でSQLに近いことができる。

https://support.google.com/docs/answer/3093343?hl=ja

https://developers.google.com/chart/interactive/docs/querylanguage

https://note.com/tks97/n/n4c7803532cd8


## まとめ

冒頭のやりたいこと以上に色々「データベース」とはをググりました。古い方の自分にとっては今更なSQLなのだが、相変わらずSQLというのは使える知識であることにありがたみを感じる。比較的あたらしい基本記事を参考までに貼っておく。

https://qiita.com/DogK0625/items/6ccd896e67ec7f5d735e

https://qiita.com/ren0826jam/items/b442bb9120a4671f90b8

研修でちょっとした層構造のアプリケーションを作る前に、今時の人はいきなりNoSQLだFirebaseだとなるのだろうか...ナンノコッチャにならないものなのだろうか...。そのあたりは余計な心配としても「バックエンド」とデータベースの基本ってどう学ぶんだろうと思った時、超お手軽に「CRAD」をするものを考えた時。今回見つけたツール達も便利かなとも思った。

https://qiita.com/1amageek/items/3dbbc3112493a73880d0

サーバーレスの時代も、RDB知識は無駄ではないなあと思う今日このごろ。以上参考になればさいわいです。
