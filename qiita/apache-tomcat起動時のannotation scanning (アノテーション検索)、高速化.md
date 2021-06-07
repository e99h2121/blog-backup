## 調べる元となったトラブル

apache-tomcat-8.0.20で起動時に
`org.apache.tomcat.util.bcel.classfile.ClassFormatException: Invalid byte tag in constant pool` 
となる。

https://stackoverflow.com/questions/23541532/org-apache-tomcat-util-bcel-classfile-classformatexception-invalid-byte-tag-in

http://tomcat.apache.org/whichversion.html

> However, if annotation scanning is enabled (metadata-complete="true" in web.xml) there are some issues due to BCEL (not able to process the new Java 8 byte codes). You will get exceptions like (at least with Tomcat 7.0.28):
> ただし、annotation scanning が有効な場合（web.xmlでmetadata-complete="true"）、BCELによる問題が発生します（新しいJava 8バイトコードを処理できません）。以下のような例外が発生します（少なくともTomcat 7.0.28の場合）。


例:
```
SEVERE: Unable to process Jar entry [jdk/nashorn/internal/objects/NativeString.class] from Jar [jar:file:/usr/lib/jvm/jdk1.8.0_5/jre/lib/ext/nashorn.jar!/] for annotations
org.apache.tomcat.util.bcel.classfile.ClassFormatException: Invalid byte tag in constant pool: 15
    at org.apache.tomcat.util.bcel.classfile.Constant.readConstant(Constant.java:131)
```

これについてtomcatの起動時に annotation scanning を利用しないでよい場合は、catalina.properties の以下にjar名を加えることで回避できる。




```catalina.properties
# Default list of JAR files that should not be scanned using the JarScanner
# functionality. This is typically used to scan JARs for configuration
# information. JARs that do not contain such information may be excluded from
# the scan to speed up the scanning process. This is the default list. JARs on
# this list are excluded from all scans. The list must be a comma separated list
# of JAR file names.
# The list of JARs to skip may be over-ridden at a Context level for individual
# scan types by configuring a JarScanner with a nested JarScanFilter.
# The JARs listed below include:
# - Tomcat Bootstrap JARs
# - Tomcat API JARs
# - Catalina JARs
# - Jasper JARs
# - Tomcat JARs
# - Common non-Tomcat JARs
# - Test JARs (JUnit, Cobertura and dependencies)
tomcat.util.scan.StandardJarScanFilter.jarsToSkip=\
bootstrap.jar,commons-daemon.jar,tomcat-juli.jar,\
annotations-api.jar,el-api.jar,jsp-api.jar,servlet-api.jar,websocket-api.jar,\
catalina.jar,catalina-ant.jar,catalina-ha.jar,catalina-storeconfig.jar,\
catalina-tribes.jar,\
jasper.jar,jasper-el.jar,ecj-*.jar,\
tomcat-api.jar,tomcat-util.jar,tomcat-util-scan.jar,tomcat-coyote.jar,\
tomcat-dbcp.jar,tomcat-jni.jar,tomcat-spdy.jar,tomcat-websocket.jar,\
tomcat-i18n-en.jar,tomcat-i18n-es.jar,tomcat-i18n-fr.jar,tomcat-i18n-ja.jar,\
tomcat-juli-adapters.jar,catalina-jmx-remote.jar,catalina-ws.jar,\
tomcat-jdbc.jar,\
tools.jar,\
commons-beanutils*.jar,commons-codec*.jar,commons-collections*.jar,\
commons-dbcp*.jar,commons-digester*.jar,commons-fileupload*.jar,\
commons-httpclient*.jar,commons-io*.jar,commons-lang*.jar,commons-logging*.jar,\
commons-math*.jar,commons-pool*.jar,\
jstl.jar,\
geronimo-spec-jaxrpc*.jar,wsdl4j*.jar,\
ant.jar,ant-junit*.jar,aspectj*.jar,jmx.jar,h2*.jar,hibernate*.jar,httpclient*.jar,\
jmx-tools.jar,jta*.jar,log4j*.jar,mail*.jar,slf4j*.jar,\
xercesImpl.jar,xmlParserAPIs.jar,xml-apis.jar,\
junit.jar,junit-*.jar,ant-launcher.jar,\
cobertura-*.jar,asm-*.jar,dom4j-*.jar,icu4j-*.jar,jaxen-*.jar,jdom-*.jar,\
jetty-*.jar,oro-*.jar,servlet-api-*.jar,tagsoup-*.jar,xmlParserAPIs-*.jar,\
xom-*.jar,jackson-databind-2.10.3.jar,jackson-core-2.10.3.jar
```

など。


## 調べた結果の副産物

この annotation scanning は起動時間にもかかわるもの。以下参考。
（`アノテーション検索` などで情報が出てくるようだ。）


https://cwiki.apache.org/confluence/display/TOMCAT/HowTo+FasterStartUp


https://www.ibm.com/docs/ja/was/9.0.5?topic=deployment-reducing-annotation-searches-during-application

https://tech.synchro-food.co.jp/entry/2017/03/13/212924

```web.xml
<web-app xmlns="http://java.sun.com/xml/ns/j2ee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd"  
version="2.4" metadata-complete="true">  
```


簡単に以上です。
