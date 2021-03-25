タイトルで結論を書いてしまいましたが、Slackが既読機能のリクエストを受けたのが2014年頃。以来頑なにそれを現在まで実装しないという、製品哲学にある姿勢を色々読んでみたのでその翻訳まとめ等々です。

Slackに関する日本語記事：
[テレワーク支えるSlackに｢既読表示・予約投稿がない｣理由。共同創設者が語る日本市場](https://www.businessinsider.jp/post-208559) 。
こちらではその理由に

> ｢検討したことはある｣としつつも、既読表示機能については｢いわゆる“既読スルー”など、既読表示によって利用者がプレッシャーを感じてしまうのではないか｣、予約投稿については｢いつでも送信できる、受け手は通知をオフにできるというSlackの強みに対して本当に必要か｣という課題があるという。

とある。とはいえ、顧客要件にどう応えるかがアプリケーション設計というもの。ビジネス上で相手にメッセージが読まれているのか知りたい、は普通のビジネスマンには必須要件な気もします。何故搭載しないの？

## 結論
ビジネスでは**「相手がリアクションしないと分かったことにならない」**。だから既読ではなくリアクションでのやりとりを推奨させたい、という意図。とのこと。

SlackHQの回答：
https://twitter.com/SlackHQ/status/1270790491748040705?s=20

> If you mean something like automatic read receipts, that's on our radar but not something we're actively moving towards. Some folks leverage emoji reactions like :eyes: for a more active read receipt.

ざっくり翻訳：
> 利用者の中には、より積極的な既読の意のために絵文字リアクションを活用している人もいます。一部の人は :eyes: のような**絵文字のリアクションを利用して、より積極的な既読を実現しています。**

だからリアクションを活用してね、が（将来変わるかもしれないとかは思っちゃうけど、現状の）答え。
https://slack.com/intl/ja-jp/blog/productivity/some-of-the-ways-we-use-emoji-at-slack

[既読スルー](https://ja.wikipedia.org/wiki/%E6%97%A2%E8%AA%AD%E3%82%B9%E3%83%AB%E3%83%BC) が社会問題と言われているLINEと比べると、個人向けと仕事向けという成り立ちの違いもあると言ってしまえるかもしれないがそれぞれ違うスタンス。その詳細を見てみます。

先に、日本語記事はたくさんあるのでこの記事では触れないため書いておきますが、LINEが既読機能を搭載しているのにはこんな理由があるようです。Wikipedia: [既読機能](https://ja.wikipedia.org/wiki/%E6%97%A2%E8%AA%AD%E3%82%B9%E3%83%AB%E3%83%BC#%E3%80%8C%E6%97%A2%E8%AA%AD%E6%A9%9F%E8%83%BD%E3%80%8D) を参照のこと、以上。



## Slackに関する質問
### Blog
Slackの既読機能には問題があるとの記事が簡単に見つかる。
https://holopod.com/blog/slack-read-receipts
> Slack read receipts have challenges 
There are no engineering challenges behind this feature that’s keeping it from getting into our hands. The real reason is the user experience. Once this feature is out, Slack users would be forced to: 

> Feel obliged once you read someone’s message 
If you don’t reply after reading someone’s message, the sender might assume you’re ignoring them


ざっくり翻訳：
> 
> 技術的な課題はありませんが、それが私たちの手に渡らないようにしています。本当の理由はユーザーエクスペリエンスにあります。

>誰かのメッセージを読むと返信の義務感を感じてしまう。
相手のメッセージを読んだ後に返信をしないと、送信者はあなたが相手を無視していると思い込んでしまう可能性がある。

おーなんだかこれ、既読スルー問題に思えませんか？
[既読スルー](https://ja.wikipedia.org/wiki/%E6%97%A2%E8%AA%AD%E3%82%B9%E3%83%AB%E3%83%BC) :Wikipedia
>「既読機能」は、送信側にとってメッセージが相手に伝わったことが一目で確認できる、「読んでくれたのか否か」という心配が解消されるメリットがある一方で、送信しても「既読」にならない場合に「なぜ読んでくれないのか」、「既読」になっても返事が無い場合に「無視されているのではないか」などの孤独感や不安を誘発する一因となっており、そのことからメッセージの受信側にとっても「すぐに返信をしなければいけない」というプレッシャーを生じさせているとされ、双方のコミュニケーションの負担になっていると報じられている

つまり既読疲れ、日本、日本以外、関係ないのかもしれない。

### Quora
質問はQuoraにもある。
「Slackで同僚にメッセージを送信したときに、受信者にメッセージが読まれたかどうかを確認することはできますか？」
[If I send a message to my colleagues on Slack, can I check if the message has been read by the recipient or not?](https://www.quora.com/If-I-send-a-message-to-my-colleagues-on-Slack-can-I-check-if-the-message-has-been-read-by-the-recipient-or-not)

> Unfortunately you can’t — there is no ‘read receipt’ feature in Slack yet.
The feature has been requested by many users and it is definitely on their radar: see this Tweet thread (and consider adding your vote, too).

つまり..
> 残念ながらできません - Slackには既読機能はありません。
この機能は多くのユーザーからリクエストされており、間違いなく彼らの「レーダー」にあります: ツイートスレッドを参照してください

ということで多くのやり取りはSlack大本営のツイートを見るとよくわかるという話。見てみよう。


### Twitter 

#### 最初のSlackHQの反応は2014年8月27日
https://twitter.com/SlackHQ/status/504407968150851585?s=20

> Only missing a 'last messages read by ...' but search and integrations for git, docs, pictures... are great!

「メッセージが読まれてるみたいなのがあるとGreatだな～」
に対し、Slackさんの返答
> Planning on something like read receipts. 🎉 Thank you for the kind words! 
> 「Read receipt」(既読機能) みたいなことを計画しています。🎉 

この時点ではやるともやらないとも、むしろやりそうな印象。

#### 2016/5/2
https://twitter.com/SlackHQ/status/726818430817570816?s=20
> This is a complex request, and we're still debating it. Thanks for your patience!
「複雑な要望なので、まだ議論中です。お待たせしております。」

だがそれが約2年たっても議論中？流石にみんなツッコミ。

#### その後 2016/7/21
https://twitter.com/SlackHQ/status/755879572495826944?s=20
> It's still in the planning phase! We'll get to it when the time is right. 

「まだまだ企画段階です！」

https://twitter.com/SlackHQ/status/762608549679751168?s=20
> Reactions might be useful for now if you can encourage use of them for acknowledging messages?

「リアクションは、メッセージを確認するために使用を促すことができれば、今のところ役に立つかもしれませんね？」
と、ここへきてリアクション機能をお勧めするスタンスに。

#### 2017/1/11
https://twitter.com/SlackHQ/status/819128224345161728?s=20
> It's on it, we promise! Stay tuned!

「ステイチューン！」

#### 2017/3/18
https://twitter.com/SlackHQ/status/843075086022299648?s=20
> We hoped emoji reactions would address this need. Ask for a reaction to confirm important messages have been read, perhaps?

「私たちは、絵文字リアクションがこのニーズに対応できることを期待しています。重要なメッセージが読まれたかどうかを確認するためには、リアクションを求めてみてはいかがでしょうか？」
その1年後も、あまり変わらない。

#### 2017/8/17
https://twitter.com/Cosmic9Studios/status/898086429884129280?s=20
> No need to wait any longer. Our team has created a read receipt extension for slack! Join our beta now: http://slackreadit.com
> 待つ必要はありません。私たちのチームは、slackのための既読拡張機能を作成しました! 

と、ここへきてサードパーティの何がしか (slackreadit.com) がSlack拡張を作ろうとしたようだ。混沌。slackreaditは現在アクセス不能だが...

#### 2018/11/27
https://twitter.com/SlackHQ/status/1067344114373574656?s=20
> We are no longer planning to implement read receipts. We understand that some folks would like this, so your feedback has been shared. For now, we recommend people use emoji reactions on messages instead. 

再びSlackHQ。
「機能を実装する予定はありません。これを希望される方がいることは理解していますので、あなたのフィードバックは共有されています。今のところ、その代わりにメッセージに絵文字リアクションを使うことをお勧めしております。」

https://twitter.com/SlackHQ/status/1068182393708781568?s=20
> Afraid not, Thomas. Other things crept up on our priority list. We're happy to nudge the team here for you, though.

「他にも優先事項があってね～」との回答。


#### 2019/1/26 
https://twitter.com/SlackHQ/status/1088955644714065920?s=20
> Hey there! Afraid we don't have plans for read receipts at this time, however we hear you. We'll share your feedback with our team.

「フィードバック承りました」。

#### 2020/10/22
https://twitter.com/SlackHQ/status/1318986050056933378?s=20
> We're not planning on implementing an automatic read receipts feature at this time but many teams see success with a manual read receipts feature utilizing emoji:

昨年秋ごろ。だいぶ最近のところまで来ましたね。

「現時点では既読機能の実装は予定していませんが、多くのチームは絵文字リアクションを利用した手動でそれを達成しています。」

で、以下の記事を紹介している。

#### Some of the ways we use emoji at Slack
**Slack で絵文字を活用する方法**
https://slack.com/intl/en-ca/blog/productivity/some-of-the-ways-we-use-emoji-at-slack
https://slack.com/intl/ja-jp/blog/productivity/some-of-the-ways-we-use-emoji-at-slack

:laughing:  :tada:  :bow:  :thumbsup:  :clap: 

はい、つまりここで冒頭の結論です。結局現在まで **既読ではなくリアクションでのやりとりを推奨しているのです。**


## Slackに関する記事
核心に迫る話が実はここで読めました。
Jun 13, 2019 の記事

### [Slack’s Most Requested Feature is Bad for Business](https://medium.com/swlh/slacks-most-requested-feature-is-bad-for-business-4998dd2d0865) 
既読機能は**「Most Requested Feature」（最もリクエストを受けている機能）**である。しかしビジネスに良くないと言われている。

> But what about business?
Remember when I said:
>> If you see someone’s read your message but hasn’t replied, … Maybe they were driving, cycling, in the middle of a conversation?

> That’s a big no-no at work, right? Suddenly when you’re not replying to a message, well… the only logical thing to assume is that person is not working! Hell, maybe they’re not even at their desk! (this becomes a bigger issue if the person is … working from home!)
Hence, the read receipts! A subtle but effective way of checking up on your people.

> Automating activities on behalf of the user without user control can create these situations in which people start expecting specific user behavior. 

ざっくり翻訳:

> （既読機能はドライブしていたり、サイクリングしていたり、会話を楽しんでいるときのユーザにふさわしくないという意見に対し）ビジネスに関してはどうか？

お仕事している時間に、サイクリングしてるとかありえないわけ。
問題は、そうであるにもかかわらず、何故既読機能が搭載されないか。

「ユーザーに代わって活動を自動化することは、人々がユーザーの行動を期待し始める状況を作り出してしまう可能性があります。」つまり歪んだ期待がユーザの行動を余計制限するとの説。


> Slack has multiple solutions though: you can star messages, pin them to the channel, or even easily set reminders! Need to know if someone read a message? Ask them to add an emoji reaction!
This solution is ideal. It puts the responsibility with the receiver. It doesn’t automate the process, so something “read” is really “read” and “processed”. (and if it wasn’t, at least now you have proof the person is.. slacking, pun intended)
Confirmation of a message received should be part of the conversation. Just like I need to ask my five year old daughter several times to confirm she heard what I said. Nope, I cannot assume she heard me, no matter how much she nods…

> メッセージにスターをつけたり、チャンネルにピン留めしたり、リマインダーを簡単に設定したりと、Slackには様々な解決策があります。**誰かがメッセージを読んだかどうか知りたい？相手に絵文字リアクションをしてもらいましょう!**

この解決策が理想的であるとこの記事では述べられている。何故なら、
**受信者に責任を負わせる。プロセスを自動化するわけではない、それはむしろ「読まれた」ものは本当に「読まれた」「処理された」ことになる。** もしそうでなかった（リアクションが得られなかった）場合、少なくとも今、あなたはその人が...「あるいみ怠け者である」という証拠にもなる。つまりビジネスだからこそリアクション機能が大事説。

> 受信したメッセージの確認は会話の一部であるべきです。5歳の娘に「わかった？」と私の言ったことを聞いたかどうか確認する必要があるのと同じように。いや、彼女がいくらうなずいても、私の話を聞いたとは思えないんだけど...

笑。まあ**リアクションこそ既読機能の本来目指すところじゃね？という意見**が背景ということが分析されている。そしてこれが目下、Slackの結論なのかなという感じなのです。つたない翻訳の解説で甚だ恐縮ですが少しでもこの長年の経緯が伝わったでしょうか！

## まとめ

Slackユーザの皆様は既読機能、それでも欲しいでしょうか、以上を読んでやはり要らないと思うでしょうか。製品を作っていると時に相容れない要望をお客様から受けることはあります。

そういえばSlackの作法自体、結構流派がありますね、と過去に自分のまとめた駄文を見て思う。
**[Slack仕草](https://qiita.com/e99h2121/items/6a6f06cfaf4a74fca0f3)**

そんな多種多様なSlackユーザから、リクエストを受けた時にどう答えるか、両方にこたえるのか優先順位をつけるのかあるいはまったく答えないのか。そのあたりが製品を作るものとしての醍醐味であり難しいところであり悩まされるところですよね。Slackが今後この「既読機能」にこのスタンスを貫くのか、製品開発として非常に興味深く読みました！
