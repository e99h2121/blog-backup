[SAMLと私](https://qiita.com/e99h2121/items/81c4557934dae1c0fe02)の続き, 開発時メモです。

## 確認手順

###操作手順1
IdPを介したログインの自SPからのログイン・ログアウト  

1. https://自SPURL/ にアクセス IdPに admin/admin で入る 
1. と、wordpressにも admin/admin で入った状態になっている  
1. 自SP内の、任意のメニューを起動し admin/admin で操作できることを確認する。  
1. その後、自SPのログアウトボタンからログアウト  https://xx.xx.xx.xx/wordpress/ (IdPを介した他サービス) にアクセスする  

で、ログアウトできているか？


###操作手順2
IdPを介したログインの他サービスからのログイン・ログアウト  

1. https://xx.xx.xx.xx/wordpress/ (IdPを介した他サービス)  にアクセス Idpに admin/admin で入る 
1. と、自SPにも admin/admin で入った状態になっている  
1. 自SP内の、任意のメニューを起動し admin/admin で操作できることを確認する。  
1. その後、他サービスからログアウト  http://自SPURL/  にアクセスする 

で、ログアウトできているか？


## KeyCloakセットアップ
[KeyCloakのセットアップ](https://qiita.com/tamura__246/items/13fc301e9409fef77bf3)

## WordpressセットアップのためのXAMPPセットアップ
[XAMPPを使ってWordPressローカル環境を構築する全手順](https://bazubu.com/xampp-wordpress-23795.html)

## WordpressにKeyCloakプラグイン設定
[KeycloakでSAMLを使ってみる（WordPress編）](https://qiita.com/katakura__pro/items/1e65e0bde7fda75332a1) 参照

