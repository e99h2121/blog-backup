[Infrastructure as Code ―クラウドにおけるサーバ管理の原則とプラクティス](https://www.amazon.co.jp/dp/4873117968)
[O'Reilly Japan - Infrastructure as Code](https://www.oreilly.co.jp/books/9784873117966/)

![](https://images-na.ssl-images-amazon.com/images/I/51YYyQ6-t6L._SX389_BO1,204,203,200_.jpg)

[「Infrastructure as Code クラウドにおけるサーバ管理の原則とプラクティス」を一読して、その要点 #Cloud - Qiita](https://qiita.com/e99h2121/items/613b9fba42f5ffe39f1a) の通り、一読したはずだったのだが、まるで分かっちゃいなかったので [Amazon.co.jp: 詳解 Terraform 第3版 ―Infrastructure as Codeを実現する : Yevgeniy Brikman, 松浦 隼人: 本](https://www.amazon.co.jp/dp/4814400527) とともに再読した。

## IaC のメリットとデメリット

[インフラリソース構築(IaCとGUI)について思う事](https://zenn.dev/haggar/articles/7021f030da13f2)
- メリット ... 同じような設定を用意する事が容易になること
- デメリット ... 時間がかかること

踏まえ、今回は以下も合わせてつまみ読みしている。

## 詳解 Terraform 

[O'Reilly Japan - 詳解 Terraform 第3版](https://www.oreilly.co.jp/books/9784814400522/)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/cabea26c-b91c-7dd6-c462-63c1095c29e0.png)


[新刊「Terraformの教科書」の要点をまとめてみた](https://zenn.dev/iret/articles/b9322ea6a345a7)
[詳解 Terraform（第3版）まとめ](https://zenn.dev/koizumi7010/scraps/2ba321716a072e)
[Terraform の基本的な仕組みから実践まで深く学べる一冊「詳解 Terraform 第3版」を読んだ - kakakakakku blog](https://kakakakakku.hatenablog.com/entry/2023/11/20/094234)

> 開発組織に IaC 文化が浸透していれば普通のことに思えるかもしれないけど，今後 IaC を推進するなら Terraform を使うかどうかに関わらず読んでおくと良いという内容が凝縮されていた👌 特に Terraform コードを GitHub などでバージョン管理をして，プルリクエストを使ってレビューをして，最終的にリリースをするなど，完璧に同じではないけど，アプリケーション側で実現しているライフサイクルのベストプラクティスをインフラ側にも適用しようという意図にも読み取れる

https://github.com/brikis98/terraform-up-and-running-code/tree/3rd-edition

>IaCを採用することは大きな投資であり、想定される利点だけでなく問題点も考慮する必要がある

>チームがIaCを採用するべきだと上司を説得したいなら、あなたのゴールはIaCに価値があることの証明ではなく、その時間であなたがやるはずだったどんな仕事よりも、IaCの採用が大きな価値を持つと示すこと

>ある開発者がTerraformを発見し、それによってできることに刺激を受け、熱い気持ちと興奮を抱えて会社に来て、皆にTerraformを紹介し、そして上司が「ダメだ」と言う
>開発者はがっかりして、やる気をなくしてしまいます。何もかも自動化してしまえるというのに、どうして皆これに価値を感じないんだ

>たくさんのバグを回避できるはずなのに！ 他にどんな方法で技術的負債の一挙返済ができるっていうんだ？ なんだって皆そんなに分からず屋なんだ？
>ここでの問題は、この開発者はTerraformのようなIaCツールを採用することの利点だけしか見えておらず、コストを見ていないことです。


[Terraform インストールしてリソース グループ作成するまで #Azure - Qiita](https://qiita.com/e99h2121/items/37b472740c9e977b408f)
[Terraform で Linux VM 作成して SSH するまで #Azure - Qiita](https://qiita.com/e99h2121/items/00781afec389a8b8e85e)

## IaC のメリット (再び)

[O'Reilly Japan - Infrastructure as Code](https://www.oreilly.co.jp/books/9784873117966/)
> Infrastructure as Codeは、コンピュータはその最も得意とすること（自動化）に集中し、開発者はその最も得意とすること（コーディング）に集中できる選択肢を提供します。

[OSSの運用自動化ソフト 注目の7製品まとめ（Chef/Puppet/Pulmi編）：注目のIaC（Infrastructure as Code）ソフトウェア7製品徹底比較　2022年版（2） - ＠IT](https://atmarkit.itmedia.co.jp/ait/articles/2212/28/news009.html)

以上です～
