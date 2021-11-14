https://togetter.com/li/1480818

https://twitter.com/warpbtn/status/1237924624442068993?s=20

よくある「本当によろしいですか？」的UIの議論。

> システム: 「この操作は元に戻すことはできません。よろしいですね？」
> システム: 「よろしいですね？」

結果、脳死で**「押す」**ユーザー。押すなよ押すなよ問題とでも言いたい。押した結果、やはり押してはいけなかったことが発覚し結果インシデントが発生する...

GitHubとかでリポジトリ削除する周りはこんな感じになっていますよね。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/a58908e2-735e-0251-b4e6-a1b02e2c5eb0.png)
で、ちょっと手間かけないと本当には消せない。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/1743922f-6e23-a16e-90e0-7d1e301f8d4f.png)
これはまあ親切なほうの設計... でもUIの世界ムズカシイ。

https://www.reddit.com/r/UI_Design/comments/llxuh3/danger_zone_we_need_more_of_this/


## 対策

自分の周りでも、と身近なプロダクトの話を書きたいところだが省略。

https://note.com/flyaway/n/n7e446a4fd8e8

> 誤操作は個人の問題ではないと捉え、総合的な対策を立てる

しかないのかなあと思いつつ。かろうじて思い出したのは以下です。例えばこの音楽が流れる社の給湯器。

<iframe width="962" height="541" src="https://www.youtube.com/embed/rrNLJcWClS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

お風呂を沸かすボタンを押す時に、「お湯はりをします　**お風呂の栓の閉め忘れに　注意してください**」と言いますね。
<iframe width="962" height="541" src="https://www.youtube.com/embed/hxYL8_8oC6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

警告はされている。が、それでも人は栓を閉め忘れるし、「お風呂の栓が抜けてるかも」も機械に教えてほしいと言う。

[「お風呂の栓が抜けてるかも」も機械に教えてほしい？　メーカーの回答は… (2019年11月23日) - エキサイトニュース](https://www.excite.co.jp/news/article/Sirabee_20162203832/)

> 担当者は、「エラーメッセージが流れるまで、冬場だと約10～15分かかる。これ以上時間を短くすることは**今の技術では不可能。**一般的にお湯の量を160リットルと設定すると、その量がたまっていないということを、お湯が出ている場所で感知している。つまり、お湯が出ている場所まで届くと、その吹き出し口でお湯を循環させる。お湯が設定量排出されているのに、吹き出し口に届いていなければ、音声とエラー番号が出る仕組みとなっている。最新の機種では、水圧でお湯の量を感知しているが、警告までの時間は変わらない



## 結論

15分で被害がおさまっているなら御の字ではとシステム目線では言いたいような、またここまでしているのだからお風呂の栓で失った水道代くらい、とも思うが、「栓を閉めないとお風呂沸かしボタンを押せない」ような画期的なUIをつくるかとか。

[風呂の栓の忘れ対策は、何かありますか？ - ウチはオール電化で、... - Yahoo!知恵袋](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12167726922)
> 機械が質問をしているのですから、愚直に確認して答えてやる。
> しかも声に出して言うのは、良いとおもいます。

なんていうユーザー側でのトレーニングも解決策かもしれない。風呂の栓を締めることを身体で覚える。あるいは担当者固定とか...。

結局「総合的な対策を立てる」式の話をしてしまいそうだが、押すなよ押すなよ、難しいんだよなあと思った。ポエムとして以上です。
