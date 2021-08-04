Wireshark。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/792410ed-215f-2018-f592-b3e42632f7f7.png)

## Wireshark

### ダウンロード
https://www.wireshark.org/#download

### ざっくり

http://raven.air-nifty.com/night/2009/08/wireshark-af0f.html

> Wiresharkでトレースファイルを読み込み、最初から最後までざっとスクロールし、
再送や欠落が大量に出ていないかどうかを確認する。
デフォルトでは黒背景に赤系統の配色で表示されるはずだ。
ここで着目するのは主に次の4種類である。

> TCP Out-Of-Order
TCP Dup ACK
TCP Previous segment lost
TCP Retransmission

> Analyze→Expert Infoを使うと、取得パケットの中でErrorやWarningが何個あるかを表示してくれるので便利である。

> 異常シーケンスが多い場合は、これをなくすことが最初のアクションである。例えば次のような対処がある。

> * ケーブルを交換してみる。
* ネットワークスイッチの別のポートにつないでみる。
* 交換可能なものであればトランシーバ（SFP）を取り替えてみる。
* ネットワークスイッチのログを確認する。
* サーバのログを確認する。

![10.220.64.36to10.220.64.37.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/8190bca9-607c-e321-fc77-039dfc43133d.png)


### トラブル例
[ネットワークの接続が20秒でタイムアウトしている](https://shimaji.exblog.jp/12854771/) ような状況が起こった。
タイムアウト繋がりで [AWSのこんな内容](https://aws.amazon.com/jp/premiumsupport/knowledge-center/s3-socket-connection-timeout-error/) も調べたり。逡巡したが、結局、Wiresharkで捕捉した情報を頼りにお客様に再確認することに、など等。


http://piyopiyocs.blog115.fc2.com/blog-entry-564.html

https://knowledge.sakura.ad.jp/6286/


## その他

https://hldc.co.jp/blog/2020/04/15/3988/

https://ichibariki.com/entry/2019/03/21/215442

以上寄せ集めのメモです。参考になればさいわいです。
