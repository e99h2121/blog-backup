https://www.apple.com/jp/mac-mini/

https://twitter.com/e99h2121/status/1450369328566595592?s=20

ということで**[Mac mini を頂いた！](https://blog.qiita.com/engineer-festa-presents-winners-2021/)**ので、どうやって使おうか試行錯誤中というポエムです。

https://ascii.jp/elem/000/004/048/4048192/

筆者、Appleはipod touchしか買わない相当な異端の趣向の者なので、突然ありがたきおもちゃを渡されおさるのジョージ並みに喜ぶもどう使うかもおサルレベルである...。ともかくいま家にあるmy gearで起動して繋いで作業用音楽流すくらいやりたいぞ

とりあえず夫からモバイルディスプレイを奪い手持ちのやっすいマウスとキーボードを繋いだら起動できた。「ぽわーん」(←起動音)

**音デカっ**、と思うが音量の変え方がわからない…
あとtwitterくらい見てやるかと思ったけど@マークどこ？っていうかこれ英語キーボードでしかないわ


## 試行錯誤

https://twitter.com/e99h2121/status/1451699974123626498?s=20

> 訳: M1 Mac miniの電源を入れた！でも、キーボードとモニター足りなくて、まだ日本語が打てねワロタwww


https://twitter.com/e99h2121/status/1451700938608054275?s=20


> 訳: 私Mac弱すぎワロタwww コピー＆ペーストの方法がわっかんね、音量もどうやって変えたらいいのかわっかんねww 　ハイ、私は多くのことを学ばなければなりません...


## SSH接続

夫からディスプレイを借り続けて恩を売られるのも困るのでどうやって普段遣いしようか試行錯誤する。まずSSHはここをこう。

https://twitter.com/e99h2121/status/1451706270528913417?s=20

`ssh e99h2121@192.xx.xx.xx`

なるほど。でも...GUI...


## VNC接続

> VNC 【Virtual Network Computing】

[VNC（Virtual Network Computing）とは - IT用語辞典 e-Words](https://e-words.jp/w/VNC.html)

https://support.apple.com/ja-jp/guide/mac-help/mchlp1657/mac

https://qiita.com/tenomoto/items/071fdc511eaa2dc42192

### VNCとRDP

https://gist.github.com/261shimizu/75e49beb2a6451561bdd46d612cb764b#file-gui-md

### Ultra VNC

https://www.uvnc.com/downloads/ultravnc.html

https://cloud-work.jp/windows_pc/windows/win2mac_vnc/#WindowsUltraVNC_Viewer

https://logical-studio.com/develop/mac/20170120-remoteconnectionfromwindowstomac/

### VNC Viewer

https://www.realvnc.com/en/connect/download/viewer/

ツールは色々ある、この辺はLINUXと同じよね。

### つないだ

`vnc://192.xx.xx.xx/`

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/17bef843-f95f-b207-2623-10750f2241e5.png)

映像に関して持ち腐れ感が否めないのでここからどうしようか考えどころである。でもモノから入って色々遊べるって贅沢で超楽しい。


## Docker for Mac

https://docs.docker.jp/docker-for-mac/install.html

## xrdpというやつでRDP的につなげられる

https://qiita.com/ChujoHiroto/items/76012b5847be04e5acee

https://brew.sh/index_ja

## 最近発表されて騒がしかったのはこっち

https://www.apple.com/jp/newsroom/2021/10/introducing-m1-pro-and-m1-max-the-most-powerful-chips-apple-has-ever-built/

https://www.itmedia.co.jp/news/articles/2110/21/news114.html

でもコスパ悪くないやつですよね。


## Mac mini、意外と持ち運べる...

https://pcmanabu.com/mac-mini-mobile/

https://twitter.com/toricls/status/1451543487275409409?s=20

## やはりMacって好きな人は大好き

https://twitter.com/e99h2121/status/1452082095350632448?s=20

## 続く

https://twitter.com/e99h2121/status/1451091760138969088?s=20

あらためて、本当に有難うございました。楽しく使います。
以上お礼含めた記録でした :smiley: 
