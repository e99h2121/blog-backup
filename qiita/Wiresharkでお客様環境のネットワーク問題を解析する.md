### Wiresharkダウンロード
https://www.wireshark.org/download.html

### トラブル
[ネットワークの接続が20秒でタイムアウトしている](https://shimaji.exblog.jp/12854771/) ような状況がお客様環境で起こった。

もちろんアプリケーション側不具合を疑ったがタイムアウト繋がりで [AWSのこんな内容](https://aws.amazon.com/jp/premiumsupport/knowledge-center/s3-socket-connection-timeout-error/) も調べたり。逡巡したが、結局、Wiresharkで捕捉した情報を頼りにお客様に再確認することに。
![10.220.64.36to10.220.64.37.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/8190bca9-607c-e321-fc77-039dfc43133d.png)


[TCP Retransmission](http://piyopiyocs.blog115.fc2.com/blog-entry-564.html) 

[Wireshark](https://knowledge.sakura.ad.jp/6286/)

結局SNPの設定変更で解決したそうだ。

