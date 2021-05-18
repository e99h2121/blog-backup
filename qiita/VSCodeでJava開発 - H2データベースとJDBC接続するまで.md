Java でIDEといえば Eclipse や IntelliJ な気がします。しかしそれほど本気ではないが楽しく気軽に Java コーディングしたいという時に、VSCodeで簡単にデータベース接続まで理解する。以上を表題の3つで実現する事を考えてみました。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/e4ca76a7-d69c-d190-e884-308e5cfa8cc4.png)

以下２つが分かりやすかった。

https://qiita.com/takuma-jpn/items/b49785a314fb4db85775

https://qiita.com/msakamoto_sf/items/d65947ddf509acbc98cb


## 予備知識

### Visual Studio Code で Java を使うにはJDK11が必要になりました

https://od10z.wordpress.com/2020/08/01/vscode-java-required-jdk11/

### Java のクラスパス(Classpath)を通す - vscode、JDBCドライバ

https://shuntanote.com/programming/jdbcdriver/

### H2-database-jdbc-connection H2データベース-JDBC接続

https://www.finddevguides.com/H2-database-jdbc-connection


## 簡単な練習

```java

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class H2jdbcCreateDemo {
   //JDBC driver name and database URL
   static final String JDBC_DRIVER = "org.h2.Driver";
   static final String DB_URL = "jdbc:h2:~/test";

  // Database credentials
   static final String USER = "sa";
   static final String PASS = "";

   public static void main(String[] args) {
      Connection conn = null;
      Statement stmt = null;
      try {
        //STEP 1: Register JDBC driver
         Class.forName(JDBC_DRIVER);

        //STEP 2: Open a connection
         System.out.println("Connecting to database...");
         conn = DriverManager.getConnection(DB_URL,USER,PASS);

        //STEP 3: Execute a query
         System.out.println("Creating table in given database...");
         stmt = conn.createStatement();
         String sql =  "CREATE TABLE IF NOT EXISTS SAMPLE_TABLE " +
            "(id INTEGER not NULL, " +
            " name VARCHAR(255), " +
            " memo VARCHAR(255), " +
            " age INTEGER, " +
            " PRIMARY KEY ( id ))";
         stmt.executeUpdate(sql);
         System.out.println("Created table in given database...");

        //STEP 4: Clean-up environment
         stmt.close();
         conn.close();
      } catch(SQLException se) {
        //Handle errors for JDBC
         se.printStackTrace();
      } catch(Exception e) {
        //Handle errors for Class.forName
         e.printStackTrace();
      } finally {
        //finally block used to close resources
         try{
            if(stmt!=null) stmt.close();
         } catch(SQLException se2) {
         }//nothing we can do
         try {
            if(conn!=null) conn.close();
         } catch(SQLException se){
            se.printStackTrace();
         }//end finally try
      }//end try
      System.out.println("Goodbye!");
   }
}

```

```
PS C:\Users\s5551\OneDrive\デスクトップ\workspace\java\simplecrud\src> java -classpath h2-1.4.200.jar H2jdbcCreateDemo.java
Connecting to database...
Creating table in given database...
Created table in given database...
Goodbye!
PS C:\Users\s5551\OneDrive\デスクトップ\workspace\java\simplecrud\src> 
```

## 余談

勝手に想像するにJavaは以下が不利です。

- カッコイイGUIを簡単に作るのにはイマドキ適さない。
- 故に初心者はわざわざ選ばない
- Javaはなぜ難しい？と各所で言われます...。

https://www.quora.com/Why-is-Java-programming-so-difficult

しかしTIOBE index、

https://www.tiobe.com/tiobe-index/
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/0c5a4961-0862-6f7a-be37-ebe108abca8e.png)

Java は相変わらず3位に入るようです。
https://insights.stackoverflow.com/survey/2020#technology-programming-scripting-and-markup-languages-all-respondents においても3位にSQL、5位にJava。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/7fadbb92-e325-c9c0-2c96-40b468e66f4b.png)

ライブラリが充実し経験者が数多く知識がふんだんにあるという意味で、入門までの難関はそれほどないのでは。VSCode で週末お気軽Java開発も良いのでは。というか業務を離れて書くならこれで良いなと感じたので以上メモです。

参考になればさいわいです。
