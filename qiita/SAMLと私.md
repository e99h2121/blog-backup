Single Sign-On (SSO) と Single Logout (SLO) についてメモ。

## 基本
SAML...Security Assertion Markup Language。シングルサインオン(SSO)の規格。XML形式で認証情報のやり取りを行う。

- SP ... Service Provider
- IdP ... Identity Provider SAML認証での認証情報の提供者

[シングルサインオンのOSS](https://www.designet.co.jp/ossinfo/sso_top.html)

### 認証方式
#### SP-initiated 
- [Diagram shows the flow for SP-initiated SLO](https://support.f5.com/csp/article/K70726133)
- [SPがシングルログアウトの起点になる方法](http://memoyasu.blogspot.com/2013/12/saml-20-single-logout.html)

#### IdP-initiated
- [SP-Initiated と IdP-Initiated の動作の違いを Fiddler を見ながら確認してみる](https://qiita.com/Shinya-Yamaguchi/items/434fab8c39e806e69a88) 

### [SAML Bindings](https://www.netone.co.jp/knowledge-center/blog-column/knowledge_takumi_199/index.html)
- HTTP Redirect Binding
- HTTP POST Binding
- HTTP Artifact Binding

### [NameID Format](https://www.netone.co.jp/knowledge-center/blog-column/knowledge_takumi_199/index.html)

- Persistent identifiers
- Transient identifiers

## KeyCloak

https://www.keycloak.org/

[KeycloakでSAMLを使ってみる（WordPress編）](https://qiita.com/katakura__pro/items/1e65e0bde7fda75332a1)


メタデータエンドポイント: 
http://xx.xx.xx.xx:xxxx/auth/realms/${realm名}/protocol/saml/descriptor


## Javaでどう実装するの

- [Spring Security SAMLを使ってSAML認証にチャレンジしたメモ](https://hotchpotchj37.wordpress.com/2018/07/23/spring-security-saml%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6saml%E8%AA%8D%E8%A8%BC%E3%81%AB%E3%83%81%E3%83%A3%E3%83%AC%E3%83%B3%E3%82%B8%E3%81%97%E3%81%9F%E3%83%A1%E3%83%A2/)

- [Spring Security SAML#Quick Start](https://docs.spring.io/spring-security-saml/docs/1.0.x-SNAPSHOT/reference/htmlsingle/#quick-start-prerequisites)

- OSS ... https://github.com/onelogin/java-saml


## 参考
[SAML2.0シングルサインオン対応したアプリからサインアウトする4つの方法](https://qiita.com/ekojima/items/925cd9e1279ac89e72c9)
[SAML認証を勉強せずに理解したい私から勉強せずに理解したい私へ](https://qiita.com/khsk/items/10a136bded197272094a)
[(ちょっと噛み砕いた)SAML入門](https://qiita.com/taxin/items/bc66fc8d26f804202d7d)
[今更ですがSAMLのおさらい](https://qiita.com/samiii/items/a144a8661635fcc9fb0e)




