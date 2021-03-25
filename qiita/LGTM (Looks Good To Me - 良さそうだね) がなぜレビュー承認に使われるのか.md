## 結論
**LGTM**はGoogleでのレビュープロセスにおけるメールのやり取りが発祥のようです。
現在は [Google's Engineering Practices documentation - The Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html) で標準規約となっているようだよ。

## はじめに
ソースコードレビュー時に使われる[LGTM](https://qiita.com/fuku68/items/2bb0740b31ca940c325a)。**L**ooks **G**ood **T**o **M**eの略であるというところまではQiitaを使う方々にはいわずもがなでしょう。

しかしこの言い回し日本語に訳しても「自分的には良さそうに見えます」というくらいの、随分と控えめな言い回しに聞こえます。日本企業のワークフローにありがちな上長の「承認！」的ニュアンスからは遠く、人様に提供するソースコードのレビューにもかかわらず何故そんな軽いノリなのだろうか等と思うことはありませんでしょうか。

なぜレビューで「LGTM」という言葉が使われるようになったのか。LGTMをググってもLooks Good To Me の略だよどまりで、歴史を解説している日本語サイトが見つからない。
なので調べてみました。


## 日本語サイトにおけるLGTMの歴史的説明

[LGTM! チャットやGitHubでよく見る英略語ってこんな意味](https://blog.sixapart.jp/2016-10/lgtm-github.html)
> GitHubを見ていると、「LGTM」や「SSIA」など、いろんな英略語を見かけます。チャットと同様に、素早いコミュニケーションのために、タイプ量を減らして言いたいことを伝える省略語がたくさん生まれているようです。

タイプ量を減らすのはわかるが、それだけ？ 少しもどかしい。
唯一求める答えに最も近かったのが以下Quora。

Q. [チーム開発においてOKを出すことを「LGTM」と教えていますが、実際の現場でそのように言うことはありますか](https://jp.quora.com/bou-puroguramingu-suku-ru-de-chi-mu-kaihatsu-nioite-OK-wo-dasu-koto-wo-LGTM-to-oshie-tei-masu-ga-jissai-no-genba-de-sonoyouni-iu-koto-ha-arima-suka)
> このLGTMというジャーゴンはグーグルが発祥で、グーグル社内ではとてもよく使われています。

> LGTMはもともとグーグル社内のエンジニアのワークフローにおける用語でした。この会社では、ソフトウェアエンジニアが作ったパッチは、いったんだれか同僚にレビューしてもらうことになっています。それが良しとなればプロセスを先にすすめることになりますが、そのためのキーワードとしてlooks good to me （いいと思う）を略したLGTMという語を使うことにしたのがはじまりです。実際にはほかにもapprovalのプロセスがあったりすることもありますが、すくなくともLGTMは必要であるというフローが確立しています。

グーグル、やはりグーグルなのか...？

## 上記をヒントに見つけた説明

さてQuoraの日本語説明をヒントにGoogりました（英語のほう）。
まずヒットするのが以下。Githubにも公開されている冒頭のGoogleコードレビュー標準です。

### [LGTMであることを十分時間をかけレビューすること（github, Googleコードレビュー標準）](https://github.com/google/eng-practices/blob/eaff1ef39cccbea085debf39809fc903c4786dab/review/reviewer/speed.md#fast-responses-responses)
> It is important that reviewers spend enough time on review that they are certain their "LGTM" means "this code meets our standards." However, individual responses should still ideally be fast.

ざっくり翻訳：
> レビュアーは「LGTM」が「このコードは我々の基準を満たしている」と確信できるように、レビューに十分な時間を費やすことが重要です。**しかし個々のレスポンスはやはり理想的には迅速であるべきです。**

つまり、やはりLGTMは「良いんじゃね？」などという軽いノリで行うものではない。
一方でレスポンスは迅速にとも書いている。

### [LGTM (Knowyourmeme)](https://knowyourmeme.com/memes/lgtm)
もう少し調べると以下を見つけました。

> Origin
While the story behind the coinage of LGTM remains murky at best, the earliest known use and explanation of the acronym can be traced to a feature summary of Google Mondrian, a peer-review software application for programmers, posted by Niall Kennedy[3] on November 30th, 2006. In explaining the most common method of peer-review, Kennedy mentions how reviewers would typically type in "LGTM" to express their approval, especially when communicating via email.

> Previous to Mondrian code review was conducted largely over e-mail using Google command-line wrappers built on top of Perforce. A developer could initiate a code review from within the g4 mail tool, which would fire off an e-mail and begin a review thread. When the developer receives a response of “looks good to me,” or lgtm for short, they could proceed to checkin.

ざっくり翻訳：
> LGTMの造語の背景にあるストーリーはよくわからないままですが、最初のこの語の使用とその説明は、2006年11月30日にNiall Kennedyが投稿した、プログラマーのためのピアレビュー・ソフトウェア・アプリケーション「Google Mondrian」の要約に辿り着くことができます。Kennedyは、ピアレビューの一般的な方法を説明する中で、**特にメールでやりとりする際に、レビュアーが承認を表現するために「LGTM」と入力することに触れています。**
「Mondrian」以前のコードレビューは（中略）主にメールで行われていました。開発者はg4メールツール内からコードレビューを開始、それによってメールが送信され、レビュースレッドが開始されました。開発者は、「私には良さそうだ」、略して **LGTM という応答を受け取ると、チェックインに進むことができます。**

なるほどこれは大きなヒントです。レビューアプリケーション導入以前のコードレビューはメールで行われていた。レビュアーが承認を表現するために「LGTM」という言葉を用いたようです。LGTMが「良いんじゃないの」という言葉以上に記号化していったわけですね。


### [Google Mondrian: web-based code review and storage](https://www.niallkennedy.com/blog/2006/11/google-mondrian.html)
> Design-level reviews are often conducted by e-mailing around Word documents or editing a team wiki. Recently some design reviews have moved onto an internal version of Google Docs.

ざっくり翻訳：
> デザインレベルのレビューは多くの場合、Word 文書をメールでやり取りしたり、チームの wiki を編集したりして行われます。最近では、いくつかのデザインレビューは Google Docs インターナル版に移行しています。

Mondrian、気になりますね。見つけましたよ。
### これが[Mondrian](https://www.youtube.com/watch?v=sMql3Di4Kgc)
[![Mondrian](http://img.youtube.com/vi/sMql3Di4Kgc/0.jpg)](http://www.youtube.com/watch?v=sMql3Di4Kgc)
このようなモノらしい。
解説：https://blogs.itmedia.co.jp/morisaki/2008/05/google-4641.html

[Mondrianのオープンソース版「Rietveld」](https://www.moongift.jp/2008/05/rietveld/) で紹介されているように利用可能。
Github：https://github.com/rietveld-codereview/rietveld

以下のように評価される。
[Gerrit Code Review for Git](https://gerrit-review.googlesource.com/Documentation/)
https://gerrit-review.googlesource.com/Documentation/config-labels.html
>The range of values is:

>-2 This shall not be merged

>The code is so horribly incorrect/buggy/broken that it must not be submitted to this project, or to this branch. This value is valid across all patch sets in the same change, i.e. the reviewer must actively change his/her review to something else before the change is submittable.

>Any -2 blocks submit.

>-1 I would prefer this is not merged as is

>The code doesn’t look right, or could be done differently, but the reviewer is willing to live with it as-is if another reviewer accepts it, perhaps because it is better than what is currently in the project. Often this is also used by contributors who don’t like the change, but also aren’t responsible for the project long-term and thus don’t have final say on change submission.

>Does not block submit.

>0 No score

>Didn’t try to perform the code review task, or glanced over it but don’t have an informed opinion yet.

>+1 Looks good to me, but someone else must approve

>The code looks right to this reviewer, but the reviewer doesn’t have access to the +2 value for this category. Often this is used by contributors to a project who were able to review the change and like what it is doing, but don’t have final approval over what gets submitted.

>+2 Looks good to me, approved

>Basically the same as +1, but for those who have final say over how the project will develop.

>Any +2 enables submit.

>For a change to be submittable, the latest patch set must have a +2 Looks good to me, approved in this category, and no -2 Do not submit. Thus -2 on any patch set can block a submit, while +2 on the latest patch set can enable it.

ざっくり翻訳（途中省略）：

> 値の範囲は以下の通りです。

> -2 これはマージしてはならない

> -1 このままではマージされないことを望みます。

> 0 スコアなし

> +1 **自分的には良さそう**だが、他の人が承認しなければならない。

> +2 **自分的には良さそう、承認。**


> +2を得ることで提出を可能にします。
> ある変更を可能にするためには、+2が付いていなければなりません。


## まとめ
LGTMというのはGoogle内のソースコードレビューでメールをやり取りする中で「LGTM（良さそうだね）」とスムーズに確認しようとしたプロセスが起源であるという説が有力。

現在は[LGTM画像ジェネレータ](https://lgtmoon.herokuapp.com/) などなどで楽しまれるまでに至っている。

[Qiita記事についている同名のそれも同じ](https://blog.qiita.com/like-to-lgtm/) でたまに人に「LGTMをお願いします」だとか「LGTMをいただけると励みになります」という言い回しをしている記事を見かけ、それLGTMの意味わかっとんのかーい、という気持ちになることがあります。つまり「お願いします」と「乞う」モノではなく本来、良いものを作ることで「良いね」と思ってもらえることが趣旨なので書き手のすべきことはシンプルに「だったら良いものを作れ」ということになるわけですね。

以上、Googleから発祥したらしいLGTMに思いを馳せるのはいかがでしょうかという話でした。
