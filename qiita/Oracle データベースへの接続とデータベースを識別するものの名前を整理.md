## Oracle データベースへの接続

### データベースへの接続おさらい

https://www.atmarkit.co.jp/ait/articles/0905/28/news109.html

Oracleデータベースへの接続は以下がある。

- データベースサーバー内のOSにログインし、操作するローカル接続
- ネットワークからデータベースに接続し、操作するリモート接続


クライアントは接続先を指定する `tnsnames.ora` ファイルの情報を読み込み、`リスナープロセス` へアクセスする。リスナープロセスはサーバープロセスとの接続を取り次ぐ。リスナープロセスも `listener.ora` という設定ファイルを持っている。

`tnsnames.ora` ファイルには `listener.ora` ファイルで指定されたサーバーとポート番号を指定しておく。`tnsnames.ora` ファイルで接続する情報には別名（ネットワーク識別子）をつける。


```tnsnames.ora
net_service_name =       ← ここに書かれている名前がネットサービス名であり、ネットワーク識別子
 (DESCRIPTION =
   (ADDRESS = (PROTOCOL = TCP)(HOST = {host_name|IP address} )(PORT = 1521))
   (CONNECT_DATA =
     (SERVICE_NAME = service_name)   ← ここがサービス名
   )
 )
```

例えば接続を確かめる際には

```
ping host_name|IP address
```

は当然として以下 `tnsping` 等が試せる。

```
C:\workspaces>tnsping sampledbname

TNS Ping Utility for 64-bit Windows: Version 11.2.0.1.0 - Production on 30-4月 -2021 09:09:17

Copyright (c) 1997, 2010, Oracle.  All rights reserved.

パラメータ・ファイルを使用しました:
C:\app\myname\product\11.2.0\dbhome_1\network\admin\sqlnet.ora

エイリアスを解決するためにTNSNAMESアダプタを使用しました。
(DESCRIPTION = (ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = xx.xx.xx.xx)(PORT = 1521))) (CONNECT_DATA = (SERVICE_NAME = sampledbname)))に接続の試行中
OK (40ミリ秒)
```

## アプリケーションからの接続

### JDBC

JDBCとは何か。

https://www.atmarkit.co.jp/ait/articles/0106/26/news001.html

> リレーショナル・データベース（および、ほとんどすべての表形式のデータ）にアクセスするための、標準Java API
> Java Database Connectivity

なので例えば以下

```java
package playground;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Conn2Oracle {

	public static void main(String[] args) {
		final String url = "jdbc:oracle:thin:@xx.xx.xx.xx:1521/exampledb";
		final String user = "companycom";
		final String pass = "m8s659cr";
        final String SQL = "select * from example_table";
		try (Connection conn = DriverManager.getConnection(url, user, pass);
			PreparedStatement ps = conn.prepareStatement(SQL)){
            try(ResultSet rs = ps.executeQuery()){
                while (rs.next()) {
                    System.out.println(
                    	rs.getString("example_id") + " " +
                    	rs.getString("example_name")
                    	);
	                }           
	            }
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			System.out.println(" * " + url+" "+user+" "+pass+" "+"処理が完了しました");
		}
	}
}
```

### cx_Oracle

あるいはPythonなら `cx_Oracle` を `pip install cx_Oracle` する。

https://oracle.github.io/python-cx_Oracle/

https://cx-oracle.readthedocs.io/en/latest/user_guide/connection_handling.html#connecting-to-oracle-database


```py
import cx_Oracle

#サーバ名 / IP
HOST = "xx.xx.xx.xx"
#ポート
PORT = 1521
#SID
SID = "somedb"


tns = cx_Oracle.makedsn(HOST, PORT, SID)
conn = cx_Oracle.connect("user", "pass", tns)

cur = conn.cursor()
cur.execute("""SELECT INSTANCE_NAME,HOST_NAME FROM v$instance""")
while True:
    row = cur.fetchone()
    if row is None:
        break
    print(row)
```

## データベースを識別するものの名前

話をJDBCに戻すが、JDBC URLはこのように構成される。

https://qiita.com/ora_gonsuke777/items/4eeadcb4965f50567dd8

> jdbc:oracle:driver_type:[username/password]@database_specifier
> username@[//]host[:port][/service_name][:server][/instance_name]

> jdbc:oracle:thin:@xx.xx.xx.xx:1521/サービス名
> jdbc:oracle:thin:@xx.xx.xx.xx:1521:インスタンス識別子

等など。

https://docs.oracle.com/en/database/oracle/oracle-database/21/jjdbc/data-sources-and-URLs.html#GUID-44572C63-10D2-478A-BB2E-ACF6674C59CC

`SID` はインスタンス識別子、`service_name` はサービス名。

> インスタンス識別子、システム識別子、SID(System IDentifer)
これらは SID ≒*1 環境変数 ORACLE_SID と呼ばれているもの
ホストサーバー内で有効で、ホストの共有メモリにアクセスするための識別子
(ホスト外になると SID ではアクセスできない ⇒ INSTANCE_NAME

で、これらは例えば以下で取得できる。

```sql
SELECT dbid FROM v$database;
show parameter db_name
show parameter db_unique_name
show parameter instance_name
SELECT * FROM GLOBAL_NAME;
```

[名前の整理](https://qiita.com/tpusuke/items/7af097580f239ba28b9d#%E5%90%8D%E5%89%8D%E3%81%AE%E6%95%B4%E7%90%86) がわかりやすい。

> - **システム識別子(SID)**
    - 通常はインスタンス名と同じだが別にすることも可能。ローカル接続で利用。サーバ内でユニーク。
- **ORACLE_SID**
    - ローカルDB接続時のSIDを設定しておく環境変更。（但し「. oraenv」コマンドではデータベース名を入力するため、接続時はインスタンス名に変更する必要がある。また、PDB名は設定不可)
- **サービス名(SERVICE_NAMES)**
    - リスナ経由接続先を指定する名前。デフォルト(通常変更しない)はDB_UNIQUE_NAME.DB_DOMAIN。PDBはPDB名.DB_DOMAIN。(複数登録可能で、例えば、RACでサービス名により稼働インスタンスを制限可能)



## 参考

https://www.shift-the-oracle.com/config/oracle_sid-db_name-global_name.html

http://uan.sakura.ne.jp/myoracle/db_name.html

https://qiita.com/tpusuke/items/7af097580f239ba28b9d

以上、基礎知識整理でした。参考になればさいわいです。
