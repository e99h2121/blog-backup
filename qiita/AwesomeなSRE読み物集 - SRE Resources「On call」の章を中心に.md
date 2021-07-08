**[本当にawesomeなGitHubのawesomeリスト](https://qiita.com/e99h2121/items/4b5e3ff9001ede108fa9)** の、Awesome SRE - Site Reliability Engineering Resources

https://github.com/dastergon/awesome-sre/
> Awesome Site Reliability Engineering Awesome
>A curated list of awesome Site Reliability and Production Engineering resources.

https://sre.xyz/#on-call


![incident](https://storage.googleapis.com/gweb-cloudblog-publish/images/incident-command-12655.max-700x700.PNG)
画像: https://cloud.google.com/blog/products/gcp/incident-management-at-google-adventures-in-sre-land


うち、On call (待機対応) の章。おそらく一番ツラいところなのではと思い読みかじってみたが、人間味あふれる内容と出会ったので書いておく。

## [Who's On Call?](https://www.susanjfowler.com/blog/2016/9/6/whos-on-call)

> Good software engineering is about responsibility. It's about making mistakes, taking responsibility for those mistakes, and learning from them...

> 優れたソフトウェアエンジニアリングとは、責任を負うことです。ミスを犯し、そのミスに責任を持ち、そこから学ぶことです。それはオーナーシップのことです。
私が見てきた限りでは、オンコール業務（および運用業務）に責任を持つ開発チームは、最高のコードを書きます。彼らは、最も安定した、パフォーマンスの高い、信頼性の高いアプリケーションやシステムを構築します。その理由は明白です。**コードに混入したバグが原因で障害が発生し、真夜中に起こされるとしたら、可能な限り最高のコードを書き、障害が発生する前に可能な限りのバグを捕らえようと懸命に努力するはずです。**


## [No More On-Call Martyrs](https://sysadvent.blogspot.com/2016/12/day-6-no-more-on-call-martyrs.html)

> Consider the following:

> 1. それは新しい問題なのか？それとも、何度も見たことのあるような同じ問題と同じ解決策なのか？
2. 同僚に「昨日の夜、電話で呼び出された」と伝えたとき、彼らの反応は？笑って話をしてくれるのか、それとも心配してくれるのか。
3. 上司にオンコールのシフトが荒れていることを伝えると、他の人を回そうとするか？彼らはあなたに罪悪感を与えるか？
4. あなたのマネージャーもオンコールですか？彼らは休日のシフトをカバーしたり、オーバーライドを申し出たりするか？あなたの負担を理解してくれるか？

>毒のあるオンコール文化の中で働いている可能性。このようになる必要はありません。オンコール・ローテーションにはより健全な方法があります。
>
> **1. モニタリングとアラートを改善し、実行可能なことだけをインテリジェントな方法で通知する。The Art of Monitoring」を参考に。
2. アラートの疲労に関するルールを設ける。Google SREの本では、12時間のシフトで週2度以上は多すぎるとされている。
3. オンコールの仕事に対して、金銭的または時間的な補償があることを確認し、それが経営陣によって支持されていることを確認する。**

> ここまでの手順を読んで「それは無理だ」と思った人には、1つだけアドバイスがあります：別の仕事に就くことです。あなたは今の場所では評価されていませんし、もっと良い仕事ができるはずです。
オンコールは必要悪かもしれませんが、それがあなたの人生のすべてであってはなりません。クラウドプラットフォームやInfrastructure as Codeの時代には、運用エンジニアは、知的で、素晴らしいものを作る能力があります。ただ火事を消すのではなく、自分自身とシステムをより良くすることに誇りを持つことが許されるべきです。
自分のキャリア開発と人生を楽しむことに集中できるようにしましょう。



## [Adventures in SRE-land: Incident management at Google](https://cloud.google.com/blog/products/gcp/incident-management-at-google-adventures-in-sre-land)

画像: https://cloud.google.com/blog/products/gcp/incident-management-at-google-adventures-in-sre-land
![fire](https://storage.googleapis.com/gweb-cloudblog-publish/images/incident-command-24uhs.max-200x200.PNG)

> As part of my on-call training, I was trained on the principles behind Google’s incident management protocol, and the internal tool that we use to facilitate incident response. The incident management protocol defines roles and responsibilities for the individuals involved. Earlier I asserted that Google SREs have a lot in common with other first responders. Not surprisingly, our incident management process was inspired by, and is similar to, well established **incident command protocols** used in other forms of emergency response.

> 当然のことながら、Googleのインシデント管理プロセスは、他の形態の緊急対応で使用されている確立された**インシデントコマンドプロトコル**にヒントを得ており、それに類似している。

こちらがそのインシデントコマンドプロトコル。(ICS ... Incident Command System)

https://training.fema.gov/emiweb/is/icsresource/



## [It's ok to say what's ok](https://gds.blog.gov.uk/2016/05/25/its-ok-to-say-whats-ok/)
> ～してもいいんです集:

>- "I don't know "と言う
- より明確な情報を求める
- 具合が悪いときは家にいる
- わからない」と言う
- 頭字語の意味を聞く
- なぜ、どうして、と聞く
- 物事を忘れる
- 自己紹介をする
- チームを頼る
- 助けを求める
- すべてを知っているわけではない
- 静かな日がある
- 話をしたり、冗談を言ったり、笑ったりするために、騒がしい日もある。
- ヘッドホンをつける
- 忙しいときは "No "と言う
- 間違いを犯す
- 歌う
- ため息をつく
- 時間外にメールをチェックしない
- 時間内にメールをチェックしない
- Slackを使う
- 歩いて行って、誰かに面と向かって聞く
- 他の場所に行って集中する
- 他の人の仕事にフィードバックする
- 苦手なことに挑戦する
- 誰かがコーヒーを持ってきてくれたら、イエスと言う
- お茶を飲む
- おやつを食べる
- 机が散らかっている
- 机の上を整理整頓する
- 自分の好きなように働く
- 経営者に直してもらう
- 休みの日がある
- 休みの日がある（2回め）


## [10 Steps to Develop an Incident Response Plan You’ll ACTUALLY Use](https://engineering.salesforce.com/10-steps-to-develop-an-incident-response-plan-youll-actually-use-6cc49d9bf94c)

>1. Define what an “incident” is according to your organization

> **組織にとっての「インシデント」とは何かを定義する**


## その他

https://github.com/upgundecha/howtheysre

> A curated collection of publicly available resources on how technology and tech-savvy organizations around the world practice Site Reliability Engineering (SRE) 

https://cloud.google.com/blog/ja/products/devops-sre/evaluating-where-your-team-lies-on-the-sre-spectrum


なんてものもあってSRE読み物は尽きない... 
https://sre.google/books/ もリンクを張っておく。以上箇条書きながら参考になればさいわいです。
