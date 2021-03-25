/ 区切りのパスワードをマスクする。でも / 区切りの日付はそのままにしたい。


```java:FindUserPassword.java
package playground;

public class FindUserPassword {

    public static void main(String[] args) {
        String str6 = "D:\\ap\\cp\\0100.bat  -id:249810 11 2019/05/24 guest/guest kf010 kfu0100.sh 10 1 249810";
        String str5 = "D:\\ap\\cp\\0100.bat  -id:249810 11 kf010 kfu0100.sh 10 1 249810";
        String str4 = "D:\\ap\\cp\\0100.bat  -id:249810 11 2019/05/24 guest/guest/ kf010 kfu0100.sh 10 1 249810";
        String str3 = "D:\\ap\\cp\\0100.bat  -id:249810 11 2019/05/24 guest/guest kf010 kfu0100.sh 10 1 249810";
        String str2 = "D:\\ap\\cp\\01.bat  -id:248669 1 20 12010033/19870420yt 0 tr010_bat -u cp 248669";
        String str = "D:\\ap\\cp\\0100.bat  -id:249810 11 2019/05/24 kf010 kfu0100.sh 10 1 249810";

        System.out.println("str2: " + str2);
        
        String[] commands = str2.split(" ");
        StringBuffer out = new StringBuffer();
        for (String command : commands) {
            //if ((command.indexOf("/") != command.lastIndexOf("/")) || (command.indexOf("/") < 0)) {
            if (command.matches("\\d{4}/\\d{2}/\\d{2}") || (command.indexOf("/") < 0)) {
                out.append(command).append(" ");
            } else {
                //out.append(command.replaceAll("/.+?", "/**********")).append(" ");

                int start = command.indexOf("/");
                String replacestr = command.substring(start+1);
                //out.append(command.replace(replacestr, "**********")).append(" ");
                out.append(command.replace(replacestr, "/**********")).append(" ");
            }
        }
        System.out.println(out);
    }

}

```

以下、試行錯誤中(str6 をどうにかしたい)

```java:FindUserPassword_renew.java
package playground;
public class FindUserPassword {
        String str6 = "D:\\ap\\cp\\0100.bat  -id:249810 11 2019/05/24 guest/guest kf010 kfu0100.sh 10 1 249810";
        String str5 = "D:\\ap\\cp\\0100.bat  -id:249810 11 kf010 kfu0100.sh 10 1 249810";
        String str4 = "D:\\ap\\cp\\0100.bat  -id:249810 11 2019/05/24 guest/guest/ kf010 kfu0100.sh 10 1 249810";
        String str3 = "D:\\ap\\cp\\0100.bat  -id:249810 11 2019/05/24 guest/guest kf010 kfu0100.sh 10 1 249810";
        String str2 = "D:\\ap\\cp\\01.bat  -id:248669 1 20 12010033/19870420yt 0 tr010_bat -u cp 248669";
        String str = "D:\\ap\\cp\\0100.bat  -id:249810 11 2019/05/24 kf010 kfu0100.sh 10 1 249810";

    public static void main(String[] args) {
        
        String[] commands = {str, str2, str3, str4, str5, str6}; 
        for (String command : commands) {
          if (!command.matches(".+\\d{4}/\\d{2}/\\d{2}.+")) {
            System.out.println(command.replaceAll("/.+? ", "/********** "));
          } else {
              System.out.println(command);
          }
        }

```

