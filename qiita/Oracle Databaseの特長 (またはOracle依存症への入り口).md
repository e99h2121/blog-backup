そもそものDBMSとしてのOracle Databaseの特長・特徴をまとめておくもの。


## Oracle Database

https://ja.wikipedia.org/wiki/Oracle_Database

> 1977年、ラリー・エリソン、ボブ・マイナー、エド・オーツの3名により、Software Development Laboratories (SDL) が設立された。1979年にSDLは、社名を Relational Software, Inc (RSI) に変更し、その際に初期の商用関係データベースとして、Oracle V2を発表した。Oracle V2には、トランザクションの概念はなかったが、基本的なデータベース言語であるSQLを使用することができた。


### PL/SQL

https://ja.wikipedia.org/wiki/PL/SQL

> Oracle社が、Oracle Databaseのためにコンピュータのデータベース言語SQLを独自に拡張したプログラミング言語


### 「便利なSQL」等

Oracleでしかおよそ使えない「便利な」SQL等。

#### セッション情報にクライアント情報をセットできる

```sql
call DBMS_APPLICATION_INFO.SET_CLIENT_INFO('てすとです') 
select client_info, * from V$SESSION where client_info is not null
```

#### Table情報の取得

```sql
SELECT column_name, data_precision, data_scale
FROM user_tab_columns
WHERE table_name = 'BOOKS'
```

#### 全角半角変換とひらがなカタカナ変換

https://www.saka-en.com/oracle/oracle-convert-full-width-half-size/

TO_MULTI_BYTE、TO_SINGLE_BYTE

#### マテリアライズド・ビュー

https://atmarkit.itmedia.co.jp/ait/articles/0504/21/news105.html

> MViewには大きく2つの利用方法があり、1つはリモート・データベース上に存在するデータをローカル・データベース上に定期的にコピーする目的で使用され、スナップショットとも呼ばれます。もう1つは、ローカル・データベース上のデータの集計や結合処理を高速化するために使用されます。

#### フラッシュバッククエリ

http://brsounds.net/index.php/2017/03/22/oracle_flashback_query/

> ユーザから「更新してしまったデータを復活させたい」などの要望があって、過去データを参照する必要が出てきたときに便利な機能です。どの時点までを参照できるかは、UNDOデータに依存するようです。


### 他DBMSとの比較

ここまでのようなお話から、

> RDBMSのデファクトスタンダードとも位置づけられる製品であるが、古くからの仕様を引きずるあまり、標準SQL規格に準拠していない点が多く、他RDBMSとの移行性は良くない場合がある。

と言われる。例として null と 空文字 を区別しないなど。


### ここまで知っていたら通な小話

> Oracle Databaseに付属するdemobld.sql（Oracle Database 10g以降ではutlsampl.sql）を実行すると「EMP」「DEPT」というふたつのテーブルと **「SCOTT/TIGER」**というスキーマよりなる伝統的なデモ環境が構築される。「SCOTT」とはオラクルの前身であるSDLに在籍していたBruce Scottを指し、「Tiger」は彼の愛猫の名前に由来する。


### 「Oracleは『高価』で『難しい』」

Wikipedia より。
> Oracleは高機能である反面、システムや操作方法を理解するのが非常に困難であり、ユーザビリティも低い（CUIによる操作がメインである。Oracle Enterprise ManagerでGUIの操作も可能となっているが、CUIによる操作と比較すると限定される）ため、開発・運用がとても難しいと思われている。また、大規模のシステムを構築するには必要不可欠となるOracle Database Enterprise Editionの価格は1プロセッサ（CPU）当たり570万円とかなり高額である。さらに、大規模システムでは各オプション機能(パーティショニング、DataGuard、RAC等)も高価で他社DBの製品自体のライセンス価格に匹敵するものも多い。こうしたことから、Oracleは「高飛車である」「高くて難しい」というイメージを持たれていると、日本オラクルのクロスインダストリー統括本部長が明かしている。

しかし、便利で、そのマイグレーションがなかなか難しい...。


## 関連

https://qiita.com/e99h2121/items/efd3e12a526816775aab

https://qiita.com/e99h2121/items/43f518f72994464ae912

https://qiita.com/e99h2121/items/941bc0d7f09fee3384a7

ということでこの記事では言及しないが色々と、Oracleの「特長」との距離感を考えないといけないぞ、というはなし。以上、参考になればさいわいです。
