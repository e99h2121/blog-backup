## 基礎知識

### Thread2種類

```SimpleThread.java
package playground;

public class SimpleThread extends Thread {
    public void run() {
        for (int i = 0; i < 10; i++) {
            try {
                Thread.sleep(10000L); // 10秒停止する
                System.out.println("スレッドで動いています:" + (i+1) +"回目");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}

```

```SimpleThread2.java
package playground;

public class SimpleThread2 implements Runnable {
    public void run() {

        Thread t = Thread.currentThread(); // このメソッドを動かしているThreadを得る
        long id = t.getId();
        String name = t.getName();
        System.out.println("スレッドの識別子は" + id + "、名前は" + name + "です");
        for (int i = 0; i < 10; i++) {
            try {
                Thread.sleep(10000L); // 10秒停止する
                System.out.println("スレッド2で動いています:" + (i+1) +"回目");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}

```

### Thread呼び出し

```ThreadUser.java
package playground;

public class ThreadUser {

    public static void main(String[] args) {
        SimpleThread t = new SimpleThread();
        t.start();

        SimpleThread2 t2 = new SimpleThread2();
        Thread t2c = new Thread(t2); 
        t2c.start();

        System.out.println("joinを始めます");

        try {
            t.join(); // スレッドでの処理が終わるまで、ここでブロックされる
            t2c.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        System.out.println("joinが終わりました");
    }
}

```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/64702101-df03-66f9-04a5-9ce4e9ae605e.png)



## 常駐

```SimpleThreadReceiver.java
package playground;
import java.io.File;
public class SimpleThreadReceiver implements Runnable {
    public void run() {

        Thread t = Thread.currentThread(); // このメソッドを動かしているThreadを得る
        long id = t.getId();
        String name = t.getName();
        System.out.println("スレッドの識別子は" + id + "、名前は" + name + "です");
        int i = 0;
        File file = new File("C:\\dummy\\test.txt");
        boolean stop = false;
        
        while (!stop) {
            try {
                i++;
                Thread.sleep(10000L); // 10秒停止する
                System.out.println("スレッドReceiverで動いています:" + (i) +"回目");
                if (file.exists()) {
                    stop = true;
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}
```



![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/9993e153-8634-c2f2-f33c-894bf6f8b2a7.png)

1. JavaのThreadを常駐させる
2. 他サービスとSocketで通信し合う
3. それらを起動する・停止するシェルを用意する

みたいなことをして超簡単にJavaを常駐させる仕組みを作ったりしている例の説明のために書きました。


## 参考

https://qiita.com/Takmiy/items/cc4fe25942f26d403129

https://www.baeldung.com/java-interrupted-exception

https://www.bold.ne.jp/engineer-club/java-thread

https://stackoverflow.com/questions/1816673/how-do-i-check-if-a-file-exists-in-java

https://atmarkit.itmedia.co.jp/bbs/phpBB/viewtopic.php?topic=5668&forum=12

https://atmarkit.itmedia.co.jp/bbs/phpBB/viewtopic.php?topic=3470&forum=12

https://atmarkit.itmedia.co.jp/bbs/phpBB/viewtopic.php?topic=28172&forum=12


http://blog.livedoor.jp/tsutaken/archives/646796.html




以上簡単なメモ書きです。
参考になればさいわいです。
